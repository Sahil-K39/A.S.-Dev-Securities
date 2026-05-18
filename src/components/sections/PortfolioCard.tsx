import { Badge } from "@/components/ui/Badge";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { TiltCard } from "@/components/ui/TiltCard";
import type { PortfolioItem } from "@/lib/content";
import { cn } from "@/lib/utils";

type PortfolioCardProps = {
  item: PortfolioItem;
  className?: string;
};

export function PortfolioCard({ item, className }: PortfolioCardProps) {
  return (
    <TiltCard
      className={cn(
        "min-h-[23rem] sm:min-h-[25rem]",
        item.size === "large" && "md:col-span-8 md:min-h-[34rem]",
        item.size === "wide" && "md:col-span-7",
        item.size === "standard" && "md:col-span-4",
        className
      )}
    >
      <article
        className={cn(
          "premium-card premium-hover group relative h-full w-full overflow-hidden"
        )}
        data-category={item.category}
        data-project-slug={item.slug}
      >
        <ImagePanel
          alt={item.alt}
          className="absolute inset-0 rounded-none opacity-95"
          imageClassName="scale-105 brightness-110 saturate-125 group-hover:scale-[1.08]"
          sizes="(min-width: 1024px) 60vw, 100vw"
          src={item.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/88 via-neutral-950/28 to-transparent" />
        <div className="relative z-10 flex h-full min-h-[23rem] flex-col justify-end p-6 sm:min-h-[25rem] md:p-9">
          <p className="eyebrow mb-3">{item.category}</p>
          <h3 className="font-headline text-2xl font-black uppercase leading-tight text-text md:text-3xl">
            {item.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-300">
            {item.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <Badge className="bg-neutral-950/60" key={tool}>
                {tool}
              </Badge>
            ))}
          </div>
          {item.result ? (
            <p className="mt-5 text-sm font-semibold text-muted-rose">{item.result}</p>
          ) : null}
        </div>
      </article>
    </TiltCard>
  );
}
