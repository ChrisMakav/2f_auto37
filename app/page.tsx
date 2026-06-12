import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ReviewBanner } from "@/components/sections/ReviewBanner";
import { HoursMap } from "@/components/sections/HoursMap";

export const metadata: Metadata = {
  title: "2F AUTO37 — Garage automobile Sainte-Maure-de-Touraine (37)",
  description:
    "Votre garage de confiance à Sainte-Maure-de-Touraine. Révision, freinage, diagnostic, climatisation. Toutes marques. Devis gratuit. ☎ 09 88 09 53 65",
};

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Votre véhicule entre"
        headlineAccent="de bonnes mains"
        subtext="Garage automobile indépendant à Sainte-Maure-de-Touraine. Révision, réparation, diagnostic toutes marques — avec transparence et savoir-faire."
      />
      <TrustBanner />
      <ServicesOverview />
      <WhyChooseUs />
      <ReviewBanner />
      <HoursMap />
    </>
  );
}
