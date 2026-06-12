"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Building2, CircleUserRound, FolderOpen, Home, Mail, Menu, Phone, Search, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, navigation } from "@/data/settings";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/site";

const mobileNavigation = [
  { label: "Home", detail: "Start here", href: "/", icon: Home },
  { label: "About", detail: "Our story and values", href: "/about", icon: CircleUserRound },
  { label: "Projects", detail: "Browse all developments", href: "/projects", icon: FolderOpen },
  { label: "Shri Bishnu", detail: "Explore our flagship project", href: "/projects/shri-bishnu", icon: Building2 },
  { label: "Contact", detail: "Talk to our team", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ebebeb] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src={assetPath("/images/barua-logo.jpg")} alt="Barua Constructions" width={360} height={150} priority className="h-auto w-[140px] object-contain sm:w-[165px]" />
        </Link>

        <Link
          href="/projects"
          className="hidden items-center rounded-full border border-[#dddddd] bg-white py-2 pl-5 pr-2 shadow-sm transition hover:shadow-md md:flex"
        >
          <span className="border-r border-[#dddddd] pr-4 text-sm font-semibold text-navy">Explore projects</span>
          <span className="px-4 text-sm text-slate">Guwahati</span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[#007C89] to-[#00A45D] text-white"><Search size={14} strokeWidth={3} /></span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.slice(0, 3).map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2.5 text-sm font-medium transition hover:bg-cloud",
                  active ? "text-navy" : "text-slate",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="ml-1 flex items-center gap-2 rounded-full border border-[#dddddd] px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition hover:shadow-md">
            <Phone size={15} /> Contact
          </Link>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-[#dddddd] text-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <nav className="absolute inset-x-0 top-full flex h-[calc(100dvh-5rem)] flex-col overflow-y-auto border-t border-[#ebebeb] bg-white px-5 pb-6 pt-6 shadow-[0_24px_60px_rgba(20,63,67,0.12)] lg:hidden">
          <div className="mx-auto flex h-full w-full max-w-2xl flex-col">
            <p className="px-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate">Explore</p>
            <div className="mt-3 space-y-1">
              {mobileNavigation.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group flex items-center gap-4 rounded-2xl px-3 py-3.5 transition",
                      active ? "bg-cloud" : "hover:bg-cloud",
                    )}
                  >
                    <span className={cn(
                      "grid h-11 w-11 shrink-0 place-items-center rounded-xl transition",
                      active ? "bg-gradient-to-br from-[#007C89] to-[#00A45D] text-white" : "bg-cloud text-navy group-hover:bg-white",
                    )}>
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-semibold text-navy">{item.label}</span>
                      <span className="mt-0.5 block text-sm text-slate">{item.detail}</span>
                    </span>
                    <ArrowUpRight size={17} className={cn("text-slate transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5", active && "text-gold")} />
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pt-8">
              <div className="rounded-3xl bg-navy p-5 text-white">
                <p className="text-sm font-semibold text-white/60">Looking for a home?</p>
                <p className="mt-1 text-xl font-semibold tracking-[-0.02em]">Let’s find the right project for you.</p>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a href={`tel:${company.phone}`} className="flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-sm font-semibold text-navy">
                    <Phone size={16} /> Call us
                  </a>
                  <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#007C89] to-[#00A45D] px-3 py-3 text-sm font-semibold text-white">
                    Enquire <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-slate">{company.hours}</p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
