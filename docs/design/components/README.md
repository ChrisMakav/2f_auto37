# 2F Auto37 — Component Library

Component specs for every UI building block in the 2F Auto37 design system.
Each spec covers: purpose, variants, visual specs, code example, and do's/don'ts.

## Components

| Component | File | Status |
|-----------|------|--------|
| [Button](./button.md) | `components/ui/Button.tsx` | ✅ Specced |
| [Navbar](./navbar.md) | `components/layout/Navbar.tsx` | ✅ Specced |
| [Hero](./hero.md) | `components/sections/Hero.tsx` | ✅ Specced |
| [Service Card](./service-card.md) | `components/cards/ServiceCard.tsx` | ✅ Specced |
| [Section Heading](./section-heading.md) | `components/ui/SectionHeading.tsx` | ✅ Specced |
| [Footer](./footer.md) | `components/layout/Footer.tsx` | ✅ Specced |
| [Badge](./badge.md) | `components/ui/Badge.tsx` | ✅ Specced |
| [Icon Wrapper](./icon-wrapper.md) | `components/ui/IconWrapper.tsx` | ✅ Specced |

## Suggested File Structure

```
app/
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── ServicesSection.tsx
│   └── WhyChooseUsSection.tsx
└── ui/
    ├── Button.tsx
    ├── Badge.tsx
    ├── IconWrapper.tsx
    ├── ServiceCard.tsx
    └── SectionHeading.tsx
```

## Design Token Import

All components import their visual values from the design token layer defined
in `docs/design/tokens.css` (reference) and applied via `app/globals.css`
using Tailwind CSS v4's `@theme` directive.

See [tokens.css](../tokens.css) for the full token list.
