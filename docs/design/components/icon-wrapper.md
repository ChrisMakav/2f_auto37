# Icon Wrapper

A consistent container for Lucide React icons used in service cards, feature lists, and callout sections. Ensures uniform sizing, color, and background treatment across the UI.

---

## Variants

| Variant | Use case |
|---------|----------|
| `brand` | Primary service icons on light backgrounds. Red icon, light red ghost bg. |
| `brand-solid` | High-emphasis icons. White icon on brand red background. |
| `dark` | Icons on dark card/section backgrounds. White icon on subtle dark bg. |
| `neutral` | Default, uncolored icons for inline/list use. |
| `outlined` | Icon with a visible border, no fill. Minimal aesthetic. |

---

## Sizes

| Size | Container | Icon | Border radius | Use |
|------|-----------|------|---------------|-----|
| `sm` | 32px | 16px | --radius (6px) | Inline lists, badges |
| `md` | 44px | 20px | --radius-md (8px) | Card sub-items |
| `lg` | 56px | 24px | --radius-lg (12px) | Service cards (primary icon) |
| `xl` | 72px | 32px | --radius-xl (16px) | "Why Choose Us" features |
| `2xl` | 96px | 40px | --radius-2xl (24px) | Hero/feature callout |

---

## Visual Specs

### Shared

```
Display:         inline-flex, items-center, justify-center
Flex-shrink:     0 (never shrinks in flex containers)
Transition:      background-color, color 150ms ease-out
```

### brand

```
Background:      --color-brand-ghost (rgba(227,30,36,0.08))
Icon color:      --color-brand
Hover (if interactive): background --color-brand-muted (rgba(227,30,36,0.15))
```

### brand-solid

```
Background:      --color-brand
Icon color:      white
Shadow:          --shadow-brand
Hover:           background --color-brand-hover
```

### dark

```
Background:      rgba(255,255,255,0.08)
Icon color:      white
Hover:           rgba(255,255,255,0.14)
```

### neutral

```
Background:      --color-ash (#F2EFEC)
Icon color:      --color-iron
Hover:           --color-smoke
```

### outlined

```
Background:      transparent
Border:          1.5px solid --color-smoke
Icon color:      --color-iron
Hover border:    --color-silver
Hover icon:      --color-brand
```

---

## Component Code

```tsx
// components/ui/IconWrapper.tsx
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconVariant = "brand" | "brand-solid" | "dark" | "neutral" | "outlined";
type IconSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface IconWrapperProps {
  icon: LucideIcon;
  variant?: IconVariant;
  size?: IconSize;
  interactive?: boolean;   // adds hover states + cursor pointer
  className?: string;
  "aria-label"?: string;
}

const variantClasses: Record<IconVariant, string> = {
  "brand":       "bg-[--color-brand-ghost] text-[--color-brand] hover:bg-[--color-brand-muted]",
  "brand-solid": "bg-[--color-brand] text-white shadow-[--shadow-brand] hover:bg-[--color-brand-hover]",
  "dark":        "bg-white/8 text-white hover:bg-white/14",
  "neutral":     "bg-[--color-ash] text-[--color-iron] hover:bg-[--color-smoke]",
  "outlined":    "border border-[--color-smoke] text-[--color-iron] hover:border-[--color-silver] hover:text-[--color-brand]",
};

const sizeConfig: Record<IconSize, { container: string; iconSize: number; radius: string }> = {
  "sm":  { container: "h-8 w-8",  iconSize: 16, radius: "rounded-[--radius]" },
  "md":  { container: "h-11 w-11", iconSize: 20, radius: "rounded-[--radius-md]" },
  "lg":  { container: "h-14 w-14", iconSize: 24, radius: "rounded-[--radius-lg]" },
  "xl":  { container: "h-18 w-18", iconSize: 32, radius: "rounded-[--radius-xl]" },
  "2xl": { container: "h-24 w-24", iconSize: 40, radius: "rounded-[--radius-2xl]" },
};

export function IconWrapper({
  icon: Icon,
  variant = "brand",
  size = "lg",
  interactive = false,
  className,
  "aria-label": ariaLabel,
}: IconWrapperProps) {
  const { container, iconSize, radius } = sizeConfig[size];

  return (
    <span
      role={interactive ? "img" : undefined}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex flex-shrink-0 items-center justify-center",
        "transition-[background-color,color,border-color] duration-150 ease-out",
        container,
        radius,
        variantClasses[variant],
        interactive && "cursor-pointer",
        className
      )}
    >
      <Icon size={iconSize} strokeWidth={1.5} aria-hidden="true" />
    </span>
  );
}
```

#### Usage

```tsx
import { Wrench, Shield, Zap, Star } from "lucide-react";
import { IconWrapper } from "@/components/ui/IconWrapper";

// Standard service card icon
<IconWrapper icon={Wrench} variant="brand" size="lg" />

// On dark background
<IconWrapper icon={Shield} variant="dark" size="lg" />

// Featured / solid CTA icon
<IconWrapper icon={Star} variant="brand-solid" size="xl" />

// Inline with text in a list
<div className="flex items-center gap-3">
  <IconWrapper icon={Zap} variant="brand" size="sm" />
  <span>24-hour turnaround</span>
</div>

// Outlined minimal style
<IconWrapper icon={Wrench} variant="outlined" size="md" />
```

---

## Composition Patterns

### Feature list item

```tsx
// "Why Choose Us" list
<li className="flex items-start gap-4">
  <IconWrapper icon={CheckCircle} variant="brand" size="md" className="mt-0.5" />
  <div>
    <h4 className="font-display font-semibold uppercase text-lg text-carbon mb-1">
      Expert Mechanics
    </h4>
    <p className="font-body text-sm text-iron leading-relaxed">
      Certified and experienced in all vehicle makes and models.
    </p>
  </div>
</li>
```

### Service card (standard usage)

```tsx
// Inside ServiceCard — the icon is always at the top
<div className="flex flex-col p-8 gap-0">
  <IconWrapper icon={icon} variant="brand" size="lg" className="mb-6" />
  <h3>...</h3>
  <p>...</p>
</div>
```

### Stats/callout strip

```tsx
// Horizontal strip with large icons + number + label
<div className="flex flex-col items-center gap-3">
  <IconWrapper icon={Users} variant="brand-solid" size="2xl" />
  <p className="font-display font-extrabold text-4xl text-carbon">500+</p>
  <p className="font-body text-sm text-silver uppercase tracking-wide">Happy Clients</p>
</div>
```

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Use `lg` for all service card icons consistently | Mix `md` and `xl` icons in the same card grid |
| Pair `brand` wrapper with light card backgrounds | Use `brand` on `--color-charcoal` backgrounds (use `dark` instead) |
| Set `strokeWidth={1.5}` on all Lucide icons | Default to `strokeWidth={2}` on large icons — it looks heavy |
| Use `outlined` for minimal / secondary UI areas | Use `outlined` in hero or feature sections — it reads too weak |
| Add `aria-label` when `interactive` is true | Omit accessible labels on icon-only interactive elements |
