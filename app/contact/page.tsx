import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { company } from "@/data/settings";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Barua Construction for project enquiries, partnerships, and construction services.",
};

const details = [
  { icon: MapPin, label: "Visit our office", value: company.address, href: "https://maps.google.com/?q=G.S.+Road+Guwahati" },
  { icon: Phone, label: "Call us", value: company.phone, href: `tel:${company.phone}` },
  { icon: Mail, label: "Email us", value: company.email, href: `mailto:${company.email}` },
  { icon: Clock3, label: "Business hours", value: company.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact us" title="Let’s talk about what comes next.">
        Whether you are looking for a home, a commercial opportunity, or a trusted construction partner, our team is ready to help.
      </PageHero>

      <section className="border-t border-[#ebebeb] py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold text-gold">Reach us directly</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-navy">We would be glad to hear from you.</h2>
            <div className="mt-10 space-y-7">
              {details.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cloud text-gold"><Icon size={18} /></span>
                    <div>
                      <p className="text-xs font-semibold text-slate">{label}</p>
                      <p className="mt-1 text-sm leading-6 text-navy">{value}</p>
                    </div>
                  </div>
                );
                return href ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a> : <div key={label}>{content}</div>;
              })}
            </div>
          </div>
          <div className="rounded-3xl border border-[#dddddd] bg-white p-7 shadow-soft md:p-10">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-navy">Send an enquiry</h2>
            <p className="mb-8 mt-3 text-sm leading-6 text-slate/65">Share a few details and our team will respond within one business day.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-cloud">
          <iframe
            title="Barua Construction office map"
            src="https://www.google.com/maps?q=G.S.%20Road%2C%20Guwahati%2C%20Assam&output=embed"
            className="h-[420px] w-full border-0 grayscale-[35%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
