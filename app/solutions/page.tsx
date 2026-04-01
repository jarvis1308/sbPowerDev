import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Cpu,
  BarChart3,
  Cloud,
  Briefcase,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { solutions } from '@/data/solutions';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Explore our full suite of solutions — Business Process Automation, Data Analytics, Cloud Transformation, Technology Consulting, and Professional Development.',
};

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  BarChart3,
  Cloud,
  Briefcase,
  BookOpen,
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Our Solutions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            End-to-end technology solutions built on the Microsoft ecosystem
            to automate, analyse, and accelerate your business.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Deliver"
            subtitle="From automation and analytics to cloud migration and training, every solution is tailored to your business."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = iconMap[solution.icon] ?? Cpu;
              return (
                <AnimatedSection
                  key={solution.id}
                  delay={index * 0.1}
                  className="group rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {solution.shortDesc}
                  </p>
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <PartnerCTA />
    </>
  );
}
