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
    location: "Nibari Boro Path, Bhabananda Boro Path, Ahomgaon, Guwahati 781035",
    status: "Ongoing",
    description:
      "Premium residential apartments near Sanskriti The Gurukul School, just off NH 715.",
    image: assetPath("/images/shri-bishnu/hero-road-view.jpg"),
    type: "Premium Residences",
    featured: true,
  },
  {
    slug: "shri-krishna",
    name: "Shri Krishna",
    location: "Guwahati, Assam",
    status: "Completed",
    description:
      "A 12-home residential development completed between 2017 and 2023.",
    image: assetPath("/images/projects/shri-krishna.jpg"),
    type: "Residential Development",
    featured: true,
  },
  {
    slug: "gitaloy",
    name: "Gitaloy",
    location: "Guwahati, Assam",
    status: "Completed",
    description:
      "An 11-home residential development completed between 2015 and 2020.",
    image: assetPath("/images/projects/gitaloy.jpg"),
    type: "Residential Development",
    featured: true,
  },
  {
    slug: "mayor-and-bhagirath",
    name: "Mayor & Bhagirath",
    location: "Guwahati, Assam",
    status: "Completed",
    description:
      "A 46-home residential development completed between 2010 and 2015.",
    image: assetPath("/images/projects/mayor-bhagirath.jpg"),
    type: "Residential Development",
  },
  {
    slug: "gita-bhawan",
    name: "Gita Bhawan",
    location: "Guwahati, Assam",
    status: "Completed",
    description:
      "An eight-home residential development completed between 2007 and 2011.",
    image: assetPath("/images/projects/gita-bhawan.jpg"),
    type: "Residential Development",
  },
  {
    slug: "32-roses",
    name: "32 Roses",
    location: "Guwahati, Assam",
    status: "Completed",
    description:
      "A 32-home residential development completed between 2005 and 2009.",
    image: assetPath("/images/projects/32-roses.jpg"),
    type: "Residential Development",
  },
];
