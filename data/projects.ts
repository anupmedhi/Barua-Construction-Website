import { assetPath } from "@/lib/site";

export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";

export type Project = {
  slug: string;
  name: string;
  location: string;
  status: ProjectStatus;
  description: string;
  image: string;
  type: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "shri-bishnu",
    name: "Shri Bishnu",
    location: "Guwahati, Assam",
    status: "Ongoing",
    description:
      "A considered residential address where contemporary design, comfort, and community come together.",
    image: assetPath("/images/shri-bishnu.png"),
    type: "Premium Residences",
    featured: true,
  },
  {
    slug: "barua-heights",
    name: "Barua Heights",
    location: "Six Mile, Guwahati",
    status: "Upcoming",
    description:
      "Thoughtfully planned urban homes defined by generous light, refined finishes, and effortless connectivity.",
    image: assetPath("/images/hero-residence.png"),
    type: "Urban Residences",
    featured: true,
  },
  {
    slug: "the-courtyard",
    name: "The Courtyard",
    location: "Beltola, Guwahati",
    status: "Completed",
    description:
      "A calm residential community built around landscaped open spaces and enduring material quality.",
    image: assetPath("/images/shri-bishnu.png"),
    type: "Garden Residences",
    featured: true,
  },
  {
    slug: "barua-commerce",
    name: "Barua Commerce",
    location: "G.S. Road, Guwahati",
    status: "Completed",
    description:
      "A modern commercial destination designed for visibility, efficiency, and long-term business value.",
    image: assetPath("/images/hero-residence.png"),
    type: "Commercial",
  },
];
