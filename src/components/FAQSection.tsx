import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is this platform designed for?", a: "Nioscape is built for creators, writers, and professionals who want AI to quietly enhance their workflow without getting in the way." },
  { q: "How does it integrate with my existing tools?", a: "We offer native integrations with popular tools like Notion, Google Docs, and Slack, plus an API for custom workflows." },
  { q: "Is there a free trial or plan?", a: "Yes, our Starter plan is completely free and includes core features to get you started. Upgrade anytime." },
  { q: "Can I use this for large-scale projects?", a: "Absolutely — our Enterprise plan is designed to handle complex, high-volume workloads with dedicated support." },
  { q: "What kind of support is offered?", a: "We provide community support for free users, priority email support for Pro, and a dedicated account manager for Enterprise." },
  { q: "How is data handled for privacy purposes?", a: "Your data is encrypted at rest and in transit. We never train on your content and you can delete your data at any time." },
];

const FAQSection = () => (
  <section id="faq" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <p className="section-label">Support</p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl max-w-lg mb-12">
        Your questions, <span className="italic font-normal">answered with clarity</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-0 max-w-4xl">
        <Accordion type="single" collapsible className="space-y-0">
          {faqs.slice(0, 3).map((f, i) => (
            <AccordionItem key={i} value={`a-${i}`} className="border-border/50">
              <AccordionTrigger className="text-sm font-medium hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible className="space-y-0">
          {faqs.slice(3).map((f, i) => (
            <AccordionItem key={i} value={`b-${i}`} className="border-border/50">
              <AccordionTrigger className="text-sm font-medium hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
