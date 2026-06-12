# 2F Auto37 — Design System

> **Aesthetic direction:** Industrial Precision. Bold geometry, high contrast, mechanical confidence.
> Red means action. Charcoal means trust. White means clarity.

---

## Quick Reference

| Resource | File | Purpose |
|----------|------|---------|
| [Design Tokens](./tokens.css) | `tokens.css` | All CSS custom properties (colors, type, spacing, shadows, z-index, motion) |
| [Style Guide](./style-guide.md) | `style-guide.md` | Brand voice, color rules, typography scale, layout grid, imagery, motion |
| [Component Library](./components/README.md) | `components/README.md` | All component specs and code |

---

## Brand at a Glance

| | |
|-|-|
| **Brand** | 2F Auto37 |
| **Category** | Automotive care & detailing |
| **Tone** | Direct · Confident · Expert |
| **Primary color** | `#E31E24` Racing Red |
| **Dark color** | `#1C1C1C` Charcoal |
| **Light bg** | `#F2EFEC` Warm Ash |
| **Display font** | Barlow Condensed (600–800) |
| **Body font** | Barlow (400–600) |
| **Label font** | Bebas Neue (400) |

---

## Setup

### 1. Install fonts

```tsx
// app/layout.tsx
import { Barlow_Condensed, Barlow, Bebas_Neue } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

const barlow = Barlow({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-label",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${barlow.variable} ${bebasNeue.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
```

### 2. Apply tokens in globals.css

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Copy the full @theme block from docs/design/tokens.css */
}

@layer base {
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-body);
    color: var(--color-text-primary);
    background: var(--color-surface);
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.025em;
  }

  ::selection {
    background: var(--color-brand);
    color: white;
  }

  :focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 2px;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}
```

### 3. Install dependencies

```bash
# Icons
npm install lucide-react

# Optional: cn() utility for conditional classNames
npm install clsx tailwind-merge
```

```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Component Overview

```
components/
├── layout/
│   ├── Navbar.tsx         Two-band sticky nav (utility + brand nav)
│   └── Footer.tsx         4-column dark footer + copyright bar
├── sections/
│   └── Hero.tsx           Full-bleed image hero with overlay + staggered text
└── ui/
    ├── Button.tsx         5 variants (primary, secondary, ghost, danger, icon)
    ├── Badge.tsx          7 variants (brand, muted, outline, dark, status)
    ├── IconWrapper.tsx    5 variants × 5 sizes — consistent icon containers
    ├── ServiceCard.tsx    4 variants (light, dark, outlined, featured)
    └── SectionHeading.tsx eyebrow + H2 + divider + description, 4 modes
```

---

## Color System Summary

```
#E31E24  ███ brand          — CTAs, active states, key accents
#C0181E  ███ brand-hover    — Button hover
#0D0D0D  ███ carbon         — Hero overlays, deepest text
#1C1C1C  ███ charcoal       — Navbar, footer, dark sections
#2B2B2B  ███ steel          — Dark card surfaces
#484848  ███ iron           — Secondary text
#8C8C8C  ███ silver         — Muted text, inactive icons
#C8C8C8  ███ smoke          — Borders, dividers
#F2EFEC  ███ ash            — Warm light section backgrounds
#FFFFFF  ███ white          — Card surfaces, primary backgrounds
```

---

## Spacing Rhythm

The system uses a **4px base unit**. All spacing values are multiples of 4.

Key landmarks:
- Component internal padding: `16px` (4) → `32px` (8)
- Component gaps in grids: `24px` (6) → `32px` (8)
- Section vertical padding: `48px` (12) → `80px` (20) → `112px` (28)
- Container horizontal: `24px` (6) mobile → `32px` (8) desktop

---

## Motion Conventions

| Behavior | Duration | Easing |
|----------|----------|--------|
| Button state change | 150ms | ease-out |
| Card hover lift | 200ms | ease-out |
| Dropdown open | 200ms | ease-out |
| Nav link underline | 200ms | cubic-bezier(0.2,0,0,1) — mechanical snap |
| Hero text entrance | 400–600ms | ease-out, staggered |
| Page transition | 300ms | ease-out |

All `transform` and `animation` declarations must be wrapped in:
```css
@media (prefers-reduced-motion: no-preference) { ... }
```

---

## Accessibility Checklist

- [ ] All interactive elements have visible `:focus-visible` styles (2px brand-red outline)
- [ ] Text on `--color-brand` background is white — passes AA at 14px+
- [ ] Text on image overlays verified at WCAG AA (minimum overlay: 55% black)
- [ ] Icon-only elements have `aria-label` or `aria-hidden` + adjacent visible text
- [ ] Buttons have accessible names (not icon-only without label)
- [ ] Color is never the *only* conveyor of meaning (always paired with text or shape)
- [ ] Motion respects `prefers-reduced-motion`
- [ ] Fonts load via `next/font/google` — no layout shift (font-display: swap)
