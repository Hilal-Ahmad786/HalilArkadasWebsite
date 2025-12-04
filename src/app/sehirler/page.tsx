import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import LocalStatsShowcase from '@/components/sections/LocalStatsShowcase';
import { getAllCities } from '@/data/cities';
import { FaMapMarkedAlt, FaArrowRight } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'Hizmet Bölgelerimiz - Şehirler | Premium Auto',
    description: 'Türkiye\'nin 81 ilinde hizmet veriyoruz. Size en yakın ekibimizle 30 dakikada yanınızdayız.',
};

export default function CitiesPage() {
    const cities = getAllCities();

    return (
        <>
            <Header />
            <main>
                <HeroSection
                    badge={
                        <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center justify-center">
                            <FaMapMarkedAlt className="text-accent-400" /> HİZMET AĞIMIZ
                        </span>
                    }
                    title={
                        <>
                            Türkiye'nin Her Yerinde
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">
                                Yanınızdayız
                            </span>
                        </>
                    }
                    subtitle="Geniş hizmet ağımızla nerede olursanız olun, tek telefonla kapınızdayız."
                />

                <LocalStatsShowcase citySlug="istanbul" cityName="Türkiye Geneli" />

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hizmet Verdiğimiz Şehirler</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Aşağıdaki şehirlerden birini seçerek detaylı bilgi alabilir ve hemen teklif isteyebilirsiniz.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cities.map((city) => (
                                <Link
                                    key={city.id}
                                    href={`/sehirler/${city.slug}`}
                                    className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-primary"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                            {city.name}
                                        </h3>
                                        <FaArrowRight className="text-gray-400 group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {city.cityInfo.responseTime} içinde hizmet
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
