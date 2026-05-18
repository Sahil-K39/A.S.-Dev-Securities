import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/HeroSection";
import { VerticalCard } from "@/components/sections/VerticalCard";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/ui/CTASection";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { StaggeredText } from "@/components/ui/StaggeredText";
import { GSAPScrollParallax } from "@/components/animations/GSAPScrollParallax";
import { AmbientGlow } from "@/components/animations/AmbientGlow";
import {
  founders,
  portfolioItems,
  siteConfig,
  verticals,
  whyChooseUs
} from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Build Secure. Grow Smart.",
  description: siteConfig.description
};

export default function HomePage() {
  const archiveItems = [
    { item: portfolioItems.find((i) => i.slug === "aura-lifestyle"), cols: "md:col-span-8", label: "Brand Identity / Web Dev" },
    { item: portfolioItems.find((i) => i.slug === "cyber-sentinel"), cols: "md:col-span-4", label: "Cybersecurity" },
    { item: portfolioItems.find((i) => i.slug === "vanguard-films"), cols: "md:col-span-4", label: "Production" },
    { item: portfolioItems.find((i) => i.slug === "monolith-systems"), cols: "md:col-span-8", label: "Web Infrastructure" },
  ];

  return (
    <>
      <HeroSection
        actions={[
          { href: "/portfolio", label: "Explore Our Work" },
          { href: "/contact", label: "Contact Us", variant: "secondary" }
        ]}
        description="A high-precision collaboration between technical architecture and creative storytelling. We build secure digital products and shape the brand presence around them."
        eyebrow="Secure Product + Growth Ecosystem"
        title={<StaggeredText text={`Build Secure.\nGrow Smart.`} />}
      />

      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern bg-grid-glow opacity-30"></div>
        <AmbientGlow color="violet" className="-right-[10%] -top-40 scale-150" />
        
        <div className="grid gap-8 md:grid-cols-2 relative z-10">
          {verticals.map((vertical, index) => (
            <Reveal delay={index * 0.08} key={vertical.name}>
              <VerticalCard vertical={vertical} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-lowest py-32">
        <AmbientGlow color="rose" className="left-[-10%] top-20 h-[800px] w-[800px] scale-150 opacity-20" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-24 space-y-4 text-center">
            <h2 className="font-headline text-4xl font-extrabold uppercase tracking-[0.15em] text-text">The Edge of Excellence</h2>
            <div className="mx-auto h-1 w-12 bg-primary"></div>
          </div>
          <div className="grid gap-12 md:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <Reveal delay={index * 0.06} key={item.title}>
                <div className="space-y-6">
                  <Icon className="text-4xl text-primary" name={item.icon} />
                  <h4 className="font-headline text-lg font-bold uppercase tracking-wide text-text">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern bg-grid-glow opacity-20"></div>
        <AmbientGlow color="primary" className="bottom-0 right-[-20%] scale-150 opacity-15" />

        <div className="relative z-10 mb-16 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="font-label text-xs uppercase tracking-widest text-primary">Curated Selected Works</span>
            <h2 className="font-headline text-5xl font-black uppercase tracking-tight text-text">The Archive</h2>
          </div>
          <p className="max-w-md font-body text-lg text-muted md:text-right">A showcase of secure product thinking and visual narratives designed for ambitious businesses.</p>
        </div>
        <div className="grid h-auto grid-cols-1 gap-6 md:h-[800px] md:grid-cols-12">
          {archiveItems.map((block, i) => (
            <Reveal delay={i * 0.06} key={block.item?.slug || i} className={cn("group relative overflow-hidden rounded-xl bg-surface-high min-h-64", block.cols)}>
              <GSAPScrollParallax speed={0.15}>
                 <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${block.item?.image}')` }} />
              </GSAPScrollParallax>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 mix-blend-multiply pointer-events-none z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 pointer-events-none z-10"></div>
              <div className="absolute bottom-8 left-8 p-4 md:p-0 z-20">
                <p className="mb-2 font-label text-[10px] uppercase tracking-widest text-primary">{block.label}</p>
                <h4 className="font-headline text-2xl font-bold uppercase text-text">{block.item?.title || ""}</h4>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center md:text-left">
          <ButtonLink href="/portfolio" variant="secondary">
            View Full Archive
          </ButtonLink>
        </div>
      </section>

      <section className="bg-surface-low py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-24 text-center md:text-left">
            <h2 className="font-headline text-4xl font-extrabold uppercase tracking-[0.15em] text-text">Founders Behind the Ecosystem</h2>
          </div>
          <div className="grid gap-16 md:grid-cols-2">
            {founders.map((founder, index) => (
              <Reveal delay={index * 0.1} key={founder.name}>
                <div className="group flex flex-col items-center gap-8 md:flex-row">
                  <div className="h-48 w-48 shrink-0 overflow-hidden rounded-full border-2 border-outline-variant grayscale transition-all duration-500 group-hover:grayscale-0">
                    <ImagePanel
                      alt={founder.alt}
                      className="h-full w-full rounded-full"
                      imageClassName="transition-all duration-500 group-hover:scale-105"
                      sizes="12rem"
                      src={founder.image}
                    />
                  </div>
                  <div className="space-y-3 text-center md:text-left">
                    <h4 className="font-headline text-2xl font-bold uppercase text-text">{founder.name}</h4>
                    <span className="block font-label text-[10px] uppercase tracking-widest text-primary">{founder.vertical}</span>
                    <p className="text-sm leading-relaxed text-muted">{founder.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        description="One polished path for secure products, brand systems, campaigns, and growth."
        title="Build, Secure, and Scale Your Business With Us"
      />
    </>
  );
}
