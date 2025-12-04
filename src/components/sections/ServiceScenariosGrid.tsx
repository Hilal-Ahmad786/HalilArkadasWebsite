'use client';

import React from 'react';
import { FaCheckCircle, FaCarCrash, FaFileInvoiceDollar, FaTools, FaExchangeAlt, FaCogs, FaWrench, FaPaintRoller, FaBolt, FaClipboardCheck, FaFileExcel, FaBalanceScale, FaQuestionCircle, FaCarSide, FaBiohazard, FaCreditCard, FaScrewdriver } from 'react-icons/fa';

interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  weHandle: string[];
}

interface ServiceScenariosProps {
  serviceType: 'kazali' | 'hasarli' | 'pert' | 'hurda';
}

const scenarios: Record<string, Scenario[]> = {
  kazali: [
    {
      id: '1',
      title: 'Kaza Yaptım, Tamir Masrafı Çok Yüksek',
      description: 'Aracınız kaza yaptı ve tamir maliyeti aracın değerinin yarısından fazla',
      icon: <FaCarCrash />,
      weHandle: [
        'Aracı olduğu gibi alıyoruz',
        'Hasar fotoğrafları yeterli',
        'Tamir masrafı ödemiyorsunuz',
        'Anında nakit teklif'
      ]
    },
    {
      id: '2',
      title: 'Sigorta Ödemesi Yetersiz',
      description: 'Sigorta şirketinin verdiği hasar bedeli aracın değerinin altında',
      icon: <FaFileInvoiceDollar />,
      weHandle: [
        'Sigorta ödemesinin üzerine ek ödeme',
        'Daha yüksek piyasa değeri',
        'Hızlı değerlendirme',
        'Ekstra kazanç'
      ]
    },
    {
      id: '3',
      title: 'Airbag Patlamış, Şase Hasarlı',
      description: 'Ağır kaza sonrası araç kullanılamaz durumda',
      icon: <FaTools />,
      weHandle: [
        'Ağır hasar alımı yapıyoruz',
        'Ücretsiz çekici hizmeti',
        'Tüm evrakları hallederiz',
        'En yüksek fiyat garantisi'
      ]
    },
    {
      id: '4',
      title: 'Kaza Sonrası Satmak İstiyorum',
      description: 'Kazadan sonra araca güven kalmadı, satmak istiyorum',
      icon: <FaExchangeAlt />,
      weHandle: [
        'Hemen alıyoruz',
        'Psikolojik değer kaybı yok',
        'Adil fiyat teklifi',
        'Hızlı işlem'
      ]
    }
  ],
  hasarli: [
    {
      id: '1',
      title: 'Motor Arızalı, Tamir Çok Pahalı',
      description: 'Motor bozuldu ve tamir maliyeti 50,000 TL üzerinde',
      icon: <FaCogs />,
      weHandle: [
        'Arızalı motorla alıyoruz',
        'Tamir ettirmenize gerek yok',
        'Motorlu/motorsuz fark etmez',
        'Gerçek değerinde ödeme'
      ]
    },
    {
      id: '2',
      title: 'Şanzıman Bozuk, Satmak İstiyorum',
      description: 'Şanzıman arızası var, tamir ettirmek istemiyorum',
      icon: <FaWrench />,
      weHandle: [
        'Şanzıman arızalı alıyoruz',
        'Tamir masrafı yok',
        'Hemen nakit ödeme',
        'Ücretsiz çekici'
      ]
    },
    {
      id: '3',
      title: 'Boyalı Parça Çok, Değer Kaybı Var',
      description: 'Çok boyalı parça var, ikinci el değeri düşük',
      icon: <FaPaintRoller />,
      weHandle: [
        'Boyalı araç fark etmez',
        'Adil değerleme yapıyoruz',
        'Piyasa fiyatı veriyoruz',
        'Hızlı alım'
      ]
    },
    {
      id: '4',
      title: 'Elektrik Sistemi Arızalı',
      description: 'Elektronik aksamda sürekli arıza oluyor',
      icon: <FaBolt />,
      weHandle: [
        'Elektrik arızalı alıyoruz',
        'Arıza tespiti gerekmez',
        'Olduğu gibi değerleme',
        'Anında teklif'
      ]
    }
  ],
  pert: [
    {
      id: '1',
      title: 'Sigorta Aracı Pert Çıkardı',
      description: 'Kasko şirketi aracı total hasar (pert) ilan etti',
      icon: <FaClipboardCheck />,
      weHandle: [
        'Pert evraklarını hallederiz',
        'Sigortadan fazla ödeme',
        'Noter işlemleri bizden',
        'Hızlı kapanış'
      ]
    },
    {
      id: '2',
      title: 'Pert İlanı Var, Satamıyorum',
      description: 'Pert ilanı olduğu için alıcı bulamıyorum',
      icon: <FaFileExcel />,
      weHandle: [
        'Pert ilanı sorun değil',
        'Özel alım yapıyoruz',
        'Tüm yasal süreç bizden',
        'En iyi fiyat'
      ]
    },
    {
      id: '3',
      title: 'Noter Pert İstiyorum',
      description: 'Aracı hurdaya çıkarmak istiyorum ama nasıl yapacağımı bilmiyorum',
      icon: <FaBalanceScale />,
      weHandle: [
        'Noter pert işlemleri',
        'Tüm evraklar tarafımızdan',
        'MTV borcunu kapatıyoruz',
        'Sorunsuz işlem'
      ]
    },
    {
      id: '4',
      title: 'Pert Aracın Değeri Nedir?',
      description: 'Pert aracımın ne kadara satılacağını bilmiyorum',
      icon: <FaQuestionCircle />,
      weHandle: [
        'Ücretsiz değerleme',
        'Hurda + kullanılabilir parça değeri',
        '30 dakikada fiyat',
        'Piyasa araştırması'
      ]
    }
  ],
  hurda: [
    {
      id: '1',
      title: 'Araç Çok Eski, Kullanılamıyor',
      description: '15+ yaşında, çalışmayan veya kullanılamaz durumdaki araç',
      icon: <FaCarSide />,
      weHandle: [
        'Yaş fark etmez',
        'Çalışmasa da alıyoruz',
        'Hurda değerinde ödeme',
        'Çevre dostu geri dönüşüm'
      ]
    },
    {
      id: '2',
      title: 'Bahçede Pas Tutuyor',
      description: 'Yıllardır kullanılmayan, paslanmış araç',
      icon: <FaBiohazard />,
      weHandle: [
        'Paslı da alıyoruz',
        'Yerinden çekici ile alırız',
        'Bahçenizi temizleriz',
        'Hemen nakit ödeme'
      ]
    },
    {
      id: '3',
      title: 'MTV Borcu Çok Yüksek',
      description: 'Yıllardır ödenmeyen MTV borcu birikmişş',
      icon: <FaCreditCard />,
      weHandle: [
        'MTV borcunu hallederiz',
        'Hurdaya çıkarma desteği',
        'Borçtan kurtarıyoruz',
        'Yasal kapanış'
      ]
    },
    {
      id: '4',
      title: 'Parçaları Eksik',
      description: 'Motor, lastik veya diğer parçalar eksik',
      icon: <FaScrewdriver />,
      weHandle: [
        'Parça eksik olsa da alırız',
        'Hurda ağırlığına göre değer',
        'Olduğu gibi teslim alırız',
        'Fiyat farkı yapmayız'
      ]
    }
  ]
};

