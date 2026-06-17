import type { Metadata } from "next";
import CourseList from "@/components/courses/CourseList";

export const metadata: Metadata = {
  title: "강좌 목록 — Surftorial",
  description: "입문부터 상급까지, 레벨별 서핑 강좌를 만나보세요. 카테고리별 검색과 필터로 나에게 맞는 강좌를 찾으세요.",
  openGraph: {
    title: "강좌 목록 — Surftorial",
    description: "입문부터 상급까지, 레벨별 서핑 강좌를 만나보세요.",
  },
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-950 text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-ocean-200 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-sunset-400" />
            온라인 서핑 강좌
          </div>
          <h1 className="font-brand font-bold text-3xl md:text-4xl tracking-tight mb-4">
            레벨별 맞춤 서핑 강좌
          </h1>
          <p className="text-ocean-100 text-base md:text-lg max-w-[600px] leading-relaxed">
            입문자부터 상급 서퍼까지, 내 수준에 맞는 강좌를 검색하고 필터로 찾아보세요.
          </p>
        </div>
      </section>

      {/* Course List with Filters */}
      <CourseList />
    </main>
  );
}