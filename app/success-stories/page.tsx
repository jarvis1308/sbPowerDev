import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';
import { successStories } from '@/data/success-stories';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';

export const metadata: Metadata = {
  title: 'Success Stories',
  description:
    'Real results for real businesses. See how sbPowerDev has helped organisations transform operations with Microsoft-based solutions.',
};

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Rapid Delivery',
    description:
      'We move fast without cutting corners. Most solutions go live within 4-8 weeks.',
  },
  {
    icon: Users,
    title: 'Dedicated Partnership',
    description:
      'We work as an extension of your team with transparent communication and shared accountability.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Impact',
    description:
      'Every engagement is anchored to clear KPIs so you can quantify the value delivered.',
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Success Stories
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Real Results for Real Businesses
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Case Studies"
            subtitle="See how we have delivered measurable outcomes across industries."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story, index) => (
              <AnimatedSection
                key={story.id}
                delay={index * 0.1}
                className="group flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-4xl font-bold text-primary">
                  {story.heroStat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {story.heroStat.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{story.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {story.client}
                </p>
                <p className="mt-3 line-clamp-3 text-muted-foreground">
                  {story.challenge.slice(0, 150)}...
                </p>
                <Link
                  href={`/success-stories/${story.slug}`}
                  className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Read Full Story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose sbPowerDev */}
      <AnimatedSection className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose sbPowerDev"
            subtitle="What sets us apart as your technology partner."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={i}
                  delay={i * 0.1}
                  className="rounded-xl border bg-card p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <PartnerCTA />
    </>
  );
}
