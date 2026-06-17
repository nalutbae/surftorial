import { NextRequest } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { registerSchema } from "@/lib/validations/user";
import { successResponse, validationErrorResponse, conflictResponse, errorResponse } from "@/lib/utils/api";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  try {
    const prisma = await getPrisma();
    const body = await request.json();
    const data = registerSchema.parse(body);

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return errorResponse("UNAUTHORIZED", "인증이 필요합니다.", 401);
    }

    // Check if profile already exists
    const existing = await prisma.profile.findUnique({
      where: { id: user.id },
    });

    if (existing) {
      return conflictResponse("PROFILE_EXISTS", "이미 프로필이 존재합니다.");
    }

    // Role is always "student" on registration.
    // Instructor/admin roles can only be assigned by an admin via a separate endpoint.
    const profile = await prisma.profile.create({
      data: {
        id: user.id,
        displayName: data.display_name,
        role: "student",
      },
    });

    return successResponse(profile, 201);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Profile creation error:", error);
    return errorResponse("INTERNAL_ERROR", "프로필 생성 중 오류가 발생했습니다.", 500);
  }
}
