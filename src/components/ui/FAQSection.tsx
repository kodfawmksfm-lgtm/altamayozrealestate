import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

export function FAQSection({ items, title, description }: FAQSectionProps) {
  return (
    <div className="space-y-8">
      {(title || description) && (
        <div className="text-center max-w-2xl mx-auto">
          {title && <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      
      <Accordion type="single" collapsible className="w-full space-y-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/30"
          >
            <AccordionTrigger className="text-right hover:no-underline py-5">
              <span className="text-base font-semibold text-foreground">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
