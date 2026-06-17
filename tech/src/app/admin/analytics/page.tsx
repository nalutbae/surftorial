import { requireRole } from "@/lib/utils/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { formatKRW } from "@/lib/utils";

export default async function AdminAnalyticsPage() {
  const authResult = await requireRole("admin");
  if ("error" in authResult) {
    redirect("/login");
  }

  const { profile } = authResult.data;

  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfYear = new Date(now.getFullYear(), 0, 1);

  // Parallel data fetching
  const [
    totalRevenue,
    monthlyRevenue,
    totalSubscribers,
    newUsersThisMonth,
    recentPayments,
    subscriptionStats,
  ] = await Promise.all([
    // Total completed revenue
    prisma.payment.aggregate({
      where: { status: "completed" },
      _sum: { amount: true },
    }),
    // This month's revenue
    prisma.payment.aggregate({
      where: { status: "completed", paidAt: { gte: startOfMonth } },
      _sum: { amount: true },
    }),
    // Active subscriptions
    prisma.subscription.count({
      where: { status: "active" },
    }),
    // New users this month
    prisma.profile.count({
      where: { createdAt: { gte: startOfMonth }, deletedAt: null },
    }),
    // Recent 20 completed payments
    prisma.payment.findMany({
      where: { status: "completed" },
      orderBy: { paidAt: "desc" },
      take: 20,
      include: {
        user: { select: { displayName: true } },
        course: { select: { title: true } },
      },
    }),
    // Subscription stats
    prisma.subscription.groupBy({
      by: ["status"],
      _count: { id: true },
    }),
  ]);

  // Calculate subscription stats
  const subCounts: Record<string, number> = {};
  subscriptionStats.forEach((s) => {
    subCounts[s.status] = s._count.id;
  });

  // Payment type stats (for info card)
  const paymentTypeStats = await prisma.payment.groupBy({
    by: ["paymentType"],
    where: { status: "completed" },
    _sum: { amount: true },
    _count: { id: true },
  });

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
            <h1 className="text-lg font-semibold text-slate-800">매출 분석</h1>
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
            className="pb-3 text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors"
          >
            📚 강좌 관리
          </Link>
          <Link
            href="/admin/analytics"
            className="pb-3 text-sm font-medium text-ocean-700 border-b-2 border-ocean-700"
          >
            📊 매출 분석
          </Link>
        </nav>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            label="총 매출 (전체)"
            value={formatKRW(totalRevenue._sum.amount ?? 0)}
            icon="💰"
          />
          <StatCard
            label="이번 달 매출"
            value={formatKRW(monthlyRevenue._sum.amount ?? 0)}
            icon="📈"
          />
          <StatCard
            label="구독자 수"
            value={totalSubscribers.toLocaleString()}
            icon="👥"
          />
          <StatCard
            label="신규 가입 (이번 달)"
            value={newUsersThisMonth.toLocaleString()}
            icon="🎉"
          />
        </div>

        {/* Payment Type Split */}
        {paymentTypeStats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-4">💰 결제 유형별 매출</h2>
              <div className="space-y-4">
                {paymentTypeStats.map((pt) => (
                  <div key={pt.paymentType} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">
                        {pt.paymentType === "one_time" ? "일시불" : "구독"}
                      </span>
                      <span className="text-xs text-slate-400">
                        ({pt._count.id}건)
                      </span>
                    </div>
                    <span className="font-semibold text-ocean-700">
                      {formatKRW(pt._sum.amount ?? 0)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Stats */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-4">🔄 구독 현황</h2>
              <div className="space-y-4">
                <SubRow label="🟢 활성" count={subCounts.active || 0} />
                <SubRow label="🔴 취소" count={subCounts.canceled || 0} />
                <SubRow label="⏰ 만료" count={subCounts.expired || 0} />
                <SubRow label="⚠️ 연체" count={subCounts.past_due || 0} />
              </div>
            </div>
          </div>
        )}

        {/* Recent Payments Table */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-semibold text-slate-800 mb-4">최근 결제 내역 (최대 20건)</h2>
          {recentPayments.length === 0 ? (
            <p className="text-sm text-slate-400 py-8 text-center">
              완료된 결제 내역이 없습니다.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      사용자
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      강좌 / 구분
                    </th>
                    <th className="px-3 py-2 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      금액
                    </th>
                    <th className="px-3 py-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      유형
                    </th>
                    <th className="px-3 py-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      상태
                    </th>
                    <th className="px-3 py-2 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      결제일시
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentPayments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-3 py-2.5 text-sm text-slate-700">
                        {payment.user.displayName || "사용자"}
                      </td>
                      <td className="px-3 py-2.5 text-sm text-slate-500">
                        {payment.course?.title ?? "구독 결제"}
                      </td>
                      <td className="px-3 py-2.5 text-sm font-semibold text-ocean-700 text-right">
                        {formatKRW(payment.amount)}
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                          {payment.paymentType === "one_time" ? "일시불" : "구독"}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-center">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                          완료
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-right text-sm text-slate-400">
                        {payment.paidAt
                          ? new Date(payment.paidAt).toLocaleString("ko-KR", {
                              month: "2-digit",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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

function SubRow({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-600">{label}</span>
      <span className="font-semibold text-slate-800">{count.toLocaleString()}</span>
    </div>
  );
}
