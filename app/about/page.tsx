import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Building2, Eye, Flag, Home, Quote, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { founders, milestones, values } from "@/data/about";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Barua Constructions, a Guwahati real estate developer founded in 2004, its leadership, values, and completed developments.",
};

const companyFacts = [
  { value: "2004", label: "Founded in Guwahati", icon: ShieldCheck },
  { value: "5", label: "Completed projects", icon: Building2 },
  { value: "109", label: "Homes delivered", icon: Home },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Barua Constructions" title="Local roots. A legacy of trust.">
        For more than two decades, we have built residential developments around quality, transparency, and lasting customer confidence.
      </PageHero>

      <section className="border-t border-[#ebebeb] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Building in Guwahati since 2004." />
            <div className="mt-7 space-y-5 text-sm leading-7 text-slate/70 md:text-base md:leading-8">
              <p>Barua Constructions was founded in 2004 by Nripendra Baruah. From its Guwahati roots, the company has grown through a steady record of residential development and a close understanding of the local market.</p>
              <p>Five completed projects and 109 delivered homes reflect a practical approach: plan responsibly, maintain dependable standards, and build relationships grounded in transparency. Today, two generations of leadership carry that commitment forward.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {companyFacts.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-5 rounded-2xl border border-[#dce9e6] bg-cloud p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-gold shadow-sm"><Icon size={20} /></span>
                  <div><p className="text-3xl font-semibold tracking-[-0.04em] text-navy">{value}</p><p className="mt-1 text-sm text-slate">{label}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-8 shadow-soft md:p-10">
              <Eye className="mb-7 text-gold" size={30} />
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy">Our vision</h2>
              <p className="mt-5 text-sm leading-7 text-slate/70">To be counted among Assam’s most trusted real estate companies by protecting quality, acting with integrity, and creating lasting confidence for every customer.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl bg-navy p-8 text-white shadow-soft md:p-10">
              <Flag className="mb-7 text-[#76c6bd]" size={30} />
              <h2 className="text-3xl font-semibold tracking-[-0.03em]">Our mission</h2>
              <p className="mt-5 text-sm leading-7 text-white/65">To grow thoughtfully through new developments while preserving the transparent relationships, dependable execution, and quality standards that define our work.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Leadership" title="Two generations. One shared commitment." description="A combination of long-standing real estate experience and a modern, customer-focused outlook." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {founders.map((founder, index) => (
              <Reveal key={founder.name} delay={index * 0.08}>
                <article className="grid h-full overflow-hidden rounded-3xl border border-[#dce9e6] bg-white sm:grid-cols-[.82fr_1.18fr]">
                  <div className="relative min-h-80 sm:min-h-[390px]">
                    <Image src={assetPath(founder.image)} alt={founder.name} fill className="object-cover" sizes="(max-width: 640px) calc(100vw - 40px), 260px" />
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">{founder.role}</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-navy">{founder.name}</h2>
                    <p className="mt-5 text-sm leading-7 text-slate/70">{founder.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#dce9e6] bg-cloud py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="What guides us" title="Trust made visible in the work." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.05}>
                <div className="min-h-60 rounded-2xl border border-[#dce9e6] bg-white p-7">
                  <span className="text-sm font-semibold text-gold">0{index + 1}</span>
                  <h3 className="mt-9 text-xl font-semibold text-navy">{value.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate/65">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-5 my-16 overflow-hidden rounded-3xl bg-navy py-16 text-white md:mx-8 md:my-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#76c6bd]">Our track record</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Five developments, built one commitment at a time.</h2>
          </div>
          <div>
            {milestones.map((item) => (
              <div key={item.title} className="grid gap-2 border-b border-white/10 py-6 first:pt-0 sm:grid-cols-[112px_1fr] sm:gap-6">
                <p className="text-sm font-semibold text-[#76c6bd]">{item.year}</p>
                <div><h3 className="font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Quote className="mx-auto mb-6 text-gold" size={32} />
          <h2 className="text-3xl font-semibold leading-snug tracking-[-0.03em] text-navy md:text-4xl">Quality earns attention. Integrity earns trust.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate/70">That principle has guided Barua Constructions since 2004 and continues to shape every customer relationship.</p>
          <a href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-xl border border-navy px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-cloud">Talk to our team <ArrowRight size={15} /></a>
        </div>
      </section>
    </>
  );
}
