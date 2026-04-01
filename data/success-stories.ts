export interface HeroStat {
  value: string;
  label: string;
}

export interface ResultStat {
  value: string;
  label: string;
}

export interface SuccessStory {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  heroStat: HeroStat;
  challenge: string;
  solution: string;
  results: ResultStat[];
  techStack: string[];
}

export const successStories: SuccessStory[] = [
  {
    id: 'jha-safety-compliance',
    title: 'Job Hazard Assessment (JHA) — Safety Compliance Tool',
    slug: 'job-hazard-assessment',
    client: 'Regional Facilities Management Company',
    industry: 'Food & Beverages',
    heroStat: {
      value: '90%',
      label: 'Reduction in paper-based safety forms',
    },
    challenge:
      'The client operated across 40+ food manufacturing and warehouse facilities, each required to conduct regular Job Hazard Assessments as part of workplace safety compliance. The entire process was paper-based — supervisors filled out multi-page JHA forms by hand, scanned them, and emailed them to the safety team for review. Forms were frequently incomplete, illegible, or lost in transit. The safety team spent over 60 hours per month manually compiling data into spreadsheets for regulatory reporting. There was no centralized view of hazard trends, and critical follow-up actions often fell through the cracks, exposing the company to significant liability.',
    solution:
      'sbPowerDev designed and deployed a fully digital JHA platform using Microsoft Power Apps for mobile data capture, Power Automate for automated routing and notifications, and Power BI for real-time safety analytics. Field supervisors now complete JHA assessments on tablets with guided forms that enforce mandatory fields, auto-populate site information, and capture photo evidence. Completed assessments are automatically routed to the relevant safety officer for review, with SLA-based escalation if reviews are overdue. A centralized Power BI dashboard provides leadership with real-time visibility into hazard categories, facility risk scores, and corrective action completion rates across all 40+ sites.',
    results: [
      { value: '90%', label: 'Reduction in paper-based forms' },
      { value: '60 hrs/mo', label: 'Saved in manual data compilation' },
      { value: '3x', label: 'Faster corrective action closure' },
      { value: '100%', label: 'Audit readiness at all times' },
      { value: '40+', label: 'Facilities on a single platform' },
    ],
    techStack: [
      'Power Apps',
      'Power Automate',
      'Power BI',
      'SharePoint Online',
      'Dataverse',
      'Azure Active Directory',
    ],
  },
  {
    id: 'digital-risk-management',
    title: 'Digital Risk Management Solution',
    slug: 'digital-risk-management',
    client: 'Singapore-based FinTech Startup',
    industry: 'FinTech',
    heroStat: {
      value: '70%',
      label: 'Faster risk assessment cycle',
    },
    challenge:
      'The client, a growing FinTech company offering digital lending products, was managing its entire risk assessment process through a patchwork of Excel spreadsheets and email threads. Loan officers manually collected borrower information, ran credit checks through separate portals, and compiled risk scores in spreadsheets that were shared via email for approval. As loan volume scaled from 200 to 2,000 applications per month, the process became unsustainable. Risk assessment turnaround times ballooned from 2 days to over a week, key compliance checks were missed, and the lack of a centralized audit trail put the company at risk during MAS regulatory reviews.',
    solution:
      'sbPowerDev built a comprehensive digital risk management platform using Power Apps as the front-end for loan officers and risk analysts, Power Automate to orchestrate the multi-step assessment workflow, and Power BI for risk portfolio analytics. The system integrates with third-party credit bureaus and KYC providers via custom connectors, automatically pulling borrower data and generating preliminary risk scores. A multi-level approval workflow routes applications based on risk tier — low-risk applications are auto-approved, while medium and high-risk cases go through escalated manual review with enforced SLAs. Every action is logged in Dataverse, creating a complete audit trail that satisfies MAS regulatory requirements.',
    results: [
      { value: '70%', label: 'Faster risk assessment cycle' },
      { value: '2,000+', label: 'Monthly applications processed' },
      { value: '99.8%', label: 'Compliance check completion rate' },
      { value: '0', label: 'Regulatory findings in last audit' },
      { value: '5x', label: 'Increase in processing capacity' },
    ],
    techStack: [
      'Power Apps',
      'Power Automate',
      'Power BI',
      'Dataverse',
      'Custom Connectors',
      'Azure API Management',
      'Azure Key Vault',
    ],
  },
  {
    id: 'performance-management-system',
    title: 'Performance Management System',
    slug: 'performance-management-system',
    client: 'Multi-national Professional Services Firm',
    industry: 'Healthcare',
    heroStat: {
      value: '45%',
      label: 'Improvement in review completion rates',
    },
    challenge:
      'The client, a professional services firm with 800+ employees across Singapore, India, and Malaysia, relied on a combination of Word templates and shared network folders to manage their annual performance review process. Managers downloaded templates, filled them in offline, and uploaded completed reviews to shared drives — leading to version control nightmares, missed deadlines, and no visibility for HR into the overall progress of the review cycle. The process took over 3 months to complete each year, with HR spending weeks chasing managers for overdue reviews. Employees had no self-service access to their past reviews, goals, or development plans, resulting in low engagement and a perception that performance management was a bureaucratic exercise rather than a growth tool.',
    solution:
      'sbPowerDev delivered a modern Performance Management System built on Power Apps with a Dataverse backend. The platform supports the full performance cycle: goal setting at the start of the year, mid-year check-ins, and year-end reviews. Employees set SMART goals that are reviewed and approved by their managers through an intuitive mobile-friendly interface. Automated reminders and escalation workflows keep the review cycle on track, while a manager dashboard shows real-time completion rates across teams. HR has a centralized Power BI analytics suite that tracks goal achievement rates, competency scores, rating distributions, and identifies high-potential employees. The system also includes a 360-degree feedback module and integrates with the company\'s HRIS for employee data synchronization.',
    results: [
      { value: '45%', label: 'Improvement in review completion rates' },
      { value: '3 months → 4 weeks', label: 'Review cycle duration' },
      { value: '800+', label: 'Employees across 3 countries' },
      { value: '92%', label: 'Employee satisfaction with new process' },
      { value: '100%', label: 'Goal visibility for all employees' },
    ],
    techStack: [
      'Power Apps',
      'Power Automate',
      'Power BI',
      'Dataverse',
      'SharePoint Online',
      'Azure Active Directory',
      'Microsoft Teams Integration',
    ],
  },
];
