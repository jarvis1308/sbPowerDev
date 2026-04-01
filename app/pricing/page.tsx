import type { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for every stage of your business. Choose from Starter, Growth, or Enterprise plans with no hidden fees.',
};

export default function PricingPage() {
  return <PricingContent />;
}
