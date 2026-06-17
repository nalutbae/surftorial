# Surftorial QA 테스트 리포트 — v2

**작성일**: 2026-06-17  
**테스터**: tester (QA 엔지니어)  
**대상**: Surftorial 서핑 온라인 강의 사이트 (Phase 1 완료 — 백엔드 + 프론트엔드 1차 구현)  
**버전**: 0.1.0

---

## 1. 검증 개요

| 항목 | 결과 |
|------|------|
| **전체 판정** | **FAIL** — 3건 CRITICAL, 7건 MEDIUM, 6건 LOW 발견 |
| **빌드 검증** | ✅ PASS (5.8s 컴파일, 6.0s 타입체크, 26/26 페이지) |
| **단위 테스트** | ✅ PASS (40/40, 588ms) |
| **API 엔드포인트** | ✅ 21개 구현 완료 |
| **프론트엔드 페이지** | ✅ 6개 페이지 구현 완료 |
| **입력 검증** | ⚠️ CONDITIONAL PASS (Zod 스키마 있으나 일부 경계값 누락) |
| **인증/인가** | ⚠️ CONDITIONAL PASS (requireAuth 패턴 일관, CSRF/로그아웃 미구현) |
| **보안** | ⚠️ CONDITIONAL FAIL (3건 CRITICAL) |
| **설계 문서 일관성** | ✅ PASS (3차 재검증 통과, 모든 불일치 해소) |

---

## 2. ✅ PASS 항목

### 2.1 빌드 & 타입 검증

| 검사 항목 | 상태 | 비고 |
|-----------|------|------|
| `next build` (Turbopack) | ✅ PASS | 5.8s 컴파일, 6.0s 타입 체크 |
| 26개 페이지 정적 생성 | ✅ PASS | 전 페이지 빌드 성공 |
| ESLint | ✅ PASS | 설정 정상 |

### 2.2 단위 테스트

| 테스트 파일 | 테스트 수 | 결과 |
|------------|----------|------|
| api-response.test.ts | 11 | ✅ PASS |
| api-utils.test.ts | 18 | ✅ PASS |
| toss-signature.test.ts | 11 | ✅ PASS |
| **합계** | **40** | **✅ PASS** |

### 2.3 API 엔드포인트 (21개)

```
✅ POST   /api/auth/register          — 회원가입 (profile 생성)
✅ GET    /api/auth/session           — 세션 확인
✅ GET    /api/courses                — 강의 목록 (필터/검색/페이징)
✅ GET    /api/courses/[id]           — 강의 상세 (레슨/리뷰 포함)
✅ PATCH  /api/courses/[id]           — 강의 수정 (소유자/관리자)
✅ DELETE /api/courses/[id]           — 강의 삭제 (soft delete)
✅ POST   /api/courses                — 강의 생성 (강사/관리자)
✅ POST   /api/courses/[id]/enroll    — 강의 등록
✅ GET    /api/courses/[id]/lessons   — 레슨 목록
✅ GET    /api/courses/[id]/lessons/[lessonId] — 레슨 상세
✅ POST   /api/courses/[id]/reviews   — 리뷰 작성
✅ GET    /api/progress               — 진도 조회
✅ PATCH  /api/progress               — 진도 업데이트
✅ POST   /api/payments/one-time      — 단건 결제 생성
✅ POST   /api/payments/subscribe     — 구독 생성
✅ GET    /api/payments/history       — 결제 내역
✅ POST   /api/subscriptions/cancel   — 구독 취소
✅ GET    /api/subscriptions/me       — 내 구독 정보
✅ GET    /api/users/me               — 내 프로필
✅ PATCH  /api/users/me               — 프로필 수정
✅ POST   /api/webhooks/toss          — Toss 웹훅 (HMAC 검증)
✅ GET    /api/admin/analytics        — 관리자 통계
✅ GET    /api/admin/courses          — 관리자 강의 관리
✅ GET    /api/admin/users            — 관리자 사용자 관리
✅       /auth/callback               — OAuth 콜백
✅       /auth/confirm                — 이메일 인증
```

### 2.4 설계 문서 일관성

3차 재검증 완료. 4건 문서 불일치 모두 해소:
- ✅ 결제 PG: 통일 (Toss)
- ✅ subscription cancel_scheduled: 문서 간 일관
- ✅ payments status 값: 문서 간 일관
- ✅ ID 타입: Prisma UUID로 통일

