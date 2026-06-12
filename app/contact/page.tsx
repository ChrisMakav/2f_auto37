import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HoursMap } from "@/components/sections/HoursMap";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez 2F AUTO37 — 123 Chemin des Saulniers, 37800 Sainte-Maure-de-Touraine. ☎ 09 88 09 53 65. Formulaire de contact, carte Google Maps et horaires d'ouverture.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-[#1A1A2E] py-14">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contactez-nous"
            heading="Nous sommes à votre écoute"
            description="Une question, un devis, une urgence ? Appelez-nous directement ou envoyez-nous un message — nous répondons sous 24h."
            theme="dark"
          />
        </div>
      </div>

      {/* Call CTA — mobile first */}
      <div className="bg-[#E94560]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <Phone size={24} />
            <div>
              <p className="font-display font-bold text-xl">09 88 09 53 65</p>
              <p className="font-body text-sm text-white/75">Lun–Ven 8h–18h · Sam 9h–13h</p>
            </div>
          </div>
          <a
            href="tel:0988095365"
            className="flex-shrink-0 inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-white text-[#E94560] font-display font-bold text-sm uppercase tracking-[0.08em] hover:bg-[#F8F9FA] transition-colors duration-150"
          >
            Appeler maintenant
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="font-display font-bold text-xl text-[#1A1A2E] mb-6">
              Envoyez-nous un message
            </h2>
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6">
              <h2 className="font-display font-bold text-lg text-[#1A1A2E] mb-5">
                Informations de contact
              </h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[rgba(233,69,96,0.08)]">
                    <MapPin size={18} strokeWidth={1.5} className="text-[#E94560]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-[#1A1A2E]">Adresse</p>
                    <p className="font-body text-sm text-[#484848] mt-0.5">
                      123 Chemin des Saulniers<br />37800 Sainte-Maure-de-Touraine
                    </p>
                    <a
                      href="https://maps.google.com/?q=123+Chemin+des+Saulniers+37800+Sainte-Maure-de-Touraine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 font-body text-xs text-[#E94560] hover:text-[#D03350] transition-colors"
                    >
                      <Navigation size={12} />
                      Itinéraire Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[rgba(233,69,96,0.08)]">
                    <Phone size={18} strokeWidth={1.5} className="text-[#E94560]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-[#1A1A2E]">Téléphone</p>
                    <a href="tel:0988095365" className="font-body text-sm text-[#484848] hover:text-[#1A1A2E] transition-colors mt-0.5 block">
                      09 88 09 53 65
                    </a>
                    <p className="font-body text-xs text-[#8C8C8C] mt-0.5">Lun–Ven 8h–18h · Sam 9h–13h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[rgba(233,69,96,0.08)]">
                    <Mail size={18} strokeWidth={1.5} className="text-[#E94560]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-[#1A1A2E]">Email</p>
                    <a href="mailto:mabilachrisna@gmail.com" className="font-body text-sm text-[#484848] hover:text-[#1A1A2E] transition-colors mt-0.5 block">
                      mabilachrisna@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[rgba(233,69,96,0.08)]">
                    <Clock size={18} strokeWidth={1.5} className="text-[#E94560]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-[#1A1A2E]">Horaires</p>
                    <div className="font-body text-sm text-[#484848] mt-0.5 space-y-0.5">
                      <p>Lun–Mar · Jeu–Ven : 8h–12h / 14h–18h</p>
                      <p>Mercredi : 8h–12h</p>
                      <p>Samedi : 9h–13h</p>
                      <p className="text-[#8C8C8C]">Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(245,166,35,0.08)] border border-[rgba(245,166,35,0.25)] rounded-2xl p-5">
              <p className="font-body text-sm text-[#484848]">
                <strong className="font-display font-bold text-[#1A1A2E]">SIREN :</strong> 984 070 870 —{" "}
                <strong className="font-display font-bold text-[#1A1A2E]">NAF :</strong> 4520A
              </p>
            </div>
          </div>
        </div>
      </div>

      <HoursMap />
    </div>
  );
}
