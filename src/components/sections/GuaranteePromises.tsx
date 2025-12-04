'use client';

import React from 'react';
import { FaShieldAlt, FaMoneyBillWave, FaClock, FaFileAlt, FaUndo, FaCheckDouble } from 'react-icons/fa';

export default function GuaranteePromises() {
  const guarantees = [
    {
      icon: <FaMoneyBillWave />,
      title: 'En Yüksek Fiyat Garantisi',
      description: 'Piyasada daha yüksek teklif bulursanız, farkı ödüyoruz.',
      badge: <span className="flex items-center gap-1"><FaMoneyBillWave /> PARA İADESİ</span>
    },
    {
      icon: <FaClock />,
      title: '30 Dakika Teklif Garantisi',
      description: '30 dakika içinde fiyat teklifi veremezse 500 TL bonus.',
      badge: <span className="flex items-center gap-1"><FaClock /> HIZLI HİZMET</span>
    },
    {
      icon: <FaFileAlt />,
      title: 'Ücretsiz Evrak Garantisi',
      description: 'Tüm noter, tapu ve yasal işlemler tarafımızdan karşılanır.',
      badge: <span className="flex items-center gap-1"><FaFileAlt /> %100 ÜCRETSİZ</span>
    },
    {
      icon: <FaShieldAlt />,
      title: 'Güvenli İşlem Garantisi',
      description: 'Para transferi yapılmadan araç devri gerçekleşmez.',
      badge: <span className="flex items-center gap-1"><FaShieldAlt /> GÜVENLİ</span>
    },
    {
      icon: <FaUndo />,
      title: 'Cayma Hakkı',
      description: 'Anlaşma sonrası 24 saat içinde cayma hakkınız saklıdır.',
      badge: <span className="flex items-center gap-1"><FaUndo /> ESNEKLİK</span>
    },
    {
      icon: <FaCheckDouble />,
      title: 'Memnuniyet Garantisi',
      description: 'Hizmetten memnun kalmazsanız, tüm masrafları iade ediyoruz.',
      badge: <span className="flex items-center gap-1"><FaCheckDouble /> MEMNUNİYET</span>
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-900 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm mb-4 border border-white/30 flex items-center justify-center gap-2">
            <FaShieldAlt /> GARANTİLERİMİZ
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
            Size Verdiğimiz <span className="text-accent-300">Sözler</span>
          </h2>
          <p className="text-xl text-gray-100">
            Müşteri memnuniyeti bizim için her şeyden önemli. İşte size verdiğimiz garantiler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {guarantees.map((guarantee, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-600 rounded-xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform shadow-lg">
                  {guarantee.icon}
                </div>
                <span className="bg-white/20 px-2 py-1 rounded-full text-[10px] font-bold border border-white/30">
                  {guarantee.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
              <p className="text-gray-200 leading-relaxed">{guarantee.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white text-gray-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-black mb-4">
            15 Yıldır <span className="text-primary">Sözümüzün Arkasındayız</span>
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            5000+ mutlu müşterimiz, verdiğimiz sözleri tuttuğumuza tanık.
            Güven bizim en büyük sermayemiz. Size de aynı güveni sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              className="btn bg-primary hover:bg-primary-700 text-white font-bold"
            >
              Garantili Hizmet İçin Arayın
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-success hover:bg-green-600 text-white font-bold"
            >
              WhatsApp ile İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
