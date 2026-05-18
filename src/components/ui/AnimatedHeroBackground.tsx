"use client";

import { motion } from "framer-motion";

export function AnimatedHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-[#0b0b0b]">
      {/* Orb 1: Top Left */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-primary/10 mix-blend-screen blur-[120px] md:h-[40vw] md:w-[40vw]"
      />
      
      {/* Orb 2: Bottom Right */}
      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -50, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-[20%] -right-[10%] h-[60vw] w-[60vw] rounded-full bg-red-900/20 mix-blend-screen blur-[140px] md:h-[45vw] md:w-[45vw]"
      />

      {/* Orb 3: Center Accent */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute left-[30%] top-[30%] h-[40vw] w-[40vw] rounded-full bg-primary/5 mix-blend-screen blur-[100px] md:h-[30vw] md:w-[30vw]"
      />
      
      {/* Subtle ambient gradient overlay to blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-[#0b0b0b] opacity-80" />
    </div>
  );
}
