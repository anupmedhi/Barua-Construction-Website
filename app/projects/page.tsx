import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectsGrid } from "./projects-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore ongoing and completed Barua Construction residential developments in Guwahati.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Our portfolio" title="Thoughtful spaces. Enduring addresses.">
        Explore our ongoing and completed residential developments across Guwahati.
      </PageHero>
      <section className="border-t border-[#ebebeb] bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
