# 🏄 Surftorial — 서핑 온라인 강습 플랫폼

파도 위에서의 경험을 온라인으로. 초보자부터 중급 서퍼까지, 체계적인 서핑 강좌를 언제 어디서나.

## 기술 스택

| 영역 | 기술 |
|------|------|
| 프레임워크 | Next.js 16 (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS v4 |
| DB (운영) | Supabase PostgreSQL 16 |
| DB (개발) | PGlite (인프로세스 PostgreSQL) |
| ORM | Prisma 7 |
| 인증 | Supabase Auth (운영) / Dev 우회 (로컬) |
| 결제 | 토스페이먼츠 |
| 배포 | Vercel |

## 시작하기

### 요구사항
- Node.js 22+
- pnpm 9+

### 로컬 개발

```bash
git clone https://github.com/nalutbae/surftorial.git
cd surftorial/tech

# 의존성 설치
pnpm install

# Prisma 클라이언트 생성
pnpm exec prisma generate

# 개발 서버 실행 (PGlite 자동 초기화)
pnpm dev
```

- **개발자 로그인**: `http://localhost:3000/login` → "🛠️ 개발자 로그인" 버튼 클릭
- **관리자**: 자동으로 admin 권한 부여됨

### 시드 데이터

```bash
cd tech
pnpm exec tsx prisma/seed.ts
```

8개의 목업 서핑 강좌, 4명의 강사, 카테고리, 레슨, 리뷰 데이터가 생성됩니다.

## 프로젝트 구조

```
surftorial/
├── tech/               ← Next.js 애플리케이션
│   ├── src/
│   │   ├── app/        ← App Router 페이지 & API 라우트
│   │   ├── components/ ← UI 컴포넌트
│   │   ├── lib/        ← 유틸리티, Prisma, Auth, Validation
│   │   └── stores/     ← Zustand 상태 관리
│   └── prisma/         ← Prisma 스키마 & 마이그레이션
├── design/             ← 브랜드 가이드, 와이어프레임
├── docs/               ← 아키텍처, API 설계, 비즈니스 문서
└── history/            ← 작업 히스토리 리포트
```

## 주요 기능

- **강좌 시스템**: 카테고리/난이도별 강좌 목록, 상세 페이지, 레슨 구조
- **인증**: 이메일 회원가입/로그인, 역할 기반 접근 제어 (학생/강사/관리자)
- **관리자 대시보드**: 사용자 관리, 강좌 CRUD, 매출 분석
- **결제**: 토스페이먼츠 연동 (구독 + 단건 결제)

## 라이선스

MIT
