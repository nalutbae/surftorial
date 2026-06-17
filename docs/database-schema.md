# Surftorial — 데이터베이스 스키마 설계

**작성일**: 2025-06-17
**버전**: 1.0.0
**DB**: PostgreSQL 16 (Supabase)

---

## 1. ERD 개요

```
┌──────────┐     ┌───────────┐     ┌───────────┐
│  users   │────<│enrollments│>────│  courses  │
└──────────┘     └─────┬─────┘     └─────┬─────┘
       │               │                 │
       │          ┌────┴─────┐     ┌─────┴──────┐
       └─────────<│ progress │>────│  lessons   │
                  └──────────┘     └─────┬──────┘
                                         │
                                   ┌─────┴──────┐
                                   │ categories │
                                   └────────────┘
```

---

## 2. 테이블 정의

### 2.1 `profiles` — 사용자 프로필

Supabase Auth의 `auth.users` 와 1:1 매핑. 트리거로 자동 생성.

```sql
CREATE TABLE public.profiles (
  id            UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name  TEXT NOT NULL DEFAULT '',
  avatar_url    TEXT,
  role          TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'instructor', 'admin')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Supabase Auth 신규 가입 시 자동 생성
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, avatar_url)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email), NEW.raw_user_meta_data->>'avatar_url');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### 2.2 `categories` — 강의 카테고리

```sql
CREATE TABLE public.categories (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name        TEXT NOT NULL UNIQUE,
  slug        TEXT NOT NULL UNIQUE,
  description TEXT,
  sort_order  INT NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 시드 데이터
INSERT INTO categories (name, slug, description, sort_order) VALUES
  ('Beginner', 'beginner', '서핑을 처음 시작하는 분들을 위한 기초 강의', 1),
  ('Intermediate', 'intermediate', '기본기를 익힌 분들을 위한 중급 강의', 2),
  ('Advanced', 'advanced', '고급 기술과 트릭을 배우는 상급 강의', 3),
  ('Theory', 'theory', '파도 읽기, 해양 안전 등 이론 강의', 4);
```

### 2.3 `courses` — 강의

```sql
CREATE TABLE public.courses (
  id              BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title           TEXT NOT NULL,
  slug            TEXT NOT NULL UNIQUE,
  description     TEXT,
  thumbnail_url   TEXT,
  trailer_url     TEXT,             -- Cloudflare Stream preview ID
  category_id     BIGINT REFERENCES public.categories(id) ON DELETE SET NULL,
  instructor_id   UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  price           INT NOT NULL DEFAULT 0,    -- KRW, 0 = 무료
  is_published    BOOLEAN NOT NULL DEFAULT false,
  published_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_courses_category ON public.courses(category_id);
CREATE INDEX idx_courses_published ON public.courses(is_published);
CREATE INDEX idx_courses_slug ON public.courses(slug);
```

### 2.4 `lessons` — 레슨 (강의 내 개별 영상)

```sql
CREATE TABLE public.lessons (
  id              BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  course_id       BIGINT NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title           TEXT NOT NULL,
  slug            TEXT NOT NULL,
  description     TEXT,
  stream_id       TEXT,             -- Cloudflare Stream UID
  hls_url         TEXT,             -- Cloudflare Stream HLS manifest URL
  duration_sec    INT,              -- 영상 길이 (초)
  thumbnail_url   TEXT,             -- Cloudflare Stream 썸네일
  sort_order      INT NOT NULL DEFAULT 0,
  is_free_preview BOOLEAN NOT NULL DEFAULT false,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),

  UNIQUE(course_id, slug)
);

CREATE INDEX idx_lessons_course ON public.lessons(course_id);
CREATE INDEX idx_lessons_sort ON public.lessons(course_id, sort_order);
```

### 2.5 `enrollments` — 수강 등록

```sql
CREATE TABLE public.enrollments (
  id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id       UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id     BIGINT NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  status        TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'refunded')),
  enrolled_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at  TIMESTAMPTZ,
  expires_at    TIMESTAMPTZ,   -- 구독 만료일 (구독 모델 시 사용, NULL = 평생)

  UNIQUE(user_id, course_id)
);

