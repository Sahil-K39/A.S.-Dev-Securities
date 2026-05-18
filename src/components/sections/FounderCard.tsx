import { Badge } from "@/components/ui/Badge";
import { ImagePanel } from "@/components/ui/ImagePanel";
import type { founders } from "@/lib/content";
import { cn } from "@/lib/utils";

type Founder = (typeof founders)[number];

export function FounderCard({
  founder,
  compact = false,
  className
}: {
  founder: Founder;
  compact?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "premium-card premium-hover group grid gap-8 bg-surface-low p-6 md:grid-cols-[13rem_1fr] md:p-8",
        compact && "rounded-card md:grid-cols-[9rem_1fr]",
        className
      )}
    >
      <ImagePanel
        alt={founder.alt}
        className={cn(
          "aspect-square rounded-full",
          compact ? "mx-auto max-w-32 md:mx-0 md:max-w-36" : "mx-auto max-w-44 md:mx-0 md:max-w-52"
        )}
        imageClassName="scale-105 grayscale group-hover:scale-[1.08] group-hover:grayscale-0"
        sizes="14rem"
        src={founder.image}
      />
      <div>
        <p className="eyebrow mb-0">
          {founder.vertical}
        </p>
        <h3 className="mt-3 font-headline text-2xl font-black uppercase leading-tight text-text md:text-3xl">
          {founder.name}
        </h3>
        <p className="mt-2 text-sm font-semibold text-muted-rose">{founder.role}</p>
        <p className="mt-5 text-sm leading-6 text-muted md:text-base md:leading-7">
          {founder.bio}
        </p>
        {!compact ? (
          <>
            <div className="mt-6 flex flex-wrap gap-3">
              {founder.strengths.map((strength) => (
                <Badge key={strength}>{strength}</Badge>
              ))}
            </div>
            <p className="mt-7 text-sm leading-6 text-neutral-300">
              {founder.workStyle}
            </p>
          </>
        ) : null}
      </div>
    </article>
  );
}
