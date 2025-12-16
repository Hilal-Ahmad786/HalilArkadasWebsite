import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { siteConfig } from '@/data/site';
import { FaPhone, FaCamera, FaMoneyBillWave, FaCheck, FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const steps = [
  {
    number: 1,
    icon: <FaPhone />,
    iconBg: 'bg-orange-500',
    title: '1. Bize Ulaşın',
    subtitle: '7/24 çağrı merkezi • WhatsApp fotoğraf gönder',
    description: 'Telefon veya WhatsApp ile ulaşın, aracınızı anlatın. WhatsApp üzerinden araç fotoğraflarını paylaşabilirsiniz.',
    badge: 'HIZLI',
  },
  {
    number: 2,
    icon: <FaCamera />,
    iconBg: 'bg-orange-500',
    title: '2. Ücretsiz Ekspertiz',
    subtitle: 'Yerinde inceleme • perthsasar raporu hazırız',
    description: 'WhatsApp üzerinden görev, fotoğrafları paylaşın. Ekibimiz aracınızı getirir inceleme yapar; detaylı ekspertiz raporu sunar.',
    badge: 'ÜCRETSİZ',
  },
  {
    number: 3,
    icon: <FaMoneyBillWave />,
    iconBg: 'bg-orange-500',
    title: '3. Teklif Alın',
    subtitle: 'Piyasa üstü en iyi; onaysüleç başlar',
    description: 'Piyasa üstü en yüksek fiyat teklifini alırsınız. 30 dakika içinde en iyi onay sülecinizi başlatırız.',
    badge: 'ANINDA',
  },
  {
    number: 4,
    icon: <FaCheck />,
    iconBg: 'bg-green-500',
    title: '4. Noter Satışı & Nakit',
    subtitle: 'Noter hazırlıyoruz devir • anında nakitEFT',
    description: 'Noter ve tescil işlemlerini dahil her şey bize ait. Anında değerleme yapılır, noter işlemimiz ile nakit EFT ödeme olun.',
    badge: 'HEMEN SATIN',
  },
];

interface ProcessProps {
  steps?: Array<{
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    badge: string;
    color: string;
  }>;
  title?: React.ReactNode;
  description?: string;
}

export default function FourStepsProcess({
  steps: propSteps,
  title = "4 ADIMDA",
  description = "NAKDE ÇEVİRİN"
}: ProcessProps) {
  // Map propSteps if provided, otherwise use default steps
  // Note: The prop structure might differ slightly, so we adapt if needed
  const displaySteps = propSteps ? propSteps.map((s, i) => ({
    number: i + 1,
    icon: s.icon, // Assuming icon is already ReactNode or we might need to map string to icon
    iconBg: s.color === 'green' ? 'bg-green-500' : 'bg-orange-500', // Simple mapping
    title: s.title,
    subtitle: s.subtitle,
    description: s.description,
    badge: s.badge
  })) : steps;

  return (
    <section className="section bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="badge" style={{ backgroundColor: '#CDDC39', color: '#000', border: 'none', fontWeight: 'bold' }}>
              HABIL ÇALIŞBİRİ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-3">
            {title}
          </h2>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span style={{ color: '#CDDC39' }}>{description}</span>
          </h2>
          <p className="text-xl text-white/80">
            Basit, hızlı ve güvenli süleç. Aracınızı 24 saat içinde nakde çeviriyoruz.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displaySteps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${step.number === 4 ? 'bg-green-500' : 'bg-orange-500'} text-white`}>
                  {step.badge}
                </span>
              </div>

              {/* Number Circle */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${step.iconBg} rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl mb-4 group-hover:scale-110 transition-transform`}>
                  {step.number}
                </div>
                <div className="text-5xl absolute -bottom-2 right-0 text-white/20">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-black mb-2" style={{ color: '#CDDC39' }}>
                {step.title}
              </h3>
              <p className="text-sm text-white/70 mb-3 font-semibold">
                {step.subtitle}
              </p>
              <p className="text-sm text-white/80">
                {step.description}
              </p>

              {/* Arrow Connector (Desktop only) */}
              {step.number < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 translate-x-full z-10">
                  <div className="text-4xl" style={{ color: '#CDDC39' }}>
                    <FaArrowRight />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Bar */}
        <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/10">
          <h3 className="text-2xl font-black text-center mb-6" style={{ color: '#CDDC39' }}>
            ORTALAMA SÜRE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-black mb-2" style={{ color: '#CDDC39' }}>5 DK</div>
              <div className="text-xs md:text-sm text-white/70">İlk Görüşme</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-black mb-2" style={{ color: '#CDDC39' }}>30 DK</div>
              <div className="text-xs md:text-sm text-white/70">Değerlendirme</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-black mb-2" style={{ color: '#CDDC39' }}>2 SAAT</div>
              <div className="text-xs md:text-sm text-white/70">Noter İşlemi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-black mb-2" style={{ color: '#CDDC39' }}>ANINDA</div>
              <div className="text-xs md:text-sm text-white/70">Ödeme</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-2xl font-bold mb-6">
            Hemen başlayın, 24 saat içinde paranız hesabınızda!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={formatPhoneHref(siteConfig.phone)}
              className="btn btn-lg font-bold gap-2"
              style={{ backgroundColor: '#CDDC39', color: '#000', border: 'none' }}
            >
              <FaPhone /> HEMEN BAŞLA →
            </a>
            <a
              href={formatWhatsAppHref(siteConfig.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg bg-success hover:bg-success/90 text-white border-0 font-bold gap-2"
            >
              <FaWhatsapp className="text-xl" /> WHATSAPP
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
            <FaPhone />
            <span>{siteConfig.phoneDisplay} • 7/24 Hizmet</span>
          </div>
        </div>
      </div>
    </section>
  );
}
