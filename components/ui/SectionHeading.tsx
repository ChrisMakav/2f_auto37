import { cn } from "@/lib/utils";

type HeadingAlign = "centered" | "left";
type HeadingTheme = "light" | "dark";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: HeadingAlign;
  theme?: HeadingTheme;
  divider?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "centered",
  theme = "light",
  divider = true,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "centered";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCentered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="font-display font-semibold text-xs uppercase tracking-[0.18em] text-[#F5A623] mb-3">
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-display font-bold leading-snug",
          isDark ? "text-white" : "text-[#1A1A2E]"
        )}
        style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}
      >
        {heading}
      </h2>

      {divider && (
        <div
          className={cn(
            "h-[3px] w-12 bg-[#E94560] rounded-full mt-4",
            isCentered ? "mx-auto" : "ml-0"
          )}
        />
      )}

      {description && (
        <p
          className={cn(
            "font-body text-base leading-relaxed mt-4 max-w-[560px]",
            isDark ? "text-white/70" : "text-[#484848]",
            isCentered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
