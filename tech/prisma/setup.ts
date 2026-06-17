/**
 * Dev setup: Creates SQLite schema + seeds demo data via libsql adapter.
 * Run: npx tsx prisma/setup.ts
 */
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "@/generated/prisma";

const adapter = new PrismaLibSql({ url: "file:./prisma/dev.db" });
const prisma = new PrismaClient({ adapter });

// Use crypto for UUID generation
const uid = () => crypto.randomUUID();

async function main() {
  // ── Schema is managed by Prisma (pnpm exec prisma db push) ──

  // ── Seed ──
  const existing = await prisma.course.count();
  if (existing > 0) {
    console.log(`⚠️ DB already has ${existing} courses — skipping seed`);
    await prisma.$disconnect();
    return;
  }

  // Categories
  const cats = await Promise.all([
    prisma.category.create({ data: { name: "입문", slug: "beginner", description: "서핑 기초", sortOrder: 1 } }),
    prisma.category.create({ data: { name: "중급", slug: "intermediate", description: "테크닉", sortOrder: 2 } }),
    prisma.category.create({ data: { name: "상급", slug: "advanced", description: "고급", sortOrder: 3 } }),
    prisma.category.create({ data: { name: "스페셜", slug: "special", description: "특별 주제", sortOrder: 4 } }),
  ]);

  // Admin + instructors
  const admin = await prisma.profile.create({ data: { id: uid(), role: "admin", displayName: "관리자" } });
  const inst1 = await prisma.profile.create({ data: { id: uid(), displayName: "김파도", role: "instructor", bio: "15년 경력 ISA 레벨2", skillLevel: "expert" } });
  const inst2 = await prisma.profile.create({ data: { id: uid(), displayName: "이서프", role: "instructor", bio: "초보자 교육 전문", skillLevel: "advanced" } });
  const inst3 = await prisma.profile.create({ data: { id: uid(), displayName: "박웨이브", role: "instructor", bio: "숏보드 전문", skillLevel: "expert" } });
  const inst4 = await prisma.profile.create({ data: { id: uid(), displayName: "정바다", role: "instructor", bio: "여성 서퍼 전문", skillLevel: "advanced" } });
  const instructors = [inst1, inst2, inst3, inst4];

  const courseData = [
    { title: "서핑 첫걸음: 입문자 기초 완벽 가이드", desc: "보드 고르기부터 패들링, 테이크오프까지", level: "beginner", cat: 0, inst: 1, price: 0, lessons: [
      { title: "서핑이란?", slug: "what-is-surfing", dur: 420, free: true },
      { title: "장비 가이드", slug: "gear", dur: 680, free: true },
      { title: "패들링 기초", slug: "paddling", dur: 540 },
      { title: "테이크오프", slug: "takeoff", dur: 720 },
      { title: "안전수칙", slug: "safety", dur: 380 },
    ]},
    { title: "파도 읽기의 기술", desc: "파도 구조 이해, 좋은 파도 선택법", level: "intermediate", cat: 1, inst: 0, price: 49000, lessons: [
      { title: "파도의 과학", slug: "wave-science", dur: 600, free: true },
      { title: "스팟 리딩", slug: "spot-reading", dur: 520 },
      { title: "조수와 바람", slug: "tide", dur: 450 },
      { title: "실전 선택", slug: "selection", dur: 580 },
    ]},
    { title: "숏보드 턴 테크닉 마스터", desc: "바텀턴, 컷백, 플로터까지", level: "advanced", cat: 2, inst: 2, price: 59000, lessons: [
      { title: "바텀턴", slug: "bottom-turn", dur: 660, free: true },
      { title: "컷백", slug: "cutback", dur: 700 },
      { title: "플로터", slug: "floater", dur: 640 },
      { title: "스냅", slug: "snap", dur: 580 },
      { title: "턴 연결", slug: "combo", dur: 620 },
      { title: "실전 분석", slug: "analysis", dur: 750 },
    ]},
    { title: "롱보드 클래식: 노즈라이딩", desc: "크로스스텝, 노즈라이딩, 행텐", level: "intermediate", cat: 3, inst: 3, price: 49000, lessons: [
      { title: "롱보드 철학", slug: "philosophy", dur: 400, free: true },
      { title: "크로스스텝", slug: "cross-step", dur: 560 },
      { title: "노즈라이딩", slug: "noseride", dur: 580 },
      { title: "행텐", slug: "hang-ten", dur: 500 },
    ]},
    { title: "서핑 피트니스", desc: "코어 트레이닝, 밸런스, 유연성", level: "beginner", cat: 0, inst: 3, price: 29000, lessons: [
      { title: "서핑 근육", slug: "muscles", dur: 380, free: true },
      { title: "코어 루틴", slug: "core", dur: 720 },
      { title: "밸런스 훈련", slug: "balance", dur: 540 },
      { title: "스트레칭", slug: "stretch", dur: 460 },
    ]},
    { title: "제주도 서핑 스팟 완전 정복", desc: "제주 시즌별 명소, 지역별 특성", level: "intermediate", cat: 3, inst: 0, price: 39000, lessons: [
      { title: "제주 시즌", slug: "seasons", dur: 500, free: true },
      { title: "북부 스팟", slug: "north", dur: 640 },
      { title: "남부 스팟", slug: "south", dur: 580 },
      { title: "여행 플랜", slug: "trip", dur: 420 },
      { title: "현지 인터뷰", slug: "local", dur: 680 },
    ]},
  ];

  for (const c of courseData) {
    const courseId = uid();
    await prisma.course.create({
      data: {
        id: courseId,
        instructorId: instructors[c.inst].id,
        categoryId: cats[c.cat].id,
        title: c.title,
        description: c.desc,
        skillLevel: c.level as any,
        price: c.price,
        isPublished: true,
        publishedAt: new Date(),
        lessons: {
          create: c.lessons.map((l, i) => ({
            id: uid(),
            title: l.title,
            slug: l.slug,
            durationSec: l.dur,
            isFreePreview: l.free ?? false,
            sortOrder: i + 1,
          })),
        },
      },
    });
    console.log(`✅ ${c.title}`);
  }

  console.log(`\n🎉 Done! ${courseData.length} courses created.`);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
