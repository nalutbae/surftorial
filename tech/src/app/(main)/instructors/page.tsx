import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "코치진 소개 — Surftorial",
  description: "전문 서핑 코치진을 만나보세요. 서핑 헤드라인부터 프리 프로필까지, 최고의 전문가가 직접 코칭합니다.",
  openGraph: {
    title: "코치진 소개 — Surftorial",
    description: "전문 서핑 코치진을 만나보세요. 서핑 헤드라인부터 프리 프로필까지.",
  },
};

const instructors = [
  {
    id: 1,
    name: "김민수",
    image: "/instructors/kim-minsu.jpg",
    specialty: "서핑 헤드라인",
    experience: "15년",
    bio: "전직 내셔널 챔피언으로, 입문자부터 상급자까지 체계적인 기술 전달에 능숙합니다.",
  },
  {
    id: 2,
    name: "이서연",
    image: "/instructors/lee-seoyeon.jpg",
    specialty: "프리 프로필",
    experience: "12년",
    bio: "여자 서핑 대회 다수 수상자, 스타일과 파도 읽기를 정교하게 가르칩니다.",
  },
  {
    id: 3,
    name: "박준혁",
    image: "/instructors/park-junhyuk.jpg",
    specialty: "서핑 코칭",
    experience: "10년",
    bio: "개인별 맞춤형 코칭 전문가, 영상 분석과 실시간 피드백으로 빠른 성장을 돕습니다.",
  },
  {
    id: 4,
    name: "최유진",
    image: "/instructors/choi-yujin.jpg",
    specialty: "바디보딩",
    experience: "8년",
    bio: "바디보딩 전문 코치, 기본기부터 고급 테크닉까지 단계별 커리큘럼 운영.",
  },
  {
    id: 5,
    name: "정도현",
    image: "/instructors/jung-dohyun.jpg",
    specialty: "서핑 파이트니스",
    experience: "9년",
    bio: "서핑 전용 트레이닝 프로그램 개발, 근력과 밸런스 강화로 부상 예방.",
  },
  {
    id: 6,
    name: "한지원",
    image: "/instructors/han-jiwon.jpg",
    specialty: "주니어 서핑",
    experience: "7년",
    bio: "어린이와 청소년 전문 코치, 재미와 안전을 동시에 고려한 교육법.",
  },
];

export default function InstructorsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-950 text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-ocean-200 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-sunset-400" />
            코치진
          </div>
          <h1 className="font-brand font-bold text-3xl md:text-4xl tracking-tight mb-4">
            전문 서핑 코치진 소개
          </h1>
          <p className="text-ocean-100 text-base md:text-lg max-w-[600px] leading-relaxed">
            서핑 헤드라인부터 프리 프로필까지, 최고의 전문가가 직접 코칭합니다.
          </p>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="card overflow-hidden hover:shadow-xl transition-all duration-250 group"
              >
                <div className="aspect-square bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                  <div className="text-ocean-300 font-brand font-bold text-4xl">
                    {instructor.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-brand font-bold text-xl text-slate-900 mb-1">
                        {instructor.name}
                      </h3>
                      <div className="badge badge-level mb-2">
                        {instructor.specialty}
                      </div>
                    </div>
                    <div className="text-sm text-slate-500 font-semibold">
                      {instructor.experience}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {instructor.bio}
                  </p>
                  <button className="btn btn-primary w-full group-hover:bg-ocean-800">
                    코치 되기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}