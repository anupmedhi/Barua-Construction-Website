"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Where is Shri Bishnu located?",
    answer: "Shri Bishnu is located at Ahomgaon, Guwahati, just off NH 715. The brochure lists the coordinates as 26°06'17.6\"N, 91°43'04.4\"E.",
  },
  {
    question: "Which blocks and apartment areas are shown?",
    answer: "The brochure includes Block A and Block B floor plans, with saleable areas ranging from 537 sq. ft. to 1510 sq. ft. depending on the unit.",
  },
  {
    question: "Is the project RERA registered?",
    answer: "Yes. The brochure lists the RERA number as RERA/ASM/1433/2025/SUPD/339.",
  },
  {
    question: "What is the payment schedule?",
    answer: "The brochure lists milestone-based payments from booking through handover, including 10% at booking, 25% at agreement, and staged payments during construction.",
  },
  {
    question: "How can I receive pricing and availability updates?",
    answer: "Submit the enquiry form on this page and select Shri Bishnu. The team can then share current pricing, availability, and booking guidance.",
  },
];

export function ProjectFaq() {
  return (
    <Accordion.Root type="single" collapsible className="border-t border-slate-200">
      {faqs.map((faq, index) => (
        <Accordion.Item key={faq.question} value={`item-${index}`} className="border-b border-slate-200">
          <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 py-6 text-left font-display text-xl text-navy">
            {faq.question}
            <ChevronDown size={18} className="shrink-0 transition group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content className="overflow-hidden text-sm leading-7 text-slate/65 data-[state=closed]:animate-none data-[state=open]:pb-6">
            {faq.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
