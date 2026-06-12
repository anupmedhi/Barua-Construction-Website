import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Eye, Flag, Quote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { milestones, values } from "@/data/about";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the story, values, and vision behind Barua Construction.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Barua Construction" title="Built on trust. Shaped by purpose.">
        We believe the best developments improve everyday life while creating value that lasts across generations.
      </PageHero>

      <section className="border-t border-[#ebebeb] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="A local understanding, elevated by a modern point of view." />
            <div className="mt-7 space-y-5 text-sm leading-7 text-slate/70">
              <p>Barua Construction began with a clear idea: that quality homes should be as dependable as they are beautiful. What started as a focused construction practice has grown into a trusted real estate company serving families and businesses across Assam.</p>
              <p>Our strength lies in the balance between rigorous execution and deeply human design. We listen closely, plan responsibly, and stay involved in every detail that defines the finished experience.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
              <Image src={assetPath("/images/hero-residence.jpg")} alt="Barua Construction architecture" fill className="object-cover" sizes="(max-width: 1024px) calc(100vw - 40px), 50vw" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white p-5 text-navy shadow-lg">
                <p className="font-display text-2xl font-semibold">Since 2008</p>
                <p className="mt-1 text-xs text-slate">Building across Assam</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-8 shadow-soft md:p-10">
              <Eye className="mb-7 text-gold" size={30} />
              <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-navy">Our vision</h2>
              <p className="mt-5 text-sm leading-7 text-slate/70">To be Assam’s most trusted name in thoughtful real estate, creating landmark spaces that enrich communities and stand the test of time.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl bg-navy p-8 text-white shadow-soft md:p-10">
              <Flag className="mb-7 text-gold" size={30} />
              <h2 className="font-display text-3xl font-semibold tracking-[-0.03em]">Our mission</h2>
              <p className="mt-5 text-sm leading-7 text-white/60">To deliver well-planned developments through transparent relationships, responsible engineering, and an unwavering commitment to quality.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="What guides us" title="Values visible in the work." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="min-h-64 rounded-2xl border border-[#dddddd] bg-white p-7">
                  <span className="text-sm font-semibold text-gold">0{index + 1}</span>
                  <h3 className="mt-10 font-display text-xl font-semibold text-navy">{value.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate/65">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-5 mb-16 rounded-3xl bg-navy py-16 text-white md:mx-8 md:mb-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold text-white/60">Our journey</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Milestones made one commitment at a time.</h2>
          </div>
          <div>
            {milestones.map((item) => (
              <div key={item.year} className="grid grid-cols-[80px_1fr] gap-5 border-b border-white/10 py-6 first:pt-0">
                <p className="font-display text-xl text-gold">{item.year}</p>
                <p className="text-sm leading-6 text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Quote className="mx-auto mb-6 text-gold" size={32} />
          <h2 className="font-display text-3xl font-semibold leading-snug tracking-[-0.03em] text-navy md:text-4xl">“We are not only building for the next handover. We are building for the next generation.”</h2>
          <p className="mt-7 text-sm font-semibold text-gold">Leadership, Barua Construction</p>
          <a href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-xl border border-navy px-4 py-2.5 text-sm font-semibold text-navy">Meet our team <ArrowRight size={15} /></a>
        </div>
      </section>
    </>
  );
}
