import { ImagePanel } from "@/components/ui/ImagePanel";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  image?: string;
  alt?: string;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  image,
  alt = "",
  className
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group transition-transform duration-500 ease-premium motion-safe:hover:-translate-y-1",
        className
      )}
    >
      {image ? (
        <ImagePanel
          alt={alt || title}
          className="mb-6 aspect-[4/3] rounded-card shadow-ambient"
          imageClassName="scale-105 grayscale group-hover:scale-[1.08] group-hover:grayscale-0"
          src={image}
        />
      ) : (
        <div className="premium-card premium-hover mb-6 flex aspect-[4/3] items-end p-8">
          <span className="font-headline text-6xl font-black text-primary/40">
            {title.slice(0, 2).toUpperCase()}
          </span>
        </div>
      )}
      <h3 className="font-headline text-lg font-black uppercase leading-tight text-text md:text-xl">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}
