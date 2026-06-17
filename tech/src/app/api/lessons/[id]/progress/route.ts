import { NextRequest } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { isValidUUID } from "@/lib/utils/id";
import { successResponse, notFoundResponse, errorResponse, validationErrorResponse, unauthorizedResponse } from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";
import { updateProgressSchema } from "@/lib/validations/lesson";
import { generateSignedUrl } from "@/lib/cloudflare/stream";
import { ZodError } from "zod";

// GET /api/lessons/:id/progress — Get current user's progress for a lesson
// Also returns signed URL for video playback
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const prisma = await getPrisma();
    const { id: lessonId } = await params;

    if (!isValidUUID(lessonId)) {
      return errorResponse("INVALID_UUID", "잘못된 요청 형식입니다.", 400);
    }

    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const lesson = await prisma.lesson.findFirst({
      where: { id: lessonId, deletedAt: null },
      include: { course: true },
    });

    if (!lesson) return notFoundResponse("레슨");

    // Check enrollment
    const isEnrolled = !!(await prisma.enrollment.findFirst({
      where: { userId: profile.id, courseId: lesson.courseId, status: "active" },
    }));

    const isInstructor = lesson.course.instructorId === profile.id;
    const isFreePreview = lesson.isFreePreview;

    if (!isEnrolled && !isInstructor && !isFreePreview) {
      return errorResponse("FORBIDDEN", "수강 중인 강의만 시청할 수 있습니다.", 403);
    }

    // Get progress
    let progress = await prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId: profile.id, lessonId } },
    });

    // Create initial progress if not exists
    if (!progress) {
      progress = await prisma.lessonProgress.create({
        data: {
          userId: profile.id,
          lessonId,
        },
      });
    }

    // Generate signed URL if video has streamId
    let signedUrl: string | null = null;
    if (lesson.streamId) {
      try {
        const result = await generateSignedUrl({ videoId: lesson.streamId! });
        signedUrl = result.signedUrl;
      } catch (err) {
        console.error("Signed URL generation failed:", err);
      }
    }

    return successResponse({
      progress,
      videoUrl: signedUrl ?? lesson.hlsUrl,
      lesson: {
        id: lesson.id,
        title: lesson.title,
        durationSec: lesson.durationSec,
        isFreePreview: lesson.isFreePreview,
      },
    });
  } catch (error) {
    console.error("Progress GET error:", error);
    return errorResponse("INTERNAL_ERROR", "진도 조회 중 오류가 발생했습니다.", 500);
  }
}

// PATCH /api/lessons/:id/progress — Update watch progress
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const prisma = await getPrisma();
    const { id: lessonId } = await params;

    if (!isValidUUID(lessonId)) {
      return errorResponse("INVALID_UUID", "잘못된 요청 형식입니다.", 400);
    }

    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const body = await request.json();
    const data = updateProgressSchema.parse(body);

    const lesson = await prisma.lesson.findFirst({
      where: { id: lessonId, deletedAt: null },
    });

    if (!lesson) return notFoundResponse("레슨");

    // Verify enrollment
    const isEnrolled = !!(await prisma.enrollment.findFirst({
      where: { userId: profile.id, courseId: lesson.courseId, status: "active" },
    }));

    if (!isEnrolled) {
      return errorResponse("FORBIDDEN", "수강 중인 강의만 진도를 업데이트할 수 있습니다.", 403);
    }

    // Check if lesson is completed (watched >= 90% of duration)
    const isCompleted = lesson.durationSec
      ? (data.watched_seconds ?? 0) >= lesson.durationSec * 0.9
      : false;

    const progress = await prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId: profile.id, lessonId } },
      update: {
        ...(data.watched_seconds !== undefined && { watchedSec: data.watched_seconds }),
        ...(data.last_position !== undefined && { lastPosition: data.last_position }),
        ...(isCompleted && { isCompleted: true, completedAt: new Date() }),
      },
      create: {
        userId: profile.id,
        lessonId,
        watchedSec: data.watched_seconds ?? 0,
        lastPosition: data.last_position ?? 0,
        isCompleted,
        ...(isCompleted && { completedAt: new Date() }),
      },
    });

    return successResponse(progress);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Progress PATCH error:", error);
    return errorResponse("INTERNAL_ERROR", "진도 업데이트 중 오류가 발생했습니다.", 500);
  }
}
