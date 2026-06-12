import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <Link href={project.slug === "shri-bishnu" ? "/projects/shri-bishnu" : "/contact"} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200">
          <Image src={project.image} alt={project.name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy shadow-sm">
            {project.status}
          </span>
          <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/85 text-navy backdrop-blur transition hover:scale-105">
            <Heart size={18} />
          </span>
        </div>
        <div className="px-1 pb-3 pt-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold text-navy">{project.name}</h3>
            <span className="shrink-0 text-sm text-slate">{project.type}</span>
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate"><MapPin size={14} />{project.location}</p>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate">{project.description}</p>
        </div>
      </Link>
    </article>
  );
}
