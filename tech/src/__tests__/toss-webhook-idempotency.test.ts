import { describe, it, expect, vi, beforeEach } from "vitest";

// --- Mocks ---
// The route imports { getPrisma } from "@/lib/prisma" and calls await getPrisma()
// So we mock getPrisma to return our mock client directly (no extra promise wrapping).
const mockPrismaClient = {
  payment: {
    findUnique: vi.fn(),
    findFirst: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
  },
  subscription: {
    findFirst: vi.fn(),
    update: vi.fn(),
  },
  enrollment: {
    upsert: vi.fn(),
    updateMany: vi.fn(),
  },
};

vi.mock("@/lib/prisma", () => ({
  getPrisma: vi.fn().mockResolvedValue(mockPrismaClient),
}));

vi.mock("@/lib/payments/toss", () => ({
  verifyTossSignature: vi.fn().mockReturnValue(true),
}));

vi.mock("@/lib/utils/api", () => ({
  successResponse: (data: unknown, status = 200) =>
    new Response(JSON.stringify({ data }), { status }),
  errorResponse: (code: string, message: string, status: number) =>
    new Response(JSON.stringify({ error: { code, message } }), { status }),
}));

// Helper: build a fake NextRequest with JSON body and Toss headers
function makeRequest(body: Record<string, unknown>, headers?: Record<string, string>) {
  const rawBody = JSON.stringify(body);
  return {
    text: vi.fn().mockResolvedValue(rawBody),
    headers: {
      get: (name: string) => {
        const map: Record<string, string> = {
          "tosspayments-webhook-signature": "v1:validsig",
          "tosspayments-webhook-transmission-time": "2024-09-05T12:19:21+09:00",
          ...headers,
        };
        return map[name] ?? null;
      },
    },
  } as any;
}

// Helper: extract JSON from Response
async function getJson(response: Response) {
  return response.json();
}

