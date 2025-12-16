// src/data/site.tsx
import { SiteConfig } from './types';
import { FaTrophy, FaBolt, FaCheckCircle, FaSmile, FaMoneyBillWave, FaTruck, FaFileAlt, FaBuilding } from 'react-icons/fa';

export const siteConfig: SiteConfig = {
  name: 'Kazalı Araç Alım Satım',
  description: 'Türkiye\'nin en güvenilir hasarlı, kazalı, pert ve hurda araç alım platformu. 30 dakikada teklif, anında nakit ödeme.',
  tagline: 'Aracınızı En Yüksek Fiyata Satın Alıyoruz',

  // Contact Information (Replace with real numbers)
  phone: '+905551234567',
  phoneDisplay: '0555 123 45 67',
  whatsapp: '905551234567',
  email: 'info@kazaliaracalimsatim.com',
  address: 'İvedik OSB Mahallesi, 1468. Cadde No: 56, Yenimahalle/Ankara',

  // Social Media
  social: {
    facebook: 'https://facebook.com/otomotoalim',
    instagram: 'https://instagram.com/otomotoalim',
  },

  // Business Info
  businessHours: 'Pazartesi - Pazar: 08:00 - 22:00',
  logo: '/images/logo.jpeg',
};

// Stats for homepage
export const stats = [
  {
    value: '15+',
    label: 'Yıllık Tecrübe',
    icon: <FaTrophy />,
  },
  {
    value: '7/24',
    label: 'Hızlı Destek',
    icon: <FaBolt />,
  },
  {
    value: '%100',
    label: 'Güvenli İşlem',
    icon: <FaCheckCircle />,
  },
  {
    value: '5000+',
    label: 'Mutlu Müşteri',
    icon: <FaSmile />,
  },
];

// Homepage features
export const homeFeatures = [
  {
    icon: <FaBolt />,
    title: 'Anında Değerlendirme',
    description: '30 dakika içinde ücretsiz ekspertiz ve fiyat teklifi alın.',
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'En Yüksek Fiyat',
    description: 'Piyasanın en iyi fiyatlarını garanti ediyoruz.',
  },
  {
    icon: <FaTruck />,
    title: 'Ücretsiz Çekici',
    description: 'Aracınızı bulunduğu yerden ücretsiz alıyoruz.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Tüm Evraklar Bizden',
    description: 'Noter, tapu ve tüm resmi işlemler tarafımızdan yapılır.',
  },
  {
    icon: <FaBuilding />,
    title: 'Kurumsal Hizmet',
    description: '15 yıllık tecrübe ile güvenli ve profesyonel hizmet.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Anında Nakit',
    description: 'Anlaştığımız fiyat anında nakit veya havale ile ödenir.',
  },
];
