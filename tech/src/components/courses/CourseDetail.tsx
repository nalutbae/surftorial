"use client";

import { useState, useRef } from "react";
import { SKILL_LEVELS } from "@/lib/constants";
import { formatKRW } from "@/lib/utils";
import ProgressBar from "./ProgressBar";
import ReviewList from "./ReviewList";
import VideoPlayer from "./VideoPlayer";

// ---------- Types ----------
interface Lesson {
  id: string;
  title: string;
  slug: string;
  durationSec: number | null;
  isFreePreview: boolean;
  sortOrder: number;
}

interface Review {
  id: string;
  rating: number;
  comment: string | null;
  createdAt: string;
  user: { id: string; displayName: string | null; avatarUrl: string | null };
}

interface CourseDetailData {
  id: string;
  title: string;
  description: string | null;
  thumbnailUrl: string | null;
  skillLevel: keyof typeof SKILL_LEVELS;
  price: number;
  isPublished: boolean;
  publishedAt: string | null;
  createdAt: string;
  category: { id: number; name: string; slug: string } | null;
  instructor: { id: string; displayName: string | null; avatarUrl: string | null; bio: string | null };
  lessons: Lesson[];
  reviews: Review[];
  _count: { enrollments: number; lessons: number };
  rating: number;
  reviewCount: number;
}

// ---------- Level badge color ----------
const LEVEL_COLORS: Record<string, string> = {
  beginner: "bg-ocean-100 text-ocean-700",
  intermediate: "bg-sunset-100 text-sunset-700",
  advanced: "bg-amber-100 text-amber-700",
  expert: "bg-red-100 text-red-700",
};

