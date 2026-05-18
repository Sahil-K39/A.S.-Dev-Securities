import type { Metadata } from "next";

import { CrossLinkBlock } from "@/components/sections/CrossLinkBlock";
import { FounderCard } from "@/components/sections/FounderCard";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CTASection } from "@/components/ui/CTASection";
import { Icon } from "@/components/ui/Icon";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { asDevServices, cyberSecuritySuite, founders, processSteps, stackBadges } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "A.S. Dev & Securities",
  description:
    "Secure Android, macOS, website, web app, backend, Web3, penetration testing, vulnerability assessment, and deployment hardening services."
};



export default function AsDevSecuritiesPage() {
  const sahil = founders[0];

  return (
    <>
      <section className="site-intro">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8">
            <p className="eyebrow">
              Security First Architecture
            </p>
            <h1 className="display-heading">
              A.S. Dev &
              <br />
              <span className="text-primary">Securities</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted md:text-lg">
              Secure apps, polished websites, protected web apps, penetration
              testing, vulnerability assessment, and deployment hardening for
              businesses that need trust built into the product.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">Initiate Connection</ButtonLink>
              <ButtonLink href="/portfolio" variant="secondary">
                View Technical Work
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal className="md:col-span-4" delay={0.08}>
            <div className="premium-card ghost-outline p-8 group relative overflow-hidden">
              <ImagePanel
                alt="Obsidian monolith with glowing red encryption hashes"
                className="absolute inset-0 z-0"
                imageClassName="opacity-40 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0"
                sizes="(min-width: 768px) 33vw, 100vw"
                src="/images/cyber/encryption_mindset.png"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-background/95 via-background/80 to-transparent pointer-events-none" />

              <div className="relative z-20 mb-16 h-4 w-4 rounded-full bg-primary shadow-redglow" />
              <p className="relative z-20 font-headline text-3xl font-black uppercase leading-none text-text drop-shadow-md">
                256-bit
                <br />
                mindset
              </p>
              <p className="relative z-20 mt-5 text-sm leading-6 text-muted transition-colors group-hover:text-text drop-shadow-sm">
                Strong defaults, careful data flow, and release discipline from
                the first planning conversation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section-tight">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Core Development"
            title="Apps, websites, security, and hardened deployment."
          />
          <div className="grid gap-10 md:grid-cols-3">
            {asDevServices.map((service) => (
              <Reveal key={service.title}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-surface-lowest">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Defensive Strategy"
            title="Cybersecurity Suite"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2 h-auto md:h-[600px]">
            {/* Penetration Testing */}
            <Reveal className="group relative flex flex-col justify-end overflow-hidden rounded-xl bg-surface p-12 md:col-span-2 md:row-span-2 premium-hover premium-card border border-outline/20">
              <ImagePanel
                alt="Abstract terminal screens representing penetration testing"
                className="absolute inset-0 z-0"
                imageClassName="opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                sizes="(min-width: 768px) 50vw, 100vw"
                src="/images/cyber/penetration_testing.png"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/90 to-background/20 pointer-events-none" />
              
              <div className="absolute right-0 top-0 z-20 p-8">
                <Icon className="text-6xl text-primary/20 transition-colors group-hover:text-primary" name={cyberSecuritySuite[0].icon} />
              </div>
              <h3 className="relative z-20 mb-6 font-headline text-3xl tracking-wider text-text uppercase">
                {cyberSecuritySuite[0].title}
              </h3>
              <p className="relative z-20 max-w-sm text-sm leading-relaxed text-muted group-hover:text-text transition-colors">
                {cyberSecuritySuite[0].description}
              </p>
            </Reveal>

            {/* Threat Monitoring */}
            <Reveal className="group relative flex items-center gap-8 overflow-hidden rounded-xl bg-surface p-8 premium-hover premium-card border border-outline/20 md:col-span-2" delay={0.05}>
              <ImagePanel
                alt="A dark map with glowing red network nodes"
                className="absolute inset-0 z-0"
                imageClassName="opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                sizes="(min-width: 768px) 50vw, 100vw"
                src="/images/cyber/threat_monitoring.png"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/95 to-background/40 pointer-events-none" />
              
              <div className="relative z-20 rounded-full bg-surface-lowest p-4">
                <Icon className="text-3xl text-primary" name={cyberSecuritySuite[1].icon} />
              </div>
              <div className="relative z-20">
                <h4 className="mb-1 font-headline text-lg uppercase tracking-widest text-text">
                  {cyberSecuritySuite[1].title}
                </h4>
                <p className="text-sm text-muted group-hover:text-text transition-colors">
                  {cyberSecuritySuite[1].description}
                </p>
              </div>
            </Reveal>

            {/* Incident Response */}
            <Reveal className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface p-8 transition-colors premium-hover premium-card border border-outline/20" delay={0.1}>
              <ImagePanel
                alt="Red fiber optic laser lights moving through a dark tunnel"
                className="absolute inset-0 z-0"
                imageClassName="opacity-40 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0"
                sizes="(min-width: 768px) 25vw, 100vw"
                src="/images/cyber/incident_response.png"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/95 via-background/70 to-transparent pointer-events-none" />

              <h4 className="relative z-20 mb-4 font-headline text-sm uppercase tracking-widest text-text drop-shadow-md">
                {cyberSecuritySuite[2].title}
              </h4>
              <div className="relative z-20">
                <Icon className="text-4xl text-primary" name={cyberSecuritySuite[2].icon} />
              </div>
            </Reveal>

            {/* Identity Access */}
            <Reveal className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface p-8 transition-colors premium-hover premium-card border border-outline/20" delay={0.15}>
              <ImagePanel
                alt="Glowing neon red biometric fingerprint scanner in dark room"
                className="absolute inset-0 z-0"
                imageClassName="opacity-40 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0"
                sizes="(min-width: 768px) 25vw, 100vw"
                src="/images/cyber/identity_access.png"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/95 via-background/70 to-transparent pointer-events-none" />

              <h4 className="relative z-20 mb-4 font-headline text-sm uppercase tracking-widest text-text drop-shadow-md">
                {cyberSecuritySuite[3].title}
              </h4>
              <div className="relative z-20">
                <Icon className="text-4xl text-primary" name={cyberSecuritySuite[3].icon} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="mx-auto max-w-4xl">
          <SectionHeader align="center" eyebrow="How I Work" title="Development Journey" />
          <div className="relative mt-16 space-y-16">
            <div className="absolute bottom-0 left-8 top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
            {processSteps.slice(0, 4).map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <Reveal 
                  delay={index * 0.08} 
                  key={step.title} 
                  className={cn("relative flex items-center justify-start gap-8 md:justify-between py-2 md:py-0", isEven && "md:flex-row-reverse")}
                >
                  {/* Text Container */}
                  <div className={cn("w-full pl-24 md:w-5/12 md:pl-0", isEven ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right")}>
                    <h4 className="mb-2 font-headline text-lg font-black uppercase tracking-widest text-text">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                  
                  {/* Center Node */}
                  <div className="absolute left-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background md:left-1/2" />

                  {/* Number Container */}
                  <div className={cn("hidden md:block md:w-5/12", isEven ? "pr-12 text-right" : "pl-12 text-left")}>
                    <span className="font-headline text-4xl font-black text-primary/20">{step.step}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-section-tight bg-surface-lowest">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeader
            align="center"
            eyebrow="Tech Stack"
            title="Engineered with precision."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {stackBadges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="A premium profile section for the technical founder, focused on strengths, languages, tools, process, and the trust mindset behind the vertical."
            eyebrow="Founder Profile"
            title="Sahil Kalot"
          />
          <FounderCard founder={sahil} />
          <div className="premium-card mt-8 p-8">
            <h3 className="font-headline text-2xl font-black uppercase text-text">
              Secure development philosophy
            </h3>
            <p className="mt-5 max-w-4xl text-base leading-7 text-muted">
              Products should feel fast and premium, but they should also be
              understandable, maintainable, and resilient. The work balances
              performance, user trust, clean code, careful tooling, and launch
              readiness so the final system can keep serving the business after
              it goes live.
            </p>
          </div>
        </div>
      </section>

      <CrossLinkBlock
        description="When the product foundation is ready, the creative and growth vertical shapes the public story, campaigns, and lead journey."
        eyebrow="Partner Vertical"
        href="/deepindram-films-ad-agency"
        label="Explore Growth"
        title="Connect secure products with stronger market presence."
      />

      <CTASection
        description="Bring the product, security, and deployment challenge into one focused conversation."
        title="Ready to secure your digital legacy?"
      />
    </>
  );
}
