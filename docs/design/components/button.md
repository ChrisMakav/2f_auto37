# Button

Triggers an action or navigates to a destination. The most important interactive element in the system.

---

## Variants

| Variant | When to use |
|---------|-------------|
| `primary` | The single most important CTA on a section. Max one per view. |
| `secondary` | Secondary actions alongside a primary. Outlined style. |
| `ghost` | Tertiary actions, nav items, low-prominence actions on dark surfaces. |
| `danger` | Destructive actions (delete, cancel booking). Requires confirmation. |
| `icon` | Icon-only actions. Always paired with an accessible `aria-label`. |

---

## Visual Specs

### Primary

```
Background:     --color-brand      (#E31E24)
Background hover: --color-brand-hover (#C0181E)
Background active: --color-brand-active (#9E1317)
Text:           --color-white
Font:           --font-display, SemiBold (600)
Text transform: uppercase
Letter spacing: --tracking-wider (0.1em)
Height:         48px (default) / 40px (sm) / 56px (lg)
Padding:        0 24px (default) / 0 16px (sm) / 0 32px (lg)
Border radius:  --radius-sm (4px)
Border:         none
Shadow idle:    none
Shadow hover:   --shadow-brand
Transition:     background 150ms ease-out, box-shadow 150ms ease-out, transform 150ms ease-out
Transform hover: scale(1.02)
```

### Secondary

```
Background:       transparent
Border:           2px solid --color-brand
Text:             --color-brand
Background hover: --color-brand
Text hover:       --color-white
(all other size/font tokens match Primary)
```

### Ghost

```
Background:       transparent
Border:           2px solid --color-smoke (#C8C8C8)
Text:             --color-text-secondary
Background hover: --color-ash
Border hover:     --color-silver
(for ghost on dark backgrounds: border --color-iron, text --color-silver)
```

### Danger

```
Background:       #DC2626
Background hover: #B91C1C
Text:             --color-white
(same size/font/radius as Primary)
```

### Icon (icon-only)

```
Width/Height:     40px (default) / 32px (sm) / 48px (lg)
Border radius:    --radius (6px) or --radius-full for round
Background:       transparent
Border:           2px solid --color-smoke
Color:            --color-iron
Background hover: --color-ash
Color hover:      --color-brand
```

---

## Sizes

| Size | Height | H-padding | Font size | When |
|------|--------|-----------|-----------|------|
| `sm` | 36px | 16px | 13px | Compact UIs, table actions |
| `md` | 48px | 24px | 14px | Default — most contexts |
| `lg` | 56px | 32px | 16px | Hero CTAs, prominent sections |

---

## States

| State | Visual change |
|-------|--------------|
| Default | Base styles |
| Hover | Background shift + `scale(1.02)` + shadow |
| Focus-visible | 2px `--color-brand` outline, 2px offset |
| Active/Pressed | Darker background + `scale(0.99)` |
| Loading | Spinner replaces text; button width locked; `pointer-events: none` |
| Disabled | `opacity: 0.45`; `cursor: not-allowed`; no hover effects |

---

## Component Code

```tsx
// components/ui/Button.tsx
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "icon";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-[--color-brand] text-white uppercase tracking-[0.1em]",
    "hover:bg-[--color-brand-hover] hover:shadow-[--shadow-brand] hover:scale-[1.02]",
    "active:bg-[--color-brand-active] active:scale-[0.99]",
    "font-display font-semibold",
  ].join(" "),
  secondary: [
    "bg-transparent border-2 border-[--color-brand] text-[--color-brand] uppercase tracking-[0.1em]",
    "hover:bg-[--color-brand] hover:text-white hover:scale-[1.02]",
    "active:scale-[0.99]",
    "font-display font-semibold",
  ].join(" "),
  ghost: [
    "bg-transparent border-2 border-[--color-smoke] text-[--color-text-secondary]",
    "hover:bg-[--color-ash] hover:border-[--color-silver]",
    "active:scale-[0.99]",
  ].join(" "),
  danger: [
    "bg-red-600 text-white uppercase tracking-[0.1em]",
    "hover:bg-red-700 hover:scale-[1.02]",
    "active:scale-[0.99]",
    "font-display font-semibold",
  ].join(" "),
  icon: [
    "bg-transparent border-2 border-[--color-smoke] text-[--color-iron]",
    "hover:bg-[--color-ash] hover:border-[--color-silver] hover:text-[--color-brand]",
    "flex items-center justify-center",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading, className, children, disabled, ...props }, ref) => {
    const isIcon = variant === "icon";
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          // Base
          "inline-flex items-center justify-center gap-2 rounded-[--radius-sm]",
          "font-body transition-[background-color,box-shadow,transform,border-color,color]",
          "duration-150 ease-out cursor-pointer select-none",
          "focus-visible:outline-2 focus-visible:outline-[--color-brand] focus-visible:outline-offset-2",
          "disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none",
          // Variant
          variantClasses[variant],
          // Size
          isIcon ? iconSizeClasses[size] : sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
```

---

## Usage Examples

```tsx
// Primary CTA
<Button variant="primary" size="lg">Book Now</Button>

// Secondary with icon
<Button variant="secondary">
  <PhoneIcon size={16} />
  Call Us
</Button>

// Ghost on dark background
<Button variant="ghost" className="border-[--color-iron] text-[--color-silver] hover:border-[--color-silver]">
  Learn More
</Button>

// Loading state
<Button variant="primary" loading>Submitting...</Button>

// As an anchor (use <a> or Next.js Link wrapper)
<Button variant="primary" asChild>
  <Link href="/services">View Services</Link>
</Button>
```

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| One `primary` button per section | Stack two primary buttons side by side |
| Keep label ≤ 3 words for CTAs | Write paragraphs in buttons |
| Use `lg` size for hero CTAs | Mix `lg` and `sm` in the same button group |
| Always provide `aria-label` on icon buttons | Omit accessible labels on icon-only variants |
| Show loading state during async actions | Disable buttons without visual feedback |