// ---------- Component ----------
export default function CourseDetail({ course }: { course: CourseDetailData }) {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(
    course.lessons.length > 0 ? course.lessons[0].id : null
  );
  const [isEnrolled, setIsEnrolled] = useState(false);
  const lessonListRef = useRef<HTMLDivElement>(null);

  const levelLabel = SKILL_LEVELS[course.skillLevel] ?? course.skillLevel;
  const levelColor = LEVEL_COLORS[course.skillLevel] ?? LEVEL_COLORS.beginner;

  // Total duration in seconds
  const totalDurationSec = course.lessons.reduce(
    (acc, l) => acc + (l.durationSec ?? 0),
    0
  );

  // Format total duration
  const formatTotalDuration = (sec: number) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    if (h > 0) return `${h}시간 ${m}분`;
    return `${m}분`;
  };

  // Star rating renderer
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < Math.round(rating) ? "text-sunset-500" : "text-slate-200"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ===== Video / Hero Section ===== */}
      <div className="bg-slate-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-0">
            {/* Main content area */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="aspect-video bg-black">
                {activeLessonId ? (
                  <VideoPlayer
                    lessonId={activeLessonId}
                    courseId={course.id}
                    isEnrolled={isEnrolled}
                    isFreePreview={course.lessons.find((l) => l.id === activeLessonId)?.isFreePreview ?? false}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <p>재생할 레슨을 선택하세요</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar: Lesson List */}
            <div ref={lessonListRef} className="bg-slate-800 text-white max-h-[70vh] lg:max-h-none overflow-y-auto">
              <div className="p-4 border-b border-slate-700 sticky top-0 bg-slate-800 z-10">
                <h3 className="font-brand font-semibold text-sm">
                  강의 목차 ({course.lessons.length}강)
                </h3>
              </div>
              <ul>
                {course.lessons.map((lesson, index) => (
                  <li key={lesson.id}>
                    <button
                      onClick={() => setActiveLessonId(lesson.id)}
                      className={`w-full text-left px-4 py-3 flex items-start gap-3 transition hover:bg-slate-700 ${
                        activeLessonId === lesson.id ? "bg-slate-700 border-l-2 border-sunset-500" : ""
                      }`}
                    >
                      <span className="text-sm text-slate-400 mt-0.5 w-6 shrink-0">{index + 1}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{lesson.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {lesson.durationSec && (
                            <span className="text-xs text-slate-400">
                              {Math.floor(lesson.durationSec / 60)}:{String(lesson.durationSec % 60).padStart(2, "0")}
                            </span>
                          )}
                          {lesson.isFreePreview && (
                            <span className="badge bg-sunset-500 text-white text-[10px]">무료</span>
                          )}
                        </div>
                      </div>
                      {!isEnrolled && !lesson.isFreePreview && (
                        <svg className="w-4 h-4 text-slate-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m0 0v2m0-2h2m-2 0H10m10-6V7a4 4 0 00-4-4H6a4 4 0 00-4 4v6m16 0a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2m10-6V7a4 4 0 00-4-4H6a4 4 0 00-4 4v6" />
                        </svg>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Course Info Section ===== */}
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Meta */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                {course.category && (
                  <span className="badge bg-ocean-100 text-ocean-700">{course.category.name}</span>
                )}
                <span className={`badge ${levelColor}`}>{levelLabel}</span>
              </div>
              <h1 className="font-brand font-bold text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
                {course.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                {/* Instructor */}
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center text-sm font-bold text-ocean-700">
                    {course.instructor.displayName?.charAt(0) ?? "?"}
                  </span>
                  <span>{course.instructor.displayName ?? "강사"}</span>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {renderStars(course.rating)}
                  <span className="ml-1 font-semibold text-slate-700">{course.rating.toFixed(1)}</span>
                  <span className="text-slate-400">({course.reviewCount})</span>
                </div>
                {/* Students */}
                <span>수강 {course._count.enrollments}명</span>
                {/* Total duration */}
                <span>{formatTotalDuration(totalDurationSec)}</span>
              </div>
            </div>

            {/* Description */}
            {course.description && (
              <section>
                <h2 className="font-brand font-semibold text-lg text-slate-900 mb-3">강의 소개</h2>
                <div className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                  {course.description}
                </div>
              </section>
            )}

            {/* Progress Bar (for enrolled users) */}
            {isEnrolled && (
              <section>
                <h2 className="font-brand font-semibold text-lg text-slate-900 mb-3">수강 진도</h2>
                <ProgressBar courseId={course.id} totalLessons={course.lessons.length} />
              </section>
            )}

            {/* Curriculum */}
            <section>
              <h2 className="font-brand font-semibold text-lg text-slate-900 mb-3">
                커리큘럼
              </h2>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                {course.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`flex items-center gap-4 px-5 py-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition ${
                      activeLessonId === lesson.id ? "bg-ocean-50" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold text-slate-400 w-8">{index + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800 truncate">{lesson.title}</p>
                      {lesson.durationSec && (
                        <p className="text-xs text-slate-400 mt-0.5">
                          {Math.floor(lesson.durationSec / 60)}분 {lesson.durationSec % 60}초
                        </p>
                      )}
                    </div>
                    {lesson.isFreePreview && (
                      <span className="badge bg-sunset-100 text-sunset-700 text-[10px]">무료 미리보기</span>
                    )}
                    {!isEnrolled && !lesson.isFreePreview && (
                      <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m0 0v2m0-2h2m-2 0H10m10-6V7a4 4 0 00-4-4H6a4 4 0 00-4 4v6m16 0a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2m10-6V7a4 4 0 00-4-4H6a4 4 0 00-4 4v6" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="font-brand font-semibold text-lg text-slate-900 mb-3">
                수강평 ({course.reviewCount})
              </h2>
              <ReviewList reviews={course.reviews} />
            </section>
          </div>

          {/* Right: Sticky Sidebar (Purchase CTA) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl border border-slate-200 card-shadow-md p-6 space-y-4">
              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="font-brand font-bold text-3xl text-ocean-700">
                  {formatKRW(course.price)}
                </span>
              </div>

              {/* Quick info */}
              <div className="flex items-center gap-4 text-sm text-slate-500 py-2">
                <span>📺 {course._count.lessons}강</span>
                <span>⏱ {formatTotalDuration(totalDurationSec)}</span>
              </div>

              {/* CTA buttons */}
              {isEnrolled ? (
                <button className="w-full btn btn-primary py-3 text-base">
                  계속 수강하기
                </button>
              ) : (
                <div className="space-y-3">
                  <button className="w-full btn btn-sunset py-3 text-base">
                    수강 신청하기
                  </button>
                  <p className="text-xs text-center text-slate-400">
                    결제 시 즉시 수강 가능합니다
                  </p>
                </div>
              )}

              {/* Instructor info */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">강사</p>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center text-sm font-bold text-ocean-700">
                    {course.instructor.displayName?.charAt(0) ?? "?"}
                  </span>
                  <div>
                    <p className="font-medium text-slate-800">{course.instructor.displayName ?? "강사"}</p>
                    {course.instructor.bio && (
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">{course.instructor.bio}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}