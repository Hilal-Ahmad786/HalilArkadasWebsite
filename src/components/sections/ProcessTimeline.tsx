import { processSteps } from '@/data/process';
import { formatPhoneHref } from '@/lib/utils';
import { siteConfig } from '@/data/site';
import { FaMobileAlt, FaPhoneAlt } from 'react-icons/fa';

const stepColors = [
  { bg: 'bg-blue-500', border: 'border-blue-500', text: 'text-blue-600', lightBg: 'bg-blue-50' },
  { bg: 'bg-purple-500', border: 'border-purple-500', text: 'text-purple-600', lightBg: 'bg-purple-50' },
  { bg: 'bg-orange-500', border: 'border-orange-500', text: 'text-orange-600', lightBg: 'bg-orange-50' },
  { bg: 'bg-pink-500', border: 'border-pink-500', text: 'text-pink-600', lightBg: 'bg-pink-50' },
  { bg: 'bg-green-500', border: 'border-green-500', text: 'text-green-600', lightBg: 'bg-green-50' },
];

export default function ProcessTimeline() {
  return (
    <section className="section bg-primary-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-block mb-4">
            <span className="badge gap-2" style={{ backgroundColor: '#FF9800', color: 'white', border: 'none' }}>
              <FaMobileAlt /> Basit & Hızlı Süreç
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-3">
            İzmir'da Araç Satış Süreci
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Hızlı • Kolay • Güvenli
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative max-w-5xl mx-auto mt-32 mb-16">
          {/* Central Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2"></div>

          {/* Steps */}
          <div className="relative">
            {processSteps.map((step, index) => {
              const color = stepColors[index];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`absolute ${isEven ? 'top-0' : 'bottom-0'}`}
                  style={{ left: `${(index / (processSteps.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}
                >
                  {/* Card */}
                  <div className={`${isEven ? 'mb-24' : 'mt-24'} w-56`}>
                    <div className={`bg-white rounded-2xl shadow-lg p-6 border-t-4 ${color.border} relative`}>
                      {/* Number Badge */}
                      <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 ${color.bg} rounded-full flex items-center justify-center text-white text-xl font-black shadow-lg`}>
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="text-4xl text-center mb-3 mt-4">
                        {step.icon}
                      </div>

                      {/* Title */}
                      <h3 className={`text-lg font-bold text-center mb-2 ${color.text}`}>
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-secondary-600 text-center">
                        {step.description}
                      </p>
                    </div>

                    {/* Connecting Line to Central */}
                    <div
                      className={`absolute left-1/2 ${isEven ? 'top-full' : 'bottom-full'} w-1 h-20 ${color.bg} transform -translate-x-1/2`}
                    ></div>
                  </div>

                  {/* Circle on Central Line */}
                  <div className={`absolute left-1/2 top-1/2 w-6 h-6 ${color.bg} rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10`}></div>
                </div>
              );
            })}
          </div>

          {/* Spacer for absolute positioned items */}
          <div className="h-96"></div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => {
            const color = stepColors[index];

            return (
              <div key={step.step} className="relative">
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className={`absolute left-8 top-20 w-1 h-full ${color.bg} opacity-30`}></div>
                )}

                <div className="flex gap-4">
                  {/* Number Circle */}
                  <div className={`flex-shrink-0 w-16 h-16 ${color.bg} rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg z-10`}>
                    {step.step}
                  </div>

                  {/* Card */}
                  <div className={`flex-1 bg-white rounded-xl shadow-lg p-6 border-l-4 ${color.border}`}>
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{step.icon}</span>
                      <h3 className={`text-lg font-bold ${color.text}`}>
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-secondary-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA in Middle */}
        <div className="mt-12 mb-8 text-center">
          <div className="inline-block bg-gradient-to-br from-secondary-900 to-secondary-800 text-white rounded-2xl shadow-2xl p-8 max-w-md">
            <h3 className="text-2xl font-black mb-2">
              Hemen Başlayın!
            </h3>
            <p className="text-white/90 mb-4 text-sm">
              Aracınız için teklif almak sadece 2 dakika!
            </p>
            <a
              href={formatPhoneHref(siteConfig.phone)}
              className="btn btn-lg bg-accent hover:bg-accent-600 text-white border-0 gap-2"
            >
              <FaPhoneAlt /> 0544 170 25 40
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-secondary-900 via-primary-800 to-secondary-900 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-black text-accent mb-1">5 DK</div>
              <div className="text-sm text-white/80">İlk Görüşme</div>
            </div>
            <div>
              <div className="text-4xl font-black text-accent mb-1">30 DK</div>
              <div className="text-sm text-white/80">Değerlendirme</div>
            </div>
            <div>
              <div className="text-4xl font-black text-accent mb-1">2 SAAT</div>
              <div className="text-sm text-white/80">Noter İşlemi</div>
            </div>
            <div>
              <div className="text-4xl font-black text-accent mb-1">ANINDA</div>
              <div className="text-sm text-white/80">Ödeme</div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-secondary-600">
            Hemen başlayın, 24 saat içinde paranız hesabınızda!
          </p>
          <a
            href={formatPhoneHref(siteConfig.phone)}
            className="inline-block mt-3 text-accent font-bold hover:underline"
          >
            HEMEN BAŞLA →
          </a>
        </div>
      </div>
    </section>
  );
}
