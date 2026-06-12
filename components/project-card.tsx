import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group min-w-0">
      <Link href={project.slug === "shri-bishnu" ? "/projects/shri-bishnu" : "/contact"} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
          <Image src={project.image} alt={project.name} fill loading="lazy" decoding="async" className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 50vw, 33vw" />
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy shadow-sm">
            {project.status}
          </span>
          <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-navy backdrop-blur transition hover:scale-105">
            <Heart size={18} />
          </span>
        </div>
        <div className="min-w-0 px-1 pb-3 pt-4">
          <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
            <h3 className="min-w-0 text-base font-semibold leading-6 text-navy">{project.name}</h3>
            <span className="text-sm leading-6 text-slate sm:shrink-0">{project.type}</span>
          </div>
          <p className="mt-2 flex min-w-0 items-start gap-1.5 text-sm leading-6 text-slate">
            <MapPin size={14} className="mt-1 shrink-0" />
            <span>{project.location}</span>
          </p>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate sm:line-clamp-2">{project.description}</p>
        </div>
      </Link>
    </article>
  );
}
