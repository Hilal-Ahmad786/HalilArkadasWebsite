'use client';

import { siteConfig } from '@/data/site';
import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { FaCar, FaPhoneAlt, FaWhatsapp, FaBolt, FaMoneyBillWave, FaTruck, FaCheckCircle, FaShieldAlt, FaStar } from 'react-icons/fa';

interface HeroProps {
  badge?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: string;
}

export default function HeroSection({
  badge = (
    <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center justify-center">
      <FaCar className="text-accent-400" /> TÜRKİYE'NİN EN GÜVENİLİR ARAÇ ALIM MERKEZİ
    </span>
  ),
  title = (
    <>
      Hasarlı Aracınızı
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">
        En Yüksek Fiyata
      </span>
      <br />
      Satın Alıyoruz
    </>
  ),
  subtitle = "Kazalı, hasarlı, pert ve hurda araçlar için 30 dakikada ücretsiz ekspertiz ve anında nakit ödeme.",
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900 z-10"></div>

        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 z-0"></div>
      </div>

      <div className="container relative z-20 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-8 animate-fade-in-up">
            {badge}
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight text-white animate-fade-in-up delay-100">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16 animate-fade-in-up delay-300">
            <a
              href={formatWhatsAppHref(siteConfig.whatsapp)}
              onClick={() => trackWhatsAppClick('hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <FaWhatsapp className="text-2xl" />
              <span>WhatsApp Teklif Al</span>
              <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></div>
            </a>

            <a
              href={formatPhoneHref(siteConfig.phone)}
              onClick={() => trackPhoneClick('hero')}
              className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 flex items-center justify-center gap-3 border border-white/10"
            >
              <FaPhoneAlt className="text-xl" />
              <span>Hemen Ara</span>
            </a>
          </div>

          {/* Trust Indicators / Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-in-up delay-400">
            {[
              { icon: <FaBolt className="text-yellow-400" />, title: '30 Dakikada', subtitle: 'Hızlı Teklif' },
              { icon: <FaMoneyBillWave className="text-green-400" />, title: 'En Yüksek', subtitle: 'Fiyat Garantisi' },
              { icon: <FaTruck className="text-blue-400" />, title: 'Ücretsiz', subtitle: 'Çekici Hizmeti' },
              { icon: <FaCheckCircle className="text-accent-400" />, title: 'Anında', subtitle: 'Nakit Ödeme' },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl mb-3 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="font-bold text-white text-lg mb-1">{feature.title}</div>
                <div className="text-sm text-slate-400">{feature.subtitle}</div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Badge */}
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up delay-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white">
                  <FaShieldAlt />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white">5000+</span> Mutlu Müşteri
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
