'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import { pricingTiers } from '@/data/pricing';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ */
/*  Feature-comparison table data                                     */
/* ------------------------------------------------------------------ */
const comparisonFeatures = [
  { label: 'Monthly development hours', starter: 'Up to 40', growth: 'Up to 80', enterprise: 'Unlimited' },
  { label: 'Dedicated consultants', starter: '1', growth: '2', enterprise: 'Full team' },
  { label: 'Progress updates', starter: 'Bi-weekly', growth: 'Weekly', enterprise: 'Daily standups' },
  { label: 'Power Platform development', starter: true, growth: true, enterprise: true },
  { label: 'Azure development', starter: false, growth: true, enterprise: true },
  { label: 'Microsoft 365 & Dynamics', starter: false, growth: false, enterprise: true },
  { label: 'Priority support', starter: false, growth: true, enterprise: true },
  { label: '24/7 critical issue support', starter: false, growth: false, enterprise: true },
  { label: 'Strategy reviews', starter: false, growth: 'Monthly', enterprise: 'Quarterly + on-demand' },
  { label: 'External system integrations', starter: false, growth: 'Up to 3', enterprise: 'Unlimited' },
  { label: 'Training & knowledge transfer', starter: false, growth: 'Basic', enterprise: 'Comprehensive' },
  { label: 'Custom SLA & governance', starter: false, growth: false, enterprise: true },
  { label: 'On-site workshops', starter: false, growth: false, enterprise: true },
];

/* ------------------------------------------------------------------ */
/*  FAQ data                                                          */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    q: 'Can I switch between pricing tiers?',
    a: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we will pro-rate any difference.',
  },
  {
    q: 'Is there a minimum contract length?',
    a: 'Our Starter and Growth plans run month-to-month with no long-term commitment. Enterprise engagements typically begin with a 6-month agreement to allow proper team ramp-up.',
  },
  {
    q: 'What happens if I need more hours than my plan includes?',
    a: 'Additional hours can be purchased on demand. We will always notify you before any overage occurs so there are no surprises on your invoice.',
  },
  {
    q: 'Do you offer discounts for annual billing?',
    a: 'Yes. Customers who commit to an annual plan receive a 10% discount compared to monthly billing. Contact our sales team for details.',
  },
  {
    q: 'What is included in "Priority support"?',
    a: 'Priority support includes a 4-hour response-time SLA during business hours, a dedicated Teams channel with your consulting team, and escalation paths for urgent issues.',
  },
];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                */
/* ------------------------------------------------------------------ */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ------------------------------------------------------------------ */
/*  Helper: render cell value                                         */
/* ------------------------------------------------------------------ */
function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-primary" />;
  if (value === false) return <X className="mx-auto h-5 w-5 text-muted-foreground/40" />;
  return <span className="text-sm">{value}</span>;
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export default function PricingContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Transparent Pricing for Every Stage
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose a plan that fits your current needs and scale as you grow.
            No hidden fees, no lock-in contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Choose Your Plan"
            subtitle="All plans include access to our Microsoft-certified consultants and proven delivery methodology."
            badge="Pricing"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            {pricingTiers.map((tier) => (
              <motion.div key={tier.id} variants={cardVariants}>
                <Card
                  className={cn(
                    'relative flex h-full flex-col',
                    tier.popular && 'ring-2 ring-primary shadow-lg'
                  )}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <p className="mt-4 text-3xl font-bold tracking-tight">
                      {tier.price}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {tier.features.map((f) => (
                        <li key={f.text} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      asChild
                      className="w-full"
                      variant={tier.popular ? 'default' : 'outline'}
                      size="lg"
                    >
                      <Link
                        href={
                          tier.id === 'enterprise' ? '/contact' : '/contact'
                        }
                      >
                        {tier.cta}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <AnimatedSection className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Feature Comparison"
            subtitle="See exactly what is included in each plan."
            badge="Compare"
          />

          <div className="mt-10 overflow-x-auto rounded-xl border bg-card">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-6 py-4 text-sm font-semibold">Feature</th>
                  {pricingTiers.map((t) => (
                    <th
                      key={t.id}
                      className="px-6 py-4 text-center text-sm font-semibold"
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(
                      'border-b last:border-0',
                      i % 2 === 0 && 'bg-background'
                    )}
                  >
                    <td className="px-6 py-3 text-sm font-medium">
                      {row.label}
                    </td>
                    <td className="px-6 py-3 text-center">
                      <CellValue value={row.starter} />
                    </td>
                    <td className="px-6 py-3 text-center">
                      <CellValue value={row.growth} />
                    </td>
                    <td className="px-6 py-3 text-center">
                      <CellValue value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our pricing."
            badge="FAQ"
          />

          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <PartnerCTA />
    </>
  );
}
