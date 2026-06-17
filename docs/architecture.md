# Surftorial — 시스템 아키텍처 설계

**작성일**: 2025-06-17
**버전**: 2.0.0
**상태**: Accepted

---

## 아키텍처 다이어그램

```
┌─────────────────────────────────────────────────────────────────────┐
│                          Client (Browser)                          │
│               Next.js 15 App Router + Tailwind CSS                │
│            shadcn/ui · Zustand · React Hook Form · Zod            │
└──────────────────────────────┬──────────────────────────────────────┘
                               │ HTTPS
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       Vercel Edge Network                          │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────────┐   │
│  │  SSG/ISR    │  │  SSR Pages   │  │  API Routes             │   │
│  │  (랜딩,     │  │  (대시보드,  │  │  /api/*                  │   │
│  │   소개)    │  │   강의 시청) │  │  Server Actions          │   │
│  └──────┬──────┘  └──────┬───────┘  └──────────┬──────────────┘   │
└─────────┼────────────────┼─────────────────────┼──────────────────┘
          │                │                     │
          ▼                ▼                     ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     External Services                               │
│                                                                     │
│  ┌────────────────┐  ┌─────────────────┐  ┌────────────────────┐   │
│  │  Supabase      │  │  Cloudflare     │  │  토스페이먼츠       │   │
│  │  ───────────  │  │  Stream          │  │  ──────────────    │   │
│  │  Auth (JWT)   │  │  ──────────     │  │  빌링키 정기결제   │   │
│  │  PostgreSQL   │  │  HLS 인코딩     │  │  가상계좌          │   │
│  │  Storage      │  │  Signed URL     │  │  에스크로           │   │
│  │  RLS          │  │  CDN 스트리밍   │  │  웹훅               │   │
│  └────────────────┘  └─────────────────┘  └────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

### 핵심 설계 원칙

| 원칙 | 설명 |
|------|------|
| **서버리스 우선** | 서버 관리 부담 제로, BaaS + Edge로 구성 |
| **BaaS 활용** | Supabase로 Auth + DB + Storage 통합 |
| **Edge 배포** | Vercel 글로벌 엣지에서 SSR/ISR |
| **타입 안전성** | TypeScript + Zod로 end-to-end 타입 보장 |
| **점진적 확장** | MVP → tRPC → Realtime → 도커 이관 순차 도입 |

---

## ADR-001: 프론트엔드 — Next.js 15 (App Router)

| 항목 | 내용 |
|------|------|
| **상태** | Accepted |
| **결정** | Next.js 15 + TypeScript + Tailwind CSS |
| **컨텍스트** | 서핑 강좌 플랫폼으로 SEO가 핵심 유입 경로다. SSR/SSG가 필요하고, 한국어 콘텐츠의 검색 엔진 최적화가 중요하다. 1인 개발이므로 생태계 규모와 문서 풍부함이 우선이다. |
| **근거** | SSR/SSG/ISR 지원으로 SEO 최적화. React Server Components로 초기 로드 빠름. App Router로 레이아웃 중첩·로딩·에러 처리 간편. 한국 커뮤니티·생태계 열세지만 글로벌 생태계 압도적. |
| **대안** | Remix (SSR 강점이나 생태계 작음), SvelteKit (가볍지만 한글 자료 부족, 채용 시 단점) |
| **결과** | Vercel과의 원활한 배포 파이프라인. App Router 학습 곡선 존재하지만 장기 이점 큼. |

---

## ADR-002: 백엔드 — Next.js API Routes + Server Actions

| 항목 | 내용 |
|------|------|
| **상태** | Accepted |
| **결정** | 별도 백엔드 서버 없이 Next.js 내장 API Routes + Server Actions 사용 |
| **컨텍스트** | MVP 단계에서 인프라 복잡도를 최소화해야 한다. 프론트엔드와 백엔드를 동일 레포에서 관리하면 배포·인증·타입 공유가 단순해진다. |
| **근거** | 별도 서버 인프라 관리 부담 제거. Server Actions로 폼·뮤테이션 처리 간소화. 추후 필요 시 API Routes를 별도 Express/Fastify로 추출 가능. |
| **대안** | NestJS (구조화되었으나 1인 개발에 오버엔지니어링), Express 별도 서버 (인프라 이중화, 인증 분리 복잡) |
| **결과** | 단일 레포·단일 배포로 개발 속도 극대화. 트래픽 증가 시 Phase 6에서 마이크로서비스 분리 가능. |

---

## ADR-003: 데이터베이스 — Supabase (PostgreSQL)

| 항목 | 내용 |
|------|------|
| **상태** | Accepted |
| **결정** | Supabase PostgreSQL |
| **컨텍스트** | 인증, 데이터베이스, 파일 스토리지, 실시간 기능을 모두 갖춘 BaaS가 필요하다. Row Level Security로 권한 관리를 간소화하고 싶다. |
| **근거** | Auth + DB + Storage + Realtime 통합 제공. RLS로 권한 관리 간소화. 무료 티어(500MB DB, 1GB Storage, 50k MAU)로 MVP 충분. PostgreSQL이라 복잡한 쿼리·마이그레이션 가능. |
| **대안** | PlanetScale (MySQL 기반, 무료 티어 없음, Auth/Storage 미포함), Neon (순수 Postgres만 제공, Auth/Storage 별도 구성 필요) |
| **결과** | 인증·저장소·실시간을 별도 서비스 없이 통합 운용. Phase 3에서 Realtime 기능 자연스럽게 활성화. |

---

## ADR-004: 인증 — Supabase Auth

| 항목 | 내용 |
|------|------|
| **상태** | Accepted |
| **결정** | Supabase Auth (이메일 + 소셜 로그인) |
| **컨텍스트** | 한국 사용자 대상 서비스이므로 카카오·구글 소셜 로그인이 필수다. SSR 환경에서 세션 관리가 간단해야 한다. |
| **근거** | Supabase와 완전 통합된 cookie-based SSR 인증. `@supabase/ssr` 패키지로 Next.js middleware 연동 간편. RLS와 자연스럽게 연계되어 인가 처리 단순화. |
| **대안** | NextAuth.js (Auth.js) — Supabase와 별도 통합 필요, 설정 복잡도 증가, 세션 관리 이중화 |
| **결과** | 인증·인가를 Supabase 하나로 통합. RLS 정책만으로 API 권한 제어 가능. |

### 인증 흐름

```
1. 사용자 → Supabase Auth UI (Google/Kakao/Email)
2. Supabase → JWT 반환
3. Next.js Middleware → JWT 검증 → 보호된 라우트 접근 허용
4. API Routes / Server Actions → RLS 정책으로 데이터 접근 제어
```

---

## ADR-005: 결제 — 토스페이먼츠

| 항목 | 내용 |
|------|------|
| **상태** | Accepted |
| **결정** | 토스페이먼츠 (빌링키 방식 정기결제) |
| **컨텍스트** | 한국 PG 중 가장 개발자 친화적 문서를 제공해야 한다. 구독 결제를 지원하고, 정산이 5일 이내로 빨라야 한다. 가상계좌·에스크로 등 국내 특화 기능이 필요하다. |
| **근거** | 국내 PG 중 가장 개발자 친화적 문서. Next.js SDK 공식 지원. 구독/정기결제(빌링키) 기능 우수. 정산 5일 이내. 신용카드 3.4%, 가상계좌 건당 400원. 에스크로·가상계좌 지원으로 신뢰도 확보. |
| **대안** | 포트원 (미들웨어 계층으로 복잡도 증가, 소규모 MVP에 오버스펙), Stripe 한국 (국내 간편결제 미지원, 원화 결제 제한적) |
| **결과** | 한국 결제 생태계 완전 대응. 빌링키 기반 구독 결제로 간편 정기 결제 구현. |

### 결제 흐름

```
1. 사용자 → "구독하기" 클릭
2. Frontend → 토스페이먼츠 위젯 렌더 (결제 수단 선택)
3. 토스페이먼츠 → 결제 승인 → Webhook 전송
4. Server Action → 결제 검증 → Supabase enrollment 레코드 생성
5. 빌링키 저장 → 월 자동 결제 스케줄 등록
```

---

## ADR-006: 비디오 스트리밍 — Cloudflare Stream

| 항목 | 내용 |
|------|------|
| **상태** | Accepted |
| **결정** | Cloudflare Stream |
| **컨텍스트** | 강의 영상의 인코딩·저장·스트리밍을 하나의 서비스로 처리해야 한다. 무단 공유 방지와 CDN 성능이 중요하다. |
| **근거** | $5/1000분 저장 + $1/1000분 전송의 심플한 종량제. 자동 HLS 인코딩·Adaptive Bitrate·글로벌 CDN 내장. Signed URL로 강의 영상 무단 공유 방지. Cloudflare Worker로 커스텀 인증 로직 구현 가능. |
| **대안** | Vimeo (장기 비용 높음, 커스터마이징 제한적), 자체 호스팅 (인코딩 파이프라인 관리 부담) |
| **결과** | 인코딩·CDN·저장을 하나로 통합. Signed URL로 DRM 없이도 접근 제어 가능. |

### 비디오 흐름

```
1. 관리자 → Cloudflare Stream API로 비디오 업로드
2. Cloudflare → 인코딩 완료 → Stream ID + HLS URL 반환
3. DB 저장: lesson.stream_id, lesson.hls_url
4. 사용자 시청: Vidstack Player → Signed URL 요청 → Cloudflare CDN → 스트리밍
```

---

## ADR-007: 호스팅 — Vercel (→ 추후 도커 이관)

| 항목 | 내용 |
|------|------|
| **상태** | Accepted |
| **결정** | Vercel (무료 티어 시작) |
| **컨텍스트** | Next.js 생태계와 가장 긴밀하게 통합된 배포 플랫폼이 필요하다. Git 푸시로 자동 배포되고, 서버 관리 없이 운영할 수 있어야 한다. |
| **근거** | Next.js 네이티브 지원, Git 푸시로 자동 배포, 무료 티어로 MVP 시작 가능. Edge Functions로 빠른 응답. 추후 Docker 이미지로 온프레미스/클라우드 이전 용이. |
| **대안** | Cloudflare Pages (Next.js App Router 지원 제한적), Netlify (App Router 미들웨어 제한) |
| **결과** | 개발 초기에는 Vercel 무료 티어로 빠른 이터레이션. 트래픽 증가 시 Docker 컨테이너로 이관 준비. |

### 배포 파이프라인

```
Git Push (main) → GitHub Actions
  ├─ Biome lint + format check
  ├─ Vitest unit tests
  └─ Vercel Deploy (Production)

