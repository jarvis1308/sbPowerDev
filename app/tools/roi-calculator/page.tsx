import type { Metadata } from 'next';
import ROICalculatorContent from './ROICalculatorContent';

export const metadata: Metadata = {
  title: 'ROI Calculator',
  description:
    'Calculate your projected return on investment from business process automation. See potential savings, efficiency gains, and payback period.',
};

export default function ROICalculatorPage() {
  return <ROICalculatorContent />;
}
