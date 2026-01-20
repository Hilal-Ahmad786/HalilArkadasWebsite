import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import { FaShieldAlt } from 'react-icons/fa';

export const metadata = {
    title: 'Gizlilik Politikası',
    description: 'Premium Auto Alım Gizlilik Politikası ve Kişisel Verilerin Korunması hakkında bilgilendirme.',
};




export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection
                    badge={
                        <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center justify-center">
                            <FaShieldAlt className="text-accent-400" /> GİZLİLİK VE GÜVENLİK
                        </span>
                    }
                    title={
                        <>
                            Gizlilik <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">Politikası</span>
                        </>
                    }
                    subtitle="Kişisel verilerinizin güvenliği bizim için önemlidir. Verilerinizi nasıl topladığımızı ve koruduğumuzu inceleyin."
                />

                <section className="py-20 bg-white">
                    <div className="container max-w-4xl">
                        <div className="prose prose-lg max-w-none text-secondary-600">
                            <h3>1. Veri Sorumlusu</h3>
                            <p>
                                Premium Auto Alım olarak, kişisel verilerinizin güvenliği ve gizliliği konusuna büyük önem vermekteyiz. Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, kişisel verilerinizin toplanma şekli, işlenme amaçları, aktarıldığı kişiler ve hukuki nedenleri hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
                            </p>

                            <h3>2. Toplanan Kişisel Veriler</h3>
                            <p>
                                Web sitemizi ziyaret ettiğinizde veya hizmetlerimizden yararlandığınızda, aşağıdaki kişisel verileriniz toplanabilir:
                            </p>
                            <ul>
                                <li>Kimlik Bilgileri (Ad, Soyad)</li>
                                <li>İletişim Bilgileri (Telefon numarası, E-posta adresi)</li>
                                <li>Araç Bilgileri (Marka, model, hasar durumu vb.)</li>
                                <li>İşlem Güvenliği Bilgileri (IP adresi, tarayıcı bilgileri)</li>
                            </ul>

                            <h3>3. Kişisel Verilerin İşlenme Amaçları</h3>
                            <p>
                                Toplanan kişisel verileriniz, aşağıdaki amaçlarla işlenmektedir:
                            </p>
                            <ul>
                                <li>Araç alım-satım süreçlerinin yürütülmesi ve teklif oluşturulması</li>
                                <li>İletişim faaliyetlerinin yürütülmesi</li>
                                <li>Müşteri memnuniyetinin artırılması</li>
                                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                            </ul>

                            <h3>4. Kişisel Verilerin Aktarılması</h3>
                            <p>
                                Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmamaktadır. Ancak, hizmetin ifası için gerekli olması durumunda (örneğin noter işlemleri, çekici hizmeti), iş ortaklarımızla ve yetkili kamu kurumlarıyla paylaşılabilir.
                            </p>

                            <h3>5. Haklarınız</h3>
                            <p>
                                KVKK'nın 11. maddesi uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul>
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                            </ul>

                            <h3>6. İletişim</h3>
                            <p>
                                Kişisel verilerinizle ilgili her türlü soru ve talebiniz için iletişim sayfamızdaki kanallardan bize ulaşabilirsiniz.
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
