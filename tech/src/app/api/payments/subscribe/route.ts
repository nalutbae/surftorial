import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { successResponse, errorResponse, validationErrorResponse, conflictResponse } from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";
import { subscribeSchema } from "@/lib/validations/payment";
import { ZodError } from "zod";

// POST /api/payments/subscribe — Create a subscription
export async function POST(request: NextRequest) {
  try {
    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const body = await request.json();
    const data = subscribeSchema.parse(body);

    // Check if user already has an active subscription
    const existing = await prisma.subscription.findFirst({
      where: { userId: profile.id, status: "active" },
    });

    if (existing) {
      return conflictResponse("SUBSCRIPTION_EXISTS", "이미 활성 구독이 존재합니다.");
    }

    // Create subscription record
    const now = new Date();
    const periodEnd = new Date(now);
    if (data.billing_cycle === "monthly") {
      periodEnd.setMonth(periodEnd.getMonth() + 1);
    } else {
      periodEnd.setFullYear(periodEnd.getFullYear() + 1);
    }

    const subscription = await prisma.subscription.create({
      data: {
        userId: profile.id,
        planType: data.billing_cycle === "monthly" ? "monthly" : "yearly",
        tier: data.plan,
        status: "active",
        tossCustomerKey: `cust_${profile.id}`,
        currentPeriodStart: now,
        currentPeriodEnd: periodEnd,
      },
    });

    return successResponse({
      subscriptionId: subscription.id,
      tossCustomerKey: `cust_${profile.id}`,
    }, 201);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Subscribe error:", error);
    return errorResponse("INTERNAL_ERROR", "구독 생성 중 오류가 발생했습니다.", 500);
  }
}
