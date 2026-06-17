import * as crypto from "crypto";

const TOSS_CLIENT_KEY = process.env.TOSS_CLIENT_KEY!;
const TOSS_SECRET_KEY = process.env.TOSS_SECRET_KEY!;

/**
 * Constant-time string comparison to prevent timing attacks.
 * Returns true if both strings are equal length and identical.
 */
function secureCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

/**
 * Verify Toss Payments webhook signature.
 *
 * Toss sends two headers:
 *   - `tosspayments-webhook-signature`: comma-separated list of `v1:base64Signature` values
 *   - `tosspayments-webhook-transmission-time`: ISO 8601 timestamp
 *
 * Verification algorithm:
 *   1. Concatenate raw body + ":" + transmission time → message
 *   2. HMAC-SHA256(message, TOSS_SECRET_KEY) → base64-encoded signature
 *   3. Compare against each signature in the header
 *   4. At least one must match (Toss sends two signatures for key rotation)
 *
 * @param rawBody     - Raw request body string (must NOT be parsed JSON)
 * @param signatureHeader   - Value of `tosspayments-webhook-signature` header
 * @param transmissionTime  - Value of `tosspayments-webhook-transmission-time` header
 * @returns true if signature is valid, false otherwise
 */
export function verifyTossSignature(
  rawBody: string,
  signatureHeader: string,
  transmissionTime: string
): boolean {
  if (!rawBody || !signatureHeader || !transmissionTime) {
    return false;
  }

  // Construct the message: rawBody:transmissionTime
  const message = `${rawBody}:${transmissionTime}`;

  // Compute expected HMAC-SHA256 signature, base64 encoded
  const expected = crypto
    .createHmac("sha256", TOSS_SECRET_KEY)
    .update(message)
    .digest("base64");

  // Parse signature header: "v1:sig1,v1:sig2" → ["sig1", "sig2"]
  const signatures = signatureHeader
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.startsWith("v1:"))
    .map((s) => s.slice(3));

  if (signatures.length === 0) {
    return false;
  }

  // At least one signature must match (Toss sends two for key rotation)
  return signatures.some((sig) => secureCompare(sig, expected));
}

/**
 * Get Toss Payments checkout URL for one-time payment.
 */
export function getTossCheckoutUrl(orderId: string, amount: number, orderName: string, customerName: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return `${baseUrl}/api/payments/confirm?orderId=${encodeURIComponent(orderId)}&amount=${amount}`;
}

/**
 * Get Toss Payments billing auth URL for subscription.
 */
export function getTossBillingAuthUrl(customerKey: string): string {
  return `https://api.tosspayments.com/v1/billing/authorizations?customerKey=${encodeURIComponent(customerKey)}`;
}