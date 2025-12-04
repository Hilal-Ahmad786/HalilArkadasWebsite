import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { getCityBySlug, getAllCities } from '@/data/cities';
import HeroSection from '@/components/sections/HeroSection';
import TrustBadgesSection from '@/components/sections/TrustBadgesSection';
import LocalStatsShowcase from '@/components/sections/LocalStatsShowcase';
import DistrictBadges from '@/components/sections/DistrictBadges';
import ServicesGridColored from '@/components/sections/ServicesGridColored';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import UrgencyBanner from '@/components/sections/UrgencyBanner';
import TestimonialsEnhanced from '@/components/sections/TestimonialsEnhanced';
import GuaranteePromises from '@/components/sections/GuaranteePromises';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTASection from '@/components/sections/CTASection';
import { ctaSections } from '@/data/cta';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export async function generateStaticParams() {
  const cities = getAllCities();
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.city);

  if (!city) {
    return {
      title: 'Şehir Bulunamadı',
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);

  if (!city) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* 1. Hero Section with Form */}
        <HeroSection
          badge={city.hero.badge}
          title={
            <>
              {city.hero.title}
              <br />
              <span className="text-accent">{city.hero.titleHighlight}</span>
            </>
          }
          subtitle={city.hero.subtitle}
        />

        {/* 2. Trust Badges */}
        <TrustBadgesSection />

        {/* 3. CITY-SPECIFIC: Local Statistics */}
        {/* Shows vehicles purchased, money paid, response time in THIS CITY */}
        <LocalStatsShowcase
          citySlug={params.city}
          cityName={city.name}
        />

        {/* 4. CITY-SPECIFIC: District Coverage Map */}
        {/* Visual representation of which districts we serve */}
        <DistrictBadges citySlug={params.city} />

        {/* 5. Services We Offer in This City */}
        <ServicesGridColored />

        {/* 6. CITY-SPECIFIC: Why Choose Us in This City */}
        <WhyChooseUs
          title={`${city.name}'da Neden Bizi Seçmelisiniz?`}
          description={`${city.name} genelinde sunduğumuz özel avantajlar ve hizmetler.`}
          features={city.features}
        />

        {/* 7. Create Urgency */}
        <UrgencyBanner />

        {/* 8. CITY-SPECIFIC: Local Testimonials */}
        {/* Filter testimonials to show only from this city */}
        <TestimonialsEnhanced />

        {/* 9. Our Guarantees */}
        <GuaranteePromises />

        {/* 10. CITY-SPECIFIC: FAQ for This City */}
        <FAQAccordion
          faqs={city.faqs}
          title={`${city.name} Hakkında Sıkça Sorulan Sorular`}
          subtitle={`${city.name}'daki hizmetlerimiz hakkında merak ettikleriniz`}
        />

        {/* 11. Final CTA with City Name */}
        <section className="section bg-gradient-to-br from-primary-800 via-secondary-800 to-secondary-900 text-white">
          <div className="container max-w-3xl text-center">
            <h2 className="text-4xl font-black mb-4 text-white">
              {city.name}'da Hemen Satın!
            </h2>
            <p className="text-xl mb-8">
              {city.cityInfo.responseTime} içinde adresinizde, anında nakit ödeme
            </p>


            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                className="btn btn-lg bg-blue-600 hover:bg-blue-700 text-white border-0 font-bold flex items-center justify-center gap-2"
              >
                <FaPhoneAlt /> Hemen Ara
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 font-bold flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" /> WhatsApp ile Yaz
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
