import { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-white pb-14 pt-32 md:pb-16 md:pt-40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mb-4 text-sm font-semibold text-gold">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-navy md:text-6xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-base leading-7 text-slate">{children}</div>}
      </div>
    </section>
  );
}
