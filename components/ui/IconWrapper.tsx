import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type IconVariant = "brand" | "action" | "accent" | "dark" | "neutral" | "outlined";
type IconSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface IconWrapperProps {
  icon: LucideIcon;
  variant?: IconVariant;
  size?: IconSize;
  className?: string;
  "aria-label"?: string;
}

const variantClasses: Record<IconVariant, string> = {
  brand:    "bg-[rgba(26,26,46,0.08)] text-[#1A1A2E]",
  action:   "bg-[rgba(233,69,96,0.10)] text-[#E94560]",
  accent:   "bg-[rgba(245,166,35,0.12)] text-[#D98E16]",
  dark:     "bg-white/10 text-white",
  neutral:  "bg-[#F8F9FA] text-[#484848]",
  outlined: "border-2 border-[#C8C8C8] text-[#484848]",
};

const sizeConfig: Record<
  IconSize,
  { container: string; iconSize: number; radius: string }
> = {
  sm:  { container: "h-8 w-8",   iconSize: 16, radius: "rounded-lg" },
  md:  { container: "h-11 w-11", iconSize: 20, radius: "rounded-xl" },
  lg:  { container: "h-14 w-14", iconSize: 24, radius: "rounded-2xl" },
  xl:  { container: "h-[72px] w-[72px]", iconSize: 32, radius: "rounded-2xl" },
  "2xl": { container: "h-24 w-24", iconSize: 40, radius: "rounded-3xl" },
};

export function IconWrapper({
  icon: Icon,
  variant = "action",
  size = "lg",
  className,
  "aria-label": ariaLabel,
}: IconWrapperProps) {
  const { container, iconSize, radius } = sizeConfig[size];
  return (
    <span
      aria-label={ariaLabel}
      className={cn(
        "inline-flex flex-shrink-0 items-center justify-center",
        "transition-colors duration-150 ease-out",
        container,
        radius,
        variantClasses[variant],
        className
      )}
    >
      <Icon size={iconSize} strokeWidth={1.5} aria-hidden="true" />
    </span>
  );
}
