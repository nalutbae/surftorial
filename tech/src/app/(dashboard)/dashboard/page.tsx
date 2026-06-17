import { getProfile } from "@/lib/utils/auth";
import { redirect } from "next/navigation";
import { getPrisma } from "@/lib/prisma";
import Link from "next/link";
import { formatKRW, formatDate } from "@/lib/utils";

export default async function DashboardPage() {
  const result = await getProfile();
  if (!result) redirect("/login");

  const { profile } = result;

  // Fetch user's enrollments
  const prisma = await getPrisma();
  const enrollments = await prisma.enrollment.findMany({
    where: { userId: profile.id },
    include: {
      course: {
        select: {
          id: true,
          title: true,
          thumbnailUrl: true,
          skillLevel: true,
          category: true,
          lessons: { select: { id: true, durationSec: true } },
        },
      },
    },
    orderBy: { enrolledAt: "desc" },
  });

  // Calculate progress for each enrollment
  const enrollmentsWithProgress = await Promise.all(
    enrollments.map(async (enrollment) => {
      const totalLessons = enrollment.course.lessons.length;
      const completedLessons = await prisma.lessonProgress.count({
        where: {
          userId: profile.id,
          lesson: { courseId: enrollment.courseId },
          isCompleted: true,
        },
      });
      const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

      return { ...enrollment, progressPercent, completedLessons, totalLessons };
    })
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-brand font-bold text-lg text-ocean-700">
            Surftorial
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/courses" className="text-sm text-slate-600 hover:text-ocean-700">
              강좌 탐색
            </Link>
            <span className="text-sm text-slate-400">|</span>
            <span className="text-sm text-slate-600">{profile.displayName ?? "사용자"}님</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="font-brand font-bold text-2xl text-slate-800 mb-2">
            안녕하세요, {profile.displayName ?? "사용자"}님! 🏄
          </h1>
          <p className="text-slate-500">오늘도 서핑 강좌로 실력을 키워보세요.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-sm text-slate-500 mb-1">수강 중인 강좌</div>
            <div className="font-brand font-bold text-2xl text-ocean-700">
              {enrollmentsWithProgress.length}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-sm text-slate-500 mb-1">완료한 강좌</div>
            <div className="font-brand font-bold text-2xl text-green-600">
              {enrollmentsWithProgress.filter((e) => e.progressPercent >= 100).length}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="text-sm text-slate-500 mb-1">수강 역할</div>
            <div className="font-brand font-bold text-2xl text-slate-800">
              {profile.role === "instructor" ? "강사" : profile.role === "admin" ? "관리자" : "수강생"}
            </div>
          </div>
        </div>

        {/* My Courses */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg text-slate-800">내 강좌</h2>
            <Link
              href="/courses"
              className="text-sm text-ocean-600 hover:text-ocean-700 font-medium"
            >
              강좌 탐색하기 →
            </Link>
          </div>

          {enrollmentsWithProgress.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
              <div className="text-4xl mb-4">🏄</div>
              <h3 className="font-semibold text-slate-700 mb-2">아직 수강 중인 강좌가 없습니다</h3>
              <p className="text-slate-400 text-sm mb-6">
                첫 강좌를 수강해보세요!
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-700 text-white rounded-lg font-medium hover:bg-ocean-800 transition-colors"
              >
                강좌 둘러보기
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrollmentsWithProgress.map((enrollment) => (
                <Link
                  key={enrollment.id}
                  href={`/courses/${enrollment.courseId}`}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group"
                >
                  <div className="aspect-video bg-gradient-to-br from-ocean-200 to-ocean-400 relative">
                    {enrollment.course.thumbnailUrl && (
                      <img
                        src={enrollment.course.thumbnailUrl}
                        alt={enrollment.course.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="text-white text-xs font-medium">
                        {enrollment.completedLessons}/{enrollment.totalLessons}강 완료
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-ocean-700 transition-colors">
                      {enrollment.course.title}
                    </h3>
                    <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                      <div
                        className="bg-ocean-600 h-2 rounded-full transition-all"
                        style={{ width: `${enrollment.progressPercent}%` }}
                      />
                    </div>
                    <span className="text-sm text-slate-500">
                      진도율 {enrollment.progressPercent}%
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Admin Link (if admin) */}
        {profile.role === "admin" && (
          <div className="bg-ocean-50 rounded-xl p-6 border border-ocean-200">
            <h3 className="font-semibold text-ocean-800 mb-2">관리자 메뉴</h3>
            <p className="text-sm text-ocean-600 mb-4">
              관리자 대시보드에서 강좌, 사용자, 매출을 관리할 수 있습니다.
            </p>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-700 text-white rounded-lg text-sm font-medium hover:bg-ocean-800 transition-colors"
            >
              관리자 대시보드 →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}