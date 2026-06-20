import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";

export function ReviewBanner() {
  return (
    <section className="py-16 bg-[#1A1A2E] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} size={24} className="text-[#F5A623] fill-[#F5A623]" />
              ))}
              <span className="font-display font-extrabold text-white text-2xl ml-2">5 / 5</span>
            </div>
            <p className="font-body text-white/75 text-lg italic max-w-[480px]">
              &ldquo;Garage très pro, ne change que ce qui est nécessaire.&rdquo;
            </p>
            <p className="font-body text-[#8C8C8C] text-sm mt-2">— Avis client Pages Jaunes vérifié</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/avis"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#E94560] text-white font-display font-bold text-sm uppercase tracking-[0.08em] hover:bg-[#D03350] transition-colors duration-150"
            >
              Voir tous les avis
            </Link>
            <a
              href="https://n8n.srv1644260.hstgr.cloud/form/5dd68f36-2340-4802-8f2f-7807396c3615"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border-2 border-white/20 text-white font-display font-semibold text-sm uppercase tracking-[0.08em] hover:border-white/40 hover:bg-white/8 transition-all duration-150"
            >
              <ExternalLink size={16} />
              Laisser un avis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
