import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { isValidUUID } from "@/lib/utils/id";
import {
  successResponse,
  notFoundResponse,
  errorResponse,
  conflictResponse,
} from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";

// POST /api/courses/:id/enroll — Authenticated: enroll in a course
export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: courseId } = await params;

    if (!isValidUUID(courseId)) {
      return errorResponse("INVALID_UUID", "잘못된 요청 형식입니다.", 400);
    }
    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    // Verify course exists and is published
    const course = await prisma.course.findFirst({
      where: { id: courseId, deletedAt: null, isPublished: true },
    });
    if (!course) return notFoundResponse("강의");

    // Check if already enrolled
    const existingEnrollment = await prisma.enrollment.findFirst({
      where: { userId: profile.id, courseId },
    });

    if (existingEnrollment) {
      if (existingEnrollment.status === "active") {
        return conflictResponse("ALREADY_ENROLLED", "이미 수강 중인 강의입니다.");
      }
      // Re-enroll if previously refunded
      if (existingEnrollment.status === "refunded") {
        const updated = await prisma.enrollment.update({
          where: { id: existingEnrollment.id },
          data: { status: "active", enrolledAt: new Date() },
        });
        return successResponse(updated);
      }
      // completed status — still enrolled, return existing
      return conflictResponse("ALREADY_ENROLLED", "이미 수강 완료한 강의입니다.");
    }

    // For free courses, enroll directly
    // For paid courses, enrollment is created via payment webhook
    if (course.price === 0) {
      const enrollment = await prisma.enrollment.create({
        data: {
          userId: profile.id,
          courseId,
          source: "free",
          status: "active",
        },
      });

      return successResponse(enrollment, 201);
    }

    // Paid course — redirect to payment
    return errorResponse(
      "PAYMENT_REQUIRED",
      "유료 강의는 결제 후 수강 등록됩니다. 결제 API를 이용해주세요.",
      402
    );
  } catch (error) {
    console.error("Enrollment error:", error);
    return errorResponse("INTERNAL_ERROR", "수강 등록 중 오류가 발생했습니다.", 500);
  }
}