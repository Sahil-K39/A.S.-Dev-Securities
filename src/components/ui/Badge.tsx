import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex select-none items-center gap-3 rounded-full bg-surface-high px-4 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-text transition-colors duration-300 hover:bg-surface-bright sm:px-5 sm:text-xs",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
      {children}
    </span>
  );
}
