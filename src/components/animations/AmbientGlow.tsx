"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AmbientGlow({
  className,
  color = "primary",
}: {
  className?: string;
  color?: "primary" | "violet" | "rose";
}) {
  const colorMap = {
    primary: "bg-[#FF5449]",
    violet: "bg-[#4B0082]", // Indigo/Violet
    rose: "bg-[#5E3f3b]",
  };

  return (
    <motion.div
      animate={{
        x: [0, 80, -60, 0],
        y: [0, -60, 80, 0],
        scale: [1, 1.25, 0.9, 1],
        opacity: [0.15, 0.25, 0.15]
      }}
      transition={{
        duration: 25,
        ease: "linear",
        repeat: Infinity
      }}
      className={cn(
        "pointer-events-none absolute h-[500px] w-[500px] rounded-full blur-[120px] mix-blend-screen",
        colorMap[color],
        className
      )}
    />
  );
}
