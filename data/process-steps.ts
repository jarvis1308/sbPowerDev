export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    step: 1,
    title: 'Discovery',
    description:
      'We start by understanding your business inside out. Through stakeholder interviews, process mapping, and technology audits, we identify pain points, opportunities, and success criteria.',
    icon: 'Search',
    details: [
      'Stakeholder interviews and requirements gathering',
      'Current-state process mapping and documentation',
      'Technology landscape assessment',
      'Pain point identification and prioritization',
      'Success criteria and KPI definition',
    ],
  },
  {
    id: 'proposal',
    step: 2,
    title: 'Proposal',
    description:
      'Based on our discovery findings, we present a detailed proposal with solution architecture, technology recommendations, timeline, and transparent pricing. No surprises.',
    icon: 'FileText',
    details: [
      'Solution architecture and design document',
      'Technology stack recommendation with rationale',
      'Phased delivery timeline with milestones',
      'Transparent pricing and payment schedule',
      'Risk assessment and mitigation plan',
    ],
  },
  {
    id: 'sprint-planning',
    step: 3,
    title: 'Sprint Planning',
    description:
      'We break the project into 2-week sprints with clear deliverables. You are involved in sprint planning so priorities are always aligned with your business needs.',
    icon: 'Calendar',
    details: [
      'Backlog creation and user story writing',
      'Sprint goal definition and task breakdown',
      'Resource allocation and role assignment',
      'Acceptance criteria for every deliverable',
      'Communication plan and meeting cadence',
    ],
  },
  {
    id: 'development',
    step: 4,
    title: 'Development',
    description:
      'Our team builds, tests, and iterates in agile sprints. You see working software every two weeks, with the opportunity to provide feedback and steer direction.',
    icon: 'Code',
    details: [
      'Agile development in 2-week sprint cycles',
      'Bi-weekly demos with stakeholder feedback sessions',
      'Continuous testing and quality assurance',
      'Code reviews and security best practices',
      'Progress tracking via shared project board',
    ],
  },
  {
    id: 'delivery',
    step: 5,
    title: 'Delivery',
    description:
      'We deploy the solution to your production environment with thorough testing, user training, and comprehensive documentation. Go-live is a planned, low-risk event.',
    icon: 'Rocket',
    details: [
      'User acceptance testing (UAT) with your team',
      'Production deployment with rollback plan',
      'End-user training and admin training sessions',
      'Solution documentation and user guides',
      'Post-launch monitoring and stabilization',
    ],
  },
  {
    id: 'ongoing-support',
    step: 6,
    title: 'Ongoing Support',
    description:
      'Our relationship does not end at go-live. We provide ongoing support, monitor solution health, and continuously improve based on user feedback and evolving business needs.',
    icon: 'Headphones',
    details: [
      'Dedicated support channel (Teams or email)',
      'Bug fixes and performance optimization',
      'Monthly health checks and usage analytics',
      'Feature enhancements and iterative improvements',
      'Quarterly business reviews and roadmap planning',
    ],
  },
];
