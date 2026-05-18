"use client";

import { motion } from "framer-motion";

export function BreathingText({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        backgroundPosition: ["200% center", "-200% center"]
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
      className={className}
      style={{
        backgroundImage: "linear-gradient(110deg, rgba(255, 255, 255, 0.9) 40%, #ff5449 50%, rgba(255, 255, 255, 0.9) 60%)",
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent"
      }}
    >
      {children}
    </motion.div>
  );
}
