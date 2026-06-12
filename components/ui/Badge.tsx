import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type BadgeVariant =
  | "brand"
  | "action"
  | "accent"
  | "muted"
  | "outline"
  | "dark"
  | "success"
  | "warning"
  | "error";
type BadgeSize = "xs" | "sm" | "md";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: LucideIcon;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  brand:   "bg-[#1A1A2E] text-white",
  action:  "bg-[#E94560] text-white",
  accent:  "bg-[#F5A623] text-[#1A1A2E]",
  muted:   "bg-[rgba(233,69,96,0.12)] text-[#E94560]",
  outline: "bg-transparent text-[#484848] border border-[#C8C8C8]",
  dark:    "bg-white/15 text-white",
  success: "bg-green-600/12 text-green-700",
  warning: "bg-amber-500/12 text-amber-700",
  error:   "bg-red-600/12 text-red-700",
};

const sizeClasses: Record<BadgeSize, string> = {
  xs: "h-5 px-2 text-[10px] gap-1",
  sm: "h-[22px] px-2.5 text-[11px] gap-1",
  md: "h-6 px-3 text-xs gap-1.5",
};

export function Badge({
  label,
  variant = "muted",
  size = "md",
  icon: Icon,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        "font-display font-semibold tracking-[0.06em] uppercase leading-none",
        "whitespace-nowrap select-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {Icon && <Icon size={size === "xs" ? 10 : 12} strokeWidth={2} />}
      {label}
    </span>
  );
}
