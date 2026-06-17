import type { Metadata } from "next";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { isValidUUID } from "@/lib/utils/id";

import CourseDetail from "@/components/courses/CourseDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;

  // 잘못된 UUID 형식이면 DB 쿼리 없이 즉시 기본 메타데이터 반환
  if (!isValidUUID(id)) {
    return { title: "강좌를 찾을 수 없습니다 — Surftorial" };
  }

  const course = await prisma.course.findFirst({
    where: { id, deletedAt: null },
    select: { title: true, description: true },
  });

  if (!course) {
    return { title: "강좌를 찾을 수 없습니다 — Surftorial" };
  }

  return {
    title: `${course.title} — Surftorial`,
    description: course.description?.slice(0, 160) ?? "서핑 온라인 강좌를 확인해보세요.",
    openGraph: {
      title: `${course.title} — Surftorial`,
      description: course.description?.slice(0, 160) ?? "",
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;

  // 잘못된 UUID 형식이면 Prisma 쿼리 없이 즉시 404
  if (!isValidUUID(id)) {
    notFound();
  }


  const course = await prisma.course.findFirst({
    where: { id, deletedAt: null },
    include: {
      instructor: { select: { id: true, displayName: true, avatarUrl: true, bio: true } },
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
        take: 20,
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

  if (!course) {
    notFound();
  }

  // Aggregate review stats
  const reviewStats = await prisma.courseReview.aggregate({
    where: { courseId: id, deletedAt: null },
    _avg: { rating: true },
    _count: true,
  });

  const courseData = {
    ...course,
    publishedAt: course.publishedAt?.toISOString() ?? null,
    createdAt: course.createdAt.toISOString(),
    rating: reviewStats._avg.rating ?? 0,
    reviewCount: reviewStats._count,
    reviews: course.reviews.map((r) => ({
      ...r,
      createdAt: r.createdAt.toISOString(),
    })),
  };

  return <CourseDetail course={courseData} />;
}