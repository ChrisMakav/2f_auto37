# Badge / Tag

A compact, inline label for categories, status, service types, or promotional flags. Never used as a standalone call to action.

---

## Variants

| Variant | Use case |
|---------|----------|
| `brand` | Featured, new, or primary service type |
| `muted` | Secondary labels, categories, general tags |
| `outline` | Neutral, on light backgrounds |
| `dark` | Tags on dark card or dark section backgrounds |
| `success` | "Available", "Open Now", confirmation states |
| `warning` | "Limited slots", advisory notices |
| `error` | "Closed", error states |

---

## Visual Specs

### Shared (all variants)

```
Font:            --font-label (Bebas Neue) OR --font-body SemiBold (600)
  Use font-label for category/type badges.
  Use font-body for status badges (more readable at small sizes).
Size:            11px (xs) / 12px (sm) / 13px (default)
Text transform:  uppercase
Letter spacing:  --tracking-wider (0.1em)
Height:          20px (xs) / 22px (sm) / 24px (default)
Padding X:       8px (xs) / 10px (sm) / 12px (default)
Border radius:   --radius-full (9999px)
Display:         inline-flex, items-center, gap-1 (for icon+text)
```

### Variant colors

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| `brand` | `--color-brand` | `white` | none |
| `muted` | `--color-brand-muted` (rgba(227,30,36,0.15)) | `--color-brand` | none |
| `outline` | `transparent` | `--color-iron` | 1px `--color-smoke` |
| `dark` | `rgba(255,255,255,0.12)` | `white` | none |
| `success` | `rgba(22,163,74,0.12)` | `#16A34A` | none |
| `warning` | `rgba(217,119,6,0.12)` | `#D97706` | none |
| `error` | `rgba(220,38,38,0.12)` | `#DC2626` | none |

---

## Icon pairing (optional)

When a badge has an icon:
```
Icon size:   12px (default) / 10px (xs)
Icon:        must be Lucide React, consistent with main icon set
Position:    before the text label
```

---

## Component Code

```tsx
// components/ui/Badge.tsx
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type BadgeVariant = "brand" | "muted" | "outline" | "dark" | "success" | "warning" | "error";
type BadgeSize = "xs" | "sm" | "md";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: LucideIcon;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  brand:   "bg-[--color-brand] text-white",
  muted:   "bg-[--color-brand-muted] text-[--color-brand]",
  outline: "bg-transparent text-[--color-iron] border border-[--color-smoke]",
  dark:    "bg-white/12 text-white",
  success: "bg-green-600/12 text-green-600",
  warning: "bg-amber-600/12 text-amber-600",
  error:   "bg-red-600/12 text-red-600",
};

const sizeClasses: Record<BadgeSize, string> = {
  xs: "h-5 px-2 text-[11px] gap-1",
  sm: "h-[22px] px-2.5 text-[12px] gap-1",
  md: "h-6 px-3 text-[13px] gap-1.5",
};

export function Badge({
  label,
  variant = "muted",
  size = "md",
  icon: Icon,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        "font-label tracking-[0.1em] uppercase leading-none",
        "whitespace-nowrap select-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {Icon && <Icon size={size === "xs" ? 10 : 12} strokeWidth={2} />}
      {label}
    </span>
  );
}
```

#### Usage

```tsx
import { Star, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

// Service type label on a card
<Badge label="Popular" variant="brand" />

// Category tag
<Badge label="Detailing" variant="muted" />

// Status with icon
<Badge label="Open Now" variant="success" icon={CheckCircle} />

// Availability warning
<Badge label="Limited Slots" variant="warning" icon={Clock} />

// On dark card
<Badge label="Featured" variant="dark" />

// Neutral outline (on white bg)
<Badge label="Exterior" variant="outline" size="sm" />
```

---

## Placement Patterns

### On a service card

```
Position: top-right corner of card, absolute
Offset:   12px from top, 12px from right

<div className="relative">
  <ServiceCard ... />
  <Badge
    label="Popular"
    variant="brand"
    className="absolute top-3 right-3"
  />
</div>
```

### On a section heading (eyebrow alternative)

```
<Badge label="New Service" variant="muted" className="mb-3" />
<h2>Full Ceramic Coating</h2>
```

### On a blog card

```
<Badge label="Maintenance Tips" variant="outline" size="sm" />
```

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Keep badge text ≤ 2 words | Write "This Is A Very Popular Service" as badge text |
| Use `brand` variant sparingly — one per card max | Dot every item with a brand-colored badge |
| Use semantic variants (success/warning/error) for status | Use `brand` red for error states |
| Scale down to `xs` inside compact table cells | Use `md` badges inside dense data tables |
| Pair consistently — all cards in a grid should use the same size | Mix `xs` and `md` badges in the same grid |
