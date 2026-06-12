import Link from "next/link";
import { Gauge, AlertTriangle, Zap, Wind } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

const services = [
  {
    icon: Gauge,
    title: "Révision complète",
    description:
      "Vidange, filtres, bougies, contrôle des niveaux. Votre véhicule repart en pleine forme avec une révision complète aux normes constructeur.",
    href: "/rendez-vous",
  },
  {
    icon: AlertTriangle,
    title: "Freinage",
    description:
      "Remplacement de plaquettes, disques, tambours et liquide de frein. Votre sécurité est notre priorité absolue.",
    href: "/rendez-vous",
  },
  {
    icon: Zap,
    title: "Diagnostic électronique",
    description:
      "Lecture et effacement des codes défauts avec valise OBD professionnelle. Identification précise de chaque anomalie.",
    href: "/rendez-vous",
  },
  {
    icon: Wind,
    title: "Climatisation",
    description:
      "Recharge du gaz, vérification du circuit, désinfection de l'habitacle. Roulez au frais en toute sécurité.",
    href: "/rendez-vous",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nos Prestations"
          heading="Ce que nous faisons le mieux"
          description="De la révision simple à la réparation complexe, notre équipe intervient sur tous types de véhicules avec le même soin."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-display font-semibold text-sm uppercase tracking-[0.08em] text-[#E94560] hover:text-[#D03350] transition-colors duration-150"
          >
            Voir tous nos services
            <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
