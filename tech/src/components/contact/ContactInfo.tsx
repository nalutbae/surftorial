import Link from "next/link";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="font-brand font-bold text-lg text-slate-900 mb-4">연락처</h3>

        <div className="space-y-4">
          <ContactItem
            icon="📧"
            label="이메일"
            value="support@surftorial.com"
            href="mailto:support@surftorial.com"
          />

          <ContactItem
            icon="💬"
            label="카카오톡"
            value="오픈채팅"
            href="https://open.kakao.com/o/surftorial"
          />

          <ContactItem
            icon="📱"
            label="전화"
            value="02-1234-5678"
            href="tel:0212345678"
          />
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            평일 09:00 - 18:00 (점심시간 12:00 - 13:00)
          </p>
        </div>
      </div>

      {/* FAQ Link */}
      <div className="bg-gradient-to-br from-ocean-50 to-ocean-100 rounded-xl border border-ocean-200 p-6">
        <h3 className="font-brand font-bold text-lg text-ocean-800 mb-3">먼저 확인해보세요</h3>
        <p className="text-sm text-ocean-700 mb-4">
          자주 묻는 질문에서 빠르게 답변을 찾아보세요.
        </p>
        <Link
          href="/faq"
          className="btn btn-primary w-full"
        >
          FAQ 보기
        </Link>
      </div>

      {/* Response Time */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="font-brand font-bold text-lg text-slate-900 mb-4">응답 시간</h3>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
            <div>
              <div className="font-semibold text-slate-900 text-sm">일반 문의</div>
              <div className="text-xs text-slate-600">영업일 기준 24시간 이내</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0" />
            <div>
              <div className="font-semibold text-slate-900 text-sm">결제/환불</div>
              <div className="text-xs text-slate-600">영업일 기준 12시간 이내</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-ocean-500 mt-2 flex-shrink-0" />
            <div>
              <div className="font-semibold text-slate-900 text-sm">기술 지원</div>
              <div className="text-xs text-slate-600">영업일 기준 48시간 이내</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const content = (
    <>
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="font-semibold text-slate-900 text-sm">{value}</div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg">
      {content}
    </div>
  );
}