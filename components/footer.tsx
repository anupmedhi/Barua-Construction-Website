import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { company, navigation } from "@/data/settings";
import { assetPath } from "@/lib/site";

const contactItems = [
  { icon: Phone, label: "Call us", value: company.phone, href: `tel:${company.phone}` },
  { icon: Mail, label: "Email us", value: company.email, href: `mailto:${company.email}` },
];

export function Footer() {
  return (
    <footer className="bg-[#eef7f5] text-navy">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-12 md:pb-10 md:pt-16 lg:px-8">
        <div className="flex flex-col gap-6 rounded-3xl bg-navy p-6 text-white shadow-[0_18px_55px_rgba(20,63,67,0.16)] sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div>
            <p className="text-sm font-semibold text-white/60">Start a conversation</p>
            <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Looking for the right home or investment?</h2>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-cloud">
            Contact our team <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid gap-9 py-10 md:grid-cols-[1.15fr_0.75fr_1.1fr] md:gap-10 md:py-14">
          <div>
            <div className="inline-flex rounded-2xl bg-white p-3 shadow-sm">
              <Image src={assetPath("/images/barua-logo.jpg")} alt="Barua Constructions" width={360} height={150} className="h-auto w-[165px] object-contain" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate">{company.description}</p>
            <div className="mt-5 flex gap-2">
              {[
                [Instagram, "Instagram", company.socials.instagram],
                [Facebook, "Facebook", company.socials.facebook],
                [Linkedin, "LinkedIn", company.socials.linkedin],
              ].map(([Icon, label, href]) => {
                const SocialIcon = Icon as typeof Instagram;
                return (
                  <a key={label as string} href={href as string} aria-label={label as string} className="grid h-10 w-10 place-items-center rounded-full border border-[#cfe2de] bg-white text-navy transition hover:border-gold hover:text-gold">
                    <SocialIcon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-1">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="w-fit text-sm text-slate transition hover:text-navy">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Visit or contact us</h3>
            <div className="mt-4 grid gap-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex min-w-0 items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm transition hover:-translate-y-0.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cloud text-gold"><Icon size={17} /></span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold text-slate">{label}</span>
                    <span className="mt-0.5 block truncate text-sm font-semibold text-navy">{value}</span>
                  </span>
                </a>
              ))}
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                <div className="flex gap-3 rounded-2xl bg-white p-3.5 shadow-sm">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-gold" />
                  <p className="text-sm leading-6 text-slate">{company.address}</p>
                </div>
                <div className="flex gap-3 rounded-2xl bg-white p-3.5 shadow-sm">
                  <Clock3 size={17} className="mt-0.5 shrink-0 text-gold" />
                  <p className="text-sm leading-6 text-slate">{company.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#cfe2de]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Barua Construction. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-navy">Privacy</Link>
            <Link href="/contact" className="hover:text-navy">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
