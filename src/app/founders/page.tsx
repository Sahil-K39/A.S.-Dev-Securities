import type { Metadata } from "next";

import { FounderCard } from "@/components/sections/FounderCard";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { founders, stackBadges } from "@/lib/content";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Founder profiles for Sahil Kalot and the Deepindram Films & Ad Agency creative lead."
};

export default function FoundersPage() {
  const [sahil, creativeFounder] = founders;

  return (
    <>
      <section className="hero-glow site-intro">
        <Reveal className="mx-auto max-w-7xl">
          <p className="eyebrow">
            Founders
          </p>
          <h1 className="display-heading max-w-5xl">
            Technical leadership and creative growth leadership.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted md:text-lg">
            The ecosystem is intentionally led by two different strengths: secure
            product execution and brand-market momentum.
          </p>
        </Reveal>
      </section>

      <section className="site-section">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Sahil owns the technical vertical: apps, web apps, websites, cybersecurity-first development, assessment, and launch hardening."
            eyebrow="A.S. Dev & Securities"
            title="Sahil Kalot"
          />
          <FounderCard founder={sahil} />
          <div className="premium-card mt-8 p-8">
            <h3 className="font-headline text-xl font-black uppercase text-text">
              Languages and tools
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {stackBadges.map((badge) => (
                <span
                  className="rounded-full bg-surface-low px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-rose"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-surface-lowest">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Creative and marketing leadership for visual storytelling, campaign direction, social growth, and brand-market presence."
            eyebrow="Deepindram Films & Ad Agency"
            title="Creative and marketing leadership"
          />
          <FounderCard founder={creativeFounder} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="premium-card premium-hover p-8">
              <h3 className="font-headline text-xl font-black uppercase text-text">
                Work style
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">
                {creativeFounder.workStyle}
              </p>
            </article>
            <article className="premium-card premium-hover p-8">
              <h3 className="font-headline text-xl font-black uppercase text-text">
                Vision
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">
                {creativeFounder.vision}
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        description="Route your inquiry to the right leader: technical build, security, brand, campaign, or combined ecosystem work."
        title="Two verticals. One high-trust journey."
      />
    </>
  );
}
