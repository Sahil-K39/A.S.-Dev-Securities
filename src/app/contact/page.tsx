import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Reveal } from "@/components/ui/Reveal";
import { contactDetails, stitchImages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact A.S. Dev & Securities and Deepindram Films & Ad Agency for development, cybersecurity, branding, marketing, and creative work."
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-40">
        {/* Hero Header */}
        <header className="mb-24 flex flex-col items-end justify-between gap-8 md:flex-row">
          <Reveal className="max-w-2xl">
            <span className="mb-4 block font-label text-xs uppercase tracking-widest text-primary">Get in Touch</span>
            <h1 className="font-headline text-5xl font-extrabold leading-none tracking-tighter text-text md:text-7xl">
                LET&apos;S CREATE <br/> THE FUTURE.
            </h1>
          </Reveal>
          <Reveal className="max-w-sm" delay={0.08}>
            <p className="border-r-2 border-primary pr-6 font-body text-xl text-muted md:text-right">
                Direct access to the technical and creative leads for secure builds, campaigns, audits, and growth work.
            </p>
          </Reveal>
        </header>

        <section className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Form Section */}
          <Reveal className="rounded-xl bg-surface-low p-8 shadow-2xl md:p-12 lg:col-span-7">
            <ContactForm />
          </Reveal>

          {/* Contextual Actions & Contact Info */}
          <div className="space-y-12 lg:col-span-5">
            
            {/* WhatsApp Integration */}
            <Reveal>
              <div className="group flex flex-col items-center rounded-xl bg-surface-high p-8 text-center transition-colors duration-500 hover:bg-surface-highest md:p-10">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-redglow transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-4xl text-background" name="forum" />
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold tracking-tight text-text">INSTANT DISCOVERY</h3>
                <p className="mb-8 max-w-xs text-balance font-body text-sm text-muted">Chat directly with the team for project fit, timelines, and next steps.</p>
                <a className="flex w-full items-center justify-center gap-3 rounded-full bg-[#FF2A2A] py-4 font-headline font-bold uppercase tracking-widest text-text transition-all duration-300 hover:bg-red-500" href={contactDetails.whatsappUrl}>
                  <Icon className="text-lg" name="chat" />
                  {contactDetails.whatsappLabel}
                </a>
              </div>
            </Reveal>

            {/* Studio Locations / Identity */}
            <Reveal delay={0.08}>
              <div className="space-y-8 border-l border-outline/20 pl-4">
                <div>
                  <span className="mb-2 block font-label text-xs uppercase tracking-widest text-primary">Digital Core</span>
                  <p className="font-body text-lg text-text">{contactDetails.location}</p>
                </div>
                <div>
                   <span className="mb-2 block font-label text-xs uppercase tracking-widest text-primary">General Inquiry</span>
                   <p className="font-body text-lg text-text">{contactDetails.email}</p>
                </div>
                <div>
                   <span className="mb-2 block font-label text-xs uppercase tracking-widest text-primary">Phone</span>
                   <p className="font-body text-lg text-text">{contactDetails.phone}</p>
                </div>

                <div className="group relative mt-12 h-48 w-full overflow-hidden rounded-xl bg-surface-low">
                   <div className="pointer-events-none absolute inset-0 z-10 bg-neutral-900/40"></div>
                   <ImagePanel
                      alt="Modern dark minimalist office interior"
                      className="absolute inset-0"
                      imageClassName="opacity-60 grayscale transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      src={stitchImages.office}
                   />
                   <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                       <span className="h-2 w-2 animate-pulse rounded-full bg-primary"></span>
                       <span className="font-label text-[10px] uppercase tracking-widest text-text">CURRENTLY ACTIVE</span>
                   </div>
                </div>
              </div>
            </Reveal>

          </div>
        </section>
      </section>
    </>
  );
}
