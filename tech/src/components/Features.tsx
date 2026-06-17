export default function Features() {
  const features = [
    {
      icon: "🎬",
      title: "HD 영상 강좌",
      description: "서핑 전문 인스트럭터의 상세한 시연과 해설. 여러 각도에서 촬영해 동작을 정확히 이해할 수 있습니다.",
      color: "ocean"
    },
    {
      icon: "📊",
      title: "단계별 커리큘럼",
      description: "입문부터 중급까지, 레벨에 맞는 학습 경로를 제공합니다. 내 진도를 한눈에 확인하세요.",
      color: "sunset"
    },
    {
      icon: "💬",
      title: "1:1 코칭 피드백",
      description: "영상을 올리면 전문 코치가 피드백을 제공합니다. 혼자서는 잡기 어려운 실수도 바로잡을 수 있어요.",
      color: "green"
    },
    {
      icon: "📱",
      title: "모바일 최적화",
      description: "해변에서도, 출퇴근길에도 시청 가능. 오프라인 다운로드로 끊김 없는 학습.",
      color: "ocean"
    },
    {
      icon: "🏅",
      title: "수료 인증",
      description: "강좌 완주 시 수료증 발급. 서핍 스킬을 객관적으로 증명할 수 있습니다.",
      color: "sunset"
    },
    {
      icon: "👥",
      title: "커뮤니티",
      description: "같은 목표를 가진 서퍼들과 경험을 나누고, 질문하고, 함께 성장하세요.",
      color: "green"
    }
  ];

  return (
    <section className="py-20 px-6" id="features">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center gap-2 text-xs font-semibold text-ocean-700 uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          왜 Surftorial인가요?
        </div>
        <h2 className="font-brand font-bold text-2xl md:text-3xl text-slate-900 mb-4 tracking-tight">
          온라인으로, 확실히, 서핑을 배우는 법
        </h2>
        <p className="text-base text-slate-500 max-w-[600px] leading-relaxed">
          현장 중심의 서핑 레슨을 온라인으로 확장한 검증된 커리큘럼. 언제든 멈추고, 반복하고, 내 속도로.
        </p>
        <div className="grid-3 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 transition-all duration-250 hover:shadow-lg hover:border-ocean-300 hover:-translate-y-0.5"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 ${
                  feature.color === 'ocean'
                    ? 'bg-ocean-50 text-ocean-600'
                    : feature.color === 'sunset'
                    ? 'bg-orange-50 text-orange-600'
                    : 'bg-green-50 text-green-600'
                }`}
              >
                {feature.icon}
              </div>
              <h3 className="font-brand font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}