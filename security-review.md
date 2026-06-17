# Security & Code Review: Surftorial API Routes

**Review Date:** 2026-06-17
**Files Reviewed:** 21 route files + 6 utility/validation files + 3 infrastructure files
**Reviewer:** Security Audit Agent

---

## FINDINGS SUMMARY

| Severity | Count |
|----------|-------|
| CRITICAL | 3 |
| MEDIUM   | 7 |
| LOW      | 6 |

---

## CRITICAL FINDINGS

### C-1: Webhook Event Data Has No Schema Validation (Type Confusion / Logic Bypass)
**File:** `src/app/api/webhooks/toss/route.ts`  
**Lines:** 40-43 (main body), 47-52 (PAYMENT_CONFIRM), 103-108 (SUBSCRIPTION_BILLING), 152-156 (REFUND)  
**Risk:** An attacker who bypasses (or is inside the valid-signature window of) the webhook signature check can send arbitrary payload shapes. The `data` field is cast with `as Record<string, unknown>` and then each `case` body re-casts with `data as { orderId: string; paymentKey: string; amount: number; status: string }`. These are TypeScript compile-time casts — they do zero runtime validation.  
**Exploit scenario:** If `amount` arrives as a string (`"10000"`) instead of number (`10000`), the JS `!==` comparison on line 63 (`payment.amount !== amount`) would compare `number !== string`, which is *always* `true`, causing the amount check to **always fail** — safe, but erratic. Conversely, missing or malformed fields (`orderId: undefined`) cause Prisma queries with `undefined` where conditions, which Prisma translates to unexpected WHERE clauses.  
**Fix:** Add Zod schemas for each webhook event type (`PaymentConfirmEvent`, `SubscriptionBillingEvent`, `RefundEvent`) and parse the event body through them before accessing fields.

---

### C-2: No Webhook Replay Protection
**File:** `src/app/api/webhooks/toss/route.ts`  
**Lines:** 14-15, entire handler  
**Risk:** The webhook handler receives a `tosspayments-webhook-transmission-time` header but never checks it against a replay window. An attacker who captures a valid signed webhook payload can replay it indefinitely.  
**Exploit scenario:** A `SUBSCRIPTION_BILLING` webhook (lines 103-149) creates a **new** `Payment` record on every invocation (line 119: `prisma.payment.create`). Replaying this webhook 100 times creates 100 duplicate payment records — no upsert or idempotency key is used. While the subscription period extension (lines 131-147) would just repeatedly update the same dates, the flood of Payment records pollutes the billing ledger.  
**Fix:** (1) Store a Toss-provided `webhookId` or compute an idempotency key from `eventType + orderId/billingKey/paymentKey + transmissionTime` and reject duplicates. (2) Reject webhooks whose `transmissionTime` is older than 5 minutes.

---

### C-3: Lesson Progress Completion Can Be Forged by Client
**File:** `src/app/api/progress/route.ts` (lines 155-158)  
**File:** `src/app/api/lessons/[id]/progress/route.ts` (lines 112-114)  
**Risk:** The completion logic `data.watchedSec >= lesson.durationSec * 0.9` uses a client-supplied value (`watchedSec` / `watched_seconds`). The Zod schema (`z.number().int().min(0)`) only enforces a lower bound — no upper bound. A malicious user can send `watched_seconds: 999999999` and instantly mark any lesson as completed, without actually watching any video.  
**Exploit scenario:** A student can complete all lessons in a paid course in a single PATCH request, causing `enrollment.status` to change to `"completed"` (progress route lines 195-199) without legitimate engagement.  
**Fix:** Add an upper bound: `z.number().int().min(0).max(lesson.durationSec)` — but since `durationSec` isn't known at schema-definition time, validate in the handler: `if (data.watchedSec > lesson.durationSec * 2) { return errorResponse(...) }`.

---

## MEDIUM FINDINGS

### M-1: Toss Webhook Unknown Events Silently Succeed (200 OK)
**File:** `src/app/api/webhooks/toss/route.ts`  
**Lines:** 183-185  
**Risk:** The `default` case in the switch only logs a warning, then falls through to `return successResponse({ processed: true })`. Unknown or malicious event types are acknowledged as successfully processed, giving no signal to monitoring systems. If Toss adds a new event type (e.g., `PAYMENT_FAILED`) that requires action, the handler silently ignores it.  
**Fix:** Return a `202 Accepted` with `{ processed: false, reason: "unknown_event_type" }` for unrecognized event types.

---

