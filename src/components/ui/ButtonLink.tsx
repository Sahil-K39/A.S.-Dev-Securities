import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

const variants = {
  primary:
    "bg-primary text-on-primary shadow-redglow group hover:bg-primary-soft motion-safe:hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-text ring-1 ring-outline/35 group hover:bg-surface-high hover:ring-primary/35 motion-safe:hover:-translate-y-0.5",
  text: "px-0 py-0 text-text hover:text-primary"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: ButtonLinkProps) {
  const base =
    variant === "text"
      ? "focus-ring inline-flex items-center gap-3 font-label text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300"
      : "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-8 py-3.5 font-label text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 ease-premium";

  return (
    <Link className={cn(base, variants[variant], variant !== "text" && "relative overflow-hidden", className)} href={href}>
      <span className="relative z-20 flex items-center justify-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 z-10 -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%]" />
      )}
    </Link>
  );
}
