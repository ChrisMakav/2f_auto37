# 2F Auto37 — Style Guide

> **Aesthetic direction:** Industrial Precision. Every detail carries the weight of a torque spec — nothing arbitrary, nothing wasted. Bold geometry, high contrast, mechanical confidence.

---

## 1. Brand

### 1.1 Identity

| Attribute | Value |
|-----------|-------|
| **Name** | 2F Auto37 |
| **Category** | Automotive care & detailing |
| **Tone** | Direct · Confident · Expert · Trustworthy |
| **Promise** | Precision care for every vehicle |

### 1.2 Voice & Tone

**Direct.** Skip the fluff. Car owners trust shops that speak like mechanics, not marketers. Lead with facts: services, prices, timelines.

**Confident.** We don't "try" — we deliver. Avoid hedging language ("might", "could", "maybe"). Use declarative statements: "We restore. We protect. We deliver."

**Expert without jargon.** The copy should demonstrate expertise through specificity, not vocabulary. "Ceramic coating with 5-year UV protection" is better than "advanced polymer nano-ceramic application."

**Respectful of the owner's car.** Their vehicle is an asset. Treat maintenance as care, not just service.

| ✅ Write this | ❌ Not this |
|--------------|------------|
| "Book your detailing today" | "Feel free to consider booking" |
| "24-hour turnaround, guaranteed" | "We usually try to finish quickly" |
| "Expert mechanics, zero shortcuts" | "Our experienced team does their best" |
| "Your car, restored." | "We make your car look somewhat better!" |

---

## 2. Color

### 2.1 Palette

#### Primary — Racing Red
The brand's dominant energy. Used for CTAs, active states, and key highlights. Never diluted or mixed with other hues — it always reads as pure, powerful red.

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-brand` | `#E31E24` | Primary buttons, active nav items, decorative accents |
| `--color-brand-hover` | `#C0181E` | Button hover state |
| `--color-brand-active` | `#9E1317` | Button pressed / active |
| `--color-brand-light` | `#FF3B41` | Subtle highlights, icon fills on dark |
| `--color-brand-ghost` | `rgba(227,30,36,0.08)` | Ghost button backgrounds |
| `--color-brand-muted` | `rgba(227,30,36,0.15)` | Soft badge backgrounds |

#### Neutrals — Industrial Scale
Inspired by raw materials in an auto shop: carbon fibre, steel, iron, graphite, ash.

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-carbon` | `#0D0D0D` | Deepest black, hero overlays, primary dark text |
| `--color-charcoal` | `#1C1C1C` | Navbar background, dark section fills |
| `--color-steel` | `#2B2B2B` | Dark card surfaces, elevated dark layers |
| `--color-iron` | `#484848` | Secondary text, inactive icons |
| `--color-graphite` | `#6B6B6B` | Placeholder text, disabled elements |
| `--color-silver` | `#8C8C8C` | Muted body text, captions |
| `--color-smoke` | `#C8C8C8` | Borders, dividers, hairlines |
| `--color-ash` | `#F2EFEC` | Light section backgrounds (warm, not cold) |
| `--color-white` | `#FFFFFF` | Pure white surfaces, card backgrounds |

### 2.2 Color Rules

1. **Red is precious.** Use it for one focal point per view, never as a background for large areas.
2. **Contrast is non-negotiable.** All text passes WCAG AA (4.5:1 for normal, 3:1 for large). Red on white passes at large sizes only — pair with carbon for body copy.
3. **Dark sections use warm grays.** `#1C1C1C` (charcoal) not pure black — avoids the "void" effect.
4. **Ash, not cool gray.** The warm tint (`#F2EFEC`) prevents the UI feeling clinical or cold, appropriate for a hands-on trade business.

### 2.3 Allowed Combinations

| Background | Text | Use case |
|------------|------|----------|
| `--color-brand` | `--color-white` | Primary CTA button |
| `--color-charcoal` | `--color-white` | Navbar, dark hero text, footer |
| `--color-white` | `--color-carbon` | Body content, cards |
| `--color-ash` | `--color-carbon` | Alternating sections |
| `--color-carbon` | `--color-white` | Hero overlay text |
| `--color-white` | `--color-brand` | Text links, inline brand accents |

