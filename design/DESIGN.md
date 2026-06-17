---
version: alpha
name: Surftorial
description: "서핑 온라인 강좌 플랫폼 — 바다의 역동성과 따뜻한 학습 경험을 결합한 브랜드 아이덴티티. 파도 곡선과 일출 오렌지 액센트로 해양 스포츠의 에너지를 전달하면서도, 체계적 학습 경로의 신뢰감을 유지."
colors:
  ocean-600: "#0C4A6E"
  ocean-500: "#0369A1"
  ocean-400: "#0EA5E9"
  ocean-300: "#7DD3FC"
  sunset-500: "#F97316"
  sunset-400: "#FB923C"
  sunset-100: "#FFF7ED"
  slate-900: "#0F172A"
  slate-700: "#334155"
  slate-400: "#94A3B8"
  slate-200: "#E2E8F0"
  sand-50: "#F8FAFC"
  white: "#FFFFFF"
  success: "#10B981"
  warning: "#F59E0B"
  error: "#EF4444"
  info: "#0EA5E9"
typography:
  display:
    fontFamily: "Inter"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h1:
    fontFamily: "Inter, Pretendard"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  h2:
    fontFamily: "Inter, Pretendard"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.35
  h3:
    fontFamily: "Inter, Pretendard"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.4
  h4:
    fontFamily: "Inter, Pretendard"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: "Pretendard"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "Pretendard"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Pretendard"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Pretendard"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.ocean-500}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ocean-400}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ocean-500}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-cta:
    backgroundColor: "{colors.sunset-500}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-cta-hover:
    backgroundColor: "{colors.sunset-400}"
    textColor: "{colors.white}"
  card-course:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  card-course-hover:
    backgroundColor: "{colors.white}"
  badge-level:
    backgroundColor: "{colors.ocean-300}"
    textColor: "{colors.ocean-600}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.slate-900}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  nav-link:
    textColor: "{colors.slate-700}"
  nav-link-active:
    textColor: "{colors.ocean-500}"
  section-bg-light:
    backgroundColor: "{colors.sand-50}"
  section-bg-warm:
    backgroundColor: "{colors.sunset-100}"
---

## Overview

Surftorial(서프토리얼)은 서핑 온라인 강좌 플랫폼입니다. 바다의 깊은 Navy에서 밝은 Sky Blue로 이어지는 Ocean 그라데이션이 브랜드의 기조를 형성하고, 일출의 따뜻함을 담은 Sunset Orange가 핵심 CTA와 강조 요소에 사용됩니다. 모래의 편안함을 연상시키는 Warm Neutral 배경 위에 역동적인 파도 곡선과 보드 실루엣이 어우러집니다.

**브랜드 키워드:** 해양(Oceanic), 성장(Progression), 접근성(Accessible), 따뜻함(Warmth)

## Colors