Git Push (feature/*) → Vercel Preview Deployment (자동)
```

---

## 전체 기술 스택 요약

| 범주 | 기술 | 버전 | 역할 |
|------|------|------|------|
| **프론트엔드** | Next.js (App Router) | 15.x | SSR/SSG/ISR 프레임워크 |
| | TypeScript | 5.x | 타입 안전성 |
| | Tailwind CSS | 4.x | 유틸리티 퍼스트 스타일링 |
| | shadcn/ui | latest | 접근성 내장 컴포넌트 |
| | Zustand | 5.x | 경량 상태 관리 |
| | React Hook Form + Zod | 7.x / 3.x | 폼 관리 + 스키마 검증 |
| | Vidstack | 1.x | HLS 비디오 플레이어 |
| **백엔드** | Next.js API Routes | 15.x | REST API |
| | Server Actions | 15.x | 뮤테이션 처리 |
| | Prisma | 6.x | ORM |
| | Zod | 3.x | 입력 검증 |
| **데이터베이스** | Supabase PostgreSQL | 16.x | 관계형 DB |
| | Supabase Auth | — | 인증 (JWT + 소셜 로그인) |
| | Supabase Storage | — | 파일 스토리지 |
| | Supabase RLS | — | 행 수준 권한 제어 |
| **비디오** | Cloudflare Stream | — | VOD 호스팅·인코딩·CDN |
| **결제** | 토스페이먼츠 | — | 빌링키 정기결제·가상계좌 |
| **인프라** | Vercel | — | 호스팅·배포 |
| | Cloudflare DNS | — | 도메인·DDoS 방어 |
| | GitHub Actions | — | CI/CD |
| | Sentry | — | 에러 트래킹 |
| | Resend | — | 트랜잭션 이메일 |

```
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
│  토스페이먼츠 (빌링키 정기결제)           │
├─────────────────────────────────────────┤
│  Infrastructure                          │
│  Vercel + Cloudflare DNS                │
│  GitHub Actions + Sentry                 │
└─────────────────────────────────────────┘
```

---

## 보안 아키텍처

| 계층 | 보안 메커니즘 |
|------|---------------|
| **전송** | HTTPS (Cloudflare + Vercel 자동 provisioning) |
| **인증** | Supabase Auth (JWT + Refresh Token, httpOnly 쿠키) |
| **인가** | Supabase Row Level Security (RLS) |
| **API** | Zod 입력 검증 + Rate Limiting (Vercel Edge Config) |
| **결제** | 토스페이먼츠 웹훅 서명 검증 |
| **비디오** | Cloudflare Stream Signed URLs (토큰 기반 접근 제어) |
| **시크릿** | 환경 변수 (.env.local), Vercel Environment Variables |
| **CSRF** | Next.js Server Actions 자동 보호 |
| **XSS** | React 기본 이스케이프 + CSP 헤더 |
| **CORS** | Vercel 설정에서 명시적 도메인 허용 |
| **CSP** | script-src: self + 토스페이먼츠·Cloudflare 도메인 |

### 데이터 보안 고려사항

- **저장 데이터 암호화**: Supabase PostgreSQL 기본 암호화 at rest
- **전송 암호화**: TLS 1.3 (Cloudflare + Vercel)
- **API 키 관리**: Vercel 환경 변수로 관리, `.env` 파일은 `.gitignore` 처리
- **결제 정보**: 토스페이먼츠가 PCI DSS 준수하므로 서버에 카드 정보 미저장
- **비디오 접근**: Signed URL (TTL 1시간) + RLS 정책으로 수강자만 접근

---

## 확장 계획 (MVP → 성장 → 엔터프라이즈)

```
MVP                     성장                     엔터프라이즈
(Phase 1)              (Phase 2-3)              (Phase 4-6)
─────────────────────────────────────────────────────────────
Next.js 모노레포        tRPC 도입                마이크로서비스 분리
Supabase만으로 충분     Supabase Realtime        Redis (Upstash) 캐싱
Vercel 무료 티어        커뮤니티 기능             Docker 이관
Cloudflare Stream       모니터링 강화             Mux 라이브 스트리밍
토스페이먼츠 기본결제    포인트/쿠폰 시스템        B2B 파트너 API
                        Sentry 도입               CDN 캐싱 고도화
```

### Phase 2: 타입 안전성 강화
- tRPC 도입으로 end-to-end 타입 세이프 API
- Prisma ↔ Zod ↔ tRPC 스키마 공유

### Phase 3: 실시간 기능
- Supabase Realtime → 수강생 간 채팅, 라이브 Q&A
- 커뮤니티 게시판 (CRUD + 실시간 업데이트)

### Phase 4: 라이브 스트리밍
- Mux 또는 Cloudflare Stream Live 도입 → 실시간 강의
- WebRTC 기반 양방향 소통 검토

### Phase 5: 성능 최적화
- Redis (Upstash) → 세션, 캐싱, 레이트 리밋
- CDN 캐싱 전략 고도화

### Phase 6: 인프라 이관
- Vercel → Docker 이미지 (온프레미스 또는 클라우드)
- API Routes → 별도 Fastify 서버 분리 검토
- 트래픽 급증 시 마이크로서비스 아키텍처 전환