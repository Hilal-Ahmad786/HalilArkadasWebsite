import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { siteConfig } from '@/data/site';
import { FaBolt, FaMoneyBillWave, FaTruck, FaClipboardList, FaCreditCard, FaTrophy, FaPhone, FaWhatsapp } from 'react-icons/fa';

const defaultReasons = [
  {
    id: 1,
    icon: <FaBolt />,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    borderColor: 'border-l-yellow-500',
    title: 'Anında Değerleme',
    description: '30 dakika içinde fiyat teklifi alın',
  },
  {
    id: 2,
    icon: <FaMoneyBillWave />,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    borderColor: 'border-l-green-500',
    title: 'En Yüksek Fiyat',
    description: 'Piyasanın en iyi teklifini garantiliyoruz',
  },
  {
    id: 3,
    icon: <FaTruck />,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-l-blue-500',
    title: 'Ücretsiz Çekici',
    description: 'Aracınızı yerinizden alırız',
  },
  {
    id: 4,
    icon: <FaClipboardList />,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-l-purple-500',
    title: 'Tüm Evraklar Bizden',
    description: 'Noter ve tescil işlemleri dahil',
  },
  {
    id: 5,
    icon: <FaCreditCard />,
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    borderColor: 'border-l-pink-500',
    title: 'Anında Ödeme',
    description: 'Nakit veya EFT ile hızlı ödeme',
  },
  {
    id: 6,
    icon: <FaTrophy />,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-l-orange-500',
    title: '20+ Yıl Tecrübe',
    description: '100.000+ mutlu müşteri',
  },
];

interface WhyChooseUsProps {
  features?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    color?: string;
    bg?: string;
    border?: string;
  }>;
  title?: string;
  description?: string;
}

export default function WhyChooseUs({
  features,
  title = "NEDEN HASAR PARK?",
  description = "BİZİ TERCİH ETMELİSİNİZ"
}: WhyChooseUsProps) {
  // If features prop is provided, map it to the structure used in render
  // Otherwise use defaultReasons
  const displayFeatures = features ? features.map((f, i) => ({
    id: i,
    icon: f.icon,
    iconBg: f.bg || 'bg-primary-50',
    iconColor: f.color || 'text-primary-600',
    borderColor: f.border || 'border-l-primary-500',
    title: f.title,
    description: f.description
  })) : defaultReasons;

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-block mb-4">
            <span className="badge" style={{ backgroundColor: '#9C27B0', color: 'white', border: 'none' }}>
              {title}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-2">
            6 NEDEN
          </h2>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {description}
            </span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayFeatures.map((reason) => (
            <div
              key={reason.id}
              className={`bg-white border-l-4 ${reason.borderColor} rounded-xl shadow-md hover:shadow-xl p-6 transition-all hover:-translate-y-1`}
            >
              <div className={`w-16 h-16 ${reason.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                <span className={`text-3xl ${reason.iconColor}`}>{reason.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-secondary-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-br from-primary-800 via-secondary-800 to-secondary-900 rounded-3xl p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="badge bg-accent/30 text-white border border-white/30">
                💎 EN YÜKSEK FİYAT
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">
              HEMEN SATIN - ANINDA ÖDEME
            </h3>

            <p className="text-xl text-white/90 mb-8">
              Aracınızı en iyi fiyata satmak için şimdi arayın
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={formatPhoneHref(siteConfig.phone)}
                className="btn btn-lg gap-2 bg-blue-600 hover:bg-blue-700 text-white border-0 font-bold"
              >
                <FaPhone /> HEMEN ARA
              </a>
              <a
                href={formatWhatsAppHref(siteConfig.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg bg-[#25D366] hover:bg-[#20bd5a] text-white border-0 font-bold gap-2"
              >
                <FaWhatsapp className="text-xl" /> WHATSAPP
              </a>
            </div>

            <div className="mt-6 text-lg font-bold flex items-center justify-center gap-2">
              <FaPhone /> {siteConfig.phoneDisplay}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
