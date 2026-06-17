import { NextRequest } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { successResponse, errorResponse, validationErrorResponse } from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";
import { updateProfileSchema } from "@/lib/validations/user";
import { ZodError } from "zod";

// GET /api/users/me — Current user's profile
export async function GET() {
  try {
    const prisma = await getPrisma();
    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const fullProfile = await prisma.profile.findUnique({
      where: { id: profile.id },
      include: {
        _count: { select: { enrollments: true, courses: true } },
      },
    });

    return successResponse(fullProfile);
  } catch (error) {
    console.error("Profile GET error:", error);
    return errorResponse("INTERNAL_ERROR", "프로필 조회 중 오류가 발생했습니다.", 500);
  }
}

// PATCH /api/users/me — Update current user's profile
export async function PATCH(request: NextRequest) {
  try {
    const prisma = await getPrisma();
    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const body = await request.json();
    const data = updateProfileSchema.parse(body);

    const updated = await prisma.profile.update({
      where: { id: profile.id },
      data: {
        ...(data.display_name !== undefined && { displayName: data.display_name }),
        ...(data.avatar_url !== undefined && { avatarUrl: data.avatar_url }),
        ...(data.bio !== undefined && { bio: data.bio }),
        ...(data.skill_level !== undefined && { skillLevel: data.skill_level }),
      },
    });

    return successResponse(updated);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Profile PATCH error:", error);
    return errorResponse("INTERNAL_ERROR", "프로필 업데이트 중 오류가 발생했습니다.", 500);
  }
}
