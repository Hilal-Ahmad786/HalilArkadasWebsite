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
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Hasarlı, Kazalı, Pert ve Hurda Araç Alım Satım | 30 Dakikada Teklif' },
  description: 'Hasarlı, kazalı, pert ve hurda aracınızı Türkiye genelinde satın alıyoruz. Ücretsiz ekspertiz, 30 dakikada teklif ve aynı gün nakit ödeme. Hemen arayın.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section className="bg-white py-6 border-b border-gray-100">
          <div className="container">
            <p className="text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
              Kazalı, pert veya hurda fark etmeksizin; Türkiye&apos;nin her noktasında{' '}
              <a
                href="https://hasarliaracalan.com/"
                target="_blank"
                rel="noopener"
                title="Hasarlı Araç Alan"
                className="font-semibold text-primary-600 hover:text-primary-700 underline"
              >
                hasarlı araç alan
              </a>{' '}
              çözüm ortağımızla birlikte aracınıza dakikalar içinde gerçek piyasa değerini sunuyoruz.
            </p>
          </div>
        </section>
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
