import { NextRequest } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { isValidUUID } from "@/lib/utils/id";
import {
  successResponse,
  notFoundResponse,
  errorResponse,
  validationErrorResponse,
  forbiddenResponse,
} from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";
import { lessonUpdateSchema } from "@/lib/validations";
import { ZodError } from "zod";

// PATCH /api/courses/:id/lessons/:lessonId — Instructor/Admin: update a lesson
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; lessonId: string }> }
) {
  try {
    const prisma = await getPrisma();
    const { id: courseId, lessonId } = await params;

    if (!isValidUUID(courseId) || !isValidUUID(lessonId)) {
      return errorResponse("INVALID_UUID", "잘못된 요청 형식입니다.", 400);
    }

    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const course = await prisma.course.findFirst({
      where: { id: courseId, deletedAt: null },
    });
    if (!course) return notFoundResponse("강의");

    // Verify ownership or admin
    if (course.instructorId !== profile.id && profile.role !== "admin") {
      return forbiddenResponse("본인 강의의 레슨만 수정할 수 있습니다.");
    }

    const lesson = await prisma.lesson.findFirst({
      where: { id: lessonId, courseId, deletedAt: null },
    });
    if (!lesson) return notFoundResponse("레슨");

    const body = await request.json();
    const data = lessonUpdateSchema.parse(body);

    // Check slug uniqueness if updating slug
    if (data.slug && data.slug !== lesson.slug) {
      const existingSlug = await prisma.lesson.findFirst({
        where: { courseId, slug: data.slug, deletedAt: null },
      });
      if (existingSlug) {
        return errorResponse("LESSON_SLUG_EXISTS", "이미 존재하는 레슨 슬러그입니다.", 409);
      }
    }

    const updated = await prisma.lesson.update({
      where: { id: lessonId },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.slug !== undefined && { slug: data.slug }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.stream_id !== undefined && { streamId: data.stream_id }),
        ...(data.duration_sec !== undefined && { durationSec: data.duration_sec }),
        ...(data.sort_order !== undefined && { sortOrder: data.sort_order }),
        ...(data.is_free_preview !== undefined && { isFreePreview: data.is_free_preview }),
      },
    });

    return successResponse(updated);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Lesson update error:", error);
    return errorResponse("INTERNAL_ERROR", "레슨 수정 중 오류가 발생했습니다.", 500);
  }
}

// DELETE /api/courses/:id/lessons/:lessonId — Instructor/Admin: soft delete a lesson
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string; lessonId: string }> }
) {
  try {
    const prisma = await getPrisma();
    const { id: courseId, lessonId } = await params;

    if (!isValidUUID(courseId) || !isValidUUID(lessonId)) {
      return errorResponse("INVALID_UUID", "잘못된 요청 형식입니다.", 400);
    }

    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const course = await prisma.course.findFirst({
      where: { id: courseId, deletedAt: null },
    });
    if (!course) return notFoundResponse("강의");

    // Verify ownership or admin
    if (course.instructorId !== profile.id && profile.role !== "admin") {
      return forbiddenResponse("본인 강의의 레슨만 삭제할 수 있습니다.");
    }

    const lesson = await prisma.lesson.findFirst({
      where: { id: lessonId, courseId, deletedAt: null },
    });
    if (!lesson) return notFoundResponse("레슨");

    // Soft delete
    await prisma.lesson.update({
      where: { id: lessonId },
      data: { deletedAt: new Date() },
    });

    return successResponse({ deleted: true, id: lessonId });
  } catch (error) {
    console.error("Lesson delete error:", error);
    return errorResponse("INTERNAL_ERROR", "레슨 삭제 중 오류가 발생했습니다.", 500);
  }
}