describe("Toss Webhook Idempotency", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // =====================================================================
  // PAYMENT_CONFIRM idempotency
  // =====================================================================
  describe("PAYMENT_CONFIRM", () => {
    const baseData = {
      orderId: "order_abc123",
      paymentKey: "pay_key_001",
      amount: 29000,
      status: "DONE",
    };

    const baseBody = {
      eventType: "PAYMENT_CONFIRM",
      data: baseData,
    };

    it("should process a new PAYMENT_CONFIRM webhook normally", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      mockPrismaClient.payment.findUnique.mockResolvedValue({
        id: "pay-1",
        userId: "user-1",
        courseId: "course-1",
        amount: 29000,
        status: "pending",
      });
      mockPrismaClient.payment.update.mockResolvedValue({ id: "pay-1" });
      mockPrismaClient.enrollment.upsert.mockResolvedValue({ id: "enr-1" });

      const response = await POST(makeRequest(baseBody));
      const json = await getJson(response);

      expect(response.status).toBe(200);
      expect(json.data.processed).toBe(true);
      expect(json.data.idempotent).toBeUndefined();
      expect(mockPrismaClient.payment.update).toHaveBeenCalledTimes(1);
      expect(mockPrismaClient.enrollment.upsert).toHaveBeenCalledTimes(1);
    });

    it("should return idempotent response for duplicate PAYMENT_CONFIRM (already completed)", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      mockPrismaClient.payment.findUnique.mockResolvedValue({
        id: "pay-1",
        userId: "user-1",
        courseId: "course-1",
        amount: 29000,
        status: "completed",
      });

      const response = await POST(makeRequest(baseBody));
      const json = await getJson(response);

      expect(response.status).toBe(200);
      expect(json.data.processed).toBe(true);
      expect(json.data.idempotent).toBe(true);
      // No update, no enrollment side effects
      expect(mockPrismaClient.payment.update).not.toHaveBeenCalled();
      expect(mockPrismaClient.enrollment.upsert).not.toHaveBeenCalled();
    });

    it("should return idempotent response for duplicate PAYMENT_CONFIRM (already failed)", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      mockPrismaClient.payment.findUnique.mockResolvedValue({
        id: "pay-1",
        userId: "user-1",
        amount: 29000,
        status: "failed",
      });

      const response = await POST(makeRequest(baseBody));
      const json = await getJson(response);

      expect(response.status).toBe(200);
      expect(json.data.idempotent).toBe(true);
      expect(mockPrismaClient.payment.update).not.toHaveBeenCalled();
    });

    it("should process a PAYMENT_CONFIRM with status FAILED normally", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      mockPrismaClient.payment.findUnique.mockResolvedValue({
        id: "pay-1",
        userId: "user-1",
        amount: 29000,
        status: "pending",
      });
      mockPrismaClient.payment.update.mockResolvedValue({ id: "pay-1" });

      const body = {
        eventType: "PAYMENT_CONFIRM",
        data: { ...baseData, status: "FAIL" },
      };
      const response = await POST(makeRequest(body));

      expect(response.status).toBe(200);
      expect(mockPrismaClient.payment.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ status: "failed" }),
        })
      );
      // No enrollment for failed payments
      expect(mockPrismaClient.enrollment.upsert).not.toHaveBeenCalled();
    });

    it("should reject PAYMENT_CONFIRM with amount mismatch", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      mockPrismaClient.payment.findUnique.mockResolvedValue({
        id: "pay-1",
        userId: "user-1",
        amount: 50000, // different from webhook amount
        status: "pending",
      });

      const response = await POST(makeRequest(baseBody));

      expect(response.status).toBe(400);
      expect(mockPrismaClient.payment.update).not.toHaveBeenCalled();
    });
  });

  // =====================================================================
  // SUBSCRIPTION_BILLING idempotency
  // =====================================================================
  describe("SUBSCRIPTION_BILLING", () => {
    const baseData = {
      billingKey: "billing_key_001",
      amount: 29000,
      status: "DONE",
      id: "evt_sub_001", // Toss webhook event ID
    };

    const baseBody = {
      eventType: "SUBSCRIPTION_BILLING",
      data: baseData,
    };

    it("should create a new payment for a new SUBSCRIPTION_BILLING event", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      mockPrismaClient.payment.findUnique.mockResolvedValue(null); // no duplicate
      mockPrismaClient.subscription.findFirst.mockResolvedValue({
        id: "sub-1",
        userId: "user-1",
        planType: "monthly",
        tossBillingKey: "billing_key_001",
      });
      mockPrismaClient.payment.create.mockResolvedValue({ id: "pay-new" });
      mockPrismaClient.subscription.update.mockResolvedValue({ id: "sub-1" });

      const response = await POST(makeRequest(baseBody));
      const json = await getJson(response);

      expect(response.status).toBe(200);
      expect(json.data.processed).toBe(true);
      expect(json.data.idempotent).toBeUndefined();
      expect(mockPrismaClient.payment.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            tossEventId: "evt_sub_001",
            paymentType: "subscription",
            amount: 29000,
            status: "completed",
          }),
        })
      );
      expect(mockPrismaClient.subscription.update).toHaveBeenCalledTimes(1);
    });

    it("should return idempotent response for duplicate SUBSCRIPTION_BILLING event", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      // Duplicate: findUnique by tossEventId returns an existing payment
      mockPrismaClient.payment.findUnique.mockResolvedValue({
        id: "pay-dup",
        tossEventId: "evt_sub_001",
        status: "completed",
      });

      const response = await POST(makeRequest(baseBody));
      const json = await getJson(response);

      expect(response.status).toBe(200);
      expect(json.data.processed).toBe(true);
      expect(json.data.idempotent).toBe(true);
      // No new payment created, no subscription update
      expect(mockPrismaClient.payment.create).not.toHaveBeenCalled();
      expect(mockPrismaClient.subscription.update).not.toHaveBeenCalled();
    });

    it("should use derived idempotency key when Toss event ID is missing", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      const dataWithoutId = {
        billingKey: "billing_key_002",
        amount: 29000,
        status: "DONE",
        // no "id" field
      };
      const body = {
        eventType: "SUBSCRIPTION_BILLING",
        data: dataWithoutId,
      };

      mockPrismaClient.payment.findUnique.mockResolvedValue(null);
      mockPrismaClient.subscription.findFirst.mockResolvedValue({
        id: "sub-1",
        userId: "user-1",
        planType: "yearly",
        tossBillingKey: "billing_key_002",
      });
      mockPrismaClient.payment.create.mockResolvedValue({ id: "pay-new" });
      mockPrismaClient.subscription.update.mockResolvedValue({ id: "sub-1" });

      const response = await POST(makeRequest(body));

      expect(response.status).toBe(200);
      // Derived key: billingKey:amount:status
      expect(mockPrismaClient.payment.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            tossEventId: "billing_key_002:29000:DONE",
          }),
        })
      );
    });

    it("should return 404 when subscription not found for billing key", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      mockPrismaClient.payment.findUnique.mockResolvedValue(null);
      mockPrismaClient.subscription.findFirst.mockResolvedValue(null);

      const response = await POST(makeRequest(baseBody));

      expect(response.status).toBe(404);
      expect(mockPrismaClient.payment.create).not.toHaveBeenCalled();
    });

    it("should not update subscription period when billing status is FAILED", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      const body = {
        eventType: "SUBSCRIPTION_BILLING",
        data: {
          billingKey: "billing_key_001",
          amount: 29000,
          status: "FAIL",
          id: "evt_sub_fail_001",
        },
      };

      mockPrismaClient.payment.findUnique.mockResolvedValue(null);
      mockPrismaClient.subscription.findFirst.mockResolvedValue({
        id: "sub-1",
        userId: "user-1",
        planType: "monthly",
        tossBillingKey: "billing_key_001",
      });
      mockPrismaClient.payment.create.mockResolvedValue({ id: "pay-fail" });

      const response = await POST(makeRequest(body));

      expect(response.status).toBe(200);
      expect(mockPrismaClient.payment.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ status: "failed" }),
        })
      );
      // Subscription period should NOT be updated for failed billing
      expect(mockPrismaClient.subscription.update).not.toHaveBeenCalled();
    });
  });

  // =====================================================================
  // REFUND idempotency
  // =====================================================================
  describe("REFUND", () => {
    const baseData = {
      paymentKey: "pay_key_refund_001",
      status: "CANCELED",
    };

    const baseBody = {
      eventType: "REFUND",
      data: baseData,
    };

    it("should process a new REFUND webhook normally", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      mockPrismaClient.payment.findFirst.mockResolvedValue({
        id: "pay-1",
        courseId: "course-1",
        status: "completed",
      });
      mockPrismaClient.payment.update.mockResolvedValue({ id: "pay-1" });
      mockPrismaClient.enrollment.updateMany.mockResolvedValue({ count: 1 });

      const response = await POST(makeRequest(baseBody));

      expect(response.status).toBe(200);
      expect(mockPrismaClient.payment.update).toHaveBeenCalledTimes(1);
      expect(mockPrismaClient.enrollment.updateMany).toHaveBeenCalledTimes(1);
    });

    it("should return idempotent response for duplicate REFUND (already refunded)", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      mockPrismaClient.payment.findFirst.mockResolvedValue({
        id: "pay-1",
        status: "refunded",
      });

      const response = await POST(makeRequest(baseBody));
      const json = await getJson(response);

      expect(response.status).toBe(200);
      expect(json.data.idempotent).toBe(true);
      expect(mockPrismaClient.payment.update).not.toHaveBeenCalled();
      expect(mockPrismaClient.enrollment.updateMany).not.toHaveBeenCalled();
    });

    it("should not update enrollment when payment has no courseId", async () => {
      const { POST } = await import("@/app/api/webhooks/toss/route");

      mockPrismaClient.payment.findFirst.mockResolvedValue({
        id: "pay-1",
        courseId: null, // subscription payment, no course
        status: "completed",
      });
      mockPrismaClient.payment.update.mockResolvedValue({ id: "pay-1" });

      const response = await POST(makeRequest(baseBody));

      expect(response.status).toBe(200);
      expect(mockPrismaClient.payment.update).toHaveBeenCalledTimes(1);
      expect(mockPrismaClient.enrollment.updateMany).not.toHaveBeenCalled();
    });
  });

  // =====================================================================
  // Signature verification
  // =====================================================================
  describe("Signature verification", () => {
    it("should reject requests with invalid signature", async () => {
      const { verifyTossSignature } = await import("@/lib/payments/toss");
      const { POST } = await import("@/app/api/webhooks/toss/route");

      (verifyTossSignature as ReturnType<typeof vi.fn>).mockReturnValueOnce(false);

      const response = await POST(
        makeRequest(
          { eventType: "PAYMENT_CONFIRM", data: {} },
          { "tosspayments-webhook-signature": "v1:invalid" }
        )
      );

      expect(response.status).toBe(401);
    });
  });
});