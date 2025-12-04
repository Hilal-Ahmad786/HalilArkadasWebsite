import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProcessSteps from '@/components/sections/ProcessSteps';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import { ctaSections } from '@/data/cta';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesGrid />
        <ProcessSteps />
        <CTASection data={ctaSections[0]} />
        <TestimonialsSection />
        <CTASection data={ctaSections[1]} />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
