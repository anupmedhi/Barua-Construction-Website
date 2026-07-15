import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Car,
  Check,
  Download,
  GraduationCap,
  Hospital,
  Route,
  Sparkles,
  Store,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ProjectFaq } from "./project-faq";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shri Bishnu",
  description: "Discover Shri Bishnu, a premium residential apartment complex at Ahomgaon, Guwahati by Barua Construction.",
  openGraph: {
    title: "Shri Bishnu by Barua Construction",
    description: "A premium residential apartment complex at Ahomgaon, Guwahati.",
    images: ["/images/shri-bishnu-brochure/render-front-web.jpg"],
  },
};

const amenities = [
  { icon: Hospital, label: "Hospitals nearby" },
  { icon: GraduationCap, label: "Schools nearby" },
  { icon: Route, label: "NH 715 access" },
  { icon: Car, label: "ISBT connectivity" },
  { icon: Store, label: "Business hubs" },
  { icon: Sparkles, label: "Daily conveniences" },
];

const specifications = [
  "Treated germ-free water supply from own sources with de-ironing plant if required",
  "Jointless tile flooring",
  "Toilets with wall tiles up to 6 ft height",
  "Kitchen with jointless tile flooring, marble counter top, and wall tiles up to dado level",
  "Anodized aluminium windows",
  "Wooden door frames with flush doors",
  "Concealed copper wiring",
  "Concealed plumbing in flats",
  "Internal concealed telephone sockets in flats",
  "Attractive top-quality modern C.P. fittings",
  "Power backup for lifts and common areas",
  "Car parking at extra cost",
];

const overviewFacts = [
  { label: "Location", value: "Ahomgaon, Guwahati" },
  { label: "Nearby access", value: "Just off NH 715" },
  { label: "Project blocks", value: "Block A & Block B" },
  { label: "RERA", value: "RERA/ASM/1433/2025/SUPD/339" },
];

const nearbyPlaces = [
  ["Peerless Hospital", "3 min"],
  ["DPS", "3 min"],
  ["Royal Global University", "6 min"],
  ["ISBT", "11 min"],
  ["Unity Mall", "12 min"],
];

const unitAreas = [
  { group: "Block A", unit: "A1, A2, A3, A4", saleable: "1083 sq. ft.", carpet: "660 sq. ft." },
  { group: "Block A", unit: "B1, B2, B3, B4", saleable: "1411 sq. ft.", carpet: "901 sq. ft." },
  { group: "Block A", unit: "C1, C2, C3, C4", saleable: "1428 sq. ft.", carpet: "913 sq. ft." },
  { group: "Block A", unit: "D1, D2, D3, D4", saleable: "1447 sq. ft.", carpet: "926 sq. ft." },
  { group: "Block A", unit: "E1, E2, E3, E4", saleable: "1510 sq. ft.", carpet: "963 sq. ft." },
  { group: "Block A", unit: "F1, F2, F3, F4", saleable: "1151 sq. ft.", carpet: "715 sq. ft." },
  { group: "Block B", unit: "Ground Floor AG", saleable: "1189 sq. ft.", carpet: "833 sq. ft." },
  { group: "Block B", unit: "Ground Floor BG", saleable: "1123 sq. ft.", carpet: "793 sq. ft." },
  { group: "Block B", unit: "C1, C2, C3, C4", saleable: "1356 sq. ft.", carpet: "884 sq. ft." },
  { group: "Block B", unit: "D1", saleable: "537 sq. ft.", carpet: "352 sq. ft." },
  { group: "Block B", unit: "D2, D3, D4", saleable: "808 sq. ft.", carpet: "543 sq. ft." },
  { group: "Block B", unit: "E1", saleable: "1304 sq. ft.", carpet: "845 sq. ft." },
  { group: "Block B", unit: "E2, E3, E4", saleable: "985 sq. ft.", carpet: "630 sq. ft." },
];

const floorPlanImages = [
  { title: "Block A floor plan", src: "/images/shri-bishnu-brochure/block-a-floor-plan-1.jpg" },
  { title: "Block A apartment plans", src: "/images/shri-bishnu-brochure/block-a-units-a-b.jpg" },
  { title: "Block B ground floor", src: "/images/shri-bishnu-brochure/block-b-ground-plan.jpg" },
  { title: "Block B upper floors", src: "/images/shri-bishnu-brochure/block-b-upper-floor.jpg" },
];

const paymentSchedule = [
  ["Booking", "10%"],
  ["Agreement", "25%"],
  ["Foundation completion", "10%"],
  ["Casting of 1st slab", "10%"],
  ["Casting of roof slab of booked flat", "10%"],
  ["Brick work of booked floor", "10%"],
  ["Electrical, sanitary & water supply works", "10%"],
  ["Handover of flat", "5%"],
];

