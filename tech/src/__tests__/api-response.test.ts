import { describe, it, expect } from "vitest";

// Test the validation schemas which are pure functions and can be tested directly.

describe("Validation Schema Structure", () => {
  it("courseCreateSchema should require title, category and default skill_level & price", async () => {
    const { courseCreateSchema } = await import("@/lib/validations");
    const result = courseCreateSchema.safeParse({
      title: "서핑 기초",
      category: "basics",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.skill_level).toBe("beginner");
      expect(result.data.price).toBe(0);
      expect(result.data.is_published).toBe(false);
    }
  });

  it("registerSchema should require email, password, display_name", async () => {
    const { registerSchema } = await import("@/lib/validations");
    const result = registerSchema.safeParse({
      email: "test@example.com",
      password: "abcd1234",
      display_name: "홍길동",
    });
    expect(result.success).toBe(true);
  });

  it("subscribeSchema should validate plan and billing_cycle", async () => {
    const { subscribeSchema } = await import("@/lib/validations");
    const result = subscribeSchema.safeParse({
      plan: "starter",
      billing_cycle: "monthly",
    });
    expect(result.success).toBe(true);
  });

  it("subscribeSchema should reject invalid plan", async () => {
    const { subscribeSchema } = await import("@/lib/validations");
    const result = subscribeSchema.safeParse({
      plan: "enterprise",
      billing_cycle: "monthly",
    });
    expect(result.success).toBe(false);
  });

  it("oneTimePaymentSchema should validate course_id UUID", async () => {
    const { oneTimePaymentSchema } = await import("@/lib/validations");
    const result = oneTimePaymentSchema.safeParse({
      course_id: "550e8400-e29b-41d4-a716-446655440000",
    });
    expect(result.success).toBe(true);
  });

  it("oneTimePaymentSchema should reject non-UUID", async () => {
    const { oneTimePaymentSchema } = await import("@/lib/validations");
    const result = oneTimePaymentSchema.safeParse({
      course_id: "not-a-uuid",
    });
    expect(result.success).toBe(false);
  });

  it("updateProgressSchema should validate watched_seconds and last_position", async () => {
    const { updateProgressSchema } = await import("@/lib/validations");
    const result = updateProgressSchema.safeParse({
      watched_seconds: 120,
      last_position: 45,
    });
    expect(result.success).toBe(true);
  });

  it("updateProgressSchema should reject negative watched_seconds", async () => {
    const { updateProgressSchema } = await import("@/lib/validations");
    const result = updateProgressSchema.safeParse({ watched_seconds: -5 });
    expect(result.success).toBe(false);
  });

  it("updateProgressSchema should reject watched_seconds exceeding 86400 (24h)", async () => {
    const { updateProgressSchema } = await import("@/lib/validations");
    const result = updateProgressSchema.safeParse({ watched_seconds: 86401 });
    expect(result.success).toBe(false);
  });

  it("updateProgressSchema should accept watched_seconds at 86400 boundary", async () => {
    const { updateProgressSchema } = await import("@/lib/validations");
    const result = updateProgressSchema.safeParse({ watched_seconds: 86400 });
    expect(result.success).toBe(true);
  });

  it("progressUpdateSchema should validate lessonId and watchedSec", async () => {
    const { progressUpdateSchema } = await import("@/lib/validations");
    const result = progressUpdateSchema.safeParse({
      lessonId: "550e8400-e29b-41d4-a716-446655440000",
      watchedSec: 300,
    });
    expect(result.success).toBe(true);
  });

  it("progressUpdateSchema should reject watchedSec exceeding 86400 (24h)", async () => {
    const { progressUpdateSchema } = await import("@/lib/validations");
    const result = progressUpdateSchema.safeParse({
      lessonId: "550e8400-e29b-41d4-a716-446655440000",
      watchedSec: 86401,
    });
    expect(result.success).toBe(false);
  });

  it("progressUpdateSchema should accept watchedSec at 86400 boundary", async () => {
    const { progressUpdateSchema } = await import("@/lib/validations");
    const result = progressUpdateSchema.safeParse({
      lessonId: "550e8400-e29b-41d4-a716-446655440000",
      watchedSec: 86400,
    });
    expect(result.success).toBe(true);
  });

  it("courseFilterSchema should apply defaults for empty input", async () => {
    const { courseFilterSchema } = await import("@/lib/validations");
    const result = courseFilterSchema.safeParse({});
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.page).toBe(1);
      expect(result.data.per_page).toBe(20);
      expect(result.data.sort).toBe("latest");
    }
  });

  it("courseFilterSchema should coerce string params to numbers", async () => {
    const { courseFilterSchema } = await import("@/lib/validations");
    const result = courseFilterSchema.safeParse({ page: "3", per_page: "10" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.page).toBe(3);
      expect(result.data.per_page).toBe(10);
    }
  });
});