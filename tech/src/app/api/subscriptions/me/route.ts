import { successResponse, errorResponse } from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";
import prisma from "@/lib/prisma";

// GET /api/subscriptions/me — Current user's subscription status
export async function GET() {
  try {
    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const subscription = await prisma.subscription.findFirst({
      where: { userId: profile.id, status: "active" },
      include: {
        payments: {
          orderBy: { createdAt: "desc" },
          take: 5,
        },
      },
    });

    if (!subscription) {
      return successResponse({ subscription: null, hasActiveSubscription: false });
    }

    return successResponse({
      subscription,
      hasActiveSubscription: true,
    });
  } catch (error) {
    console.error("Subscription me error:", error);
    return errorResponse("INTERNAL_ERROR", "구독 정보 조회 중 오류가 발생했습니다.", 500);
  }
}
