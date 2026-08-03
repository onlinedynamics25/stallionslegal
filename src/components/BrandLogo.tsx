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

// White plate treatment used anywhere the mark sits on a dark/low-contrast surface
const WHITE_PLATE =
  "bg-white border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.08)] rounded-[10px] p-3 md:p-4";

const backdrops: Record<NonNullable<BrandLogoProps["variant"]>, string> = {
  frosted: WHITE_PLATE,
  light: WHITE_PLATE,
  dark: WHITE_PLATE,
};

const BrandLogo = ({
  size = 56,
  variant = "frosted",
  priority = false,
  className,
}: BrandLogoProps) => {
  // the mark always sits on a white plate, so use the light-surface asset
  const src = "/logo/rounded.png";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center transition-shadow",
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
