import { FAQS } from "@/constants/faqs";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import ScrollReveal from "@/components/common/ScrollReveal";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Section className="bg-transparent">
      <ScrollReveal>
        <SectionHeader
          title="Frequently Asked Questions"
          description="Everything you need to know about planning your trip with Travix."
        />
      </ScrollReveal>

      <ScrollReveal
        className="mx-auto max-w-3xl rounded-2xl border border-white/70 bg-white/80 p-3 shadow-lg shadow-slate-950/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/65 dark:shadow-black/20"
        delay={0.08}
      >
        <Accordion type="single" collapsible className="divide-y divide-slate-200/80 dark:divide-zinc-800">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0 px-3"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-slate-950 hover:text-emerald-700 dark:text-white dark:hover:text-emerald-300">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </Section>
  );
}
