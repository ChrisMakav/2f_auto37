import { Shield, Tag, Wrench } from "lucide-react";

const items = [
  {
    icon: Shield,
    label: "Garage indépendant",
    desc: "Aucune franchise, proximité garantie",
  },
  {
    icon: Tag,
    label: "Devis gratuit",
    desc: "Estimation transparente sans engagement",
  },
  {
    icon: Wrench,
    label: "Toutes marques",
    desc: "Toutes marques et motorisations acceptées",
  },
];

export function TrustBanner() {
  return (
    <section className="bg-white border-y border-[#E8E8E8]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E8E8]">
          {items.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-center gap-4 py-6 sm:py-7 sm:px-8 first:pl-0 last:pr-0"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-[rgba(233,69,96,0.08)]">
                <Icon size={20} strokeWidth={1.5} className="text-[#E94560]" />
              </div>
              <div>
                <p className="font-display font-bold text-[#1A1A2E] text-base leading-tight">
                  {label}
                </p>
                <p className="font-body text-sm text-[#8C8C8C] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
