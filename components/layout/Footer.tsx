import Link from "next/link";
import { Phone, Mail, MapPin, Clock, PhoneCall } from "lucide-react";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const companyLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos Services", href: "/services" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Avis Clients", href: "/avis" },
  { label: "Mentions Légales", href: "/mentions-legales" },
];

const serviceLinks = [
  { label: "Révision complète", href: "/services" },
  { label: "Freinage", href: "/services" },
  { label: "Diagnostic électronique", href: "/services" },
  { label: "Climatisation", href: "/services" },
  { label: "Géométrie / Parallélisme", href: "/services" },
];

const hours = [
  { day: "Lundi – Mardi", hours: "08h–12h / 14h–18h" },
  { day: "Mercredi", hours: "08h–12h" },
  { day: "Jeudi – Vendredi", hours: "08h–12h / 14h–18h" },
  { day: "Samedi", hours: "09h–13h" },
  { day: "Dimanche", hours: "Fermé" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Main band */}
      <div className="bg-[#1A1A2E]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#E94560]">
                  <span className="font-display font-extrabold text-white text-base">2F</span>
                </div>
                <div>
                  <span className="font-display font-extrabold text-white text-xl tracking-tight block leading-none">
                    AUTO37
                  </span>
                  <span className="font-body text-[11px] text-[#8C8C8C] uppercase tracking-wider">
                    Garage automobile
                  </span>
                </div>
              </div>

              <p className="font-body text-sm text-white/55 leading-relaxed mb-6 max-w-[240px]">
                Votre garage de confiance à Sainte-Maure-de-Touraine. Mécanique toutes marques, transparence garantie.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:0988095365"
                  className="flex items-center gap-2.5 text-sm text-[#8C8C8C] hover:text-white transition-colors duration-150"
                >
                  <Phone size={14} className="text-[#F5A623] flex-shrink-0" />
                  09 88 09 53 65
                </a>
                <a
                  href="mailto:mabilachrisna@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-[#8C8C8C] hover:text-white transition-colors duration-150"
                >
                  <Mail size={14} className="text-[#F5A623] flex-shrink-0" />
                  mabilachrisna@gmail.com
                </a>
                <div className="flex items-start gap-2.5 text-sm text-[#8C8C8C]">
                  <MapPin size={14} className="text-[#F5A623] flex-shrink-0 mt-0.5" />
                  <span>123 Chemin des Saulniers<br />37800 Sainte-Maure-de-Touraine</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                {[
                  { Icon: FacebookIcon, label: "Facebook" },
                  { Icon: InstagramIcon, label: "Instagram" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/8 text-[#8C8C8C] hover:text-[#F5A623] hover:bg-white/14 transition-colors duration-150"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-display font-bold text-sm text-white uppercase tracking-[0.1em] mb-5 pb-3 border-b-2 border-[#E94560] inline-block">
                Liens rapides
              </h3>
              <ul className="flex flex-col">
                {companyLinks.map(({ label, href }) => (
                  <li key={href + label}>
                    <Link
                      href={href}
                      className="font-body text-sm text-[#8C8C8C] hover:text-white transition-colors duration-150 leading-[2.2]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-bold text-sm text-white uppercase tracking-[0.1em] mb-5 pb-3 border-b-2 border-[#E94560] inline-block">
                Nos Services
              </h3>
              <ul className="flex flex-col">
                {serviceLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="font-body text-sm text-[#8C8C8C] hover:text-white transition-colors duration-150 leading-[2.2]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-display font-bold text-sm text-white uppercase tracking-[0.1em] mb-5 pb-3 border-b-2 border-[#E94560] inline-block">
                Horaires
              </h3>
              <div className="flex flex-col gap-2.5">
                {hours.map(({ day, hours: h }) => (
                  <div key={day} className="flex items-start gap-2">
                    <Clock size={12} className="text-[#F5A623] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-[#8C8C8C] block leading-snug">{day}</span>
                      <span className="text-xs text-white/45 block">{h}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/rendez-vous"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#E94560] text-white text-sm font-display font-bold uppercase tracking-wide hover:bg-[#D03350] transition-colors duration-150"
              >
                <PhoneCall size={16} />
                Prendre RDV
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#0D0D0D] border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-[12px] text-[#6B6B6B] text-center sm:text-left">
            © {year} 2F AUTO37 SARL — SIREN 984 070 870 — Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Mentions légales", href: "/mentions-legales" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }, i, arr) => (
              <span key={href} className="flex items-center gap-4">
                <Link
                  href={href}
                  className="font-body text-[12px] text-[#6B6B6B] hover:text-white transition-colors duration-150"
                >
                  {label}
                </Link>
                {i < arr.length - 1 && (
                  <span className="text-[#484848]">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
