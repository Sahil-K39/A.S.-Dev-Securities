"use client";

import Spline from "@splinetool/react-spline";

export function SplineBackground({
  scene = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
  className = ""
}: {
  scene?: string;
  className?: string;
}) {
  return (
    <div className={`relative h-full w-full ${className}`}>
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-background via-background/40 to-transparent"></div>
      <Spline scene={scene} />
    </div>
  );
}
