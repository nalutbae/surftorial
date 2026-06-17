import { describe, it, expect, beforeAll } from "vitest";
import * as crypto from "crypto";

// Set env vars before importing the module (since they're read at module level)
beforeAll(() => {
  process.env.TOSS_CLIENT_KEY = "test_ck_client";
  process.env.TOSS_SECRET_KEY = "test_sk_secret_key_12345";
});

// Dynamic import so env vars are set before module evaluation
let verifyTossSignature: (
  rawBody: string,
  signatureHeader: string,
  transmissionTime: string
) => boolean;

beforeAll(async () => {
  const mod = await import("@/lib/payments/toss");
  verifyTossSignature = mod.verifyTossSignature;
});

/**
 * Helper: compute a valid Toss webhook signature for testing.
 * Mirrors the production algorithm: HMAC-SHA256(rawBody:transmissionTime, secretKey) → base64
 */
function computeSignature(rawBody: string, transmissionTime: string): string {
  const message = `${rawBody}:${transmissionTime}`;
  return crypto
    .createHmac("sha256", process.env.TOSS_SECRET_KEY!)
    .update(message)
    .digest("base64");
}

describe("verifyTossSignature", () => {
  const rawBody = JSON.stringify({
    eventType: "PAYMENT_CONFIRM",
    data: { orderId: "order_123", paymentKey: "pay_abc", amount: 29000, status: "DONE" },
  });
  const transmissionTime = "2024-09-05T12:19:21+09:00";

  it("should return true for a valid signature", () => {
    const sig = computeSignature(rawBody, transmissionTime);
    const header = `v1:${sig}`;

    expect(verifyTossSignature(rawBody, header, transmissionTime)).toBe(true);
  });

  it("should return true when Toss sends two signatures (key rotation)", () => {
    const sig = computeSignature(rawBody, transmissionTime);
    // Toss sends two signatures during key rotation; at least one must match
    const header = `v1:${sig},v1:invalidBase64Signature==`;

    expect(verifyTossSignature(rawBody, header, transmissionTime)).toBe(true);
  });

  it("should return false for an invalid signature", () => {
    const header = "v1:d3JvbmdzaWduYXR1cmV2YWx1ZQ==";

    expect(verifyTossSignature(rawBody, header, transmissionTime)).toBe(false);
  });

  it("should return false for a signature computed with the wrong key", () => {
    const wrongSig = crypto
      .createHmac("sha256", "wrong_secret_key")
      .update(`${rawBody}:${transmissionTime}`)
      .digest("base64");
    const header = `v1:${wrongSig}`;

    expect(verifyTossSignature(rawBody, header, transmissionTime)).toBe(false);
  });

  it("should return false for a signature with wrong transmission time", () => {
    const sig = computeSignature(rawBody, transmissionTime);
    const header = `v1:${sig}`;
    const wrongTime = "2024-01-01T00:00:00+09:00";

    expect(verifyTossSignature(rawBody, header, wrongTime)).toBe(false);
  });

  it("should return false for tampered body", () => {
    const sig = computeSignature(rawBody, transmissionTime);
    const header = `v1:${sig}`;
    const tamperedBody = rawBody.replace("29000", "99999");

    expect(verifyTossSignature(tamperedBody, header, transmissionTime)).toBe(false);
  });

  it("should return false for empty signature header", () => {
    expect(verifyTossSignature(rawBody, "", transmissionTime)).toBe(false);
  });

  it("should return false for empty transmission time", () => {
    const sig = computeSignature(rawBody, transmissionTime);
    expect(verifyTossSignature(rawBody, `v1:${sig}`, "")).toBe(false);
  });

  it("should return false for empty raw body", () => {
    const sig = computeSignature(rawBody, transmissionTime);
    expect(verifyTossSignature("", `v1:${sig}`, transmissionTime)).toBe(false);
  });

  it("should return false when no v1 prefix in signature", () => {
    const sig = computeSignature(rawBody, transmissionTime);
    const header = sig; // no v1: prefix

    expect(verifyTossSignature(rawBody, header, transmissionTime)).toBe(false);
  });

  it("should return false for all invalid signatures in multi-sig header", () => {
    const header = "v1:invalid1==,v1:invalid2==";

    expect(verifyTossSignature(rawBody, header, transmissionTime)).toBe(false);
  });
});