import { NextRequest } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { successResponse, errorResponse, validationErrorResponse, conflictResponse, notFoundResponse } from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";
import { oneTimePaymentSchema } from "@/lib/validations/payment";
import { ZodError } from "zod";

// POST /api/payments/one-time — Initiate a one-time course purchase
export async function POST(request: NextRequest) {
  try {
    const prisma = await getPrisma();
    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const body = await request.json();
    const data = oneTimePaymentSchema.parse(body);

    // Verify course exists and is published
    const course = await prisma.course.findFirst({
      where: { id: data.course_id, isPublished: true, deletedAt: null },
    });

    if (!course) return notFoundResponse("강의");

    // Check if already enrolled
    const existingEnrollment = await prisma.enrollment.findFirst({
      where: { userId: profile.id, courseId: data.course_id, status: "active" },
    });

    if (existingEnrollment) {
      return conflictResponse("ALREADY_ENROLLED", "이미 수강 중인 강의입니다.");
    }

    // Create a pending payment
    const orderId = `order_${Date.now()}_${profile.id.slice(0, 8)}`;
    const payment = await prisma.payment.create({
      data: {
        userId: profile.id,
        courseId: data.course_id,
        paymentType: "one_time",
        amount: course.price,
        currency: "KRW",
        status: "pending",
        tossOrderId: orderId,
      },
    });

    return successResponse({
      paymentId: payment.id,
      orderId,
      amount: course.price,
      courseName: course.title,
      // Frontend should use this info to open Toss Payments checkout
    }, 201);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("One-time payment error:", error);
    return errorResponse("INTERNAL_ERROR", "결제 요청 중 오류가 발생했습니다.", 500);
  }
}
