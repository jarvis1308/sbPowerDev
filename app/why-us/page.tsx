import type { Metadata } from 'next';
import {
  ShieldCheck,
  Globe,
  Zap,
  Layers,
  Building2,
  HeadphonesIcon,
} from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Why Choose sbPowerDev',
  description:
    'Discover what sets sbPowerDev apart — Microsoft certified expertise, global reach, agile delivery, and end-to-end solutions for mid-market enterprises.',
};

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'Microsoft Certified',
    description:
      'Certified Microsoft Partner with deep expertise across Power Platform, Azure, Microsoft 365, and Dynamics 365. Our team holds multiple individual certifications ensuring best-practice delivery.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Headquartered in Singapore with a delivery center in India, we serve clients across APAC, the Middle East, and beyond. Our dual-shore model offers competitive pricing without compromising quality.',
  },
  {
    icon: Zap,
    title: 'Agile Methodology',
    description:
      'We deliver in iterative sprints with frequent demos and feedback loops. This means you see working software early, can course-correct quickly, and get value faster.',
  },
  {
    icon: Layers,
    title: 'End-to-End Solutions',
    description:
      'From strategy and design to development, deployment, and ongoing support — we handle the entire lifecycle. One partner, no gaps, complete accountability.',
  },
  {
    icon: Building2,
    title: 'Industry Expertise',
    description:
      'Proven experience in Food & Beverages, FinTech, Education, Healthcare, and Compliance. We understand your domain challenges and speak your language.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    description:
      'Our relationship does not end at deployment. We provide tiered support plans with proactive monitoring, regular health checks, and continuous optimization.',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5', label: 'Countries Served' },
  { value: '25+', label: 'Team Members' },
];

export default function WhyUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                sbPowerDev
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              We combine deep Microsoft expertise with agile delivery and
              genuine partnership to help mid-market enterprises transform faster
              and smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiator Cards */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Sets Us Apart"
            subtitle="Six reasons clients trust us with their most important initiatives."
            badge="Differentiators"
          />
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="By the Numbers"
            subtitle="Measurable results that reflect our commitment to excellence."
          />
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <PartnerCTA />
    </>
  );
}
