import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Utensils,
  Landmark,
  GraduationCap,
  Heart,
  FileCheck,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import { industries } from '@/data/industries';
import { solutions } from '@/data/solutions';
import Breadcrumb from '@/components/shared/Breadcrumb';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';

const iconMap: Record<string, React.ElementType> = {
  Utensils,
  Landmark,
  GraduationCap,
  Heart,
  FileCheck,
};

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const industry = industries.find((ind) => ind.slug === params.slug);
  if (!industry) return { title: 'Industry Not Found' };
  return {
    title: industry.title,
    description: industry.description,
  };
}

export default function IndustryDetailPage({ params }: PageProps) {
  const industry = industries.find((ind) => ind.slug === params.slug);
  if (!industry) notFound();

  const Icon = iconMap[industry.icon] ?? Heart;

  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: industry.title },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              {industry.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Key Challenges"
            subtitle="The pain points we see across this industry."
            badge="Challenges"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.challenges.map((challenge, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.08}
                className="rounded-xl border bg-card p-6 shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <p className="font-medium">{challenge}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* How We Help */}
      <AnimatedSection className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Help"
            subtitle="Tailored solutions designed for this industry."
            badge="Solutions"
          />
          <div className="mx-auto max-w-4xl space-y-6">
            {industry.solutions.map((sol, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.08}
                className="rounded-xl border bg-card p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{sol.title}</h3>
                    <p className="mt-1 text-muted-foreground">
                      {sol.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Related Solutions */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Related Solutions"
            subtitle="Explore our core capabilities that power these industry solutions."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(0, 3).map((solution, i) => (
              <AnimatedSection
                key={solution.id}
                delay={i * 0.1}
                className="group rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-semibold">{solution.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {solution.shortDesc}
                </p>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <PartnerCTA />
    </>
  );
}
