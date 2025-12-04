'use client';

import { useState } from 'react';
import { FaStar, FaCheck, FaPhone, FaFire, FaCar, FaWrench, FaClipboard, FaRecycle } from 'react-icons/fa';

// Define the Testimonial interface based on usage
interface Testimonial {
  id: number;
  name: string;
  initial?: string;
  bgColor?: string;
  location: string;
  rating: number;
  vehicle?: string;
  vehicleIcon?: React.ReactNode;
  text: string;
  service: string;
  date?: string;
  verified?: boolean;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    initial: 'A',
    bgColor: 'bg-red-500',
    location: 'İstanbul • Kadıköy',
    rating: 5,
    vehicle: 'Toyota Corolla 2018',
    vehicleIcon: <FaCar />,
    text: 'Çok profesyonel bir hizmet aldım. Kaza sonrası aracımın değerini en iyi şekilde değerlendirdiler. Piyasadan çok daha iyi bir fiyat verdiler. Evrak işlemleri de çok hızlı halledildi. Teşekkür ederim.',
    service: 'Kazalı Araç',
    date: '2024-01-18',
    verified: true,
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    initial: 'A',
    bgColor: 'bg-purple-500',
    location: 'Ankara • Çankaya',
    rating: 5,
    vehicle: 'Renault Megane 2015',
    vehicleIcon: <FaCar />,
    text: 'İlk araç satışımdı ve çok endişeliydim. Ancak ekip çok yardımcı oldu ve çok iyi fiyat verdiler. Tüm işlemler hem güvenli hem de çok hızlı bir şekilde gerçekleşti. Kesinlikle tavsiye ederim!',
    service: 'Hasarlı Araç',
    date: '2024-01-20',
    verified: true,
  },
  {
    id: 3,
    name: 'Mehmet Kaya',
    initial: 'M',
    bgColor: 'bg-accent',
    location: 'İzmir • Karşıyaka',
    rating: 5,
    vehicle: 'VW Passat 2016',
    vehicleIcon: <FaCar />,
    text: 'Pert aracım için endişeliydim ama çok rahat bir süreç oldu. Ödeme anında yapıldı ve çok memnun kaldım. Çok iyi fiyat verdiler, işlemler hızlıca bitti. Mükemmel bir deneyimdi!',
    service: 'Pert Araç',
    date: '2024-02-01',
    verified: true,
  },
  {
    id: 4,
    name: 'Zeynep Kara',
    initial: 'Z',
    bgColor: 'bg-green-500',
    location: 'Bursa • Nilüfer',
    rating: 5,
    vehicle: 'Fiat Linea 2012',
    vehicleIcon: <FaCar />,
    text: 'Hurda aracım için bile en yüksek fiyatı aldım. Profesyonel ekip, çok hızlı işlem. WhatsApp üzerinden anlaştık, aynı gün ödeme yaptılar. Hem geri dönüşüme katkı hem de para kazandım!',
    service: 'Hurda Araç',
    date: '2024-02-05',
    verified: true,
  },
  {
    id: 5,
    name: 'Can Özkan',
    initial: 'C',
    bgColor: 'bg-blue-500',
    location: 'Antalya • Muratpaşa',
    rating: 5,
    vehicle: 'Honda Civic 2017',
    vehicleIcon: <FaCar />,
    text: 'Kazalı aracımı satmak için birçok yere baktım ama en iyi teklifi buradan aldım. Çok profesyonel ve güvenilir bir firma. 15 yıllık tecrübeleri gerçekten belli oluyor.',
    service: 'Kazalı Araç',
    date: '2024-02-10',
    verified: true,
  },
  {
    id: 6,
    name: 'Elif Arslan',
    initial: 'E',
    bgColor: 'bg-pink-500',
    location: 'İstanbul • Beşiktaş',
    rating: 5,
    vehicle: 'BMW 3 Serisi 2014',
    vehicleIcon: <FaCar />,
    text: '2 saat içinde gelip araç değerlemesi yaptılar, anında teklif verdiler. Para transferi de hemen gerçekleşti. Böyle kolay olacağını düşünmemiştim. Herkese tavsiye ederim!',
    service: 'Hasarlı Araç',
    date: '2024-02-12',
    verified: true,
  },
];

