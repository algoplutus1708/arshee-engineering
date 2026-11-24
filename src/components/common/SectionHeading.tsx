interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

/**
 * Consistent monochrome section heading used across pages.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
