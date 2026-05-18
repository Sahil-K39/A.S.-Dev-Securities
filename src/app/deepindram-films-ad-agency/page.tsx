import type { Metadata } from "next";

import { FounderCard } from "@/components/sections/FounderCard";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/ui/CTASection";
import { Icon } from "@/components/ui/Icon";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { founders, stitchImages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Deepindram Films & Ad Agency",
  description:
    "Digital marketing, branding, social media growth, paid advertising, creative campaigns, content strategy, lead generation, and visual work."
};

const campaignCards = [
  {
    title: "The Nocturne Series",
    label: "CINEMATIC AD",
    image: stitchImages.campaignOne,
    alt: "Stylized cinematic close-up of a high-end luxury watch"
  },
  {
    title: "Urban Echo",
    label: "BRAND STORY",
    image: stitchImages.campaignTwo,
    alt: "Dramatic urban fashion shoot"
  },
  {
    title: "Infinite Horizon",
    label: "DOCUSERIES",
    image: stitchImages.campaignThree,
    alt: "Behind-the-scenes shot of a film director"
  }
];

export default function DeepindramPage() {
  const creativeFounder = founders[1];

  return (
    <>
      <HeroSection
        actions={[
          { href: "/portfolio", label: "View Showreel" },
          { href: "/process", label: "Our Philosophy", variant: "secondary" }
        ]}
        backgroundImage={{
          src: stitchImages.filmHero,
          alt: "Cinematic film set with moody professional lighting"
        }}
        description="Deepindram Films & Ad Agency blends cinematic storytelling with practical growth strategy for brands that need attention, trust, and consistent demand."
        eyebrow="BRAND GROWTH SYSTEMS"
        title={
          <span className="flex flex-col leading-none md:inline">
            SCALING <span className="bg-gradient-to-r from-text via-primary to-text bg-clip-text text-transparent">BRAND</span> GROWTH.
          </span>
        }
      />

      <section className="mx-auto max-w-7xl px-8 py-32">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
          <Reveal className="space-y-8 md:col-span-5">
            <h2 className="font-headline text-4xl font-bold uppercase leading-tight tracking-widest text-text md:text-6xl">
              Identity <br />
              <span className="text-primary">&amp;</span> Essence
            </h2>
            <div className="h-1 w-24 bg-primary"></div>
            <p className="text-lg leading-relaxed text-muted">
              For a growing business, branding is more than a logo; it&apos;s the visual and verbal system that helps people understand, remember, and trust the offer.
            </p>
            <ul className="space-y-4 font-headline text-sm uppercase tracking-widest text-text">
              <li className="flex items-center gap-4">
                <Icon className="text-primary" name="token" /> Visual Architecture
              </li>
              <li className="flex items-center gap-4">
                <Icon className="text-primary" name="palette" /> Chromatic Strategy
              </li>
              <li className="flex items-center gap-4">
                <Icon className="text-primary" name="history_edu" /> Narrative Design
              </li>
            </ul>
          </Reveal>
          <Reveal className="relative md:col-span-7" delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-ambient">
              <ImagePanel
                alt="Abstract premium brand identity scene"
                className="h-full w-full"
                imageClassName="brightness-110 saturate-125 transition-transform duration-700 hover:scale-110"
                sizes="(min-width: 768px) 50vw, 100vw"
                src={stitchImages.branding}
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden max-w-xs rounded-lg bg-surface-high p-8 shadow-2xl md:block">
              <p className="font-headline text-3xl font-bold italic text-primary">&ldquo;Impact is silent until it&apos;s felt.&rdquo;</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-lowest px-8 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center md:text-left">
            <span className="font-label text-xs uppercase tracking-widest text-primary">SCALABILITY</span>
            <h2 className="mt-4 font-headline text-5xl font-bold uppercase tracking-tighter text-text">Growth Architectures</h2>
          </div>
          <div className="grid h-auto grid-cols-1 gap-6 md:h-[800px] md:grid-cols-4 md:grid-rows-2">
            
            {/* Digital Marketing */}
            <Reveal className="group relative flex min-h-[30rem] flex-col justify-between overflow-hidden rounded-xl bg-surface-high p-10 md:col-span-2 md:row-span-2">
              <ImagePanel
                alt="Red growth arrow visual for campaign scaling"
                className="absolute inset-0 rounded-none opacity-70"
                imageClassName="brightness-110 saturate-125 motion-safe:group-hover:scale-[1.04]"
                sizes="(min-width: 768px) 50vw, 100vw"
                src={stitchImages.growth}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/85 via-neutral-950/55 to-neutral-950/20" />
              <div className="relative z-10">
                <Icon className="mb-6 text-5xl text-primary" name="rocket_launch" />
                <h3 className="mb-4 font-headline text-3xl font-bold uppercase text-text">Launch Synergy</h3>
                <p className="max-w-sm leading-relaxed text-muted">We do not just run ads; we connect content, visual identity, landing pages, and campaign signals so every touchpoint supports the next business conversation.</p>
              </div>
              <div className="absolute bottom-0 right-0 opacity-10 transition-opacity group-hover:opacity-20">
                <Icon className="text-[300px]" name="query_stats" />
              </div>
            </Reveal>

            {/* Growth Strategy */}
            <Reveal className="group grid gap-6 overflow-hidden rounded-xl bg-surface-high p-6 sm:grid-cols-[minmax(10rem,0.42fr)_1fr] sm:items-center md:col-span-2 md:p-8" delay={0.06}>
              <div className="min-h-[13rem] overflow-hidden rounded-lg sm:h-full sm:min-h-[10rem]">
                <ImagePanel
                  alt="Growth campaign dashboard and creative planning"
                  className="h-full min-h-[13rem] w-full sm:min-h-[10rem]"
                  imageClassName="brightness-110 saturate-125 transition-all duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 18vw, 33vw"
                  src={stitchImages.growth}
                />
              </div>
              <div>
                <h3 className="mb-2 font-headline text-xl font-bold uppercase text-text">Venture Scaling</h3>
                <p className="text-sm text-muted">Go-to-market support through sharper positioning, content rhythm, paid campaign structure, and audience learning.</p>
              </div>
            </Reveal>

            {/* Production */}
            <Reveal className="group relative flex min-h-[16rem] flex-col justify-center overflow-hidden rounded-xl bg-surface-high p-8 text-center md:col-span-1" delay={0.12}>
              <ImagePanel
                alt="Cinematic production set with dark premium lighting"
                className="absolute inset-0 rounded-none opacity-75"
                imageClassName="brightness-110 saturate-125 motion-safe:group-hover:scale-[1.06]"
                sizes="(min-width: 768px) 25vw, 100vw"
                src={stitchImages.filmHero}
              />
              <div className="absolute inset-0 bg-neutral-950/55" />
              <Icon className="relative z-10 mx-auto mb-4 text-4xl text-primary transition-transform group-hover:scale-125" name="movie" />
              <h3 className="relative z-10 font-headline text-sm font-bold uppercase tracking-widest text-text">Film Unit</h3>
            </Reveal>

            {/* Ad Agency */}
            <Reveal className="group relative flex min-h-[16rem] flex-col justify-center overflow-hidden rounded-xl bg-primary p-8 text-center text-text md:col-span-1" delay={0.18}>
              <ImagePanel
                alt="Creative advertising campaign image with red cinematic lighting"
                className="absolute inset-0 rounded-none opacity-80"
                imageClassName="brightness-110 saturate-125 motion-safe:group-hover:scale-[1.06]"
                sizes="(min-width: 768px) 25vw, 100vw"
                src={stitchImages.campaignTwo}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/42 to-primary/20" />
              <Icon className="relative z-10 mx-auto mb-4 text-4xl text-primary-soft transition-transform group-hover:rotate-12" name="campaign" />
              <h3 className="relative z-10 font-headline text-sm font-bold uppercase tracking-widest">Ad Lab</h3>
            </Reveal>

          </div>
        </div>
      </section>

      <section className="px-4 py-32 md:px-0">
        <div className="mx-auto mb-16 flex max-w-7xl flex-col items-end gap-8 px-4 md:flex-row md:justify-between">
          <div className="max-w-xl">
            <span className="font-label uppercase tracking-widest text-primary">Portfolio</span>
            <h2 className="mt-4 font-headline text-5xl font-bold uppercase tracking-tighter text-text md:text-7xl">Selected <br />Campaigns</h2>
          </div>
          <p className="max-w-sm border-b border-outline-variant pb-2 text-lg text-muted">
            An archive of high-velocity visual narratives that moved the needle.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
          {campaignCards.map((card, i) => (
            <Reveal delay={i * 0.1} key={card.title} className="group relative aspect-video overflow-hidden border border-outline/10 bg-surface-high md:aspect-[3/4]">
              <ImagePanel
                alt={card.alt}
                className="absolute inset-0"
                imageClassName="scale-105 transition-transform duration-1000 group-hover:scale-100"
                sizes="(min-width: 768px) 33vw, 100vw"
                src={card.image}
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/78 via-black/22 to-transparent p-10 transition-all duration-500 group-hover:from-black/72">
                <span className="mb-2 font-label text-primary">{card.label}</span>
                <h3 className="font-headline text-2xl font-bold uppercase text-white shadow-black drop-shadow-xl">{card.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-low px-8 py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-12 font-headline text-4xl font-extrabold uppercase tracking-tighter text-text md:text-7xl">
            WE DO NOT <span className="italic text-primary">DECORATE</span>. WE <span className="underline decoration-primary/40 underline-offset-8">COMMUNICATE</span>.
          </h2>
          <p className="mb-16 font-body text-xl leading-relaxed text-muted md:text-2xl">
            Deepindram Films was founded on the belief that growing ventures need more than scattered marketing; they need visual narratives, consistent content, and campaigns that build trust before the first conversation.
          </p>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <div className="mb-2 font-headline text-4xl font-bold text-primary">12+</div>
              <div className="font-label text-xs uppercase tracking-widest text-muted">YEARS VISUAL CRAFT</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-headline text-4xl font-bold text-primary">360</div>
              <div className="font-label text-xs uppercase tracking-widest text-muted">CAMPAIGN SUPPORT</div>
            </div>
            <div className="text-center">
              <div className="mb-2 font-headline text-4xl font-bold text-primary">AJMER</div>
              <div className="font-label text-xs uppercase tracking-widest text-muted">LOCAL BASE</div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Behind the visual narratives and scaling strategies."
            eyebrow="Creative Direction"
            title="The Architect"
          />
          <FounderCard founder={creativeFounder} />
        </div>
      </section>

      <CTASection
        description="Bring the brand, campaign, content, or growth challenge into one focused project path."
        title="We do not decorate. We communicate."
      />
    </>
  );
}
