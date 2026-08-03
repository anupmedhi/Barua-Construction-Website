import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Car,
  Check,
  Download,
  FileCheck2,
  GraduationCap,
  Hospital,
  MapPin,
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
    images: ["/images/shri-bishnu/hero-road-view.jpg"],
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
  { icon: MapPin, label: "Location", value: "Ahomgaon, Guwahati" },
  { icon: Route, label: "Connectivity", value: "Just off NH 715" },
  { icon: Building2, label: "Development", value: "Block A & Block B" },
  { icon: FileCheck2, label: "RERA registered", value: "RERA/ASM/1433/2025/SUPD/339" },
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

const galleryImages = [
  {
    title: "Road-facing arrival view",
    src: "/images/shri-bishnu/hero-road-view.jpg",
    alt: "Road-facing rendered view of Shri Bishnu",
  },
  {
    title: "Front elevation",
    src: "/images/shri-bishnu/front-master-view.jpg",
    alt: "Front elevation render of Shri Bishnu",
  },
  {
    title: "Evening street view",
    src: "/images/shri-bishnu/evening-street-view.jpg",
    alt: "Evening street view render of Shri Bishnu",
  },
  {
    title: "Aerial day view",
    src: "/images/shri-bishnu/aerial-day-view.jpg",
    alt: "Aerial daytime render of Shri Bishnu",
  },
  {
    title: "Twilight frontage",
    src: "/images/shri-bishnu/twilight-front-view.jpg",
    alt: "Twilight frontage render of Shri Bishnu",
  },
  {
    title: "Green neighbourhood view",
    src: "/images/shri-bishnu/aerial-green-view.jpg",
    alt: "Aerial green neighbourhood render of Shri Bishnu",
  },
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
          <Image src={assetPath("/images/shri-bishnu/hero-road-view.jpg")} alt="Shri Bishnu premium residential development" fill priority className="object-cover object-[46%_center] md:object-center" sizes="100vw" />
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
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <SectionHeading eyebrow="Project overview" title="A new expression of modern living." />
            <div>
              <p className="font-display text-2xl font-medium leading-relaxed tracking-[-0.02em] text-navy md:text-3xl">
                Shri Bishnu Barua Housing Complex is a premium residential apartment complex located in Ahomgaon, Guwahati.
              </p>
              <p className="mt-6 text-sm leading-7 text-slate/65">
                Ideally situated next to Sanskriti The Gurukul School and just off NH 715, the project offers easy access to ISBT, Balaji Temple, Royal Global University, Unity Mall, and essential healthcare.
              </p>
            </div>
          </div>
          <div className="mt-12 grid overflow-hidden rounded-3xl border border-[#dddddd] bg-white shadow-[0_18px_50px_rgba(15,63,66,0.06)] sm:grid-cols-2 lg:grid-cols-4">
            {overviewFacts.map(({ icon: Icon, label, value }, index) => (
              <div
                key={label}
                className="group relative min-h-48 border-b border-[#e9e9e9] p-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(3)]:border-b-0 lg:min-h-52 lg:border-b-0 lg:border-r lg:p-7 lg:last:border-r-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.12em] text-slate/35">0{index + 1}</span>
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.12em] text-slate/55">{label}</p>
                <p className="mt-2 break-words text-base font-semibold leading-6 text-navy [overflow-wrap:anywhere]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Gallery" title="Designed to be experienced." description="A visual story of architecture, landscape, materials, and life at Shri Bishnu." />
            <span className="text-sm font-medium text-slate">Architectural 3D rendered views</span>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={index === 0 ? "relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-2 lg:row-span-2 lg:aspect-auto" : "relative aspect-[4/3] overflow-hidden rounded-2xl"}
              >
                <Image src={assetPath(image.src)} alt={image.alt} fill className="object-cover transition duration-700 hover:scale-105" sizes={index === 0 ? "(max-width: 1024px) calc(100vw - 40px), 66vw" : "(max-width: 768px) calc(100vw - 40px), 33vw"} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 pt-14">
                  <p className="text-sm font-semibold text-white">{image.title}</p>
                </div>
              </div>
            ))}
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

      <section id="floor-plans" className="scroll-mt-24 bg-cloud py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Floor plans" title="Well-planned from the inside out." description="Block A and Block B floor plans with saleable and carpet area references from the brochure." />
            <p className="max-w-xs text-sm leading-6 text-slate/55 md:text-right">Four plan references across both residential blocks.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {floorPlanImages.map((plan, index) => (
              <div key={plan.title} className="group overflow-hidden rounded-3xl border border-[#dddddd] bg-white shadow-[0_18px_45px_rgba(15,63,66,0.05)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#fafafa]">
                  <Image src={assetPath(plan.src)} alt={plan.title} fill className="object-contain p-4 transition duration-500 group-hover:scale-[1.015] md:p-6" sizes="(max-width: 1024px) calc(100vw - 40px), 50vw" />
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-[#eeeeee] px-5 py-4 md:px-6">
                  <p className="text-sm font-semibold text-navy">{plan.title}</p>
                  <span className="rounded-full bg-cloud px-3 py-1 text-xs font-semibold text-teal">Plan 0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="scroll-mt-24 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <SectionHeading eyebrow="Location" title="Connected to what matters." description="Located at Ahomgaon, Guwahati, near key education, healthcare, and connectivity points." />
            <p className="max-w-xl text-sm leading-7 text-slate/60 lg:justify-self-end">Daily destinations remain comfortably close, helping residents spend less time travelling and more time at home.</p>
          </div>
          <div className="mt-10 grid overflow-hidden rounded-3xl border border-[#dddddd] bg-white shadow-[0_18px_50px_rgba(15,63,66,0.06)] lg:grid-cols-[1.35fr_.65fr]">
            <div className="relative min-h-[360px] border-b border-[#eeeeee] lg:min-h-[520px] lg:border-b-0 lg:border-r">
              <Image src={assetPath("/images/shri-bishnu-brochure/location-map.jpg")} alt="Shri Bishnu location map" fill className="object-contain p-4 md:p-7" sizes="(max-width: 1024px) calc(100vw - 40px), 65vw" />
            </div>
            <div className="flex flex-col justify-between p-6 md:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">Approximate drive time</p>
                <div className="mt-5 divide-y divide-[#e9e9e9]">
                  {nearbyPlaces.map(([name, time]) => (
                    <div key={name} className="flex items-center justify-between gap-5 py-4 text-sm">
                      <span className="font-semibold text-navy">{name}</span>
                      <span className="rounded-full bg-cloud px-3 py-1 font-semibold text-teal">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 rounded-2xl bg-navy p-5 text-white">
                <MapPin size={20} className="text-gold" />
                <p className="mt-4 text-sm font-semibold">Ahomgaon, Guwahati</p>
                <p className="mt-1 text-xs leading-5 text-white/55">Next to Sanskriti The Gurukul School and just off NH 715.</p>
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
