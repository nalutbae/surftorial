# Surftorial Design System

> 서핑 온라인 강좌 플랫폼 | Brand Identity & UI/UX Framework

## 📂 파일 구조

```
design/
├── README.md                  ← 이 파일
├── brand-guidelines.md        ← 브랜드 가이드라인 (미션, 로고, 컬러, 타이포, 보이스&톤)
├── DESIGN.md                  ← Google DESIGN.md 토큰 스펙 (YAML + 마크다운)
├── design-tokens.md           ← CSS 개발자용 상세 토큰 참고 (CSS Custom Properties, 반응형, 애니메이션)
├── design-tokens.json         ← 구조화된 디자인 토큰 JSON (Tailwind/JS에서 사용)
└── wireframes/                ← HTML/CSS 와이어프레임 프로토타입
    ├── 01-landing-page.html       ← 랜딩 페이지 (히어로, 강의 카드, 특징, 리뷰, CTA)
    ├── 02-course-listing.html     ← 강의 목록 (사이드바 필터, 검색, 정렬, 페이지네이션)
    ├── 03-course-detail.html      ← 강의 상세 (비디오 플레이어, 커리큘럼, Q&A, 결제 사이드바)
    └── 04-dashboard.html         ← 사용자 대시보드 (학습 진행, 통계, 활동, 추천, 달성)
```

## 🎨 브랜드 개요

| 항목 | 값 |
|------|-----|
| 서비스명 | Surftorial (서프토리얼) |
| 타겟 | 20~40대, 서핑에 관심 있는 초보~중급 |
| 테마 | 바다/서핑 — 자연스러운 따뜻함 + 체계적 학습의 신뢰감 |
| 프라이머리 컬러 | Ocean Blue `#0369A1` (디자인 토큰) / `#0EA5E9` (Tailwind 기준) |
| 세컨더리 컬러 | Sunset Orange `#F97316` |
| 본문 폰트 | Pretendard (한글), Inter (영문/숫자) |

## 🎯 디자인 원칙

1. **접근성 우선** — 최소 16px 본문, 44px 터치 타겟, WCAG AA 대비
2. **모바일 퍼스트** — 모바일에서 완벽하게 작동하고 데스크톱으로 확장
3. **해양 테마** — Ocean Blue 그라데이션 + Sunset Orange 액센트
4. **친근 + 전문** — 과장 없이 정확하고 따뜻한 톤

## 🔧 개발자 가이드

### 디자인 토큰 사용법

- **DESIGN.md**: Google DESIGN.md 형식. `npx -y @google/design.md lint design/DESIGN.md` 로 검증 가능
- **design-tokens.md**: CSS Custom Properties 형식. 스타일시트에 직접 복사하여 사용
- **design-tokens.json**: JS/Tailwind에서 `import tokens from './design-tokens.json'` 로 사용

### 와이어프레임 실행

```bash
# macOS
open design/wireframes/01-landing-page.html

# Linux
xdg-open design/wireframes/01-landing-page.html
```

각 HTML 파일은 독립 실행 가능 (외부 종속성: Google Fonts CDN만 필요).

## 📋 완료 체크리스트

- [x] 브랜드 가이드라인 (로고 컨셉, 컬러 팔레트, 타이포그래피, 보이스&톤)
- [x] 디자인 토큰 (DESIGN.md + CSS + JSON)
- [x] 랜딩 페이지 와이어프레임
- [x] 강의 목록 페이지 와이어프레임
- [x] 강의 상세/플레이어 페이지 와이어프레임
- [x] 사용자 대시보드 와이어프레임
- [ ] 다크 모드 변형 (추후 구현)
- [ ] 모바일 전용 네비게이션 패턴 (추후 구현)
- [ ] 접근성 감사 (WCAG 2.1 AA) (추후 구현)