### M-2: Subscription Cancellation Doesn't Call Toss API (Stubbed)
**File:** `src/app/api/subscriptions/cancel/route.ts`  
**Line:** 21-22 (`// TODO: Call Toss API to cancel billing`)  
**Risk:** Cancellation only updates the local DB (`status: "canceled"`) but never calls the Toss billing API to actually stop recurring billing. Users marked as "canceled" in the DB will continue being charged by Toss.  
**Exploit scenario:** A user cancels → gets confirmation → Toss still bills next month → payment webhook fires → code finds no active subscription → error. User has no recourse because the payment still goes through.  
**Fix:** Implement the Toss billing key cancellation API call before marking the subscription as canceled in the DB.

---

### M-3: `is_free` Query Parameter Silent Failure (Broken Filter)
**File:** `src/app/api/courses/route.ts`  
**Line:** 17 (`courseFilterSchema.parse(Object.fromEntries(searchParams))`)  
**File:** `src/lib/validations.ts`  
**Line:** 56 (`is_free: z.boolean().optional()`)  
**Risk:** `Object.fromEntries(searchParams)` converts all values to strings. `z.boolean()` does NOT coerce — `z.boolean().parse("true")` throws `ZodError`. The course list endpoint returns a 400 validation error when the `is_free` filter is used, making it impossible for clients to filter free courses. This is a functional bug with security implications: clients cannot properly browse free content, pushing them toward unintended behavior.  
**Fix:** Change to `z.coerce.boolean().optional()` or `z.enum(["true", "false"]).transform(v => v === "true").optional()`.

---

### M-4: Admin Routes Missing Input Validation (Parameter Injection Surface)
**File:** `src/app/api/admin/courses/route.ts` (lines 13-15)  
**File:** `src/app/api/admin/users/route.ts` (lines 14-17)  
**File:** `src/app/api/users/me/enrollments/route.ts` (lines 14-15)  
**Risk:** `page` and `perPage` are parsed with raw `parseInt()` without Zod schema validation. In `admin/users/route.ts` line 17, the `role` query param is cast directly to the Prisma `Role` enum with `as Role | null` — no validation that the value is actually a valid Role. Passing `?role=superadmin` would be passed directly to Prisma, causing a database error that, while handled by the catch, lacks early input sanitization.  
**Fix:** Use Zod schemas (already defined as `adminUserListSchema` etc. but not used here) or add validation guards.

---

### M-5: Cloudflare Stream Signed URLs Use `accessRules: [{ type: "any" }]`
**File:** `src/lib/cloudflare/stream.ts`  
**Line:** 30  
**Risk:** The signed URL token allows "any" access rule — no IP restriction, referrer restriction, or country restriction. While the URL is time-limited (default 2 hours), anyone who obtains the URL (via sharing, screenshot, or network capture) can view the full video for the entire 2-hour window. For a paid educational platform, this means paid content can be freely shared.  
**Fix:** Add `accessRules` with `ip: { ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") }` or at minimum a referrer restriction to the app domain. Consider reducing `expiresInHours` from 2 to 1.

---

### M-6: Predictable Order ID Leaks Partial User ID
**File:** `src/app/api/payments/one-time/route.ts`  
**Line:** 35  
**Risk:** `orderId = `order_${Date.now()}_${profile.id.slice(0, 8)}`` — The order ID uses a predictable timestamp and exposes the first 8 characters of the user's Supabase UUID. Since Supabase UUIDs are v4 (random), the first 8 chars expose ~32 bits of entropy, making user enumeration theoretically easier. Additionally, timestamp-based IDs enable temporal correlation attacks.  
**Fix:** Use `crypto.randomUUID()` or a secure random string for the `orderId` field. Store the mapping in the `tossOrderId` column as currently done.

---

### M-7: Missing Rate Limiting Across All Endpoints
**File:** All route files  
**Lines:** N/A (absence of protection)  
**Risk:** No endpoint implements rate limiting. Specific attack vectors:  
- `/api/payments/one-time` (POST): Can create unlimited pending payments, spamming the payments table.  
- `/api/auth/register` (POST): Can be called repeatedly to attempt profile creation (though the `findUnique` check prevents duplicates).  
- `/api/enroll` (POST): Can be hammered to check enrollment status.  
- `/api/progress` (PATCH): Can be called rapidly to manipulate progress records.  
- `/api/courses` (GET): The N+1 query pattern (51 queries per request) makes this a DoS amplification vector.  
**Fix:** Implement application-level rate limiting (e.g., `@upstash/ratelimit` for Vercel/Edge, or a simple in-memory limiter per user ID). At minimum, limit mutation endpoints (`POST`/`PATCH`/`DELETE`) to 10-30 requests/minute per user.

