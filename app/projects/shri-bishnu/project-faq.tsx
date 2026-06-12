"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Where is Shri Bishnu located?",
    answer: "The final site address and map coordinates will be published here when the project information is released.",
  },
  {
    question: "What home configurations will be available?",
    answer: "Detailed configuration, area, and floor plan information is being prepared and will remain editable through the project data structure.",
  },
  {
    question: "When is possession expected?",
    answer: "The official construction and possession schedule will be added after confirmation by the project team.",
  },
  {
    question: "How can I receive pricing and availability updates?",
    answer: "Submit the enquiry form on this page and select Shri Bishnu. The sales team can then share the latest verified information.",
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
