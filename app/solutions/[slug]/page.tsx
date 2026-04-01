import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Cpu,
  BarChart3,
  Cloud,
  Briefcase,
  BookOpen,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { solutions } from '@/data/solutions';
import { successStories } from '@/data/success-stories';
import Breadcrumb from '@/components/shared/Breadcrumb';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  BarChart3,
  Cloud,
  Briefcase,
  BookOpen,
};

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) return { title: 'Solution Not Found' };
  return {
    title: solution.title,
    description: solution.shortDesc,
  };
}

export default function SolutionDetailPage({ params }: PageProps) {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) notFound();

  const Icon = iconMap[solution.icon] ?? Cpu;
  const relatedStory = successStories[0];

  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: solution.title },
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
              {solution.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {solution.longDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Key Benefits"
            subtitle="Measurable outcomes that drive real business value."
            badge="Benefits"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solution.benefits.map((benefit, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.08}
                className="rounded-xl border bg-card p-6 shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="font-medium">{benefit}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="A detailed look at how we deliver this solution."
            badge="Services"
          />
          <div className="mx-auto max-w-4xl space-y-6">
            {solution.services.map((service, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.08}
                className="rounded-xl border bg-card p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {service.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Related Case Study */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="See It in Action"
            subtitle="Read how we delivered real results for a real client."
          />
          <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-8 shadow-sm text-center">
            <p className="text-4xl font-bold text-primary">
              {relatedStory.heroStat.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {relatedStory.heroStat.label}
            </p>
            <h3 className="mt-4 text-xl font-semibold">
              {relatedStory.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {relatedStory.client}
            </p>
            <Link
              href={`/success-stories/${relatedStory.slug}`}
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Read Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <PartnerCTA />
    </>
  );
}
