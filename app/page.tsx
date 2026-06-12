import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, CheckCircle2, Construction, MapPin, Search, ShieldCheck, Star } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { assetPath } from "@/lib/site";

const categories = [
  { icon: Building2, eyebrow: "Residences", label: "Premium homes", detail: "Designed for everyday comfort" },
  { icon: Construction, eyebrow: "In the pipeline", label: "Upcoming projects", detail: "New developments taking shape" },
  { icon: CheckCircle2, eyebrow: "Completed", label: "Ready homes", detail: "Projects delivered with care" },
  { icon: ShieldCheck, eyebrow: "Our experience", label: "18+ years", detail: "Building trust across Assam" },
];

const stats = [
  { value: "18+", label: "years building in Assam" },
  { value: "1M+", label: "sq. ft. planned and delivered" },
  { value: "500+", label: "families served" },
];

export default function Home() {
  return (
    <>
      <section className="bg-white pb-20 pt-24 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative">
            <div className="relative min-h-[620px] overflow-hidden rounded-3xl bg-navy md:min-h-[680px]">
              <Image src={assetPath("/images/hero-residence.png")} alt="Contemporary Barua Construction residence" fill priority className="object-cover object-[72%_center] md:object-center" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/5" />
              <div className="relative flex min-h-[620px] items-end p-6 pb-28 text-white md:min-h-[680px] md:p-14 md:pb-32">
                <div className="max-w-4xl">
                  <span className="inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-navy backdrop-blur">Trusted homes in Guwahati</span>
                  <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl md:text-7xl">
                    Find a home made for the way you live.
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg md:leading-8">
                    Thoughtfully planned residences, reliable construction, and a team that stays with you from enquiry to handover.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-4 -bottom-12 rounded-2xl border border-black/5 bg-white p-2 shadow-[0_18px_55px_rgba(20,63,67,0.18)] md:inset-x-auto md:-bottom-10 md:left-1/2 md:flex md:w-[860px] md:-translate-x-1/2 md:rounded-full">
              <Link href="/projects" className="flex flex-1 items-center gap-3 rounded-xl px-4 py-3 hover:bg-cloud md:rounded-full md:px-6">
                <MapPin size={18} className="text-gold" />
                <div>
                  <p className="text-xs font-semibold text-navy">Location</p>
                  <p className="text-sm text-slate">Guwahati, Assam</p>
                </div>
              </Link>
              <Link href="/projects" className="hidden flex-1 border-x border-[#dddddd] px-6 py-3 hover:bg-cloud md:block">
                <p className="text-xs font-semibold text-navy">Project status</p>
                <p className="text-sm text-slate">Ongoing and upcoming</p>
              </Link>
              <Link href="/contact" className="hidden flex-1 px-6 py-3 hover:bg-cloud md:block">
                <p className="text-xs font-semibold text-navy">Looking for</p>
                <p className="text-sm text-slate">A home or investment</p>
              </Link>
              <Link href="/projects" aria-label="Search projects" className="absolute right-3 top-3 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#007C89] to-[#00A45D] text-white md:static md:h-14 md:w-14 md:shrink-0">
                <Search size={20} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#ebebeb] bg-white pb-10 pt-4 md:pb-12 md:pt-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 md:grid-cols-4 lg:px-8">
          {categories.map(({ icon: Icon, eyebrow, label, detail }) => (
            <Link
              key={label}
              href="/projects"
              className="group relative min-h-36 rounded-2xl border border-[#e3e3e3] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#b7d8d3] hover:shadow-soft md:min-h-44 md:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cloud text-gold transition group-hover:bg-[#e2f2ef]">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <ArrowUpRight size={16} className="text-slate transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
              </div>
              <div className="mt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate">{eyebrow}</p>
                <p className="mt-1 text-base font-semibold leading-5 text-navy">{label}</p>
                <p className="mt-2 hidden text-xs leading-5 text-slate sm:block">{detail}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between gap-5">
            <SectionHeading eyebrow="Explore our portfolio" title="Homes and spaces worth discovering" description="Browse current, upcoming, and completed developments across Guwahati." />
            <Link href="/projects" className="hidden rounded-xl border border-navy px-4 py-2.5 text-sm font-semibold text-navy hover:bg-cloud sm:block">Show all</Link>
          </div>
          <div className="mt-9 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter((project) => project.featured).map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}><ProjectCard project={project} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded-3xl border border-[#dce9e6] bg-white shadow-[0_20px_70px_rgba(20,63,67,0.10)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <Reveal className="h-full min-w-0">
            <div className="relative aspect-[4/3] h-full min-h-72 min-w-0 overflow-hidden sm:min-h-80 lg:aspect-auto lg:min-h-[720px]">
              <Image src={assetPath("/images/shri-bishnu.png")} alt="Barua Construction residence" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-1 text-gold"><Star size={16} fill="currentColor" /><strong className="text-sm text-navy">18+ years</strong></div>
                <p className="mt-1 text-xs text-slate">Building trust across Assam</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="h-full min-w-0">
            <div className="flex h-full min-w-0 flex-col justify-center p-5 sm:p-6 md:p-10 lg:p-12">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-cloud px-3.5 py-2 text-xs font-semibold text-gold">
                <ShieldCheck size={15} /> The Barua promise
              </div>
              <SectionHeading eyebrow="Why Barua Construction" title="A better home-buying experience starts with trust." description="Clear information, dependable construction, and thoughtful design at every stage." />
              <div className="mt-7 space-y-3">
              {[
                ["Transparent from day one", "Straightforward conversations and verified project information."],
                ["Designed around real life", "Practical layouts, generous light, and spaces that feel good to live in."],
                ["Here for the long term", "A local team with a reputation built over years, not campaigns."],
              ].map(([title, text], index) => (
                <div key={title} className="group flex min-w-0 gap-3 rounded-2xl border border-[#e7e7e7] p-4 transition hover:border-[#b7d8d3] hover:bg-cloud/50 sm:gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cloud text-xs font-bold text-gold transition group-hover:bg-[#dff1ed]">
                    0{index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-6 text-navy">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate">{text}</p>
                  </div>
                </div>
              ))}
              </div>
              <Link href="/about" className="mt-6 flex min-h-12 w-full items-center justify-between rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d3336]">
                Meet Barua Construction <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-3 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-[#dddddd] p-7">
              <p className="text-4xl font-semibold tracking-[-0.04em] text-navy">{stat.value}</p>
              <p className="mt-2 text-sm text-slate">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-navy p-8 text-white md:flex-row md:items-center md:p-12">
            <div>
              <p className="text-sm font-semibold text-white/65">Ready when you are</p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Tell us what kind of space you are looking for.</h2>
            </div>
            <Button asChild><Link href="/contact">Start an enquiry <ArrowRight size={16} /></Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
