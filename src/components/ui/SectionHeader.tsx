import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "split";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeaderProps) {
  const isSplit = align === "split";

  return (
    <div
      className={cn(
        "mb-14",
        align === "center" && "mx-auto max-w-3xl text-center",
        isSplit &&
          "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div className={cn(isSplit && "max-w-3xl")}>
        {eyebrow ? (
          <p className="eyebrow">{eyebrow}</p>
        ) : null}
        <h2 className="section-heading">{title}</h2>
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-xl text-base leading-7 text-muted md:text-lg",
            align === "center" && "mx-auto mt-5",
            isSplit && "md:text-right"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
