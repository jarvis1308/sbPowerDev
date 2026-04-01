import Hero from '@/components/home/Hero';
import PhilosophySection from '@/components/home/PhilosophySection';
import ClientLogoCarousel from '@/components/home/ClientLogoCarousel';
import ImmersiveSolutions from '@/components/home/ImmersiveSolutions';
import IndustriesSection from '@/components/home/IndustriesSection';
import TechStackTabs from '@/components/home/TechStackTabs';
import CaseStudyPreview from '@/components/home/CaseStudyPreview';
import PartnerCTA from '@/components/shared/PartnerCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PhilosophySection />
      <ClientLogoCarousel />
      <ImmersiveSolutions />
      <IndustriesSection />
      <TechStackTabs />
      <CaseStudyPreview />
      <PartnerCTA />
    </>
  );
}
