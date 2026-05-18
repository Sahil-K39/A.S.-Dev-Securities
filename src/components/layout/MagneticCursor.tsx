"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function MagneticCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 220, damping: 28 });
  const springY = useSpring(y, { stiffness: 220, damping: 28 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      setIsVisible(true);
      x.set(event.clientX - 22);
      y.set(event.clientY - 22);
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      setIsActive(Boolean(target?.closest("a, button, input, textarea, select")));
    };

    const onLeave = () => setIsVisible(false);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-11 w-11 rounded-full bg-primary/10 blur-[1px] mix-blend-screen lg:block"
      style={{ x: springX, y: springY }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isActive ? 1.85 : 1
      }}
      transition={{ duration: 0.18 }}
    />
  );
}
