import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/utils/api";
import { requireAuth } from "@/lib/utils/auth";

// GET /api/users/me/enrollments — Current user's enrolled courses with progress
export async function GET(request: NextRequest) {
  try {
    const authResult = await requireAuth();
    if ("error" in authResult) return authResult.error;
    const { profile } = authResult.data;

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const perPage = parseInt(searchParams.get("per_page") || "20");

    const [enrollments, total] = await Promise.all([
      prisma.enrollment.findMany({
        where: { userId: profile.id, status: "active" },
        include: {
          course: {
            include: {
              instructor: { select: { id: true, displayName: true, avatarUrl: true } },
              _count: { select: { lessons: true } },
            },
          },
          payment: { select: { id: true, amount: true, status: true, createdAt: true } },
        },
        orderBy: { enrolledAt: "desc" },
        skip: (page - 1) * perPage,
        take: perPage,
      }),
      prisma.enrollment.count({
        where: { userId: profile.id, status: "active" },
      }),
    ]);

    // Calculate progress for each enrollment
    const enriched = await Promise.all(
      enrollments.map(async (enrollment) => {
        const completedLessons = await prisma.lessonProgress.count({
          where: {
            userId: profile.id,
            isCompleted: true,
            lesson: { courseId: enrollment.courseId, deletedAt: null },
          },
        });

        const totalLessons = enrollment.course._count.lessons;
        const progressPercent = totalLessons > 0
          ? Math.round((completedLessons / totalLessons) * 100)
          : 0;

        return {
          ...enrollment,
          progress: {
            completedLessons,
            totalLessons,
            percent: progressPercent,
          },
        };
      })
    );

    return successResponse({
      data: enriched,
      meta: {
        total,
        page,
        per_page: perPage,
        total_pages: Math.ceil(total / perPage),
      },
    });
  } catch (error) {
    console.error("Enrollments error:", error);
    return errorResponse("INTERNAL_ERROR", "수강 목록 조회 중 오류가 발생했습니다.", 500);
  }
}
