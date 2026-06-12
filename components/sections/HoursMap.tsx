"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import { useMemo } from "react";

const schedule = [
  { day: "Lundi",     matin: "08h00 – 12h00", aprem: "14h00 – 18h00", dayNum: 1 },
  { day: "Mardi",     matin: "08h00 – 12h00", aprem: "14h00 – 18h00", dayNum: 2 },
  { day: "Mercredi",  matin: "08h00 – 12h00", aprem: "Fermé",          dayNum: 3 },
  { day: "Jeudi",     matin: "08h00 – 12h00", aprem: "14h00 – 18h00", dayNum: 4 },
  { day: "Vendredi",  matin: "08h00 – 12h00", aprem: "14h00 – 18h00", dayNum: 5 },
  { day: "Samedi",    matin: "09h00 – 13h00", aprem: "Fermé",          dayNum: 6 },
  { day: "Dimanche",  matin: "Fermé",          aprem: "Fermé",          dayNum: 0 },
];

function isOpenNow(): boolean {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Paris" })
  );
  const day = now.getDay();
  const h = now.getHours();
  const m = now.getMinutes();
  const time = h * 60 + m;

  if (day === 0) return false; // Dimanche
  if (day === 6) return time >= 9 * 60 && time < 13 * 60;
  if (day === 3) return time >= 8 * 60 && time < 12 * 60;
  return (time >= 8 * 60 && time < 12 * 60) || (time >= 14 * 60 && time < 18 * 60);
}

export function HoursMap() {
  const open = useMemo(() => isOpenNow(), []);
  const today = new Date().getDay();

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Hours */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Clock size={20} className="text-[#E94560]" />
              <h2 className="font-display font-bold text-2xl text-[#1A1A2E]">
                Horaires d&apos;ouverture
              </h2>
              <span
                className={`ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wide ${
                  open
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-green-500" : "bg-red-500"}`} />
                {open ? "Ouvert" : "Fermé"}
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden">
              {schedule.map(({ day, matin, aprem, dayNum }) => {
                const isToday = today === dayNum;
                return (
                  <div
                    key={day}
                    className={`flex items-center justify-between px-5 py-3.5 border-b last:border-b-0 border-[#F0F0F0] ${
                      isToday ? "bg-[rgba(233,69,96,0.04)]" : ""
                    }`}
                  >
                    <span
                      className={`font-display font-semibold text-sm ${
                        isToday ? "text-[#E94560]" : "text-[#1A1A2E]"
                      }`}
                    >
                      {day}
                      {isToday && (
                        <span className="ml-2 text-[10px] font-body text-[#E94560] uppercase tracking-wide">
                          (aujourd&apos;hui)
                        </span>
                      )}
                    </span>
                    <div className="text-right">
                      <span className="font-body text-sm text-[#484848] block">{matin}</span>
                      {aprem !== "Fermé" && (
                        <span className="font-body text-sm text-[#484848] block">{aprem}</span>
                      )}
                      {aprem === "Fermé" && matin === "Fermé" && (
                        <span className="font-body text-sm text-[#8C8C8C]">Fermé</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 font-body text-sm text-[#484848]">
                <Phone size={16} className="text-[#E94560]" />
                <a href="tel:0988095365" className="hover:text-[#1A1A2E] transition-colors">09 88 09 53 65</a>
              </div>
              <div className="flex items-start gap-3 font-body text-sm text-[#484848]">
                <MapPin size={16} className="text-[#E94560] mt-0.5 flex-shrink-0" />
                <span>123 Chemin des Saulniers, 37800 Sainte-Maure-de-Touraine</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-sm min-h-[360px]">
            <iframe
              title="Localisation 2F AUTO37"
              src="https://maps.google.com/maps?q=123+Chemin+des+Saulniers+37800+Sainte-Maure-de-Touraine&output=embed&z=15"
              width="100%"
              height="100%"
              style={{ minHeight: "360px", border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
