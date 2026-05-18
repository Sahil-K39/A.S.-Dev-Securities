import type { Metadata } from "next";

import { CrossLinkBlock } from "@/components/sections/CrossLinkBlock";
import { HeroSection } from "@/components/sections/HeroSection";
import { Badge } from "@/components/ui/Badge";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stitchImages } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission, vision, and working philosophy behind A.S. Dev & Securities and Deepindram Films & Ad Agency."
};

const philosophy = [
  "Start with clarity before execution.",
  "Make security and trust part of the product, not a final checklist.",
  "Keep the brand voice sharp, consistent, and commercially useful.",
  "Launch with polish, then measure, learn, and improve."
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        align="left"
        actions={[{ href: "/process", label: "See The Process" }]}
        backgroundImage={{
          alt: "Abstract dark visual connecting technical systems with creative production",
          src: stitchImages.ecosystemCollaboration
        }}
        description="A.S. Dev & Securities and Deepindram Films & Ad Agency work as one umbrella collaboration: technical depth on one side, brand and growth intelligence on the other."
        eyebrow="Collaboration Story"
        title={
          <>
            One Umbrella.
            <br />
            Two Specialist Forces.
          </>
        }
      />

      <section className="site-section">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Mission</p>
            <h2 className="display-heading">
              Build digital work clients can trust.
            </h2>
          </Reveal>
          <Reveal className="space-y-8 md:col-span-7">
            <p className="text-lg leading-8 text-muted">
              The ecosystem exists for businesses that need more than a website,
              more than ads, and more than scattered execution. We bring product
              engineering, cybersecurity thinking, brand strategy, and campaign
              delivery into one disciplined client journey.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="premium-card premium-hover p-7">
                <h3 className="font-headline text-xl font-black uppercase text-text">
                  Technical Trust
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Products, apps, websites, and deployments are planned around
                  performance, maintainability, and risk reduction.
                </p>
              </div>
              <div className="premium-card premium-hover p-7">
                <h3 className="font-headline text-xl font-black uppercase text-text">
                  Market Presence
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Branding, content, campaigns, and paid growth are shaped to
                  create confidence before a client ever speaks to you.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal className="md:col-span-12">
            <ImagePanel
              alt="Abstract bridge between secure engineering and brand growth systems"
              className="group min-h-[19rem] rounded-panel ghost-outline md:min-h-[30rem]"
              imageClassName="opacity-95 motion-safe:group-hover:scale-[1.03]"
              sizes="(min-width: 1280px) 1280px, 100vw"
              src={stitchImages.secureGrowthBridge}
            />
          </Reveal>
        </div>
      </section>

      <section className="site-section bg-surface-lowest">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            align="split"
            description="The collaboration is intentionally split, not mixed. Each vertical owns its craft, then connects at the moments that improve the client outcome."
            eyebrow="How It Complements"
            title="Secure foundations. Strong public presence."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "A secure product base",
                copy:
                  "A.S. Dev & Securities handles apps, websites, web apps, assessments, and launch hardening."
              },
              {
                title: "A sharp market layer",
                copy:
                  "Deepindram Films & Ad Agency turns the offer into brand language, campaigns, social assets, and lead routes."
              },
              {
                title: "A connected journey",
                copy:
                  "The client sees one clean path from discovery to build, secure launch, campaign rollout, and growth."
              }
            ].map((item) => (
              <Reveal key={item.title}>
                <article className="premium-card premium-hover min-h-72 p-8">
                  <h3 className="font-headline text-2xl font-black uppercase leading-tight text-text">
                    {item.title}
                  </h3>
                  <p className="mt-6 text-sm leading-6 text-muted">{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Work Philosophy"
            title="Calm execution. Premium outcomes."
          />
          <div className="flex flex-wrap gap-4">
            {philosophy.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      </section>

      <CrossLinkBlock
        description="Move from philosophy into the exact discovery, build, secure, launch, and grow rhythm clients experience."
        eyebrow="Client Journey"
        href="/process"
        label="View Process"
        title="The work is designed as one polished path."
      />
    </>
  );
}
