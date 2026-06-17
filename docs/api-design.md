# Surftorial — API 설계 문서

**작성일**: 2025-06-17
**버전**: 1.0.0

---

## 1. 개요

Surftorial 서비스의 RESTful API 설계 문서입니다. Next.js 15 App Router의 API Routes와 Server Actions를 기반으로 하며, Supabase Auth로 인증, RLS로 인가, 토스페이먼츠로 결제, Cloudflare Stream으로 비디오를 처리합니다.

### 설계 원칙

- **최소 커스텀 API**: Supabase SDK가 처리하는 영역(Auth, Storage, RLS 기반 읽기)은 커스텀 엔드포인트를 만들지 않습니다
- **일관된 응답 형식**: 모든 엔드포인트가 동일한 성공/에러 스키마를 따릅니다
- **명확한 권한 분리**: public / student / instructor / admin 4단계 권한을 엔드포인트별로 명시합니다
- **점진적 타입 안전성**: MVP는 REST + Zod, Phase 2에서 tRPC로 마이그레이션

---

## 2. 공통 사양

### 2.1 기본 URL

```
Production: https://surftorial.com/api
Staging:    https://staging.surftorial.com/api
Local:      http://localhost:3000/api
```

### 2.2 인증 방식

| 방식 | 대상 | 설명 |
|------|------|------|
| **Supabase Auth Cookie** | SSR 페이지, Server Actions | `sb-xxx-auth` httpOnly 쿠키 자동 첨부 |
| **Bearer JWT** | API Routes (모바일/외부 클라이언트) | `Authorization: Bearer <access_token>` |
| **Toss Webhook Signature** | `/api/webhooks/toss` | `Toss-Signature` 헤더 검증 |

> **주의**: MVP에서는 쿠키 기반 인증만 사용합니다. Bearer JWT는 Phase 2(모바일 앱)에서 도입합니다.

### 2.3 공통 헤더

```http
Content-Type: application/json
Accept: application/json
# 인증 필요 시:
Authorization: Bearer <access_token>
```

### 2.4 성공 응답 형식

```jsonc
// 단일 리소스
{
  "data": { ... }
}

// 컬렉션 (페이지네이션 포함)
{
  "data": [ ... ],
  "meta": {
    "total": 42,
    "page": 1,
    "per_page": 20,
    "total_pages": 3
  }
}
```

### 2.5 에러 응답 형식

모든 에러는 통일된 스키마를 따릅니다:

```json
{
  "error": {
    "code": "COURSE_NOT_FOUND",
    "message": "요청하신 강의를 찾을 수 없습니다.",
    "details": [
      { "field": "id", "message": "존재하지 않는 강의 ID입니다." }
    ]
  }
}
```

### 2.6 HTTP 상태 코드 규약

| 코드 | 의미 | 사용 사례 |
|------|------|-----------|
| `200` | 성공 | GET, PATCH 성공 |
| `201` | 생성됨 | POST 리소스 생성 성공 |
| `204` | 내용 없음 | DELETE 성공 |
| `400` | 잘못된 요청 | 유효성 검사 실패, 파라미터 오류 |
| `401` | 인증 필요 | 로그인하지 않은 사용자 |
| `403` | 권한 없음 | instructor 전용 엔드포인트에 student 접근 |
| `404` | 리소스 없음 | 존재하지 않는 ID |
| `409` | 충돌 | 이미 구독 중, 이미 수강 중 |
| `429` | 요청 제한 | Rate limit 초과 |
| `500` | 서버 에러 | 예외 처리되지 않은 오류 |

### 2.7 권한 레벨

| 레벨 | 설명 | 식별 |
|------|------|------|
| **public** | 인증 불필요 | 로그인하지 않은 사용자 |
| **student** | 인증된 일반 사용자 | `role = 'student'` |
| **instructor** | 강사 권한 사용자 | `role = 'instructor'` |
| **admin** | 관리자 | `role = 'admin'` |

---

## 3. 인증 (Auth)

Supabase Auth가 대부분의 인증을 처리하므로 커스텀 엔드포인트는 최소화합니다.

### 3.1 POST /api/auth/register

기본 프로필 정보와 함께 회원가입합니다. Supabase Auth의 `signUp` 이후 호출합니다.

| 항목 | 내용 |
|------|------|
| **권한** | public |
| **설명** | 회원가입 후 user_profiles 테이블에 레코드 생성 |

**요청**:

```json
{
  "name": "김서핑",
  "phone": "01012345678",
  "role": "student"
}
```

**응답** `201`:

```json
{
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "김서핑",
    "role": "student",
    "created_at": "2025-06-17T00:00:00Z"
  }
}
```

**에러** `409`:

```json
{
  "error": {
    "code": "PROFILE_ALREADY_EXISTS",
    "message": "이미 프로필이 존재합니다.",
    "details": []
  }
}
```

### 3.2 GET /api/auth/session

미들웨어 및 클라이언트에서 세션 유효성을 확인합니다.

| 항목 | 내용 |
|------|------|
| **권한** | student, instructor, admin |
| **설명** | 현재 로그인한 사용자의 세션 정보 반환 |

**응답** `200`:

```json
{
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "role": "student"
    },
    "expires_at": 1718600000
  }
}
```

**에러** `401`:

```json
{
  "error": {
    "code": "SESSION_EXPIRED",
    "message": "세션이 만료되었습니다. 다시 로그인해주세요.",
    "details": []
  }
}
```

---

## 4. 강의 (Courses)

### 4.1 GET /api/courses

강의 목록을 조회합니다. 페이지네이션, 필터, 정렬을 지원합니다.

| 항목 | 내용 |
|------|------|
| **권한** | public |
| **캐싱** | ISR 5분 (`revalidate = 300`) |

**쿼리 파라미터**:

| 파라미터 | 타입 | 기본값 | 설명 |
|-----------|------|--------|------|
| `page` | integer | 1 | 페이지 번호 |
| `per_page` | integer | 20 | 페이지당 항목 수 (최대 50) |
| `category` | string | — | 카테고리 필터 (`basics`, `popup`, `turn`, `safety`, `seasonal`, `fitness`) |
| `sort` | string | `latest` | 정렬 (`latest`, `popular`, `price_asc`, `price_desc`) |
| `search` | string | — | 제목 검색 (부분 일치) |
| `instructor_id` | uuid | — | 특정 강사의 강의만 |

**응답** `200`:

```json
{
  "data": [
    {
      "id": "uuid",
      "title": "서핑 입문 A~Z",
      "description": "서핑을 처음 시작하는 분들을 위한...",
      "thumbnail_url": "https://...supabase.co/storage/...",
      "category": "basics",
      "price": 19000,
      "lesson_count": 12,
      "total_duration_minutes": 180,
      "instructor": {
        "id": "uuid",
        "name": "강서핑"
      },
      "rating_avg": 4.8,
      "enrollment_count": 234,
      "created_at": "2025-06-17T00:00:00Z"
    }
  ],
  "meta": {
    "total": 15,
    "page": 1,
    "per_page": 20,
    "total_pages": 1
  }
}
```

### 4.2 GET /api/courses/:id

강의 상세 정보를 조회합니다. 레슨 목록이 포함됩니다.

| 항목 | 내용 |
|------|------|
| **권한** | public (미인증 시 레슨의 stream_url 제외) |
| **캐싱** | ISR 5분 |

**응답** `200`:

```json
{
  "data": {
    "id": "uuid",
    "title": "서핑 입문 A~Z",
    "description": "서핑을 처음 시작하는 분들을 위한 종합 가이드",
    "thumbnail_url": "https://...",
    "category": "basics",
    "price": 19000,
    "skill_level": "beginner",
    "instructor": {
      "id": "uuid",
      "name": "강서핑",
      "avatar_url": "https://..."
    },
    "lessons": [
      {
        "id": "uuid",
        "title": "서핑 장비 소개",
        "order_index": 1,
        "duration_seconds": 480,
        "is_preview": true
      },
      {
        "id": "uuid",
        "title": "패들링 기본 자세",
        "order_index": 2,
        "duration_seconds": 720,
        "is_preview": false
      }
    ],
    "rating_avg": 4.8,
    "enrollment_count": 234,
    "created_at": "2025-06-17T00:00:00Z",
    "updated_at": "2025-06-17T00:00:00Z"
  }
}
```

**에러** `404`:

```json
{
  "error": {
    "code": "COURSE_NOT_FOUND",
    "message": "요청하신 강의를 찾을 수 없습니다.",
    "details": []
  }
}
```

### 4.3 POST /api/courses

새로운 강의를 생성합니다.

| 항목 | 내용 |
|------|------|
| **권한** | instructor, admin |

**요청**:

```json
{
  "title": "서핑 입문 A~Z",
  "description": "서핑을 처음 시작하는 분들을 위한 종합 가이드",
  "category": "basics",
  "price": 19000,
  "thumbnail_url": "https://...supabase.co/storage/...",
  "skill_level": "beginner"
}
```

**유효성 검사 (Zod)**:

```typescript
const createCourseSchema = z.object({
  title: z.string().min(2).max(100),
  description: z.string().min(10).max(2000),
  category: z.enum(['basics', 'popup', 'turn', 'safety', 'seasonal', 'fitness']),
  price: z.number().int().min(0).max(500000),
  thumbnail_url: z.string().url().optional(),
  skill_level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']),
});
```

**응답** `201`:

```json
{
  "data": {
    "id": "uuid",
    "title": "서핑 입문 A~Z",
    "status": "draft",
    "created_at": "2025-06-17T00:00:00Z"
  }
}
```

### 4.4 PATCH /api/courses/:id

강의 정보를 수정합니다. 부분 업데이트를 지원합니다.

| 항목 | 내용 |
|------|------|
| **권한** | instructor (본인 강의만), admin |

**요청**: `POST /api/courses`의 필드 중 수정할 필드만 포함

```json
{
  "title": "서핑 입문 A~Z (2025 개정판)",
  "price": 22000
}
```

**응답** `200`:

```json
{
  "data": {
    "id": "uuid",
    "title": "서핑 입문 A~Z (2025 개정판)",
    "price": 22000,
    "updated_at": "2025-06-17T01:00:00Z"
  }
}
```

**에러** `403`:

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "본인이 생성한 강의만 수정할 수 있습니다.",
    "details": []
  }
}
```

---

## 5. 레슨 (Lessons)

### 5.1 GET /api/courses/:courseId/lessons

특정 강의의 레슨 목록을 조회합니다.

| 항목 | 내용 |
|------|------|
| **권한** | public (미인증 시 `is_preview: true` 레슨만, `stream_url` 제외) |
| **캐싱** | ISR 5분 |

**응답** `200`:

```json
{
  "data": [
    {
      "id": "uuid",
      "title": "서핑 장비 소개",
      "order_index": 1,
      "duration_seconds": 480,
      "is_preview": true,
      "stream_url": null
    },
    {
      "id": "uuid",
      "title": "패들링 기본 자세",
      "order_index": 2,
      "duration_seconds": 720,
      "is_preview": false,
      "stream_url": null
    }
  ]
}
```

> **주의**: `stream_url`은 수강생(student 이상 + enrollment 존재)에게만 제공됩니다. 미인증/미수강자는 `null`을 반환합니다.

### 5.2 GET /api/lessons/:id

레슨 상세 정보를 조회합니다. 수강생에게는 Cloudflare Stream Signed URL이 포함됩니다.

| 항목 | 내용 |
|------|------|
| **권한** | public (preview), student (수강 중인 강의), instructor (본인 강의) |

**응답** `200` (수강생):

```json
{
  "data": {
    "id": "uuid",
    "course_id": "uuid",
    "title": "패들링 기본 자세",
    "description": "바다에서 패들링하는 기본 자세를 배웁니다.",
    "order_index": 2,
    "duration_seconds": 720,
    "is_preview": false,
    "stream": {
      "playback_id": "abc123def456",
      "signed_url": "https://videodelivery.net/abc123def456?token=eyJhbG...",
      "expires_at": "2025-06-17T01:30:00Z"
    },
    // Phase 2에서 추가 예정: attachments 전용 테이블 (data-model 622행 참조)
    "attachments": [
      {
        "id": "uuid",
        "title": "패들링 체크리스트",
        "file_url": "https://...supabase.co/storage/...",
        "file_size_bytes": 245000
      }
    ]
  }
}
```

**응답** `200` (미수강자 — stream 제외):

```json
{
  "data": {
    "id": "uuid",
    "course_id": "uuid",
    "title": "패들링 기본 자세",
    "description": "바다에서 패들링하는 기본 자세를 배웁니다.",
    "order_index": 2,
    "duration_seconds": 720,
    "is_preview": false,
    "stream": null,
    "attachments": []
  }
}
```

**에러** `404`:

```json
{
  "error": {
    "code": "LESSON_NOT_FOUND",
    "message": "요청하신 레슨을 찾을 수 없습니다.",
    "details": []
  }
}
```

### 5.3 PATCH /api/lessons/:id/progress

수강 진행도를 업데이트합니다.

| 항목 | 내용 |
|------|------|
| **권한** | student (수강 중인 강의만) |
| **멱등성** | 동일 레슨에 대해 여러 번 호출해도 안전 |

**요청**:

```json
{
  "status": "completed",
  "watched_seconds": 680
}
```

**유효성 검사 (Zod)**:

```typescript
const updateProgressSchema = z.object({
  status: z.enum(['in_progress', 'completed']),
  watched_seconds: z.number().int().min(0).optional(),
});
```

**응답** `200`:

```json
{
  "data": {
    "lesson_id": "uuid",
    "course_id": "uuid",
    "status": "completed",
    "watched_seconds": 680,
    "completed_at": "2025-06-17T01:00:00Z",
    "course_progress_percentage": 16.7
  }
}
```

**에러** `403`:

```json
{
  "error": {
    "code": "NOT_ENROLLED",
    "message": "수강 중인 강의의 레슨만 진행도를 업데이트할 수 있습니다.",
    "details": []
  }
}
```

---

## 6. 결제 (Payments)

토스페이먼츠 빌링키 기반 정기결제와 단건결제를 모두 지원합니다.

### 6.1 POST /api/payments/subscribe

정기결제 빌링키 발급을 위한 결제를 시작합니다.

| 항목 | 내용 |
|------|------|
| **권한** | student |

**요청**:

```json
{
  "plan": "premium",
  "billing_cycle": "monthly"
}
```

**유효성 검사 (Zod)**:

```typescript
const subscribeSchema = z.object({
  plan: z.enum(['starter', 'premium']),
  billing_cycle: z.enum(['monthly', 'yearly']),
});
```

**응답** `200`:

```json
{
  "data": {
    "checkout_url": "https://api.tosspayments.com/v1/payments/...",
    "order_id": "sub_20250617_uuid",
    "amount": 49000,
    "plan": "premium",
    "billing_cycle": "monthly"
  }
}
```

> **주의**: 실제 결제 승인은 토스페이먼츠 Checkout 창에서 이루어지며, 완료 후 `/api/webhooks/toss` 웹훅으로 서버에 통지됩니다.

**에러** `409`:

```json
{
  "error": {
    "code": "ALREADY_SUBSCRIBED",
    "message": "이미 구독 중인 플랜이 있습니다. 해지 후 재구독해주세요.",
    "details": []
  }
}
```

### 6.2 POST /api/payments/one-time

단건 결제(개별 강의 구매)를 시작합니다.

| 항목 | 내용 |
|------|------|
| **권한** | student |

**요청**:

```json
{
  "course_id": "uuid"
}
```

**유효성 검사 (Zod)**:

```typescript
const oneTimePaymentSchema = z.object({
  course_id: z.string().uuid(),
});
```

**응답** `200`:

```json
{
  "data": {
    "checkout_url": "https://api.tosspayments.com/v1/payments/...",
    "order_id": "pay_20250617_uuid",
    "amount": 19000,
    "course_id": "uuid",
    "course_title": "서핑 입문 A~Z"
  }
}
```

**에러** `409`:

```json
{
  "error": {
    "code": "ALREADY_PURCHASED",
    "message": "이미 구매한 강의입니다.",
    "details": []
  }
}
```

### 6.3 GET /api/payments/history

결제 내역을 조회합니다.

| 항목 | 내용 |
|------|------|
| **권한** | student (본인 결제 내역만) |

**쿼리 파라미터**:

| 파라미터 | 타입 | 기본값 | 설명 |
|-----------|------|--------|------|
| `page` | integer | 1 | 페이지 번호 |
| `per_page` | integer | 20 | 페이지당 항목 수 (최대 50) |
| `type` | string | — | `subscription` / `one_time` 필터 |
| `status` | string | — | `pending` / `completed` / `failed` / `refunded` 필터 |

**응답** `200`:

```json
{
  "data": [
    {
      "id": "uuid",
      "order_id": "pay_20250617_uuid",
      "type": "one_time",
      "amount": 19000,
      "currency": "KRW",
      "status": "completed",
      "paid_at": "2025-06-17T00:00:00Z",
      "course_title": "서핑 입문 A~Z",
      "refundable": true,
      "created_at": "2025-06-17T00:00:00Z"
    }
  ],
  "meta": {
    "total": 5,
    "page": 1,
    "per_page": 20,
    "total_pages": 1
  }
}
```

### 6.4 POST /api/webhooks/toss

토스페이먼츠에서 결제 상태 변화를 수신하는 웹훅입니다.

| 항목 | 내용 |
|------|------|
| **권한** | public (Toss 서버에서 호출) |
| **인증** | `Toss-Signature` 헤더 검증 |
| **Content-Type** | `application/json` |

**처리 흐름**:

```
1. Toss-Signature 헤더 검증 → 위조 방지
2. 이벤트 타입 분기 (PAYMENT_CONFIRM / SUBSCRIPTION_BILLING / SUBSCRIPTION_CANCEL / PAYMENT_CANCEL)
3. DB 트랜잭션으로 원자적 처리:
   - payments 테이블 상태 업데이트
   - enrollments / subscriptions 테이블 생성/수정