export default function ShriBishnuPage() {
  return (
    <>
      <section className="bg-white px-5 pb-8 pt-24 md:pb-12 md:pt-28 lg:px-8">
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end overflow-hidden rounded-3xl bg-navy text-white">
          <Image src={assetPath("/images/shri-bishnu-brochure/render-front-web.jpg")} alt="Shri Bishnu premium residential development" fill priority className="object-cover object-[56%_center] md:object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
          <div className="relative w-full p-6 pb-12 md:p-14 md:pb-16">
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy">Premium residential apartments</span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-none tracking-[-0.045em] sm:text-6xl md:text-8xl">Shri Bishnu</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">Where life flourishes, surrounded by nature, comfort, and a place to truly call home.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild><a href="#enquire">Register interest <ArrowRight size={16} /></a></Button>
              <Button variant="outline" asChild><a href={assetPath("/docs/shri-bishnu-brochure-summary.pdf")} download>Download brochure</a></Button>
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
              Shri Bishnu Barua Housing Complex is a premium residential apartment complex located in Ahomgaon, Guwahati.
            </p>
            <p className="mt-6 text-sm leading-7 text-slate/65">
              Ideally situated next to Sanskriti The Gurukul School and just off NH 715, the project offers easy access to ISBT, Balaji Temple, Royal Global University, Unity Mall, and essential healthcare.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {overviewFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-[#dddddd] bg-white p-5">
                  <p className="text-xs font-semibold text-slate">{fact.label}</p>
                  <p className="mt-2 text-sm font-semibold leading-5 text-navy">{fact.value}</p>
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
            <span className="text-sm font-medium text-slate">3D rendered views from the brochure</span>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:row-span-2 md:aspect-auto">
              <Image src={assetPath("/images/shri-bishnu-brochure/render-front-web.jpg")} alt="Shri Bishnu exterior" fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width: 768px) calc(100vw - 40px), 50vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={assetPath("/images/shri-bishnu-brochure/render-elevation-web.jpg")} alt="Shri Bishnu elevation render" fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width: 768px) calc(100vw - 40px), 50vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={assetPath("/images/shri-bishnu-brochure/render-final-web.jpg")} alt="Shri Bishnu street-facing render" fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width: 768px) calc(100vw - 40px), 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Nearby facilities" title="Everyday essentials within quick reach." description="The project is positioned for access to healthcare, schools, transport, highways, and business hubs." />
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
            <SectionHeading eyebrow="Floor plans" title="Well-planned from the inside out." description="Block A and Block B floor plans with saleable and carpet area references from the brochure." />
            <div className="mt-8 grid gap-4">
              {floorPlanImages.map((plan) => (
                <div key={plan.title} className="overflow-hidden rounded-2xl border border-[#dddddd] bg-white">
                  <div className="relative aspect-[16/10]">
                    <Image src={assetPath(plan.src)} alt={plan.title} fill className="object-contain p-3" sizes="(max-width: 1024px) calc(100vw - 40px), 50vw" />
                  </div>
                  <p className="border-t border-[#eeeeee] px-5 py-3 text-sm font-semibold text-navy">{plan.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Location" title="Connected to what matters." description="Located at Ahomgaon, Guwahati, near key education, healthcare, and connectivity points." />
            <div className="mt-8 overflow-hidden rounded-2xl bg-white">
              <div className="relative aspect-[16/11]">
                <Image src={assetPath("/images/shri-bishnu-brochure/location-map.jpg")} alt="Shri Bishnu location map" fill className="object-contain p-3" sizes="(max-width: 1024px) calc(100vw - 40px), 50vw" />
              </div>
              <div className="grid gap-2 border-t border-[#eeeeee] p-5 sm:grid-cols-2">
                {nearbyPlaces.map(([name, time]) => (
                  <div key={name} className="flex items-center justify-between gap-4 rounded-xl bg-cloud px-4 py-3 text-sm">
                    <span className="font-medium text-navy">{name}</span>
                    <span className="text-slate">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Unit areas" title="Apartment area references." description="Saleable and carpet areas extracted from the brochure. Final unit availability should be confirmed with the sales team." />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {unitAreas.map((unit) => (
              <div key={`${unit.group}-${unit.unit}`} className="rounded-2xl border border-[#dddddd] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">{unit.group}</p>
                <h3 className="mt-2 font-semibold text-navy">{unit.unit}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-cloud p-3">
                    <p className="text-xs text-slate">Saleable</p>
                    <p className="mt-1 font-semibold text-navy">{unit.saleable}</p>
                  </div>
                  <div className="rounded-xl bg-cloud p-3">
                    <p className="text-xs text-slate">Carpet</p>
                    <p className="mt-1 font-semibold text-navy">{unit.carpet}</p>
                  </div>
                </div>
              </div>
            ))}
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
            <p className="mt-6 text-xs leading-5 text-slate/45">Specifications are based on the uploaded Shri Bishnu brochure and should be reconfirmed before final sale communication.</p>
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white md:p-10">
            <p className="text-sm font-semibold text-white/60">Payment schedule & brochure</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em]">Plan your next step with clarity.</h2>
            <div className="mt-7 grid gap-3">
              {paymentSchedule.map(([stage, percent]) => (
                <div key={stage} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm">
                  <span className="text-white/65">{stage}</span>
                  <span className="font-semibold text-white">{percent}</span>
                </div>
              ))}
            </div>
            <Button className="mt-8" asChild><a href={assetPath("/docs/shri-bishnu-brochure-summary.pdf")} download><Download size={16} /> Download brochure</a></Button>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Project status" title="Follow the journey." description="Current public material is based on the uploaded brochure. Future construction updates and site photographs can be added here as work advances." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["Brochure released", "Enquiries open", "Construction updates pending"].map((phase, index) => (
              <div key={phase} className="rounded-2xl border border-[#dddddd] bg-white p-7">
                <p className="text-xs font-bold text-gold">0{index + 1}</p>
                <h3 className="mt-7 font-display text-xl font-semibold text-navy">{phase}</h3>
                <p className="mt-3 text-sm leading-6 text-slate/55">{index < 2 ? "Available now" : "To be updated by project team"}</p>
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
