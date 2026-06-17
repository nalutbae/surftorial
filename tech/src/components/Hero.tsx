export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600"><path d="M0,300 C360,450 720,150 1440,300 L1440,600 L0,600Z" fill="%2338BDF8" opacity="0.08"/><path d="M0,380 C480,500 960,280 1440,380 L1440,600 L0,600Z" fill="%2338BDF8" opacity="0.05"/></svg>')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      <div className="max-w-[1280px] mx-auto px-6 relative z-1 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-20 pb-16 md:pt-20 md:pb-16">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            🏄 서핑 시즌 오픈 — 신규 회원 30% 할인
          </div>
          <h1 className="font-brand font-extrabold text-4xl md:text-5xl lg:text-[3rem] leading-[1.2] mb-4 tracking-tight">
            파도 위에서의 경험을<br />
            <span className="text-gradient">온라인으로</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-[520px]">
            초보자부터 중급 서퍼까지, 체계적인 서핑 강좌를 언제 어디서나. 전문 인스트럭터의 코칭과 단계별 커리큘럼으로 서핑 실력을 확실히 키우세요.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="btn btn-sunset btn-lg">
              수강 시작하기 →
            </button>
            <button className="btn btn-outline btn-lg text-white border-white/30 hover:bg-white/10 hover:border-white/50">
              무료로 둘러보기
            </button>
          </div>
          <div className="flex gap-10">
            <div className="text-center">
              <div className="font-brand font-extrabold text-2xl text-orange-400">
                25+
              </div>
              <div className="text-xs text-slate-400 mt-1">
                전문 강좌
              </div>
            </div>
            <div className="text-center">
              <div className="font-brand font-extrabold text-2xl text-orange-400">
                1,200+
              </div>
              <div className="text-xs text-slate-400 mt-1">
                수강생
              </div>
            </div>
            <div className="text-center">
              <div className="font-brand font-extrabold text-2xl text-orange-400">
                4.9
              </div>
              <div className="text-xs text-slate-400 mt-1">
                평균 별점
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white/8 backdrop-blur-xl border border-white/12 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-2 text-lg font-semibold mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#0EA5E9" opacity="0.3" />
                <path
                  d="M7 10l2 2 4-4"
                  stroke="#0EA5E9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              지금 인기 강좌
            </div>
            <div className="aspect-video bg-gradient-to-br from-ocean-900 to-ocean-800 rounded-xl flex items-center justify-center relative overflow-hidden">
              <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_0_0_32px_rgba(249,115,22,0.2)] transition-transform hover:scale-110">
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24" style={{ marginLeft: '4px' }}>
                  <polygon points="8,5 20,12 8,19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}