import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { company, navigation } from "@/data/settings";
import { assetPath } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#dddddd] bg-cloud text-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-sm font-semibold">Explore</h3>
          <div className="mt-4 flex flex-col gap-3">
            {navigation.map((item) => <Link key={item.href} href={item.href} className="w-fit text-sm text-slate hover:underline">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate">
            <a href={`tel:${company.phone}`} className="hover:underline">{company.phone}</a>
            <a href={`mailto:${company.email}`} className="hover:underline">{company.email}</a>
            <p className="max-w-xs leading-6">{company.address}</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Office hours</h3>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate">{company.hours}</p>
        </div>
        <div>
          <Image src={assetPath("/images/barua-logo.jpg")} alt="Barua Constructions" width={360} height={150} className="h-auto w-[190px] object-contain" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate">{company.description}</p>
        </div>
      </div>
      <div className="border-t border-[#dddddd]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-slate">© {new Date().getFullYear()} Barua Construction · Privacy · Terms</p>
          <div className="flex gap-4">
            <Instagram size={18} /><Facebook size={18} /><Linkedin size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}
