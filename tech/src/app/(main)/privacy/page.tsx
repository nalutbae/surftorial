import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 — Surftorial",
  description: "Surftorial 서핑 강좌 플랫폼의 개인정보처리방침입니다. 수집 항목, 이용 목적, 보관 기간, 제3자 제공, 권리 안내 등을 확인하세요.",
  openGraph: {
    title: "개인정보처리방침 — Surftorial",
    description: "서핑 강좌 플랫폼의 개인정보처리방침.",
  },
};

export default function PrivacyPage() {
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
            개인정보처리방침
          </h1>
          <p className="text-ocean-100 text-base md:text-lg max-w-[600px] leading-relaxed">
            Surftorial이 개인정보를 어떻게 수집하고 활용하는지 안내합니다.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
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
                title="제1조 개인정보의 처리 목적"
                content={
                  <div className="space-y-4">
                    <p>Surftorial(이하 '회사')는 다음의 목적을 위해 개인정보를 처리합니다.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>회원 가입 및 계정 관리</li>
                      <li>서비스 제공 및 이용자 관리</li>
                      <li>결제 및 환불 처리</li>
                      <li>고객 문의 및 응대</li>
                      <li>서비스 개선 및 신규 서비스 개발</li>
                      <li>법적 의무 이행</li>
                    </ul>
                  </div>
                }
              />

              <Section
                id="section-2"
                title="제2조 수집하는 개인정보의 항목"
                content={
                  <div className="space-y-4">
                    <p>회사는 다음의 개인정보 항목을 수집합니다.</p>

                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-3">필수항목</h4>
                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>이름, 이메일, 비밀번호 (회원가입 시)</li>
                        <li>결제 정보 (결제 시)</li>
                        <li>연락처 (문의 시)</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-3">선택항목</h4>
                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>생년월일, 성별 (추가 정보 입력 시)</li>
                        <li>서핑 경력, 관심 분야 (프로필 설정 시)</li>
                        <li>마케팅 정보 수신 동의 (선택 동의 시)</li>
                      </ul>
                    </div>
                  </div>
                }
              />

              <Section
                id="section-3"
                title="제3조 개인정보의 처리 및 보유 기간"
                content={
                  <div className="space-y-4">
                    <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>

                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-3">보유 기간</h4>
                      <ul className="list-disc pl-6 space-y-2 text-sm">
                        <li>회원 정보: 회원 탈퇴 시까지</li>
                        <li>결제 정보: 전자상거래법에 따라 5년</li>
                        <li>계약/청약 정보: 전자상거래법에 따라 5년</li>
                        <li>문의 내역: 3년</li>
                      </ul>
                    </div>
                  </div>
                }
              />

              <Section
                id="section-4"
                title="제4조 개인정보의 제3자 제공"
                content={
                  <div className="space-y-4">
                    <p>회사는 원칙적으로 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
                    <p className="text-sm text-slate-500 italic">
                      ※ 회사는 개인정보를 제3자에게 제공하지 않습니다.
                    </p>
                  </div>
                }
              />

              <Section
                id="section-5"
                title="제5조 정보주체의 권리"
                content={
                  <div className="space-y-4">
                    <p>정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>개인정보 열람요구</li>
                      <li>오류 등이 있을 경우 정정 요구</li>
                      <li>삭제요구</li>
                      <li>처리정지 요구</li>
                      <li>동의 철회 요구</li>
                    </ul>
                    <p className="text-sm text-slate-500">
                      제1항 내지 제5항에 따른 권리 행사는 회사의 개인정보 보호책임자에게 서면, 전자우편 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치합니다.
                    </p>
                  </div>
                }
              />

              <Section
                id="section-6"
                title="제6조 개인정보의 파기"
                content={
                  <div className="space-y-4">
                    <p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
                    <p>정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보(또는 개인정보의 처리기록, 관리기록 등)를 별도의 데이터베이스(DB) 또는 종이문서로 구분하여 보관합니다.</p>
                  </div>
                }
              />

              <Section
                id="section-7"
                title="제7조 개인정보의 안전성 확보 조치"
                content={
                  <div className="space-y-4">
                    <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>기술적 조치:</strong> 개인정보의 암호화, 해킹 등에 대비한 기술적 보안 조치</li>
                      <li><strong>물리적 조치:</strong> 서버실 물리적 접근 제한</li>
                      <li><strong>관리적 조치:</strong> 정기적인 보안 교육, 개인정보 처리 직원의 최소화</li>
                    </ul>
                  </div>
                }
              />

              <Section
                id="section-8"
                title="제8조 개인정보 보호책임자"
                content={
                  <div className="space-y-4">
                    <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>

                    <div className="bg-ocean-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-sm">
                        <li><strong>성명:</strong> 박지훈</li>
                        <li><strong>직책:</strong> CTO</li>
                        <li><strong>연락처:</strong> support@surftorial.com</li>
                      </ul>
                    </div>
                  </div>
                }
              />

              <Section
                id="section-9"
                title="제9조 권익침해 구제방법"
                content={
                  <div className="space-y-4">
                    <p>정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 개인정보보호위원회 등 규정에 따라 구제신청을 할 수 있습니다.</p>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>개인정보분쟁조정위원회: (국번없이) 118</li>
                      <li>개인정보보호위원회: (국번없이) 118</li>
                      <li>대검찰청 사이버수사과: (02) 3480-2000</li>
                      <li>경찰청 사이버안전국: (02) 156-0111</li>
                    </ul>
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
    { id: "section-1", title: "제1조 개인정보의 처리 목적" },
    { id: "section-2", title: "제2조 수집하는 개인정보의 항목" },
    { id: "section-3", title: "제3조 개인정보의 처리 및 보유 기간" },
    { id: "section-4", title: "제4조 개인정보의 제3자 제공" },
    { id: "section-5", title: "제5조 정보주체의 권리" },
    { id: "section-6", title: "제6조 개인정보의 파기" },
    { id: "section-7", title: "제7조 개인정보의 안전성 확보 조치" },
    { id: "section-8", title: "제8조 개인정보 보호책임자" },
    { id: "section-9", title: "제9조 권익침해 구제방법" },
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