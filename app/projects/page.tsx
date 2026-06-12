import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectsGrid } from "./projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore ongoing, completed, and upcoming Barua Construction developments.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Our portfolio" title="Thoughtful spaces. Enduring addresses.">
        Explore our portfolio of residential and commercial developments across Guwahati.
      </PageHero>
      <section className="border-t border-[#ebebeb] bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
