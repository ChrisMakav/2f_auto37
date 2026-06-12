# Navbar

The site's primary navigation. Split into two horizontal bands: a slim utility bar and the main branded nav. Sticky on scroll.

---

## Anatomy

```
┌────────────────────────────────────────────────────────────────┐
│  📞 Call Us +01 234 567 89    [f] [ig] [tw] [g+] [pin]        │  ← Utility Bar (40px)
├────────────────────────────────────────────────────────────────┤
│  [LOGO]      HOME   ABOUT US   SERVICE   PAGES   BLOG  CONTACT │  ← Main Nav (72px)
└────────────────────────────────────────────────────────────────┘
```

---

## Visual Specs

### Utility Bar

```
Height:       40px
Background:   --color-charcoal (#1C1C1C)
Text color:   --color-silver (#8C8C8C)
Text size:    13px
Font:         --font-body, Regular (400)
Phone icon:   16px, --color-brand
Social icons: 16px, --color-silver → hover: --color-brand
Social icon gap: 16px
Padding X:    container (mx-auto max-w-[1280px] px-6)
```

### Main Navigation Bar

```
Height:       72px
Background:   --color-brand (#E31E24)
Text color:   --color-white
Text size:    14px (label font stack)
Font:         --font-display, SemiBold (600)
Text transform: uppercase
Letter spacing: --tracking-wide (0.05em)
Padding X:    container (mx-auto max-w-[1280px] px-6)
```

### Logo

```
Width:        140px (max)
Height:       auto (constrained to 48px)
Position:     left-aligned in main nav
Background:   white card behind logo for contrast on red
Logo padding: 8px 12px
Logo radius:  --radius-xs (2px)
```

### Nav Links

```
Default:      white, no underline
Hover:        white + underline (2px, slides from left)
Active/current: white + full underline visible
Gap between items: 32px (lg) / 24px (md)
```

#### Active indicator animation

```css
/* The underline slides in from the left on hover */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: white;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 200ms var(--ease-sharp);
}
.nav-link:hover::after,
.nav-link[aria-current="page"]::after {
  transform: scaleX(1);
}
```

### Sticky Behavior

```
Position: sticky top-0
Z-index:  --z-sticky (200)

On scroll > 0px:
  Main nav background: --color-charcoal (transition: 300ms)
  Box shadow: --shadow-dark
  Logo: no white card (show on dark)
```

### Mobile (< 768px)

```
Utility bar:    hidden
Single bar height: 64px
Background:     --color-charcoal
Logo:           left-aligned, 120px wide
Hamburger icon: right-aligned, 24px, white
```

#### Mobile menu (full-screen drawer)

```
Background:  --color-carbon (#0D0D0D)
Position:    fixed, full viewport
Z-index:     --z-overlay (300)
Animation:   slide in from right, 300ms --ease-sharp

Nav links in mobile:
  Size:       --text-3xl (30px)
  Font:       --font-display, Bold
  Color:      white
  Active:     --color-brand
  Stagger:    50ms delay per item
```

---

## Component Code

```tsx
// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall, Menu, X, Facebook, Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Service", href: "/services" },
  { label: "Pages", href: "/pages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden md:block bg-[--color-charcoal]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 h-10">
          <a
            href="tel:+01234567890"
            className="flex items-center gap-2 text-[13px] text-[--color-silver] hover:text-white transition-colors duration-150"
          >
            <PhoneCall size={14} className="text-[--color-brand]" />
            Call Us +01 234 567 89
          </a>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link"
                className="text-[--color-silver] hover:text-[--color-brand] transition-colors duration-150">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-[200] transition-[background-color,box-shadow] duration-300",
          scrolled
            ? "bg-[--color-charcoal] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-[--color-brand]"
        )}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 h-[72px] md:h-18">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="bg-white rounded-[2px] px-3 py-2">
              {/* Replace with <Image src="/logo.svg" ... /> */}
              <span className="font-display font-bold text-xl text-[--color-brand] tracking-tighter">
                2F AUTO37
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative font-display font-semibold text-sm uppercase tracking-[0.05em] text-white",
                  "after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-full",
                  "after:bg-white after:scale-x-0 after:origin-left",
                  "after:transition-transform after:duration-200 after:[transition-timing-function:cubic-bezier(0.2,0,0,1)]",
                  "hover:after:scale-x-100"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[300] bg-[--color-carbon] flex flex-col px-6 py-8">
          <div className="flex items-center justify-between mb-12">
            <span className="font-display font-bold text-xl text-[--color-brand]">2F AUTO37</span>
            <button onClick={() => setMenuOpen(false)} className="text-white" aria-label="Close menu">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map(({ label, href }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-display font-bold text-3xl text-white hover:text-[--color-brand] transition-colors duration-150"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+01234567890"
            className="mt-auto flex items-center gap-3 text-[--color-silver]"
          >
            <PhoneCall size={18} className="text-[--color-brand]" />
            +01 234 567 89
          </a>
        </div>
      )}
    </>
  );
}
```

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Keep nav link count ≤ 6 | Add 8+ links to the main nav |
| Show utility bar only on desktop | Show it on mobile (too cluttered) |
| Keep CTA as last link if included | Put the CTA in the middle of the link group |
| Transition color smoothly on scroll | Hard-swap background without transition |
| Close mobile menu on link click | Leave the drawer open after navigation |