export default function ServiceScenariosGrid({ serviceType }: ServiceScenariosProps) {
  const serviceScenarios = scenarios[serviceType] || scenarios.kazali;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-bold text-sm mb-4">
            ÖZEL DURUMLAR
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">
            Bu Durumlarda Da Aracınızı Alıyoruz
          </h2>
          <p className="text-lg text-gray-600">
            Müşterilerimizin karşılaştığı yaygın senaryolar ve bizim sunduğumuz çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {serviceScenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all group"
            >
              <div className="text-5xl mb-4 text-primary-500">{scenario.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {scenario.title}
              </h3>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {scenario.description}
              </p>

              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">
                  ✨ Bizim Çözümümüz:
                </p>
                {scenario.weHandle.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-accent to-accent-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Sizin Durumunuz Da Listede Var mı?</h3>
          <p className="text-accent-100 mb-6 max-w-2xl mx-auto">
            Her durum özeldir. Yukarıda görmediğiniz bir senaryodaysanız, yine de bize ulaşın. 15 yıldır her türlü duruma çözüm üretiyoruz.
          </p>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className="btn bg-white hover:bg-gray-100 text-accent font-bold"
          >
            Durumunuzu Anlatın, Çözüm Bulalım
          </a>
        </div>
      </div>
    </section>
  );
}
