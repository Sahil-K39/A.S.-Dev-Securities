"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export function StaggeredText({
  text,
  className
}: {
  text: string;
  className?: string;
}) {
  const lines = text.split("\n");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", damping: 20, stiffness: 100 }
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -40,
      transition: { type: "spring", damping: 20, stiffness: 100 }
    }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("inline-block perspective-1000", className)}
    >
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block overflow-hidden pb-2">
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              variants={child}
              key={wordIndex}
              className="inline-block mr-[0.25em]"
              style={{ transformOrigin: "bottom center" }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
