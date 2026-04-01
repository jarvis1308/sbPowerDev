export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: '5 Signs Your Business Is Ready for Process Automation',
    slug: '5-signs-ready-for-process-automation',
    excerpt:
      'Still relying on spreadsheets and email chains to manage approvals? Here are five clear indicators that your business is ready to embrace automation — and the ROI you can expect.',
    category: 'Automation',
    date: '2026-03-15',
    readTime: '6 min read',
    author: 'Shashank Beeraka',
  },
  {
    id: 'blog-2',
    title: 'Power BI vs Tableau: Which Is Right for Your Organization?',
    slug: 'power-bi-vs-tableau-comparison',
    excerpt:
      'Both are industry-leading BI tools, but they serve different needs. We break down cost, integration, ease of use, and scalability to help you make the right choice.',
    category: 'Data Analytics',
    date: '2026-02-28',
    readTime: '8 min read',
    author: 'Shashank Beeraka',
  },
  {
    id: 'blog-3',
    title: 'How We Built a Safety Compliance App in 4 Weeks with Power Apps',
    slug: 'safety-compliance-app-power-apps-case-study',
    excerpt:
      'A behind-the-scenes look at how we replaced a paper-based Job Hazard Assessment process with a mobile-first Power Apps solution — from discovery to deployment.',
    category: 'Case Study',
    date: '2026-02-10',
    readTime: '10 min read',
    author: 'Shashank Beeraka',
  },
  {
    id: 'blog-4',
    title: 'Azure vs AWS: A Practical Guide for Mid-Market Companies',
    slug: 'azure-vs-aws-mid-market-guide',
    excerpt:
      'Choosing a cloud provider is a strategic decision. We compare Azure and AWS across pricing, enterprise integration, security, and support — specifically for mid-market businesses.',
    category: 'Cloud',
    date: '2026-01-20',
    readTime: '7 min read',
    author: 'Shashank Beeraka',
  },
  {
    id: 'blog-5',
    title: 'The Rise of Citizen Developers: Empowering Business Users with Low-Code',
    slug: 'citizen-developers-low-code-revolution',
    excerpt:
      'Low-code platforms like Power Apps are enabling non-technical users to build their own business applications. Here is how to foster a citizen developer culture without compromising governance.',
    category: 'Low Code',
    date: '2025-12-18',
    readTime: '5 min read',
    author: 'Shashank Beeraka',
  },
  {
    id: 'blog-6',
    title: 'Understanding Microsoft Copilot Studio: Build AI Assistants for Your Business',
    slug: 'microsoft-copilot-studio-guide',
    excerpt:
      'Copilot Studio lets you create custom AI assistants that understand your business data and processes. We explore what it can do, how to get started, and real-world use cases.',
    category: 'AI & Innovation',
    date: '2025-11-25',
    readTime: '9 min read',
    author: 'Shashank Beeraka',
  },
];
