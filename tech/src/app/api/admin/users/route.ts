import { NextRequest } from "next/server";
import { Role } from "@prisma/client";
import { getPrisma } from "@/lib/prisma";
import { successResponse, paginatedResponse, errorResponse } from "@/lib/utils/api";
import { requireRole } from "@/lib/utils/auth";

// GET /api/admin/users — Admin: list all users with stats
export async function GET(request: NextRequest) {
  try {
    const prisma = await getPrisma();
    const authResult = await requireRole("admin");
    if ("error" in authResult) return authResult.error;

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const perPage = parseInt(searchParams.get("per_page") || "20");
    const roleParam = searchParams.get("role"); // student, instructor, admin
    const role = roleParam as Role | null;

    const where = {
      ...(role && { role }),
      deletedAt: null,
    };

    const [users, total] = await Promise.all([
      prisma.profile.findMany({
        where,
        include: {
          _count: { select: { enrollments: true, courses: true, payments: true } },
        },
        orderBy: { joinDate: "desc" },
        skip: (page - 1) * perPage,
        take: perPage,
      }),
      prisma.profile.count({ where }),
    ]);

    return paginatedResponse(users, total, page, perPage);
  } catch (error) {
    console.error("Admin users error:", error);
    return errorResponse("INTERNAL_ERROR", "관리자 사용자 목록 조회 중 오류가 발생했습니다.", 500);
  }
}
