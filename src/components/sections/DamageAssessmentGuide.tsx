'use client';

import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle } from 'react-icons/fa';

interface DamageType {
  id: string;
  name: string;
  examples: string[];
  priceImpact: 'high' | 'medium' | 'low';
  accepted: boolean;
}

interface DamageAssessmentProps {
  serviceType: 'kazali' | 'hasarli' | 'pert' | 'hurda';
}

const damageTypes = {
  kazali: [
    { id: '1', name: 'Hafif Kaza', examples: ['Çarpma', 'Çizik', 'Boya hasarı'], priceImpact: 'low' as const, accepted: true },
    { id: '2', name: 'Orta Hasar', examples: ['Kapı değişimi', 'Kaput değişimi', 'Airbag patlaması'], priceImpact: 'medium' as const, accepted: true },
    { id: '3', name: 'Ağır Hasar', examples: ['Şasi hasarı', 'Motor hasarı', 'Yan yatar kaza'], priceImpact: 'high' as const, accepted: true },
    { id: '4', name: 'Total Hasar', examples: ['Kullanılamaz durum', 'Toplam ekonomik kayıp'], priceImpact: 'high' as const, accepted: true },
  ],
  hasarli: [
    { id: '1', name: 'Kaporta Hasarı', examples: ['Ezik', 'Çizik', 'Göçük'], priceImpact: 'low' as const, accepted: true },
    { id: '2', name: 'Boya Hasarı', examples: ['Boyalı parça', 'Boya dökülmesi', 'Renk değişimi'], priceImpact: 'low' as const, accepted: true },
    { id: '3', name: 'Mekanik Hasar', examples: ['Motor arızası', 'Şanzıman problemi', 'Fren sistemi'], priceImpact: 'medium' as const, accepted: true },
    { id: '4', name: 'Elektrik Hasarı', examples: ['Elektronik arıza', 'Kablo problemi', 'ECU hasarı'], priceImpact: 'medium' as const, accepted: true },
  ],
  pert: [
    { id: '1', name: 'Sigorta Pert', examples: ['Kasko total', 'Hasar %60+', 'Ekonomik total'], priceImpact: 'high' as const, accepted: true },
    { id: '2', name: 'Noter Pert', examples: ['İhtiyari pert', 'Araca el konulma'], priceImpact: 'medium' as const, accepted: true },
    { id: '3', name: 'Hurda Pert', examples: ['Yaşlılık', 'Kullanım ömrü dolmuş'], priceImpact: 'high' as const, accepted: true },
  ],
  hurda: [
    { id: '1', name: 'Çalışır Hurda', examples: ['Eski model', 'Yüksek km', 'Ekonomik değersiz'], priceImpact: 'medium' as const, accepted: true },
    { id: '2', name: 'Çalışmaz Hurda', examples: ['Motor çalışmaz', 'Hareket etmez'], priceImpact: 'high' as const, accepted: true },
    { id: '3', name: 'Parça Eksik', examples: ['Motor yok', 'Şanzıman yok', 'İç döşeme yok'], priceImpact: 'high' as const, accepted: true },
  ],
};

export default function DamageAssessmentGuide({ serviceType }: DamageAssessmentProps) {
  const [selectedDamage, setSelectedDamage] = useState<string | null>(null);
  const damages = damageTypes[serviceType] || damageTypes.kazali;

  const getPriceImpactColor = (impact: 'high' | 'medium' | 'low') => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-green-600 bg-green-50';
    }
  };

  const getPriceImpactText = (impact: 'high' | 'medium' | 'low') => {
    switch (impact) {
      case 'high': return 'Yüksek Etki';
      case 'medium': return 'Orta Etki';
      case 'low': return 'Düşük Etki';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            <FaQuestionCircle /> HASAR DEĞERLENDİRME
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">
            Hangi Hasarları Kabul Ediyoruz?
          </h2>
          <p className="text-lg text-gray-600">
            Aşağıda hasar türlerini ve fiyata etkilerini inceleyebilirsiniz. Tüm hasar türleri için teklif veriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {damages.map((damage) => (
            <div
              key={damage.id}
              onClick={() => setSelectedDamage(selectedDamage === damage.id ? null : damage.id)}
              className={`bg-white rounded-xl p-6 border-2 cursor-pointer transition-all ${
                selectedDamage === damage.id
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {damage.accepted ? (
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaTimesCircle />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900">{damage.name}</h3>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${getPriceImpactColor(damage.priceImpact)}`}>
                  {getPriceImpactText(damage.priceImpact)}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Örnekler:</p>
                <ul className="space-y-1">
                  {damage.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedDamage === damage.id && (
                <div className="mt-4 pt-4 border-t border-gray-100 animate-slide-up">
                  <p className="text-sm text-gray-700">
                    <strong>Değerlendirme:</strong> Bu hasar türü için aracınızı ücretsiz ekspertizimizle değerlendiriyor ve piyasanın en yüksek fiyatını sunuyoruz.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-xl p-8 max-w-3xl mx-auto border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Aracınızın Hasarından Emin Değil Misiniz?
          </h3>
          <p className="text-gray-600 mb-6">
            Uzman ekibimiz ücretsiz olarak aracınızı değerlendirir ve size en doğru bilgiyi verir.
          </p>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className="btn bg-accent hover:bg-accent-600 text-white font-bold"
          >
            Ücretsiz Ekspertiz İçin Arayın
          </a>
        </div>
      </div>
    </section>
  );
}
