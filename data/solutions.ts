export interface SolutionService {
  title: string;
  description: string;
}

export interface Solution {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  benefits: string[];
  services: SolutionService[];
}

export const solutions: Solution[] = [
  {
    id: 'bpa',
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    shortDesc:
      'Streamline workflows, eliminate manual bottlenecks, and accelerate operations with Power Automate and custom-built automation solutions.',
    longDesc:
      'Modern businesses lose hundreds of hours every month to repetitive, manual tasks that drain productivity and invite human error. Our Business Process Automation practice leverages Microsoft Power Automate, custom APIs, and intelligent document processing to transform your operations end-to-end. From approval workflows and invoice processing to employee onboarding and compliance reporting, we design automation that scales with your business. Every solution is tailored to your existing tech stack, ensuring seamless integration with SharePoint, Dynamics 365, SAP, and other enterprise systems.',
    icon: 'Cpu',
    benefits: [
      'Reduce manual processing time by up to 80%',
      'Eliminate human error in data entry and approvals',
      'Achieve full audit trails for regulatory compliance',
      'Scale operations without proportional headcount increases',
      'Integrate seamlessly with Microsoft 365, ERP, and CRM systems',
      'Accelerate turnaround times from days to minutes',
    ],
    services: [
      {
        title: 'Workflow Automation',
        description:
          'Design and deploy end-to-end automated workflows using Power Automate, Logic Apps, and custom connectors to eliminate manual handoffs.',
      },
      {
        title: 'Document Processing',
        description:
          'Leverage AI Builder and intelligent document recognition to extract, validate, and route information from invoices, contracts, and forms.',
      },
      {
        title: 'Approval & Routing Systems',
        description:
          'Build multi-level approval chains with conditional logic, escalation rules, and mobile-friendly interfaces for on-the-go decision-making.',
      },
      {
        title: 'Integration Services',
        description:
          'Connect disparate systems — ERP, CRM, HRIS, and legacy databases — through secure APIs and middleware for unified data flow.',
      },
      {
        title: 'Robotic Process Automation (RPA)',
        description:
          'Deploy desktop and cloud-based bots to automate repetitive tasks across web applications, legacy systems, and spreadsheets.',
      },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    slug: 'data-analytics',
    shortDesc:
      'Transform raw data into actionable insights with Power BI dashboards, advanced analytics, and AI-driven reporting.',
    longDesc:
      'Data is your most valuable asset — but only when you can understand and act on it. Our Data Analytics practice helps organizations build a data-driven culture by combining Microsoft Power BI, Azure Synapse Analytics, and custom data pipelines. We go beyond simple dashboards: our team designs semantic data models, implements row-level security, and creates self-service analytics environments that empower every stakeholder. Whether you need real-time operational dashboards, financial forecasting models, or customer behaviour analysis, we deliver insights that drive measurable business outcomes.',
    icon: 'BarChart3',
    benefits: [
      'Gain real-time visibility into KPIs across all departments',
      'Reduce report generation time from hours to seconds',
      'Enable self-service analytics for non-technical stakeholders',
      'Uncover hidden trends and patterns with AI-powered insights',
      'Ensure data governance with row-level security and compliance controls',
      'Consolidate data from multiple sources into a single source of truth',
    ],
    services: [
      {
        title: 'Power BI Implementation',
        description:
          'Design, develop, and deploy interactive Power BI dashboards and reports tailored to your business metrics and decision-making needs.',
      },
      {
        title: 'Data Warehouse Design',
        description:
          'Architect modern data warehouses using Azure Synapse, Fabric, or Dataverse to centralize and structure your enterprise data.',
      },
      {
        title: 'ETL & Data Pipelines',
        description:
          'Build robust extract-transform-load pipelines using Azure Data Factory, Power Query, and custom scripts to ensure data freshness and accuracy.',
      },
      {
        title: 'Predictive Analytics',
        description:
          'Apply machine learning models and statistical analysis to forecast trends, detect anomalies, and optimize business outcomes.',
      },
      {
        title: 'Data Governance & Security',
        description:
          'Implement data classification, access controls, sensitivity labels, and compliance frameworks to protect your analytics environment.',
      },
    ],
  },
  {
    id: 'cloud-transformation',
    title: 'Cloud Transformation',
    slug: 'cloud-transformation',
    shortDesc:
      'Migrate, modernize, and optimize your infrastructure with Azure, Microsoft 365, and hybrid cloud architectures.',
    longDesc:
      'The cloud is no longer optional — it is the foundation of business agility, security, and innovation. Our Cloud Transformation practice guides organizations through every stage of their cloud journey: from strategic assessment and migration planning to execution and ongoing optimization. We specialize in Microsoft Azure and Microsoft 365 ecosystems, delivering solutions that range from lift-and-shift migrations to full cloud-native re-architecture. Our certified architects ensure your workloads run securely, cost-effectively, and at peak performance in the cloud.',
    icon: 'Cloud',
    benefits: [
      'Reduce infrastructure costs by 30-50% with optimized cloud resources',
      'Achieve 99.99% uptime with enterprise-grade Azure SLAs',
      'Enable remote and hybrid work with Microsoft 365 and Teams',
      'Strengthen security posture with Zero Trust architecture',
      'Scale compute and storage on demand without capital expenditure',
      'Accelerate innovation with cloud-native services and DevOps practices',
    ],
    services: [
      {
        title: 'Cloud Assessment & Strategy',
        description:
          'Evaluate your current infrastructure, identify migration candidates, and build a phased cloud adoption roadmap aligned with business goals.',
      },
      {
        title: 'Azure Migration',
        description:
          'Execute seamless migrations of servers, databases, applications, and file shares to Azure with minimal downtime and risk.',
      },
      {
        title: 'Microsoft 365 Deployment',
        description:
          'Roll out Microsoft 365 suite including Exchange Online, SharePoint, Teams, and security configurations for your entire organization.',
      },
      {
        title: 'Cloud Security & Compliance',
        description:
          'Implement Defender for Cloud, Sentinel SIEM, Conditional Access policies, and compliance frameworks (SOC 2, ISO 27001, GDPR).',
      },
      {
        title: 'Cost Optimization',
        description:
          'Continuously monitor and right-size cloud resources, implement reserved instances, and eliminate waste to maximize ROI.',
      },
    ],
  },
  {
    id: 'tech-consulting',
    title: 'Technology Consulting',
    slug: 'technology-consulting',
    shortDesc:
      'Strategic IT advisory to align technology investments with business objectives and accelerate digital transformation.',
    longDesc:
      'Technology decisions have long-term consequences — the right strategy can propel growth, while the wrong one creates technical debt that slows you down for years. Our Technology Consulting practice brings deep Microsoft ecosystem expertise and cross-industry experience to help you make informed decisions. We work as an extension of your leadership team, providing CTO-level guidance on architecture, vendor selection, build-vs-buy analysis, and digital transformation roadmaps. From startups seeking their first enterprise platform to established companies modernizing legacy systems, we deliver pragmatic advice backed by hands-on implementation experience.',
    icon: 'Briefcase',
    benefits: [
      'Align IT investments with measurable business outcomes',
      'Reduce risk with proven frameworks and vendor-neutral guidance',
      'Accelerate decision-making with expert architecture reviews',
      'Build internal capabilities through knowledge transfer and mentoring',
      'Avoid costly mistakes with thorough build-vs-buy analysis',
      'Create a clear technology roadmap for the next 1-3 years',
    ],
    services: [
      {
        title: 'Digital Transformation Strategy',
        description:
          'Develop a comprehensive digital transformation roadmap that prioritizes initiatives by business impact, feasibility, and cost.',
      },
      {
        title: 'Architecture Review & Design',
        description:
          'Assess your current technology landscape and design future-state architectures that are scalable, secure, and maintainable.',
      },
      {
        title: 'Vendor & Platform Selection',
        description:
          'Conduct objective evaluations of technology platforms, SaaS products, and service providers to find the best fit for your needs.',
      },
      {
        title: 'IT Governance & Compliance',
        description:
          'Establish governance frameworks, security policies, and compliance controls aligned with industry regulations and best practices.',
      },
      {
        title: 'Change Management',
        description:
          'Plan and execute organizational change initiatives to ensure smooth technology adoption and maximize user engagement.',
      },
    ],
  },
  {
    id: 'professional-development',
    title: 'Professional Development',
    slug: 'professional-development',
    shortDesc:
      'Upskill your team with expert-led training programs on Power Platform, Azure, data analytics, and modern workplace tools.',
    longDesc:
      'The best technology investments fail without the people skills to leverage them. Our Professional Development practice delivers hands-on, role-based training that empowers your team to get the most out of Microsoft technologies. Whether you need to train citizen developers on Power Apps, upskill analysts on Power BI, or certify your IT team on Azure, our programs combine real-world scenarios with structured learning paths. We offer instructor-led workshops, self-paced modules, and ongoing mentoring — all customized to your organization\'s tools, data, and processes.',
    icon: 'BookOpen',
    benefits: [
      'Accelerate technology adoption with role-based training paths',
      'Build a community of citizen developers within your organization',
      'Reduce dependency on external consultants for everyday tasks',
      'Increase employee satisfaction and retention through upskilling',
      'Prepare teams for Microsoft certification exams (PL-900, PL-400, AZ-900)',
      'Create lasting impact with hands-on labs using your own business data',
    ],
    services: [
      {
        title: 'Power Platform Training',
        description:
          'Comprehensive workshops on Power Apps, Power Automate, Power BI, and Power Pages — from beginner to advanced levels.',
      },
      {
        title: 'Azure Fundamentals Bootcamp',
        description:
          'Intensive training on Azure core services, identity management, networking, and security for IT professionals.',
      },
      {
        title: 'Data Literacy Programs',
        description:
          'Enable non-technical teams to understand, interpret, and act on data through structured data literacy curricula.',
      },
      {
        title: 'Custom Corporate Workshops',
        description:
          'Tailored training sessions built around your specific tools, processes, and business scenarios for maximum relevance.',
      },
      {
        title: 'Certification Preparation',
        description:
          'Structured study plans, practice exams, and mentoring to help your team achieve Microsoft and industry certifications.',
      },
    ],
  },
];
