import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import TestimonialsEnhanced from '@/components/sections/TestimonialsEnhanced';
import GuaranteePromises from '@/components/sections/GuaranteePromises';
import { FaBuilding } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Hakkımızda - Kurumsal | Premium Auto',
    description: 'Premium Auto olarak 15 yılı aşkın tecrübemizle hasarlı, kazalı ve pert araç alımında Türkiye\'nin lider firmasıyız.',
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection
                    badge={
                        <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center justify-center">
                            <FaBuilding className="text-accent-400" /> KURUMSAL
                        </span>
                    }
                    title={
                        <>
                            Türkiye'nin En Güvenilir
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">
                                Araç Alım Merkezi
                            </span>
                        </>
                    }
                    subtitle="15 yıllık tecrübe, 5000+ mutlu müşteri ve profesyonel ekibimizle hizmetinizdeyiz."
                />
                <StatsSection />
                <WhyChooseUs
                    title="NEDEN BİZ?"
                    description="BİZİ TERCİH ETMENİZ İÇİN SEBEPLER"
                />
                <GuaranteePromises />
                <TestimonialsEnhanced />
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
