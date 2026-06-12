"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "icon";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "bg-[#E94560] text-white",
    "hover:bg-[#D03350] hover:shadow-[0_4px_20px_rgba(233,69,96,0.35)] hover:scale-[1.02]",
    "active:bg-[#B5284A] active:scale-[0.99]",
    "font-display font-semibold uppercase tracking-[0.08em]",
  ].join(" "),
  secondary: [
    "bg-transparent border-2 border-[#E94560] text-[#E94560]",
    "hover:bg-[#E94560] hover:text-white hover:scale-[1.02]",
    "active:scale-[0.99]",
    "font-display font-semibold uppercase tracking-[0.08em]",
  ].join(" "),
  ghost: [
    "bg-transparent border-2 border-[#C8C8C8] text-[#484848]",
    "hover:bg-[#F8F9FA] hover:border-[#8C8C8C]",
    "active:scale-[0.99]",
  ].join(" "),
  danger: [
    "bg-red-600 text-white",
    "hover:bg-red-700 hover:scale-[1.02]",
    "active:scale-[0.99]",
    "font-display font-semibold uppercase tracking-[0.08em]",
  ].join(" "),
  icon: [
    "bg-transparent border-2 border-[#C8C8C8] text-[#484848]",
    "hover:bg-[#F8F9FA] hover:border-[#8C8C8C] hover:text-[#E94560]",
    "flex items-center justify-center",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isIcon = variant === "icon";
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-[--radius-md]",
          "font-body transition-[background-color,box-shadow,transform,border-color,color]",
          "duration-150 ease-out cursor-pointer select-none",
          "focus-visible:outline-2 focus-visible:outline-[#E94560] focus-visible:outline-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          variantClasses[variant],
          isIcon ? iconSizeClasses[size] : sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
