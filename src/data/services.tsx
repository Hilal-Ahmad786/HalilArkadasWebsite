// src/data/services.ts
import { Service } from './types';
import { FaCar, FaBolt, FaMoneyBillWave, FaTruck, FaFileAlt, FaCheckCircle, FaBuilding, FaWrench, FaPaintBrush, FaCogs, FaMoneyBill, FaClipboardList, FaBalanceScale, FaRecycle } from 'react-icons/fa';

export const services: Service[] = [
  {
    id: 'kazali',
    slug: 'kazali-arac-alim',
    title: 'Kazalı Araç Alımı',
    shortTitle: 'Kazalı Araç',
    icon: <FaCar />,
    color: 'accent',

    metaTitle: 'Kazalı Araç Alımı - En Yüksek Fiyat Garantisi | Kazalı Araç Alım Satım',
    metaDescription: 'Kazalı aracınızı en yüksek fiyata satın alıyoruz. 30 dakikada teklif, anında nakit ödeme. Ücretsiz ekspertiz ve çekici hizmeti. Tüm Türkiye\'ye hizmet.',
    keywords: [
      'kazalı araç alımı',
      'kaza yapmış araç satmak',
      'kazalı araç satan',
      'kazalı araç fiyatı',
      'kazalı araç nasıl satılır',
    ],

    hero: {
      badge: <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center"><FaCar className="text-accent-400" /> 81 İl'de Kazalı Araç Alım Satım "En İyi Teklif Bizde"</span>,
      title: 'KAZALI ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'Kaza yapmış aracınızı anında değerlendirip en yüksek fiyatı veriyoruz. 30 dakikada teklif alın.',
    },

    features: [
      {
        icon: <FaBolt />,
        title: 'Hızlı Değerlendirme',
        description: '30 dakika içinde uzman ekibimiz aracınızı değerlendirir ve teklif verir.',
      },
      {
        icon: <FaMoneyBillWave />,
        title: 'En Yüksek Fiyat',
        description: 'Kazalı araçlar için piyasanın en iyi fiyatlarını sunuyoruz.',
      },
      {
        icon: <FaTruck />,
        title: 'Ücretsiz Çekici',
        description: 'Aracınızı bulunduğu yerden ücretsiz olarak alıyoruz.',
      },
      {
        icon: <FaFileAlt />,
        title: 'Tüm Evraklar',
        description: 'Noter, tapu ve tüm resmi işlemler tarafımızdan yapılır.',
      },
      {
        icon: <FaCheckCircle />,
        title: 'Anında Ödeme',
        description: 'Anlaşma sonrası hemen nakit veya havale ile ödeme yapıyoruz.',
      },
      {
        icon: <FaBuilding />,
        title: 'Güvenli İşlem',
        description: '15 yıllık tecrübe ile güvenli ve şeffaf hizmet.',
      },
    ],

    faqs: [
      {
        question: 'Kazalı aracımın değeri nasıl belirlenir?',
        answer: 'Uzman ekibimiz aracınızın marka, model, yıl, hasar durumu ve piyasa koşullarını değerlendirerek en adil fiyatı belirler. 30 dakika içinde ücretsiz ekspertiz sonucu alırsınız.',
        category: 'genel',
      },
      {
        question: 'Çok hasarlı kazalı araçları da alıyor musunuz?',
        answer: 'Evet, hasar durumu ne olursa olsun tüm kazalı araçları satın alıyoruz. Toplam hasar, ağır hasar veya orta hasarlı tüm araçlar için teklif veriyoruz.',
        category: 'genel',
      },
      {
        question: 'Kazalı araç satarken hangi belgeler gerekir?',
        answer: 'Araç ruhsatı, kimlik fotokopisi ve varsa ekspertiz raporu yeterlidir. Eksik belgeler için size yardımcı oluyoruz.',
        category: 'belgeler',
      },
      {
        question: 'Kasko değerinin altında araç alıyor musunuz?',
        answer: 'Hayır, kasko şirketinin verdiği değerin altında teklif vermiyoruz. Genellikle piyasa değerinin üzerinde fiyat sunuyoruz.',
        category: 'fiyat',
      },
      {
        question: 'Kazalı araç satışında noter işlemi nasıl oluyor?',
        answer: 'Tüm noter işlemlerini biz yapıyoruz. Siz sadece kimliğinizle gelmeniz yeterli. Masraflar tarafımızdan karşılanır.',
        category: 'islem',
      },
    ],

    content: {
      intro: 'Kaza yapmış aracınızı en karlı şekilde satmanın adresi Kazalı Araç Alım Satım! 15 yıllık tecrübemizle kazalı araç alımında Türkiye\'nin lider firmasıyız.',
      details: [
        'Hafif, orta ve ağır hasarlı tüm kazalı araçları satın alıyoruz',
        'Marka, model ve yıl fark etmeksizin tüm araçlar için değerlendirme',
        '30 dakika içinde ücretsiz ekspertiz ve fiyat teklifi',
        'Anında nakit veya havale ile ödeme seçeneği',
        'Ücretsiz çekici hizmeti ile aracınızı bulunduğu yerden alma',
        'Noter, tapu ve tüm resmi işlemlerin yapılması',
      ],
      whyUs: [
        'Piyasanın en yüksek fiyatlarını sunuyoruz',
        '15 yıldır sektörde güvenilir hizmet veriyoruz',
        'Şeffaf ve dürüst değerlendirme yapıyoruz',
        'Hızlı ve sorunsuz işlem garantisi',
        'Tüm Türkiye\'ye hizmet veriyoruz',
      ],
    },

    image: '/images/kazali-arac.jpg',
    order: 1,
    published: true,
  },

  {
    id: 'hasarli',
    slug: 'hasarli-arac-alim',
    title: 'Hasarlı Araç Alımı',
    shortTitle: 'Hasarlı Araç',
    icon: <FaWrench />,
    color: 'accent',

    metaTitle: 'Hasarlı Araç Alımı - Hızlı ve Güvenli İşlem | Kazalı Araç Alım Satım',
    metaDescription: 'Hasarlı aracınızı anında değerlendirip en yüksek fiyatı veriyoruz. Tüm hasar türleri için profesyonel hizmet. Ücretsiz çekici ve ekspertiz.',
    keywords: [
      'hasarlı araç alımı',
      'hasarlı araç satmak',
      'hasarlı araç fiyatı',
      'hasarlı araç değeri',
      'hasarlı araç satan yerler',
    ],

    hero: {
      badge: <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center"><FaWrench className="text-accent-400" /> 81 İl'de Hasarlı Araç Alım Satım "En İyi Teklif Bizde"</span>,
      title: 'HASARLI ARACINIZI',
      titleHighlight: 'NAKDE ÇEVİRİN',
      subtitle: 'Boya, kaporta veya mekanik hasarlı aracınız için en iyi fiyatı alın. Anında değerlendirme ve ödeme.',
    },

    features: [
      {
        icon: <FaPaintBrush />,
        title: 'Boya Hasarı',
        description: 'Boya ve kaporta hasarlı araçlar için özel fiyatlandırma.',
      },
      {
        icon: <FaCogs />,
        title: 'Mekanik Hasar',
        description: 'Motor, şanzıman ve diğer mekanik hasarlar için değerlendirme.',
      },
      {
        icon: <FaCar />,
        title: 'Tüm Hasar Türleri',
        description: 'Her türlü hasarlı araç için profesyonel hizmet.',
      },
      {
        icon: <FaMoneyBill />,
        title: 'Adil Fiyat',
        description: 'Hasar durumuna göre en adil fiyatı sunuyoruz.',
      },
      {
        icon: <FaClipboardList />,
        title: 'Kolay İşlem',
        description: 'Tüm evrak ve işlemler bizden, size sadece kimlik yeterli.',
      },
      {
        icon: <FaTruck />,
        title: 'Ücretsiz Taşıma',
        description: 'Aracınızı ücretsiz olarak alıp götürüyoruz.',
      },
    ],

    faqs: [
      {
        question: 'Hangi tür hasarlı araçları alıyorsunuz?',
        answer: 'Boya hasarı, kaporta hasarı, mekanik hasar, elektrik hasarı gibi tüm hasar türlerindeki araçları satın alıyoruz.',
        category: 'genel',
      },
      {
        question: 'Hasarlı araç satarken ekspertiz raporu gerekli mi?',
        answer: 'Ekspertiz raporu zorunlu değil ama varsa değerlendirmemizi kolaylaştırır. Yoksa bizim uzman ekibimiz ücretsiz değerlendirme yapar.',
        category: 'belgeler',
      },
      {
        question: 'Boyalı araç değerini düşürür mü?',
        answer: 'Evet, boyalı parça sayısı ve kalitesi değeri etkiler. Ancak biz hasarlı araçlar konusunda uzmanyız ve adil fiyat sunuyoruz.',
        category: 'fiyat',
      },
      {
        question: 'Hasarlı araç satışında ne kadar sürede para alırım?',
        answer: 'Anlaşma sağlandıktan sonra hemen ödeme yapıyoruz. Nakit veya havale seçenekleri mevcuttur.',
        category: 'islem',
      },
    ],

    content: {
      intro: 'Hasarlı aracınızı satmak artık çok kolay! Kazalı Araç Alım Satım olarak boya, kaporta ve mekanik hasarlı tüm araçları en yüksek fiyatla satın alıyoruz.',
      details: [
        'Boya ve kaporta hasarı olan araçlar',
        'Motor, şanzıman ve mekanik hasarlı araçlar',
        'Elektrik ve elektronik sistemlerde hasar olan araçlar',
        'Çarpma, çizik ve ezilme hasarı olan araçlar',
        'Tüm marka ve modeller için değerlendirme',
      ],
      whyUs: [
        'Hasarlı araç konusunda uzman ekip',
        'En yüksek fiyat garantisi',
        'Hızlı ve güvenilir işlem',
        'Ücretsiz ekspertiz hizmeti',
        'Tüm Türkiye\'ye hizmet',
      ],
    },

    image: '/images/hasarli-arac.jpg',
    order: 2,
    published: true,
  },

  {
    id: 'pert',
    slug: 'pert-arac-alim',
    title: 'Pert Araç Alımı',
    shortTitle: 'Pert Araç',
    icon: <FaFileAlt />,
    color: 'accent',

    metaTitle: 'Pert Araç Alımı - Hızlı Alım ve Satım | Kazalı Araç Alım Satım',
    metaDescription: 'Pert ilanı olan aracınızı hemen satın alıyoruz. Tüm pert işlemleri ve evraklar tarafımızdan yapılır. Anında nakit ödeme.',
    keywords: [
      'pert araç alımı',
      'pert araç satmak',
      'pert ilanı olan araç',
      'pert aracım kaç para',
      'pert araç nasıl satılır',
    ],

    hero: {
      badge: <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center"><FaFileAlt className="text-accent-400" /> 81 İl'de Pert Araç Alım Satım "En İyi Teklif Bizde"</span>,
      title: 'PERT ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'Pert ilanı olan aracınız için profesyonel hizmet. Tüm evrak işlemleri ve en iyi fiyat garantisi.',
    },

    features: [
      {
        icon: <FaClipboardList />,
        title: 'Tüm Pert Türleri',
        description: 'Sigorta pert, noter pert ve tüm pert türleri için hizmet.',
      },
      {
        icon: <FaBalanceScale />,
        title: 'Yasal İşlemler',
        description: 'Tüm yasal süreçleri biz yönetiyoruz.',
      },
      {
        icon: <FaMoneyBillWave />,
        title: 'Yüksek Teklif',
        description: 'Pert araçlar için en yüksek piyasa fiyatını veriyoruz.',
      },
      {
        icon: <FaFileAlt />,
        title: 'Evrak Desteği',
        description: 'Eksik evraklar için tam destek sağlıyoruz.',
      },
      {
        icon: <FaTruck />,
        title: 'Ücretsiz Çekici',
        description: 'Aracınızı bulunduğu yerden ücretsiz alıyoruz.',
      },
      {
        icon: <FaCheckCircle />,
        title: 'Hızlı İşlem',
        description: 'Pert işlemleri hızlı ve sorunsuz tamamlanır.',
      },
    ],

    faqs: [
      {
        question: 'Pert ilanı olan araç satılır mı?',
        answer: 'Evet, pert ilanı olan araçları satın alıyoruz. Tüm pert işlemlerini biz hallederiz.',
        category: 'genel',
      },
      {
        question: 'Pert araç değeri nasıl hesaplanır?',
        answer: 'Aracın marka, model, yıl, hasar durumu ve hurda değeri hesaplanarak en adil fiyat belirlenir.',
        category: 'fiyat',
      },
      {
        question: 'Pert aracın evrakları nasıl yapılır?',
        answer: 'Tüm pert evrak işlemlerini ve noter işlemlerini biz yapıyoruz. Size sadece kimlik fotokopisi yeterli.',
        category: 'islem',
      },
      {
        question: 'Sigorta pert ilanı ile noter pert ilanı aynı mı?',
        answer: 'Hayır, farklıdır. Sigorta pert, sigortanın hasar sonucu verdiği karardır. Noter pert ise mal sahibinin isteğiyle yapılan işlemdir.',
        category: 'genel',
      },
    ],

    content: {
      intro: 'Pert ilanı olan aracınızı satmak için doğru adrestesiniz. Kazalı Araç Alım Satım olarak tüm pert araç türleri için profesyonel alım hizmeti sunuyoruz.',
      details: [
        'Sigorta şirketleri tarafından pert ilan edilen araçlar',
        'Noter pert ilanı olan araçlar',
        'Hasar sonucu pert olan tüm araçlar',
        'Pert evrakları ve işlemleri tam destek',
        'Hurda değeri üzerinden en yüksek fiyat',
      ],
      whyUs: [
        'Pert araç konusunda 15 yıllık tecrübe',
        'Tüm yasal süreçleri yönetiyoruz',
        'En yüksek fiyat garantisi',
        'Hızlı ve güvenli ödeme',
        'Profesyonel hizmet anlayışı',
      ],
    },

    image: '/images/pert-arac.jpg',
    order: 3,
    published: true,
  },

  {
    id: 'hurda',
    slug: 'hurda-arac-alim',
    title: 'Hurda Araç Alımı',
    shortTitle: 'Hurda Araç',
    icon: <FaRecycle />,
    color: 'accent',

    metaTitle: 'Hurda Araç Alımı - Çevre Dostu Geri Dönüşüm | Kazalı Araç Alım Satım',
    metaDescription: 'Hurda aracınızı çevre dostu yöntemlerle satın alıyoruz. En yüksek hurda fiyatı, ücretsiz çekici ve hızlı işlem garantisi.',
    keywords: [
      'hurda araç alımı',
      'hurda araç fiyatı',
      'hurda araç teslim',
      'hurda araç geri dönüşüm',
      'eski araç satmak',
    ],

    hero: {
      badge: <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center"><FaRecycle className="text-accent-400" /> 81 İl'de Hurda Araç Alım Satım "En İyi Teklif Bizde"</span>,
      title: 'HURDA ARACINIZ',
      titleHighlight: 'ÇEVRE DOSTU GERİ DÖNÜŞÜM',
      subtitle: 'Eski ve kullanılamaz aracınızı çevreye zarar vermeden geri dönüştürüyoruz. En yüksek hurda fiyatı.',
    },

    features: [
      {
        icon: <FaRecycle />,
        title: 'Çevre Dostu',
        description: 'Araçları çevre dostu yöntemlerle geri dönüştürüyoruz.',
      },
      {
        icon: <FaMoneyBillWave />,
        title: 'En Yüksek Hurda Fiyatı',
        description: 'Piyasanın en iyi hurda fiyatlarını sunuyoruz.',
      },
      {
        icon: <FaTruck />,
        title: 'Ücretsiz Çekici',
        description: 'Hurda aracınızı ücretsiz olarak teslim alıyoruz.',
      },
      {
        icon: <FaFileAlt />,
        title: 'Hurdaya Çıkarma İşlemi',
        description: 'Tüm hurdaya çıkarma evraklarını yapıyoruz.',
      },
      {
        icon: <FaBolt />,
        title: 'Hızlı İşlem',
        description: 'Aynı gün içinde işlem ve ödeme yapılır.',
      },
      {
        icon: <FaCheckCircle />,
        title: 'Yasal Güvence',
        description: 'Tüm işlemler yasal prosedürlere uygun yapılır.',
      },
    ],

    faqs: [
      {
        question: 'Hurda araç nasıl değerlendirilir?',
        answer: 'Aracın ağırlığı, metal türleri ve piyasa hurda fiyatları dikkate alınarak değerlendirme yapılır.',
        category: 'fiyat',
      },
      {
        question: 'Çalışmayan araç da alıyor musunuz?',
        answer: 'Evet, çalışmayan, hareket etmeyen veya parçaları eksik araçları da satın alıyoruz.',
        category: 'genel',
      },
      {
        question: 'Hurda araç tesliminde hangi belgeler gerekir?',
        answer: 'Araç ruhsatı ve kimlik fotokopisi yeterlidir. Hurdaya çıkarma işlemlerini biz yapıyoruz.',
        category: 'belgeler',
      },
      {
        question: 'Aracı hurdaya çıkardığımda MTV ödemem devam eder mi?',
        answer: 'Hayır, araç resmi olarak hurdaya çıkarıldıktan sonra MTV ödeme yükümlülüğünüz sona erer.',
        category: 'islem',
      },
      {
        question: 'Hurda araç paraya çevrilir mi?',
        answer: 'Evet, hurda değeri üzerinden araç için ödeme yapıyoruz. Anlık hurda fiyatlarına göre değerlendirme.',
        category: 'fiyat',
      },
    ],

    content: {
      intro: 'Eski ve kullanılamaz hale gelen aracınızı çevre dostu yöntemlerle geri dönüştürüyor ve en yüksek hurda fiyatını ödüyoruz.',
      details: [
        'Çalışmayan, hareket etmeyen tüm araçlar',
        'Parçaları eksik veya hasarlı araçlar',
        'Yaşlı ve kullanılamaz durumdaki araçlar',
        'Çevre dostu geri dönüşüm süreci',
        'Yasal hurdaya çıkarma işlemleri',
      ],
      whyUs: [
        'En yüksek hurda fiyatları',
        'Çevre dostu geri dönüşüm',
        'Tüm yasal işlemler tarafımızdan',
        'Aynı gün ödeme',
        'Ücretsiz çekici hizmeti',
      ],
    },

    image: '/images/hurda-arac.jpg',
    order: 4,
    published: true,
  },
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

// Helper function to get all published services
export const getPublishedServices = (): Service[] => {
  return services.filter(service => service.published).sort((a, b) => a.order - b.order);
};
