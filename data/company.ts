export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface CompanyData {
  mission: string;
  vision: string;
  timeline: Milestone[];
  values: CoreValue[];
}

export const companyData: CompanyData = {
  mission:
    'To empower businesses across Asia and beyond with intelligent automation, actionable analytics, and cloud-first solutions that drive measurable outcomes — delivered with integrity, agility, and deep Microsoft expertise.',
  vision:
    'To be the most trusted technology partner for mid-market enterprises seeking digital transformation — known for turning complex challenges into elegant, scalable solutions that create lasting value.',
  timeline: [
    {
      year: '2019',
      title: 'Founded in Singapore',
      description:
        'sbPowerDev was founded with a clear mission: to bring enterprise-grade Microsoft solutions to mid-market businesses that were underserved by large consulting firms. Starting with a team of two, we began delivering Power Platform solutions to local SMEs.',
    },
    {
      year: '2020',
      title: 'India Development Center Established',
      description:
        'Opened our Noida development center to scale delivery capacity and offer competitive pricing without compromising quality. This dual-shore model became a core advantage for our clients.',
    },
    {
      year: '2022',
      title: 'Microsoft Partner Status Achieved',
      description:
        'Earned our Microsoft Partner designation, recognizing our expertise across Power Platform, Azure, and Microsoft 365. This milestone validated our commitment to technical excellence and customer success.',
    },
    {
      year: '2024',
      title: 'DocuSign Partnership & Regional Expansion',
      description:
        'Became a certified DocuSign partner and expanded our client base across Southeast Asia, India, and the Middle East. Crossed 50 successful project deliveries with a 98% client satisfaction score.',
    },
    {
      year: '2025',
      title: 'AI-First Solutions & Continued Growth',
      description:
        'Launched our AI-powered solutions practice leveraging Copilot Studio, AI Builder, and Azure OpenAI. Grew the team to 25+ consultants and developers, serving clients across 5 countries.',
    },
  ],
  values: [
    {
      title: 'Client Obsession',
      description:
        'Every decision we make starts with the client. We measure our success by the business outcomes we deliver, not the hours we bill. We go beyond requirements to anticipate needs and exceed expectations.',
      icon: 'Heart',
    },
    {
      title: 'Technical Excellence',
      description:
        'We hold ourselves to the highest engineering standards. Our solutions are built to scale, secured by design, and documented thoroughly. We invest continuously in certifications and learning.',
      icon: 'Award',
    },
    {
      title: 'Transparency & Trust',
      description:
        'We communicate honestly — about timelines, trade-offs, and challenges. Our clients always know where their project stands. We earn trust through consistent delivery and open dialogue.',
      icon: 'Shield',
    },
    {
      title: 'Continuous Innovation',
      description:
        'Technology evolves fast, and so do we. We actively explore new tools, frameworks, and methodologies to bring fresh ideas to every engagement. Innovation is not a department — it is how we work.',
      icon: 'Lightbulb',
    },
  ],
};
