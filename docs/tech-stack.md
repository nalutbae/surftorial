# Surftorial — 기술 스택 결정 문서

**작성일**: 2025-06-17
**작성자**: CTO (kimi-k2-thinking)
**버전**: 1.0.0

---

## 1. 결정 원칙

- **1인 개발 가능성**: 혼자서 전체 스택을 운영 가능한 단순함
- **MVP 우선**: 초기에는 최소 기능으로 출시, 이후 점진적 확장
- **비용 효율**: 무료 티어/저비용으로 시작, 트래픽 증가 시 확장
- **한국 시장 대응**: 국내 결제, 한글 콘텐츠, 국내 CDN 고려
- **DX 최우선**: 빠른 개발 사이클을 위한 개발자 경험 중시

---

## 2. 프론트엔드

| 영역 | 선택 | 버전 | 근거 |
|------|------|------|------|
| **프레임워크** | Next.js (App Router) | 15.x | 프로젝트 요구사항. SSR/SSG/ISR 지원, Vercel 배포 최적화 |
| **언어** | TypeScript | 5.x | 타입 안전성, 생산성 |
| **스타일링** | Tailwind CSS | 4.x | 유틸리티 퍼스트, 빠른 프로토타이핑, 런타임 CSS 제로 |
| **컴포넌트 라이브러리** | shadcn/ui | latest | Tailwind 기반, 접근성 내장, 트리 셰이킹, 커스터마이징 용이 |
| **상태 관리** | Zustand | 5.x | 경량(1KB), 보일러플레이트 최소, React 외부에서도 사용 가능 |
| **폼 관리** | React Hook Form + Zod | 7.x / 3.x | 퍼포먼스 최적화, 스키마 기반 검증 |
| **비디오 플레이어** | Vidstack | 1.x | Web Component 기반, HLS/DASH 지원, 커스터마이징 가능 |

### 채택하지 않은 대안

| 대안 | 기각 사유 |
|------|-----------|
| React (CRA) | CRA deprecated, Next.js로 통합 |
| CSS Modules | Tailwind로 충분, 추가 런타임 불필요 |
| Redux Toolkit | 1인 개발에 과도한 보일러플레이트 |
| MUI / Ant Design | 러닝 커브 높음, 번들 사이즈 큼 |
| React Player | HLS 지원 부족, 유지보수 정체 |

---

## 3. 백엔드

| 영역 | 선택 | 버전 | 근거 |
|------|------|------|------|
| **API 런타임** | Next.js API Routes + Server Actions | 15.x | 별도 백엔드 서버 불필요, Vercel Edge 배포 |
| **API 타입 안전성** | tRPC (MVP 이후 도입) | 11.x | 클라이언트-서버 타입 공유, 자동 완성 |
| **ORM** | Prisma | 6.x | 타입 세이프, 마이그레이션 자동화, Supabase와 호환 |
| **유효성 검증** | Zod | 3.x | 프론트/백엔드 공통 스키마, Prisma와 통합 가능 |

### 채택하지 않은 대안

| 대안 | 기각 사유 |
|------|-----------|
| Express/Fastify 별도 서버 | 서버 관리 부담, Next.js API Routes로 충분 |
| Drizzle ORM | Prisma 대비 생태계/문서 부족 (2025 기준) |
| REST 전용 (tRPC 없이) | MVP에는 REST로 충분, tRPC는 타입 안전성 필요 시 도입 |

---

## 4. 데이터베이스 & 인증

| 영역 | 선택 | 근거 |
|------|------|------|
| **데이터베이스** | Supabase (PostgreSQL 16) | PostgreSQL + Auth + Storage + Realtime 통합. 무료 티어(500MB), Row Level Security 내장 |
| **인증** | Supabase Auth | 소셜 로그인(Google, Kakao), 매직 링크, 이메일/비밀번호. RLS와 자연스럽게 통합 |
| **파일 스토리지** | Supabase Storage | 강의 썸네일, 프로필 이미지, 리소스 파일. CDN 내장 |
| **캐싱** | Next.js built-in (fetch cache) + Vercel Edge Config | 정적 페이지 ISR, 동적 데이터 캐싱 |

### 채택하지 않은 대안

| 대안 | 기각 사유 |
|------|-----------|
| Neon | 순수 Postgres만 제공, Auth/Storage 별도 구성 필요 |
| PlanetScale | MySQL 기반, 무료 티어 없음, 1인 개발에 오버스펙 |
| NextAuth.js (Auth.js) | Supabase Auth가 동일 기능 제공 + DB 통합 이점 |
| MongoDB | 관계형 데이터(강의-수강-결제)에 부적합 |
| AWS RDS | 서버 관리 부담, 무료 티어 없음 |

---

## 5. 비디오 처리