---

## 3. Typography

### 3.1 Typeface Stack

**Display: Barlow Condensed**
- Weights used: 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- Applied to: H1, H2, H3, navigation labels, hero text, section headings
- Character: Mechanical compression, high impact, reads fast at large sizes

```html
<!-- Load in layout.tsx via next/font/google -->
import { Barlow_Condensed } from "next/font/google";
const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});
```

**Body: Barlow**
- Weights used: 400 (Regular), 500 (Medium), 600 (SemiBold)
- Applied to: Body copy, card descriptions, form labels, utility text
- Character: Same family as display but uncondensed — cohesive without competing

```html
import { Barlow } from "next/font/google";
const barlow = Barlow({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});
```

**Label: Bebas Neue**
- Weight: 400 (the only weight available — renders as bold)
- Applied to: Badges, eyebrow text above headings, category labels, icon captions
- Character: Pure uppercase, wide tracking, strong mechanical presence

```html
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-label",
});
```

### 3.2 Type Scale

| Step | Size | Font | Weight | Leading | Use |
|------|------|------|--------|---------|-----|
| Display XL | `clamp(3rem, 6vw, 5rem)` | Display | 800 | 1.0 | Hero headline |
| Display | `clamp(2.25rem, 4vw, 3.75rem)` | Display | 700 | 1.1 | Section hero headings |
| H1 | 3rem (48px) | Display | 700 | 1.1 | Page-level headings |
| H2 | 2.25rem (36px) | Display | 700 | 1.15 | Section headings |
| H3 | 1.875rem (30px) | Display | 600 | 1.2 | Card titles, sub-sections |
| H4 | 1.5rem (24px) | Display | 600 | 1.25 | List headings, accordions |
| Eyebrow | 0.875rem (14px) | Label | 400 | 1.5 | Section pre-labels |
| Body LG | 1.125rem (18px) | Body | 400 | 1.625 | Hero subtext, lead paragraphs |
| Body | 1rem (16px) | Body | 400 | 1.625 | Default body copy |
| Body SM | 0.875rem (14px) | Body | 400 | 1.5 | Secondary copy, captions |
| Label | 0.75rem (12px) | Body | 600 | 1.5 | Form labels, metadata |
| Caption | 0.6875rem (11px) | Body | 400 | 1.5 | Fine print, timestamps |

### 3.3 Typography Rules

1. **Display font is ALWAYS uppercase on large sizes** (H1, H2). Add `uppercase tracking-wide` classes.
2. **Never use body font at bold weight for headings** — use the display family instead.
3. **Hero text always has a dark overlay** behind it when on a photo — minimum 50% opacity black.
4. **Eyebrow text uses the label font, brand color, and wide tracking.** Pattern: `[EYEBROW] / [HEADING BELOW]`.
5. **Line length:** Body text max 65–75 characters per line (`max-w-prose` or `max-w-2xl`).

---

## 4. Layout & Grid

### 4.1 Container

```
Max width: 1280px (--container-xl)
Horizontal padding: 24px mobile / 32px desktop (--spacing-container-x)
```

```tsx
// Reusable container utility
// className="mx-auto w-full max-w-[1280px] px-6 lg:px-8"
```

### 4.2 12-Column Grid

```
Columns: 12
Gutter:  24px (mobile) → 32px (desktop)
```

Common column spans:

| Layout Pattern | Mobile | Tablet (md) | Desktop (lg) |
|----------------|--------|-------------|--------------|
| Full width | 12 | 12 | 12 |
| Half | 12 | 6 | 6 |
| Third | 12 | 6 | 4 |
| Quarter | 12 | 6 | 3 |
| Two-thirds | 12 | 8 | 8 |
| Sidebar | 12 | 12 | 4 / 8 |

### 4.3 Section Spacing

| Context | Top/Bottom Padding |
|---------|-------------------|
| Tight (utility sections, banners) | 48px (`py-12`) |
| Standard (most content sections) | 80px (`py-20`) |
| Generous (hero, feature callouts) | 112px (`py-28`) |

### 4.4 Breakpoints

