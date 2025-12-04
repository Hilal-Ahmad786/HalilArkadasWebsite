import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import { FaFileContract } from 'react-icons/fa';

export const metadata = {
    title: 'Kullanım Koşulları',
    description: 'Premium Auto Alım web sitesi Kullanım Koşulları ve yasal uyarılar.',
};

export default function TermsOfUsePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection
                    badge={
                        <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center justify-center">
                            <FaFileContract className="text-accent-400" /> YASAL UYARI
                        </span>
                    }
                    title={
                        <>
                            Kullanım <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">Koşulları</span>
                        </>
                    }
                    subtitle="Web sitemizi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Lütfen dikkatlice okuyunuz."
                />

                <section className="py-20 bg-white">
                    <div className="container max-w-4xl">
                        <div className="prose prose-lg max-w-none text-secondary-600">
                            <h3>1. Giriş</h3>
                            <p>
                                Bu web sitesine erişerek ve kullanarak, aşağıda belirtilen kullanım koşullarını kabul etmiş sayılırsınız. Premium Auto Alım, bu koşulları dilediği zaman değiştirme hakkını saklı tutar.
                            </p>

                            <h3>2. Hizmet Kullanımı</h3>
                            <p>
                                Web sitemiz üzerinden sunulan hizmetler (araç değerleme, teklif alma vb.) sadece yasal amaçlarla kullanılabilir. Sitenin güvenliğini tehdit edecek, işleyişini bozacak veya diğer kullanıcılara zarar verecek faaliyetlerde bulunmak yasaktır.
                            </p>

                            <h3>3. Fikri Mülkiyet Hakları</h3>
                            <p>
                                Bu web sitesinde yer alan tüm içerikler (metinler, görseller, logolar, tasarımlar), Premium Auto Alım'a aittir ve telif hakları kanunları ile korunmaktadır. İzinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.
                            </p>

                            <h3>4. Sorumluluk Reddi</h3>
                            <p>
                                Premium Auto Alım, web sitesindeki bilgilerin doğruluğu ve güncelliği konusunda azami özeni gösterir ancak garanti vermez. Sitedeki bilgilerde oluşabilecek hatalardan veya eksikliklerden dolayı sorumlu tutulamaz. Araç değerleme teklifleri, verilen bilgilere dayanarak hazırlanan tahmini fiyatlardır ve bağlayıcılığı, aracın fiziksel ekspertizi sonrasında kesinleşir.
                            </p>

                            <h3>5. Üçüncü Taraf Bağlantıları</h3>
                            <p>
                                Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriği ve gizlilik politikaları üzerinde kontrolümüz yoktur ve bu sitelerin kullanımından doğabilecek zararlardan sorumlu değiliz.
                            </p>

                            <h3>6. Değişiklikler</h3>
                            <p>
                                Premium Auto Alım, web sitesinin içeriğini, hizmetlerini ve kullanım koşullarını önceden bildirmeksizin değiştirme hakkını saklı tutar.
                            </p>

                            <h3>7. Uygulanacak Hukuk</h3>
                            <p>
                                Bu kullanım koşullarından doğacak uyuşmazlıklarda Türk Hukuku uygulanır ve yetkili mahkemeler İstanbul Mahkemeleridir.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
