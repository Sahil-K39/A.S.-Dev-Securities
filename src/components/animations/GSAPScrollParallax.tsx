"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function GSAPScrollParallax({
  children,
  speed = 0.5,
  className = ""
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !elementRef.current) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        animation: gsap.fromTo(
          elementRef.current,
          { y: -100 * speed },
          { y: 100 * speed, ease: "none" }
        ),
        scrub: true
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={`overflow-hidden absolute inset-0 ${className}`} ref={containerRef}>
      <div className="absolute inset-0 top-[-20%] h-[140%] w-full" ref={elementRef}>
        {children}
      </div>
    </div>
  );
}
