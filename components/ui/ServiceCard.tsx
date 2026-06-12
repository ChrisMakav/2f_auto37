import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconWrapper } from "./IconWrapper";

type CardVariant = "light" | "dark" | "outlined" | "featured";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  variant?: CardVariant;
  className?: string;
}

const variantCard: Record<CardVariant, string> = {
  light:    "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
  dark:     "bg-[#1A1A2E] shadow-[0_2px_12px_rgba(0,0,0,0.20)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.30)]",
  outlined: "bg-white border border-[#C8C8C8] hover:border-[#8C8C8C] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
  featured: "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-l-4 border-l-[#E94560]",
};

const variantText: Record<CardVariant, { title: string; desc: string }> = {
  light:    { title: "text-[#1A1A2E]",  desc: "text-[#484848]" },
  dark:     { title: "text-white",      desc: "text-white/65" },
  outlined: { title: "text-[#1A1A2E]",  desc: "text-[#484848]" },
  featured: { title: "text-[#1A1A2E]",  desc: "text-[#484848]" },
};

export function ServiceCard({
  icon,
  title,
  description,
  href,
  variant = "light",
  className,
}: ServiceCardProps) {
  const isDark = variant === "dark";
  const isFeatured = variant === "featured";

  const content = (
    <div
      className={cn(
        "group flex flex-col rounded-2xl transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1",
        isFeatured ? "p-8 pl-7" : "p-8",
        variantCard[variant],
        className
      )}
    >
      <IconWrapper
        icon={icon}
        variant={isDark ? "dark" : "action"}
        size="lg"
        className="mb-5"
      />

      <h3
        className={cn(
          "font-display font-bold text-xl mb-3 leading-snug",
          variantText[variant].title
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "font-body text-sm leading-relaxed line-clamp-3 mb-5",
          variantText[variant].desc
        )}
      >
        {description}
      </p>

      {href && (
        <span
          className={cn(
            "mt-auto inline-flex items-center gap-1.5",
            "font-display font-semibold text-xs uppercase tracking-[0.08em] text-[#E94560]",
            "transition-[gap] duration-150 group-hover:gap-2.5"
          )}
        >
          Demander un devis
          <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-0.5" />
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-[#E94560] focus-visible:outline-offset-2"
      >
        {content}
      </Link>
    );
  }

  return content;
}
