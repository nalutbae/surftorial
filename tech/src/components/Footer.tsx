import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="font-brand font-extrabold text-xl text-white mb-3">
              🏄 Surftorial
            </div>
            <p className="text-sm leading-relaxed mb-4">
              파도 위에서의 경험을 온라인으로. Surftorial은 체계적인 서핑 강좌를 언제 어디서나 제공합니다.
            </p>
          </div>
          <div>
            <div className="font-semibold text-white mb-4 text-sm">서비스</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="hover:text-ocean-400 transition-colors">
                  강좌 목록
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-ocean-400 transition-colors">
                  요금제
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="hover:text-ocean-400 transition-colors">
                  코치진 소개
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-ocean-400 transition-colors">
                  커뮤니티
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-4 text-sm">지원</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-ocean-400 transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ocean-400 transition-colors">
                  1:1 문의
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-ocean-400 transition-colors">
                  환불 정책
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ocean-400 transition-colors">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-4 text-sm">소셜</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://instagram.com/surftorial" className="hover:text-ocean-400 transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com/surftorial" className="hover:text-ocean-400 transition-colors">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-ocean-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="https://open.kakao.com/o/surftorial" className="hover:text-ocean-400 transition-colors">
                  카카오톡
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <span>© 2026 Surftorial. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-ocean-400 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-ocean-400 transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}