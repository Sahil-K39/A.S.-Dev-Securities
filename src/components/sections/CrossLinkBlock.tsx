import { ButtonLink } from "@/components/ui/ButtonLink";

type CrossLinkBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  label: string;
};

export function CrossLinkBlock({
  eyebrow,
  title,
  description,
  href,
  label
}: CrossLinkBlockProps) {
  return (
    <section className="site-section-tight">
      <div className="premium-card mx-auto grid max-w-7xl gap-8 p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="max-w-3xl font-headline text-3xl font-black uppercase leading-tight text-balance text-text md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            {description}
          </p>
        </div>
        <ButtonLink href={href} variant="secondary">
          {label}
        </ButtonLink>
      </div>
    </section>
  );
}
