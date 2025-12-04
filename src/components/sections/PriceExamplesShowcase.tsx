'use client';

import React from 'react';
import { FaMoneyBillWave, FaCheckCircle, FaCar } from 'react-icons/fa';

interface PriceExample {
  id: string;
  vehicle: string;
  year: string;
  condition: string;
  marketPrice: string;
  ourPrice: string;
  difference: string;
  location: string;
}

interface PriceExamplesProps {
  serviceType: 'kazali' | 'hasarli' | 'pert' | 'hurda';
}

const priceExamples: Record<string, PriceExample[]> = {
  kazali: [
    {
      id: '1',
      vehicle: '2020 VW Passat',
      year: '2020',
      condition: 'Ön tampon hasarı',
      marketPrice: '₺180,000',
      ourPrice: '₺192,000',
      difference: '+₺12,000',
      location: 'İstanbul'
    },
    {
      id: '2',
      vehicle: '2018 Ford Focus',
      year: '2018',
      condition: 'Yan darbe hasarı',
      marketPrice: '₺145,000',
      ourPrice: '₺158,000',
      difference: '+₺13,000',
      location: 'Ankara'
    },
    {
      id: '3',
      vehicle: '2019 Renault Megane',
      year: '2019',
      condition: 'Arka kısım hasarı',
      marketPrice: '₺165,000',
      ourPrice: '₺175,000',
      difference: '+₺10,000',
      location: 'İzmir'
    }
  ],
  hasarli: [
    {
      id: '1',
      vehicle: '2017 Honda Civic',
      year: '2017',
      condition: 'Motor arızalı',
      marketPrice: '₺135,000',
      ourPrice: '₺148,000',
      difference: '+₺13,000',
      location: 'İstanbul'
    },
    {
      id: '2',
      vehicle: '2016 Opel Astra',
      year: '2016',
      condition: 'Şanzıman hasarlı',
      marketPrice: '₺110,000',
      ourPrice: '₺122,000',
      difference: '+₺12,000',
      location: 'Bursa'
    },
    {
      id: '3',
      vehicle: '2015 Fiat Linea',
      year: '2015',
      condition: 'Kaporta boyalı',
      marketPrice: '₺95,000',
      ourPrice: '₺105,000',
      difference: '+₺10,000',
      location: 'Antalya'
    }
  ],
  pert: [
    {
      id: '1',
      vehicle: '2018 BMW 3.20i',
      year: '2018',
      condition: 'Sigorta pert',
      marketPrice: '₺220,000',
      ourPrice: '₺238,000',
      difference: '+₺18,000',
      location: 'İstanbul'
    },
    {
      id: '2',
      vehicle: '2016 Audi A4',
      year: '2016',
      condition: 'Noter pert',
      marketPrice: '₺185,000',
      ourPrice: '₺199,000',
      difference: '+₺14,000',
      location: 'Ankara'
    },
    {
      id: '3',
      vehicle: '2017 Mercedes C180',
      year: '2017',
      condition: 'Hasar pert',
      marketPrice: '₺245,000',
      ourPrice: '₺265,000',
      difference: '+₺20,000',
      location: 'İzmir'
    }
  ],
  hurda: [
    {
      id: '1',
      vehicle: '2008 Renault Symbol',
      year: '2008',
      condition: 'Hurda belgeli',
      marketPrice: '₺25,000',
      ourPrice: '₺32,000',
      difference: '+₺7,000',
      location: 'İstanbul'
    },
    {
      id: '2',
      vehicle: '2005 Fiat Doblo',
      year: '2005',
      condition: 'Çalışmıyor',
      marketPrice: '₺18,000',
      ourPrice: '₺24,000',
      difference: '+₺6,000',
      location: 'Bursa'
    },
    {
      id: '3',
      vehicle: '2010 Hyundai Accent',
      year: '2010',
      condition: 'Parça eksik',
      marketPrice: '₺22,000',
      ourPrice: '₺28,000',
      difference: '+₺6,000',
      location: 'Antalya'
    }
  ]
};

export default function PriceExamplesShowcase({ serviceType }: PriceExamplesProps) {
  const examples = priceExamples[serviceType] || priceExamples.kazali;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm mb-4">
            <FaMoneyBillWave /> GERÇEK FİYAT ÖRNEKLERİ
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">
            Yakın Zamanda Aldığımız Araçlar
          </h2>
          <p className="text-lg text-gray-600">
            Son 30 gün içinde müşterilerimize ödediğimiz gerçek fiyatlar. Piyasa değerinin üzerinde teklif garantisi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {examples.map((example) => (
            <div
              key={example.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all group"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary-700 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <FaCar className="text-2xl" />
                  <div>
                    <h3 className="font-bold text-lg">{example.vehicle}</h3>
                    <p className="text-sm text-primary-100">{example.condition}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs mt-3">
                  <span className="bg-white/20 px-2 py-1 rounded">📍 {example.location}</span>
                  <span className="bg-white/20 px-2 py-1 rounded">🕐 Son 30 gün</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Market Price */}
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Piyasa Değeri</span>
                    <span className="text-lg font-semibold text-gray-500 line-through">
                      {example.marketPrice}
                    </span>
                  </div>

                  {/* Our Price */}
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-sm font-semibold text-gray-900">Bizim Fiyatımız</span>
                    <span className="text-2xl font-black text-primary">
                      {example.ourPrice}
                    </span>
                  </div>

                  {/* Difference */}
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-600" />
                        <span className="text-sm font-medium text-green-900">Ekstra Kazanç</span>
                      </div>
                      <span className="text-xl font-black text-green-600">
                        {example.difference}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-8 text-center border-2 border-primary/20 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Aracınız İçin Kaç Para Alabileceğinizi Öğrenin
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            30 dakika içinde ücretsiz ekspertiz ve piyasanın en yüksek fiyat teklifini alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              className="btn bg-accent hover:bg-accent-600 text-white font-bold"
            >
              Hemen Ara - Fiyat Öğren
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-success hover:bg-green-600 text-white font-bold"
            >
              WhatsApp Teklif Al
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            * Fiyatlar aracın durumuna göre değişiklik gösterebilir
          </p>
        </div>
      </div>
    </section>
  );
}
