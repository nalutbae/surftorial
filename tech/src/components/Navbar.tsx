import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-white/92 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-brand font-extrabold text-xl text-ocean-700 flex items-center gap-2">
          <svg viewBox="0 0 32 32" fill="none" width="32" height="32" className="text-ocean-700">
            <path
              d="M4 22c4-6 8 2 12-4s8-2 12 4"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path d="M14 14l4-2v8" fill="currentColor" />
          </svg>
          Surftorial
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link href="/courses" className="text-sm font-medium text-slate-600 hover:text-ocean-700 transition-colors">
              강좌
            </Link>
            <Link href="/#features" className="text-sm font-medium text-slate-600 hover:text-ocean-700 transition-colors">
              특징
            </Link>
            <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-ocean-700 transition-colors">
              요금제
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="btn btn-outline"
            >
              로그인
            </Link>
            <Link
              href="/register"
              className="btn btn-primary"
            >
              무료로 시작하기
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}