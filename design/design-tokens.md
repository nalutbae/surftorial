# Surftorial — 디자인 토큰 (Design Tokens)

> CSS Custom Properties / Tailwind Config 기준 | v1.0

---

## 1. 컬러 토큰 (Color Tokens)

### Primary — Ocean
```css
--color-ocean-50:  #F0F9FF;   /* bg-subtle */
--color-ocean-100: #E0F2FE;   /* bg-light */
--color-ocean-200: #BAE6FD;   /* border-light */
--color-ocean-300: #7DD3FC;   /* text-accent-light */
--color-ocean-400: #38BDF8;   /* hover */
--color-ocean-500: #0EA5E9;   /* DEFAULT — links, accents */
--color-ocean-600: #0284C7;   /* pressed */
--color-ocean-700: #0369A1;   /* DEFAULT DARK — brand primary */
--color-ocean-800: #075985;   /* heading */
--color-ocean-900: #0C4A6E;   /* heading-strong */
--color-ocean-950: #082F49;   /* hero overlay */
```

### Secondary — Sunset
```css
--color-sunset-50:  #FFF7ED;   /* bg-subtle */
--color-sunset-100: #FFEDD5;   /* bg-light */
--color-sunset-200: #FED7AA;   /* border-light */
--color-sunset-300: #FDBA74;   /* text-accent-light */
--color-sunset-400: #FB923C;   /* hover */
--color-sunset-500: #F97316;   /* DEFAULT — CTA, badges */
--color-sunset-600: #EA580C;   /* pressed */
--color-sunset-700: #C2410C;   /* heading */
--color-sunset-800: #9A3412;   /* heading-strong */
--color-sunset-900: #7C2D12;   /* hero accent */
```

### Neutral — Slate
```css
--color-slate-50:  #F8FAFC;   /* page bg */
--color-slate-100: #F1F5F9;   /* card bg-alt */
--color-slate-200: #E2E8F0;   /* border */
--color-slate-300: #CBD5E1;   /* border-focus */
--color-slate-400: #94A3B8;   /* placeholder, muted */
--color-slate-500: #64748B;   /* secondary text */
--color-slate-600: #475569;   /* body text alt */
--color-slate-700: #334155;   /* sub-heading */
--color-slate-800: #1E293B;   /* heading */
--color-slate-900: #0F172A;   /* primary text */
--color-slate-950: #020617;   /* hero text */
```

### Semantic
```css
--color-success:       #10B981;
--color-success-light: #D1FAE5;
--color-warning:       #F59E0B;
--color-warning-light: #FEF3C7;
--color-error:         #EF4444;
--color-error-light:   #FEE2E2;
--color-info:          #0EA5E9;
--color-info-light:    #E0F2FE;
```

### Dark Mode Overrides
```css
[data-theme="dark"] {
  --color-bg-page:    #0F172A;
  --color-bg-card:    #1E293B;
  --color-bg-elevated: #334155;
  --color-text-primary: #F1F5F9;
  --color-text-secondary: #94A3B8;
  --color-border:     #334155;
}
```

---

## 2. 타이포그래피 토큰 (Typography Tokens)

### Font Stack
```css
--font-display: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-body:    'Pretendard', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono:    'JetBrains Mono', 'Fira Code', monospace;
```

### Font Scale (Fluid Typography)
```css
/* clamp(min, preferred, max) — 320px to 1440px viewport */

--font-size-display: clamp(2.25rem, 5vw + 1rem, 3rem);       /* 36–48px */
--font-size-h1:      clamp(1.875rem, 4vw + 0.5rem, 2.25rem);  /* 30–36px */
--font-size-h2:      clamp(1.5rem, 3vw + 0.5rem, 1.875rem);   /* 24–30px */
--font-size-h3:      1.5rem;    /* 24px */
--font-size-h4:      1.25rem;   /* 20px */
--font-size-body-lg: 1.125rem;  /* 18px */
--font-size-body:    1rem;      /* 16px — minimum readable */
--font-size-body-sm: 0.875rem;  /* 14px */
--font-size-caption: 0.75rem;   /* 12px */
```

### Font Weight
```css
--font-weight-regular:  400;
--font-weight-medium:    500;
--font-weight-semibold:  600;
--font-weight-bold:      700;
--font-weight-extrabold: 800;
```

### Line Height
```css
--line-height-tight:   1.2;
--line-height-snug:    1.35;
--line-height-normal:  1.5;
--line-height-relaxed: 1.7;
```

### Letter Spacing
```css
--letter-spacing-tight:   -0.02em;   /* headings */
--letter-spacing-normal:   0;         /* body */
--letter-spacing-wide:     0.02em;    /* caps, labels */
--letter-spacing-wider:    0.05em;    /* uppercase */
```

---

## 3. 스페이싱 토큰 (Spacing Tokens)

### Base Unit: 4px
```css
--space-0:    0;
--space-0.5:  0.125rem;  /* 2px */
--space-1:    0.25rem;   /* 4px */
--space-1.5:  0.375rem;  /* 6px */
--space-2:    0.5rem;    /* 8px */
--space-2.5:  0.625rem;  /* 10px */
--space-3:    0.75rem;   /* 12px */
--space-4:    1rem;      /* 16px */
--space-5:    1.25rem;   /* 20px */
--space-6:    1.5rem;    /* 24px */
--space-8:    2rem;      /* 32px */
--space-10:   2.5rem;    /* 40px */
--space-12:   3rem;      /* 48px */
--space-16:   4rem;      /* 64px */
--space-20:   5rem;      /* 80px */
--space-24:   6rem;      /* 96px */
```

