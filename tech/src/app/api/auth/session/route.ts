import { createClient } from "@/lib/supabase/server";
import prisma from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/utils/api";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return successResponse({ user: null, profile: null });
    }

    const profile = await prisma.profile.findUnique({
      where: { id: user.id },
    });

    return successResponse({
      user: {
        id: user.id,
        email: user.email,
        created_at: user.created_at,
      },
      profile,
    });
  } catch (error) {
    console.error("Session error:", error);
    return errorResponse("INTERNAL_ERROR", "세션 조회 중 오류가 발생했습니다.", 500);
  }
}
