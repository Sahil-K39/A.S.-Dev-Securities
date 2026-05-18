import type { Metadata } from "next";

import { CTASection } from "@/components/ui/CTASection";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps, stitchImages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A polished client journey across discover, build, secure, launch, and grow."
};

export default function ProcessPage() {
  return (
    <>
      <section className="hero-glow site-intro">
        <Reveal className="mx-auto max-w-7xl text-center">
          <p className="eyebrow">
            One Client Journey
          </p>
          <h1 className="display-heading mx-auto max-w-5xl">
            Discover. Build. Secure. Launch. Grow.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted md:text-lg">
            One polished path for companies that need technical delivery,
            security confidence, brand clarity, and growth execution without
            losing control of the project.
          </p>
        </Reveal>
      </section>

      <section className="site-section">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            align="split"
            description="The process is simple on purpose. It keeps decisions visible, roles clear, and momentum steady from first conversation to post-launch growth."
            eyebrow="Client Flow"
            title="A calm path through ambitious work."
          />
          <Reveal className="mb-8">
            <ImagePanel
              alt="Abstract five-stage client journey from discovery through growth"
              className="group min-h-[18rem] rounded-panel ghost-outline md:min-h-[30rem]"
              imageClassName="opacity-95 motion-safe:group-hover:scale-[1.03]"
              sizes="(min-width: 1280px) 1280px, 100vw"
              src={stitchImages.clientJourney}
            />
          </Reveal>
          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <Reveal delay={index * 0.05} key={step.title}>
                <article className="premium-card premium-hover grid gap-6 bg-surface-low p-7 md:grid-cols-[10rem_1fr_12rem] md:items-center md:p-9">
                  <p className="font-headline text-5xl font-black text-primary/70">
                    {step.step}
                  </p>
                  <div>
                    <h2 className="font-headline text-2xl font-black uppercase text-text md:text-3xl">
                      {step.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-muted md:text-base md:leading-7">
                      {step.description}
                    </p>
                  </div>
                  <p className="font-label text-xs font-bold uppercase tracking-[0.16em] text-muted-rose md:text-right">
                    Phase {index + 1}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-surface-lowest">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            {
              title: "For product work",
              copy:
                "Discovery becomes requirements, architecture, implementation, testing, launch, and later iteration."
            },
            {
              title: "For security work",
              copy:
                "The journey becomes scope, assessment, evidence, remediation, verification, and safer deployment."
            },
            {
              title: "For growth work",
              copy:
                "The journey becomes positioning, content system, campaign assets, paid testing, and lead review."
            }
          ].map((item) => (
            <Reveal key={item.title}>
              <article className="premium-card premium-hover min-h-72 p-8">
                <h3 className="font-headline text-2xl font-black uppercase text-text">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-6 text-muted">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        description="The next step is not noise. It is a focused discovery message with enough context to route your project correctly."
        title="Start with the right first move."
      />
    </>
  );
}
