import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eye, Award, MapPin, Calendar, Star, Car } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconWrapper } from "@/components/ui/IconWrapper";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez l'histoire de 2F AUTO37, garage automobile fondé en 2024 par Tony Fonseca à Sainte-Maure-de-Touraine. Transparence, expertise et proximité locale.",
};

const stats = [
  { icon: Calendar, value: "2024", label: "Création du garage" },
  { icon: Star,     value: "5/5",  label: "Note clients" },
  { icon: Car,      value: "100%", label: "Toutes marques" },
  { icon: MapPin,   value: "37",   label: "Indre-et-Loire" },
];

const values = [
  {
    icon: Eye,
    title: "Transparence",
    description:
      "Nous vous montrons le problème, vous expliquer ce qui doit être fait, et vous soumettons un devis avant chaque intervention. Aucune surprise sur la facture.",
  },
  {
    icon: Award,
    title: "Qualité",
    description:
      "Nous utilisons des pièces de qualité OEM ou d'origine. Chaque intervention est réalisée dans le respect des préconisations constructeur et des normes de sécurité.",
  },
  {
    icon: MapPin,
    title: "Proximité",
    description:
      "Garage indépendant local, nous connaissons nos clients et construisons une relation de confiance durable. Vous n'êtes pas un numéro de client.",
  },
];

export default function AProposPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-[#1A1A2E] py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeading
            eyebrow="Notre Histoire"
            heading="Qui sommes-nous ?"
            description="2F AUTO37 est un garage automobile indépendant créé en 2024 à Sainte-Maure-de-Touraine, fondé sur des valeurs de transparence, de qualité et de proximité."
            theme="dark"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-[#E8E8E8]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#E8E8E8]">
            {stats.map(({ icon, value, label }) => (
              <div key={label} className="flex flex-col items-center py-10 gap-2">
                <IconWrapper icon={icon} variant="action" size="md" />
                <p className="font-display font-extrabold text-3xl text-[#1A1A2E] mt-2">{value}</p>
                <p className="font-body text-sm text-[#8C8C8C] text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="py-20 bg-[#F8F9FA]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo du garage */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <Image
                  src="/images/1.png"
                  alt="Garage 2F AUTO37 — Sainte-Maure-de-Touraine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#E94560] rounded-xl px-5 py-3 text-white shadow-lg hidden sm:block">
                <p className="font-display font-extrabold text-2xl leading-none">NAF</p>
                <p className="font-body text-xs text-white/70 mt-0.5">4520A — Mécanique</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="font-display font-semibold text-xs text-[#F5A623] uppercase tracking-[0.18em] mb-3">
                Notre histoire
              </p>
              <h2 className="font-display font-bold text-[#1A1A2E] mb-6" style={{ fontSize: "clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)" }}>
                Né de la passion automobile, ancré dans le territoire tourangeau
              </h2>
              <div className="flex flex-col gap-4 font-body text-[#484848] leading-relaxed">
                <p>
                  Fondé en <strong className="text-[#1A1A2E]">janvier 2024</strong> par <strong className="text-[#1A1A2E]">Tony Fonseca</strong>, mécanicien passionné depuis plus de 20 ans, 2F AUTO37 est né d&apos;un constat simple : les clients ont besoin d&apos;un garage qui joue franc-jeu.
                </p>
                <p>
                  Trop souvent, les automobilistes se sentent perdus face aux diagnostics techniques et aux factures imprévues. Notre mission : expliquer clairement, intervenir précisément, et ne remplacer que ce qui doit vraiment l&apos;être.
                </p>
                <p>
                  Implanté au <strong className="text-[#1A1A2E]">123 Chemin des Saulniers à Sainte-Maure-de-Touraine</strong>, notre garage sert les habitants de l&apos;Indre-et-Loire avec la même rigueur pour chaque véhicule, quelle que soit la marque ou l&apos;ancienneté.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-[#E94560] text-white font-display font-bold text-sm uppercase tracking-[0.08em] hover:bg-[#D03350] transition-colors duration-150"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos Valeurs"
            heading="Ce qui nous définit"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon, title, description }) => (
              <div key={title} className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#F8F9FA]">
                <IconWrapper icon={icon} variant="action" size="xl" className="mb-5" />
                <h3 className="font-display font-bold text-xl text-[#1A1A2E] mb-3">{title}</h3>
                <p className="font-body text-sm text-[#484848] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