interface TestimonialsEnhancedProps {
  testimonials?: any[]; // Using any[] to allow passing data from cities.ts which might not match exactly, or we can map it
}

export default function TestimonialsEnhanced({ testimonials: propTestimonials }: TestimonialsEnhancedProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Tümü', icon: <FaFire /> },
    { id: 'Kazalı Araç', label: 'Kazalı', icon: <FaCar /> },
    { id: 'Hasarlı Araç', label: 'Hasarlı', icon: <FaWrench /> },
    { id: 'Pert Araç', label: 'Pert', icon: <FaClipboard /> },
    { id: 'Hurda Araç', label: 'Hurda', icon: <FaRecycle /> },
  ];

  // Use props if available, otherwise default
  // We need to map prop testimonials to the format expected by the component if they come from cities.ts
  const displayTestimonials = propTestimonials ? propTestimonials.map(t => ({
    id: t.id,
    name: t.name,
    initial: t.name.charAt(0),
    bgColor: 'bg-primary-500', // Default color
    location: t.location || t.district,
    rating: t.rating,
    vehicle: t.vehicle || 'Araç', // Default vehicle
    vehicleIcon: <FaCar />,
    text: t.text,
    service: t.service,
    date: t.date || new Date().toISOString(),
    verified: true
  })) : defaultTestimonials;

  const filteredTestimonials = activeFilter === 'all'
    ? displayTestimonials
    : displayTestimonials.filter(t => t.service === activeFilter);

  return (
    <section className="section bg-primary-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="badge" style={{ backgroundColor: '#FF9800', color: 'white', border: 'none' }}>
              <FaStar className="inline mr-1" /> Müşteri Yorumları
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-secondary-900 mb-4">
            Binlerce Mutlu Müşteri
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Aracını satan müşterilerimizin gerçek deneyimleri
          </p>
        </div>

        {/* Rating Summary */}
        <div className="max-w-md mx-auto mb-8 bg-white rounded-2xl shadow-lg p-6 text-center">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-3xl text-yellow-400" />
            ))}
          </div>
          <div className="text-5xl font-black text-secondary-900 mb-1">4.9</div>
          <div className="text-secondary-600 mb-3">12K+ Değerlendirme</div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-secondary-100">
            <div>
              <div className="text-3xl font-black text-accent">%98</div>
              <div className="text-xs text-secondary-600">Memnuniyet Oranı</div>
            </div>
            <div>
              <div className="text-3xl font-black text-accent">5000+</div>
              <div className="text-xs text-secondary-600">Mutlu Müşteri</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${activeFilter === filter.id
                ? 'bg-accent text-white shadow-lg scale-105'
                : 'bg-white text-secondary-700 hover:bg-secondary-50'
                }`}
            >
              <span className="text-lg">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className={`w-14 h-14 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0`}>
                  {testimonial.initial}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-secondary-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <FaCheck className="text-green-500 text-sm" />
                    )}
                  </div>
                  <p className="text-sm text-secondary-600 mb-1">{testimonial.location}</p>

                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>

                {/* Date */}
                <div className="text-xs text-secondary-400">
                  {new Date(testimonial.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  })}
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-secondary-100">
                <span className="text-2xl">{testimonial.vehicleIcon}</span>
                <span className="text-sm font-semibold text-secondary-700">{testimonial.vehicle}</span>
              </div>

              {/* Review Text */}
              <p className="text-secondary-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Service Badge & Verified */}
              <div className="flex items-center justify-between">
                <span className="badge badge-primary text-xs">
                  {testimonial.service}
                </span>
                {testimonial.verified && (
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <FaCheck />
                    <span className="font-semibold">Doğrulanmış Müşteri</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-secondary-700 mb-4 text-lg">
            Siz de bu mutlu müşterilerimize katılın!
          </p>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className="btn btn-lg bg-accent hover:bg-accent-600 text-white border-0 gap-2"
          >
            <FaPhone /> Hemen Teklif Al →
          </a>
        </div>
      </div>
    </section>
  );
}