---

## LOW FINDINGS

### L-1: Courses List N+1 Query Pattern — DoS Amplification
**File:** `src/app/api/courses/route.ts`  
**Lines:** 58-71  
**Risk:** For each course in the result set (up to 50), a separate `courseReview.aggregate` query is executed via `Promise.all`. A single request with `per_page=50` generates 51+ database queries. An attacker can amplify this with moderate concurrent requests to overwhelm the database connection pool.  
**Fix:** Either (a) cache review stats in the course table/materialized view, or (b) use a single GROUP BY query to fetch all ratings in one round trip: `GROUP BY courseId WHERE courseId IN (...)`.

---

### L-2: Middleware Route Protection Has Gap — `/api/courses/[id]/lessons/[lessonId]` Unprotected at Middleware Layer
**File:** `src/proxy.ts` (middleware)  
**Lines:** 48-51  
**Risk:** The middleware's public route detection uses regex `pathname.match(/^\/api\/courses\/[^/]+\/lessons$/)` — this ONLY matches the lessons LIST endpoint (`/api/courses/:id/lessons`), NOT individual lesson endpoints (`/api/courses/:id/lessons/:lessonId`). These individual endpoints (PATCH/DELETE) are NOT in the middleware's protected routes list either. While the route handlers have their own `requireAuth()` checks (defense-in-depth), removing the route-level check accidentally would leave these unprotected with no middleware guard.  
**Fix:** Add `pathname.match(/^\/api\/courses\/[^/]+\/lessons\/.+$/)` to the protected routes list, or broaden the regex to allow individual lesson paths.

---

### L-3: `course_id` Query Parameter Without Validation
**File:** `src/app/api/progress/route.ts`  
**Line:** 20  
**Risk:** `const courseId = searchParams.get("course_id");` — the courseId is used directly in Prisma queries without UUID format validation. While Prisma's `findFirst` with an invalid ID would simply not find a match (returning a 404), the lack of format validation allows unnecessary DB queries with malformed IDs.  
**Fix:** Validate UUID format with Zod or a regex before querying.

---

### L-4: Enrollment Check Has TOCTOU Race Window
**File:** `src/app/api/courses/[id]/enroll/route.ts`  
**Lines:** 29-47  
**Risk:** The "check if already enrolled" (line 29) and "create enrollment" (line 52) are separate operations without a transaction. Two concurrent requests from the same user could both pass the existence check and attempt to create duplicate enrollments. The `userId_courseId` compound unique constraint would cause one to fail with a Prisma exception (→ 500 error). The race window is extremely small for this specific code path, but it's a correctness issue.  
**Fix:** Wrap the check-and-create in a Prisma interactive transaction, or use a unique constraint violation catch to return a proper 409.

---

### L-5: Progress Routes Return Full DB Record Including Internal Fields
**File:** `src/app/api/progress/route.ts` (line 202-209)  
**File:** `src/app/api/lessons/[id]/progress/route.ts` (line 133)  
**Risk:** The progress upsert result includes all DB fields (including internal timestamps like `createdAt`, `updatedAt`). While these are low-sensitivity, the `...progress` spread on line 202-203 of the progress route returns the raw Prisma model without selecting specific fields. A future schema change that adds a sensitive column (e.g., `ipAddress` or `deviceInfo`) would automatically expose it.  
**Fix:** Select only the fields the client needs: `{ id, lessonId, watchedSec, lastPosition, isCompleted, completedAt }`.

---

### L-6: `!` Non-Null Assertions on Env Vars Cause Runtime Crashes If Missing
**File:** `src/lib/payments/toss.ts` (lines 3-4)  
**File:** `src/lib/cloudflare/stream.ts` (lines 1-2)  
**Risk:** Environment variables use the `!` non-null assertion (`process.env.TOSS_SECRET_KEY!`), which means accessing them returns `string` not `string | undefined`. If these env vars are not set at runtime, the code crashes with a cryptic error at the point of use rather than during startup validation.  
**Fix:** Add a startup validation function that checks required env vars exist and throws a descriptive error, or use `z.string().min(1).parse(process.env.TOSS_SECRET_KEY)` at module load time.

---

## COMPLIANCE & BEST PRACTICES CHECKLIST

