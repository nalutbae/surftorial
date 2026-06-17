import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { successResponse, paginatedResponse, errorResponse, forbiddenResponse } from "@/lib/utils/api";
import { requireRole } from "@/lib/utils/auth";

// GET /api/admin/courses — Admin: all courses including unpublished
export async function GET(request: NextRequest) {
  try {
    const authResult = await requireRole("admin");
    if ("error" in authResult) return authResult.error;

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const perPage = parseInt(searchParams.get("per_page") || "20");
    const status = searchParams.get("status"); // published, unpublished, all

    const where = {
      ...(status === "published" && { isPublished: true }),
      ...(status === "unpublished" && { isPublished: false }),
      deletedAt: null,
    };

    const [courses, total] = await Promise.all([
      prisma.course.findMany({
        where,
        include: {
          instructor: { select: { id: true, displayName: true } },
          _count: { select: { lessons: true, enrollments: true } },
        },
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * perPage,
        take: perPage,
      }),
      prisma.course.count({ where }),
    ]);

    return paginatedResponse(courses, total, page, perPage);
  } catch (error) {
    console.error("Admin courses error:", error);
    return errorResponse("INTERNAL_ERROR", "관리자 강의 목록 조회 중 오류가 발생했습니다.", 500);
  }
}
