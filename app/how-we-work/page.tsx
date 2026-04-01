import type { Metadata } from 'next';
import HowWeWorkContent from './HowWeWorkContent';

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'Our proven six-step process — from discovery to ongoing support. Transparent, agile, and designed to deliver value quickly.',
};

export default function HowWeWorkPage() {
  return <HowWeWorkContent />;
}