| Practice | Status | Notes |
|----------|--------|-------|
| **SQL Injection** | ✅ PASS | All queries use Prisma ORM with parameterized queries. No raw SQL found. |
| **XSS (API level)** | ✅ PASS | All responses are JSON; no HTML rendering in API routes. |
| **Auth checks on all protected routes** | ✅ PASS | Every mutation endpoint has `requireAuth()` or `requireRole()`. |
| **Consistent error responses** | ✅ PASS | Centralized `errorResponse()` pattern used throughout; no stack traces exposed. |
| **Input validation (Zod)** | ⚠️ PARTIAL | Most POST/PATCH bodies validated; query params in admin routes bypassed. |
| **HTTP security headers** | ❌ NOT FOUND | No CSP, HSTS, or X-Content-Type-Options in middleware or API responses. |
| **Rate limiting** | ❌ NOT FOUND | No protection against brute-force or DoS on any endpoint. |
| **Webhook signature verification** | ✅ PASS | HMAC-SHA256 with constant-time comparison. |
| **Idempotency enforcement** | ❌ NOT FOUND | No webhook replay protection, no payment idempotency keys. |
| **Secrets management** | ⚠️ PASS | Secrets in env vars (good), but `!` assertions risk silent crashes. |

---

## FILE-BY-FILE SUMMARY

| File | Lines | Severity Issues | Auth Coverage |
|------|-------|-----------------|---------------|
| `auth/register/route.ts` | 44 | L-6 (env crash) | Requires Supabase auth (OK) |
| `auth/session/route.ts` | 30 | None | Reads auth, returns null if none |
| `courses/route.ts` | 117 | **M-3, M-7**, L-1 | Public GET; Instructor POST via `requireRole` |
| `courses/[id]/route.ts` | 184 | None | Public GET; Instructor PATCH/DELETE via `requireRole` |
| `courses/[id]/lessons/route.ts` | 123 | None | Public GET (access-gated); Auth+ownership POST |
| `courses/[id]/lessons/[lessonId]/route.ts` | 112 | L-2 (middleware gap) | Auth+ownership PATCH/DELETE |
| `courses/[id]/reviews/route.ts` | 133 | None | Public GET; Auth POST with enrollment check |
| `courses/[id]/enroll/route.ts` | 73 | L-4 (TOCTOU) | Auth via `requireAuth` |
| `progress/route.ts` | 216 | **C-3, M-7**, L-3, L-5 | Auth via `requireAuth` |
| `lessons/[id]/progress/route.ts` | 141 | **C-3**, L-5 | Auth via `requireAuth` |
| `payments/history/route.ts` | 57 | None | Auth via `requireAuth` |
| `payments/subscribe/route.ts` | 59 | None | Auth via `requireAuth` |
| `payments/one-time/route.ts` | 62 | **M-6** (predictable orderId) | Auth via `requireAuth` |
| `webhooks/toss/route.ts` | 191 | **C-1, C-2**, M-1 | HMAC signature verification |
| `subscriptions/cancel/route.ts` | 36 | **M-2** (stubbed Toss call) | Auth via `requireAuth` |
| `subscriptions/me/route.ts` | 34 | None | Auth via `requireAuth` |
| `users/me/route.ts` | 57 | None | Auth via `requireAuth` |
| `users/me/enrollments/route.ts` | 78 | M-4 (unvalidated params) | Auth via `requireAuth` |
| `admin/courses/route.ts` | 42 | M-4 (unvalidated params) | Admin via `requireRole("admin")` |
| `admin/users/route.ts` | 42 | M-4 (unvalidated params) | Admin via `requireRole("admin")` |
| `admin/analytics/route.ts` | 60 | None | Admin via `requireRole("admin")` |

---

## RECOMMENDED FIX PRIORITY

1. **IMMEDIATE** — Add Zod validation for Toss webhook event payloads (C-1) and replay protection (C-2)
2. **IMMEDIATE** — Cap `watchedSec` / `watched_seconds` in progress routes to prevent completion forgery (C-3)
3. **HIGH** — Implement Toss billing key cancellation in subscription cancel (M-2)
4. **HIGH** — Add rate limiting at least on payment and enrollment endpoints (M-7)
5. **MEDIUM** — Add access rules to Cloudflare Stream signed URLs (M-5)
6. **MEDIUM** — Use secure random order IDs instead of timestamp-based (M-6)
7. **MEDIUM** — Return proper HTTP status for unknown webhook events (M-1)
8. **LOW** — Fix `is_free` boolean coercion in course filter schema (M-3)
9. **LOW** — Add Zod validation to admin route query parameters (M-4)
10. **LOW** — Wrap enrollment check+create in a transaction (L-4)