import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Reveal } from "@/components/ui/Reveal";
import { SplineBackground } from "@/components/sections/SplineBackground";
import { BreathingText } from "@/components/animations/BreathingText";
import { cn } from "@/lib/utils";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type HeroSectionProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions?: HeroAction[];
  backgroundImage?: {
    src: string;
    alt: string;
  };
  align?: "center" | "left";
  className?: string;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  actions = [],
  backgroundImage,
  align = "center",
  className
}: HeroSectionProps) {
  const isCenter = align === "center";

  return (
    <section
      className={cn(
        "relative isolate flex min-h-[82svh] items-center overflow-hidden px-5 pb-16 pt-32 sm:px-6 md:min-h-[86svh] md:pb-20 md:pt-36",
        className
      )}
    >
      {backgroundImage ? (
        <>
          <ImagePanel
            alt={backgroundImage.alt}
            className="absolute inset-0 -z-20 rounded-none opacity-45"
            imageClassName="scale-105 grayscale"
            priority
            sizes="100vw"
            src={backgroundImage.src}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/55 via-background/70 to-background" />
        </>
      ) : <SplineBackground className="absolute inset-0 -z-20 object-cover" />}

      <Reveal
        className={cn(
          "mx-auto w-full max-w-7xl",
          isCenter ? "text-center" : "text-left"
        )}
      >
        <p className="eyebrow">{eyebrow}</p>
        <BreathingText>
          <h1
            className={cn(
              "display-heading lg:text-8xl",
              isCenter ? "mx-auto max-w-5xl" : "max-w-5xl"
            )}
          >
            {title}
          </h1>
        </BreathingText>
        <p
          className={cn(
            "mt-7 max-w-2xl text-base leading-7 text-muted md:text-xl",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </p>
        {actions.length > 0 ? (
          <div
            className={cn(
              "mt-10 flex flex-col gap-4 sm:flex-row",
              isCenter ? "justify-center" : "justify-start"
            )}
          >
            {actions.map((action) => (
              <ButtonLink
                className="w-full sm:w-auto"
                href={action.href}
                key={action.href}
                variant={action.variant || "primary"}
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
        ) : null}
      </Reveal>
    </section>
  );
}
