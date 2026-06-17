import { NextRequest } from "next/server";
import { getPrisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/utils/api";
import { verifyTossSignature } from "@/lib/payments/toss";

// POST /api/webhooks/toss — Toss Payments webhook handler
// Handles: payment confirmation, subscription billing, refund
// Verifies webhook signature using Toss-Signature header
// Implements idempotency: duplicate webhook events return 200 OK
//   without side effects (no duplicate payments, enrollments, or updates).
export async function POST(request: NextRequest) {
  try {
    // --- Signature verification ---
    const signatureHeader =
      request.headers.get("tosspayments-webhook-signature") ?? "";
    const transmissionTime =
      request.headers.get("tosspayments-webhook-transmission-time") ?? "";

    // We need the raw body for HMAC verification, not parsed JSON
    const rawBody = await request.text();

    if (!verifyTossSignature(rawBody, signatureHeader, transmissionTime)) {
      console.warn("Toss webhook signature verification failed", {
        signatureHeader: signatureHeader ? "[present]" : "[missing]",
        transmissionTime: transmissionTime || "[missing]",
      });
      return errorResponse(
        "UNAUTHORIZED",
        "웹훅 서명 검증에 실패했습니다.",
        401
      );
    }

    // Parse the verified body
    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return errorResponse("INVALID_BODY", "잘못된 JSON 형식입니다.", 400);
    }

    const prisma = await getPrisma();

    const { eventType, data } = body as {
      eventType: string;
      data: Record<string, unknown>;
    };

    switch (eventType) {
      case "PAYMENT_CONFIRM": {
        const { orderId, paymentKey, amount, status } = data as {
          orderId: string;
          paymentKey: string;
          amount: number;
          status: string;
        };

        const payment = await prisma.payment.findUnique({
          where: { tossOrderId: orderId },
        });

        if (!payment) {
          console.error(`Payment not found for order: ${orderId}`);
          return errorResponse("NOT_FOUND", "결제 정보를 찾을 수 없습니다.", 404);
        }

        // Idempotency: if already processed to a terminal state, skip
        if (payment.status === "completed" || payment.status === "failed") {
          console.info(`Payment ${orderId} already ${payment.status}, skipping duplicate webhook`);
          return successResponse({ processed: true, idempotent: true });
        }

        if (payment.amount !== amount) {
          console.error(`Amount mismatch: expected ${payment.amount}, got ${amount}`);
          return errorResponse("AMOUNT_MISMATCH", "결제 금액이 일치하지 않습니다.", 400);
        }

        await prisma.payment.update({
          where: { id: payment.id },
          data: {
            status: status === "DONE" ? "completed" : "failed",
            tossPaymentKey: paymentKey,
            paidAt: status === "DONE" ? new Date() : undefined,
          },
        });

        // Create enrollment for course purchase
        if (payment.courseId && status === "DONE") {
          await prisma.enrollment.upsert({
            where: {
              userId_courseId: {
                userId: payment.userId,
                courseId: payment.courseId,
              },
            },
            create: {
              userId: payment.userId,
              courseId: payment.courseId,
              source: "purchase",
              paymentId: payment.id,
              status: "active",
            },
            update: {
              status: "active",
              paymentId: payment.id,
            },
          });
        }

        break;
      }

      case "SUBSCRIPTION_BILLING": {
        const { billingKey, amount, status, id: eventId } = data as {
          billingKey: string;
          amount: number;
          status: string;
          id?: string;
        };

        // Idempotency key: Toss provides an event ID in the webhook payload.
        // If not present, derive one from the billing key + amount + status
        // to prevent duplicate payment creation for the same billing event.
        const idempotencyKey = eventId || `${billingKey}:${amount}:${status}`;

        // Check for duplicate webhook using tossEventId unique constraint
        const existingPayment = await prisma.payment.findUnique({
          where: { tossEventId: idempotencyKey },
        });

        if (existingPayment) {
          console.info(`Subscription billing event ${idempotencyKey} already processed, skipping duplicate webhook`);
          return successResponse({ processed: true, idempotent: true });
        }

        const subscription = await prisma.subscription.findFirst({
          where: { tossBillingKey: billingKey },
        });

        if (!subscription) {
          console.error(`Subscription not found for billing key: ${billingKey}`);
          return errorResponse("NOT_FOUND", "구독 정보를 찾을 수 없습니다.", 404);
        }

        await prisma.payment.create({
          data: {
            userId: subscription.userId,
            subscriptionId: subscription.id,
            paymentType: "subscription",
            amount,
            currency: "KRW",
            status: status === "DONE" ? "completed" : "failed",
            tossEventId: idempotencyKey,
            paidAt: status === "DONE" ? new Date() : undefined,
          },
        });

        if (status === "DONE") {
          const newStart = new Date();
          const newEnd = new Date();
          if (subscription.planType === "monthly") {
            newEnd.setMonth(newEnd.getMonth() + 1);
          } else {
            newEnd.setFullYear(newEnd.getFullYear() + 1);
          }

          await prisma.subscription.update({
            where: { id: subscription.id },
            data: {
              currentPeriodStart: newStart,
              currentPeriodEnd: newEnd,
            },
          });
        }

        break;
      }

      case "REFUND": {
        const { paymentKey, status, id: eventId } = data as {
          paymentKey: string;
          status: string;
          id?: string;
        };

        // Idempotency for refunds: check if already refunded
        const payment = await prisma.payment.findFirst({
          where: { tossPaymentKey: paymentKey },
        });
        if (!payment) {
          console.error(`Payment not found for key: ${paymentKey}`);
          return errorResponse("NOT_FOUND", "결제 정보를 찾을 수 없습니다.", 404);
        }

        if (payment.status === "refunded") {
          console.info(`Payment ${paymentKey} already refunded, skipping duplicate webhook`);
          return successResponse({ processed: true, idempotent: true });
        }

        if (status === "CANCELED") {
          await prisma.payment.update({
            where: { id: payment.id },
            data: { status: "refunded", refundedAt: new Date() },
          });

          if (payment.courseId) {
            await prisma.enrollment.updateMany({
              where: { paymentId: payment.id },
              data: { status: "refunded" },
            });
          }
        }

        break;
      }

      default:
        console.warn(`Unknown Toss webhook event: ${eventType}`);
    }

    return successResponse({ processed: true });
  } catch (error) {
    console.error("Toss webhook error:", error);
    return errorResponse("INTERNAL_ERROR", "웹훅 처리 중 오류가 발생했습니다.", 500);
  }
}