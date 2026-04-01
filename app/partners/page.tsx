import type { Metadata } from 'next';
import { CheckCircle2, ShieldCheck, FileSignature } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Our Partners',
  description:
    'sbPowerDev is a certified Microsoft and DocuSign partner — bringing trusted technology partnerships to deliver best-in-class solutions.',
};

const partners = [
  {
    name: 'Microsoft',
    icon: ShieldCheck,
    designation: 'Certified Microsoft Partner',
    description:
      'As a certified Microsoft Partner, sbPowerDev has demonstrated deep expertise across the Microsoft ecosystem. Our partnership gives us early access to new features, dedicated technical support, and co-selling opportunities that directly benefit our clients.',
    areas: [
      'Power Platform (Power Apps, Power Automate, Power BI, Power Pages)',
      'Azure Cloud Services (Infrastructure, Data, AI)',
      'Microsoft 365 & SharePoint',
      'Dynamics 365',
      'Copilot & AI Builder',
    ],
  },
  {
    name: 'DocuSign',
    icon: FileSignature,
    designation: 'Certified DocuSign Partner',
    description:
      'Our DocuSign partnership enables us to deliver end-to-end agreement automation solutions. We integrate DocuSign with Microsoft Power Platform and business applications to streamline document signing, approvals, and compliance workflows.',
    areas: [
      'eSignature integration with Power Apps & SharePoint',
      'Agreement workflow automation',
      'CLM (Contract Lifecycle Management)',
      'Compliance and audit trail solutions',
      'Custom DocuSign API integrations',
    ],
  },
];

const benefits = [
  {
    title: 'Certified Expertise',
    description:
      'Work with consultants who hold official certifications and are recognized by the technology vendors themselves.',
  },
  {
    title: 'Priority Support',
    description:
      'Our partner status gives us direct access to vendor engineering teams for faster issue resolution.',
  },
  {
    title: 'Early Access',
    description:
      'Get access to preview features and new capabilities before they are generally available.',
  },
  {
    title: 'Best Practices',
    description:
      'We follow vendor-recommended architectures, patterns, and security guidelines in every implementation.',
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Our{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Partners
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Strategic partnerships with industry leaders to deliver
              best-in-class solutions for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Cards */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technology Partners"
            subtitle="We partner with the best so you get the best."
            badge="Partnerships"
          />
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {partners.map((partner, index) => (
              <AnimatedSection key={partner.name} delay={index * 0.15}>
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <partner.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold">{partner.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {partner.designation}
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {partner.description}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {partner.areas.map((area) => (
                        <li key={area} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Benefits of Our Partnerships"
            subtitle="What our partner ecosystem means for you."
          />
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <h3 className="font-bold">{benefit.title}</h3>
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

      <PartnerCTA />
    </>
  );
}
