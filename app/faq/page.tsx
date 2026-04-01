'use client';

import { useState } from 'react';
import { faqs, faqCategories } from '@/data/faq';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredFaqs =
    activeCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Everything you need to know about our services, pricing, and how
              we work. Can not find what you are looking for? Contact us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Category Filters */}
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {['All', ...faqCategories].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredFaqs.length === 0 && (
              <p className="py-12 text-center text-muted-foreground">
                No questions found in this category.
              </p>
            )}
          </div>
        </div>
      </AnimatedSection>

      <PartnerCTA />
    </>
  );
}
