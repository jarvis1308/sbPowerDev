import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sbpowerdev.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/why-us',
    '/our-capabilities',
    '/founder',
    '/partners',
    '/careers',
    '/contact',
    '/faq',
    '/pricing',
    '/how-we-work',
    '/blog',
    '/events',
    '/privacy-policy',
    '/solutions',
    '/industries',
    '/success-stories',
    '/tools/roi-calculator',
  ];

  const solutions = [
    'business-process-automation',
    'data-analytics',
    'cloud-transformation',
    'technology-consulting',
    'professional-development',
  ];

  const industries = [
    'food-beverages',
    'fintech',
    'education',
    'healthcare',
    'licensing',
  ];

  const stories = [
    'job-hazard-assessment',
    'digital-risk-management-solution',
    'performance-management-system',
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...solutions.map((slug) => ({
      url: `${BASE_URL}/solutions/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...industries.map((slug) => ({
      url: `${BASE_URL}/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...stories.map((slug) => ({
      url: `${BASE_URL}/success-stories/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
