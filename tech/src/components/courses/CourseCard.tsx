import Link from "next/link";
import { SKILL_LEVELS } from "@/lib/constants";
import { formatKRW } from "@/lib/utils";

// ---------- Types ----------
export interface CourseItem {
  id: string;
  title: string;
  description: string | null;
  thumbnailUrl: string | null;
  skillLevel: keyof typeof SKILL_LEVELS;
  price: number;
  category: { id: number; name: string; slug: string } | null;
  instructor: { id: string; displayName: string | null; avatarUrl: string | null };
  _count: { lessons: number; enrollments: number };
  publishedAt: Date | null;
}

// ---------- Skill level badge color ----------
const LEVEL_COLORS: Record<string, string> = {
  beginner: "bg-ocean-100 text-ocean-700",
  intermediate: "bg-sunset-100 text-sunset-700",
  advanced: "bg-amber-100 text-amber-700",
  expert: "bg-red-100 text-red-700",
};

// ---------- Gradient map for thumbnail fallback ----------
const GRADIENTS: Record<string, string> = {
  beginner: "from-ocean-200 to-ocean-400",
  intermediate: "from-ocean-400 to-ocean-600",
  advanced: "from-ocean-500 to-ocean-700",
  expert: "from-ocean-700 to-ocean-900",
};

// ---------- Component ----------
export default function CourseCard({ course }: { course: CourseItem }) {
  const levelLabel = SKILL_LEVELS[course.skillLevel] ?? course.skillLevel;
  const levelColor = LEVEL_COLORS[course.skillLevel] ?? LEVEL_COLORS.beginner;
  const gradient = GRADIENTS[course.skillLevel] ?? GRADIENTS.beginner;

  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <article className="card shadow-card relative overflow-hidden">
        {/* Thumbnail area */}
        <div className={`aspect-[16/10] relative flex items-center justify-center bg-gradient-to-br ${gradient}`}>
          {course.thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={course.thumbnailUrl}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.2" className="text-white">
              <path d="M4 32c12-16 24 8 36-8s20 0 20 8" stroke="currentColor" strokeWidth="4" />
            </svg>
          )}
          {/* Skill level badge */}
          <span className={`absolute top-3 left-3 badge ${levelColor}`}>
            {levelLabel}
          </span>
          {/* Enrollment count */}
          <span className="absolute top-3 right-3 bg-black/55 text-white px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
            수강 {course._count.enrollments}명
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
          <h3 className="font-brand font-semibold text-base mb-2 leading-tight group-hover:text-ocean-700 transition-colors line-clamp-2">
            {course.title}
          </h3>

          {/* Instructor */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
            <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
              {course.instructor.displayName?.charAt(0) ?? "?"}
            </span>
            <span>{course.instructor.displayName ?? "강사"}</span>
          </div>

          {/* Meta row */}
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
            <span>📺 {course._count.lessons}강</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-4 pt-4 border-t border-slate-100">
            <span className="font-brand font-bold text-xl text-ocean-700">
              {formatKRW(course.price)}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}