# Hero

Full-bleed section with a background photo, dark overlay, bold headline, subtext, and one or two CTAs. Sets the emotional tone for the entire page.

---

## Anatomy

```
┌──────────────────────────────────────────────────────────────────┐
│                   [Background photo]                             │
│         rgba(13,13,13,0.55) overlay                              │
│                                                                  │
│   ┌──────────────────────────────────┐                           │
│   │ Beautiful Your Car With          │                           │
│   │ [brand:Car Spa]                  │  ← Display font          │
│   │                                  │                           │
│   │ Subtext body copy paragraph...   │  ← Body font             │
│   │                                  │                           │
│   │  [ LEARN MORE ]  [ BOOK NOW ]    │  ← Button group          │
│   └──────────────────────────────────┘                           │
│                                                                  │
│  ● ■ ■   ← carousel dots                                        │
└──────────────────────────────────────────────────────────────────┘
```

---

## Visual Specs

### Container

```
Min height:      90vh (desktop) / 70vh (mobile)
Max height:      720px
Background:      Next.js <Image> with objectFit="cover", priority
Overlay:         ::before, position absolute inset-0
                 background: linear-gradient(
                   to right,
                   rgba(13,13,13,0.75) 0%,     ← strong left (text side)
                   rgba(13,13,13,0.40) 60%,     ← fades right
                   rgba(13,13,13,0.20) 100%
                 )
```

### Text block

```
Position:        left-aligned, vertically centered
Max width:       560px
Padding:         section padding (py-28 = 112px) + container X
```

### Headline

```
Font:            --font-display, ExtraBold (800)
Size:            clamp(2.5rem, 5vw + 1rem, 5rem)  — fluid
Color:           --color-white
Text transform:  uppercase
Letter spacing:  --tracking-tight (-0.025em)
Line height:     --leading-tight (1.1)

Accent word (brand name / key phrase):
  Color:         --color-brand (#E31E24)
  Display:       inline
```

### Subtext

```
Font:            --font-body, Regular (400)
Size:            1.125rem (18px)
Color:           rgba(255,255,255,0.82)
Max width:       440px
Margin top:      24px
Line height:     --leading-relaxed (1.625)
```

### Button group

```
Margin top:      40px
Gap:             16px
Direction:       row (desktop) / column (mobile, stacked full-width)
```

### Carousel Dots (if multiple slides)

```
Position:        bottom-left, 40px from bottom
Gap:             8px
Active dot:      --color-brand, 20px wide, 6px tall, rounded-full
Inactive dot:    rgba(255,255,255,0.4), 6px × 6px circle
Transition:      width 300ms --ease-sharp
```

---

## Animation — entrance sequence

All text enters on mount with staggered `opacity` + `translateY` transitions.

| Element | Delay | Duration | Transform |
|---------|-------|----------|-----------|
| Eyebrow / label | 0ms | 400ms | Y+16px → 0 |
| Headline line 1 | 80ms | 500ms | Y+20px → 0 |
| Headline line 2 | 160ms | 500ms | Y+20px → 0 |
| Subtext | 280ms | 400ms | Y+12px → 0 |
| Button group | 400ms | 350ms | Y+8px → 0 |

Use `@media (prefers-reduced-motion: reduce)` to disable all `transform`, keep `opacity` fade only.

---

## Component Code

```tsx
// components/sections/Hero.tsx
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface HeroProps {
  headline: string;
  headlineAccent?: string;        // word(s) to render in brand red
  subtext: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function Hero({
  headline,
  headlineAccent,
  subtext,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] max-h-[720px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — stronger on text side */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(13,13,13,0.78) 0%, rgba(13,13,13,0.45) 55%, rgba(13,13,13,0.18) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-28">
        <div className="max-w-[560px]">
          {/* Eyebrow */}
          <span
            className="inline-block font-label text-sm text-[--color-brand] tracking-[0.2em] uppercase mb-4"
            style={{ animation: "fadeUp 400ms 0ms both" }}
          >
            Premium Auto Care
          </span>

          {/* Headline */}
          <h1
            className="font-display font-extrabold uppercase tracking-tight text-white leading-[1.05]"
            style={{
              fontSize: "clamp(2.5rem, 5vw + 1rem, 5rem)",
              animation: "fadeUp 500ms 80ms both",
            }}
          >
            {headline}{" "}
            {headlineAccent && (
              <span className="text-[--color-brand]">{headlineAccent}</span>
            )}
          </h1>

          {/* Subtext */}
          <p
            className="mt-6 font-body text-lg text-white/80 leading-relaxed max-w-[440px]"
            style={{ animation: "fadeUp 400ms 280ms both" }}
          >
            {subtext}
          </p>

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              style={{ animation: "fadeUp 350ms 400ms both" }}
            >
              {primaryCta && (
                <Button variant="primary" size="lg" asChild>
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                  asChild
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Keyframes — add to globals.css */}
      {/* @keyframes fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          } */}
    </section>
  );
}
```

#### Usage

```tsx
<Hero
  headline="Beautiful Your Car With"
  headlineAccent="2F Auto37"
  subtext="Professional detailing and care for every vehicle. We restore, protect, and deliver — with zero shortcuts."
  imageSrc="/images/hero-bg.jpg"
  imageAlt="Mechanic working on a car in a modern garage"
  primaryCta={{ label: "Book Now", href: "/contact" }}
  secondaryCta={{ label: "Our Services", href: "/services" }}
/>
```

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Use a high-resolution photo (min 1920×1080) | Use low-res or heavily compressed images |
| Ensure overlay is at least rgba(13,13,13,0.55) | Place white text on unfiltered bright images |
| Keep headline ≤ 8 words | Write a 20-word headline — it won't read at large size |
| Use `priority` on the Image component | Lazy-load the hero image (it's above the fold) |
| Test text contrast on mobile (overlay is weaker at right) | Assume desktop overlay strength applies everywhere |
| Keep subtext to 2 sentences max | Dump a paragraph of copy into the hero |
