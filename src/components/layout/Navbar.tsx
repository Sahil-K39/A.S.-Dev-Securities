"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

import { navLinks, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:pt-6">
      <motion.nav
        animate={{ opacity: 1, y: 0 }}
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-neutral-950/75 px-4 py-3 shadow-ambient ring-1 ring-white/5 backdrop-blur-2xl md:px-7"
        initial={{ opacity: 0, y: -18 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          aria-label={`${siteConfig.shortName} home`}
          className="focus-ring rounded-full px-2 font-headline text-lg font-black uppercase text-text transition-colors hover:text-primary-soft md:text-xl"
          href="/"
        >
          {siteConfig.shortName}
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring rounded-full px-1 py-2 font-headline text-xs font-bold uppercase tracking-[0.14em] text-neutral-400 transition-colors duration-300 hover:text-text",
                  active && "text-text underline decoration-primary decoration-2 underline-offset-8"
                )}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            className="focus-ring hidden rounded-full bg-primary px-6 py-2.5 font-label text-xs font-bold uppercase tracking-[0.14em] text-on-primary transition-all duration-300 ease-premium hover:bg-primary-soft motion-safe:hover:-translate-y-0.5 sm:inline-flex"
            href="/contact"
          >
            Contact
          </Link>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="focus-ring rounded-full bg-surface-high px-4 py-2 text-sm font-semibold text-text transition-colors duration-300 hover:bg-surface-bright lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </motion.nav>

      {isOpen ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-7xl rounded-card bg-neutral-950/95 p-4 shadow-ambient ring-1 ring-white/5 backdrop-blur-2xl lg:hidden"
          id="mobile-navigation"
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <div className="grid gap-2">
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "focus-ring rounded-2xl px-4 py-3 font-headline text-sm font-bold uppercase tracking-[0.12em] text-neutral-300 transition-colors duration-300 hover:bg-surface-high hover:text-text",
                    active && "bg-surface-high text-text"
                  )}
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              className="focus-ring rounded-2xl bg-primary px-4 py-3 text-center font-label text-xs font-bold uppercase tracking-[0.14em] text-on-primary"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
