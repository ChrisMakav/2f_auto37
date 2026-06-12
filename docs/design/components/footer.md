# Footer

Full-width footer divided into a main content band (dark background, multi-column) and a slim copyright bar beneath it.

---

## Anatomy

```
┌────────────────────────────────────────────────────────────────┐
│  2F AUTO37                    About      Services    Contact    │  ← Main footer (dark)
│  [tagline]                    ─────      ────────    ───────    │
│                               Link       Link        Phone      │
│  Phone  ·  Email              Link       Link        Email      │
│                               Link       Link        Address    │
│  [f] [ig] [tw]                                                  │
├────────────────────────────────────────────────────────────────┤
│  © 2024 2F Auto37. All rights reserved.    Privacy · Terms     │  ← Copyright bar
└────────────────────────────────────────────────────────────────┘
```

---

## Visual Specs

### Main Footer Band

```
Background:      --color-charcoal (#1C1C1C)
Padding Y:       80px (py-20)
Padding X:       container
```

### Columns Layout

```
Mobile:   1 column (stacked)
md:       2 columns
lg:       4 columns (logo+about | links | links | contact)
Gap:      40px (gap-10) row / 48px column gap on desktop
```

### Logo / Brand column (col 1 of 4)

```
Logo:           same as navbar logo — white bg card, brand text
Width:          120px

Tagline:
  Font:         --font-body, Regular (400)
  Size:         --text-sm (14px)
  Color:        rgba(255,255,255,0.55)
  Margin top:   16px
  Max width:    220px
  Line height:  --leading-relaxed

Contact summary:
  Margin top:   24px
  Icon:         14px, --color-brand
  Text:         14px, --color-silver
  Gap:          8px between icon+text

Social icons:
  Margin top:   24px
  Size:         18px
  Color:        --color-silver → hover: --color-brand
  Gap:          16px
```

### Link Columns (col 2 & 3)

```
Column heading:
  Font:         --font-display, Bold (700)
  Size:         --text-base (16px)
  Color:        --color-white
  Text transform: uppercase
  Letter spacing: --tracking-wide
  Margin bottom: 20px
  Border bottom: 2px solid --color-brand, width 32px (inline-block)

Links:
  Font:         --font-body, Regular (400)
  Size:         --text-sm (14px)
  Color:        --color-silver → hover: --color-white
  Line height:  2.0 (generous for touch)
  Transition:   color 150ms ease-out
  Padding left on hover: 4px slide-in (optional)
```

### Contact Column (col 4)

```
Same heading treatment as link columns.

Items:
  Icon:         16px, --color-brand
  Text:         14px, --color-silver
  Line 2 (address/hours): 13px, rgba(255,255,255,0.45)
  Gap (icon+text): 10px
  Gap (rows):   16px
```

### Copyright Bar

```
Background:     --color-carbon (#0D0D0D)
Height:         52px
Border top:     1px solid rgba(255,255,255,0.08)

Left:
  Text:         "© 2024 2F Auto37. All rights reserved."
  Font:         --font-body, 13px, --color-graphite

Right:
  Links:        "Privacy Policy" · "Terms of Service"
  Font:         --font-body, 13px, --color-silver
  Separator:    · (middot), --color-iron
  Hover:        --color-white
```

---

## Component Code

```tsx
// components/layout/Footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Full Detail", href: "/services/full-detail" },
    { label: "Express Wash", href: "/services/express" },
    { label: "Paint Protection", href: "/services/paint-protection" },
    { label: "Interior Cleaning", href: "/services/interior" },
  ],
};

export function Footer() {
  return (
    <footer>
      {/* Main band */}
      <div className="bg-[--color-charcoal]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* Brand column */}
            <div>
              <div className="inline-block bg-white rounded-[2px] px-3 py-2 mb-4">
                <span className="font-display font-bold text-lg text-[--color-brand] tracking-tighter">
                  2F AUTO37
                </span>
              </div>
              <p className="font-body text-sm text-white/55 leading-relaxed max-w-[220px]">
                Premium automotive care with precision and pride. Your car deserves the best.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a href="tel:+01234567890"
                  className="flex items-center gap-2 text-sm text-[--color-silver] hover:text-white transition-colors duration-150">
                  <Phone size={14} className="text-[--color-brand] flex-shrink-0" />
                  +01 234 567 89
                </a>
                <a href="mailto:info@2fauto37.com"
                  className="flex items-center gap-2 text-sm text-[--color-silver] hover:text-white transition-colors duration-150">
                  <Mail size={14} className="text-[--color-brand] flex-shrink-0" />
                  info@2fauto37.com
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social"
                    className="text-[--color-silver] hover:text-[--color-brand] transition-colors duration-150">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Company links */}
            <div>
              <h3 className="font-display font-bold text-base text-white uppercase tracking-[0.05em] mb-5 pb-3 border-b-2 border-b-[--color-brand] inline-block">
                Company
              </h3>
              <ul className="flex flex-col">
                {footerLinks.company.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href}
                      className="font-body text-sm text-[--color-silver] hover:text-white transition-colors duration-150 leading-loose">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h3 className="font-display font-bold text-base text-white uppercase tracking-[0.05em] mb-5 pb-3 border-b-2 border-b-[--color-brand] inline-block">
                Services
              </h3>
              <ul className="flex flex-col">
                {footerLinks.services.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href}
                      className="font-body text-sm text-[--color-silver] hover:text-white transition-colors duration-150 leading-loose">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-bold text-base text-white uppercase tracking-[0.05em] mb-5 pb-3 border-b-2 border-b-[--color-brand] inline-block">
                Contact
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-2.5">
                  <Phone size={16} className="text-[--color-brand] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[--color-silver]">+01 234 567 89</p>
                    <p className="text-xs text-white/45">Mon–Sat, 8am–6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail size={16} className="text-[--color-brand] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[--color-silver]">info@2fauto37.com</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[--color-brand] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[--color-silver]">37 Garage Lane</p>
                    <p className="text-xs text-white/45">Detroit, MI 48201</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[--color-carbon] border-t border-white/[0.08]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 h-[52px] flex items-center justify-between">
          <p className="font-body text-[13px] text-[--color-graphite]">
            © {new Date().getFullYear()} 2F Auto37. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map(({ label, href }, i, arr) => (
              <span key={href} className="flex items-center gap-4">
                <Link href={href}
                  className="font-body text-[13px] text-[--color-silver] hover:text-white transition-colors duration-150">
                  {label}
                </Link>
                {i < arr.length - 1 && (
                  <span className="text-[--color-iron]">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|------|---------|
| Keep each link column to ≤ 5 links | Dump 12 links in one column |
| Update the copyright year dynamically (`new Date().getFullYear()`) | Hardcode the year |
| Use the same logo treatment as the navbar | Create a completely different logo variant |
| Group links by category with clear column headings | Mix company and service links in the same column |
| Keep contact info current — use real values | Leave placeholder `lorem ipsum` contact details live |
