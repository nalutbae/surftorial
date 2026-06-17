import { NextRequest } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/utils/api";
import { requireRole } from "@/lib/utils/auth";

// GET /api/admin/analytics — Admin: dashboard analytics
export async function GET() {
  try {
    const prisma = await getPrisma();
    const authResult = await requireRole("admin");
    if ("error" in authResult) return authResult.error;

    const [
      totalUsers,
      totalCourses,
      totalEnrollments,
      totalRevenue,
      recentEnrollments,
      topCourses,
    ] = await Promise.all([
      prisma.profile.count({ where: { deletedAt: null } }),
      prisma.course.count({ where: { deletedAt: null } }),
      prisma.enrollment.count({ where: { status: "active" } }),
      prisma.payment.aggregate({
        where: { status: "completed" },
        _sum: { amount: true },
      }),
      prisma.enrollment.count({
        where: {
          enrolledAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
        },
      }),
      prisma.course.findMany({
        where: { isPublished: true, deletedAt: null },
        include: {
          _count: { select: { enrollments: true } },
          instructor: { select: { displayName: true } },
        },
        orderBy: { enrollments: { _count: "desc" } },
        take: 10,
      }),
    ]);

    return successResponse({
      totalUsers,
      totalCourses,
      totalEnrollments,
      totalRevenue: totalRevenue._sum.amount ?? 0,
      recentEnrollments,
      topCourses: topCourses.map((c) => ({
        id: c.id,
        title: c.title,
        instructor: c.instructor.displayName,
        enrollmentCount: c._count.enrollments,
      })),
    });
  } catch (error) {
    console.error("Analytics error:", error);
    return errorResponse("INTERNAL_ERROR", "분석 데이터 조회 중 오류가 발생했습니다.", 500);
  }
}
