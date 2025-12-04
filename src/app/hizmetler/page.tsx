import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import ServicesGridColored from '@/components/sections/ServicesGridColored';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import VehicleTypesAccepted from '@/components/sections/VehicleTypesAccepted';
import { FaTools } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Hizmetlerimiz - Neler Yapıyoruz? | Premium Auto',
    description: 'Kazalı, hasarlı, pert ve hurda araç alımı, ücretsiz çekici, yerinde ekspertiz ve anında nakit ödeme hizmetlerimiz.',
};

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection
                    badge={
                        <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center justify-center">
                            <FaTools className="text-accent-400" /> HİZMETLERİMİZ
                        </span>
                    }
                    title={
                        <>
                            Profesyonel Araç
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">
                                Alım Çözümleri
                            </span>
                        </>
                    }
                    subtitle="Aracınızın durumu ne olursa olsun, size özel çözümler sunuyoruz. Hızlı, güvenli ve değerinde alım."
                />
                <ServicesGridColored />
                <ProcessTimeline />
                <VehicleTypesAccepted serviceType="kazali" />
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
