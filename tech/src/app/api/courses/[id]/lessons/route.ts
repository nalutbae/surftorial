import { NextRequest } from "next/server";
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
import { lessonCreateSchema } from "@/lib/validations";
import { ZodError } from "zod";

// GET /api/courses/:id/lessons — List lessons for a course
// Public: returns preview lessons; authenticated+enrolled: returns all with stream info
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

    // Check if user is enrolled or is the instructor
    const authResult = await requireAuth();
    const isAuthenticated = "data" in authResult;

    let isEnrolled = false;
    let isInstructor = false;

    if (isAuthenticated) {
      const { profile } = authResult.data;
      isEnrolled = !!(await prisma.enrollment.findFirst({
        where: { userId: profile.id, courseId, status: "active" },
      }));
      isInstructor = course.instructorId === profile.id || profile.role === "admin";
    }

    const lessons = await prisma.lesson.findMany({
      where: { courseId, deletedAt: null },
      orderBy: { sortOrder: "asc" },
      select: {
        id: true,
        title: true,
        slug: true,
        sortOrder: true,
        isFreePreview: true,
        durationSec: true,
        // Only include stream info for enrolled/instructor users
        ...(isEnrolled || isInstructor ? { streamId: true, hlsUrl: true } : {}),
      },
    });

    // For non-enrolled users, mark access level
    const result = lessons.map((lesson) => ({
      ...lesson,
      hasAccess: isEnrolled || isInstructor || lesson.isFreePreview,
    }));

    return successResponse(result);
  } catch (error) {
    console.error("Lessons list error:", error);
    return errorResponse("INTERNAL_ERROR", "레슨 목록 조회 중 오류가 발생했습니다.", 500);
  }
}

// POST /api/courses/:id/lessons — Instructor/Admin: add a lesson to a course
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

    // Verify course exists and user is the instructor or admin
    const course = await prisma.course.findFirst({
      where: { id: courseId, deletedAt: null },
    });
    if (!course) return notFoundResponse("강의");
    if (course.instructorId !== profile.id && profile.role !== "admin") {
      return errorResponse("FORBIDDEN", "본인 강의에만 레슨을 추가할 수 있습니다.", 403);
    }

    const body = await request.json();
    const data = lessonCreateSchema.parse(body);

    // Check for duplicate slug within the course
    const existingSlug = await prisma.lesson.findFirst({
      where: { courseId, slug: data.slug, deletedAt: null },
    });
    if (existingSlug) {
      return conflictResponse("LESSON_SLUG_EXISTS", "이미 존재하는 레슨 슬러그입니다.");
    }

    const lesson = await prisma.lesson.create({
      data: {
        courseId,
        title: data.title,
        slug: data.slug,
        description: data.description,
        streamId: data.stream_id,
        durationSec: data.duration_sec ?? 0,
        sortOrder: data.sort_order,
        isFreePreview: data.is_free_preview,
      },
    });

    return successResponse(lesson, 201);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Lesson create error:", error);
    return errorResponse("INTERNAL_ERROR", "레슨 생성 중 오류가 발생했습니다.", 500);
  }
}