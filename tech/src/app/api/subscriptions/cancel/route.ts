import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { successResponse, notFoundResponse, errorResponse } from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";

// POST /api/subscriptions/cancel — Cancel active subscription
export async function POST() {
  try {
    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const subscription = await prisma.subscription.findFirst({
      where: { userId: profile.id, status: "active" },
    });

    if (!subscription) {
      return notFoundResponse("활성 구독");
    }

    // TODO: Call Toss API to cancel billing
    // For now, just update our DB
    const updated = await prisma.subscription.update({
      where: { id: subscription.id },
      data: {
        status: "canceled",
        canceledAt: new Date(),
      },
    });

    return successResponse(updated);
  } catch (error) {
    console.error("Subscription cancel error:", error);
    return errorResponse("INTERNAL_ERROR", "구독 취소 중 오류가 발생했습니다.", 500);
  }
}
