import type { Metadata } from 'next';
import {
  Workflow,
  Cloud,
  BarChart3,
  Layout,
  Code2,
  BrainCircuit,
} from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Our Capabilities',
  description:
    'Explore sbPowerDev capabilities — Power Platform, Azure Cloud, Data Analytics, SharePoint, Custom Development, and AI & ML solutions.',
};

const capabilities = [
  {
    icon: Workflow,
    title: 'Power Platform',
    description:
      'Build custom apps, automate workflows, analyze data, and create portals with Microsoft Power Platform. We deliver low-code and pro-code solutions that scale with your business.',
    technologies: [
      'Power Apps',
      'Power Automate',
      'Power BI',
      'Power Pages',
      'Dataverse',
      'Copilot Studio',
    ],
  },
  {
    icon: Cloud,
    title: 'Azure Cloud',
    description:
      'Migrate, modernize, and optimize your infrastructure on Microsoft Azure. From serverless functions to enterprise-grade architectures, we design cloud solutions built for performance and security.',
    technologies: [
      'App Services',
      'Azure Functions',
      'Azure SQL',
      'Blob Storage',
      'Key Vault',
      'Azure AD',
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable insights with interactive dashboards, data pipelines, and self-service analytics. Make data-driven decisions with confidence.',
    technologies: [
      'Power BI',
      'Azure Synapse',
      'Data Factory',
      'SQL Server',
      'DAX',
      'Python',
    ],
  },
  {
    icon: Layout,
    title: 'SharePoint & Microsoft 365',
    description:
      'Design modern intranets, document management systems, and collaboration hubs on SharePoint and Microsoft 365. Streamline communication and knowledge sharing across your organization.',
    technologies: [
      'SharePoint Online',
      'Teams',
      'OneDrive',
      'SPFx',
      'Graph API',
      'Viva',
    ],
  },
  {
    icon: Code2,
    title: 'Custom Development',
    description:
      'When off-the-shelf is not enough, we build custom web applications, APIs, and integrations using modern frameworks and cloud-native architectures.',
    technologies: [
      '.NET',
      'TypeScript',
      'React',
      'Node.js',
      'REST APIs',
      'Azure DevOps',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    description:
      'Leverage artificial intelligence to automate complex decisions, extract insights from unstructured data, and build intelligent assistants that understand your business context.',
    technologies: [
      'Azure OpenAI',
      'AI Builder',
      'Copilot Studio',
      'Cognitive Services',
      'ML Studio',
      'Document Intelligence',
    ],
  },
];

export default function OurCapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Our{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Capabilities
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              From automation and analytics to cloud and AI — we bring the full
              spectrum of Microsoft technology expertise to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technology Areas"
            subtitle="Deep expertise across the Microsoft ecosystem and beyond."
            badge="Capabilities"
          />
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={cap.title} delay={index * 0.08}>
                <Card className="group h-full transition-shadow hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <cap.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold">{cap.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {cap.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cap.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
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