### 2.5 보안 기반

- ✅ SQL 인젝션 불가 (Prisma ORM 사용)
- ✅ XSS 불가 (API는 JSON만 반환, React JSX 자동 이스케이프)
- ✅ Toss 웹훅 HMAC-SHA256 + constant-time 비교 (timing attack 방어)
- ✅ requireAuth() / requireRole() 모든 변조 라우트에 일관 적용
- ✅ 에러 메시지에 스택 트레이스 누출 없음
- ✅ Zod 입력 검증 일관 적용 (17/21 라우트)

---

## 3. ❌ FAIL 항목 — 발견된 이슈

### 🔴 CRITICAL — 즉시 수정 필요

#### C-1. 자기 가입 역할 상승 (Self-Service Role Escalation)

| 항목 | 값 |
|------|-----|
| **파일** | `src/src/components/auth/RegisterForm.tsx:40-51` |
| **심각도** | CRITICAL |
| **설명** | 회원가입 폼에서 사용자가 `role` 선택 가능 (student/instructor). `registerSchema`에 `role: z.enum(["student", "instructor"]).optional()`로 정의되어 있으며, `user_metadata.role`로 Supabase에 전송됨. 서버 `requireRole()`은 DB profile.role을 읽으므로 직접적 상승은 아니나, JWT metadata와 client store에 instructor 역할이 저장됨. |
| **수정 제안** | 회원가입 폼에서 role 선택 제거. 기본값 student. 강사 전환은 별도 관리자 승인 프로세스 도입. |

#### C-2. Toss 웹훅 멱등성 부재 (Idempotency)

| 항목 | 값 |
|------|-----|
| **파일** | `src/src/app/api/webhooks/toss/route.ts:103-148` |
| **심각도** | CRITICAL |
| **설명** | `SUBSCRIPTION_BILLING` 이벤트에서 `prisma.payment.create()`가 매 호출마다 새 Payment 생성. 동일 웹훅 재전송 시 중복 결제가 발생. `PAYMENT_CONFIRM`도 Toss에서 중복 전송 가능. |
| **수정 제안** | Toss webhook event의 `idempotencyKey` 필드를 DB unique column으로 저장하고 `createMany` 또는 `upsert` 패턴으로 중복 방지. |

#### C-3. 수강 진도 위조 가능 (Progress Forgery)

| 항목 | 값 |
|------|-----|
| **파일** | `src/src/lib/validations.ts:175` |
| **심각도** | CRITICAL |
| **설명** | `progressUpdateSchema.watchedSec`에 `.min(0)`만 있고 `.max()`가 없음. 공격자가 `watchedSec: 999999999` 전송 시 `lesson.durationSec * 0.9` 비교를 통과해 레슨 완료 처리 가능. |
| **수정 제안** | `watchedSec`에 `.max()` 추가 (예: `.max(86400)` — 24시간 최대 수업 기준). 서버에서 실제 video duration 검증도 고려. |

---

### 🟠 MEDIUM — 다음 스프린트 수정 권장

| ID | 파일 | 설명 |
|----|------|------|
| **M-1** | `validations.ts:9-13` | 비밀번호 `.max()` 누락 → bcrypt 72바이트 제한 우회 가능. `.max(100)` 추가 필요. |
| **M-2** | 전체 auth 폼 | CSRF 토큰 없음. SameSite=Lax 쿠키 설정이나 Origin/Referer 검증 필요. |
| **M-3** | 전역 | `supabase.auth.onAuthStateChange` 리스너 없음 → 세션 갱신/만료 시 client store가 stale 상태 유지. |
| **M-4** | 전역 | 로그아웃(`signOut`) 미구현. 사용자가 세션 종료 불가. Navbar에 로그아웃 버튼 및 /api/auth/logout 엔드포인트 필요. |
| **M-5** | `subscriptions/cancel/route.ts:21-22` | `subscriptionCancelSchema` 정의되어 있으나 cancel route에서 사용 안 함. body 검증 없음. Toss API 호출도 없음 (TODO로만 남음). |
| **M-6** | `courses/route.ts:17,56` | `is_free` 필터: schema가 `z.boolean()`인데 URL param은 문자열 → `parse()` 실패. 필터 비기능. | 
| **M-7** | `courses/route.ts:58-71` | 강의 목록 조회 시 N+1 쿼리 발생 (코스당 1회 review aggregate). 50개 코스 = 51개 쿼리. |

