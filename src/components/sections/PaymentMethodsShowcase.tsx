'use client';

import React from 'react';
import { FaMoneyBillWave, FaCreditCard, FaUniversity, FaCheckCircle } from 'react-icons/fa';

export default function PaymentMethodsShowcase() {
  const methods = [
    {
      icon: <FaMoneyBillWave />,
      title: 'Nakit Ödeme',
      description: 'Noter işlemi sırasında nakit olarak ödeme',
      features: ['Anında teslim', 'Güvenli', 'Hızlı']
    },
    {
      icon: <FaUniversity />,
      title: 'Banka Havalesi',
      description: 'İstediğiniz bankaya EFT/Havale',
      features: ['Aynı gün', 'İzlenebilir', 'Güvenli']
    },
    {
      icon: <FaCreditCard />,
      title: 'Çek ile Ödeme',
      description: 'Müşteri çeki veya banka çeki seçeneği',
      features: ['Esnek', 'Garantili', 'Kayıtlı']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Ödeme Seçenekleri
          </h2>
          <p className="text-gray-600">
            Size en uygun ödeme yöntemini seçin. Tüm ödemeler aynı gün içinde gerçekleştirilir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {methods.map((method, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all text-center"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-sm text-gray-600 mb-6">{method.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {method.features.map((feature, i) => (
                  <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 border border-gray-200">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCheckCircle className="text-3xl text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">Ödeme Garantisi</h3>
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Tüm ödemeler <strong>noter işlemi sırasında veya hemen sonrasında</strong> yapılır. 
            Paranızı almadan araç devri gerçekleşmez. <strong>%100 güvenli işlem garantisi</strong> veriyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
