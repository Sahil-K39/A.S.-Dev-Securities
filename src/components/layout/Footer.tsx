import Link from "next/link";

import { contactDetails, navLinks, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-neutral-950 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link
            className="font-headline text-xl font-black uppercase text-text"
            href="/"
          >
            {siteConfig.shortName}
          </Link>
          <p className="mt-5 text-sm leading-6 text-neutral-400">
            A secure product and growth collective from Ajmer, combining technical
            depth with cinematic brand execution.
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.12em] text-neutral-500">
            © 2026 A.S. Dev & Securities x Deepindram Films & Ad Agency. All rights reserved.
          </p>
        </div>

        <div>
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Network
          </p>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <Link
                className="text-sm text-neutral-400 transition-colors hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact
          </p>
          <div className="mt-5 grid gap-3 text-sm text-neutral-400">
            <a
              className="transition-colors hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              href={`mailto:${contactDetails.email}`}
            >
              {contactDetails.email}
            </a>
            <a
              className="transition-colors hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              href={contactDetails.whatsappUrl}
            >
              {contactDetails.whatsappLabel}
            </a>
            <span>{contactDetails.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
