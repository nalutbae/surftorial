"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { requireRole } from "@/lib/utils/auth";

export async function updateUserRole(userId: string, role: "student" | "instructor" | "admin") {
  const auth = await requireRole("admin");
  if ("error" in auth) {
    return { error: "관리자 권한이 필요합니다." };
  }

  await prisma.profile.update({
    where: { id: userId },
    data: { role },
  });
  revalidatePath("/admin/users");
  return { success: true };
}

export async function toggleUserActive(userId: string, currentlyDeleted: boolean) {
  const auth = await requireRole("admin");
  if ("error" in auth) {
    return { error: "관리자 권한이 필요합니다." };
  }

  await prisma.profile.update({
    where: { id: userId },
    data: { deletedAt: currentlyDeleted ? null : new Date() },
  });
  revalidatePath("/admin/users");
  return { success: true };
}
