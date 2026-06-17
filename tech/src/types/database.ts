// Supabase Database types — mirrors the Prisma schema for Supabase client usage
// These types are used by the Supabase JS client for type-safe queries

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Role = "student" | "instructor" | "admin";
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";
export type EnrollmentStatus = "active" | "completed" | "refunded";
export type PaymentType = "one_time" | "subscription";
export type PaymentStatus = "pending" | "completed" | "failed" | "refunded";
export type SubscriptionPlanType = "monthly" | "yearly";
export type SubscriptionTier = "starter" | "premium";
export type SubscriptionStatus = "active" | "canceled" | "expired" | "past_due";

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          display_name: string | null;
          avatar_url: string | null;
          bio: string | null;
          skill_level: SkillLevel;
          role: Role;
          join_date: string;
          created_at: string;
          updated_at: string;
          deleted_at: string | null;
        };
        Insert: {
          id: string;
          display_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          skill_level?: SkillLevel;
          role?: Role;
        };
        Update: {
          display_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
          skill_level?: SkillLevel;
          role?: Role;
        };
      };
      categories: {
        Row: {
          id: number;
          name: string;
          slug: string;
          description: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          name: string;
          slug: string;
          description?: string | null;
          sort_order?: number;
        };
        Update: {
          name?: string;
          slug?: string;
          description?: string | null;
          sort_order?: number;
        };
      };
      courses: {
        Row: {
          id: string;
          instructor_id: string;
          category_id: number | null;
          title: string;
          description: string | null;
          thumbnail_url: string | null;
          skill_level: SkillLevel;
          price: number;
          is_published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
          deleted_at: string | null;
        };
        Insert: {
          instructor_id: string;
          title: string;
          category_id?: number | null;
          description?: string | null;
          thumbnail_url?: string | null;
          skill_level?: SkillLevel;
          price?: number;
          is_published?: boolean;
        };
        Update: {
          title?: string;
          description?: string | null;
          category_id?: number | null;
          price?: number;
          thumbnail_url?: string | null;
          skill_level?: SkillLevel;
          is_published?: boolean;
        };
      };
      lessons: {
        Row: {
          id: string;
          course_id: string;
          title: string;
          slug: string;
          description: string | null;
          stream_id: string | null;
          hls_url: string | null;
          duration_sec: number | null;
          thumbnail_url: string | null;
          sort_order: number;
          is_free_preview: boolean;
          created_at: string;
          updated_at: string;
          deleted_at: string | null;
        };
        Insert: {
          course_id: string;
          title: string;
          slug: string;
          description?: string | null;
          stream_id?: string | null;
          duration_sec?: number | null;
          sort_order?: number;
          is_free_preview?: boolean;
        };
        Update: {
          title?: string;
          slug?: string;
          description?: string | null;
          stream_id?: string | null;
          duration_sec?: number | null;
          sort_order?: number;
          is_free_preview?: boolean;
        };
      };
      enrollments: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          source: string;
          payment_id: string | null;
          status: EnrollmentStatus;
          enrolled_at: string;
          expires_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          course_id: string;
          source?: string;
          payment_id?: string | null;
          status?: EnrollmentStatus;
        };
        Update: {
          status?: EnrollmentStatus;
          expires_at?: string | null;
        };
      };
      lesson_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: string;
          is_completed: boolean;
          watched_sec: number;
          last_position: number;
          completed_at: string | null;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          lesson_id: string;
          is_completed?: boolean;
          watched_sec?: number;
          last_position?: number;
        };
        Update: {
          is_completed?: boolean;
          watched_sec?: number;
          last_position?: number;
          completed_at?: string | null;
        };
      };
      payments: {
        Row: {
          id: string;
          user_id: string;
          course_id: string | null;
          subscription_id: string | null;
          payment_type: PaymentType;
          amount: number;
          currency: string;
          status: PaymentStatus;
          toss_payment_key: string | null;
          toss_order_id: string | null;
          paid_at: string | null;
          refunded_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          payment_type: PaymentType;
          amount: number;
          course_id?: string | null;
          subscription_id?: string | null;
          currency?: string;
          status?: PaymentStatus;
          toss_order_id?: string | null;
        };
        Update: {
          status?: PaymentStatus;
          toss_payment_key?: string | null;
          paid_at?: string | null;
          refunded_at?: string | null;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          plan_type: SubscriptionPlanType;
          tier: SubscriptionTier;
          status: SubscriptionStatus;
          toss_billing_key: string | null;
          toss_customer_key: string | null;
          current_period_start: string;
          current_period_end: string;
          canceled_at: string | null;
          created_at: string;
          updated_at: string;
          deleted_at: string | null;
        };
        Insert: {
          user_id: string;
          plan_type: SubscriptionPlanType;
          tier: SubscriptionTier;
          current_period_start: string;
          current_period_end: string;
          status?: SubscriptionStatus;
          toss_customer_key?: string | null;
        };
        Update: {
          status?: SubscriptionStatus;
          toss_billing_key?: string | null;
          canceled_at?: string | null;
          current_period_start?: string;
          current_period_end?: string;
        };
      };
      course_reviews: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          rating: number;
          comment: string | null;
          created_at: string;
          updated_at: string;
          deleted_at: string | null;
        };
        Insert: {
          user_id: string;
          course_id: string;
          rating: number;
          comment?: string | null;
        };
        Update: {
          rating?: number;
          comment?: string | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      role: Role;
      skill_level: SkillLevel;
      enrollment_status: EnrollmentStatus;
      payment_type: PaymentType;
      payment_status: PaymentStatus;
      subscription_plan_type: SubscriptionPlanType;
      subscription_tier: SubscriptionTier;
      subscription_status: SubscriptionStatus;
    };
  };
}