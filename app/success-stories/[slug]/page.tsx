import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/shared/Breadcrumb';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Badge } from '@/components/ui/badge';
import { successStories } from '@/data/success-stories';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return successStories.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const story = successStories.find((s) => s.slug === params.slug);
  if (!story) return { title: 'Story Not Found' };
  return {
    title: story.title,
    description: `${story.heroStat.value} ${story.heroStat.label} — ${story.client}`,
  };
}

export default function SuccessStoryDetailPage({ params }: PageProps) {
  const story = successStories.find((s) => s.slug === params.slug);
  if (!story) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Success Stories', href: '/success-stories' },
            { label: story.title },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-6xl font-bold text-primary md:text-7xl">
              {story.heroStat.value}
            </p>
            <p className="mt-2 text-lg text-muted-foreground">
              {story.heroStat.label}
            </p>
            <h1 className="mt-6 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {story.title}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {story.client} &middot; {story.industry}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="The Challenge" align="left" badge="Challenge" />
            <p className="text-muted-foreground leading-relaxed">
              {story.challenge}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Solution */}
      <AnimatedSection className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Our Solution" align="left" badge="Solution" />
            <p className="text-muted-foreground leading-relaxed">
              {story.solution}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Results */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Results"
            subtitle="Measurable outcomes delivered."
            badge="Results"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {story.results.map((stat, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.08}
                className="rounded-xl border bg-card p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technology Stack"
            subtitle="The tools and platforms powering this solution."
            badge="Tech Stack"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {story.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <PartnerCTA />
    </>
  );
}
