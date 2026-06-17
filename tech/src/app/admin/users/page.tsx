import { requireRole } from "@/lib/utils/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { RoleChangeForm, ToggleActiveForm, SearchForm } from "./client";

interface PageProps {
  searchParams: Promise<{ search?: string; role?: string; page?: string }>;
}

const PER_PAGE = 20;

const ROLE_LABELS: Record<string, string> = {
  student: "수강생",
  instructor: "강사",
  admin: "관리자",
};

const ROLE_COLORS: Record<string, string> = {
  student: "bg-blue-100 text-blue-700",
  instructor: "bg-sunset-100 text-sunset-700",
  admin: "bg-purple-100 text-purple-700",
};

export default async function AdminUsersPage({ searchParams }: PageProps) {
  const authResult = await requireRole("admin");
  if ("error" in authResult) {
    redirect("/login");
  }

  const { profile } = authResult.data;
  const sp = await searchParams;
  const search = sp.search?.trim() || "";
  const roleFilter = sp.role || "all";
  const page = Math.max(1, parseInt(sp.page || "1", 10) || 1);


  // Build where clause
  const where: Record<string, unknown> = {};

  if (search) {
    where.displayName = { contains: search, mode: "insensitive" };
  }
  if (roleFilter !== "all") {
    where.role = roleFilter;
  }

  const [totalUsers, filteredCount, users] = await Promise.all([
    prisma.profile.count({ where: { deletedAt: null } }),
    prisma.profile.count({ where }),
    prisma.profile.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PER_PAGE,
      take: PER_PAGE,
    }),
  ]);

  const totalPages = Math.ceil(filteredCount / PER_PAGE);

  // Stats
  const [totalActive, totalInstructor, totalAdmin] = await Promise.all([
    prisma.profile.count({ where: { deletedAt: null, role: "student" } }),
    prisma.profile.count({ where: { deletedAt: null, role: "instructor" } }),
    prisma.profile.count({ where: { deletedAt: null, role: "admin" } }),
  ]);

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
            <h1 className="text-lg font-semibold text-slate-800">사용자 관리</h1>
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
            className="pb-3 text-sm font-medium text-ocean-700 border-b-2 border-ocean-700"
          >
            👥 사용자 관리
          </Link>
          <Link
            href="/admin/courses"
            className="pb-3 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors"
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
          <StatCard label="전체 사용자" value={totalUsers.toLocaleString()} icon="👤" />
          <StatCard label="수강생" value={totalActive.toLocaleString()} icon="🎓" />
          <StatCard label="강사" value={totalInstructor.toLocaleString()} icon="📝" />
          <StatCard label="관리자" value={totalAdmin.toLocaleString()} icon="👑" />
        </div>

        {/* Search + Role Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <SearchForm currentSearch={search} currentRole={roleFilter} />
          <div className="flex items-center gap-2 text-sm text-slate-500">
            총 <span className="font-semibold text-slate-700">{filteredCount}</span>명
            {search && (
              <span>
                {" "}
                검색 결과 (전체 {totalUsers}명)
              </span>
            )}
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  이름
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  역할
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  숙련도
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  가입일
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  상태
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  관리
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-slate-400">
                    {search ? "검색 결과가 없습니다." : "등록된 사용자가 없습니다."}
                  </td>
                </tr>
              ) : (
                users.map((u) => {
                  const isActive = u.deletedAt === null;
                  return (
                    <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 text-sm font-mono text-slate-400">
                        {u.id.slice(0, 8)}...
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-700 font-bold text-sm">
                            {(u.displayName || "?").charAt(0).toUpperCase()}
                          </div>
                          <span className="text-sm font-medium text-slate-800">
                            {u.displayName || "—"}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <RoleChangeForm userId={u.id} currentRole={u.role} />
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {u.skillLevel}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-500">
                        {u.createdAt.toLocaleDateString("ko-KR")}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            isActive
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {isActive ? "활성" : "비활성"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <ToggleActiveForm
                          userId={u.id}
                          isActive={isActive}
                        />
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {page > 1 && (
              <Link
                href={`/admin/users?page=${page - 1}${search ? `&search=${encodeURIComponent(search)}` : ""}${roleFilter !== "all" ? `&role=${roleFilter}` : ""}`}
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
                      href={`/admin/users?page=${p}${search ? `&search=${encodeURIComponent(search)}` : ""}${roleFilter !== "all" ? `&role=${roleFilter}` : ""}`}
                      className="px-3 py-2 text-sm text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      {p}
                    </Link>
                  )}
                </span>
              ))}
            {page < totalPages && (
              <Link
                href={`/admin/users?page=${page + 1}${search ? `&search=${encodeURIComponent(search)}` : ""}${roleFilter !== "all" ? `&role=${roleFilter}` : ""}`}
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
