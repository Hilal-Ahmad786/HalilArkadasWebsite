import Link from 'next/link';
import { getPublishedServices } from '@/data/services';
import { FaCheck, FaPhoneAlt } from 'react-icons/fa';

const serviceColors = {
  'kazali-arac-alim': {
    gradient: 'from-red-500 to-red-600',
    bg: 'bg-red-500',
    text: 'text-red-600',
    border: 'border-red-200',
    hoverBg: 'hover:bg-red-50',
  },
  'hasarli-arac-alim': {
    gradient: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-500',
    text: 'text-purple-600',
    border: 'border-purple-200',
    hoverBg: 'hover:bg-purple-50',
  },
  'pert-arac-alim': {
    gradient: 'from-fuchsia-500 to-fuchsia-600',
    bg: 'bg-fuchsia-500',
    text: 'text-fuchsia-600',
    border: 'border-fuchsia-200',
    hoverBg: 'hover:bg-fuchsia-50',
  },
  'hurda-arac-alim': {
    gradient: 'from-green-500 to-green-600',
    bg: 'bg-green-500',
    text: 'text-green-600',
    border: 'border-green-200',
    hoverBg: 'hover:bg-green-50',
  },
};

export default function ServicesGridColored() {
  const services = getPublishedServices();

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-block mb-4">
            <span className="badge badge-primary">HİZMETLERİMİZ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-secondary-900 mb-3">
            HANGİ ARAÇLARI
          </h2>
          <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            SATIN ALIYORUZ?
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Tüm araç türleri için en yüksek fiyat garantisi ve anında ödeme
          </p>
        </div>

        {/* Services Grid - Colored */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const colors = serviceColors[service.slug as keyof typeof serviceColors];

            return (
              <div
                key={service.id}
                className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group`}
              >
                {/* Colored Header */}
                <div className={`bg-gradient-to-br ${colors.gradient} text-white p-8 relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="inline-block mb-4">
                      <span className="text-4xl">{service.icon}</span>
                    </div>

                    {/* Category Label */}
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-90">
                      Kaza Değerleme Aracı
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/90 mb-4">
                      {service.features[0].description}
                    </p>

                    {/* Stat Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-lg font-black">5K+</span>
                      <span className="text-xs">Araç Aldık</span>
                    </div>
                  </div>
                </div>

                {/* White Content Area */}
                <div className="bg-white p-6">
                  {/* Bu Kategoride Alınanlar */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-secondary-700 mb-3">
                      Bu Kategoride Alınanlar
                    </h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center text-white text-xs`}>
                            <FaCheck />
                          </div>
                          <span className="text-sm text-secondary-600">{feature.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Avantajlar */}
                  <div className="mb-4 pb-4 border-b border-secondary-100">
                    <h4 className="text-sm font-bold text-secondary-700 mb-3">
                      Avantajlar
                    </h4>
                    <div className="space-y-2">
                      <div className={`flex items-center gap-2 bg-${colors.bg.replace('bg-', '')}-50 rounded-lg px-3 py-2`}>
                        <span className={colors.text}><FaCheck /></span>
                        <span className="text-xs text-secondary-600">30 dakikada teklif</span>
                      </div>
                      <div className={`flex items-center gap-2 bg-${colors.bg.replace('bg-', '')}-50 rounded-lg px-3 py-2`}>
                        <span className={colors.text}><FaCheck /></span>
                        <span className="text-xs text-secondary-600">Piyasa üstü fiyat</span>
                      </div>
                      <div className={`flex items-center gap-2 bg-${colors.bg.replace('bg-', '')}-50 rounded-lg px-3 py-2`}>
                        <span className={colors.text}><FaCheck /></span>
                        <span className="text-xs text-secondary-600">Aynı gün ödeme</span>
                      </div>
                      <div className={`flex items-center gap-2 bg-${colors.bg.replace('bg-', '')}-50 rounded-lg px-3 py-2`}>
                        <span className={colors.text}><FaCheck /></span>
                        <span className="text-xs text-secondary-600">Ücretsiz ekspertiz</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/${service.slug}`}
                    className={`block w-full text-center py-3 ${colors.bg} hover:opacity-90 text-white font-bold rounded-lg transition-all`}
                  >
                    DETAY & TEKLİF AL
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-secondary-50 rounded-2xl p-8">
          <p className="text-secondary-700 mb-4 text-lg">
            Aracınız hangi kategoride? Hemen arayın, anında teklif alın!
          </p>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className="btn btn-lg bg-success hover:bg-success/90 text-white border-0 gap-2"
          >
            <FaPhoneAlt /> 0 530 344 40 97
          </a>
        </div>
      </div>
    </section>
  );
}
