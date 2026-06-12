# Service Card

Displays a single offered service with an icon, title, short description, and optional CTA link. Used in grids of 3 or 4 across service sections.

---

## Anatomy

```
┌────────────────────────────┐
│                            │
│   ┌──────┐                 │
│   │ ICON │                 │  ← Icon wrapper (56px, brand accent)
│   └──────┘                 │
│                            │
│   SERVICE TITLE            │  ← Display font, H3
│                            │
│   Short description of     │  ← Body font, 2–3 lines max
│   the service offered.     │
│                            │
│   Read More →              │  ← Optional text link
│                            │
└────────────────────────────┘
```

---

## Variants

| Variant | Description |
|---------|-------------|
| `light` | White card on ash section background. Default. |
| `dark` | Dark steel (#2B2B2B) card on charcoal background. |
| `outlined` | White card with 1px smoke border. Lighter weight. |
| `featured` | Light card with red left border (4px). Highlighted service. |

---

## Visual Specs

### Card wrapper

```
Background (light):    --color-white
Background (dark):     --color-steel (#2B2B2B)
Border radius:         --radius-lg (12px)
Padding:               32px (--spacing-8) all sides
Shadow idle:           --shadow-sm
Shadow hover:          --shadow-md
Transform hover:       translateY(-4px)
Transition:            transform 200ms ease-out, box-shadow 200ms ease-out
Cursor:                default (pointer if entire card is linked)
```

### Icon area

```
See: icon-wrapper.md — use size "lg" variant (56px)
Icon color (light):    --color-brand
Icon color (dark):     --color-white
Background (light):    --color-brand-ghost (rgba(227,30,36,0.08))
Background (dark):     rgba(255,255,255,0.08)
Border radius:         --radius-md (8px)
Margin bottom:         24px
```

### Title

```
Font:            --font-display, Bold (700)
Size:            --text-xl (20px) / --text-2xl (24px) on wide cards
Color (light):   --color-carbon
Color (dark):    --color-white
Text transform:  uppercase
Letter spacing:  --tracking-tight
Margin top:      0
Margin bottom:   12px
```

### Description

```
Font:            --font-body, Regular (400)
Size:            --text-sm (14px) / --text-base (16px)
Color (light):   --color-text-secondary (--color-iron)
Color (dark):    rgba(255,255,255,0.65)
Line height:     --leading-relaxed (1.625)
Max lines:       3 (use line-clamp-3 for truncation)
Margin bottom:   20px
```

### Read More link

```
Font:            --font-body, SemiBold (600)
Size:            13px
Color:           --color-brand
Text transform:  uppercase
Letter spacing:  --tracking-wide (0.05em)
Transition:      gap 150ms ease-out (chevron slides right on hover)

→ Arrow: Chevron or → character, shifts 4px right on parent hover
```

### Featured variant (extra)

```
Border:          4px solid --color-brand, left side only
Padding left:    28px (to compensate for border)
```

---

## Grid layout

```tsx
// Standard 3-column service grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  <ServiceCard ... />
  <ServiceCard ... />
  <ServiceCard ... />
</div>

// 4-column (smaller cards)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

---

## Component Code

```tsx
// components/ui/ServiceCard.tsx
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconWrapper } from "./IconWrapper";

type CardVariant = "light" | "dark" | "outlined" | "featured";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  variant?: CardVariant;
  className?: string;
}

const variantCard: Record<CardVariant, string> = {
  light: "bg-white shadow-[--shadow-sm] hover:shadow-[--shadow-md]",
  dark: "bg-[--color-steel] shadow-[--shadow-sm] hover:shadow-[--shadow-dark]",
  outlined: "bg-white border border-[--color-smoke] hover:border-[--color-silver] hover:shadow-[--shadow-sm]",
  featured: "bg-white shadow-[--shadow-sm] hover:shadow-[--shadow-md] border-l-4 border-l-[--color-brand] pl-7",
};

const variantText: Record<CardVariant, { title: string; desc: string }> = {
  light:    { title: "text-[--color-carbon]",      desc: "text-[--color-iron]" },
  dark:     { title: "text-white",                 desc: "text-white/65" },
  outlined: { title: "text-[--color-carbon]",      desc: "text-[--color-iron]" },
  featured: { title: "text-[--color-carbon]",      desc: "text-[--color-iron]" },
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  variant = "light",
  className,
}: ServiceCardProps) {
  const isDark = variant === "dark";

  const content = (
    <div
      className={cn(
        "group flex flex-col rounded-[--radius-lg] p-8",
        "transition-[transform,box-shadow] duration-200 ease-out",
        "hover:-translate-y-1",
        variantCard[variant],
        variant === "featured" ? "" : "pl-8",
        className
      )}
    >
      <IconWrapper
        icon={Icon}
        size="lg"
        className={cn(
          "mb-6",
          isDark
            ? "bg-white/8 text-white"
            : "bg-[--color-brand-ghost] text-[--color-brand]"
        )}
      />

      <h3
        className={cn(
          "font-display font-bold uppercase tracking-tight mb-3",
          "text-xl",
          variantText[variant].title
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "font-body text-sm leading-relaxed line-clamp-3 mb-5",
          variantText[variant].desc
        )}
      >
        {description}
      </p>

      {href && (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 mt-auto",
            "font-body font-semibold text-[13px] uppercase tracking-[0.05em] text-[--color-brand]",
            "transition-[gap] duration-150"
          )}
        >
          Read More
          <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus-visible:outline-2 focus-visible:outline-[--color-brand] focus-visible:outline-offset-2 rounded-[--radius-lg]">
        {content}
      </Link>
    );
  }

  return content;
}
```

#### Usage

```tsx
import { Shield, Zap, Wrench } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";

<ServiceCard
  icon={Shield}
  title="Paint Protection"
  description="Full-body ceramic coating with 5-year UV warranty. Maintains showroom shine against weather, scratches, and contaminants."
  href="/services/paint-protection"
  variant="light"
/>

<ServiceCard
  icon={Zap}
  title="Express Detail"
  description="Interior and exterior clean in under 2 hours. Perfect for regular maintenance without the full-day commitment."
  href="/services/express"
  variant="featured"
/>
```

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Keep description to 2–3 lines (line-clamp-3) | Write 6 lines of description — it breaks the grid alignment |
| Use consistent icon size across a grid | Mix 24px and 48px icons in the same row |
| Use `dark` variant consistently in dark sections | Mix `light` and `dark` cards in the same grid |
| Apply `featured` variant to exactly one card in a group | Mark every card as featured |
| Make the whole card clickable via Link wrapper when `href` is set | Show a button inside a card that's already fully linked |
