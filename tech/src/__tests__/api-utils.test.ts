import { describe, it, expect } from "vitest";
import {
  courseCreateSchema,
  courseListQuerySchema,
} from "@/lib/validations/course";
import { updateProgressSchema } from "@/lib/validations/lesson";
import { subscribeSchema, oneTimePaymentSchema } from "@/lib/validations/payment";
import { registerSchema, updateProfileSchema } from "@/lib/validations/user";

describe("Course Validation Schemas", () => {
  describe("courseCreateSchema", () => {
    it("should validate a valid course creation payload", () => {
      const result = courseCreateSchema.safeParse({
        title: "서핑 기초 강의",
        description: "초보자를 위한 서핑 기초 과정입니다.",
        category: "basics",
        price: 29000,
        skill_level: "beginner",
      });
      expect(result.success).toBe(true);
    });

    it("should reject title shorter than 2 characters", () => {
      const result = courseCreateSchema.safeParse({
        title: "a",
        category: "basics",
        price: 0,
      });
      expect(result.success).toBe(false);
    });

    it("should reject negative price", () => {
      const result = courseCreateSchema.safeParse({
        title: "서핑 강의",
        category: "basics",
        price: -1,
      });
      expect(result.success).toBe(false);
    });

    it("should default skill_level to beginner", () => {
      const result = courseCreateSchema.safeParse({
        title: "서핑 강의",
        category: "basics",
        price: 0,
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.skill_level).toBe("beginner");
      }
    });
  });

  describe("courseListQuerySchema", () => {
    it("should apply defaults for pagination", () => {
      const result = courseListQuerySchema.safeParse({});
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.page).toBe(1);
        expect(result.data.per_page).toBe(20);
        expect(result.data.sort).toBe("latest");
      }
    });

    it("should coerce string page to number", () => {
      const result = courseListQuerySchema.safeParse({ page: "3", per_page: "10" });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.page).toBe(3);
        expect(result.data.per_page).toBe(10);
      }
    });
  });
});

describe("Lesson Validation Schemas", () => {
  describe("updateProgressSchema", () => {
    it("should validate watched_seconds", () => {
      const result = updateProgressSchema.safeParse({ watched_seconds: 120 });
      expect(result.success).toBe(true);
    });

    it("should reject negative watched_seconds", () => {
      const result = updateProgressSchema.safeParse({ watched_seconds: -5 });
      expect(result.success).toBe(false);
    });

    it("should reject watched_seconds exceeding 86400 (24h)", () => {
      const result = updateProgressSchema.safeParse({ watched_seconds: 86401 });
      expect(result.success).toBe(false);
    });

    it("should accept watched_seconds at 86400 boundary", () => {
      const result = updateProgressSchema.safeParse({ watched_seconds: 86400 });
      expect(result.success).toBe(true);
    });

    it("should validate last_position with watched_seconds", () => {
      const result = updateProgressSchema.safeParse({
        watched_seconds: 120,
        last_position: 45,
      });
      expect(result.success).toBe(true);
    });
  });
});

describe("Payment Validation Schemas", () => {
  describe("subscribeSchema", () => {
    it("should validate a valid subscription payload", () => {
      const result = subscribeSchema.safeParse({
        plan: "starter",
        billing_cycle: "monthly",
      });
      expect(result.success).toBe(true);
    });

    it("should reject invalid plan", () => {
      const result = subscribeSchema.safeParse({
        plan: "enterprise",
        billing_cycle: "monthly",
      });
      expect(result.success).toBe(false);
    });
  });

  describe("oneTimePaymentSchema", () => {
    it("should validate a valid course_id", () => {
      const result = oneTimePaymentSchema.safeParse({
        course_id: "550e8400-e29b-41d4-a716-446655440000",
      });
      expect(result.success).toBe(true);
    });

    it("should reject invalid UUID", () => {
      const result = oneTimePaymentSchema.safeParse({
        course_id: "not-a-uuid",
      });
      expect(result.success).toBe(false);
    });
  });
});

describe("User Validation Schemas", () => {
  describe("registerSchema", () => {
    it("should validate a valid registration payload", () => {
      const result = registerSchema.safeParse({
        email: "test@example.com",
        password: "abcd1234",
        display_name: "김서핑",
      });
      expect(result.success).toBe(true);
    });

    it("should reject display_name shorter than 2 chars", () => {
      const result = registerSchema.safeParse({
        email: "test@example.com",
        password: "abcd1234",
        display_name: "a",
      });
      expect(result.success).toBe(false);
    });
  });

  describe("updateProfileSchema", () => {
    it("should validate partial updates", () => {
      const result = updateProfileSchema.safeParse({
        display_name: "새이름",
        bio: "안녕하세요",
      });
      expect(result.success).toBe(true);
    });

    it("should validate skill_level update", () => {
      const result = updateProfileSchema.safeParse({
        skill_level: "intermediate",
      });
      expect(result.success).toBe(true);
    });

    it("should reject bio longer than 500 chars", () => {
      const result = updateProfileSchema.safeParse({
        bio: "a".repeat(501),
      });
      expect(result.success).toBe(false);
    });
  });
});