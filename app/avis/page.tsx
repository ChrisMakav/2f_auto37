import type { Metadata } from "next";
import { Star, ExternalLink, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Avis Clients",
  description:
    "Découvrez les avis clients de 2F AUTO37 — Note 5/5. Garage automobile apprécié pour sa transparence et son professionnalisme à Sainte-Maure-de-Touraine.",
};

const reviews = [
  {
    name: "Client vérifié",
    source: "Pages Jaunes",
    rating: 5,
    date: "2024",
    comment:
      "Garage très pro, ne change que ce qui est nécessaire. On vous explique clairement ce qui ne va pas avant de toucher à quoi que ce soit. Je recommande vivement !",
    initiale: "C",
  },
  {
    name: "Client vérifié",
    source: "Google",
    rating: 5,
    date: "2024",
    comment:
      "Très bon accueil, tarifs honnêtes et travail rapide. Tony est à l'écoute et prend le temps d'expliquer les interventions. Je reviendrai sans hésiter.",
    initiale: "A",
  },
  {
    name: "Client vérifié",
    source: "Google",
    rating: 5,
    date: "2024",
    comment:
      "Excellent garage ! Devis clair, délai respecté et facture sans mauvaise surprise. Exactement ce qu'on cherche dans un garage de proximité.",
    initiale: "M",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <Star
          key={i}
          size={16}
          className={i <= count ? "text-[#F5A623] fill-[#F5A623]" : "text-[#C8C8C8]"}
        />
      ))}
    </div>
  );
}

export default function AvisPage() {
  return (
    <div className="bg-[#F8F9FA]">
      {/* Header — global rating */}
      <div className="bg-[#1A1A2E] py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <p className="font-display font-semibold text-xs text-[#F5A623] uppercase tracking-[0.18em] mb-3">
                Avis Clients
              </p>
              <h1 className="font-display font-bold text-white mb-2" style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}>
                Ce que disent nos clients
              </h1>
              <p className="font-body text-white/65 max-w-md">
                La confiance de nos clients est notre meilleure récompense.
              </p>
            </div>
            {/* Global score */}
            <div className="flex flex-col items-center bg-white/8 border border-white/10 rounded-2xl px-10 py-8 text-center">
              <p className="font-display font-extrabold text-6xl text-[#F5A623] leading-none">5</p>
              <p className="font-display font-bold text-white text-lg leading-none mt-1">/ 5</p>
              <div className="flex items-center gap-1 mt-3 mb-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={20} className="text-[#F5A623] fill-[#F5A623]" />
                ))}
              </div>
              <p className="font-body text-xs text-white/45 uppercase tracking-wide">Note moyenne</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured quote */}
      <div className="bg-[#E94560]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-10">
          <blockquote className="text-center max-w-2xl mx-auto">
            <p className="font-body text-xl text-white italic leading-relaxed">
              &ldquo;Garage très pro, ne change que ce qui est nécessaire.&rdquo;
            </p>
            <footer className="mt-4 font-body text-sm text-white/65">
              — Avis Pages Jaunes vérifié ⭐⭐⭐⭐⭐
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Reviews grid */}
      <div className="py-16 mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeading
          eyebrow="Témoignages"
          heading="Ils nous font confiance"
          className="mb-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#E8E8E8] p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Stars count={r.rating} />
                <span className="font-display font-semibold text-xs text-[#8C8C8C] uppercase tracking-wide">
                  {r.source}
                </span>
              </div>
              <p className="font-body text-sm text-[#484848] leading-relaxed italic flex-1">
                &ldquo;{r.comment}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#F0F0F0]">
                <div className="w-9 h-9 rounded-full bg-[rgba(233,69,96,0.10)] flex items-center justify-center font-display font-bold text-[#E94560]">
                  {r.initiale}
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-[#1A1A2E]">{r.name}</p>
                  <p className="font-body text-xs text-[#8C8C8C]">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-[#1A1A2E] p-8 text-center">
          <MessageSquare size={32} strokeWidth={1.5} className="text-[#F5A623] mx-auto mb-4" />
          <h2 className="font-display font-bold text-xl text-white mb-2">
            Votre avis compte pour nous
          </h2>
          <p className="font-body text-white/65 text-sm mb-6 max-w-md mx-auto">
            Vous êtes venu chez nous ? Partagez votre expérience sur Google — cela aide d&apos;autres automobilistes à nous trouver.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-[#E94560] text-white font-display font-bold text-sm uppercase tracking-[0.08em] hover:bg-[#D03350] transition-colors duration-150"
          >
            <ExternalLink size={16} />
            Laisser un avis Google
          </a>
        </div>
      </div>
    </div>
  );
}