### Semantic Spacing
```css
--section-padding-y:   var(--space-16);   /* 64px section vertical */
--section-padding-x:   var(--space-6);    /* 24px section horizontal */
--card-padding:        var(--space-6);    /* 24px card inner */
--card-gap:             var(--space-6);   /* 24px between cards */
--input-padding-y:     var(--space-3);   /* 12px input vertical */
--input-padding-x:     var(--space-4);   /* 16px input horizontal */
```

---

## 4. 레이아웃 토큰 (Layout Tokens)

### Breakpoints
```css
--bp-sm:  640px;    /* mobile landscape */
--bp-md:  768px;    /* tablet portrait */
--bp-lg:  1024px;   /* tablet landscape / small desktop */
--bp-xl:  1280px;   /* desktop */
--bp-2xl: 1536px;   /* wide desktop */
```

### Container
```css
--container-sm:  640px;
--container-md:  768px;
--container-lg:  1024px;
--container-xl:  1280px;
--container-2xl: 1400px;
```

### Grid
```css
--grid-cols-mobile:  1;
--grid-cols-tablet:  2;
--grid-cols-desktop: 3;
--grid-gap:          var(--space-6);  /* 24px */
```

---

## 5. 컴포넌트 토큰 (Component Tokens)

### Border Radius
```css
--radius-sm:   0.375rem;  /* 6px — inputs, small buttons */
--radius-md:   0.5rem;    /* 8px — cards, modals */
--radius-lg:   0.75rem;   /* 12px — large cards */
--radius-xl:   1rem;      /* 16px — hero sections */
--radius-2xl:  1.5rem;    /* 24px — feature sections */
--radius-full: 9999px;     /* pills, avatars */
```

### Shadows
```css
--shadow-sm:   0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md:   0 4px 6px -1px rgba(0, 0, 0, 0.07),
               0 2px 4px -2px rgba(0, 0, 0, 0.05);
--shadow-lg:   0 10px 15px -3px rgba(0, 0, 0, 0.08),
               0 4px 6px -4px rgba(0, 0, 0, 0.05);
--shadow-xl:   0 20px 25px -5px rgba(0, 0, 0, 0.1),
               0 8px 10px -6px rgba(0, 0, 0, 0.05);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
```

### Transitions
```css
--transition-fast:   150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow:   350ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## 6. 반응형 전략 (Responsive Strategy)

### Mobile-First 접근
```css
/* 기본: 모바일 (<768px) */
.container { padding: 0 var(--space-4); }

/* 태블릿 (≥768px) */
@media (min-width: 768px) {
  .container { padding: 0 var(--space-6); }
}

/* 데스크톱 (≥1024px) */
@media (min-width: 1024px) {
  .container { padding: 0 var(--space-8); max-width: var(--container-xl); }
}
```

### 터치 타겟 최소 크기
- **버튼**: 최소 44×44px (WCAG 2.5.5)
- **아이콘 버튼**: 최소 48×48px
- **링크 텍스트**: 행간 충분 (line-height ≥ 1.5)
- **폼 입력**: 최소 높이 48px

### 반응형 타이포그래피 축소
| 레벨 | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| Display | 48px | 40px | 36px |
| H1 | 36px | 32px | 28px |
| H2 | 30px | 26px | 24px |
| H3 | 24px | 22px | 20px |
| Body | 16px | 16px | 16px |

---

## 7. 애니메이션 & 모션 (Motion)

### 원칙
- **자연스러운 움직임**: 파도의 흐름처럼 부드럽게
- **의미 있는 애니메이션**: 장식용이 아닌 상태 변화 표시
- **접근성 존중**: `prefers-reduced-motion` 미디어 쿼리 지원

### Easing Curves
```css
--ease-standard:    cubic-bezier(0.4, 0, 0.2, 1);   /* UI transitions */
--ease-decelerate:  cubic-bezier(0, 0, 0.2, 1);     /* entering */
--ease-accelerate:  cubic-bezier(0.4, 0, 1, 1);     /* exiting */
--ease-bounce:      cubic-bezier(0.34, 1.56, 0.64, 1); /* playful */
```

### Duration Scale
| Name | Duration | Usage |
|------|----------|-------|
| instant | 0ms | immediate state |
| fast | 150ms | hover, focus, toggle |
| normal | 250ms | expand, collapse, fade |
| slow | 350ms | slide, page transition |
| scenic | 500ms | hero animations, onboarding |

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Z-Index 스케일

```css
--z-base:      0;
--z-dropdown:  10;
--z-sticky:    20;
--z-overlay:   30;
--z-modal:     40;
--z-toast:     50;
--z-tooltip:   60;
```

---

## 9. Tailwind Config 매핑

```js
// tailwind.config.js 참고용 스니펫
module.exports = {
  theme: {
    extend: {
      colors: {
        ocean: {
          50:  '#F0F9FF', 100: '#E0F2FE', 200: '#BAE6FD',
          300: '#7DD3FC', 400: '#38BDF8', 500: '#0EA5E9',
          600: '#0284C7', 700: '#0369A1', 800: '#075985',
          900: '#0C4A6E', 950: '#082F49',
        },
        sunset: {
          50:  '#FFF7ED', 100: '#FFEDD5', 200: '#FED7AA',
          300: '#FDBA74', 400: '#FB923C', 500: '#F97316',
          600: '#EA580C', 700: '#C2410C', 800: '#9A3412',
          900: '#7C2D12',
        },
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Pretendard', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        sm: '0.375rem', md: '0.5rem', lg: '0.75rem',
        xl: '1rem', '2xl': '1.5rem',
      },
    },
  },
}
```