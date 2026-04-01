export interface Technology {
  name: string;
  description: string;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  tools: Technology[];
}

export const technologies: TechnologyCategory[] = [
  {
    id: 'collaboration',
    title: 'Collaboration',
    tools: [
      {
        name: 'SharePoint',
        description: 'Enterprise content management, intranet portals, and document collaboration.',
      },
      {
        name: 'Microsoft Teams',
        description: 'Unified communication hub for chat, meetings, calls, and app integrations.',
      },
      {
        name: 'Power Apps',
        description: 'Low-code application platform for building custom business apps on any device.',
      },
      {
        name: 'Power Automate',
        description: 'Workflow automation engine connecting 1,000+ services with no-code and pro-code flows.',
      },
      {
        name: 'Power Pages',
        description: 'Secure, low-code external-facing websites and portals with Dataverse integration.',
      },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    tools: [
      {
        name: 'Microsoft Azure',
        description: 'Comprehensive cloud platform for compute, storage, networking, AI, and DevOps.',
      },
      {
        name: 'Microsoft 365',
        description: 'Productivity suite with Exchange, SharePoint, OneDrive, Teams, and security tools.',
      },
      {
        name: 'Amazon Web Services',
        description: 'Cloud infrastructure services for storage, compute, databases, and serverless workloads.',
      },
      {
        name: 'Google Cloud',
        description: 'Cloud platform with strengths in data analytics, machine learning, and Kubernetes.',
      },
    ],
  },
  {
    id: 'low-code',
    title: 'Low Code',
    tools: [
      {
        name: 'Power Platform',
        description: 'Microsoft\'s unified low-code suite spanning apps, automation, analytics, and portals.',
      },
      {
        name: 'Dataverse',
        description: 'Scalable, secure data platform that underpins Power Platform and Dynamics 365 applications.',
      },
      {
        name: 'AI Builder',
        description: 'No-code AI models for form processing, object detection, text analysis, and predictions.',
      },
      {
        name: 'Copilot Studio',
        description: 'Build and deploy custom AI copilots and chatbots with natural language understanding.',
      },
    ],
  },
  {
    id: 'data-ai',
    title: 'Data & AI',
    tools: [
      {
        name: 'Power BI',
        description: 'Interactive data visualization and business intelligence platform with AI-powered insights.',
      },
      {
        name: 'Azure Synapse Analytics',
        description: 'Unified analytics service combining data warehousing, big data, and data integration.',
      },
      {
        name: 'Azure Machine Learning',
        description: 'End-to-end ML platform for building, training, and deploying models at enterprise scale.',
      },
      {
        name: 'Microsoft Fabric',
        description: 'All-in-one analytics platform unifying data engineering, science, warehousing, and BI.',
      },
    ],
  },
];
