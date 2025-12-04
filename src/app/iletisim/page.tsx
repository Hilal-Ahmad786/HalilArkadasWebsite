import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import ContactInfo from '@/components/sections/ContactInfo';
import FAQAccordion from '@/components/sections/FAQAccordion';
import { FaHeadset } from 'react-icons/fa';

export const metadata: Metadata = {
    title: 'İletişim - Bize Ulaşın | Premium Auto',
    description: 'Hasarlı, kazalı, pert ve hurda araçlarınız için 7/24 bizimle iletişime geçebilirsiniz. Anında değerleme ve nakit ödeme.',
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection
                    badge={
                        <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center justify-center">
                            <FaHeadset className="text-accent-400" /> 7/24 İLETİŞİM
                        </span>
                    }
                    title={
                        <>
                            Bize Ulaşın
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">
                                Anında Teklif Alın
                            </span>
                        </>
                    }
                    subtitle="Aracınızın durumu ne olursa olsun, uzman ekibimiz size en iyi fiyatı vermek için hazır."
                />
                <ContactInfo />
                <FAQAccordion
                    title="Sıkça Sorulan Sorular"
                    subtitle="İletişim ve süreçlerimiz hakkında merak ettikleriniz"
                    faqs={[
                        {
                            question: "Hangi saatlerde ulaşabilirim?",
                            answer: "Bize 7 gün 24 saat telefon ve WhatsApp üzerinden ulaşabilirsiniz. Ekiplerimiz sürekli hizmet vermektedir."
                        },
                        {
                            question: "Ekspertiz ücretli mi?",
                            answer: "Hayır, ekspertiz hizmetimiz tamamen ücretsizdir. Aracınızı yerinde inceliyor ve herhangi bir ücret talep etmiyoruz."
                        },
                        {
                            question: "Ödeme ne zaman yapılır?",
                            answer: "Anlaşma sağlandığı anda, noter satışı öncesinde ödemeniz nakit veya banka havalesi ile hesabınıza geçer."
                        },
                        {
                            question: "Hangi illerde hizmet veriyorsunuz?",
                            answer: "Türkiye'nin 81 ilinde hizmet vermekteyiz. Geniş hizmet ağımızla adresinize gelerek aracınızı alıyoruz."
                        }
                    ]}
                />
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
