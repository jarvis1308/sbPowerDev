import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Heart,
  Globe,
  Rocket,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the sbPowerDev team — explore open positions and discover why talented engineers and consultants choose to build their careers with us.',
};

const benefits = [
  {
    icon: GraduationCap,
    title: 'Learning & Growth',
    description:
      'Sponsored Microsoft certifications, training budgets, and access to premium learning platforms. We invest in your growth because your expertise is our competitive advantage.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description:
      'Flexible working hours, hybrid/remote options, and generous leave policies. We trust you to manage your time and deliver results on your terms.',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description:
      'Work with clients across Singapore, India, the Middle East, and beyond. Gain international project experience without leaving your home base.',
  },
  {
    icon: Rocket,
    title: 'Impact & Ownership',
    description:
      'Small team, big impact. You will work on meaningful projects where your contributions are visible and valued. No layers of bureaucracy — just great work.',
  },
];

const openPositions = [
  {
    title: 'Senior Power Platform Developer',
    location: 'Noida, India',
    type: 'Full-time',
    description:
      'Build custom Power Apps, design Power Automate workflows, and deliver end-to-end solutions for enterprise clients.',
  },
  {
    title: 'Azure Cloud Engineer',
    location: 'Singapore / Remote',
    type: 'Full-time',
    description:
      'Design, deploy, and manage Azure cloud infrastructure. Lead migration projects and optimize cloud-native architectures.',
  },
  {
    title: 'Power BI Analyst',
    location: 'Noida, India',
    type: 'Full-time',
    description:
      'Create interactive dashboards, build data models, and deliver self-service analytics environments for diverse industries.',
  },
  {
    title: 'Business Development Manager',
    location: 'Singapore',
    type: 'Full-time',
    description:
      'Drive new business acquisition across APAC. Build relationships, identify opportunities, and work closely with delivery teams.',
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Build your career at the intersection of technology and business
              impact. We are looking for curious, driven people who love solving
              real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Work at sbPowerDev"
            subtitle="More than a job — a place where you grow, contribute, and thrive."
            badge="Benefits"
          />
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Open Positions */}
      <AnimatedSection className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Open Positions"
            subtitle="Find your next opportunity with us."
            badge="Hiring"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {openPositions.map((position, index) => (
              <AnimatedSection key={position.title} delay={index * 0.08}>
                <Card className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-bold">{position.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {position.description}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="shrink-0 self-start">
                        Open
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Application CTA */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold md:text-3xl">
              Do not see the right role?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We are always looking for talented people. Send us your resume and
              tell us what excites you — we will reach out when the right
              opportunity opens up.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Send Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <PartnerCTA />
    </>
  );
}
