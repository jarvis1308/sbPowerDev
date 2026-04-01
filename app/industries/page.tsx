import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Utensils,
  Landmark,
  GraduationCap,
  Heart,
  FileCheck,
  ArrowRight,
} from 'lucide-react';
import { industries } from '@/data/industries';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'We serve Food & Beverages, FinTech, Education, Healthcare, and Licensing & Compliance industries with tailored Microsoft-based solutions.',
};

const iconMap: Record<string, React.ElementType> = {
  Utensils,
  Landmark,
  GraduationCap,
  Heart,
  FileCheck,
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Industries We Serve
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Deep domain expertise across regulated and fast-moving industries,
            powered by the Microsoft ecosystem.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industry Expertise"
            subtitle="We understand your industry's unique challenges and build solutions that address them head-on."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon] ?? Heart;
              return (
                <AnimatedSection
                  key={industry.id}
                  delay={index * 0.1}
                  className="group rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{industry.title}</h3>
                  <p className="mt-2 line-clamp-3 text-muted-foreground">
                    {industry.description}
                  </p>
                  <Link
                    href={`/industries/${industry.slug}`}
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
