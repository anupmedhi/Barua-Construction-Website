import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "left", light }: Props) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className={cn("mb-3 text-sm font-semibold", light ? "text-white/65" : "text-gold")}>
        {eyebrow}
      </p>
      <h2 className={cn("font-display text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl", light ? "text-white" : "text-navy")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-7", light ? "text-white/70" : "text-slate")}>
          {description}
        </p>
      )}
    </div>
  );
}
