import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자주 묻는 질문 — Surftorial",
  description: "Surftorial 서핑 강좌에 대한 자주 묻는 질문들을 확인하세요. 강좌, 결제, 이용, 기술 등 카테고리별로 정리되어 있습니다.",
  openGraph: {
    title: "자주 묻는 질문 — Surftorial",
    description: "서핑 강좌에 대한 자주 묻는 질문들.",
  },
};

export default function FAQPage() {
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
            자주 묻는 질문
          </h1>
          <p className="text-ocean-100 text-base md:text-lg max-w-[600px] leading-relaxed">
            강좌, 결제, 이용, 기술 등 자주 묻는 질문을 빠르게 찾아보세요.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <FAQContent />
        </div>
      </section>
    </main>
  );
}

function FAQContent() {
  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <input
          type="text"
          placeholder="질문 검색하기..."
          className="w-full px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-ocean-500 focus:outline-none text-base"
        />
      </div>

      {/* FAQ Categories */}
      <div className="space-y-12">
        {/* 강좌 관련 */}
        <FAQCategory title="강좌" questions={[
          { q: "강좌는 어떻게 수강하나요?", a: "회원가입 후 원하는 강좌를 선택하여 결제하시면 즉시 수강할 수 있습니다. 모든 강좌는 온라인으로 제공되며, 언제 어디서나 시청 가능합니다." },
          { q: "강좌 영상은 언제까지 볼 수 있나요?", a: "구독 기간 동안 무제한으로 시청할 수 있습니다. 구독이 만료된 후에는 다시 결제해야 합니다. 일부 강좌는 오프라인 다운로드도 지원합니다." },
          { q: "수료증은 어떻게 받나요?", a: "강좌를 모두 완료하고 최종 평가를 통과하면 수료증이 발급됩니다. 수료증은 내 계정에서 다운로드할 수 있습니다." },
        ]} />

        {/* 결제 관련 */}
        <FAQCategory title="결제" questions={[
          { q: "결제 방법은 어떻게 되나요?", a: "신용카드, 카카오페이, 네이버페이 등 다양한 결제 수단을 지원합니다. 안전한 결제 시스템을 통해 편리하게 이용하실 수 있습니다." },
          { q: "구독은 언제든 취소할 수 있나요?", a: "네, 언제든 구독을 취소할 수 있습니다. 현재 결제 기간이 끝날 때까지 서비스를 계속 이용할 수 있으며, 이후 자동 갱신되지 않습니다." },
          { q: "환불은 어떻게 하나요?", a: "결제 후 7일 이내에는 전액 환불이 가능합니다. 자세한 환불 정책은 환불 정책 페이지를 확인해주세요." },
        ]} />

        {/* 기술 관련 */}
        <FAQCategory title="기술" questions={[
          { q: "서핑 입문자도 강좌를 수강할 수 있나요?", a: "네, 물론입니다. 입문자를 위한 기초 강좌부터 상급자를 위한 고급 강좌까지 다양하게 제공됩니다. 자신의 수준에 맞는 강좌를 선택하세요." },
          { q: "서핑 장비는 어떻게 준비하나요?", a: "강좌에서 서핑 장비 선택과 사용법도 함께 다룹니다. 초보자에게 적합한 장비 추천도 제공됩니다." },
          { q: "부상 방지 방법도 알려주나요?", a: "네, 안전한 서핑을 위한 워밍업, 스트레칭, 파도 읽기 등 부상 방지에 대한 내용도 포함되어 있습니다." },
        ]} />

        {/* 이용 관련 */}
        <FAQCategory title="이용" questions={[
          { q: "모바일에서도 볼 수 있나요?", a: "네, 모바일 앱과 웹에서 모두 이용 가능합니다. 언제 어디서나 편리하게 강좌를 시청할 수 있습니다." },
          { q: "자막은 제공되나요?", a: "대부분의 강좌에 한글 자막이 제공됩니다. 일부 고급 강좌에는 영어 자막도 함께 제공됩니다." },
          { q: "다운로드는 가능한가요?", a: "서프 라이더 이상 구독 회원은 강좌를 오프라인으로 다운로드하여 인터넷 연결 없이 시청할 수 있습니다." },
        ]} />
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <p className="text-slate-600 mb-6">찾으시는 답변이 없으신가요?</p>
        <a
          href="/contact"
          className="btn btn-primary inline-flex"
        >
          1:1 문의하기
        </a>
      </div>
    </div>
  );
}

function FAQCategory({ title, questions }: { title: string; questions: Array<{ q: string; a: string }> }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 bg-ocean-50 border-b border-ocean-100">
        <h3 className="font-brand font-bold text-lg text-ocean-700">{title}</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {questions.map((item, index) => (
          <FAQItem key={index} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group">
      <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between hover:bg-slate-50 transition-colors">
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
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
      <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}