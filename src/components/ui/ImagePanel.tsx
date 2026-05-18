import Image from "next/image";

import { cn } from "@/lib/utils";

type ImagePanelProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ImagePanel({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes
}: ImagePanelProps) {
  return (
    <div className={cn("relative overflow-hidden bg-surface-high", className)}>
      <Image
        alt={alt}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-premium motion-reduce:transition-none",
          imageClassName
        )}
        fill
        priority={priority}
        sizes={sizes || "100vw"}
        src={src}
      />
    </div>
  );
}
