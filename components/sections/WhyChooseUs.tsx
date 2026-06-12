import { Eye, Award, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconWrapper } from "@/components/ui/IconWrapper";

const reasons = [
  {
    icon: Eye,
    title: "Transparence totale",
    description:
      "Vous êtes informé à chaque étape. Devis détaillé avant toute intervention, aucune surprise sur la facture. On ne change que ce qui est nécessaire.",
  },
  {
    icon: Award,
    title: "Expertise reconnue",
    description:
      "Tony Fonseca et son équipe cumulent des années d'expérience en mécanique automobile. Toutes marques, toutes motorisations, y compris les véhicules récents.",
  },
  {
    icon: MapPin,
    title: "Proximité locale",
    description:
      "Situé au cœur de Sainte-Maure-de-Touraine, nous sommes votre garage de quartier. Disponibles, à l'écoute, avec un vrai suivi personnalisé.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <SectionHeading
              eyebrow="Pourquoi nous choisir ?"
              heading="Un garage qui mérite votre confiance"
              description="Chez 2F AUTO37, chaque véhicule est traité comme s'il était le nôtre. Notre engagement : qualité, honnêteté et réactivité."
              align="left"
              className="mb-10"
            />

            <div className="flex flex-col gap-8">
              {reasons.map(({ icon, title, description }) => (
                <div key={title} className="flex items-start gap-5">
                  <IconWrapper icon={icon} variant="action" size="md" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-[#1A1A2E] text-lg mb-2">
                      {title}
                    </h3>
                    <p className="font-body text-sm text-[#484848] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div className="relative">
            {/* Main card */}
            <div className="rounded-2xl bg-[#1A1A2E] p-8 text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-1.5 mb-6">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="w-6 h-6 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="font-display font-bold text-[#F5A623] text-lg ml-1">5/5</span>
                </div>
                <blockquote className="font-body text-lg text-white/90 leading-relaxed italic mb-6">
                  &ldquo;Garage très pro, ne change que ce qui est nécessaire. Équipe sérieuse et honnête, je recommande vivement.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E94560] flex items-center justify-center font-display font-bold text-white">
                    C
                  </div>
                  <div>
                    <p className="font-body font-semibold text-white text-sm">Client Pages Jaunes</p>
                    <p className="font-body text-xs text-white/45">Avis vérifié ⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#F5A623] rounded-xl px-5 py-3 shadow-lg">
              <p className="font-display font-extrabold text-[#1A1A2E] text-2xl leading-none">100%</p>
              <p className="font-body text-xs text-[#1A1A2E]/70 mt-0.5">Devis gratuit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
