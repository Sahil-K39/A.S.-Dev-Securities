import Link from "next/link";

import { ImagePanel } from "@/components/ui/ImagePanel";
import { TiltCard } from "@/components/ui/TiltCard";
import type { verticals } from "@/lib/content";
import { cn } from "@/lib/utils";

type Vertical = (typeof verticals)[number];

export function VerticalCard({ vertical }: { vertical: Vertical }) {
  return (
    <TiltCard intensity={8}>
      <Link
        className={cn(
        "focus-ring premium-card premium-hover group relative flex min-h-[28rem] overflow-hidden bg-surface-low p-6 sm:min-h-[31rem] sm:p-8 md:p-12"
      )}
      href={vertical.href}
    >
      <ImagePanel
        alt={vertical.alt}
        className="absolute inset-0 rounded-none opacity-36 mix-blend-screen"
        imageClassName="scale-105 grayscale group-hover:scale-[1.08] group-hover:grayscale-0"
        sizes="(min-width: 768px) 50vw, 100vw"
        src={vertical.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/55 to-transparent" />
      <div className="relative z-10 mt-auto max-w-md">
        <p className="eyebrow">{vertical.eyebrow}</p>
        <h3 className="font-headline text-2xl font-black uppercase leading-tight text-text sm:text-3xl md:text-4xl">
          {vertical.name}
        </h3>
        <p className="mt-4 text-base font-semibold text-muted-rose">
          {vertical.subtitle}
        </p>
        <p className="mt-4 text-sm leading-6 text-neutral-300">
          {vertical.description}
        </p>
        <span className="mt-8 inline-flex items-center gap-3 font-label text-xs font-bold uppercase tracking-[0.14em] text-text transition-all duration-300 group-hover:gap-4 group-hover:text-primary">
          {vertical.cta} <span aria-hidden="true">-&gt;</span>
        </span>
      </div>
    </Link>
    </TiltCard>
  );
}
