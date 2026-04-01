export interface IndustrySolution {
  title: string;
  description: string;
}

export interface Industry {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: IndustrySolution[];
  // Fields for the homepage bento mosaic
  emoji: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  stat: string;
  statLabel: string;
  color: string;
  colorLight: string;
}

export const industries: Industry[] = [
  {
    id: 'food-beverages',
    title: 'Food & Beverages',
    slug: 'food-beverages',
    description:
      'The food and beverages industry faces unique pressures — from stringent hygiene regulations and complex supply chains to fluctuating demand and razor-thin margins. We help F&B companies digitize operations, automate compliance workflows, and gain real-time visibility into their supply chain with tailored Microsoft-based solutions.',
    icon: 'Utensils',
    emoji: '🍽',
    shortDesc: 'Supply chain automation and compliance tracking.',
    fullDesc:
      'From supply chain automation to real-time inventory dashboards — we help F&B companies eliminate waste, ensure compliance, and scale operations across multiple locations.',
    tags: ['Supply Chain', 'Power BI', 'Compliance', 'IoT'],
    stat: '30%',
    statLabel: 'waste reduction',
    color: '#f97316',
    colorLight: '#fb923c',
    challenges: [
      'Managing compliance with food safety regulations (HACCP, SFA, FSSAI) across multiple facilities',
      'Tracking inventory and expiry dates across a fragmented supply chain',
      'Manual paper-based processes for quality audits and inspections',
      'Difficulty forecasting demand and minimizing food waste',
      'Limited visibility into supplier performance and delivery timelines',
      'High employee turnover requiring frequent re-training on SOPs',
    ],
    solutions: [
      {
        title: 'Digital Quality & Compliance Management',
        description:
          'Replace paper checklists with Power Apps-based inspection tools that auto-generate compliance reports and send alerts for non-conformances.',
      },
      {
        title: 'Supply Chain Visibility Dashboard',
        description:
          'Centralize supplier data, track deliveries in real time, and monitor KPIs with interactive Power BI dashboards connected to your ERP.',
      },
      {
        title: 'Automated Inventory & Expiry Tracking',
        description:
          'Build automated workflows that flag expiring stock, trigger reorder points, and sync inventory levels across warehouses and outlets.',
      },
      {
        title: 'Demand Forecasting & Waste Reduction',
        description:
          'Apply predictive analytics to historical sales and seasonal data to optimize production planning and minimize food waste.',
      },
    ],
  },
  {
    id: 'fintech',
    title: 'FinTech',
    slug: 'fintech',
    description:
      'FinTech companies operate in a fast-moving, heavily regulated environment where speed to market, data security, and regulatory compliance are non-negotiable. We help FinTech firms build scalable platforms, automate risk management workflows, and maintain compliance with MAS, RBI, and global regulatory frameworks.',
    icon: 'Landmark',
    emoji: '🏦',
    shortDesc: 'Transaction processing and risk management.',
    fullDesc:
      'We build secure, scalable platforms that handle millions of transactions daily — from payment processing to risk analytics and regulatory compliance.',
    tags: ['Azure', 'Security', 'APIs', 'Real-time'],
    stat: '5x',
    statLabel: 'faster processing',
    color: '#6366f1',
    colorLight: '#818cf8',
    challenges: [
      'Keeping pace with evolving regulatory requirements (MAS, RBI, GDPR, SOC 2)',
      'Managing risk assessment and KYC/AML processes at scale',
      'Securing sensitive financial data against increasingly sophisticated threats',
      'Integrating with banking APIs, payment gateways, and third-party services',
      'Generating audit-ready reports and maintaining comprehensive data trails',
      'Scaling infrastructure to handle transaction volume spikes without downtime',
    ],
    solutions: [
      {
        title: 'Automated Regulatory Compliance',
        description:
          'Build workflow-driven compliance systems that automate KYC checks, AML screening, and regulatory filing using Power Automate and custom APIs.',
      },
      {
        title: 'Risk Management Platform',
        description:
          'Deploy real-time risk dashboards that aggregate data from multiple sources, calculate risk scores, and trigger automated escalation workflows.',
      },
      {
        title: 'Secure Cloud Infrastructure',
        description:
          'Architect Azure-based environments with encryption at rest and in transit, network segmentation, and Defender for Cloud threat protection.',
      },
      {
        title: 'Transaction Analytics & Reporting',
        description:
          'Create Power BI reporting suites that provide real-time transaction monitoring, anomaly detection, and audit-ready compliance reports.',
      },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    slug: 'education',
    description:
      'Educational institutions are transforming how they deliver learning, manage operations, and engage with students and parents. We help schools, universities, and EdTech companies leverage Microsoft 365, Power Platform, and Azure to create connected digital campuses that enhance both the learning experience and administrative efficiency.',
    icon: 'GraduationCap',
    emoji: '🎓',
    shortDesc: 'Learning management and student analytics.',
    fullDesc:
      'Learning management systems, student performance analytics, and administrative process automation that frees educators to focus on what matters — teaching.',
    tags: ['LMS', 'SharePoint', 'Power Apps', 'Analytics'],
    stat: '40%',
    statLabel: 'less admin time',
    color: '#10b981',
    colorLight: '#34d399',
    challenges: [
      'Managing student lifecycle from admissions to alumni engagement across siloed systems',
      'Delivering hybrid and remote learning experiences at scale',
      'Automating administrative processes like attendance, grading, and scheduling',
      'Ensuring data privacy and compliance with student data protection regulations',
      'Engaging parents and guardians with timely, personalized communication',
      'Measuring and improving learning outcomes with limited data infrastructure',
    ],
    solutions: [
      {
        title: 'Student Information System (SIS)',
        description:
          'Build a centralized student management platform using Power Apps and Dataverse that tracks enrollment, attendance, grades, and communications.',
      },
      {
        title: 'Digital Learning Platform',
        description:
          'Deploy Microsoft Teams-based virtual classrooms with integrated assignment management, video lectures, and collaborative workspaces.',
      },
      {
        title: 'Admissions & Enrollment Automation',
        description:
          'Streamline the admissions pipeline with online application forms, automated document verification, and real-time status tracking.',
      },
      {
        title: 'Learning Analytics Dashboard',
        description:
          'Create Power BI dashboards that track student performance trends, identify at-risk learners, and measure program effectiveness.',
      },
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    slug: 'healthcare',
    description:
      'Healthcare organizations must balance patient care quality with operational efficiency and strict regulatory compliance. We help hospitals, clinics, and health-tech companies digitize patient workflows, automate clinical documentation, and build analytics platforms that improve outcomes while reducing administrative burden.',
    icon: 'Heart',
    emoji: '🏥',
    shortDesc: 'EMR, patient management, telemedicine.',
    fullDesc:
      'Electronic medical records, patient management, telemedicine platforms, and data analytics that enhance patient care and operational efficiency.',
    tags: ['EMR', 'HIPAA', 'Telemedicine', 'Power BI'],
    stat: '99.9%',
    statLabel: 'data accuracy',
    color: '#f43f5e',
    colorLight: '#fb7185',
    challenges: [
      'Managing patient records across disconnected systems and departments',
      'Ensuring compliance with healthcare regulations (HIPAA, PDPA, NABH)',
      'Reducing administrative burden on clinical staff for documentation and scheduling',
      'Analyzing clinical and operational data to improve patient outcomes',
      'Coordinating care across multiple providers and facilities',
      'Securing protected health information (PHI) against breaches and unauthorized access',
    ],
    solutions: [
      {
        title: 'Patient Management System',
        description:
          'Build a unified patient portal using Power Apps that manages appointments, medical history, prescriptions, and billing in one platform.',
      },
      {
        title: 'Clinical Workflow Automation',
        description:
          'Automate referral routing, lab result notifications, discharge processes, and follow-up scheduling to free up clinical staff time.',
      },
      {
        title: 'Healthcare Analytics Platform',
        description:
          'Deploy Power BI dashboards that track patient outcomes, bed utilization, revenue cycle metrics, and operational KPIs in real time.',
      },
      {
        title: 'Compliance & Audit Automation',
        description:
          'Implement automated compliance checks, incident reporting workflows, and audit trail systems to meet healthcare regulatory requirements.',
      },
    ],
  },
  {
    id: 'licensing',
    title: 'Licensing & Compliance',
    slug: 'licensing',
    description:
      'Organizations that manage licensing — whether for professionals, businesses, or products — deal with complex application workflows, renewal cycles, and regulatory audits. We help licensing authorities and compliance teams digitize their entire licensing lifecycle, from application intake to renewal reminders, with automated workflows that ensure nothing falls through the cracks.',
    icon: 'FileCheck',
    emoji: '📋',
    shortDesc: 'License management and IP protection.',
    fullDesc:
      'License management, compliance tracking, and intellectual property protection systems that reduce manual work and eliminate renewal gaps.',
    tags: ['Automation', 'DocuSign', 'Tracking', 'Workflows'],
    stat: '60%',
    statLabel: 'faster renewals',
    color: '#0ea5e9',
    colorLight: '#38bdf8',
    challenges: [
      'Processing high volumes of license applications with inconsistent formats and incomplete data',
      'Tracking renewal deadlines and sending timely notifications to licensees',
      'Maintaining accurate, audit-ready records across thousands of active licenses',
      'Coordinating multi-department reviews and approvals for complex license types',
      'Generating compliance reports for regulatory bodies and internal stakeholders',
      'Handling fee collection, receipt generation, and reconciliation manually',
    ],
    solutions: [
      {
        title: 'Digital License Application Portal',
        description:
          'Build a self-service portal using Power Pages where applicants submit forms, upload documents, and track application status in real time.',
      },
      {
        title: 'Automated Review & Approval Workflows',
        description:
          'Design multi-stage approval workflows with conditional routing, reviewer assignment, SLA tracking, and automated escalation rules.',
      },
      {
        title: 'Renewal Management System',
        description:
          'Automate renewal reminders, generate renewal notices, and process payments through integrated workflows connected to your finance systems.',
      },
      {
        title: 'Compliance Reporting & Analytics',
        description:
          'Create comprehensive dashboards that show license status distribution, processing times, compliance rates, and revenue analytics.',
      },
    ],
  },
];
