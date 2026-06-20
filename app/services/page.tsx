import type { Metadata } from "next";
import Link from "next/link";
import {
  Gauge, AlertTriangle, Zap, Wind, Settings, Cog, Car, ShoppingCart,
  Key, Wrench, GitMerge, Disc, Thermometer, AlignCenter, CircleDot,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Tous les services de mécanique automobile proposés par 2F AUTO37 : révision, freinage, distribution, embrayage, diagnostic, climatisation, géométrie, pneumatiques et plus.",
};

const mecanique = [
  {
    icon: Gauge,
    title: "Révision complète",
    description:
      "Vidange huile moteur, remplacement filtres (air, huile, habitacle), vérification bougies, contrôle niveaux et éléments de sécurité.",
  },
  {
    icon: AlertTriangle,
    title: "Freinage",
    description:
      "Remplacement plaquettes, disques et tambours. Purge et remplacement du liquide de frein. Contrôle du système de freinage complet.",
  },
  {
    icon: GitMerge,
    title: "Distribution & Courroies",
    description:
      "Remplacement courroie de distribution, courroie accessoires et pompe à eau. Respect des préconisations constructeur.",
  },
  {
    icon: Settings,
    title: "Embrayage",
    description:
      "Remplacement kit embrayage complet (disque, plateau, butée) et volant moteur. Diagnostic des signes de patinage ou de bruit.",
  },
  {
    icon: Disc,
    title: "Amortisseurs & Suspension",
    description:
      "Remplacement amortisseurs, ressorts, silentblocs, rotules et biellettes. Contrôle de la tenue de route et du confort.",
  },
  {
    icon: Zap,
    title: "Diagnostic électronique",
    description:
      "Lecture et effacement codes défauts (OBD), analyse des calculateurs moteur, boîte de vitesses, ABS, airbag et climatisation.",
  },
  {
    icon: Thermometer,
    title: "Climatisation",
    description:
      "Recharge gaz climatisation, vérification circuit (étanchéité, compresseur, condenseur), désinfection filtre habitacle.",
  },
  {
    icon: AlignCenter,
    title: "Géométrie & Parallélisme",
    description:
      "Réglage du train roulant sur banc 3D. Correction de la direction, usure prématurée des pneumatiques et tenue de route.",
  },
  {
    icon: CircleDot,
    title: "Pneumatiques",
    description:
      "Montage, démontage et équilibrage de tous types de pneus. Permutation des roues. Vérification et gonflage des pressions.",
  },
];

const carrosserie = [
  {
    icon: Car,
    title: "Petits chocs & rayures",
    description:
      "Débosselage, retouches peinture et traitement des rayures légères pour redonner un aspect neuf à votre véhicule.",
  },
  {
    icon: Cog,
    title: "Remplacement de vitres",
    description:
      "Remplacement de pare-brise et vitres latérales. Intervention rapide, garantie étanchéité.",
  },
];

const achatVente = [
  {
    icon: ShoppingCart,
    title: "Véhicules d'occasion",
    description:
      "Achat et vente de véhicules d'occasion vérifiés et préparés. Sélection rigoureuse, état certifié avant vente.",
  },
  {
    icon: Wrench,
    title: "Pièces & accessoires",
    description:
      "Vente de pièces détachées d'origine et de qualité équivalente. Accessoires pour tous véhicules.",
  },
];

const location = [
  {
    icon: Key,
    title: "Location véhicules",
    description:
      "Location de voitures de tourisme sans chauffeur le temps de votre réparation ou pour vos déplacements ponctuels.",
  },
];

interface CategoryProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  services: { icon: any; title: string; description: string }[];
}

function ServiceCategory({ title, services }: CategoryProps) {
  return (
    <div>
      <h2 className="font-display font-bold text-xl text-[#1A1A2E] mb-6 pb-3 border-b-2 border-[#E94560] inline-block">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard
            key={s.title}
            icon={s.icon}
            title={s.title}
            description={s.description}
            href="https://n8n.srv1644260.hstgr.cloud/form/09040ec1-6a6c-47e4-8d53-ad8b6ecfe624"
          />
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-[#1A1A2E] py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos Prestations"
            heading="Tous nos services automobile"
            description="De l'entretien courant à la réparation complexe, 2F AUTO37 prend en charge votre véhicule quelle que soit la marque ou la motorisation."
            theme="dark"
          />
        </div>
      </div>

      {/* Service categories */}
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-16 flex flex-col gap-14">
        <ServiceCategory title="Mécanique générale" services={mecanique} />
        <ServiceCategory title="Carrosserie légère" services={carrosserie} />
        <ServiceCategory title="Achat / Vente de véhicules" services={achatVente} />
        <ServiceCategory title="Location" services={location} />
      </div>

      {/* CTA banner */}
      <div className="bg-[#E94560]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-12 text-center">
          <h2 className="font-display font-bold text-2xl text-white mb-3">
            Vous avez une question sur votre véhicule ?
          </h2>
          <p className="font-body text-white/80 mb-8 text-lg">
            Contactez-nous ou prenez rendez-vous directement en ligne.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-white text-[#E94560] font-display font-bold text-sm uppercase tracking-[0.08em] hover:bg-[#F8F9FA] transition-colors duration-150"
            >
              Prendre rendez-vous
            </Link>
            <a
              href="tel:0988095365"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl border-2 border-white/40 text-white font-display font-bold text-sm uppercase tracking-[0.08em] hover:border-white/70 hover:bg-white/10 transition-all duration-150"
            >
              09 88 09 53 65
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
