import { NextRequest } from "next/server";
import { getPrisma } from "@/lib/prisma";
import {
  successResponse,
  errorResponse,
  validationErrorResponse,
} from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";
import { progressUpdateSchema } from "@/lib/validations";
import { ZodError } from "zod";

// GET /api/progress — Authenticated: get current user's progress across all enrolled courses
export async function GET(request: NextRequest) {
  try {
    const prisma = await getPrisma();
    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get("course_id");

    if (courseId) {
      // Get progress for a specific course
      const course = await prisma.course.findFirst({
        where: { id: courseId, deletedAt: null },
      });
      if (!course) {
        return errorResponse("COURSE_NOT_FOUND", "요청하신 강의를 찾을 수 없습니다.", 404);
      }

      // Verify enrollment
      const enrollment = await prisma.enrollment.findFirst({
        where: { userId: profile.id, courseId, status: "active" },
      });
      if (!enrollment && course.instructorId !== profile.id && profile.role !== "admin") {
        return errorResponse("NOT_ENROLLED", "수강 중인 강의만 진도를 조회할 수 있습니다.", 403);
      }

      // Get all lessons for the course
      const lessons = await prisma.lesson.findMany({
        where: { courseId, deletedAt: null },
        orderBy: { sortOrder: "asc" },
        select: { id: true, title: true, sortOrder: true, durationSec: true, isFreePreview: true },
      });

      // Get progress for all lessons in this course
      const progressRecords = await prisma.lessonProgress.findMany({
        where: {
          userId: profile.id,
          lessonId: { in: lessons.map((l) => l.id) },
        },
      });

      const progressMap = new Map(progressRecords.map((p) => [p.lessonId, p]));

      const lessonProgress = lessons.map((lesson) => {
        const progress = progressMap.get(lesson.id);
        return {
          ...lesson,
          isCompleted: progress?.isCompleted ?? false,
          watchedSec: progress?.watchedSec ?? 0,
          lastPosition: progress?.lastPosition ?? 0,
          completedAt: progress?.completedAt ?? null,
        };
      });

      const completedCount = lessonProgress.filter((lp) => lp.isCompleted).length;
      const totalCount = lessons.length;
      const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

      return successResponse({
        courseId,
        enrollmentId: enrollment?.id,
        lessons: lessonProgress,
        completedCount,
        totalCount,
        percentage,
      });
    }

    // Get progress summary across all enrolled courses
    const enrollments = await prisma.enrollment.findMany({
      where: { userId: profile.id, status: "active" },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            thumbnailUrl: true,
            _count: { select: { lessons: true } },
          },
        },
      },
    });

    const courseProgress = await Promise.all(
      enrollments.map(async (enrollment) => {
        const completedLessons = await prisma.lessonProgress.count({
          where: {
            userId: profile.id,
            isCompleted: true,
            lesson: { courseId: enrollment.courseId, deletedAt: null },
          },
        });

        const totalLessons = enrollment.course._count.lessons;
        const percentage =
          totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

        return {
          courseId: enrollment.courseId,
          courseTitle: enrollment.course.title,
          thumbnailUrl: enrollment.course.thumbnailUrl,
          completedLessons,
          totalLessons,
          percentage,
          enrolledAt: enrollment.enrolledAt,
        };
      })
    );

    return successResponse({ courses: courseProgress });
  } catch (error) {
    console.error("Progress GET error:", error);
    return errorResponse("INTERNAL_ERROR", "진도 조회 중 오류가 발생했습니다.", 500);
  }
}

// PATCH /api/progress — Authenticated: upsert lesson progress (watch progress)
export async function PATCH(request: NextRequest) {
  try {
    const prisma = await getPrisma();
    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const body = await request.json();
    const data = progressUpdateSchema.parse(body);

    // Verify lesson exists
    const lesson = await prisma.lesson.findFirst({
      where: { id: data.lessonId, deletedAt: null },
    });
    if (!lesson) {
      return errorResponse("LESSON_NOT_FOUND", "요청하신 레슨을 찾을 수 없습니다.", 404);
    }

    // Verify enrollment for the course this lesson belongs to
    const enrollment = await prisma.enrollment.findFirst({
      where: { userId: profile.id, courseId: lesson.courseId, status: "active" },
    });
    if (!enrollment) {
      return errorResponse("NOT_ENROLLED", "수강 중인 강의만 진도를 업데이트할 수 있습니다.", 403);
    }

    // Determine if lesson is completed (watched >= 90% of duration)
    const isCompleted = lesson.durationSec
      ? data.watchedSec >= lesson.durationSec * 0.9
      : false;

    // Upsert progress
    const progress = await prisma.lessonProgress.upsert({
      where: {
        userId_lessonId: { userId: profile.id, lessonId: data.lessonId },
      },
      update: {
        watchedSec: data.watchedSec,
        ...(data.lastPosition !== undefined && { lastPosition: data.lastPosition }),
        ...(isCompleted && { isCompleted: true, completedAt: new Date() }),
      },
      create: {
        userId: profile.id,
        lessonId: data.lessonId,
        watchedSec: data.watchedSec,
        lastPosition: data.lastPosition ?? 0,
        isCompleted,
        ...(isCompleted && { completedAt: new Date() }),
      },
    });

    // Calculate course-level progress
    const totalLessons = await prisma.lesson.count({
      where: { courseId: lesson.courseId, deletedAt: null },
    });
    const completedLessons = await prisma.lessonProgress.count({
      where: {
        userId: profile.id,
        isCompleted: true,
        lesson: { courseId: lesson.courseId, deletedAt: null },
      },
    });
    const coursePercentage =
      totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    // Auto-complete enrollment if all lessons done
    if (coursePercentage === 100 && enrollment.status === "active") {
      await prisma.enrollment.update({
        where: { id: enrollment.id },
        data: { status: "completed" },
      });
    }

    return successResponse({
      ...progress,
      courseProgress: {
        completedLessons,
        totalLessons,
        percentage: coursePercentage,
      },
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Progress PATCH error:", error);
    return errorResponse("INTERNAL_ERROR", "진도 업데이트 중 오류가 발생했습니다.", 500);
  }
}