import { requireRole } from "@/lib/utils/auth";
import { redirect } from "next/navigation";
import { getPrisma } from "@/lib/prisma";
import Link from "next/link";
import { formatKRW } from "@/lib/utils";
import { PublishToggleForm } from "./client";

interface PageProps {
  searchParams: Promise<{ status?: string; search?: string; page?: string }>;
}

const PER_PAGE = 20;

export default async function AdminCoursesPage({ searchParams }: PageProps) {
  const authResult = await requireRole("admin");
  if ("error" in authResult) {
    redirect("/login");
  }

  const { profile } = authResult.data;
  const sp = await searchParams;
  const status = sp.status || "all";
  const search = sp.search?.trim() || "";
  const page = Math.max(1, parseInt(sp.page || "1", 10) || 1);

  const prisma = await getPrisma();

  // Build where clause
  const where: Record<string, unknown> = { deletedAt: null };
  if (status === "published") where.isPublished = true;
  if (status === "draft") where.isPublished = false;
  if (search) {
    where.title = { contains: search, mode: "insensitive" };
  }

  const [filteredCount, totalCourses, totalPublished, totalDraft, courses] =
    await Promise.all([
      prisma.course.count({ where }),
      prisma.course.count({ where: { deletedAt: null } }),
      prisma.course.count({ where: { deletedAt: null, isPublished: true } }),
      prisma.course.count({ where: { deletedAt: null, isPublished: false } }),
      prisma.course.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * PER_PAGE,
        take: PER_PAGE,
        include: {
          instructor: { select: { displayName: true } },
          _count: { select: { enrollments: true, lessons: true } },
        },
      }),
    ]);

  const totalPages = Math.ceil(filteredCount / PER_PAGE);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-brand font-bold text-lg text-ocean-700">
              Surftorial
            </Link>
            <span className="text-sm text-slate-400">|</span>
            <h1 className="text-lg font-semibold text-slate-800">강좌 관리</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-sm text-ocean-600 hover:text-ocean-800 transition-colors"
            >
              ← 대시보드
            </Link>
            <span className="text-sm text-slate-600">{profile.displayName} 관리자</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <nav className="flex gap-6 mb-8 border-b border-slate-200">
          <Link
            href="/admin"
            className="pb-3 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors"
          >
            대시보드
          </Link>
          <Link
            href="/admin/users"
            className="pb-3 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors"
          >
            👥 사용자 관리
          </Link>
          <Link
            href="/admin/courses"
            className="pb-3 text-sm font-medium text-ocean-700 border-b-2 border-ocean-700"
          >
            📚 강좌 관리
          </Link>
          <Link
            href="/admin/analytics"
            className="pb-3 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors"
          >
            📊 매출 분석
          </Link>
        </nav>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard label="전체 강좌" value={totalCourses.toLocaleString()} icon="📚" />
          <StatCard label="공개" value={totalPublished.toLocaleString()} icon="✅" />
          <StatCard label="임시 저장" value={totalDraft.toLocaleString()} icon="✏️" />
          <StatCard
            label="총 수강생"
            value={courses.reduce((s, c) => s + c._count.enrollments, 0).toLocaleString()}
            icon="🎓"
          />
        </div>

        {/* Status Tabs + Search */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1">
            {[
              { key: "all", label: "전체" },
              { key: "published", label: "✅ 공개" },
              { key: "draft", label: "✏️ 임시" },
            ].map((tab) => (
              <Link
                key={tab.key}
                href={`/admin/courses?status=${tab.key}${search ? `&search=${encodeURIComponent(search)}` : ""}`}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  status === tab.key
                    ? "bg-ocean-700 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">
              총 <span className="font-semibold text-slate-700">{filteredCount}</span>개
            </span>
          </div>
        </div>

        {/* Courses Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  강좌명
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  강사
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  가격
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  수강생
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  레슨
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  공개
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  생성일
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  관리
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {courses.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-slate-400">
                    {search ? "검색 결과가 없습니다." : "등록된 강좌가 없습니다."}
                  </td>
                </tr>
              ) : (
                courses.map((course) => (
                  <tr key={course.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="text-sm font-medium text-slate-800">
                        {course.title}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {course.instructor.displayName || "—"}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-ocean-700 text-right">
                      {course.price > 0 ? formatKRW(course.price) : "무료"}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500 text-center">
                      {course._count.enrollments}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500 text-center">
                      {course._count.lessons}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          course.isPublished
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {course.isPublished ? "공개" : "임시"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-500">
                      {course.createdAt.toLocaleDateString("ko-KR")}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <PublishToggleForm
                        courseId={course.id}
                        isPublished={course.isPublished}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {page > 1 && (
              <Link
                href={`/admin/courses?page=${page - 1}&status=${status}${search ? `&search=${encodeURIComponent(search)}` : ""}`}
                className="px-3 py-2 text-sm text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                ← 이전
              </Link>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
              .map((p, idx, arr) => (
                <span key={p} className="flex items-center gap-1">
                  {idx > 0 && arr[idx - 1] !== p - 1 && (
                    <span className="px-1 text-slate-300">···</span>
                  )}
                  {p === page ? (
                    <span className="px-3 py-2 text-sm font-semibold text-white bg-ocean-700 rounded-lg">
                      {p}
                    </span>
                  ) : (
                    <Link
                      href={`/admin/courses?page=${p}&status=${status}${search ? `&search=${encodeURIComponent(search)}` : ""}`}
                      className="px-3 py-2 text-sm text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      {p}
                    </Link>
                  )}
                </span>
              ))}
            {page < totalPages && (
              <Link
                href={`/admin/courses?page=${page + 1}&status=${status}${search ? `&search=${encodeURIComponent(search)}` : ""}`}
                className="px-3 py-2 text-sm text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                다음 →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-500">{label}</span>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="font-brand font-bold text-2xl text-slate-800">{value}</div>
    </div>
  );
}
