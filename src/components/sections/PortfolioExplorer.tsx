"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import { FilterTabs } from "@/components/sections/FilterTabs";
import { PortfolioCard } from "@/components/sections/PortfolioCard";
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory
} from "@/lib/content";

export function PortfolioExplorer() {
  const [active, setActive] = useState<PortfolioCategory>("All");
  const reduceMotion = useReducedMotion();
  const filtered = useMemo(
    () =>
      active === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <section className="px-5 pb-20 pt-4 md:px-6 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <FilterTabs
          active={active}
          categories={portfolioCategories}
          onChange={setActive}
        />
        <p aria-live="polite" className="sr-only">
          Showing {filtered.length} portfolio items for {active}.
        </p>
        <motion.div
          className="mt-12 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-12 md:gap-6"
          layout={!reduceMotion}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                className={
                  item.size === "large"
                    ? "md:col-span-8"
                    : item.size === "wide"
                      ? "md:col-span-7"
                      : "md:col-span-4"
                }
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                key={item.slug}
                layout={!reduceMotion}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              >
                <PortfolioCard className="h-full md:col-span-12" item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
