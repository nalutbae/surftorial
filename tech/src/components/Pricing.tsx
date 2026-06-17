export default function Pricing() {
  const plans = [
    {
      name: "웨이브 스타터",
      price: "무료",
      period: "/영원히",
      description: "서핑 입문자를 위한 기본 플랜",
      features: [
        "입문 강좌 3개 무료",
        "커뮤니티 접근",
        "진도 추적"
      ],
      popular: false,
      cta: "무료로 시작"
    },
    {
      name: "서프 라이더",
      price: "₩29,000",
      period: "/월",
      description: "본격 서핑 학습을 위한 정기 플랜",
      features: [
        "전체 강좌 무제한 시청",
        "월 2회 코칭 피드백",
        "오프라인 다운로드",
        "수료증 발급"
      ],
      popular: true,
      cta: "구독 시작하기"
    },
    {
      name: "프로 서퍼",
      price: "₩59,000",
      period: "/월",
      description: "프라이빗 코칭 + 전체 접근",
      features: [
        "서프 라이더 전체 포함",
        "무제한 1:1 코칭 피드백",
        "영상 분석 리포트",
        "우선 새 강좌 접근"
      ],
      popular: false,
      cta: "프로 시작하기"
    }
  ];

  return (
    <section className="py-20 px-6" id="pricing">
      <div className="max-w-[1280px] mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-ocean-700 uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          요금제
        </div>
        <h2 className="font-brand font-bold text-2xl md:text-3xl text-slate-900 mb-4 tracking-tight">
          내 서핑 여정에 맞는 플랜 선택
        </h2>
        <p className="text-base text-slate-500 max-w-[600px] mx-auto leading-relaxed mb-12">
          언제든 플랜을 변경할 수 있어요. 먼저 무료로 체험해보세요.
        </p>
        <div className="grid-3 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card p-10 relative transition-all duration-250 ${
                plan.popular
                  ? "border-2 border-ocean-500 shadow-[0_0_0_16px_rgba(14,165,233,0.15)]"
                  : "border-2 border-slate-200 hover:border-ocean-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-ocean-500 text-white px-5 py-1 rounded-full text-xs font-semibold">
                  가장 인기
                </div>
              )}
              <div className="font-brand font-semibold text-lg mb-2">{plan.name}</div>
              <div className="font-brand font-extrabold text-4xl text-slate-900 mb-1">
                {plan.price}
                {plan.period !== "/영원히" && <span className="text-base font-normal text-slate-400">{plan.period}</span>}
              </div>
              <div className="text-sm text-slate-400 mb-6">{plan.description}</div>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" className="text-success flex-shrink-0">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`btn w-full ${plan.popular ? "btn-primary" : "btn-outline"}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}