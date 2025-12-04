import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { getServiceBySlug } from '@/data/services';
import HeroSection from '@/components/sections/HeroSection';
import TrustBadgesSection from '@/components/sections/TrustBadgesSection';
import DamageAssessmentGuide from '@/components/sections/DamageAssessmentGuide';
import PriceExamplesShowcase from '@/components/sections/PriceExamplesShowcase';
import VehicleTypesAccepted from '@/components/sections/VehicleTypesAccepted';
import ServiceScenariosGrid from '@/components/sections/ServiceScenariosGrid';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FourStepsProcess from '@/components/sections/FourStepsProcess';
import PaymentMethodsShowcase from '@/components/sections/PaymentMethodsShowcase';
import TestimonialsEnhanced from '@/components/sections/TestimonialsEnhanced';
import GuaranteePromises from '@/components/sections/GuaranteePromises';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTASection from '@/components/sections/CTASection';
import { ctaSections } from '@/data/cta';

const service = getServiceBySlug('hasarli-arac-alim');

export const metadata: Metadata = {
  title: service?.metaTitle || 'Hasarlı Araç Alımı',
  description: service?.metaDescription || '',
  keywords: service?.keywords || [],
};

export default function HasarliAracPage() {
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Header />
      <main>
        {/* 1. Enhanced Hero with Integrated Form */}
        <HeroSection
          badge={service.hero.badge}
          title={
            <>
              {service.hero.title} <span className="text-accent">{service.hero.titleHighlight}</span>
            </>
          }
          subtitle={service.hero.subtitle}
        />

        {/* 2. Trust Signals - Builds Immediate Credibility */}
        <TrustBadgesSection />

        {/* 3. SERVICE-SPECIFIC: What Damage Types We Accept */}
        <DamageAssessmentGuide serviceType="hasarli" />

        {/* 4. SERVICE-SPECIFIC: Real Price Examples */}
        <PriceExamplesShowcase serviceType="hasarli" />

        {/* 5. Vehicle Types Accepted */}
        <VehicleTypesAccepted serviceType="hasarli" />

        {/* 6. SERVICE-SPECIFIC: Common Customer Scenarios */}
        <ServiceScenariosGrid serviceType="hasarli" />

        {/* 7. Why Choose Us - Benefits */}
        <WhyChooseUs
          title="Neden Bizi Seçmelisiniz?"
          description="Hasarlı aracınızı satarken size sunduğumuz ayrıcalıklar."
          features={service.features.map(f => ({
            icon: f.icon,
            title: f.title,
            description: f.description,
            color: 'text-primary-600',
            bg: 'bg-primary-50',
            border: 'border-l-primary-500'
          }))}
        />

        {/* 8. Process Visualization */}
        <FourStepsProcess />

        {/* 9. Payment Methods & Options */}
        <PaymentMethodsShowcase />

        {/* 10. Social Proof with Photos & Ratings */}
        <TestimonialsEnhanced />

        {/* 11. Our Guarantees - Reduces Objections */}
        <GuaranteePromises />

        {/* 12. FAQ for This Service */}
        <FAQAccordion
          faqs={service.faqs}
          title="Hasarlı Araç Alımı Hakkında SSS"
          subtitle="En çok merak edilen sorular ve cevapları"
        />

        {/* 13. Final Strong CTA */}
        <CTASection data={ctaSections[0]} />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