---

### 🔵 LOW — 개선 권장

| ID | 파일 | 설명 |
|----|------|------|
| **L-1** | `validations.ts:8,26` | 이메일 `.max(254)` 누락 |
| **L-2** | `validations.ts:77` | `stream_id` 형식 검증 없음 (UUID로 검증 권장) |
| **L-3** | `validations.ts:87,175` | `watched_seconds` 상한 누락 (위 C-3과 동일) |
| **L-4** | `auth/callback/route.ts:11,19` | `next` 파라미터 소독 없음. `@` 포함 시 URL userinfo로 해석되어 외부 사이트로 리다이렉트 가능. |
| **L-5** | `components/auth/RegisterForm.tsx:78-82` | Profile 생성 실패 시 `console.warn`만 출력 → 사용자에게 오류 표시 안 됨 (dead account 위험) |
| **L-6** | 전역 | 보안 헤더 누락 (CSP, X-Frame-Options, HSTS). `next.config.ts` 또는 middleware에서 설정 필요. |

---

## 4. 엣지 케이스 테스트 결과

| 케이스 | 결과 | 비고 |
|--------|------|------|
| 빈 입력 (빈 body) | ✅ 검증 처리 | Zod 400 에러 |
| 잘못된 UUID | ✅ 검증 처리 | Zod 400 에러 |
| 매우 긴 문자열 (password) | ⚠️ 통과 | `.max()` 없어 10KB 비밀번호도 허용 |
| SQL 인젝션 | ✅ 차단 | Prisma ORM |
| XSS (HTML tag in title) | ✅ 차단 | React 자동 escape |
| 권한 없는 접근 | ✅ 401/403 | requireAuth/requireRole |
| 존재하지 않는 리소스 | ✅ 404 | notFoundResponse |
| 중복 이메일 가입 | ✅ 409 | Supabase Auth 처리 |
| 중복 강의 등록 | ✅ 409 | conflictResponse |
| Toss 웹훅 재전송 | ❌ 중복 결제 | 멱등성 부재 (C-2) |

---

## 5. 설계 문서 vs 구현 일관성

| 문서 | 구현 상태 |
|------|----------|
| architecture.md | ✅ Next.js 16 App Router + Supabase Auth + Prisma + Toss |
| data-model.md | ✅ Prisma 스키마 일치 (9개 모델, 9개 enum) |
| api-design.md | ✅ 21개 엔드포인트 모두 구현 |
| tech-stack.md | ✅ Next.js 16 + TypeScript + Tailwind v4 + Prisma + Zod |
| database-schema.md | ✅ 스키마 일치 |

---

## 6. 권장 수정 우선순위

### Sprint 1 (즉시 필요 — 배포 전)

1. **C-2**: Toss 웹훅 멱등성 — 중복 결제 방지 (PR #1)
2. **C-3**: 진도 위조 방지 — watchedSec max 값 설정 (PR #2)
3. **C-1**: 회원가입 role 선택 제거 — instructor 전용 프로세스 추가 (PR #3)
4. **M-4**: 로그아웃 구현 (PR #4)

### Sprint 2 (다음 릴리스)

5. **M-2**: CSRF 방어
6. **M-3**: onAuthStateChange 리스너
7. **M-5**: subscriptionCancelSchema 적용
8. **M-6**: is_free 필터 수정

### Sprint 3 (지속 개선)

9. **M-1**: 비밀번호 max length
10. **M-7**: N+1 쿼리 최적화
11. **L-1~L-6**: 경계값 보강, 보안 헤더 등

---

## 7. 최종 판정

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│     🚫  FAIL                                        │
│                                                     │
│     3건 CRITICAL — 배포 전 수정 필수                │
│     7건 MEDIUM   — Sprint 2 목표                    │
│     6건 LOW      — 지속 개선                        │
│                                                     │
│     빌드 / 테스트 / API: ✅ 양호                     │
│     보안: ⚠️ 3건 CRITICAL 발견                      │
│     문서: ✅ 설계 대비 일관                         │
│                                                     │
└─────────────────────────────────────────────────────┘
```