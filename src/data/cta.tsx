// src/data/cta.tsx
import { CTASection } from './types';
import { FaRocket, FaMoneyBillWave } from 'react-icons/fa';

export const ctaSections: CTASection[] = [
  {
    id: 'cta-1',
    badge: <span className="flex items-center gap-2"><FaRocket /> HEMEN BAŞLAYIN</span>,
    title: 'Aracınızı Satmak',
    titleHighlight: '30 Dakika Sürer',
    description: 'Hemen arayın, 30 dakika içinde ücretsiz ekspertiz ve fiyat teklifi alın. İşlemler tamamen ücretsiz!',
    primaryButton: {
      text: 'Hemen Ara',
      action: 'phone',
    },
    secondaryButton: {
      text: 'WhatsApp Mesaj',
      action: 'whatsapp',
    },
  },
  {
    id: 'cta-2',
    badge: <span className="flex items-center gap-2"><FaMoneyBillWave /> EN YÜKSEK FİYAT</span>,
    title: 'Aracınız İçin',
    titleHighlight: 'En İyi Teklifi Alın',
    description: 'Piyasanın en yüksek fiyatlarını garanti ediyoruz. Anında değerlendirme ve nakit ödeme!',
    primaryButton: {
      text: 'Teklif Alın',
      action: 'phone',
    },
    secondaryButton: {
      text: 'WhatsApp',
      action: 'whatsapp',
    },
  },
  {
    id: 'cta-3',
    title: 'Hala Bekliyor musunuz?',
    titleHighlight: 'Hemen Arayın!',
    description: 'Aracınızı en yüksek fiyata satmanın tam zamanı. 7/24 hizmetinizdeyiz.',
    primaryButton: {
      text: '0 555 751 22 20',
      action: 'phone',
    },
    secondaryButton: {
      text: 'WhatsApp ile Yaz',
      action: 'whatsapp',
    },
    background: 'gradient',
  },
];
