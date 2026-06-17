import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 — Surftorial",
  description: "Surftorial 서핑 강좌 플랫폼의 이용약관입니다. 서비스 이용, 계정, 결제, 환불, 저작권 등의 규정을 확인하세요.",
  openGraph: {
    title: "이용약관 — Surftorial",
    description: "서핑 강좌 플랫폼의 이용약관.",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-950 text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
          <div className="flex items-center gap-2 text-xs font-semibold text-ocean-200 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-sunset-400" />
            법적 고지
          </div>
          <h1 className="font-brand font-bold text-3xl md:text-4xl tracking-tight mb-4">
            이용약관
          </h1>
          <p className="text-ocean-100 text-base md:text-lg max-w-[600px] leading-relaxed">
            Surftorial 서비스 이용에 대한 약관을 확인하세요.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-6">
        <div className="max-w-[4xl] mx-auto">
          <div className="bg-white rounded-xl border border-slate-200 p-8 md:p-12">
            <div className="text-xs text-slate-500 mb-6">
              최종 업데이트: 2026년 1월 1일
            </div>

            <div className="prose prose-slate max-w-none">
              <TOC />

              <Section
                id="section-1"
                title="제1조 목적"
                content="이 약관은 Surftorial(이하 '회사')가 제공하는 온라인 서핑 강좌 서비스의 이용조건 및 절차를 규정합니다."
              />

              <Section
                id="section-2"
                title="제2조 용어의 정의"
                content={
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>서비스:</strong> 회사가 제공하는 온라인 서핑 강좌 및 관련 서비스</li>
                    <li><strong>회원:</strong> 회사의 서비스에 가입하여 이용하는 개인</li>
                    <li><strong>강좌:</strong> 서비스를 통해 제공되는 서핑 관련 교육 콘텐츠</li>
                    <li><strong>구독:</strong> 회원이 서비스를 이용하기 위해 결제하는 유료 구독 서비스</li>
                  </ul>
                }
              />

              <Section
                id="section-3"
                title="제3조 서비스의 이용"
                content={
                  <div className="space-y-4">
                    <p>회원은 본 약관에 동의함으로써 서비스를 이용할 수 있습니다.</p>
                    <p>서비스 이용은 만 14세 이상의 개인으로 제한됩니다.</p>
                    <p>회원은 정확한 정보를 제공해야 하며, 허위 정보로 인한 문제는 회원의 책임입니다.</p>
                  </div>
                }
              />

              <Section
                id="section-4"
                title="제4조 계정 및 보안"
                content={
                  <div className="space-y-4">
                    <p>회원은 계정 정보를 안전하게 관리해야 합니다.</p>
                    <p>계정 도용 및 무단 사용에 대한 책임은 회원에게 있습니다.</p>
                    <p>계정 정보 변경이나 의심스러운 활동은 즉시 회사에 알려야 합니다.</p>
                  </div>
                }
              />

              <Section
                id="section-5"
                title="제5조 결제 및 환불"
                content={
                  <div className="space-y-4">
                    <p>구독 서비스는 매월 자동 갱신되며, 결제는 시작일에 청구됩니다.</p>
                    <p>결제 후 7일 이내에는 전액 환불이 가능합니다. 자세한 내용은 환불 정책을 참조하세요.</p>
                    <p>환불 처리는 영업일 기준 3~5일 소요됩니다.</p>
                  </div>
                }
              />

              <Section
                id="section-6"
                title="제6조 저작권 및 지식재산권"
                content={
                  <div className="space-y-4">
                    <p>서비스에 포함된 모든 콘텐츠의 저작권은 회사에 있습니다.</p>
                    <p>회원은 서비스 내에서 개인적으로만 콘텐츠를 이용할 수 있습니다.</p>
                    <p>무단 복제, 배포, 상업적 이용은 금지됩니다.</p>
                  </div>
                }
              />

              <Section
                id="section-7"
                title="제7조 면책조항"
                content={
                  <div className="space-y-4">
                    <p>회사는 천재지변, 불가항력으로 인한 서비스 중단에 대해 책임지지 않습니다.</p>
                    <p>회원의 귀책사유로 인한 서비스 이용 제한에 대해 회사는 책임지지 않습니다.</p>
                    <p>서비스의 중단이나 변경으로 인한 회원의 손해에 대해 회사는 배상하지 않습니다.</p>
                  </div>
                }
              />

              <Section
                id="section-8"
                title="제8조 약관의 변경"
                content={
                  <div className="space-y-4">
                    <p>회사는 필요시 약관을 변경할 수 있으며, 변경된 약관은 서비스에 게시함으로써 효력을 발생합니다.</p>
                    <p>회원은 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 계정을 삭제할 수 있습니다.</p>
                  </div>
                }
              />

              <Section
                id="section-9"
                title="제9조 분쟁 해결"
                content={
                  <div className="space-y-4">
                    <p>서비스 이용과 관련된 분쟁은 회사의 본점 소재지를 관할하는 법원의 전속 관할로 합니다.</p>
                    <p>분쟁 발생 시 당사자 간의 원만한 합의를 우선으로 합니다.</p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TOC() {
  const sections = [
    { id: "section-1", title: "제1조 목적" },
    { id: "section-2", title: "제2조 용어의 정의" },
    { id: "section-3", title: "제3조 서비스의 이용" },
    { id: "section-4", title: "제4조 계정 및 보안" },
    { id: "section-5", title: "제5조 결제 및 환불" },
    { id: "section-6", title: "제6조 저작권 및 지식재산권" },
    { id: "section-7", title: "제7조 면책조항" },
    { id: "section-8", title: "제8조 약관의 변경" },
    { id: "section-9", title: "제9조 분쟁 해결" },
  ];

  return (
    <nav className="mb-12 p-6 bg-ocean-50 rounded-lg border border-ocean-100">
      <h2 className="font-brand font-bold text-lg text-ocean-700 mb-4">목차</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-ocean-600 hover:text-ocean-800 hover:underline text-sm"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Section({ id, title, content }: { id: string; title: string; content: React.ReactNode }) {
  return (
    <section id={id} className="mb-8 scroll-mt-8">
      <h2 className="font-brand font-bold text-xl text-slate-900 mb-4">{title}</h2>
      <div className="text-slate-600 leading-relaxed">{content}</div>
    </section>
  );
}