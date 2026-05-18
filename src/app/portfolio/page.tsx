import type { Metadata } from "next";

import { PortfolioExplorer } from "@/components/sections/PortfolioExplorer";
import { CTASection } from "@/components/ui/CTASection";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Reveal } from "@/components/ui/Reveal";
import { stitchImages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Filterable portfolio concepts and case-study structures across apps, websites, security, branding, marketing, and creative work."
};

export default function PortfolioPage() {
  return (
    <>
      <section className="site-intro mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-36 md:px-6 md:pb-32 md:pt-40 lg:grid-cols-[1fr_0.82fr] lg:items-end">
        <Reveal>
          <p className="mb-6 font-label text-sm uppercase tracking-widest text-primary">The Work</p>
          <h1 className="mb-8 max-w-5xl font-headline text-5xl font-extrabold leading-none tracking-tighter text-text md:text-7xl">
            CURATING EXCELLENCE <br /> THROUGH DIGITAL <span className="bg-gradient-to-r from-text via-primary to-text bg-clip-text text-transparent">CRAFT.</span>
          </h1>
          <p className="max-w-2xl border-l border-primary pl-6 font-body text-xl font-light text-muted">
            A premium archive for concept case studies, apps, websites, security work, branding systems, marketing support, and creative campaigns.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ImagePanel
            alt="Premium dark portfolio dashboard with red digital interface details"
            className="group min-h-[20rem] rounded-panel ghost-outline md:min-h-[31rem]"
            imageClassName="opacity-95 motion-safe:group-hover:scale-[1.03]"
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            src={stitchImages.portfolioObsidian}
          />
        </Reveal>
      </section>

      <PortfolioExplorer />

      <CTASection
        description="Share the build, campaign, audit, or launch you want to create next."
        title="Ready to build a proof-led project?"
      />
    </>
  );
}