### 프라이머리: Ocean
- **Ocean 600 (#0C4A6E):** 헤딩, 네비게이션 활성 상태. 가장 깊은 바다색.
- **Ocean 500 (#0369A1):** 주요 CTA, 링크, 브랜드 핵심 요소. 모든 인터랙션의 기본색.
- **Ocean 400 (#0EA5E9):** 호버 상태, 보조 강조. 맑고 밝은 바다.
- **Ocean 300 (#7DD3FC):** 배경 장식, 뱃지, 태그. 은은한 물빛.

### 세컨더리: Sunset
- **Sunset 500 (#F97316):** 중요 CTA, 가격 태그, 알림. 일출의 강렬한 오렌지.
- **Sunset 400 (#FB923C):** Sunset CTA 호버. 부드러운 일출.
- **Sunset 100 (#FFF7ED):** 섹션 배경, 웜존. 크림 같은 따뜻함.

### 뉴트럴: Slate + Sand
- **Slate 900 (#0F172A):** 본문 텍스트. 진하고 읽기 쉬운 검정.
- **Slate 700 (#334155):** 서브 텍스트, 설명문.
- **Slate 400 (#94A3B8):** 플레이스홀더, 비활성 요소.
- **Slate 200 (#E2E8F0):** 보더, 디바이더.
- **Sand 50 (#F8FAFC):** 페이지 배경. 따뜻한 오프화이트.

### 시맨틱
- **Success (#10B981):** 수강 완료, 결제 성공.
- **Warning (#F59E0B):** 리뷰 대기, 쿠폰 만료 임박.
- **Error (#EF4444):** 결제 실패, 필수 항목 누락.
- **Info (#0EA5E9):** 공지사항, 가이드.

## Typography

**한글 본문: Pretendard** — Apple 시스템 폰트와 호환되는 오픈소스 한글 산스서리프. 웹 최적화와 뛰어난 가독성.

**영문/디스플레이: Inter** — 가변 폰트, 숫자 표기 우수, 다국어 호환. 브랜드 네임 "Surftorial"과 숫자/가격에 사용.

**타이포그래픽 규칙:**
- 한영 혼용 시 한글과 영문 사이 스페이스 1칸
- 숫자는 Inter (tabular-nums) 사용
- 가격 표기: `₩29,000` 형식, Inter weight 700
- 모바일에서 Display는 36px로 축소 (clamp 사용)

## Layout

### 그리드 시스템
- **모바일 (<768px):** 1컬럼, 16px 패딩
- **태블릿 (768-1023px):** 2컬럼, 24px 패딩
- **데스크톱 (≥1024px):** 3-4컬럼, 최대 1280px 컨테이너

### 간격 원칙
- 컴포넌트 내부: spacing.sm (8px) ~ spacing.md (16px)
- 컴포넌트 간격: spacing.md (16px) ~ spacing.lg (24px)
- 섹션 간격: spacing.xl (32px) ~ spacing.2xl (48px)
- 페이지 상하 간격: spacing.3xl (64px)

## Elevation & Depth

- **Level 0 (Flat):** 페이지 배경, 섹션 배경
- **Level 1 (Subtle):** 카드 기본 — `box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`
- **Level 2 (Medium):** 카드 호버, 드롭다운 — `box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)`
- **Level 3 (High):** 모달, 토스트 — `box-shadow: 0 12px 32px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)`

## Shapes

- **rounded.sm (4px):** 인풋 필드, 작은 버튼 내부
- **rounded.md (8px):** 버튼, 카드 내부 요소
- **rounded.lg (12px):** 코스 카드, 모달
- **rounded.xl (16px):** 히어로 카드, 특별 프로모션 배너
- **rounded.2xl (24px):** 풀위드 섹션 배경
- **rounded.full (9999px):** 뱃지, 아바타, 펌버튼

## Components

### Button-primary
Ocean 500 배경에 흰색 텍스트. 모든 주요 액션에 사용. 호버 시 Ocean 400으로 전환. 최소 높이 44px (모바일 터치 타겟).

### Button-cta
Sunset Orange 배경에 흰색 텍스트. 수강 신청, 결제 등 가장 중요한 전환 포인트에만 사용. 호버 시 Sunset 400. 최소 높이 48px.

### Card-course
흰색 배경, lg 라운드 코너. 썸네일 + 레벨 뱃지 + 제목 + 강사명 + 가격 구성. 호버 시 Level 2 그림자 + 미세한 translateY(-2px).

### Badge-level
Ocean 300 배경에 Ocean 600 텍스트. full 라운드. 입문/초급/중급/고급 레벨 표시.

### Input-field
흰색 배경, Slate 200 보더(1px), md 라운드. 포커스 시 Ocean 500 보더(2px) + 외곽선 그림자.

## Do's and Don'ts

### Do ✅
- 모든 CTA 버튼에 Ocean Main 또는 Sunset Orange 사용
- 한글은 Pretendard, 영문/숫자는 Inter 사용
- 이미지는 따뜻하고 자연스러운 톤 유지 (과보정 금지)
- 모바일에서 최소 16px 본문, 44px 터치 타겟 보장
- 친근하면서도 전문적인 브랜드 톤 유지
- 다이크 모드에서도 Ocean/Sunset이 충분한 대비 확보

### Don't ❌
- 과장된 표현 사용 ("완벽", "최고", "100%")
- 어안 렌즈 왜곡 이미지 사용
- Ocean/Sunset 외 다른 색상을 CTA에 혼용
- 14px 미만 텍스트 사용 (접근성 위반)
- 44px 미만 터치 타겟 사용
- 모바일에서 가로 스크롤 발생 레이아웃 사용