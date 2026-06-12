"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, X } from "lucide-react";

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos Services", href: "/services" },
  { label: "Rendez-vous", href: "/rendez-vous" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Avis", href: "/avis" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Utility bar ── */}
      <div className="hidden md:block bg-[#1A1A2E] border-b border-white/10">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 h-10">
          <a
            href="tel:0988095365"
            className="flex items-center gap-2 text-[13px] text-[#8C8C8C] hover:text-white transition-colors duration-150"
          >
            <PhoneCall size={13} className="text-[#F5A623]" />
            09 88 09 53 65 — Lun–Ven 8h–18h · Sam 9h–13h
          </a>
          <div className="flex items-center gap-4">
            <span className="text-[12px] text-[#6B6B6B]">
              Garage indépendant · Toutes marques · Devis gratuit
            </span>
            <div className="flex items-center gap-3 ml-2">
              {[
                { Icon: FacebookIcon, label: "Facebook" },
                { Icon: InstagramIcon, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-[#6B6B6B] hover:text-[#F5A623] transition-colors duration-150"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main nav ── */}
      <header
        className={cn(
          "sticky top-0 z-[200] transition-[background-color,box-shadow] duration-300",
          scrolled
            ? "bg-[#141428] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-[#1A1A2E]"
        )}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#E94560]">
              <span className="font-display font-extrabold text-white text-sm leading-none">
                2F
              </span>
            </div>
            <div className="leading-none">
              <span className="font-display font-extrabold text-white text-lg tracking-tight block">
                AUTO37
              </span>
              <span className="font-body text-[10px] text-[#8C8C8C] tracking-wider uppercase block">
                Garage automobile
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "relative px-3 py-1.5 font-display font-semibold text-[13px] uppercase tracking-[0.05em] rounded-md",
                    "transition-colors duration-150",
                    "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full",
                    "after:bg-[#E94560] after:scale-x-0 after:origin-left",
                    "after:transition-transform after:duration-200 after:[transition-timing-function:cubic-bezier(0.2,0,0,1)]",
                    isActive
                      ? "text-[#E94560] after:scale-x-100"
                      : "text-white/85 hover:text-white hover:after:scale-x-100"
                  )}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="tel:0988095365"
              className={cn(
                "ml-3 flex items-center gap-2 px-4 py-2 rounded-lg",
                "bg-[#E94560] text-white text-[13px] font-display font-semibold uppercase tracking-[0.05em]",
                "hover:bg-[#D03350] transition-colors duration-150"
              )}
            >
              <PhoneCall size={14} />
              Appeler
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu de navigation"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[300] bg-[#0D0D0D] flex flex-col px-6 py-6"
          style={{ animation: "slideInRight 250ms cubic-bezier(0.2,0,0,1) both" }}
        >
          <div className="flex items-center justify-between mb-10">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#E94560]">
                <span className="font-display font-extrabold text-white text-sm">2F</span>
              </div>
              <span className="font-display font-extrabold text-white text-lg tracking-tight">
                AUTO37
              </span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white p-2 hover:text-[#E94560] transition-colors"
              aria-label="Fermer le menu"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map(({ label, href }, i) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "font-display font-bold text-2xl py-3 border-b border-white/8",
                  "transition-colors duration-150",
                  pathname === href ? "text-[#E94560]" : "text-white hover:text-[#E94560]"
                )}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-white/10">
            <a
              href="tel:0988095365"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#E94560] text-white font-display font-bold text-lg uppercase tracking-wide"
            >
              <PhoneCall size={22} />
              09 88 09 53 65
            </a>
            <p className="text-center text-[#6B6B6B] text-xs mt-3">
              123 Chemin des Saulniers, 37800 Sainte-Maure-de-Touraine
            </p>
          </div>
        </div>
      )}
    </>
  );
}
