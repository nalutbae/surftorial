import "dotenv/config";
import { randomUUID } from "node:crypto";
import * as path from "node:path";
import { PGlite } from "@electric-sql/pglite";
import { PrismaPGlite } from "pglite-prisma-adapter";
import { PrismaClient } from "@prisma/client";

async function getPrisma(): Promise<PrismaClient> {
  const dataDir = path.join(process.cwd(), "prisma/dev-pglite");
  const pglite = new PGlite({ dataDir });
  await pglite.query("SELECT 1 AS pglite_ready");
  const adapter = new PrismaPGlite(pglite);
  return new PrismaClient({ adapter });
}

async function main() {
  const prisma = await getPrisma();
  // 1. 카테고리 생성
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "입문",
        slug: "beginner",
        description: "서핑을 처음 시작하는 분들을 위한 기초 강좌",
        sortOrder: 1,
      },
    }),
    prisma.category.create({
      data: {
        name: "중급",
        slug: "intermediate",
        description: "기본기를 익힌 서퍼를 위한 테크닉 강좌",
        sortOrder: 2,
      },
    }),
    prisma.category.create({
      data: {
        name: "상급",
        slug: "advanced",
        description: "고급 테크닉과 파도 읽기",
        sortOrder: 3,
      },
    }),
    prisma.category.create({
      data: {
        name: "스페셜",
        slug: "special",
        description: "쇼트보드, 롱보드 등 특별 주제",
        sortOrder: 4,
      },
    }),
  ]);

  console.log(`✅ Categories: ${categories.length} created`);

  // 2. 강사 생성 (Profile + role=instructor)
  const instructors = await Promise.all([
    prisma.profile.create({
      data: {
        id: randomUUID(),
        displayName: "김파도",
        role: "instructor",
        bio: "제주도 출신 15년 경력 프로 서퍼. 국제 서핑 협회(ISA) 레벨 2 인증 코치.",
        skillLevel: "expert",
      },
    }),
    prisma.profile.create({
      data: {
        id: randomUUID(),
        displayName: "이서프",
        role: "instructor",
        bio: "양양 서프비치 전속 코치. 초보자 교육 전문. 1,000명 이상의 입문 서퍼 배출.",
        skillLevel: "advanced",
      },
    }),
    prisma.profile.create({
      data: {
        id: randomUUID(),
        displayName: "박웨이브",
        role: "instructor",
        bio: "호주 골드코스트에서 5년 활동. 쇼트보드 테크닉 및 파도 예측 전문.",
        skillLevel: "expert",
      },
    }),
    prisma.profile.create({
      data: {
        id: randomUUID(),
        displayName: "정바다",
        role: "instructor",
        bio: "국내 최초 여성 ISA 레벨 2 코치. 여성 서퍼 입문 프로그램 기획.",
        skillLevel: "advanced",
      },
    }),
  ]);

  console.log(`✅ Instructors: ${instructors.length} created`);

  // 2.5. 학생 프로필 (목업 사용자 — dev 로그인용)
  const student = await prisma.profile.create({
    data: {
      id: randomUUID(),
      displayName: "파도초보",
      role: "student",
      bio: "서핑 입문 3개월차!",
      skillLevel: "beginner",
    },
  });

  console.log(`✅ Student profile: ${student.displayName} (${student.role})`);

  // Admin (role 체크 및 관리자 페이지 접근용 — server-side getAuthUser() dev bypass)
  const admin = await prisma.profile.create({
    data: {
      id: randomUUID(),
      role: "admin",
      displayName: "관리자",
    },
  });

  console.log(`✅ Admin profile: ${admin.displayName} (${admin.role})`);

  // 3. 강좌 데이터 (8개)
  const coursesData = [
    {
      title: "서핑 첫걸음: 입문자를 위한 기초 완벽 가이드",
      description:
        "서핑 보드 고르는 법부터 패들링, 테이크오프까지. 처음 서핑을 시작하는 분들을 위한 A-Z 기초 강좌입니다. 이론과 실전 팁을 모두 담았습니다.",
      skillLevel: "beginner" as const,
      categoryIdx: 0,
      instructorIdx: 1,
      price: 0,
      lessons: [
        { title: "서핑이란? — 역사와 매력", slug: "intro-what-is-surfing", durationSec: 420, isFreePreview: true },
        { title: "서핑 보드와 장비 완벽 가이드", slug: "gear-guide", durationSec: 680, isFreePreview: true },
        { title: "패들링 기초 — 물 위에서 나아가기", slug: "paddling-basics", durationSec: 540, isFreePreview: false },
        { title: "테이크오프 — 파도 위에 서는 순간", slug: "takeoff-mastery", durationSec: 720, isFreePreview: false },
        { title: "안전 수칙과 서핑 에티켓", slug: "safety-etiquette", durationSec: 380, isFreePreview: false },
      ],
    },
    {
      title: "파도 읽기의 기술: 입문에서 중급으로",
      description:
        "파도의 종류와 구조를 이해하고, 좋은 파도를 골라잡는 법을 배웁니다. 더 이상 아무 파도나 기다리지 마세요.",
      skillLevel: "intermediate" as const,
      categoryIdx: 1,
      instructorIdx: 0,
      price: 49000,
      lessons: [
        { title: "파도의 과학 — 스웰, 주기, 풍향", slug: "wave-science", durationSec: 600, isFreePreview: true },
        { title: "스팟 리딩 — 해변 관찰로 파도 예측하기", slug: "spot-reading", durationSec: 520, isFreePreview: false },
        { title: "조수와 바람이 파도에 미치는 영향", slug: "tide-wind", durationSec: 450, isFreePreview: false },
        { title: "실전 파도 선택 전략", slug: "wave-selection-strategy", durationSec: 580, isFreePreview: false },
      ],
    },
    {
      title: "쇼트보드 턴 테크닉 마스터",
      description:
        "바텀턴, 컷백, 플로터까지. 쇼트보드 라이딩의 꽃인 턴 동작을 단계별로 배우고 실전에 적용하세요.",
      skillLevel: "advanced" as const,
      categoryIdx: 2,
      instructorIdx: 2,
      price: 59000,
      lessons: [
        { title: "바텀턴 — 턴의 기본기", slug: "bottom-turn", durationSec: 660, isFreePreview: true },
        { title: "컷백 — 파도를 다시 만나러 가기", slug: "cutback", durationSec: 700, isFreePreview: false },
        { title: "플로터와 립액션", slug: "floater-lip", durationSec: 640, isFreePreview: false },
        { title: "스냅과 리엔트리", slug: "snap-reentry", durationSec: 580, isFreePreview: false },
        { title: "라인업 읽기와 턴 연결", slug: "combining-turns", durationSec: 620, isFreePreview: false },
        { title: "쇼트보드 실전 라이딩 분석", slug: "shortboard-analysis", durationSec: 750, isFreePreview: false },
      ],
    },
    {
      title: "롱보드 클래식: 노즈라이딩과 크로스스텝",
      description:
        "여유롭고 우아한 롱보드 스타일을 완성하세요. 노즈라이딩, 크로스스텝, 행텐까지 클래식 롱보드의 모든 것.",
      skillLevel: "intermediate" as const,
      categoryIdx: 3,
      instructorIdx: 3,
      price: 49000,
      lessons: [
        { title: "롱보드의 철학과 매력", slug: "longboard-philosophy", durationSec: 400, isFreePreview: true },
        { title: "크로스스텝 — 보드 위를 걷는 법", slug: "cross-step", durationSec: 560, isFreePreview: false },
        { title: "노즈라이딩 입문", slug: "noseriding-intro", durationSec: 580, isFreePreview: false },
        { title: "행텐과 행파이브 — 노즈라이딩 궁극기", slug: "hang-ten", durationSec: 500, isFreePreview: false },
      ],
    },
    {
      title: "서핑 피트니스: 코어와 밸런스 트레이닝",
      description:
        "서핑 실력은 체력이 좌우합니다. 서퍼를 위한 맞춤형 코어 트레이닝, 밸런스 운동, 유연성 루틴을 배워보세요.",
      skillLevel: "beginner" as const,
      categoryIdx: 0,
      instructorIdx: 3,
      price: 29000,
      lessons: [
        { title: "서핑에 필요한 근육 이해하기", slug: "surf-muscles", durationSec: 380, isFreePreview: true },
        { title: "코어 트레이닝 루틴 (주 3회)", slug: "core-routine", durationSec: 720, isFreePreview: false },
        { title: "밸런스 보드와 서프스케이트 훈련", slug: "balance-training", durationSec: 540, isFreePreview: false },
        { title: "유연성과 부상 예방 스트레칭", slug: "flexibility-stretch", durationSec: 460, isFreePreview: false },
      ],
    },
    {
      title: "제주도 서핑 스팟 완전 정복",
      description:
        "제주도의 시즌별 명소, 지역별 파도 특성, 현지 서퍼만 아는 꿀팁까지. 제주 서핑 여행을 계획 중이라면 필수 강좌.",
      skillLevel: "intermediate" as const,
      categoryIdx: 3,
      instructorIdx: 0,
      price: 39000,
      lessons: [
        { title: "제주도 서핑 시즌 가이드", slug: "jeju-seasons", durationSec: 500, isFreePreview: true },
        { title: "북부 해안 스팟 — 김녕, 월정, 함덕", slug: "jeju-north", durationSec: 640, isFreePreview: false },
        { title: "남부 해안 스팟 — 중문, 대정, 화순", slug: "jeju-south", durationSec: 580, isFreePreview: false },
        { title: "제주 서핑 여행 플래닝", slug: "jeju-trip-plan", durationSec: 420, isFreePreview: false },
        { title: "제주 현지 서퍼 인터뷰", slug: "jeju-local-interview", durationSec: 680, isFreePreview: false },
      ],
    },
    {
      title: "서핑 영상 촬영과 셀프 피드백",
      description:
        "내 서핑을 영상으로 남기고 분석하는 법. 촬영 장비, 앵글, 분석 프레임워크로 객관적인 셀프 피드백을 받으세요.",
      skillLevel: "intermediate" as const,
      categoryIdx: 1,
      instructorIdx: 2,
      price: 35000,
      lessons: [
        { title: "서핑 촬영 장비 추천 (액션캠부터 드론까지)", slug: "camera-gear", durationSec: 520, isFreePreview: true },
        { title: "앵글과 구도 — 무엇을 찍어야 할까", slug: "angles-composition", durationSec: 440, isFreePreview: false },
        { title: "영상 분석 프레임워크", slug: "video-analysis-framework", durationSec: 600, isFreePreview: false },
        { title: "셀프 피드백 루틴 만들기", slug: "self-feedback-routine", durationSec: 380, isFreePreview: false },
      ],
    },
    {
      title: "서핑 호흡법과 멘탈 트레이닝",
      description:
        "큰 파도 앞에서도 평정심을 유지하는 법. 서핑에 최적화된 호흡 테크닉과 멘탈 루틴으로 두려움을 극복하세요.",
      skillLevel: "beginner" as const,
      categoryIdx: 0,
      instructorIdx: 1,
      price: 0,
      lessons: [
        { title: "서핑과 공포심 — 누구나 겪는 일", slug: "fear-surfing", durationSec: 360, isFreePreview: true },
        { title: "횡격막 호흡과 이완 테크닉", slug: "diaphragm-breathing", durationSec: 480, isFreePreview: true },
        { title: "홀드다운 대처법 — 물 속에서 침착함 유지하기", slug: "holddown-calm", durationSec: 520, isFreePreview: false },
        { title: "서핑 전 루틴 — 몸과 마음 준비하기", slug: "pre-surf-routine", durationSec: 400, isFreePreview: false },
      ],
    },
  ];

  // 4. 강좌 + 레슨 + 리뷰 생성
  const reviewTemplates = [
    "정말 도움이 많이 됐어요! 특히 테이크오프 설명이 최고였습니다.",
    "초보자도 쉽게 따라할 수 있는 구성이에요. 강추!",
    "영상 퀄리티가 좋고 설명이 상세해서 좋았어요.",
    "두 번째 수강인데 항상 새로운 걸 배워갑니다.",
    "실전에 바로 적용할 수 있는 팁이 많아서 유용해요.",
  ];

  for (const c of coursesData) {
    const courseId = randomUUID();
    const reviewCount = Math.floor(Math.random() * 4) + 1;
    // Pick unique reviewers for this course (no duplicate user_id per course)
    const shuffled = [...instructors].sort(() => Math.random() - 0.5);
    const reviewers = shuffled.slice(0, Math.min(reviewCount, instructors.length));
    const course = await prisma.course.create({
      data: {
        id: courseId,
        instructorId: instructors[c.instructorIdx].id,
        categoryId: categories[c.categoryIdx].id,
        title: c.title,
        description: c.description,
        skillLevel: c.skillLevel,
        price: c.price,
        isPublished: true,
        publishedAt: new Date(),
        lessons: {
          create: c.lessons.map((l, i) => ({
            id: randomUUID(),
            title: l.title,
            slug: l.slug,
            durationSec: l.durationSec,
            isFreePreview: l.isFreePreview,
            sortOrder: i + 1,
          })),
        },
        reviews: {
          create: reviewers.map((instructor) => ({
            id: randomUUID(),
            userId: instructor.id,
            rating: Math.floor(Math.random() * 3) + 3, // 3-5점
            comment: reviewTemplates[Math.floor(Math.random() * reviewTemplates.length)],
          })),
        },
      },
    });
    console.log(`✅ Created: ${course.title} (${c.lessons.length} lessons, reviews)`);
  }

  console.log(`\n🎉 Seeding complete! ${coursesData.length} courses created.`);
}

main().catch(async (e) => {
  console.error("❌ Seed failed:", e);
  process.exit(1);
});
