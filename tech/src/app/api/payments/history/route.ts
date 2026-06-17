import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { successResponse, errorResponse, validationErrorResponse } from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";
import { paymentHistoryQuerySchema } from "@/lib/validations";
import { ZodError } from "zod";

type PaymentType = "one_time" | "subscription";
type PaymentStatus = "pending" | "completed" | "failed" | "refunded";

// GET /api/payments/history — User's payment history
export async function GET(request: NextRequest) {
  try {
    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const { searchParams } = new URL(request.url);
    const query = paymentHistoryQuerySchema.parse(Object.fromEntries(searchParams));

    const paymentType = query.type ? (query.type as PaymentType) : undefined;

    const where = {
      userId: profile.id,
      ...(paymentType && { paymentType }),
      ...(query.status && { status: query.status }),
    };

    const [payments, total] = await Promise.all([
      prisma.payment.findMany({
        where,
        include: {
          course: { select: { id: true, title: true, thumbnailUrl: true } },
          subscription: { select: { id: true, planType: true, tier: true } },
        },
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.per_page,
        take: query.per_page,
      }),
      prisma.payment.count({ where }),
    ]);

    return successResponse({
      data: payments,
      meta: {
        total,
        page: query.page,
        per_page: query.per_page,
        total_pages: Math.ceil(total / query.per_page),
      },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Payment history error:", error);
    return errorResponse("INTERNAL_ERROR", "결제 내역 조회 중 오류가 발생했습니다.", 500);
  }
}
