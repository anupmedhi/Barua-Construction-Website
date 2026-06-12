"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  if (sent) {
    return (
      <div className="grid min-h-72 place-items-center rounded-2xl bg-cloud p-8 text-center">
        <div>
          <CheckCircle2 className="mx-auto mb-4 text-gold" size={40} />
          <h3 className="font-display text-3xl text-navy">Thank you.</h3>
          <p className="mt-3 text-sm leading-6 text-slate/70">Your enquiry has been received. Our team will be in touch shortly.</p>
          <button className="mt-5 text-sm font-semibold text-gold underline-offset-4 hover:underline" onClick={() => setSent(false)}>Send another enquiry</button>
        </div>
      </div>
    );
  }

  const input = "w-full rounded-xl border border-[#dddddd] bg-white px-4 py-3.5 text-sm text-navy outline-none transition placeholder:text-slate focus:border-navy focus:ring-1 focus:ring-navy";

  return (
    <form onSubmit={submit} className={compact ? "space-y-5" : "space-y-6"}>
      <div className="grid gap-5 sm:grid-cols-2">
        <input className={input} name="name" placeholder="Full name" required aria-label="Full name" />
        <input className={input} name="phone" type="tel" placeholder="Phone number" required aria-label="Phone number" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <input className={input} name="email" type="email" placeholder="Email address" required aria-label="Email address" />
        <select className={input} name="interest" defaultValue="" required aria-label="Project interest">
          <option value="" disabled>Interested in</option>
          <option>Shri Bishnu</option>
          <option>Other projects</option>
          <option>Construction services</option>
          <option>Partnership</option>
        </select>
      </div>
      <textarea className={`${input} min-h-24 resize-none`} name="message" placeholder="Tell us how we can help" aria-label="Message" />
      <Button type="submit"><Send size={16} /> Send enquiry</Button>
    </form>
  );
}
