import Link from "next/link";
import { PhoneCall, CalendarDays } from "lucide-react";

interface HeroProps {
  headline: string;
  headlineAccent?: string;
  subtext: string;
}

export function Hero({ headline, headlineAccent, subtext }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#1A1A2E]">
      {/* Background pattern / texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Gradient overlay — right side glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 75% 50%, rgba(233,69,96,0.18) 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 20% 80%, rgba(245,166,35,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Decorative circle */}
      <div className="absolute right-[-80px] top-[-80px] w-[500px] h-[500px] rounded-full border border-white/[0.04] hidden lg:block" />
      <div className="absolute right-[60px] top-[60px] w-[300px] h-[300px] rounded-full border border-white/[0.06] hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-28 lg:py-32">
        <div className="max-w-[640px]">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-6"
            style={{ animation: "fadeUp 400ms 0ms both" }}
          >
            <div className="h-px w-8 bg-[#F5A623]" />
            <span className="font-display font-semibold text-xs text-[#F5A623] uppercase tracking-[0.2em]">
              Garage automobile indépendant
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-extrabold text-white leading-[1.05] mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw + 0.5rem, 4.5rem)",
              animation: "fadeUp 550ms 80ms both",
            }}
          >
            {headline}
            {headlineAccent && (
              <>
                {" "}
                <span className="text-[#E94560]">{headlineAccent}</span>
              </>
            )}
          </h1>

          {/* Subtext */}
          <p
            className="font-body text-lg text-white/75 leading-relaxed max-w-[500px] mb-10"
            style={{ animation: "fadeUp 450ms 200ms both" }}
          >
            {subtext}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: "fadeUp 400ms 320ms both" }}
          >
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-xl bg-[#E94560] text-white font-display font-bold text-sm uppercase tracking-[0.08em] hover:bg-[#D03350] hover:shadow-[0_8px_30px_rgba(233,69,96,0.4)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-150"
            >
              <CalendarDays size={18} />
              Prendre rendez-vous
            </Link>
            <a
              href="tel:0988095365"
              className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-xl border-2 border-white/25 text-white font-display font-bold text-sm uppercase tracking-[0.08em] hover:border-white/50 hover:bg-white/8 transition-all duration-150"
            >
              <PhoneCall size={18} />
              09 88 09 53 65
            </a>
          </div>

          {/* Trust mini-stats */}
          <div
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10"
            style={{ animation: "fadeUp 400ms 440ms both" }}
          >
            {[
              { value: "2024", label: "Création du garage" },
              { value: "5/5", label: "Note clients" },
              { value: "100%", label: "Toutes marques" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display font-extrabold text-3xl text-[#E94560] leading-none">
                  {value}
                </p>
                <p className="font-body text-sm text-white/55 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
