import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { isValidUUID } from "@/lib/utils/id";
import {
  successResponse,
  notFoundResponse,
  errorResponse,
  validationErrorResponse,
  forbiddenResponse,
} from "@/lib/utils/api";
import { requireAuth, requireRole } from "@/lib/utils/auth";
import { courseUpdateSchema } from "@/lib/validations";
import { ZodError } from "zod";

// GET /api/courses/:id — Public: course detail with lessons and reviews
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!isValidUUID(id)) {
      return errorResponse("INVALID_UUID", "잘못된 요청 형식입니다.", 400);
    }

    const course = await prisma.course.findFirst({
      where: { id, deletedAt: null },
      include: {
        instructor: {
          select: { id: true, displayName: true, avatarUrl: true, bio: true },
        },
        category: { select: { id: true, name: true, slug: true } },
        lessons: {
          where: { deletedAt: null },
          orderBy: { sortOrder: "asc" },
          select: {
            id: true,
            title: true,
            slug: true,
            durationSec: true,
            isFreePreview: true,
            sortOrder: true,
          },
        },
        reviews: {
          where: { deletedAt: null },
          take: 10,
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            rating: true,
            comment: true,
            createdAt: true,
            user: { select: { id: true, displayName: true, avatarUrl: true } },
          },
        },
        _count: { select: { enrollments: true, lessons: true } },
      },
    });

    if (!course) return notFoundResponse("강의");

    // Calculate average rating
    const avgRating = await prisma.courseReview.aggregate({
      where: { courseId: id, deletedAt: null },
      _avg: { rating: true },
      _count: true,
    });

    // Check if requesting user is enrolled (optional context)
    const authResult = await requireAuth();
    let isEnrolled = false;
    let isInstructor = false;

    if ("data" in authResult) {
      const { profile } = authResult.data;
      isEnrolled = !!(await prisma.enrollment.findFirst({
        where: { userId: profile.id, courseId: id, status: "active" },
      }));
      isInstructor = course.instructorId === profile.id || profile.role === "admin";
    }

    // For non-enrolled, non-instructor users, hide stream info from lessons
    const lessons = course.lessons.map((lesson) => ({
      ...lesson,
      hasAccess: isEnrolled || isInstructor || lesson.isFreePreview,
    }));

    return successResponse({
      ...course,
      lessons,
      ratingAvg: avgRating._avg.rating ?? 0,
      reviewCount: avgRating._count,
      isEnrolled,
      isInstructor,
    });
  } catch (error) {
    console.error("Course detail error:", error);
    return errorResponse("INTERNAL_ERROR", "강의 조회 중 오류가 발생했습니다.", 500);
  }
}

// PATCH /api/courses/:id — Instructor/Owner: update course
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!isValidUUID(id)) {
      return errorResponse("INVALID_UUID", "잘못된 요청 형식입니다.", 400);
    }

    const authResult = await requireRole("instructor");
    if ("error" in authResult) return authResult.error;

    const body = await request.json();
    const data = courseUpdateSchema.parse(body);

    // Verify ownership or admin
    const course = await prisma.course.findUnique({ where: { id } });
    if (!course) return notFoundResponse("강의");
    if (course.deletedAt) return notFoundResponse("강의");
    if (
      course.instructorId !== authResult.data.profile.id &&
      authResult.data.profile.role !== "admin"
    ) {
      return forbiddenResponse("본인 강의만 수정할 수 있습니다.");
    }

    const updated = await prisma.course.update({
      where: { id },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.category !== undefined && {
          category: { connect: { slug: data.category } },
        }),
        ...(data.price !== undefined && { price: data.price }),
        ...(data.thumbnail_url !== undefined && { thumbnailUrl: data.thumbnail_url }),
        ...(data.skill_level !== undefined && { skillLevel: data.skill_level }),
        ...(data.is_published !== undefined && {
          isPublished: data.is_published,
          publishedAt: data.is_published ? new Date() : null,
        }),
      },
      include: {
        instructor: { select: { id: true, displayName: true, avatarUrl: true } },
        category: { select: { id: true, name: true, slug: true } },
      },
    });

    return successResponse(updated);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Course update error:", error);
    return errorResponse("INTERNAL_ERROR", "강의 수정 중 오류가 발생했습니다.", 500);
  }
}

// DELETE /api/courses/:id — Soft delete (instructor/admin only)
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!isValidUUID(id)) {
      return errorResponse("INVALID_UUID", "잘못된 요청 형식입니다.", 400);
    }

    const authResult = await requireRole("instructor");
    if ("error" in authResult) return authResult.error;

    const course = await prisma.course.findUnique({ where: { id } });
    if (!course) return notFoundResponse("강의");
    if (course.deletedAt) return notFoundResponse("강의");
    if (
      course.instructorId !== authResult.data.profile.id &&
      authResult.data.profile.role !== "admin"
    ) {
      return forbiddenResponse("본인 강의만 삭제할 수 있습니다.");
    }

    // Soft delete — set deletedAt timestamp
    await prisma.course.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return successResponse({ deleted: true, id });
  } catch (error) {
    console.error("Course delete error:", error);
    return errorResponse("INTERNAL_ERROR", "강의 삭제 중 오류가 발생했습니다.", 500);
  }
}