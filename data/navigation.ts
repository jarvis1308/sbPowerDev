import {
  Cpu,
  BarChart3,
  Cloud,
  BookOpen,
  Briefcase,
  Users,
  Award,
  Building2,
  Phone,
  HelpCircle,
  Newspaper,
  Calendar,
  DollarSign,
  Workflow,
  Calculator,
  Shield,
  GraduationCap,
  Heart,
  FileCheck,
  Utensils,
  Landmark,
  ChevronRight,
  Globe,
  Handshake,
} from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
  icon?: any;
  description?: string;
}

export interface NavDropdown {
  label: string;
  children: NavLink[];
}

export interface NavMegaMenu {
  label: string;
  megaMenu: true;
  sections: {
    title: string;
    links: NavLink[];
  }[];
}

export type NavItem = NavLink | NavDropdown | NavMegaMenu;

export const mainNav: NavItem[] = [
  {
    label: 'Solutions',
    children: [
      {
        label: 'Business Process Automation',
        href: '/solutions/business-process-automation',
        icon: Cpu,
        description: 'Streamline workflows with Power Automate & custom solutions',
      },
      {
        label: 'Data Analytics',
        href: '/solutions/data-analytics',
        icon: BarChart3,
        description: 'Transform data into actionable insights with Power BI',
      },
      {
        label: 'Cloud Transformation',
        href: '/solutions/cloud-transformation',
        icon: Cloud,
        description: 'Migrate & modernize with Azure & Microsoft 365',
      },
      {
        label: 'Technology Consulting',
        href: '/solutions/technology-consulting',
        icon: Briefcase,
        description: 'Strategic IT advisory for digital transformation',
      },
      {
        label: 'Professional Development',
        href: '/solutions/professional-development',
        icon: BookOpen,
        description: 'Upskill your team with expert-led training programs',
      },
    ],
  },
  {
    label: 'Industries',
    children: [
      {
        label: 'Food & Beverages',
        href: '/industries/food-beverages',
        icon: Utensils,
        description: 'Supply chain & compliance automation',
      },
      {
        label: 'FinTech',
        href: '/industries/fintech',
        icon: Landmark,
        description: 'Regulatory compliance & risk management',
      },
      {
        label: 'Education',
        href: '/industries/education',
        icon: GraduationCap,
        description: 'Digital learning & administration platforms',
      },
      {
        label: 'Healthcare',
        href: '/industries/healthcare',
        icon: Heart,
        description: 'Patient management & data analytics',
      },
      {
        label: 'Licensing & Compliance',
        href: '/industries/licensing',
        icon: FileCheck,
        description: 'Automated licensing workflows',
      },
    ],
  },
  {
    label: 'Company',
    megaMenu: true,
    sections: [
      {
        title: 'About Us',
        links: [
          {
            label: 'Our Story',
            href: '/about',
            icon: Building2,
            description: 'Our journey from startup to global partner',
          },
          {
            label: 'Why Choose Us',
            href: '/why-us',
            icon: Award,
            description: 'What sets sbPowerDev apart',
          },
          {
            label: 'Our Capabilities',
            href: '/our-capabilities',
            icon: Cpu,
            description: 'Full-stack expertise & certifications',
          },
          {
            label: 'Meet the Founder',
            href: '/founder',
            icon: Users,
            description: 'The vision behind sbPowerDev',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            label: 'Success Stories',
            href: '/success-stories',
            icon: Award,
            description: 'Real results for real businesses',
          },
          {
            label: 'Blog',
            href: '/blog',
            icon: Newspaper,
            description: 'Insights on tech & business',
          },
          {
            label: 'Events',
            href: '/events',
            icon: Calendar,
            description: 'Webinars, workshops & more',
          },
          {
            label: 'FAQ',
            href: '/faq',
            icon: HelpCircle,
            description: 'Common questions answered',
          },
        ],
      },
      {
        title: 'Connect',
        links: [
          {
            label: 'Partners',
            href: '/partners',
            icon: Handshake,
            description: 'Microsoft, DocuSign & more',
          },
          {
            label: 'Careers',
            href: '/careers',
            icon: Briefcase,
            description: 'Join our growing team',
          },
          {
            label: 'Contact',
            href: '/contact',
            icon: Phone,
            description: 'Get in touch with us',
          },
        ],
      },
    ],
  } as NavMegaMenu,
  { label: 'Pricing', href: '/pricing' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  solutions: [
    { label: 'Business Process Automation', href: '/solutions/business-process-automation' },
    { label: 'Data Analytics', href: '/solutions/data-analytics' },
    { label: 'Cloud Transformation', href: '/solutions/cloud-transformation' },
    { label: 'Technology Consulting', href: '/solutions/technology-consulting' },
    { label: 'Professional Development', href: '/solutions/professional-development' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Why Choose Us', href: '/why-us' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Events', href: '/events' },
    { label: 'FAQ', href: '/faq' },
    { label: 'ROI Calculator', href: '/tools/roi-calculator' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
};
