#!/usr/bin/env node
/**
 * 개발 환경 PGlite 데이터베이스 초기 설정 스크립트
 *
 * 사용법: node scripts/setup-dev-db.mjs
 *
 * PGlite는 in-process PostgreSQL이므로 Prisma schema의 datasource provider(postgresql)와 호환됩니다.
 * 이 스크립트는 prisma/dev-pglite/ 디렉토리에 로컬 개발용 DB를 생성합니다.
 */

import { PGlite } from "@electric-sql/pglite";
import { PrismaPGlite } from "pglite-prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_DIR = join(__dirname, "..", "prisma", "dev-pglite");

const ENUMS = [
  `CREATE TYPE "Role" AS ENUM ('student', 'instructor', 'admin')`,
  `CREATE TYPE "SkillLevel" AS ENUM ('beginner', 'intermediate', 'advanced', 'expert')`,
  `CREATE TYPE "EnrollmentStatus" AS ENUM ('active', 'completed', 'refunded')`,
  `CREATE TYPE "PaymentType" AS ENUM ('one_time', 'subscription')`,
  `CREATE TYPE "PaymentStatus" AS ENUM ('pending', 'completed', 'failed', 'refunded')`,
  `CREATE TYPE "SubscriptionPlanType" AS ENUM ('monthly', 'yearly')`,
  `CREATE TYPE "SubscriptionTier" AS ENUM ('starter', 'premium')`,
  `CREATE TYPE "SubscriptionStatus" AS ENUM ('active', 'canceled', 'expired', 'past_due')`,
];

const TABLES = [
  `CREATE TABLE "profiles" (
    "id" UUID PRIMARY KEY,
    "display_name" VARCHAR(50) DEFAULT '',
    "avatar_url" TEXT,
    "bio" VARCHAR(500),
    "skill_level" "SkillLevel" DEFAULT 'beginner',
    "role" "Role" DEFAULT 'student',
    "join_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3)
  )`,
  `CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL UNIQUE,
    "description" TEXT,
    "sort_order" INTEGER DEFAULT 0,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE "courses" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "instructor_id" UUID NOT NULL,
    "category_id" INTEGER,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "thumbnail_url" TEXT,
    "skill_level" "SkillLevel" DEFAULT 'beginner',
    "price" INTEGER DEFAULT 0,
    "is_published" BOOLEAN DEFAULT false,
    "published_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3)
  )`,
  `CREATE TABLE "lessons" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "course_id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "stream_id" TEXT,
    "hls_url" TEXT,
    "duration_sec" INTEGER,
    "thumbnail_url" TEXT,
    "sort_order" INTEGER DEFAULT 0,
    "is_free_preview" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3)
  )`,
  `CREATE TABLE "enrollments" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "course_id" UUID NOT NULL,
    "source" TEXT DEFAULT 'purchase',
    "payment_id" UUID,
    "status" "EnrollmentStatus" DEFAULT 'active',
    "enrolled_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3)
  )`,
  `CREATE TABLE "lesson_progress" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "lesson_id" UUID NOT NULL,
    "is_completed" BOOLEAN DEFAULT false,
    "watched_sec" INTEGER DEFAULT 0,
    "last_position" INTEGER DEFAULT 0,
    "completed_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3)
  )`,
  `CREATE TABLE "payments" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "course_id" UUID,
    "subscription_id" UUID,
    "payment_type" "PaymentType" NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT DEFAULT 'KRW',
    "status" "PaymentStatus" DEFAULT 'pending',
    "toss_payment_key" TEXT,
    "toss_order_id" TEXT UNIQUE,
    "toss_event_id" TEXT UNIQUE,
    "paid_at" TIMESTAMP(3),
    "refunded_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3)
  )`,
  `CREATE TABLE "subscriptions" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "plan_type" "SubscriptionPlanType" NOT NULL,
    "tier" "SubscriptionTier" NOT NULL,
    "status" "SubscriptionStatus" DEFAULT 'active',
    "toss_billing_key" TEXT,
    "toss_customer_key" TEXT,
    "current_period_start" TIMESTAMP(3) NOT NULL,
    "current_period_end" TIMESTAMP(3) NOT NULL,
    "canceled_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3)
  )`,
  `CREATE TABLE "course_reviews" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "course_id" UUID NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3)
  )`,
];

