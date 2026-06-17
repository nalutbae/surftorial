import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { isValidUUID } from "@/lib/utils/id";
import {
  successResponse,
  notFoundResponse,
  errorResponse,
  validationErrorResponse,
  conflictResponse,
} from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";
import { reviewCreateSchema } from "@/lib/validations";
import { ZodError } from "zod";

// GET /api/courses/:id/reviews — Public: list reviews for a course
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: courseId } = await params;

    if (!isValidUUID(courseId)) {
      return errorResponse("INVALID_UUID", "잘못된 요청 형식입니다.", 400);
    }

    const course = await prisma.course.findFirst({
      where: { id: courseId, deletedAt: null },
    });
    if (!course) return notFoundResponse("강의");

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const perPage = Math.min(50, Math.max(1, parseInt(searchParams.get("per_page") || "20")));

    const [reviews, total] = await Promise.all([
      prisma.courseReview.findMany({
        where: { courseId, deletedAt: null },
        include: {
          user: { select: { id: true, displayName: true, avatarUrl: true } },
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * perPage,
        take: perPage,
      }),
      prisma.courseReview.count({
        where: { courseId, deletedAt: null },
      }),
    ]);

    const stats = await prisma.courseReview.aggregate({
      where: { courseId, deletedAt: null },
      _avg: { rating: true },
      _count: true,
    });

    return NextResponse.json({
      data: {
        reviews,
        stats: {
          ratingAvg: stats._avg.rating ?? 0,
          reviewCount: stats._count,
        },
      },
      meta: {
        total,
        page,
        per_page: perPage,
        total_pages: Math.ceil(total / perPage),
      },
    });
  } catch (error) {
    console.error("Reviews list error:", error);
    return errorResponse("INTERNAL_ERROR", "리뷰 목록 조회 중 오류가 발생했습니다.", 500);
  }
}

// POST /api/courses/:id/reviews — Authenticated: create a review for a course
export async function POST(
  request: NextRequest,
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

    const course = await prisma.course.findFirst({
      where: { id: courseId, deletedAt: null },
    });
    if (!course) return notFoundResponse("강의");

    const enrollment = await prisma.enrollment.findFirst({
      where: { userId: profile.id, courseId, status: "active" },
    });
    if (!enrollment) {
      return errorResponse("NOT_ENROLLED", "수강 중인 강의만 리뷰를 작성할 수 있습니다.", 403);
    }

    if (course.instructorId === profile.id) {
      return errorResponse("FORBIDDEN", "본인 강의에는 리뷰를 작성할 수 없습니다.", 403);
    }

    const body = await request.json();
    const data = reviewCreateSchema.parse({
      ...body,
      courseId,
    });

    const existingReview = await prisma.courseReview.findFirst({
      where: { userId: profile.id, courseId, deletedAt: null },
    });
    if (existingReview) {
      return conflictResponse("REVIEW_ALREADY_EXISTS", "이미 리뷰를 작성하셨습니다.");
    }

    const review = await prisma.courseReview.create({
      data: {
        userId: profile.id,
        courseId,
        rating: data.rating,
        comment: data.comment,
      },
      include: {
        user: { select: { id: true, displayName: true, avatarUrl: true } },
      },
    });

    return successResponse(review, 201);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Review create error:", error);
    return errorResponse("INTERNAL_ERROR", "리뷰 작성 중 오류가 발생했습니다.", 500);
  }
}
