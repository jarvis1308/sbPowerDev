export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  popular: boolean;
  features: PricingFeature[];
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For small businesses starting their automation and analytics journey.',
    price: 'From $2,500/mo',
    popular: false,
    features: [
      { text: 'Up to 40 hours of development per month', included: true },
      { text: 'One dedicated consultant', included: true },
      { text: 'Bi-weekly progress updates and demos', included: true },
      { text: 'Power Platform development (Apps, Automate, BI)', included: true },
      { text: 'Email support with 8-hour response time', included: true },
    ],
    cta: 'Get Started',
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'For growing companies that need deeper expertise and faster delivery.',
    price: 'From $5,000/mo',
    popular: true,
    features: [
      { text: 'Up to 80 hours of development per month', included: true },
      { text: 'Two dedicated consultants (developer + analyst)', included: true },
      { text: 'Weekly progress updates and sprint demos', included: true },
      { text: 'Power Platform + Azure development', included: true },
      { text: 'Priority email and Teams support (4-hour response)', included: true },
      { text: 'Monthly strategy review with a solutions architect', included: true },
      { text: 'Integration with up to 3 external systems', included: true },
      { text: 'Basic training and knowledge transfer sessions', included: true },
    ],
    cta: 'Start Growing',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For organizations with complex requirements needing a full-service technology partner.',
    price: 'Custom pricing',
    popular: false,
    features: [
      { text: 'Unlimited development hours (dedicated team)', included: true },
      { text: 'Full project team (PM, architect, developers, QA)', included: true },
      { text: 'Daily standups and real-time project visibility', included: true },
      { text: 'Full Microsoft stack (Power Platform, Azure, M365, Dynamics)', included: true },
      { text: '24/7 critical issue support with 1-hour SLA', included: true },
      { text: 'Dedicated solutions architect and account manager', included: true },
      { text: 'Unlimited system integrations', included: true },
      { text: 'Comprehensive training programs and certification support', included: true },
      { text: 'Custom SLA and governance framework', included: true },
      { text: 'On-site workshops and quarterly business reviews', included: true },
    ],
    cta: 'Contact Sales',
  },
];
