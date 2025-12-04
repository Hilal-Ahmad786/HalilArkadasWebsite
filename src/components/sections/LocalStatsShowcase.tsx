'use client';

import React from 'react';
import { FaCar, FaMoneyBillWave, FaClock, FaTrophy, FaUsers, FaStar, FaChartBar, FaBolt } from 'react-icons/fa';

interface CityStats {
  vehiclesPurchased: string;
  totalPaid: string;
  averageResponse: string;
  satisfaction: string;
  activeCustomers: string;
  rating: string;
}

interface LocalStatsProps {
  citySlug: string;
  cityName: string;
}

const cityStats: Record<string, CityStats> = {
  istanbul: {
    vehiclesPurchased: '12,500+',
    totalPaid: '₺285M+',
    averageResponse: '1.5 saat',
    satisfaction: '%98.5',
    activeCustomers: '8,200+',
    rating: '4.9/5'
  },
  ankara: {
    vehiclesPurchased: '5,800+',
    totalPaid: '₺132M+',
    averageResponse: '1 saat',
    satisfaction: '%99',
    activeCustomers: '3,900+',
    rating: '4.9/5'
  },
  izmir: {
    vehiclesPurchased: '4,200+',
    totalPaid: '₺98M+',
    averageResponse: '1 saat',
    satisfaction: '%98',
    activeCustomers: '2,800+',
    rating: '4.8/5'
  },
  bursa: {
    vehiclesPurchased: '2,900+',
    totalPaid: '₺67M+',
    averageResponse: '45 dakika',
    satisfaction: '%99',
    activeCustomers: '1,900+',
    rating: '4.9/5'
  },
  antalya: {
    vehiclesPurchased: '2,100+',
    totalPaid: '₺49M+',
    averageResponse: '1 saat',
    satisfaction: '%98',
    activeCustomers: '1,400+',
    rating: '4.8/5'
  }
};

export default function LocalStatsShowcase({ citySlug, cityName }: LocalStatsProps) {
  const stats = cityStats[citySlug] || cityStats.istanbul;

  const statsData = [
    {
      icon: <FaCar />,
      value: stats.vehiclesPurchased,
      label: 'Alınan Araç',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <FaMoneyBillWave />,
      value: stats.totalPaid,
      label: 'Toplam Ödeme',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: <FaClock />,
      value: stats.averageResponse,
      label: 'Ort. Yanıt Süresi',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <FaTrophy />,
      value: stats.satisfaction,
      label: 'Memnuniyet',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <FaUsers />,
      value: stats.activeCustomers,
      label: 'Aktif Müşteri',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: <FaStar />,
      value: stats.rating,
      label: 'Müşteri Puanı',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm mb-4 border border-white/30 flex items-center justify-center gap-2">
            <FaChartBar /> {cityName.toUpperCase()} İSTATİSTİKLERİ
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            {cityName}'da <span className="text-accent-300">Rakamlarla</span> Başarımız
          </h2>
          <p className="text-xl text-gray-100">
            {cityName} genelinde binlerce mutlu müşteriye hizmet verdik. İşte gerçek verilerimiz.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:-translate-y-2 border border-white/20 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-3xl text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black mb-2 text-white">{stat.value}</div>
              <div className="text-sm text-gray-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="text-5xl mb-4 text-accent"><FaTrophy /></div>
            <h3 className="text-2xl font-bold mb-2">{cityName} #1</h3>
            <p className="text-gray-200">
              {cityName} bölgesinde en çok tercih edilen araç alım firması
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="text-5xl mb-4 text-accent"><FaBolt /></div>
            <h3 className="text-2xl font-bold mb-2">En Hızlı</h3>
            <p className="text-gray-200">
              {cityName}'da ortalama {stats.averageResponse} içinde adresinizde
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="text-5xl mb-4 text-accent"><FaMoneyBillWave /></div>
            <h3 className="text-2xl font-bold mb-2">En Yüksek Fiyat</h3>
            <p className="text-gray-200">
              {cityName} piyasasının en iyi fiyatlarını garanti ediyoruz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
