import type { Metadata } from 'next';
import { Heart, Award, Shield, Lightbulb } from 'lucide-react';
import { companyData } from '@/data/company';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about sbPowerDev — our story, mission, values, and the team behind enterprise-grade Microsoft solutions for mid-market businesses.',
};

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="h-6 w-6" />,
  Award: <Award className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Lightbulb: <Lightbulb className="h-6 w-6" />,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              From a two-person startup in Singapore to a trusted technology
              partner serving clients across five countries — this is how we got
              here.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones that shaped who we are today."
            badge="Timeline"
          />
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

            {companyData.timeline.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative mb-12 flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year marker */}
                <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground md:left-1/2">
                  {index + 1}
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? 'md:pr-12 md:text-right'
                      : 'md:pl-12 md:text-left'
                  }`}
                >
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {milestone.year}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{milestone.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Mission & Vision"
            subtitle="The purpose that drives everything we do."
          />
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                <p className="mt-4 text-muted-foreground">
                  {companyData.mission}
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-secondary">
                  Our Vision
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {companyData.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide every decision and interaction."
            badge="Values"
          />
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {companyData.values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {iconMap[value.icon] ?? <Heart className="h-6 w-6" />}
                    </div>
                    <h3 className="text-lg font-bold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Better Together Culture */}
      <AnimatedSection className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title="Better Together"
              subtitle="We believe the best outcomes happen when diverse minds collaborate with shared purpose."
              badge="Culture"
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  stat: '25+',
                  label: 'Team Members',
                  desc: 'Across Singapore & India',
                },
                {
                  stat: '5',
                  label: 'Countries Served',
                  desc: 'APAC, Middle East & beyond',
                },
                {
                  stat: '98%',
                  label: 'Client Satisfaction',
                  desc: 'Across 50+ projects',
                },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-card p-6 shadow">
                  <p className="text-3xl font-bold text-primary">{item.stat}</p>
                  <p className="mt-1 font-semibold">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-muted-foreground">
              Our culture thrives on curiosity, mutual respect, and a relentless
              drive to deliver value. Whether it is a quick standup or a
              week-long sprint, every team member brings their best because they
              know their contribution matters.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <PartnerCTA />
    </>
  );
}
