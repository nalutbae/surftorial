import Link from "next/link";
import prisma from "@/lib/prisma";
import { SKILL_LEVELS } from "@/lib/constants";
import { formatKRW } from "@/lib/utils";

// ---------- Types ----------
type CourseRow = Awaited<ReturnType<typeof fetchCourses>>[number];

// ---------- Constants ----------
const BADGES = ["인기", "NEW", "베스트"] as const;

const GRADIENTS: Record<string, string> = {
  beginner: "from-ocean-200 to-ocean-400",
  intermediate: "from-ocean-400 to-ocean-600",
  advanced: "from-ocean-500 to-ocean-700",
  expert: "from-ocean-700 to-ocean-900",
};

// ---------- Data fetching (runs on server) ----------
async function fetchCourses() {

  const courses = await prisma.course.findMany({
    where: { isPublished: true },
    include: {
      instructor: {
        select: { id: true, displayName: true, avatarUrl: true },
      },
      category: {
        select: { id: true, name: true, slug: true },
      },
      reviews: {
        select: { rating: true },
      },
      _count: {
        select: { lessons: true, enrollments: true },
      },
    },
    orderBy: { enrollments: { _count: "desc" } },
    take: 6,
  });

  return courses;
}

function calcAvgRating(reviews: { rating: number }[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

// ---------- Card sub-component ----------
function PreviewCard({ course, badge }: { course: CourseRow; badge?: string }) {
  const levelLabel =
    SKILL_LEVELS[course.skillLevel as keyof typeof SKILL_LEVELS] ??
    course.skillLevel;
  const gradient =
    GRADIENTS[course.skillLevel] ?? GRADIENTS.beginner;
  const avgRating = calcAvgRating(course.reviews);
  const lessonCount = course._count.lessons;
  const enrollmentCount = course._count.enrollments;

  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <div className="card shadow-card relative overflow-hidden">
        {/* Thumbnail */}
        <div
          className={`aspect-[16/10] relative flex items-center justify-center bg-gradient-to-br ${gradient}`}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            opacity="0.2"
            className="text-white"
          >
            <path
              d="M4 32c12-16 24 8 36-8s20 0 20 8"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
          {badge && (
            <span className="absolute top-3 left-3 badge badge-hot">
              {badge}
            </span>
          )}
          <span className="absolute top-3 right-3 bg-black/55 text-white px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
            {levelLabel}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          {course.category && (
            <div className="text-xs font-semibold text-ocean-600 uppercase tracking-widest mb-1.5">
              {course.category.name}
            </div>
          )}

          {/* Title */}
          <h3 className="font-brand font-semibold text-base mb-2 leading-tight group-hover:text-ocean-700 transition-colors">
            {course.title}
          </h3>

          {/* Meta row */}
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
            <span>📺 {lessonCount}강</span>
            <span>👥 {enrollmentCount}명</span>
            {avgRating > 0 && <span>⭐ {avgRating}</span>}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-4 pt-4 border-t border-slate-100">
            <span className="font-brand font-bold text-xl text-ocean-700">
              {formatKRW(course.price)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ---------- Main component (server component) ----------
export default async function CoursesPreview() {
  const courses = await fetchCourses();

  return (
    <section className="py-20 px-6 bg-ocean-50" id="courses">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 text-xs font-semibold text-ocean-700 uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          인기 강좌
        </div>
        <h2 className="font-brand font-bold text-2xl md:text-3xl text-slate-900 mb-4 tracking-tight">
          레벨별 맞춤 서핑 강좌
        </h2>
        <p className="text-base text-slate-500 max-w-[600px] leading-relaxed mb-12">
          입문자부터 중급 서퍼까지, 내 수준에 맞는 강좌를 찾아보세요.
        </p>

        {/* Course grid */}
        {courses.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-lg">아직 등록된 강좌가 없습니다</p>
            <p className="text-sm mt-2">새로운 강좌를 기다려주세요!</p>
          </div>
        ) : (
          <div className="grid-3">
            {courses.map((course, i) => (
              <PreviewCard
                key={course.id}
                course={course}
                badge={i < BADGES.length ? BADGES[i] : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
