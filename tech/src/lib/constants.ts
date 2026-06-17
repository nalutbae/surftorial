// Environment constants
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export const TOSS_CLIENT_KEY = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY ?? "";
export const TOSS_SECRET_KEY = process.env.TOSS_SECRET_KEY ?? "";

export const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID ?? "";
export const CLOUDFLARE_STREAM_TOKEN = process.env.CLOUDFLARE_STREAM_TOKEN ?? "";

// Site URL for redirects
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

// Subscription pricing (KRW)
export const PRICING = {
  starter: {
    monthly: 29000,
    yearly: 290000,
  },
  premium: {
    monthly: 49000,
    yearly: 490000,
  },
} as const;

// Role definitions
export const ROLES = {
  student: "student",
  instructor: "instructor",
  admin: "admin",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

// Course categories
export const COURSE_CATEGORIES = {
  basics: "서핑 기초",
  popup: "팝업",
  turn: "턴",
  safety: "안전",
  seasonal: "시즌",
  fitness: "피트니스",
} as const;

// Skill levels
export const SKILL_LEVELS = {
  beginner: "입문",
  intermediate: "초급",
  advanced: "중급",
  expert: "상급",
} as const;
