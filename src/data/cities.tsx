// src/data/cities.tsx
import { City } from './types';
import { FaCar, FaBolt, FaMoneyBillWave, FaTruck, FaFileAlt, FaBuilding, FaCity, FaLandmark, FaWater, FaMountain, FaUmbrellaBeach } from 'react-icons/fa';

export const cities: Record<string, City> = {
  'istanbul': {
    id: 'istanbul',
    slug: 'istanbul',
    name: 'İstanbul',
    region: 'Marmara',

    metaTitle: 'İstanbul Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Otomoto Alım',
    metaDescription: 'İstanbul\'da kazalı, hasarlı, pert ve hurda araç alımı. Avrupa ve Anadolu yakası hizmet. 2 saat içinde teklif. 0555 123 45 67',
    keywords: [
      'istanbul kazalı araç alan',
      'istanbul hasarlı araç alan',
      'istanbul pert araç alan',
      'istanbul hurda araç alan',
      'kadıköy araç alım',
      'beşiktaş araç alım',
      'şişli araç alım',
    ],

    hero: {
      badge: <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center"><FaCity className="text-accent-400" /> İSTANBUL ARAÇ ALIM</span>,
      title: 'İSTANBUL\'DA ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'İstanbul\'un tüm ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı. 2 saat içinde ücretsiz ekspertiz.',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '15 Milyon',
      coverage: [
        'Kadıköy', 'Beşiktaş', 'Şişli', 'Üsküdar', 'Fatih',
        'Bakırköy', 'Maltepe', 'Ataşehir', 'Pendik', 'Kartal',
        'Sultanbeyli', 'Tuzla', 'Çekmeköy', 'Sancaktepe', 'Ümraniye',
        'Sarıyer', 'Eyüpsultan', 'Beyoğlu', 'Kağıthane', 'Başakşehir',
        'Avcılar', 'Küçükçekmece', 'Bahçelievler', 'Güngören', 'Esenler',
        'Bayrampaşa', 'Gaziosmanpaşa', 'Sultangazi', 'Arnavutköy', 'Esenyurt',
        'Büyükçekmece', 'Çatalca', 'Silivri', 'Şile', 'Beykoz',
        'Adalar', 'Sultanbeyli', 'Zeytinburnu'
      ],
      responseTime: '2 saat içinde',
      localOffice: 'Şişli Merkez Ofis',
    },

    features: [
      {
        icon: <FaCar />,
        title: 'Tüm İlçelere Hizmet',
        description: '39 ilçede hızlı ve ücretsiz hizmet.',
      },
      {
        icon: <FaBolt />,
        title: '2 Saat İçinde Teklif',
        description: 'İstanbul\'da en hızlı değerlendirme.',
      },
      {
        icon: <FaMoneyBillWave />,
        title: 'İstanbul\'un En İyi Fiyatı',
        description: 'Şehrin en yüksek araç alım fiyatları.',
      },
      {
        icon: <FaTruck />,
        title: 'Ücretsiz Çekici',
        description: 'İstanbul geneli ücretsiz taşıma.',
      },
      {
        icon: <FaFileAlt />,
        title: 'Noter İşlemleri',
        description: 'Avrupa ve Anadolu yakasında hızlı işlem.',
      },
      {
        icon: <FaBuilding />,
        title: 'Şişli Ofis',
        description: 'Merkezi ofisimizden tüm şehre ulaşım.',
      },
    ],

    testimonials: [
      {
        id: 1,
        name: 'Mehmet K.',
        location: 'İstanbul',
        district: 'Kadıköy',
        rating: 5,
        text: 'Kadıköy\'de kazalı aracımı aldılar. Çok hızlı ve profesyonel hizmet. Trafikte bile 2 saatte geldiler.',
        service: 'Kazalı Araç',
      },
      {
        id: 2,
        name: 'Ayşe D.',
        location: 'İstanbul',
        district: 'Beşiktaş',
        rating: 5,
        text: 'İstanbul\'da en yüksek fiyatı veren firma. Beşiktaş\'taki hasarlı aracım için harika fiyat aldım.',
        service: 'Hasarlı Araç',
      },
      {
        id: 3,
        name: 'Can Y.',
        location: 'İstanbul',
        district: 'Ümraniye',
        rating: 5,
        text: 'Ümraniye\'den pert aracımı aldılar. Tüm evrakları hallettiler. İstanbul\'da en iyisi.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'İstanbul\'un hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'İstanbul\'un 39 ilçesine hizmet veriyoruz. Avrupa yakası, Anadolu yakası ve Adalar dahil tüm bölgelere ücretsiz çekici hizmetimiz var.',
      },
      {
        question: 'İstanbul trafiğinde ne kadar sürede gelirsiniz?',
        answer: 'Trafik yoğunluğuna bağlı olarak 2-3 saat içinde ekspertiz ekibimiz adresinize ulaşır. Acil durumlar için öncelik veriyoruz.',
      },
      {
        question: 'İstanbul\'da hangi noterde işlem yapıyorsunuz?',
        answer: 'Genellikle Şişli, Kadıköy veya Beşiktaş bölgesindeki noterlerle çalışıyoruz. İsteğinize göre size yakın noterde de işlem yapabiliriz.',
      },
      {
        question: 'Boğaz köprülerini geçerken ücret alıyor musunuz?',
        answer: 'Hayır, İstanbul içi tüm bölgelere ücretsiz çekici hizmetimiz vardır. Köprü geçiş ücretleri tarafımızdan karşılanır.',
      },
    ],
  },

  'ankara': {
    id: 'ankara',
    slug: 'ankara',
    name: 'Ankara',
    region: 'İç Anadolu',

    metaTitle: 'Ankara Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Otomoto Alım',
    metaDescription: 'Ankara\'da kazalı, hasarlı, pert ve hurda araç alımı. Çankaya, Keçiören, Yenimahalle hizmet. 1 saat içinde teklif. 0555 123 45 67',
    keywords: [
      'ankara kazalı araç alan',
      'ankara hasarlı araç alan',
      'ankara pert araç alan',
      'ankara hurda araç alan',
      'çankaya araç alım',
      'keçiören araç alım',
    ],

    hero: {
      badge: <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center"><FaLandmark className="text-accent-400" /> ANKARA ARAÇ ALIM</span>,
      title: 'ANKARA\'DA ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'Ankara\'nın tüm ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı. 1 saat içinde ücretsiz ekspertiz.',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '5.7 Milyon',
      coverage: [
        'Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut',
        'Sincan', 'Altındağ', 'Pursaklar', 'Gölbaşı', 'Polatlı',
        'Elmadağ', 'Çubuk', 'Akyurt', 'Kazan', 'Kalecik',
        'Beypazarı', 'Nallıhan', 'Ayaş', 'Haymana', 'Şereflikoçhisar',
      ],
      responseTime: '1 saat içinde',
      localOffice: 'Çankaya Merkez Ofis',
    },

    features: [
      {
        icon: <FaCar />,
        title: 'Tüm İlçelere Hizmet',
        description: '25 ilçede hızlı ve ücretsiz hizmet.',
      },
      {
        icon: <FaBolt />,
        title: '1 Saat İçinde Teklif',
        description: 'Ankara\'da en hızlı değerlendirme.',
      },
      {
        icon: <FaMoneyBillWave />,
        title: 'Ankara\'nın En İyi Fiyatı',
        description: 'Başkentin en yüksek araç alım fiyatları.',
      },
      {
        icon: <FaTruck />,
        title: 'Ücretsiz Çekici',
        description: 'Ankara geneli ücretsiz taşıma.',
      },
      {
        icon: <FaFileAlt />,
        title: 'Noter İşlemleri',
        description: 'Kızılay ve çevre noterlerde hızlı işlem.',
      },
      {
        icon: <FaBuilding />,
        title: 'Çankaya Ofis',
        description: 'Merkezi ofisimizden tüm şehre ulaşım.',
      },
    ],

    testimonials: [
      {
        id: 1,
        name: 'Ali B.',
        location: 'Ankara',
        district: 'Çankaya',
        rating: 5,
        text: 'Çankaya\'da kazalı aracım için çok iyi fiyat aldım. Hızlı ve güvenilir hizmet.',
        service: 'Kazalı Araç',
      },
      {
        id: 2,
        name: 'Zeynep M.',
        location: 'Ankara',
        district: 'Keçiören',
        rating: 5,
        text: 'Keçiören\'den hasarlı aracımı aldılar. Ankara\'da en iyisi kesinlikle.',
        service: 'Hasarlı Araç',
      },
      {
        id: 3,
        name: 'Hakan T.',
        location: 'Ankara',
        district: 'Yenimahalle',
        rating: 5,
        text: 'Yenimahalle\'de pert aracımı hızlıca sattım. Tüm işlemler çok profesyoneldi.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'Ankara\'nın hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'Ankara\'nın 25 ilçesine hizmet veriyoruz. Çankaya, Keçiören, Yenimahalle başta olmak üzere tüm merkez ve çevre ilçelere ücretsiz çekici hizmetimiz var.',
      },
      {
        question: 'Ankara\'da ne kadar sürede gelirsiniz?',
        answer: 'Merkez ilçelerde 1 saat içinde, dış ilçelerde 1-2 saat içinde ekspertiz ekibimiz adresinize ulaşır.',
      },
      {
        question: 'Ankara\'da hangi noterde işlem yapıyorsunuz?',
        answer: 'Genellikle Kızılay ve Çankaya bölgesindeki noterlerle çalışıyoruz. İsteğinize göre size yakın noterde de işlem yapabiliriz.',
      },
      {
        question: 'Polatlı gibi uzak ilçelere de geliyor musunuz?',
        answer: 'Evet, Ankara\'nın tüm ilçelerine ücretsiz çekici hizmetimiz vardır. Uzaklık fiyatı etkilemez.',
      },
    ],
  },

  'izmir': {
    id: 'izmir',
    slug: 'izmir',
    name: 'İzmir',
    region: 'Ege',

    metaTitle: 'İzmir Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Otomoto Alım',
    metaDescription: 'İzmir\'de kazalı, hasarlı, pert ve hurda araç alımı. Karşıyaka, Bornova, Konak hizmet. 1 saat içinde teklif. 0555 123 45 67',
    keywords: [
      'izmir kazalı araç alan',
      'izmir hasarlı araç alan',
      'izmir pert araç alan',
      'izmir hurda araç alan',
      'karşıyaka araç alım',
      'bornova araç alım',
    ],

    hero: {
      badge: <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center"><FaWater className="text-accent-400" /> İZMİR ARAÇ ALIM</span>,
      title: 'İZMİR\'DE ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'İzmir\'in tüm ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı. 1 saat içinde ücretsiz ekspertiz.',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '4.4 Milyon',
      coverage: [
        'Karşıyaka', 'Bornova', 'Konak', 'Buca', 'Gaziemir',
        'Çiğli', 'Bayraklı', 'Balçova', 'Narlıdere', 'Güzelbahçe',
        'Karabağlar', 'Aliağa', 'Menemen', 'Foça', 'Bergama',
        'Ödemiş', 'Tire', 'Torbalı', 'Kemalpaşa', 'Urla',
      ],
      responseTime: '1 saat içinde',
      localOffice: 'Karşıyaka Merkez Ofis',
    },

    features: [
      {
        icon: <FaCar />,
        title: 'Tüm İlçelere Hizmet',
        description: '30 ilçede hızlı ve ücretsiz hizmet.',
      },
      {
        icon: <FaBolt />,
        title: '1 Saat İçinde Teklif',
        description: 'İzmir\'de en hızlı değerlendirme.',
      },
      {
        icon: <FaMoneyBillWave />,
        title: 'İzmir\'in En İyi Fiyatı',
        description: 'Ege\'nin en yüksek araç alım fiyatları.',
      },
      {
        icon: <FaTruck />,
        title: 'Ücretsiz Çekici',
        description: 'İzmir geneli ücretsiz taşıma.',
      },
      {
        icon: <FaFileAlt />,
        title: 'Noter İşlemleri',
        description: 'Karşıyaka ve çevre noterlerde hızlı işlem.',
      },
      {
        icon: <FaBuilding />,
        title: 'Karşıyaka Ofis',
        description: 'Merkezi ofisimizden tüm şehre ulaşım.',
      },
    ],

    testimonials: [
      {
        id: 1,
        name: 'Serkan A.',
        location: 'İzmir',
        district: 'Karşıyaka',
        rating: 5,
        text: 'Karşıyaka\'da kazalı aracımı çok iyi fiyata sattım. İzmir\'de en güvenilir firma.',
        service: 'Kazalı Araç',
      },
      {
        id: 2,
        name: 'Elif Y.',
        location: 'İzmir',
        district: 'Bornova',
        rating: 5,
        text: 'Bornova\'dan hasarlı aracımı aldılar. Çok memnun kaldım, herkese tavsiye ederim.',
        service: 'Hasarlı Araç',
      },
      {
        id: 3,
        name: 'Murat K.',
        location: 'İzmir',
        district: 'Buca',
        rating: 5,
        text: 'Buca\'da pert aracım için en yüksek teklifi onlar verdi. İzmir\'de en iyisi.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'İzmir\'in hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'İzmir\'in 30 ilçesine hizmet veriyoruz. Karşıyaka, Bornova, Konak başta olmak üzere tüm merkez ve çevre ilçelere ücretsiz çekici hizmetimiz var.',
      },
      {
        question: 'İzmir\'de ne kadar sürede gelirsiniz?',
        answer: 'Merkez ilçelerde 1 saat içinde, uzak ilçelerde 1-2 saat içinde ekspertiz ekibimiz adresinize ulaşır.',
      },
      {
        question: 'İzmir\'de hangi noterde işlem yapıyorsunuz?',
        answer: 'Genellikle Karşıyaka ve Konak bölgesindeki noterlerle çalışıyoruz. İsteğinize göre size yakın noterde de işlem yapabiliriz.',
      },
      {
        question: 'Urla, Çeşme gibi tatil bölgelerine de geliyor musunuz?',
        answer: 'Evet, İzmir\'in tüm ilçelerine ücretsiz çekici hizmetimiz vardır. Sahil bölgelerine de hizmet veriyoruz.',
      },
    ],
  },

  'bursa': {
    id: 'bursa',
    slug: 'bursa',
    name: 'Bursa',
    region: 'Marmara',

    metaTitle: 'Bursa Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Otomoto Alım',
    metaDescription: 'Bursa\'da kazalı, hasarlı, pert ve hurda araç alımı. Osmangazi, Nilüfer, Yıldırım hizmet. 1 saat içinde teklif. 0555 123 45 67',
    keywords: [
      'bursa kazalı araç alan',
      'bursa hasarlı araç alan',
      'bursa pert araç alan',
      'bursa hurda araç alan',
      'osmangazi araç alım',
      'nilüfer araç alım',
    ],

    hero: {
      badge: <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center"><FaMountain className="text-accent-400" /> BURSA ARAÇ ALIM</span>,
      title: 'BURSA\'DA ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'Bursa\'nın tüm ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı. 1 saat içinde ücretsiz ekspertiz.',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '3.1 Milyon',
      coverage: [
        'Osmangazi', 'Nilüfer', 'Yıldırım', 'Gemlik', 'İnegöl',
        'Mudanya', 'Mustafakemalpaşa', 'Gürsu', 'Kestel', 'Karacabey',
        'Orhangazi', 'İznik', 'Yenişehir', 'Büyükorhan', 'Harmancık',
      ],
      responseTime: '1 saat içinde',
      localOffice: 'Osmangazi Merkez Ofis',
    },

    features: [
      {
        icon: <FaCar />,
        title: 'Tüm İlçelere Hizmet',
        description: '17 ilçede hızlı ve ücretsiz hizmet.',
      },
      {
        icon: <FaBolt />,
        title: '1 Saat İçinde Teklif',
        description: 'Bursa\'da en hızlı değerlendirme.',
      },
      {
        icon: <FaMoneyBillWave />,
        title: 'Bursa\'nın En İyi Fiyatı',
        description: 'Şehrin en yüksek araç alım fiyatları.',
      },
      {
        icon: <FaTruck />,
        title: 'Ücretsiz Çekici',
        description: 'Bursa geneli ücretsiz taşıma.',
      },
      {
        icon: <FaFileAlt />,
        title: 'Noter İşlemleri',
        description: 'Osmangazi ve çevre noterlerde hızlı işlem.',
      },
      {
        icon: <FaBuilding />,
        title: 'Osmangazi Ofis',
        description: 'Merkezi ofisimizden tüm şehre ulaşım.',
      },
    ],

    testimonials: [
      {
        id: 1,
        name: 'Emre D.',
        location: 'Bursa',
        district: 'Osmangazi',
        rating: 5,
        text: 'Osmangazi\'de kazalı aracımı hızlıca sattım. Bursa\'da en iyi fiyatı verdiler.',
        service: 'Kazalı Araç',
      },
      {
        id: 2,
        name: 'Seda K.',
        location: 'Bursa',
        district: 'Nilüfer',
        rating: 5,
        text: 'Nilüfer\'de hasarlı aracım için çok iyi fiyat aldım. Profesyonel ekip.',
        service: 'Hasarlı Araç',
      },
      {
        id: 3,
        name: 'Burak Y.',
        location: 'Bursa',
        district: 'Yıldırım',
        rating: 5,
        text: 'Yıldırım\'da pert aracımı sattım. Tüm işlemler çok hızlıydı.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'Bursa\'nın hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'Bursa\'nın 17 ilçesine hizmet veriyoruz. Osmangazi, Nilüfer, Yıldırım başta olmak üzere tüm merkez ve çevre ilçelere ücretsiz çekici hizmetimiz var.',
      },
      {
        question: 'Bursa\'da ne kadar sürede gelirsiniz?',
        answer: 'Merkez ilçelerde 1 saat içinde, uzak ilçelerde 1-2 saat içinde ekspertiz ekibimiz adresinize ulaşır.',
      },
      {
        question: 'İnegöl, Gemlik gibi uzak ilçelere de geliyor musunuz?',
        answer: 'Evet, Bursa\'nın tüm ilçelerine ücretsiz çekici hizmetimiz vardır. Uzaklık fiyatı etkilemez.',
      },
    ],
  },

  'antalya': {
    id: 'antalya',
    slug: 'antalya',
    name: 'Antalya',
    region: 'Akdeniz',

    metaTitle: 'Antalya Kazalı, Hasarlı, Pert, Hurda Araç Alımı | Otomoto Alım',
    metaDescription: 'Antalya\'da kazalı, hasarlı, pert ve hurda araç alımı. Muratpaşa, Kepez, Konyaaltı hizmet. 1 saat içinde teklif. 0555 123 45 67',
    keywords: [
      'antalya kazalı araç alan',
      'antalya hasarlı araç alan',
      'antalya pert araç alan',
      'antalya hurda araç alan',
      'muratpaşa araç alım',
      'kepez araç alım',
    ],

    hero: {
      badge: <span className="badge bg-white/10 text-white border border-white/20 backdrop-blur-md gap-2 px-4 py-2 rounded-full flex items-center"><FaUmbrellaBeach className="text-accent-400" /> ANTALYA ARAÇ ALIM</span>,
      title: 'ANTALYA\'DA ARACINIZ',
      titleHighlight: 'EN YÜKSEK FİYATA',
      subtitle: 'Antalya\'nın tüm ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı. 1 saat içinde ücretsiz ekspertiz.',
    },

    services: {
      kazali: true,
      hasarli: true,
      pert: true,
      hurda: true,
    },

    cityInfo: {
      population: '2.6 Milyon',
      coverage: [
        'Muratpaşa', 'Kepez', 'Konyaaltı', 'Döşemealtı', 'Aksu',
        'Alanya', 'Manavgat', 'Serik', 'Kaş', 'Kemer',
        'Kumluca', 'Finike', 'Demre', 'Elmalı', 'Korkuteli',
      ],
      responseTime: '1 saat içinde',
      localOffice: 'Muratpaşa Merkez Ofis',
    },

    features: [
      {
        icon: <FaCar />,
        title: 'Tüm İlçelere Hizmet',
        description: '19 ilçede hızlı ve ücretsiz hizmet.',
      },
      {
        icon: <FaBolt />,
        title: '1 Saat İçinde Teklif',
        description: 'Antalya\'da en hızlı değerlendirme.',
      },
      {
        icon: <FaMoneyBillWave />,
        title: 'Antalya\'nın En İyi Fiyatı',
        description: 'Akdeniz\'in en yüksek araç alım fiyatları.',
      },
      {
        icon: <FaTruck />,
        title: 'Ücretsiz Çekici',
        description: 'Antalya geneli ücretsiz taşıma.',
      },
      {
        icon: <FaFileAlt />,
        title: 'Noter İşlemleri',
        description: 'Muratpaşa ve çevre noterlerde hızlı işlem.',
      },
      {
        icon: <FaBuilding />,
        title: 'Muratpaşa Ofis',
        description: 'Merkezi ofisimizden tüm şehre ulaşım.',
      },
    ],

    testimonials: [
      {
        id: 1,
        name: 'Okan S.',
        location: 'Antalya',
        district: 'Muratpaşa',
        rating: 5,
        text: 'Muratpaşa\'da kazalı aracım için harika fiyat aldım. Antalya\'nın en iyisi.',
        service: 'Kazalı Araç',
      },
      {
        id: 2,
        name: 'Deniz P.',
        location: 'Antalya',
        district: 'Konyaaltı',
        rating: 5,
        text: 'Konyaaltı\'ndan hasarlı aracımı aldılar. Çok memnun kaldım.',
        service: 'Hasarlı Araç',
      },
      {
        id: 3,
        name: 'Tolga M.',
        location: 'Antalya',
        district: 'Alanya',
        rating: 5,
        text: 'Alanya\'da pert aracım için en yüksek teklifi onlar verdi.',
        service: 'Pert Araç',
      },
    ],

    faqs: [
      {
        question: 'Antalya\'nın hangi ilçelerine hizmet veriyorsunuz?',
        answer: 'Antalya\'nın 19 ilçesine hizmet veriyoruz. Muratpaşa, Kepez, Konyaaltı, Alanya başta olmak üzere tüm ilçelere ücretsiz çekici hizmetimiz var.',
      },
      {
        question: 'Alanya, Manavgat gibi uzak ilçelere de geliyor musunuz?',
        answer: 'Evet, Antalya\'nın tüm ilçelerine ücretsiz çekici hizmetimiz vardır. Uzaklık fiyatı etkilemez.',
      },
      {
        question: 'Antalya\'da ne kadar sürede gelirsiniz?',
        answer: 'Merkez ilçelerde 1 saat içinde, sahil ilçelerinde 1-2 saat içinde ekspertiz ekibimiz adresinize ulaşır.',
      },
    ],
  },
};

// Helper function to get city by slug
export const getCityBySlug = (slug: string): City | undefined => {
  return cities[slug];
};

// Helper function to get all cities
export const getAllCities = (): City[] => {
  return Object.values(cities);
};