| Name | Width | Tailwind prefix |
|------|-------|-----------------|
| xs | 480px | `xs:` |
| sm | 640px | `sm:` |
| md | 768px | `md:` |
| lg | 1024px | `lg:` |
| xl | 1280px | `xl:` |
| 2xl | 1536px | `2xl:` |

### 4.5 Navbar Layout

```
┌────────────────────────────────────────────────────────┐
│  Utility bar (40px)  phone · social links              │ --color-charcoal / silver text
├────────────────────────────────────────────────────────┤
│  Main nav (72px)  LOGO  ·  HOME  ABOUT  SERVICE  BLOG  │ --color-brand bg / white text
└────────────────────────────────────────────────────────┘
Total height: 112px (desktop) / 64px (mobile, single bar)
```

---

## 5. Iconography

### 5.1 Style

Use **Lucide React** or **Heroicons** (outline style). Icons always pair with text in service contexts — never icon-only without an accessible label.

| Context | Size | Stroke width |
|---------|------|-------------|
| Inline with body text | 16px (1rem) | 1.5 |
| Card icons | 24px (1.5rem) | 1.5 |
| Feature icons (large) | 40–48px | 1.5 |
| Decorative / hero | 64px+ | 1.25 |

### 5.2 Icon Colors

- Default: `--color-iron` (dark gray)
- On dark backgrounds: `--color-smoke` or `--color-white`
- Brand accent: `--color-brand` (red) — used for feature icons in highlighted positions
- Never mix icon colors within the same card

---

## 6. Motion

### 6.1 Principles

- **Mechanical, not bouncy.** Motion should feel deliberate and precise — like a well-tuned engine. Use `--ease-sharp` for UI transitions; avoid elastic/spring easing on structural elements.
- **One spectacle per page.** The hero gets the elaborate entrance. Other elements get subtle reveals.
- **Respect motion preferences.** All animations must be wrapped in `@media (prefers-reduced-motion: no-preference)`.

### 6.2 Standard Transitions

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Button background | `background-color` | 150ms | `--ease-out` |
| Button transform | `transform` | 150ms | `--ease-out` |
| Nav link underline | `transform` | 200ms | `--ease-sharp` |
| Card lift (hover) | `transform, shadow` | 200ms | `--ease-out` |
| Overlay fade | `opacity` | 200ms | `--ease-default` |
| Page enter | `opacity, translateY` | 400ms | `--ease-out` |
| Hero text reveal | staggered `opacity, translateY` | 600ms+ | `--ease-out` |

### 6.3 Hover Conventions

- **Buttons:** Scale `1.02` + shadow intensify OR background color shift (not both)
- **Cards:** `translateY(-4px)` + shadow escalation
- **Nav links:** Red underline slides in from left
- **Icons:** Color shift to brand red at 200ms

---

## 7. Imagery

### 7.1 Photography Style

- **Hero:** Full-bleed, high-contrast automotive photos. Dark subject / light highlights. Always overlay with `rgba(13,13,13,0.55)` minimum.
- **Team:** Authentic, on-site photos. Mechanics in uniform, real shop environment.
- **Service:** Close-up detail shots — clean finishes, tools, polished surfaces.
- **Avoid:** Stock-looking smiling faces on white backgrounds, over-edited HDR car photos.

### 7.2 Aspect Ratios

| Context | Ratio |
|---------|-------|
| Hero background | `16:9` or full viewport |
| Service card image | `4:3` |
| Team member photo | `3:4` (portrait) |
| Blog thumbnail | `16:9` |
| Gallery grid | Mix of `1:1` and `4:3` |

---

## 8. Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Use brand red for exactly one CTA per section | Scatter red across multiple elements in one view |
| Use Barlow Condensed uppercase for all headings | Mix heading fonts or use body weight for H1/H2 |
| Maintain section padding at 80px minimum | Collapse sections into each other without breathing room |
| Use `--color-ash` for alternating light sections | Use pure `#F0F0F0` cold gray — it kills the warm brand feel |
| Scale icons consistently within their context | Mix 16px and 32px icons in the same component level |
| Apply `translateY(-4px)` hover lift to service cards | Add hover effects to static hero images or background elements |
| Test all text on image overlays for WCAG AA | Place text on unverified low-contrast backgrounds |
| Keep CTA button copy ≤ 3 words where possible | Write "Click here to learn more about our services" as button text |
