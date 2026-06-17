import { z } from "zod";

// ============================================
// Dev mode helpers
// ============================================

const isDev = process.env.NEXT_PUBLIC_SUPABASE_URL === "https://placeholder.supabase.co";

// ============================================
// Auth Schemas
// ============================================

export const registerSchema = z.object({
  email: z.string().refine(
    (val) => {
      if (isDev) {
        // dev: admin@localhost 같은 로컬 이메일 허용
        return /^[^\s@]+@[^\s@]+$/.test(val);
      }
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    },
    { message: "올바른 이메일을 입력해주세요" }
  ),
  password: isDev
    ? z.string().min(4, "비밀번호는 4자 이상이어야 합니다")
    : z
        .string()
        .min(8, "비밀번호는 8자 이상이어야 합니다")
        .regex(/[A-Za-z]/, "영문자를 포함해야 합니다")
        .regex(/[0-9]/, "숫자를 포함해야 합니다"),
  display_name: z
    .string()
    .min(2, "이름은 2자 이상이어야 합니다")
    .max(50, "이름은 50자 이내여야 합니다"),
  phone: z
    .string()
    .regex(/^01[016789]\d{7,8}$/, "올바른 휴대전화 번호를 입력해주세요")
    .optional(),
});

export const loginSchema = z.object({
  email: z.string().min(1, "이메일을 입력해주세요").refine(
    (val) => {
      if (isDev) {
        // dev: admin@localhost 같은 로컬 이메일 허용
        return /^[^\s@]+@[^\s@]+$/.test(val);
      }
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    },
    { message: "올바른 이메일을 입력해주세요" }
  ),
  password: z.string().min(1, "비밀번호를 입력해주세요"),
});

export const profileUpdateSchema = z.object({
  display_name: z.string().min(2).max(50).optional(),
  bio: z.string().max(500, "자기소개는 500자 이내여야 합니다").optional(),
  skill_level: z.enum(["beginner", "intermediate", "advanced", "expert"]).optional(),
  avatar_url: z.string().url().optional(),
});

// ============================================
// Course Schemas
// ============================================

export const courseCreateSchema = z.object({
  title: z.string().min(2, "강의 제목은 2자 이상이어야 합니다").max(200),
  description: z.string().max(10000).optional(),
  category: z.enum(["basics", "popup", "turn", "safety", "seasonal", "fitness"]),
  skill_level: z.enum(["beginner", "intermediate", "advanced", "expert"]).default("beginner"),
  price: z.number().int().min(0, "가격은 0원 이상이어야 합니다").default(0),
  thumbnail_url: z.string().url().optional(),
  is_published: z.boolean().default(false),
});

export const courseUpdateSchema = courseCreateSchema.partial();

export const courseFilterSchema = z.object({
  category: z.enum(["basics", "popup", "turn", "safety", "seasonal", "fitness"]).optional(),
  skill_level: z.enum(["beginner", "intermediate", "advanced", "expert"]).optional(),
  is_free: z.boolean().optional(),
  sort: z.enum(["latest", "popular", "price_asc", "price_desc"]).default("latest"),
  page: z.coerce.number().int().min(1).default(1),
  per_page: z.coerce.number().int().min(1).max(50).default(20),
  search: z.string().optional(),
});

// Alias for backward compat with test file
export const courseListQuerySchema = courseFilterSchema;

// ============================================
// Lesson Schemas
// ============================================

export const lessonCreateSchema = z.object({
  title: z.string().min(1, "레슨 제목을 입력해주세요").max(200),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9-]+$/, "URL 슬러그는 소문자, 숫자, 하이픈만 사용할 수 있습니다"),
  description: z.string().max(5000).optional(),
  stream_id: z.string().optional(),
  duration_sec: z.number().int().min(0).default(0),
  sort_order: z.number().int().min(0).default(0),
  is_free_preview: z.boolean().default(false),
});

export const lessonUpdateSchema = lessonCreateSchema.partial();

// Snake-case alias used in lesson progress route
export const updateProgressSchema = z.object({
  watched_seconds: z.number().int().min(0).max(86400, "시청 시간은 24시간(86400초)을 초과할 수 없습니다"),
  last_position: z.number().int().min(0).optional(),
});

