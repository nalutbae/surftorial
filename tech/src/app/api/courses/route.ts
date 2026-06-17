import { NextRequest } from "next/server";
import { getPrisma } from "@/lib/prisma";
import {
  successResponse,
  paginatedResponse,
  errorResponse,
  validationErrorResponse,
} from "@/lib/utils/api";
import { requireRole } from "@/lib/utils/auth";
import { courseFilterSchema, courseCreateSchema } from "@/lib/validations";
import { ZodError } from "zod";

// GET /api/courses — Public: list published courses with filters
export async function GET(request: NextRequest) {
  try {
    const prisma = await getPrisma();
    const { searchParams } = new URL(request.url);
    const query = courseFilterSchema.parse(Object.fromEntries(searchParams));

    const where = {
      isPublished: true,
      deletedAt: null,
      ...(query.category && { category: { slug: query.category } }),
      ...(query.skill_level && { skillLevel: query.skill_level }),
      ...(query.is_free !== undefined && { price: query.is_free ? 0 : { gt: 0 } }),
      ...(query.search && {
        OR: [
          { title: { contains: query.search, mode: "insensitive" as const } },
          { description: { contains: query.search, mode: "insensitive" as const } },
        ],
      }),
    };

    const orderBy =
      query.sort === "popular"
        ? { enrollments: { _count: "desc" as const } }
        : query.sort === "price_asc"
          ? { price: "asc" as const }
          : query.sort === "price_desc"
            ? { price: "desc" as const }
            : { publishedAt: "desc" as const };

    const [courses, total] = await Promise.all([
      prisma.course.findMany({
        where,
        include: {
          instructor: { select: { id: true, displayName: true, avatarUrl: true } },
          category: { select: { id: true, name: true, slug: true } },
          _count: { select: { lessons: true, enrollments: true } },
        },
        orderBy,
        skip: (query.page - 1) * query.per_page,
        take: query.per_page,
      }),
      prisma.course.count({ where }),
    ]);

    // Calculate average rating for each course
    const coursesWithRating = await Promise.all(
      courses.map(async (course) => {
        const reviewStats = await prisma.courseReview.aggregate({
          where: { courseId: course.id, deletedAt: null },
          _avg: { rating: true },
          _count: true,
        });
        return {
          ...course,
          ratingAvg: reviewStats._avg.rating ?? 0,
          reviewCount: reviewStats._count,
        };
      })
    );

    return paginatedResponse(coursesWithRating, total, query.page, query.per_page);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Course list error:", error);
    return errorResponse("INTERNAL_ERROR", "강의 목록 조회 중 오류가 발생했습니다.", 500);
  }
}

// POST /api/courses — Instructor/Admin: create a new course
export async function POST(request: NextRequest) {
  try {
    const prisma = await getPrisma();
    const authResult = await requireRole("instructor");
    if ("error" in authResult) return authResult.error;

    const body = await request.json();
    const data = courseCreateSchema.parse(body);

    const course = await prisma.course.create({
      data: {
        instructor: { connect: { id: authResult.data.profile.id } },
        title: data.title,
        description: data.description,
        price: data.price,
        thumbnailUrl: data.thumbnail_url,
        skillLevel: data.skill_level,
        ...(data.category && {
          category: { connect: { slug: data.category } },
        }),
      },
      include: {
        instructor: { select: { id: true, displayName: true, avatarUrl: true } },
        category: { select: { id: true, name: true, slug: true } },
      },
    });

    return successResponse(course, 201);
  } catch (error) {
    if (error instanceof ZodError) {
      return validationErrorResponse(error);
    }
    console.error("Course create error:", error);
    return errorResponse("INTERNAL_ERROR", "강의 생성 중 오류가 발생했습니다.", 500);
  }
}