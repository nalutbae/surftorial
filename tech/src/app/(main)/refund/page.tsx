import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "환불 정책 — Surftorial",
  description: "Surftorial 서핑 강좌의 환불 정책입니다. 환불 기준, 환불 절차, FAQ 등을 확인하세요.",
  openGraph: {
    title: "환불 정책 — Surftorial",
    description: "서핑 강좌의 환불 정책.",
  },
};

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-950 text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-ocean-200 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-sunset-400" />
            지원
          </div>
          <h1 className="font-brand font-bold text-3xl md:text-4xl tracking-tight mb-4">
            환불 정책
          </h1>
          <p className="text-ocean-100 text-base md:text-lg max-w-[600px] leading-relaxed">
            투명하고 공정한 환불 정책으로 안심하고 이용하세요.
          </p>
        </div>
      </section>

      {/* Refund Content */}
      <section className="py-16 px-6">
        <div className="max-w-[4xl] mx-auto">
          <div className="space-y-8">
            {/* Refund Rates */}
            <RefundRates />

            {/* Refund Process */}
            <RefundProcess />

            {/* FAQ Links */}
            <FAQLinks />
          </div>
        </div>
      </section>
    </main>
  );
}

function RefundRates() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="font-brand font-bold text-2xl text-slate-900 mb-6">환불 기준</h2>

      <div className="space-y-4">
        <RefundRateCard
          title="결제 후 7일 이내"
          rate="100%"
          description="전액 환불"
          highlight
        />

        <RefundRateCard
          title="결제 후 8일 ~ 14일"
          rate="50%"
          description="부분 환불"
        />

        <RefundRateCard
          title="결제 후 15일 이후"
          rate="0%"
          description="환불 불가"
        />
      </div>

      <div className="mt-6 p-4 bg-ocean-50 rounded-lg border border-ocean-100">
        <p className="text-sm text-ocean-700">
          <strong>참고:</strong> 강좌를 50% 이상 수강한 경우에는 환불이 불가합니다. 단, 강좌의 품질 문제로 인한 환불 요청은 별도 검토 후 처리됩니다.
        </p>
      </div>
    </div>
  );
}

function RefundRateCard({ title, rate, description, highlight }: { title: string; rate: string; description: string; highlight?: boolean }) {
  return (
    <div className={`p-6 rounded-lg border-2 ${highlight ? "border-ocean-500 bg-ocean-50" : "border-slate-200"}`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <div className={`font-brand font-extrabold text-2xl ${highlight ? "text-ocean-600" : "text-slate-700"}`}>
          {rate}
        </div>
      </div>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

function RefundProcess() {
  const steps = [
    {
      number: 1,
      title: "환불 요청",
      description: "고객센터 또는 1:1 문의를 통해 환불을 요청합니다.",
    },
    {
      number: 2,
      title: "검토",
      description: "환불 요청 내용을 검토하고 승인 여부를 결정합니다.",
    },
    {
      number: 3,
      title: "처리",
      description: "승인된 환불 요청을 처리하고 환불 금액을 입금합니다.",
    },
    {
      number: 4,
      title: "완료",
      description: "환불 처리가 완료되면 이메일로 알려드립니다.",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="font-brand font-bold text-2xl text-slate-900 mb-6">환불 절차</h2>

      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ocean-100 flex items-center justify-center">
              <span className="font-brand font-bold text-ocean-700">{step.number}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-slate-50 rounded-lg">
        <p className="text-sm text-slate-600">
          <strong>처리 시간:</strong> 환불 요청 후 영업일 기준 3~5일 소요됩니다. 결제 수단에 따라 실제 입금까지는 최대 10일까지 소요될 수 있습니다.
        </p>
      </div>
    </div>
  );
}

function FAQLinks() {
  const faqs = [
    {
      question: "환불은 어떻게 신청하나요?",
      answer: "1:1 문의 페이지에서 환불 요청을 제출하거나, 고객센터(02-1234-5678)로 전화하여 신청할 수 있습니다.",
    },
    {
      question: "환불은 언제까지 가능한가요?",
      answer: "결제 후 14일 이내에 환불 요청이 가능합니다. 단, 강좌를 50% 이상 수강한 경우에는 환불이 불가합니다.",
    },
    {
      question: "환불 금액은 어떻게 계산되나요?",
      answer: "결제 후 7일 이내에는 전액 환불, 8일~14일에는 50% 환불됩니다. 이미 수강한 강좌 비용은 차감되지 않습니다.",
    },
    {
      question: "환불은 어떻게 받나요?",
      answer: "원래 결제하신 방법으로 환불됩니다. 신용카드 결제의 경우 카드사 승인 취소로 처리되며, 기타 결제 수단은 계좌로 입금됩니다.",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8">
      <h2 className="font-brand font-bold text-2xl text-slate-900 mb-6">자주 묻는 질문</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group">
            <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-slate-50 transition-colors rounded-lg">
              <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-open:bg-ocean-100 group-open:text-ocean-600 transition-colors">
                <svg
                  className="w-4 h-4 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-slate-600 mb-4">더 많은 질문이 있으신가요?</p>
        <Link
          href="/faq"
          className="btn btn-primary inline-flex"
        >
          전체 FAQ 보기
        </Link>
      </div>
    </div>
  );
}