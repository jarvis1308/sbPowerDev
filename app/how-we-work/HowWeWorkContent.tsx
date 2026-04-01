'use client';

import { motion } from 'framer-motion';
import {
  Search,
  FileText,
  Calendar,
  Code,
  Rocket,
  Headphones,
  Zap,
  Shield,
  Users,
} from 'lucide-react';
import { processSteps } from '@/data/process-steps';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

/* ------------------------------------------------------------------ */
/*  Icon map                                                          */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, React.ElementType> = {
  Search,
  FileText,
  Calendar,
  Code,
  Rocket,
  Headphones,
};

/* ------------------------------------------------------------------ */
/*  "Why This Process Works" benefits                                 */
/* ------------------------------------------------------------------ */
const benefits = [
  {
    icon: Zap,
    title: 'Faster Time to Value',
    description:
      'Our sprint-based approach delivers working software every two weeks, so you see tangible results from day one instead of waiting months for a big-bang release.',
  },
  {
    icon: Shield,
    title: 'Lower Risk',
    description:
      'Continuous feedback loops, transparent pricing, and phased delivery mean you always know what you are getting before you commit further.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description:
      'We do not just build and walk away. Ongoing support, regular reviews, and knowledge transfer ensure your team is empowered for the long run.',
  },
];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                */
/* ------------------------------------------------------------------ */
const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export default function HowWeWorkContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Our Proven Process
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A transparent, agile methodology refined over hundreds of
            engagements. We keep you in the loop at every step so there are
            never any surprises.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Deliver"
            subtitle="Six clear phases from discovery to ongoing support."
            badge="Process"
          />

          {/* Timeline wrapper */}
          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-px" />
            {/* Mobile line */}
            <div className="absolute left-6 top-0 h-full w-0.5 bg-border md:hidden" />

            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon] || Search;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  custom={i}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-10">
                    {/* Left content */}
                    <div
                      className={
                        isLeft
                          ? 'pr-10 text-right'
                          : 'order-2 pl-10 text-left'
                      }
                    >
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">
                        {step.description}
                      </p>
                      <ul className="mt-3 space-y-1">
                        {step.details.map((d) => (
                          <li
                            key={d}
                            className="text-sm text-muted-foreground/80"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className={isLeft ? 'order-2' : ''} />
                  </div>

                  {/* Circle on the timeline (desktop) */}
                  <div className="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 md:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background shadow">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Step number badge (desktop) */}
                  <div className="absolute left-1/2 top-14 z-10 hidden -translate-x-1/2 md:block">
                    <span className="text-xs font-semibold text-muted-foreground">
                      Step {step.step}
                    </span>
                  </div>

                  {/* Mobile layout */}
                  <div className="flex gap-5 md:hidden">
                    {/* Circle */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background shadow">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-muted-foreground">
                        Step {step.step}
                      </span>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {step.description}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {step.details.map((d) => (
                          <li
                            key={d}
                            className="text-xs text-muted-foreground/80"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why This Process Works */}
      <AnimatedSection className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why This Process Works"
            subtitle="Our methodology is designed to deliver value quickly while minimising risk."
            badge="Benefits"
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => {
              const BIcon = b.icon;
              return (
                <Card key={b.title} className="h-full">
                  <CardHeader>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                      <BIcon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {b.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <PartnerCTA />
    </>
  );
}