CREATE INDEX idx_enrollments_user ON public.enrollments(user_id);
CREATE INDEX idx_enrollments_course ON public.enrollments(course_id);
```

### 2.6 `lesson_progress` — 레슨 수강 진행률

```sql
CREATE TABLE public.lesson_progress (
  id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id       UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  lesson_id     BIGINT NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  is_completed  BOOLEAN NOT NULL DEFAULT false,
  watched_sec   INT NOT NULL DEFAULT 0,   -- 시청한 시간 (초)
  last_position INT NOT NULL DEFAULT 0,   -- 마지막 재생 위치 (초)
  completed_at  TIMESTAMPTZ,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),

  UNIQUE(user_id, lesson_id)
);

CREATE INDEX idx_progress_user ON public.lesson_progress(user_id);
CREATE INDEX idx_progress_lesson ON public.lesson_progress(lesson_id);
```

### 2.7 `payments` — 결제 내역

```sql
CREATE TABLE public.payments (
  id                BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id           UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id         BIGINT NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  stripe_session_id TEXT NOT NULL UNIQUE,
  stripe_payment_id TEXT,
  amount            INT NOT NULL,         -- KRW
  currency          TEXT NOT NULL DEFAULT 'krw',
  status            TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'refunded', 'failed')),
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at      TIMESTAMPTZ
);

CREATE INDEX idx_payments_user ON public.payments(user_id);
CREATE INDEX idx_payments_session ON public.payments(stripe_session_id);
```

---

## 3. Row Level Security (RLS) 정책

```sql
-- 모든 테이블에 RLS 활성화
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- profiles: 본인만 읽기/수정 가능
CREATE POLICY "Users can read own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- courses: 모두 읽기 가능 (published), 관리자만 쓰기
CREATE POLICY "Anyone can read published courses" ON public.courses
  FOR SELECT USING (is_published = true OR auth.uid() IN (
    SELECT id FROM public.profiles WHERE role IN ('instructor', 'admin')
  ));

-- lessons: 등록된 사용자만 읽기 가능 (free_preview 제외)
CREATE POLICY "Enrolled users can read lessons" ON public.lessons
  FOR SELECT USING (
    is_free_preview = true
    OR auth.uid() IN (
      SELECT user_id FROM public.enrollments
      WHERE course_id = lessons.course_id AND status = 'active'
    )
    OR auth.uid() IN (
      SELECT id FROM public.profiles WHERE role IN ('instructor', 'admin')
    )
  );

-- enrollments: 본인 데이터만 접근
CREATE POLICY "Users can read own enrollments" ON public.enrollments
  FOR SELECT USING (auth.uid() = user_id);

-- lesson_progress: 본인 진행률만 접근
CREATE POLICY "Users can read own progress" ON public.lesson_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can upsert own progress" ON public.lesson_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON public.lesson_progress
  FOR UPDATE USING (auth.uid() = user_id);

-- payments: 본인 데이터만 읽기
CREATE POLICY "Users can read own payments" ON public.payments
  FOR SELECT USING (auth.uid() = user_id);

-- categories: 모두 읽기 가능
CREATE POLICY "Anyone can read categories" ON public.categories
  FOR SELECT USING (true);
