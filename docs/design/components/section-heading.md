# Section Heading

Anchors a content section with a consistent hierarchy: optional eyebrow label → main heading → optional supporting description. Applied to all major page sections.

---

## Anatomy

```
      [EYEBROW LABEL]          ← Label font, brand red, all-caps
  MAIN SECTION HEADING         ← Display font, large, uppercase
  ─────────────────────        ← Optional decorative divider (brand red, 48px wide)
  Optional supporting text     ← Body font, silver/iron, centered or left
  that describes the section.
```

---

## Variants

| Variant | Alignment | Background usage |
|---------|-----------|-----------------|
| `centered` | Center-aligned. Used for sections that introduce a grid below. | White or ash sections |
| `left` | Left-aligned. Used alongside content (e.g. "Why Choose Us" with text + photo). | Any |
| `centered-dark` | Center-aligned, colors inverted for dark section backgrounds. | Charcoal/carbon sections |
| `left-dark` | Left-aligned, inverted. | Dark backgrounds |

---

## Visual Specs

### Eyebrow

```
Font:            --font-label (Bebas Neue)
Size:            --text-sm (14px)
Color:           --color-brand (#E31E24)
Letter spacing:  --tracking-widest (0.2em)
Text transform:  uppercase (inherent to Bebas Neue)
Margin bottom:   12px
```

### Heading

```
Font:            --font-display, Bold (700)
Size:            clamp(1.875rem, 3vw + 0.5rem, 2.75rem) — fluid
Color (light):   --color-carbon
Color (dark):    --color-white
Text transform:  uppercase
Letter spacing:  --tracking-tight (-0.025em)
Line height:     --leading-tight (1.1)
Margin:          0
```

### Divider (optional)

```
Element:         <hr> or <div>
Width:           48px
Height:          3px
Background:      --color-brand
Border radius:   --radius-full
Margin:          16px auto (centered) / 16px 0 (left)
```

### Description

```
Font:            --font-body, Regular (400)
Size:            --text-base (16px) / --text-lg (18px) for wide layouts
Color (light):   --color-text-secondary (--color-iron)
Color (dark):    rgba(255,255,255,0.65)
Max width:       560px
Line height:     --leading-relaxed (1.625)
Margin top:      16px
```

### Section wrapper spacing

```
Margin bottom (before section content): 48px–64px
```

---

## Component Code

```tsx
// components/ui/SectionHeading.tsx
import { cn } from "@/lib/utils";

type HeadingAlign = "centered" | "left";
type HeadingTheme = "light" | "dark";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: HeadingAlign;
  theme?: HeadingTheme;
  divider?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "centered",
  theme = "light",
  divider = true,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "centered";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCentered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="font-label text-sm text-[--color-brand] tracking-[0.2em] mb-3">
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-display font-bold uppercase tracking-tight leading-[1.1]",
          isDark ? "text-white" : "text-[--color-carbon]"
        )}
        style={{ fontSize: "clamp(1.875rem, 3vw + 0.5rem, 2.75rem)" }}
      >
        {heading}
      </h2>

      {divider && (
        <div
          className={cn(
            "h-[3px] w-12 bg-[--color-brand] rounded-full mt-4",
            isCentered ? "mx-auto" : "ml-0"
          )}
        />
      )}

      {description && (
        <p
          className={cn(
            "font-body text-base leading-relaxed mt-4 max-w-[560px]",
            isDark ? "text-white/65" : "text-[--color-iron]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
```

#### Usage

```tsx
// Centered, light (default — most sections)
<SectionHeading
  eyebrow="Why Choose Us"
  heading="Precision Care, Every Time"
  description="Our certified technicians combine decades of experience with the latest equipment to deliver results that exceed expectations."
  align="centered"
/>

// Left-aligned in a two-column layout
<SectionHeading
  eyebrow="Our Promise"
  heading="Built On Trust"
  description="Every car that comes through our doors is treated like our own."
  align="left"
  divider={false}
/>

// Dark section
<SectionHeading
  eyebrow="Services"
  heading="What We Offer"
  align="centered"
  theme="dark"
/>
```

---

## Section Usage Pattern

```tsx
<section className="py-20 bg-[--color-ash]">
  <div className="mx-auto max-w-[1280px] px-6 lg:px-8">

    {/* Heading block */}
    <SectionHeading
      eyebrow="Our Services"
      heading="What We Do Best"
      description="Comprehensive automotive care from express washes to full paint correction."
      className="mb-14"
    />

    {/* Content (cards, grid, etc.) follows */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      ...
    </div>

  </div>
</section>
```

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Use `eyebrow` to provide context before the main heading | Put a question as the eyebrow — use a category noun |
| Keep heading ≤ 5 words for H2 | Write "Why You Should Choose Our Auto Spa Services Today" as an H2 |
| Include `divider` on first appearance of a heading style, skip on repeated instances | Apply divider to every single heading on the page |
| Center headings above content grids, left-align in split layouts | Left-align a heading above a centered grid |
| Pair eyebrow + heading — never use eyebrow alone | Show the brand-red eyebrow without the heading below it |
