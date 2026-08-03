import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  /** rendered pixel size of the logo mark */
  size?: number;
  /** contrast treatment behind the mark */
  variant?: "frosted" | "light" | "dark";
  /** hero/primary instance should be eagerly loaded */
  priority?: boolean;
  className?: string;
}

const LOGO_ALT = "Stallions Legal - Legal Practitioners and ADR Consultants";

const backdrops: Record<NonNullable<BrandLogoProps["variant"]>, string> = {
  frosted:
    "bg-background/60 backdrop-blur-md ring-1 ring-gold/30 shadow-[0_1px_0_hsl(var(--gold)/0.25)]",
  light: "bg-white ring-1 ring-gold/25",
  dark: "bg-charcoal-dark/70 backdrop-blur-md ring-1 ring-gold/30",
};

const BrandLogo = ({
  size = 56,
  variant = "frosted",
  priority = false,
  className,
}: BrandLogoProps) => {
  const resolved = useTheme().theme === "dark" ? "dark" : "light";
  // rounded.png reads well on light surfaces, nobg.png on dark surfaces
  const src =
    variant === "dark" || (variant === "frosted" && resolved === "dark")
      ? "/logo/nobg.png"
      : "/logo/rounded.png";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl p-1.5 transition-shadow",
        backdrops[variant],
        className,
      )}
    >
      <img
        src={src}
        alt={LOGO_ALT}
        width={size}
        height={size}
        style={{ width: size, height: size }}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className="object-contain [image-rendering:auto]"
      />
    </span>
  );
};

export default BrandLogo;
