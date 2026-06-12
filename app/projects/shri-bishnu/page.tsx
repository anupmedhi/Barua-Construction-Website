import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Building,
  Car,
  Check,
  Download,
  Dumbbell,
  Expand,
  Flower2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ProjectFaq } from "./project-faq";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shri Bishnu",
  description: "Discover Shri Bishnu, the flagship premium residential development by Barua Construction.",
  openGraph: {
    title: "Shri Bishnu by Barua Construction",
    description: "A considered residential address for modern living in Guwahati.",
    images: ["/images/shri-bishnu.jpg"],
  },
};

const amenities = [
  { icon: Flower2, label: "Landscaped gardens" },
  { icon: Dumbbell, label: "Fitness spaces" },
  { icon: ShieldCheck, label: "Secure community" },
  { icon: Car, label: "Planned parking" },
  { icon: Waves, label: "Leisure amenities" },
  { icon: Sparkles, label: "Refined common areas" },
];

const specifications = [
  "Premium structural system",
  "Selected flooring and finishes",
  "Quality doors and windows",
  "Modern electrical planning",
  "Efficient water systems",
  "Safety and security provisions",
];

function Placeholder({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="grid min-h-64 place-items-center rounded-2xl border border-dashed border-[#b0b0b0] bg-white p-8 text-center">
      <div>
        <Building className="mx-auto mb-4 text-gold" strokeWidth={1.4} />
        <p className="font-display text-xl font-semibold text-navy">{label}</p>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate/55">{detail}</p>
      </div>
    </div>
  );
}

export default function ShriBishnuPage() {
  return (
    <>
      <section className="bg-white px-5 pb-8 pt-24 md:pb-12 md:pt-28 lg:px-8">
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end overflow-hidden rounded-3xl bg-navy text-white">
          <Image src={assetPath("/images/shri-bishnu.jpg")} alt="Shri Bishnu premium residential development" fill priority className="object-cover object-[68%_center] md:object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
          <div className="relative w-full p-6 pb-12 md:p-14 md:pb-16">
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy">Flagship residential project</span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-none tracking-[-0.045em] sm:text-6xl md:text-8xl">Shri Bishnu</h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-white/85">A considered residential experience, imagined around light, landscape, and the comfort of feeling at home.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild><a href="#enquire">Register interest <ArrowRight size={16} /></a></Button>
              <Button variant="outline" asChild><a href="#overview">Explore the project</a></Button>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section id="overview" className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <SectionHeading eyebrow="Project overview" title="A new expression of modern living." />
          <div>
            <p className="font-display text-2xl font-medium leading-relaxed tracking-[-0.02em] text-navy md:text-3xl">
              Shri Bishnu is envisioned as a calm, contemporary residential community where architecture and everyday wellbeing are naturally connected.
            </p>
            <p className="mt-6 text-sm leading-7 text-slate/65">
              Final project details, configurations, approvals, and delivery information will be added here as they are confirmed. The page is structured so each content field can be updated without changing the design.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Location", "Configuration", "Project area", "Possession"].map((label) => (
                <div key={label} className="rounded-2xl border border-[#dddddd] bg-white p-5">
                  <p className="text-xs font-semibold text-slate">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-navy">To be announced</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Gallery" title="Designed to be experienced." description="A visual story of architecture, landscape, materials, and life at Shri Bishnu." />
            <span className="text-sm font-medium text-slate">Gallery images coming soon</span>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:row-span-2 md:aspect-auto">
              <Image src={assetPath("/images/shri-bishnu.jpg")} alt="Shri Bishnu exterior" fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width: 768px) calc(100vw - 40px), 50vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={assetPath("/images/hero-residence.jpg")} alt="Shri Bishnu architectural mood" fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width: 768px) calc(100vw - 40px), 50vw" />
            </div>
            <div className="group grid aspect-[4/3] place-items-center rounded-2xl bg-navy text-white">
              <div className="text-center">
                <Expand className="mx-auto mb-4 text-gold" />
                <p className="font-display text-2xl">More views coming soon</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-white/45">Interiors · amenities · details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Lifestyle amenities" title="More room for the moments that matter." description="The final amenity schedule will be updated when confirmed." />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {amenities.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-[#dddddd] bg-white p-6 text-center transition hover:shadow-md">
                <Icon className="mx-auto mb-5 text-gold" size={27} strokeWidth={1.4} />
                <p className="text-sm font-semibold leading-5 text-navy">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Floor plans" title="Well-planned from the inside out." description="Editable plan cards are ready for final unit configurations, dimensions, and downloadable drawings." />
            <div className="mt-8"><Placeholder label="Floor plans coming soon" detail="Add plan images, unit names, carpet areas, and room dimensions here." /></div>
          </div>
          <div>
            <SectionHeading eyebrow="Location" title="Connected to what matters." description="The exact project address, neighborhood highlights, and interactive map will be added on confirmation." />
            <div className="mt-8 grid min-h-64 place-items-center rounded-2xl bg-white p-8 text-center">
              <div>
                <MapPin className="mx-auto mb-4 text-gold" size={30} />
                <p className="font-display text-2xl text-navy">Guwahati, Assam</p>
                <p className="mt-3 text-sm text-slate/55">Precise location and connectivity details coming soon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Specifications" title="Quality you can see and feel." />
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {specifications.map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-slate-200 pb-4 text-sm text-navy">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/15 text-gold"><Check size={13} /></span>
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-slate/45">All specifications shown are category placeholders and will be replaced with approved project information.</p>
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white md:p-10">
            <p className="text-sm font-semibold text-white/60">Pricing & brochure</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em]">Receive project updates first.</h2>
            <p className="mt-5 text-sm leading-7 text-white/60">Pricing, availability, payment plans, and the official brochure will be shared after release.</p>
            <Button className="mt-8" disabled><Download size={16} /> Brochure coming soon</Button>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Construction progress" title="Follow the journey." description="Dated construction updates and site photographs can be added here as work advances." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["Site preparation", "Structure", "Finishing & handover"].map((phase, index) => (
              <div key={phase} className="rounded-2xl border border-[#dddddd] bg-white p-7">
                <p className="text-xs font-bold text-gold">0{index + 1}</p>
                <h3 className="mt-7 font-display text-xl font-semibold text-navy">{phase}</h3>
                <p className="mt-3 text-sm leading-6 text-slate/55">Progress update pending</p>
                <div className="mt-6 h-1 overflow-hidden bg-slate-100"><div className="h-full w-0 bg-gold" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div className="self-center">
            <p className="text-sm font-semibold text-gold">Register your interest</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-navy">Be among the first to know.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate">Tell us how to reach you and our team will share verified Shri Bishnu updates as they become available.</p>
          </div>
          <div className="rounded-3xl border border-[#dddddd] bg-white p-7 shadow-soft md:p-10"><ContactForm compact /></div>
        </div>
      </section>

      <section className="border-t border-[#ebebeb] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
          <SectionHeading eyebrow="Frequently asked" title="Helpful answers, clearly stated." />
          <ProjectFaq />
        </div>
      </section>

      <section className="border-t border-slate-200 py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-sm lg:px-8">
          <span className="text-slate/50">Explore more from Barua Construction</span>
          <Link href="/projects" className="flex items-center gap-2 font-semibold text-navy">All projects <ArrowRight size={15} /></Link>
        </div>
      </section>
    </>
  );
}
