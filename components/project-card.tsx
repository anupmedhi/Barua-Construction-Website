import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, MapPin } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const statusStyles = {
  Ongoing: "bg-[#e7f5f2] text-[#08766e]",
  Completed: "bg-white text-navy",
  Upcoming: "bg-[#fff7df] text-[#806111]",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-3xl border border-[#e5ecea] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#bdd8d3] hover:shadow-[0_20px_55px_rgba(20,63,67,0.12)]">
      <Link href={project.slug === "shri-bishnu" ? "/projects/shri-bishnu" : "/contact"} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          <Image src={project.image} alt={project.name} fill loading="lazy" decoding="async" className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 50vw, 33vw" />
          <span className={cn("absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur", statusStyles[project.status])}>
            {project.status}
          </span>
          <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/90 text-navy shadow-sm backdrop-blur transition group-hover:scale-105">
            <Heart size={18} strokeWidth={1.8} />
          </span>
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="min-w-0 p-5">
          <div className="flex min-w-0 items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">{project.type}</p>
              <h3 className="mt-1.5 min-w-0 text-xl font-semibold leading-7 tracking-[-0.02em] text-navy">{project.name}</h3>
            </div>
            <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cloud text-navy transition group-hover:bg-navy group-hover:text-white">
              <ArrowUpRight size={17} />
            </span>
          </div>
          <p className="mt-3 flex min-w-0 items-start gap-2 text-sm leading-6 text-slate">
            <MapPin size={15} className="mt-1 shrink-0 text-gold" />
            <span>{project.location}</span>
          </p>
          <div className="my-4 h-px bg-[#e8eeec]" />
          <p className="line-clamp-3 text-sm leading-6 text-slate sm:line-clamp-2">{project.description}</p>
          <p className="mt-4 text-xs font-semibold text-navy">
            {project.slug === "shri-bishnu" ? "Explore project" : "Request project details"}
          </p>
        </div>
      </Link>
    </article>
  );
}