const FOREIGN_KEYS = [
  `ALTER TABLE "courses" ADD CONSTRAINT "courses_instructor_id_fkey" FOREIGN KEY ("instructor_id") REFERENCES "profiles"("id") ON DELETE CASCADE`,
  `ALTER TABLE "courses" ADD CONSTRAINT "courses_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL`,
  `ALTER TABLE "lessons" ADD CONSTRAINT "lessons_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE`,
  `ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE`,
  `ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE`,
  `ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("id")`,
  `ALTER TABLE "lesson_progress" ADD CONSTRAINT "lesson_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE`,
  `ALTER TABLE "lesson_progress" ADD CONSTRAINT "lesson_progress_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lessons"("id") ON DELETE CASCADE`,
  `ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE`,
  `ALTER TABLE "payments" ADD CONSTRAINT "payments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id")`,
  `ALTER TABLE "payments" ADD CONSTRAINT "payments_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "subscriptions"("id")`,
  `ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE`,
  `ALTER TABLE "course_reviews" ADD CONSTRAINT "course_reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE`,
  `ALTER TABLE "course_reviews" ADD CONSTRAINT "course_reviews_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE`,
];

const UNIQUE_CONSTRAINTS = [
  `ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_user_id_course_id_key" UNIQUE ("user_id", "course_id")`,
  `ALTER TABLE "lessons" ADD CONSTRAINT "lessons_course_id_slug_key" UNIQUE ("course_id", "slug")`,
  `ALTER TABLE "lesson_progress" ADD CONSTRAINT "lesson_progress_user_id_lesson_id_key" UNIQUE ("user_id", "lesson_id")`,
  `ALTER TABLE "course_reviews" ADD CONSTRAINT "course_reviews_user_id_course_id_key" UNIQUE ("user_id", "course_id")`,
];

const INDEXES = [
  `CREATE INDEX "courses_instructor_id_idx" ON "courses" ("instructor_id")`,
  `CREATE INDEX "courses_is_published_published_at_idx" ON "courses" ("is_published", "published_at")`,
  `CREATE INDEX "lessons_course_id_sort_order_idx" ON "lessons" ("course_id", "sort_order")`,
  `CREATE INDEX "enrollments_user_id_idx" ON "enrollments" ("user_id")`,
  `CREATE INDEX "enrollments_course_id_idx" ON "enrollments" ("course_id")`,
  `CREATE INDEX "lesson_progress_user_id_idx" ON "lesson_progress" ("user_id")`,
  `CREATE INDEX "lesson_progress_lesson_id_idx" ON "lesson_progress" ("lesson_id")`,
  `CREATE INDEX "payments_user_id_idx" ON "payments" ("user_id")`,
  `CREATE INDEX "payments_toss_order_id_idx" ON "payments" ("toss_order_id")`,
  `CREATE INDEX "payments_toss_event_id_idx" ON "payments" ("toss_event_id")`,
  `CREATE INDEX "subscriptions_user_id_status_idx" ON "subscriptions" ("user_id", "status")`,
  `CREATE INDEX "subscriptions_toss_billing_key_idx" ON "subscriptions" ("toss_billing_key")`,
  `CREATE INDEX "course_reviews_course_id_created_at_idx" ON "course_reviews" ("course_id", "created_at")`,
];

async function setup() {
  console.log("🔧 Setting up PGlite development database...");
  console.log(`   Data directory: ${DB_DIR}`);

  const pglite = new PGlite({ dataDir: DB_DIR });
  await pglite.ready;
  console.log("   ✅ PGlite instance ready");

  // Create enums
  for (const sql of ENUMS) {
    await pglite.query(sql);
  }
  console.log("   ✅ Enums created");

  // Create tables
  for (const sql of TABLES) {
    await pglite.query(sql);
  }
  console.log("   ✅ Tables created");

  // Add foreign keys
  for (const sql of FOREIGN_KEYS) {
    await pglite.query(sql);
  }
  console.log("   ✅ Foreign keys added");

  // Add unique constraints
  for (const sql of UNIQUE_CONSTRAINTS) {
    await pglite.query(sql);
  }
  console.log("   ✅ Unique constraints added");

  // Add indexes
  for (const sql of INDEXES) {
    await pglite.query(sql);
  }
  console.log("   ✅ Indexes created");

  // Verify with Prisma
  const adapter = new PrismaPGlite(pglite);
  const prisma = new PrismaClient({ adapter });

  const id = randomUUID();
  const profile = await prisma.profile.create({
    data: { id, displayName: "Setup Verification", role: "student" },
  });
  console.log(`   ✅ Prisma verification: created profile ${profile.id}`);

  await prisma.profile.delete({ where: { id: profile.id } });
  await prisma.$disconnect();

  console.log("\n🎉 PGlite development database setup complete!");
  console.log("   Run `pnpm dev` to start the development server.");
}

setup().catch((e) => {
  console.error("❌ Setup failed:", e.message);
  process.exit(1);
});