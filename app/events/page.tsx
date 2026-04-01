import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Join sbPowerDev at upcoming events, webinars, and workshops on Microsoft Power Platform, Azure, and digital transformation.',
};

const upcomingEvents = [
  {
    id: 'evt-1',
    title: 'Power Platform for Mid-Market: Live Workshop',
    date: '2026-04-22',
    time: '2:00 PM - 4:00 PM SGT',
    location: 'Online (Microsoft Teams)',
    description:
      'A hands-on workshop covering Power Apps, Power Automate, and Power BI for mid-market businesses. Learn how to build your first app, automate a workflow, and create a dashboard — all in one session.',
    type: 'Workshop',
  },
  {
    id: 'evt-2',
    title: 'AI-Powered Business Automation with Copilot Studio',
    date: '2026-05-10',
    time: '11:00 AM - 12:30 PM SGT',
    location: 'Online (Webinar)',
    description:
      'Discover how Microsoft Copilot Studio and AI Builder can transform your business processes. We will demo real-world use cases and share our implementation playbook.',
    type: 'Webinar',
  },
  {
    id: 'evt-3',
    title: 'Cloud Migration Masterclass: Azure for Growing Businesses',
    date: '2026-06-05',
    time: '10:00 AM - 1:00 PM SGT',
    location: 'Singapore — Venue TBA',
    description:
      'A deep-dive session on cloud migration planning, security best practices, and cost optimization for Azure. Ideal for IT leaders and decision-makers evaluating cloud strategies.',
    type: 'Masterclass',
  },
];

const pastEvents = [
  {
    id: 'past-1',
    title: 'Introduction to Power BI for Decision Makers',
    date: '2026-02-15',
    type: 'Webinar',
    attendees: '120+',
  },
  {
    id: 'past-2',
    title: 'DocuSign + Power Automate: Agreement Automation',
    date: '2026-01-20',
    type: 'Workshop',
    attendees: '85+',
  },
  {
    id: 'past-3',
    title: 'Building Low-Code Solutions at Scale',
    date: '2025-11-12',
    type: 'Webinar',
    attendees: '200+',
  },
  {
    id: 'past-4',
    title: 'Azure Security Best Practices for SMEs',
    date: '2025-09-28',
    type: 'Masterclass',
    attendees: '60+',
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Events & Webinars
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Learn, connect, and stay ahead with our workshops, webinars, and
              industry events.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Reserve your spot at our next session."
            badge="Upcoming"
          />
          <div className="mx-auto max-w-4xl space-y-6">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <Card className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="secondary">{event.type}</Badge>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" />
                            {new Date(event.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <h3 className="mt-3 text-xl font-bold">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {event.description}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <Button asChild className="shrink-0">
                        <Link href="/contact">
                          Register
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Past Events */}
      <AnimatedSection className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Past Events"
            subtitle="Catch up on sessions you may have missed."
          />
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pastEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.08}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {event.type}
                    </Badge>
                    <h3 className="text-sm font-bold leading-tight">
                      {event.title}
                    </h3>
                    <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                      <p className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                      <p>{event.attendees} attendees</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <PartnerCTA />
    </>
  );
}
