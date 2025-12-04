'use client';

import React from 'react';
import { FaShieldAlt, FaCertificate, FaLock, FaAward, FaHandshake, FaCheckCircle } from 'react-icons/fa';

export default function TrustBadgesSection() {
  const badges = [
    {
      icon: <FaShieldAlt />,
      title: 'SSL Güvenli',
      description: '256-bit şifreleme',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaCertificate />,
      title: 'Lisanslı Firma',
      description: 'Ticaret odası onaylı',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaAward />,
      title: '15 Yıl Tecrübe',
      description: 'Sektör lideri',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaHandshake />,
      title: 'Güvenli İşlem',
      description: '%100 garanti',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <FaLock />,
      title: 'KVKK Uyumlu',
      description: 'Veri güvenliği',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <FaCheckCircle />,
      title: '5000+ Müşteri',
      description: 'Onaylanmış',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center text-white text-xl mb-3 group-hover:scale-110 transition-transform`}>
                {badge.icon}
              </div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">{badge.title}</h4>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
