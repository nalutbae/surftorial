import { requireRole } from "@/lib/utils/auth";
import { redirect } from "next/navigation";
import { getPrisma } from "@/lib/prisma";
import Link from "next/link";
import { formatKRW } from "@/lib/utils";

export default async function AdminDashboardPage() {
  const authResult = await requireRole("admin");
  if ("error" in authResult) {
    redirect("/login");
  }

  const { profile } = authResult.data;

  // Fetch stats in parallel
  const prisma = await getPrisma();
  const [
    totalUsers,
    totalCourses,
    totalEnrollments,
    totalRevenue,
    recentPayments,
    recentCourses,
  ] = await Promise.all([
    prisma.profile.count({ where: { deletedAt: null } }),
    prisma.course.count({ where: { deletedAt: null } }),
    prisma.enrollment.count(),
    prisma.payment.aggregate({
      where: { status: "completed" },
      _sum: { amount: true },
    }),
    prisma.payment.findMany({
      where: { status: "completed" },
      orderBy: { createdAt: "desc" },
      take: 10,
      include: {
        user: { select: { id: true, displayName: true } },
        course: { select: { id: true, title: true } },
      },
    }),
    prisma.course.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "desc" },
      take: 5,
      include: {
        instructor: { select: { displayName: true } },
        _count: { select: { enrollments: true, lessons: true } },
      },
    }),
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
            <h1 className="text-lg font-semibold text-slate-800">관리자 대시보드</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">{profile.displayName} 관리자</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard label="전체 사용자" value={totalUsers.toLocaleString()} icon="👤" />
          <StatCard label="전체 강좌" value={totalCourses.toLocaleString()} icon="📚" />
          <StatCard label="수강 등록" value={totalEnrollments.toLocaleString()} icon="🎓" />
          <StatCard
            label="총 매출"
            value={formatKRW(totalRevenue._sum.amount ?? 0)}
            icon="💰"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/admin/courses"
            className="bg-white rounded-xl p-6 border border-slate-200 hover:border-ocean-300 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-slate-800 mb-2">📚 강좌 관리</h3>
            <p className="text-sm text-slate-500">강좌 생성, 수정, 공개 상태 관리</p>
          </Link>
          <Link
            href="/admin/users"
            className="bg-white rounded-xl p-6 border border-slate-200 hover:border-ocean-300 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-slate-800 mb-2">👤 사용자 관리</h3>
            <p className="text-sm text-slate-500">회원 조회, 역할 변경, 정지 관리</p>
          </Link>
          <Link
            href="/admin/analytics"
            className="bg-white rounded-xl p-6 border border-slate-200 hover:border-ocean-300 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-slate-800 mb-2">📊 매출 분석</h3>
            <p className="text-sm text-slate-500">매출 추이, 결제 내역, 구독 통계</p>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-800 mb-4">최근 결제 내역</h2>
            {recentPayments.length === 0 ? (
              <p className="text-sm text-slate-400">결제 내역이 없습니다.</p>
            ) : (
              <div className="space-y-3">
                {recentPayments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium text-slate-700">
                        {payment.user.displayName ?? "사용자"}
                      </span>
                      <span className="text-slate-400 mx-2">·</span>
                      <span className="text-slate-500">
                        {payment.course?.title ?? "구독 결제"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-ocean-700">
                        {formatKRW(payment.amount)}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          payment.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {payment.status === "completed" ? "완료" : "대기"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-800 mb-4">최근 강좌</h2>
            {recentCourses.length === 0 ? (
              <p className="text-sm text-slate-400">강좌가 없습니다.</p>
            ) : (
              <div className="space-y-3">
                {recentCourses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between text-sm">
                    <div>
                      <span className="font-medium text-slate-700">{course.title}</span>
                      <span className="text-slate-400 mx-2">·</span>
                      <span className="text-slate-500">
                        {course.instructor.displayName ?? "강사"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">{course._count.lessons}강</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-400">{course._count.enrollments}명</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          course.isPublished
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {course.isPublished ? "공개" : "임시"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
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