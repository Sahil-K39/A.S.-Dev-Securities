"use client";

import type { PortfolioCategory } from "@/lib/content";
import { cn } from "@/lib/utils";

type FilterTabsProps = {
  categories: readonly PortfolioCategory[];
  active: PortfolioCategory;
  onChange: (category: PortfolioCategory) => void;
};

export function FilterTabs({ categories, active, onChange }: FilterTabsProps) {
  return (
    <div
      aria-label="Portfolio categories"
      className="flex flex-wrap gap-3"
    >
      {categories.map((category) => (
        <button
          aria-pressed={active === category}
          className={cn(
            "focus-ring min-h-11 rounded-full bg-surface-high px-5 py-2.5 font-label text-xs font-bold uppercase tracking-[0.14em] text-text transition-all duration-300 ease-premium hover:bg-surface-bright hover:ring-1 hover:ring-primary/25",
            active === category &&
              "bg-primary text-on-primary shadow-redglow hover:bg-primary-soft"
          )}
          key={category}
          onClick={() => onChange(category)}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