```

---

## 4. Prisma 스키마

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model Profile {
  id          String    @id @db.Uuid
  displayName String    @default("") @map("display_name")
  avatarUrl   String?   @map("avatar_url")
  role        Role      @default(student)
  createdAt   DateTime  @default(now()) @map("created_at")
  updatedAt   DateTime  @updatedAt @map("updated_at")

  courses     Course[]      @relation("Instructor")
  enrollments Enrollment[]
  progress    LessonProgress[]
  payments    Payment[]

  @@map("profiles")
}

enum Role {
  student
  instructor
  admin
}

model Category {
  id          Int       @id @default(autoincrement())
  name        String    @unique
  slug        String    @unique
  description String?
  sortOrder   Int       @default(0) @map("sort_order")
  createdAt   DateTime  @default(now()) @map("created_at")

  courses     Course[]

  @@map("categories")
}

model Course {
  id            Int       @id @default(autoincrement())
  title         String
  slug          String    @unique
  description   String?
  thumbnailUrl  String?   @map("thumbnail_url")
  trailerUrl    String?   @map("trailer_url")
  categoryId    Int?      @map("category_id")
  instructorId  String?   @map("instructor_id") @db.Uuid
  price         Int       @default(0)
  isPublished   Boolean   @default(false) @map("is_published")
  publishedAt   DateTime? @map("published_at")
  createdAt     DateTime  @default(now()) @map("created_at")
  updatedAt     DateTime  @updatedAt @map("updated_at")

  category      Category?      @relation(fields: [categoryId], references: [id])
  instructor    Profile?       @relation("Instructor", fields: [instructorId], references: [id])
  lessons       Lesson[]
  enrollments   Enrollment[]
  payments      Payment[]

  @@index([categoryId])
  @@index([isPublished])
  @@index([slug])
  @@map("courses")
}

model Lesson {
  id            Int       @id @default(autoincrement())
  courseId      Int       @map("course_id")
  title         String
  slug          String
  description   String?
  streamId      String?   @map("stream_id")
  hlsUrl        String?   @map("hls_url")
  durationSec   Int?      @map("duration_sec")
  thumbnailUrl  String?   @map("thumbnail_url")
  sortOrder     Int       @default(0) @map("sort_order")
  isFreePreview Boolean   @default(false) @map("is_free_preview")
  createdAt     DateTime  @default(now()) @map("created_at")
  updatedAt     DateTime  @updatedAt @map("updated_at")

  course        Course            @relation(fields: [courseId], references: [id], onDelete: Cascade)
  progress      LessonProgress[]

  @@unique([courseId, slug])
  @@index([courseId, sortOrder])
  @@map("lessons")
}

model Enrollment {
  id          Int       @id @default(autoincrement())
  userId      String    @map("user_id") @db.Uuid
  courseId    Int       @map("course_id")
  status      EnrollmentStatus @default(active)
  enrolledAt  DateTime  @default(now()) @map("enrolled_at")
  completedAt DateTime? @map("completed_at")
  expiresAt   DateTime? @map("expires_at")

  user        Profile   @relation(fields: [userId], references: [id], onDelete: Cascade)
  course      Course    @relation(fields: [courseId], references: [id], onDelete: Cascade)

  @@unique([userId, courseId])
  @@index([userId])
  @@index([courseId])
  @@map("enrollments")
}

enum EnrollmentStatus {
  active
  completed
  refunded
}

model LessonProgress {
  id           Int       @id @default(autoincrement())
  userId       String    @map("user_id") @db.Uuid
  lessonId     Int       @map("lesson_id")
  isCompleted  Boolean   @default(false) @map("is_completed")
  watchedSec   Int       @default(0) @map("watched_sec")
  lastPosition Int       @default(0) @map("last_position")
  completedAt  DateTime? @map("completed_at")
  updatedAt    DateTime  @updatedAt @map("updated_at")

  user         Profile   @relation(fields: [userId], references: [id], onDelete: Cascade)
  lesson       Lesson    @relation(fields: [lessonId], references: [id], onDelete: Cascade)

  @@unique([userId, lessonId])
  @@index([userId])
  @@index([lessonId])
  @@map("lesson_progress")
}

model Payment {
  id               Int           @id @default(autoincrement())
  userId           String        @map("user_id") @db.Uuid
  courseId         Int           @map("course_id")
  stripeSessionId  String        @unique @map("stripe_session_id")
  stripePaymentId  String?       @map("stripe_payment_id")
  amount           Int
  currency         String        @default("krw")
  status           PaymentStatus @default(pending)
  createdAt        DateTime      @default(now()) @map("created_at")
  completedAt      DateTime?     @map("completed_at")

  user             Profile       @relation(fields: [userId], references: [id], onDelete: Cascade)
  course           Course        @relation(fields: [courseId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([stripeSessionId])
  @@map("payments")
}

enum PaymentStatus {
  pending
  completed
  refunded
  failed
}
```

---

## 5. 마이그레이션 전략

- **로컬 개발**: `prisma migrate dev` 로 스키마 변경
- **프로덕션**: `prisma migrate deploy` (GitHub Actions에서 자동 실행)
- **RLS 정책**: Prisma 마이그레이션으로 관리하지 않고 Supabase SQL Editor에서 수동 적용

---

## 6. 인덱스 전략

| 테이블 | 인덱스 | 목적 |
|--------|--------|------|
| courses | slug (unique) | URL 기반 조회 |
| courses | is_published | 공개 강의 필터링 |
| courses | category_id | 카테고리별 조회 |
| lessons | (course_id, sort_order) | 강의 내 레슨 정렬 |
| enrollments | (user_id, course_id) (unique) | 중복 등록 방지 + 조회 |
| lesson_progress | (user_id, lesson_id) (unique) | 진행률 upsert |
| payments | stripe_session_id (unique) | Stripe Webhook 매칭 |
