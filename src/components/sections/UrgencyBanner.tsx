'use client';

import { useState, useEffect } from 'react';
import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { siteConfig } from '@/data/site';
import { FaCheck, FaFire, FaWhatsapp, FaPhoneAlt, FaStar, FaTrophy, FaCheckCircle } from 'react-icons/fa';

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 33,
    seconds: 24,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to keep it running
          hours = 1;
          minutes = 33;
          seconds = 24;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: <FaCheck />, text: 'Ücretsiz ekspertiz ve değerlendirme' },
    { icon: <FaCheck />, text: 'Piyasa üstü fiyat garantisi' },
    { icon: <FaCheck />, text: 'Aynı gün noter ve ödeme' },
    { icon: <FaCheck />, text: 'Ücretsiz çekici hizmeti' },
  ];

  return (
    <section className="section bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
              <FaFire /> Bugün İçin Özel Fırsat!
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-white">
            Aracınızı Satmadan Önce
            <br />
            <span className="text-accent-400">Bizi Mutlaka Arayın!</span>
          </h2>

          <p className="text-center text-xl text-white/90 mb-8">
            Bugün arayanlara ekstra %10 bonus fiyat veriyoruz
          </p>

          {/* Countdown Timer */}
          <div className="mb-8">
            <div className="text-center mb-4">
              <span className="text-white/80 text-sm font-semibold">
                Kampanya Bitiş Süresi:
              </span>
            </div>
            <div className="flex justify-center gap-4">
              {/* Hours */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <div className="text-4xl md:text-6xl font-black text-accent-400">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-white/70 mt-1">Saat</div>
              </div>

              <div className="flex items-center text-3xl md:text-5xl font-black text-accent-400">
                :
              </div>

              {/* Minutes */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <div className="text-4xl md:text-6xl font-black text-accent-400">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-white/70 mt-1">Dakika</div>
              </div>

              <div className="flex items-center text-3xl md:text-5xl font-black text-accent-400">
                :
              </div>

              {/* Seconds */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                <div className="text-4xl md:text-6xl font-black text-accent-400">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-white/70 mt-1">Saniye</div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3"
              >
                <span className="text-green-400 text-xl font-bold">{feature.icon}</span>
                <span className="text-white/90">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={formatWhatsAppHref(siteConfig.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg text-white border-0 font-bold gap-2"
              style={{ backgroundColor: '#25D366' }}
            >
              <FaWhatsapp className="text-xl" /> WhatsApp ile Yaz
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">Anında Yanıt</span>
            </a>
            <a
              href={formatPhoneHref(siteConfig.phone)}
              className="btn btn-lg bg-accent hover:bg-accent-600 text-white border-0 font-bold gap-2"
            >
              <FaPhoneAlt /> Hemen Ara
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded">0544 170 25 40</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-yellow-400"><FaStar /></span>
              <div>
                <div className="text-xl font-black">4.9/5.0</div>
                <div className="text-xs text-white/70">15K+ Yorum</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-yellow-400"><FaTrophy /></span>
              <div>
                <div className="text-xl font-black">15K+</div>
                <div className="text-xs text-white/70">Araç Aldık</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-green-400"><FaCheckCircle /></span>
              <div>
                <div className="text-xl font-black">SSL Güvenli</div>
                <div className="text-xs text-white/70">%100 Uyumlu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
