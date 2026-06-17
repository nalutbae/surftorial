import { createClient } from "@/lib/supabase/server";
import { getPrisma } from "@/lib/prisma";
import { unauthorizedResponse, forbiddenResponse } from "./api";
import type { Profile } from "@prisma/client";
import type { User } from "@supabase/supabase-js";

export async function getAuthUser(): Promise<User | null> {
  // DEV: Supabase 없이 가상 admin 사용자 반환
  if (process.env.NODE_ENV === "development") {
    const prisma = await getPrisma();
    let admin = await prisma.profile.findFirst({
      where: { role: "admin", deletedAt: null },
    });
    if (!admin) {
      admin = await prisma.profile.create({
        data: { id: crypto.randomUUID(), role: "admin", displayName: "관리자" },
      });
    }
    return {
      id: admin.id,
      email: "admin@localhost",
      aud: "authenticated",
      role: "authenticated",
      created_at: admin.createdAt.toISOString(),
    } as unknown as User;
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getProfile(): Promise<{ user: User; profile: Profile } | null> {
  const user = await getAuthUser();
  if (!user) return null;

  const prisma = await getPrisma();
  const profile = await prisma.profile.findUnique({
    where: { id: user.id },
  });

  if (!profile) return null;
  return { user, profile };
}

export async function requireAuth(): Promise<
  | { data: { user: User; profile: Profile } }
  | { error: ReturnType<typeof unauthorizedResponse> }
> {
  const result = await getProfile();
  if (!result) return { error: unauthorizedResponse() };
  return { data: result };
}

export async function requireRole(role: "instructor" | "admin") {
  const result = await getProfile();
  if (!result) return { error: unauthorizedResponse() };

  if (role === "admin" && result.profile.role !== "admin") {
    return { error: forbiddenResponse("관리자 권한이 필요합니다.") };
  }
  if (role === "instructor" && !["instructor", "admin"].includes(result.profile.role)) {
    return { error: forbiddenResponse("강사 권한이 필요합니다.") };
  }

  return { data: result };
}
