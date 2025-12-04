'use client';

import React from 'react';
import { FaCar, FaTruck, FaBus, FaMotorcycle, FaShuttleVan, FaTractor, FaCheck } from 'react-icons/fa';

interface VehicleType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  examples: string[];
  accepted: boolean;
}

interface VehicleTypesProps {
  serviceType: 'kazali' | 'hasarli' | 'pert' | 'hurda';
}

const vehicleTypes: Record<string, VehicleType[]> = {
  common: [
    {
      id: 'sedan',
      name: 'Sedan & Hatchback',
      icon: <FaCar />,
      description: 'Binek otomobiller',
      examples: ['Civic', 'Focus', 'Corolla', 'Golf'],
      accepted: true
    },
    {
      id: 'suv',
      name: 'SUV & Jeep',
      icon: <FaCar />,
      description: 'Arazi ve şehir içi SUV',
      examples: ['Q5', 'X3', 'Tiguan', 'Sportage'],
      accepted: true
    },
    {
      id: 'van',
      name: 'Minibüs & Panelvan',
      icon: <FaShuttleVan />,
      description: 'Ticari araçlar',
      examples: ['Transit', 'Sprinter', 'Crafter', 'Doblo'],
      accepted: true
    },
    {
      id: 'truck',
      name: 'Kamyon & Kamyonet',
      icon: <FaTruck />,
      description: 'Ağır vasıta araçlar',
      examples: ['Ford Cargo', 'MAN', 'Mercedes Axor'],
      accepted: true
    },
    {
      id: 'motorcycle',
      name: 'Motosiklet',
      icon: <FaMotorcycle />,
      description: 'İki tekerlekli araçlar',
      examples: ['Kawasaki', 'Honda', 'Yamaha', 'BMW'],
      accepted: true
    },
    {
      id: 'tractor',
      name: 'Traktör & İş Makinesi',
      icon: <FaTractor />,
      description: 'Tarım ve inşaat araçları',
      examples: ['Ekskavatör', 'Forklift', 'Traktör'],
      accepted: true
    },
  ]
};

export default function VehicleTypesAccepted({ serviceType }: VehicleTypesProps) {
  const vehicles = vehicleTypes.common;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm mb-4">
            ARAÇ TÜRLERİ
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">
            Hangi Araç Türlerini Alıyoruz?
          </h2>
          <p className="text-lg text-gray-600">
            Marka, model ve araç türü fark etmeksizin tüm araçlar için profesyonel hizmet sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary rounded-xl flex items-center justify-center text-3xl transition-colors">
                  {vehicle.icon}
                </div>
                {vehicle.accepted && (
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <FaCheck /> ALIYORUZ
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{vehicle.description}</p>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Örnekler:</p>
                <div className="flex flex-wrap gap-2">
                  {vehicle.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary-800 to-secondary-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Aracınızın Türü Listede Yok mu?</h3>
          <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
            Yukarıda görmediğiniz her türlü araç, özel araç veya modifiye araçlar için de hizmet veriyoruz. Bize ulaşın, değerlendirelim.
          </p>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className="btn bg-accent hover:bg-accent-600 text-white font-bold inline-flex items-center gap-2"
          >
            Aracınız İçin Teklif Alın
          </a>
        </div>
      </div>
    </section>
  );
}
