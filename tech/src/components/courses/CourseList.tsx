"use client";

import { useState, useEffect, useCallback } from "react";
import { COURSE_CATEGORIES, SKILL_LEVELS } from "@/lib/constants";
import CourseCard, { type CourseItem } from "./CourseCard";

type SortOption = "latest" | "popular" | "price_asc" | "price_desc";

export default function CourseList() {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [sort, setSort] = useState<SortOption>("latest");

  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 12;

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        page: String(page),
        per_page: String(perPage),
        sort,
      });
      if (search) params.set("search", search);
      if (category) params.set("category", category);

      const res = await fetch(`/api/courses?${params.toString()}`);
      if (!res.ok) throw new Error("강좌를 불러오지 못했습니다.");
      const json = await res.json();

      let filtered = json.data as CourseItem[];

      // Client-side skill level filter (API doesn't support it natively)
      if (skillLevel) {
        filtered = filtered.filter((c) => c.skillLevel === skillLevel);
      }

      setCourses(filtered);
      setTotalPages(json.meta?.total_pages ?? 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }, [page, sort, search, category, skillLevel]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [search, category, skillLevel, sort]);

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-12">
      {/* ===== Filter Bar ===== */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="강좌 검색..."
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition"
            />
          </div>

          {/* Category Select */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition min-w-[140px]"
          >
            <option value="">전체 카테고리</option>
            {Object.entries(COURSE_CATEGORIES).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>

          {/* Skill Level Select */}
          <select
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value)}
            className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition min-w-[120px]"
          >
            <option value="">전체 레벨</option>
            {Object.entries(SKILL_LEVELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>

          {/* Sort Select */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 transition min-w-[120px]"
          >
            <option value="latest">최신순</option>
            <option value="popular">인기순</option>
            <option value="price_asc">가격 낮은순</option>
            <option value="price_desc">가격 높은순</option>
          </select>
        </div>
      </div>

      {/* ===== Course Grid ===== */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-ocean-200 border-t-ocean-600 rounded-full animate-spin" />
          <span className="ml-3 text-slate-500 text-sm">강좌를 불러오는 중...</span>
        </div>
      ) : error ? (
        <div className="text-center py-20">
          <p className="text-red-500 mb-4">{error}</p>
          <button onClick={fetchCourses} className="btn btn-outline">
            다시 시도
          </button>
        </div>
      ) : courses.length === 0 ? (
        <div className="text-center py-20">
          <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          <p className="text-slate-500 text-lg font-medium mb-2">검색 결과가 없습니다</p>
          <p className="text-slate-400 text-sm">다른 필터 조건으로 검색해보세요.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* ===== Pagination ===== */}
          {totalPages > 1 && (
            <nav className="flex items-center justify-center gap-2 mt-12" aria-label="페이지 네비게이션">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="px-3 py-2 text-sm border border-slate-200 rounded-lg hover:bg-ocean-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                이전
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-2 text-sm rounded-lg transition ${
                    p === page
                      ? "bg-ocean-700 text-white font-semibold"
                      : "border border-slate-200 hover:bg-ocean-50"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="px-3 py-2 text-sm border border-slate-200 rounded-lg hover:bg-ocean-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                다음
              </button>
            </nav>
          )}
        </>
      )}
    </section>
  );
}