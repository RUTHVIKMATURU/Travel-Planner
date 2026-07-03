import { FAQS } from "@/constants/faqs";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Section className="bg-slate-50 py-24 dark:bg-zinc-950">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Everything you need to know about planning your trip with Voya."
      />

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible>
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger>
                {faq.question}
              </AccordionTrigger>

              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