4. 200 OK 응답 (비동기 처리 지양, 웹훅은 동기 응답 필수)
```

**웹훅 페이로드** (예: 정기결제 승인):

```json
{
  "eventType": "SUBSCRIPTION_BILLING",
  "data": {
    "paymentKey": "tviva20250617...",
    "orderId": "sub_20250617_uuid",
    "amount": 49000,
    "status": "DONE",
    "approvedAt": "2025-06-17T00:00:00+09:00",
    "subscription": {
      "billingKey": "billing_key_xxx",
      "customerKey": "customer_xxx"
    }
  }
}
```

**서버 응답**: `200 OK` (본문 없음, 또는 `{"status": "ok"}`)

> **주의**: 웹훅은 멱등하게 처리해야 합니다. 동일 이벤트가 여러 번 수신될 수 있습니다. `order_id` 기준으로 중복 처리를 방지합니다.

---

## 7. 구독 (Subscriptions)

### 7.1 GET /api/subscriptions/me

내 구독 상태를 조회합니다.

| 항목 | 내용 |
|------|------|
| **권한** | student |

**응답** `200`:

```json
{
  "data": {
    "id": "uuid",
    "plan": "premium",
    "status": "active",
    "billing_cycle": "monthly",
    "current_period_start": "2025-06-01T00:00:00Z",
    "current_period_end": "2025-07-01T00:00:00Z",
    "cancel_at_period_end": false,
    "amount": 49000,
    "created_at": "2025-01-15T00:00:00Z"
  }
}
```

**비구독자 응답** `200`:

```json
{
  "data": null
}
```

### 7.2 POST /api/subscriptions/cancel

구독을 해지합니다. 당월 말까지 이용 가능합니다 (prorated 환불 없음).

| 항목 | 내용 |
|------|------|
| **권한** | student |

**요청**: 본문 없음

**응답** `200`:

```json
{
  "data": {
    "id": "uuid",
    "status": "cancel_scheduled",
    "cancel_at": "2025-07-01T00:00:00Z",
    "message": "7월 1일까지 이용 가능합니다."
  }
}
```

**에러** `409`:

```json
{
  "error": {
    "code": "NO_ACTIVE_SUBSCRIPTION",
    "message": "활성 구독이 없습니다.",
    "details": []
  }
}
```

---

## 8. 사용자 (Users)

### 8.1 GET /api/users/me

내 프로필 정보를 조회합니다.

| 항목 | 내용 |
|------|------|
| **권한** | student, instructor, admin |

**응답** `200`:

```json
{
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "김서핑",
    "phone": "01012345678",
    "avatar_url": "https://...supabase.co/storage/...",
    "role": "student",
    "subscription": {
      "plan": "premium",
      "status": "active"
    },
    "created_at": "2025-01-15T00:00:00Z"
  }
}
```

### 8.2 PATCH /api/users/me

프로필을 수정합니다.

| 항목 | 내용 |
|------|------|
| **권한** | student, instructor, admin |

**요청** (부분 업데이트):

```json
{
  "name": "김서핑2",
  "phone": "01098765432",
  "avatar_url": "https://...supabase.co/storage/..."
}
```

**유효성 검사 (Zod)**:

```typescript
const updateProfileSchema = z.object({
  name: z.string().min(2).max(50).optional(),
  phone: z.string().regex(/^01[016789]\d{7,8}$/).optional(),
  avatar_url: z.string().url().optional(),
});
```

**응답** `200`:

```json
{
  "data": {
    "id": "uuid",
    "name": "김서핑2",
    "phone": "01098765432",
    "avatar_url": "https://...supabase.co/storage/...",
    "updated_at": "2025-06-17T01:00:00Z"
  }
}
```

### 8.3 GET /api/users/me/enrollments

수강 중인 강의 목록을 조회합니다.

| 항목 | 내용 |
|------|------|
| **권한** | student |

**쿼리 파라미터**:

| 파라미터 | 타입 | 기본값 | 설명 |
|-----------|------|--------|------|
| `status` | string | `active` | `active` / `completed` / `all` |

**응답** `200`:

```json
{
  "data": [
    {
      "enrollment_id": "uuid",
      "course": {
        "id": "uuid",
        "title": "서핑 입문 A~Z",
        "thumbnail_url": "https://...",
        "lesson_count": 12
      },
      "progress_percentage": 33.3,
      "completed_lessons": 4,
      "total_lessons": 12,
      "enrolled_at": "2025-06-10T00:00:00Z",
      "last_watched_at": "2025-06-17T00:00:00Z"
    }
  ]
}
```

---

## 9. 관리자 (Admin)

`/api/admin/*` 경로는 별도의 Next.js Route Group (`(admin)`)으로 보호됩니다.

### 9.1 GET /api/admin/courses

전체 강의를 관리합니다. 공개 여부와 상관없이 모든 강의를 포함합니다.

| 항목 | 내용 |
|------|------|
| **권한** | admin |

**쿼리 파라미터**:

| 파라미터 | 타입 | 기본값 | 설명 |
|-----------|------|--------|------|
| `page` | integer | 1 | |
| `per_page` | integer | 20 | |
| `status` | string | — | `draft` / `published` / `archived` |
| `instructor_id` | uuid | — | 특정 강사 필터 |

**응답** `200`:

```json
{
  "data": [
    {
      "id": "uuid",
      "title": "서핑 입문 A~Z",
      "status": "published",
      "category": "basics",
      "price": 19000,
      "enrollment_count": 234,
      "revenue": 4446000,
      "instructor": {
        "id": "uuid",
        "name": "강서핑"
      },
      "created_at": "2025-06-01T00:00:00Z",
      "published_at": "2025-06-05T00:00:00Z"
    }
  ],
  "meta": {
    "total": 15,
    "page": 1,
    "per_page": 20,
    "total_pages": 1
  }
}
```

### 9.2 GET /api/admin/users

전체 사용자를 관리합니다.

| 항목 | 내용 |
|------|------|
| **권한** | admin |

**쿼리 파라미터**:

| 파라미터 | 타입 | 기본값 | 설명 |
|-----------|------|--------|------|
| `page` | integer | 1 | |
| `per_page` | integer | 20 | |
| `role` | string | — | `student` / `instructor` / `admin` |
| `search` | string | — | 이름/이메일 검색 |
| `subscription_status` | string | — | `active` / `cancelled` / `none` |

**응답** `200`:

```json
{
  "data": [
    {
      "id": "uuid",
      "email": "user@example.com",
      "name": "김서핑",
      "role": "student",
      "subscription": {
        "plan": "premium",
        "status": "active"
      },
      "enrollment_count": 3,
      "total_spent": 87000,
      "created_at": "2025-01-15T00:00:00Z",
      "last_active_at": "2025-06-17T00:00:00Z"
    }
  ],
  "meta": {
    "total": 500,
    "page": 1,
    "per_page": 20,
    "total_pages": 25
  }
}
```

### 9.3 GET /api/admin/analytics

플랫폼 매출 및 수강 통계를 조회합니다.

| 항목 | 내용 |
|------|------|
| **권한** | admin |

**쿼리 파라미터**:

| 파라미터 | 타입 | 기본값 | 설명 |
|-----------|------|--------|------|
| `period` | string | `30d` | `7d` / `30d` / `90d` / `1y` |
| `granularity` | string | `day` | `day` / `week` / `month` |

**응답** `200`:

```json
{
  "data": {
    "summary": {
      "total_revenue": 15780000,
      "total_enrollments": 234,
      "active_subscribers": 89,
      "new_users": 45,
      "avg_revenue_per_user": 68521
    },
    "timeseries": [
      {
        "date": "2025-06-01",
        "revenue": 490000,
        "enrollments": 12,
        "new_users": 5
      },
      {
        "date": "2025-06-02",
        "revenue": 320000,
        "enrollments": 8,
        "new_users": 3
      }
    ],
    "top_courses": [
      {
        "course_id": "uuid",
        "title": "서핑 입문 A~Z",
        "enrollment_count": 89,
        "revenue": 1691000
      }
    ]
  }
}
```

---

## 10. 페이지네이션 규격

모든 목록 API는 커서 기반과 오프셋 기반을 혼합하여 지원합니다. MVP에서는 오프셋 기반만 구현합니다.

### 오프셋 기반 (MVP)

```http
GET /api/courses?page=2&per_page=20
```

```json
{
  "data": [ ... ],
  "meta": {
    "total": 42,
    "page": 2,
    "per_page": 20,
    "total_pages": 3
  }
}
```

| 규칙 | 값 |
|------|-----|
| 기본 `per_page` | 20 |
| 최대 `per_page` | 50 |
| `page` 범위 | 1 이상의 정수 |
| 범위 초과 시 | 빈 `data` 배열 + 정상 `meta` 반환 (에러 아님) |

### 커서 기반 (Phase 2)

```http
GET /api/courses?cursor=eyJpZCI6InV1aWQifQ&limit=20
```

> Phase 2에서 대규모 데이터셋에 대해 도입합니다. 현재는 명세만 정의합니다.

---

## 11. 레이트 리미팅

Next.js 미들웨어에서 IP 및 사용자 ID 기반으로 요청 제한을 적용합니다.

| 엔드포인트 그룹 | 제한 | 윈도우 | 적용 기준 |
|-----------------|------|--------|-----------|
| `POST /api/auth/*` | 10회 | 1분 | IP |
| `POST /api/payments/*` | 5회 | 1분 | 사용자 ID |
| `POST /api/webhooks/toss` | 100회 | 1분 | IP (Toss 서버) |
| `GET /api/courses*` | 60회 | 1분 | IP |
| `GET /api/lessons*` | 120회 | 1분 | 사용자 ID |
| `GET /api/admin/*` | 120회 | 1분 | 사용자 ID |
| 기타 모든 API | 30회 | 1분 | IP |

### 제한 초과 응답

```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.",
    "details": [
      { "field": "retry_after", "message": "60" }
    ]
  }
}
```

**HTTP 상태**: `429 Too Many Requests`
**응답 헤더**: `Retry-After: 60`

### 구현 위치

```
src/middleware.ts
  → rateLimiter(ip, userId)
  → Upstash Redis 또는 Vercel Edge Config (Phase 5)
  → MVP: 인메모리 Map + TTL (서버리스 환경 제약으로 초단위 리셋)
```

---

## 12. 웹훅 처리 플로우

### 12.1 토스페이먼츠 웹훅 검증

```typescript
// src/app/api/webhooks/toss/route.ts

export async function POST(request: Request) {
  // 1. Toss-Signature 헤더 추출
  const signature = request.headers.get('Toss-Signature');

  // 2. 웹훅 시크릿으로 HMAC-SHA256 서명 검증
  const body = await request.text();
  const expectedSignature = crypto
    .createHmac('sha256', process.env.TOSS_WEBHOOK_SECRET!)
    .update(body)
    .digest('base64');

  if (signature !== expectedSignature) {
    return NextResponse.json(
      { error: { code: 'INVALID_SIGNATURE', message: '서명이 유효하지 않습니다.' } },
      { status: 401 }
    );
  }

  // 3. 이벤트 타입별 분기 처리
  const event = JSON.parse(body);
  // ...
}
```

### 12.2 이벤트 타입별 처리

| 이벤트 | 처리 |
|--------|------|
| `PAYMENT_CONFIRM` | 단건 결제 승인 → enrollment 생성 |
| `SUBSCRIPTION_BILLING` | 정기결제 승인 → subscription 기간 연장 |
| `SUBSCRIPTION_CANCEL` | 구독 취소 → subscription status = `cancel_scheduled` |
| `PAYMENT_CANCEL` | 결제 취소/환불 → enrollment 비활성화, refund 레코드 생성 |

### 12.3 멱등성 보장

```sql
-- payments 테이블의 order_id에 UNIQUE 제약조건
CREATE UNIQUE INDEX idx_payments_order_id ON payments(order_id);

-- 웹훅 처리 시 UPSERT 사용
INSERT INTO payments (order_id, ...)
VALUES ($1, ...)
ON CONFLICT (order_id) DO NOTHING;
```

동일 `order_id`의 웹훅이 여러 번 수신되어도 첫 번째만 처리되고 나머지는 무시됩니다.

---

## 13. Cloudflare Stream Signed URL

### 발급 흐름

```
1. 사용자 → GET /api/lessons/:id
2. API Route → DB에서 lesson.stream_id 조회
3. API Route → Cloudflare Stream API로 Signed URL 생성
   POST https://api.cloudflare.com/client/v4/accounts/{account_id}/stream/{video_id}/token
   {
     "exp": <현재시간 + 2시간>,
     "accessRules": [{ "type": "any" }]
   }
4. Cloudflare → Signed URL 반환
5. API Route → 응답에 signed_url 포함
6. 클라이언트 → Vidstack Player로 signed_url 재생
```

### 토큰 만료 정책

| 항목 | 값 |
|------|-----|
| Signed URL 만료 | 2시간 |
| 자동 갱신 | 클라이언트에서 만료 10분 전 재요청 |
| IP 바인딩 | MVP에서는 비활성화 (모바일 IP 변경 고려) |
| 다운로드 방지 | Cloudflare Stream 설정에서 다운로드 비활성화 |

---

## 14. 에러 코드 전체 목록

| 코드 | HTTP | 설명 |
|------|------|------|
| `VALIDATION_ERROR` | 400 | 요청 본문 유효성 검사 실패 |
| `INVALID_PARAMETER` | 400 | 쿼리 파라미터 형식 오류 |
| `UNAUTHORIZED` | 401 | 인증 필요 (미로그인) |
| `SESSION_EXPIRED` | 401 | 세션 만료 |
| `FORBIDDEN` | 403 | 권한 없음 |
| `NOT_ENROLLED` | 403 | 수강 등록 없음 |
| `COURSE_NOT_FOUND` | 404 | 강의 없음 |
| `LESSON_NOT_FOUND` | 404 | 레슨 없음 |
| `USER_NOT_FOUND` | 404 | 사용자 없음 |
| `ALREADY_SUBSCRIBED` | 409 | 이미 구독 중 |
| `ALREADY_PURCHASED` | 409 | 이미 구매한 강의 |
| `PROFILE_ALREADY_EXISTS` | 409 | 프로필 이미 존재 |
| `NO_ACTIVE_SUBSCRIPTION` | 409 | 활성 구독 없음 |
| `RATE_LIMIT_EXCEEDED` | 429 | 요청 제한 초과 |
| `PAYMENT_FAILED` | 402 | 결제 실패 |
| `STREAM_UNAVAILABLE` | 503 | 비디오 스트림 일시 불가 |
| `INTERNAL_ERROR` | 500 | 서버 내부 오류 |

---

## 15. API 버저닝 전략

| 단계 | 전략 | 설명 |
|------|------|------|
| **MVP** | 버전 없음 | `/api/courses` |
| **Phase 2** | URL 프리픽스 | `/v2/api/courses` (v1은 `/api/`로 유지) |
| **Phase 3+** | 헤더 기반 | `Accept: application/vnd.surftorial.v2+json` |

MVP에서는 URL에 버전을 명시하지 않습니다. Breaking change가 필요한 경우에만 v2 프리픽스를 도입하고, v1은 하위 호환성을 유지합니다.

---

## 16. Next.js App Router 매핑

API 설계의 엔드포인트는 Next.js 파일 시스템 기반 라우팅에 다음과 같이 매핑됩니다:

```
src/app/api/
├── auth/
│   ├── register/route.ts          # POST /api/auth/register
│   └── session/route.ts           # GET  /api/auth/session
├── courses/
│   ├── route.ts                   # GET  /api/courses
│   │                               # POST /api/courses
│   └── [id]/
│       ├── route.ts               # GET    /api/courses/:id
│       │                           # PATCH  /api/courses/:id
│       └── lessons/route.ts       # GET    /api/courses/:courseId/lessons
├── lessons/
│   └── [id]/
│       ├── route.ts               # GET  /api/lessons/:id
│       └── progress/route.ts      # PATCH /api/lessons/:id/progress
├── payments/
│   ├── subscribe/route.ts         # POST /api/payments/subscribe
│   ├── one-time/route.ts          # POST /api/payments/one-time
│   └── history/route.ts           # GET  /api/payments/history
├── subscriptions/
│   ├── me/route.ts                # GET  /api/subscriptions/me
│   └── cancel/route.ts            # POST /api/subscriptions/cancel
├── users/
│   └── me/
│       ├── route.ts               # GET   /api/users/me
│       │                           # PATCH /api/users/me
│       └── enrollments/route.ts   # GET   /api/users/me/enrollments
├── webhooks/
│   └── toss/route.ts              # POST /api/webhooks/toss
└── admin/
    ├── courses/route.ts            # GET /api/admin/courses
    ├── users/route.ts             # GET /api/admin/users
    └── analytics/route.ts         # GET /api/admin/analytics
```

---

## 17. 보안 체크리스트

| 항목 | 적용 | 설명 |
|------|------|------|
| **HTTPS 강제** | ✅ | Vercel 자동 HTTPS 리다이렉트 |
| **CSRF 보호** | ✅ | Server Actions 자동 CSRF 토큰 |
| **XSS 방지** | ✅ | React 기본 이스케이프 + CSP 헤더 |
| **SQL 인젝션** | ✅ | Prisma 파라미터바인딩 + Supabase RPC |
| **입력 검증** | ✅ | Zod 스키마로 모든 입력 검증 |
| **Rate Limiting** | ✅ | 미들웨어에서 IP/사용자별 제한 |
| **웹훅 서명 검증** | ✅ | Toss-Signature HMAC-SHA256 검증 |
| **Signed URL** | ✅ | Cloudflare Stream 토큰 기반 접근 제어 |
| **RLS** | ✅ | Supabase Row Level Security로 행 수준 권한 |
| **환경변수** | ✅ | .env.local + Vercel Environment Variables |
| **CORS** | ✅ | 동일 출처만 허용 (API Routes 기본값) |
| **민감 정보 로깅 금지** | ✅ | 결제 정보, 토큰, 비밀번호 로깅 제외 |

---

## 18. 확장 계획

| 단계 | 추가 API | 설명 |
|------|----------|------|
| **Phase 2** | tRPC 라우터 도입 | 타입 세이프 API 클라이언트, 자동 완성 |
| **Phase 2** | `/api/users/me/watch-history` | 시청 기록, 이어보기 |
| **Phase 2** | `/api/courses/:id/reviews` | 리뷰/평점 CRUD |
| **Phase 2** | `/api/lessons/:id/attachments` | 레슨 첨부자료 테이블 및 CRUD (현재 응답에만 placeholder) |
| **Phase 3** | `/api/courses/:id/chat` | Supabase Realtime 기반 실시간 Q&A |
| **Phase 3** | `/api/instructor/videos/upload` | Cloudflare Stream 직접 업로드 |
| **Phase 4** | `/api/live/*` | 라이브 스트리밍 (Mux) |
| **Phase 5** | `/api/notifications/*` | 푸시/이메일 알림 |

---

*본 문서는 Surftorial MVP의 API 설계 기준입니다. 구현 단계에서 세부 사항이 변경될 수 있으며, 변경 시 본 문서를 업데이트합니다.*