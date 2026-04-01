export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Pricing' | 'Technical' | 'Support';
}

export const faqCategories = ['General', 'Services', 'Pricing', 'Technical', 'Support'] as const;

export const faqs: FAQItem[] = [
  // General
  {
    id: 'gen-1',
    question: 'What does sbPowerDev do?',
    answer:
      'sbPowerDev is a B2B IT services and consulting company specializing in business process automation, data analytics, cloud transformation, and technology consulting. We are a Microsoft and DocuSign partner, headquartered in Singapore with a delivery center in India.',
    category: 'General',
  },
  {
    id: 'gen-2',
    question: 'Where is sbPowerDev located?',
    answer:
      'We have offices in two locations: India at C 01-A, Sector 16B, Noida, Uttar Pradesh 201301, and Singapore at 20 Collyer Quay, #09-01, Singapore 049319. We serve clients globally across APAC, Middle East, and beyond.',
    category: 'General',
  },
  {
    id: 'gen-3',
    question: 'What industries do you serve?',
    answer:
      'We serve a range of industries including Food & Beverages, FinTech, Education, Healthcare, and Licensing & Compliance. Our solutions are adaptable and can be customized for other sectors — reach out to discuss your specific industry needs.',
    category: 'General',
  },
  {
    id: 'gen-4',
    question: 'Are you a certified Microsoft Partner?',
    answer:
      'Yes, sbPowerDev is a certified Microsoft Partner with expertise across the Power Platform, Azure, Microsoft 365, and Dynamics 365 ecosystems. We also hold a DocuSign partnership for electronic signature and agreement automation solutions.',
    category: 'General',
  },
  // Services
  {
    id: 'svc-1',
    question: 'What is business process automation?',
    answer:
      'Business process automation (BPA) uses technology to replace manual, repetitive tasks with automated workflows. We leverage Microsoft Power Automate, Power Apps, and custom integrations to automate processes like approvals, document routing, data entry, and compliance reporting — saving time, reducing errors, and improving efficiency.',
    category: 'Services',
  },
  {
    id: 'svc-2',
    question: 'Can you build custom Power Apps for our business?',
    answer:
      'Absolutely. We design and build custom Power Apps tailored to your specific workflows and data. Whether you need a field inspection app, an employee onboarding portal, or an inventory management system, we create solutions that work on desktop, tablet, and mobile devices.',
    category: 'Services',
  },
  {
    id: 'svc-3',
    question: 'Do you offer data analytics and Power BI services?',
    answer:
      'Yes, data analytics is one of our core offerings. We design interactive Power BI dashboards, build data models, create ETL pipelines, and implement self-service analytics environments. We help you turn raw data from any source into clear, actionable insights for decision-making.',
    category: 'Services',
  },
  {
    id: 'svc-4',
    question: 'What does your cloud transformation service include?',
    answer:
      'Our cloud transformation services cover the entire journey: cloud readiness assessment, migration planning, Azure and Microsoft 365 deployment, security hardening, and ongoing cost optimization. We handle everything from simple email migrations to full infrastructure re-architecture.',
    category: 'Services',
  },
  {
    id: 'svc-5',
    question: 'Do you provide training for our internal teams?',
    answer:
      'Yes, our Professional Development practice offers hands-on, role-based training on Power Platform, Azure, Power BI, and Microsoft 365. We provide instructor-led workshops, self-paced modules, and certification preparation — all customized using your organization\'s own tools and data.',
    category: 'Services',
  },
  // Pricing
  {
    id: 'price-1',
    question: 'How much do your services cost?',
    answer:
      'Our pricing depends on the scope and complexity of your project. We offer three engagement tiers — Starter (from $2,500/month), Growth (from $5,000/month), and Enterprise (custom pricing). Contact us for a free consultation and a tailored quote based on your specific requirements.',
    category: 'Pricing',
  },
  {
    id: 'price-2',
    question: 'Do you offer fixed-price projects or only retainers?',
    answer:
      'We offer both models. For well-defined projects with clear scope, we provide fixed-price engagements with milestone-based payments. For ongoing advisory, support, or iterative development, we offer monthly retainer plans. We will recommend the best model during our discovery phase.',
    category: 'Pricing',
  },
  {
    id: 'price-3',
    question: 'Is there a free consultation available?',
    answer:
      'Yes, we offer a complimentary 30-minute discovery call where we discuss your challenges, understand your current technology landscape, and provide initial recommendations. There is no obligation — it is simply an opportunity for us to see if we are a good fit for each other.',
    category: 'Pricing',
  },
  {
    id: 'price-4',
    question: 'What is included in the Starter plan?',
    answer:
      'The Starter plan is designed for small businesses and includes up to 40 hours of development per month, one dedicated consultant, bi-weekly progress updates, Power Platform development, and email support. It is ideal for companies starting their automation or analytics journey.',
    category: 'Pricing',
  },
  // Technical
  {
    id: 'tech-1',
    question: 'What technologies do you work with?',
    answer:
      'Our core expertise is in the Microsoft ecosystem: Power Platform (Power Apps, Power Automate, Power BI, Power Pages), Azure (App Services, Functions, Synapse, Data Factory, AI Services), Microsoft 365 (SharePoint, Teams), and Dataverse. We also work with DocuSign, custom APIs, and various third-party integrations.',
    category: 'Technical',
  },
  {
    id: 'tech-2',
    question: 'Can you integrate with our existing systems?',
    answer:
      'Yes, integration is a core strength. We connect Microsoft solutions with ERP systems (SAP, Oracle), CRM platforms (Salesforce, Dynamics 365), HRIS systems, payment gateways, and legacy databases. We use custom connectors, APIs, and middleware to ensure seamless data flow across your tech stack.',
    category: 'Technical',
  },
  {
    id: 'tech-3',
    question: 'How do you ensure data security?',
    answer:
      'We follow security best practices at every level: encryption at rest and in transit, role-based access control, row-level security in Power BI, Conditional Access policies in Azure AD, and compliance with frameworks like SOC 2, ISO 27001, and GDPR. All solutions are deployed within your own Microsoft tenant for full data sovereignty.',
    category: 'Technical',
  },
  {
    id: 'tech-4',
    question: 'Do you support low-code and pro-code development?',
    answer:
      'Yes, we take a pragmatic approach. We use low-code tools (Power Apps, Power Automate) for rapid development and citizen developer enablement, and pro-code solutions (Azure Functions, .NET, TypeScript) when performance, complexity, or scalability requirements demand it. Often, the best solution combines both.',
    category: 'Technical',
  },
  // Support
  {
    id: 'sup-1',
    question: 'What kind of post-deployment support do you offer?',
    answer:
      'We offer tiered support plans including bug fixes, performance monitoring, feature enhancements, and user support. Our standard support includes response within 4 business hours for critical issues, weekly health checks, and a dedicated support channel via Microsoft Teams or email.',
    category: 'Support',
  },
  {
    id: 'sup-2',
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary by scope. A simple Power App or dashboard can be delivered in 2-4 weeks. A comprehensive automation solution typically takes 6-12 weeks. Enterprise-wide transformations may span 3-6 months. We provide detailed timelines during the proposal phase and work in agile sprints to deliver value incrementally.',
    category: 'Support',
  },
  {
    id: 'sup-3',
    question: 'Do you provide documentation and knowledge transfer?',
    answer:
      'Yes, every engagement includes comprehensive documentation — solution architecture documents, user guides, admin guides, and training materials. We also conduct knowledge transfer sessions with your team to ensure they can manage and extend the solution independently after handover.',
    category: 'Support',
  },
];
