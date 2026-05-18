import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Start Your Project",
  secondaryHref,
  secondaryLabel,
  className
}: CTASectionProps) {
  return (
    <section className={cn("site-section", className)}>
      <div className="premium-card mx-auto max-w-7xl px-6 py-14 text-center md:px-12 md:py-20">
        {eyebrow ? (
          <p className="eyebrow">{eyebrow}</p>
        ) : null}
        <h2 className="mx-auto max-w-4xl font-headline text-3xl font-black uppercase leading-[1.03] text-balance text-text sm:text-4xl md:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
