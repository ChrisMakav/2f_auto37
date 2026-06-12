import type { Metadata } from "next";
import { AppointmentForm } from "./AppointmentForm";
import { PhoneCall, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prendre Rendez-vous",
  description:
    "Réservez votre créneau en ligne chez 2F AUTO37 à Sainte-Maure-de-Touraine. Formulaire simple et rapide, réponse sous 24h. ☎ 09 88 09 53 65",
};

export default function RendezVousPage() {
  return (
    <div className="bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-[#1A1A2E] py-14">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <p className="font-display font-semibold text-xs text-[#F5A623] uppercase tracking-[0.18em] mb-3">
            Rendez-vous en ligne
          </p>
          <h1 className="font-display font-bold text-white mb-3" style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}>
            Prenez rendez-vous
          </h1>
          <p className="font-body text-white/65 max-w-lg">
            Remplissez le formulaire ci-dessous. Nous vous confirmons votre créneau par téléphone ou email sous 24h.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <a
              href="tel:0988095365"
              className="flex items-center justify-center gap-3 py-5 rounded-2xl bg-[#E94560] text-white font-display font-bold text-lg uppercase tracking-wide hover:bg-[#D03350] transition-colors duration-150"
            >
              <PhoneCall size={22} />
              09 88 09 53 65
            </a>

            <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6">
              <h3 className="font-display font-bold text-[#1A1A2E] text-base mb-4 flex items-center gap-2">
                <Clock size={16} className="text-[#E94560]" />
                Nos horaires
              </h3>
              <div className="flex flex-col gap-2 font-body text-sm text-[#484848]">
                {[
                  ["Lundi – Mardi", "08h–12h / 14h–18h"],
                  ["Mercredi", "08h–12h"],
                  ["Jeudi – Vendredi", "08h–12h / 14h–18h"],
                  ["Samedi", "09h–13h"],
                  ["Dimanche", "Fermé"],
                ].map(([day, h]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-[#1A1A2E] font-medium">{day}</span>
                    <span className="text-[#8C8C8C]">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6">
              <h3 className="font-display font-bold text-[#1A1A2E] text-base mb-3 flex items-center gap-2">
                <MapPin size={16} className="text-[#E94560]" />
                Nous trouver
              </h3>
              <p className="font-body text-sm text-[#484848] mb-3">
                123 Chemin des Saulniers<br />
                37800 Sainte-Maure-de-Touraine
              </p>
              <a
                href="https://maps.google.com/?q=123+Chemin+des+Saulniers+37800+Sainte-Maure-de-Touraine"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-xs text-[#E94560] uppercase tracking-wide hover:text-[#D03350] transition-colors"
              >
                Ouvrir dans Google Maps →
              </a>
            </div>

            <div className="bg-[rgba(245,166,35,0.08)] rounded-2xl border border-[rgba(245,166,35,0.25)] p-5">
              <p className="font-body text-sm text-[#484848]">
                <strong className="font-display font-bold text-[#1A1A2E]">Devis gratuit</strong> — Aucun engagement avant votre accord écrit sur le devis détaillé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