| 영역 | 선택 | 근거 |
|------|------|------|
| **VOD 호스팅** | **Cloudflare Stream** (1차) | 분당 $0.001 과금, 글로벌 CDN, 인코딩/스토리지/스트리밍 포함, 한국 엣지 있음 |
| **대안 (업셀 시)** | Mux | 더 나은 분석 대시보드, 라이브 스트리밍 지원, $20/월 시작 |

### Cloudflare Stream 채택 근거
- 분당 과금으로 트래픽 없는 초기 비용 거의 제로
- HLS/DASH 자동 인코딩 (업로드만 하면 끝)
- Cloudflare 글로벌 네트워크 (서울 엣지 포함)
- 커스텀 플레이어 지원 (Vidstack 연동)
- 1인 개발에 충분한 단순한 API

---

## 6. 결제

| 영역 | 선택 | 근거 |
|------|------|------|
| **결제 게이트웨이** | **Stripe** | 한국 카드사 지원, 구독/일회성 결제, Checkout 호스팅으로 PCI 부담 최소화 |
| **국내 특화** | PortOne (추후 검토) | 네이버페이, 카카오페이 등 국내 간편결제 필요 시 |

### Stripe 채택 근거
- Next.js와의 통합 문서화 최고 수준
- Stripe Checkout(호스팅 페이지)으로 PCI DSS 부담 제로
- Webhook 기반 결제 완료 처리
- 한국 원화(KRW) 및 국내 카드사 지원 (2025년)
- 구독(멤버십) 모델 지원

---

## 7. 인프라 & 배포

| 영역 | 선택 | 근거 |
|------|------|------|
| **호스팅** | Vercel (Pro $20/mo) | Next.js 최적화, Preview Deployments, Analytics 내장 |
| **CI/CD** | GitHub Actions | 무료(퍼블릭 레포), Vercel 자동 배포 연동 |
| **도메인/DNS** | Cloudflare (무료 플랜) | Stream 통합, DDoS 방어, 한국 엣지 |
| **모니터링** | Vercel Analytics + Sentry (무료 티어) | 기본 분석 + 에러 트래킹 |
| **이메일** | Resend (무료 100통/일) | 트랜잭션 이메일(인증, 결제 확인), Next.js 연동 우수 |

### 채택하지 않은 대안

| 대안 | 기각 사유 |
|------|-----------|
| AWS (Amplify/EC2) | 서버 관리 부담, 초기 설정 복잡 |
| Netlify | Next.js App Router 지원 제한적 |
| Railway / Fly.io | 불필요한 서버 관리 |
| Cloudflare Pages | Next.js 미들웨어/ISR 지원 제한 |

---

## 8. 개발 도구

| 영역 | 선택 | 근거 |
|------|------|------|
| **패키지 매니저** | pnpm | 빠름, 디스크 효율, strict 모드 |
| **린팅/포매팅** | Biome | ESLint+Prettier 대체, Rust 기반 초고속 |
| **Git hooks** | lefthook | 빠르고 단순한 git hooks 관리 |
| **테스트** | Vitest + Playwright | 단위/통합/E2E 테스트 |
| **API 개발** | Hoppscotch (무료) | Postman 대체, 오픈소스 |

---

## 9. 확장성 로드맵 (MVP 이후)

| 단계 | 추가 기술 | 시점 |
|------|-----------|------|
| **Phase 2** | tRPC 도입 (타입 세이프 API) | API 엔드포인트 10개 이상 시 |
| **Phase 3** | Supabase Realtime (실시간 채팅) | 커뮤니티 기능 추가 시 |
| **Phase 4** | Mux (라이브 스트리밍) | 실시간 강의 기능 추가 시 |
| **Phase 5** | Redis (Upstash) | 캐싱 고도화, 레이트 리밋 |
| **Phase 6** | Microservices 분리 | 트래픽 급증 시 |

---

## 10. 전체 스택 요약

```
Surftorial Tech Stack (MVP)
┌─────────────────────────────────────────┐
│  Frontend                                │
│  Next.js 15 (App Router) + TypeScript   │
│  Tailwind CSS + shadcn/ui + Zustand     │
├─────────────────────────────────────────┤
│  Backend                                 │
│  Next.js API Routes + Server Actions    │
│  Prisma ORM + Zod Validation            │
├─────────────────────────────────────────┤
│  Database / Auth / Storage               │
│  Supabase (PostgreSQL 16)               │
│  Supabase Auth + Storage                 │
├─────────────────────────────────────────┤
│  Video                                   │
│  Cloudflare Stream (VOD)                │
│  Vidstack Player                         │
├─────────────────────────────────────────┤
│  Payment                                 │
│  Stripe (Checkout + Webhook)            │
├─────────────────────────────────────────┤
│  Infrastructure                          │
│  Vercel + Cloudflare DNS                │
│  GitHub Actions + Sentry                │
└─────────────────────────────────────────┘
```
