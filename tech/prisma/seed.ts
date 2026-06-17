import "dotenv/config";
import { randomUUID } from "node:crypto";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "../src/generated/prisma/index.js";

async function getPrisma(): Promise<PrismaClient> {
  const dbPath = process.env.VERCEL || process.env.VERCEL_ENV
    ? "file:/tmp/dev.db"
    : "file:./prisma/dev.db";
  const adapter = new PrismaLibSql({ url: dbPath });
  return new PrismaClient({ adapter });
}

async function main() {
  const prisma = await getPrisma();

  // 1. 카테고리
  const categories = await Promise.all([
    prisma.category.create({ data: { name: "입문", slug: "beginner", description: "서핑을 처음 시작하는 분들을 위한 기초 강좌", sortOrder: 1 } }),
    prisma.category.create({ data: { name: "중급", slug: "intermediate", description: "기본기를 익힌 서퍼를 위한 테크닉 강좌", sortOrder: 2 } }),
    prisma.category.create({ data: { name: "상급", slug: "advanced", description: "고급 테크닉과 파도 읽기", sortOrder: 3 } }),
    prisma.category.create({ data: { name: "스페셜", slug: "special", description: "쇼트보드, 롱보드 등 특별 주제", sortOrder: 4 } }),
  ]);
  console.log(`Categories: ${categories.length}`);

  // 2. 강사
  const instructors = await Promise.all([
    prisma.profile.create({ data: { id: randomUUID(), displayName: "김파도", role: "instructor", bio: "제주도 출신 15년 경력 프로 서퍼.", skillLevel: "expert" } }),
    prisma.profile.create({ data: { id: randomUUID(), displayName: "이서프", role: "instructor", bio: "양양 서프비치 전속 코치.", skillLevel: "advanced" } }),
    prisma.profile.create({ data: { id: randomUUID(), displayName: "박웨이브", role: "instructor", bio: "호주 골드코스트 5년 활동.", skillLevel: "expert" } }),
    prisma.profile.create({ data: { id: randomUUID(), displayName: "정바다", role: "instructor", bio: "국내 최초 여성 ISA 레벨 2 코치.", skillLevel: "advanced" } }),
  ]);
  console.log(`Instructors: ${instructors.length}`);

  // 3. 학생 + 관리자
  const student = await prisma.profile.create({ data: { id: randomUUID(), displayName: "파도초보", role: "student", bio: "서핑 입문 3개월차!", skillLevel: "beginner" } });
  console.log(`Student: ${student.displayName}`);
  const admin = await prisma.profile.create({ data: { id: randomUUID(), role: "admin", displayName: "관리자" } });
  console.log(`Admin: ${admin.displayName}`);

  // 4. 강좌 데이터
  const coursesData = [
    { title: "서핑 첫걸음: 입문자를 위한 기초 완벽 가이드", desc: "보드 고르는 법부터 패들링, 테이크오프까지.", lv: "beginner" as const, cat: 0, inst: 1, price: 0, ls: [
      { t: "서핑이란? — 역사와 매력", s: "what-is-surfing", d: 420, f: true }, { t: "서핑 보드와 장비 완벽 가이드", s: "gear-guide", d: 680, f: true },
      { t: "패들링 기초", s: "paddling-basics", d: 540 }, { t: "테이크오프", s: "takeoff-mastery", d: 720 }, { t: "안전 수칙", s: "safety-etiquette", d: 380 },
    ]},
    { title: "파도 읽기의 기술", desc: "파도 종류 이해, 좋은 파도 선택법", lv: "intermediate" as const, cat: 1, inst: 0, price: 49000, ls: [
      { t: "파도의 과학", s: "wave-science", d: 600, f: true }, { t: "스팟 리딩", s: "spot-reading", d: 520 },
      { t: "조수와 바람", s: "tide-wind", d: 450 }, { t: "실전 파도 선택", s: "wave-selection", d: 580 },
    ]},
    { title: "쇼트보드 턴 테크닉 마스터", desc: "바텀턴, 컷백, 플로터까지", lv: "advanced" as const, cat: 2, inst: 2, price: 59000, ls: [
      { t: "바텀턴", s: "bottom-turn", d: 660, f: true }, { t: "컷백", s: "cutback", d: 700 },
      { t: "플로터와 립액션", s: "floater-lip", d: 640 }, { t: "스냅과 리엔트리", s: "snap-reentry", d: 580 },
      { t: "라인업 읽기", s: "combining-turns", d: 620 }, { t: "실전 분석", s: "analysis", d: 750 },
    ]},
    { title: "롱보드 클래식: 노즈라이딩과 크로스스텝", desc: "여유롭고 우아한 롱보드 스타일", lv: "intermediate" as const, cat: 3, inst: 3, price: 49000, ls: [
      { t: "롱보드의 철학", s: "longboard-philosophy", d: 400, f: true }, { t: "크로스스텝", s: "cross-step", d: 560 },
      { t: "노즈라이딩 입문", s: "noseriding-intro", d: 580 }, { t: "행텐", s: "hang-ten", d: 500 },
    ]},
    { title: "서핑 피트니스", desc: "코어 트레이닝, 밸런스, 유연성", lv: "beginner" as const, cat: 0, inst: 3, price: 29000, ls: [
      { t: "서핑에 필요한 근육", s: "surf-muscles", d: 380, f: true }, { t: "코어 트레이닝 루틴", s: "core-routine", d: 720 },
      { t: "밸런스 보드 훈련", s: "balance-training", d: 540 }, { t: "유연성 스트레칭", s: "flexibility-stretch", d: 460 },
    ]},
    { title: "제주도 서핑 스팟 완전 정복", desc: "제주 시즌별 명소, 지역별 특성", lv: "intermediate" as const, cat: 3, inst: 0, price: 39000, ls: [
      { t: "제주도 서핑 시즌", s: "jeju-seasons", d: 500, f: true }, { t: "북부 해안 스팟", s: "jeju-north", d: 640 },
      { t: "남부 해안 스팟", s: "jeju-south", d: 580 }, { t: "서핑 여행 플래닝", s: "jeju-trip", d: 420 },
      { t: "현지 서퍼 인터뷰", s: "jeju-local", d: 680 },
    ]},
    { title: "서핑 영상 촬영과 셀프 피드백", desc: "내 서핑을 영상으로 분석하는 법", lv: "intermediate" as const, cat: 1, inst: 2, price: 35000, ls: [
      { t: "촬영 장비 추천", s: "camera-gear", d: 520, f: true }, { t: "앵글과 구도", s: "angles-composition", d: 440 },
      { t: "분석 프레임워크", s: "video-analysis", d: 600 }, { t: "셀프 피드백 루틴", s: "self-feedback", d: 380 },
    ]},
    { title: "서핑 호흡법과 멘탈 트레이닝", desc: "큰 파도 앞에서 평정심 유지하는 법", lv: "beginner" as const, cat: 0, inst: 1, price: 0, ls: [
      { t: "서핑과 공포심", s: "fear-surfing", d: 360, f: true }, { t: "횡격막 호흡", s: "diaphragm-breathing", d: 480, f: true },
      { t: "홀드다운 대처법", s: "holddown-calm", d: 520 }, { t: "서핑 전 루틴", s: "pre-surf-routine", d: 400 },
    ]},
  ];

  const rev = ["정말 도움이 많이 됐어요!", "초보자도 쉽게 따라할 수 있어요.", "영상 퀄리티가 좋아요.", "두 번째 수강인데 항상 새로운 걸 배워요.", "실전에 바로 적용할 수 있어요."];

  for (const c of coursesData) {
    const cid = randomUUID();
    const n = Math.floor(Math.random() * 4) + 1;
    const rv = [...instructors].sort(() => Math.random() - 0.5).slice(0, Math.min(n, instructors.length));
    await prisma.course.create({
      data: {
        id: cid, instructorId: instructors[c.inst].id, categoryId: categories[c.cat].id,
        title: c.title, description: c.desc, skillLevel: c.lv, price: c.price, isPublished: true, publishedAt: new Date(),
        lessons: { create: c.ls.map((l, i) => ({ id: randomUUID(), title: l.t, slug: l.s, durationSec: l.d, isFreePreview: l.f ?? false, sortOrder: i + 1 })) },
        reviews: { create: rv.map((x) => ({ id: randomUUID(), userId: x.id, rating: Math.floor(Math.random() * 3) + 3, comment: rev[Math.floor(Math.random() * rev.length)] })) },
      },
    });
    console.log(`OK ${c.title}`);
  }
  console.log(`\nDone! ${coursesData.length} courses seeded.`);
}

main().catch((e) => { console.error("Seed failed:", e.message?.substring(0, 500) || e); process.exit(1); });