// ============================================
// Payment Schemas
// ============================================

export const paymentCreateSchema = z.object({
  course_id: z.string().uuid().optional(),
  subscription_id: z.string().uuid().optional(),
  payment_type: z.enum(["one_time", "subscription"]),
  amount: z.number().int().positive(),
});

export const oneTimePaymentSchema = z.object({
  course_id: z.string().uuid(),
});

export const tossPaymentConfirmSchema = z.object({
  paymentKey: z.string(),
  orderId: z.string(),
  amount: z.number().int().positive(),
});

export const tossBillingAuthSchema = z.object({
  customerKey: z.string(),
  authKey: z.string(),
});

export const subscribeSchema = z.object({
  plan: z.enum(["starter", "premium"]),
  billing_cycle: z.enum(["monthly", "yearly"]),
});

// ============================================
// Payment History Schemas
// ============================================

export const paymentHistoryQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  per_page: z.coerce.number().int().min(1).max(50).default(20),
  type: z.enum(["one_time", "subscription"]).optional(),
  status: z.enum(["pending", "completed", "failed", "refunded"]).optional(),
});

// ============================================
// Subscription Schemas
// ============================================

export const subscriptionCreateSchema = z.object({
  plan_type: z.enum(["monthly", "yearly"]),
  tier: z.enum(["starter", "premium"]),
});

export const subscriptionCancelSchema = z.object({
  reason: z.string().max(500).optional(),
});

// ============================================
// Review Schemas
// ============================================

export const reviewCreateSchema = z.object({
  courseId: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().max(1000).optional(),
});

export const reviewUpdateSchema = z.object({
  rating: z.number().int().min(1).max(5).optional(),
  comment: z.string().max(1000).optional(),
});

// ============================================
// Enrollment Schemas
// ============================================

export const enrollmentCheckSchema = z.object({
  courseId: z.string().uuid(),
});

// ============================================
// Progress Schemas
// ============================================

export const progressUpdateSchema = z.object({
  lessonId: z.string().uuid(),
  watchedSec: z.number().int().min(0).max(86400, "시청 시간은 24시간(86400초)을 초과할 수 없습니다"),
  lastPosition: z.number().int().min(0).optional(),
});

// ============================================
// Admin Schemas
// ============================================

export const adminCourseListSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  per_page: z.coerce.number().int().min(1).max(100).default(20),
  status: z.enum(["published", "draft", "all"]).default("all"),
  search: z.string().optional(),
});

export const adminUserListSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  per_page: z.coerce.number().int().min(1).max(100).default(20),
  role: z.enum(["student", "instructor", "admin", "all"]).default("all"),
  search: z.string().optional(),
});

// ============================================
// Type exports
// ============================================

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
export type CourseCreateInput = z.infer<typeof courseCreateSchema>;
export type CourseUpdateInput = z.infer<typeof courseUpdateSchema>;
export type CourseFilterInput = z.infer<typeof courseFilterSchema>;
export type LessonCreateInput = z.infer<typeof lessonCreateSchema>;
export type LessonUpdateInput = z.infer<typeof lessonUpdateSchema>;
export type PaymentCreateInput = z.infer<typeof paymentCreateSchema>;
export type OneTimePaymentInput = z.infer<typeof oneTimePaymentSchema>;
export type SubscribeInput = z.infer<typeof subscribeSchema>;
export type TossPaymentConfirmInput = z.infer<typeof tossPaymentConfirmSchema>;
export type PaymentHistoryQueryInput = z.infer<typeof paymentHistoryQuerySchema>;
export type SubscriptionCreateInput = z.infer<typeof subscriptionCreateSchema>;
export type ReviewCreateInput = z.infer<typeof reviewCreateSchema>;
export type ReviewUpdateInput = z.infer<typeof reviewUpdateSchema>;
export type ProgressUpdateInput = z.infer<typeof progressUpdateSchema>;
export type UpdateProgressInput = z.infer<typeof updateProgressSchema>;
export type AdminCourseListInput = z.infer<typeof adminCourseListSchema>;
export type AdminUserListInput = z.infer<typeof adminUserListSchema>;