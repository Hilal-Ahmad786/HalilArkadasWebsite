export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'hasarli-arac-satarken-dikkat-edilmesi-gerekenler',
    title: 'Hasarlı Araç Satarken Dikkat Edilmesi Gerekenler: Kapsamlı Rehber',
    excerpt: 'Hasarlı aracınızı satarken değer kaybı yaşamamak ve süreci güvenle yönetmek için bilmeniz gereken tüm detaylar bu rehberde.',
    content: `
      <p>Hasarlı bir aracı satmak, standart bir ikinci el araç satışından çok daha fazla dikkat ve özen gerektiren bir süreçtir. Aracınızın hasar durumu, piyasa değeri ve satış yöntemi, elde edeceğiniz geliri doğrudan etkiler. İşte hasarlı aracınızı satarken dikkat etmeniz gereken en önemli noktalar:</p>

      <h3>1. Hasar Durumunu Şeffaf Bir Şekilde Belirleyin</h3>
      <p>Satış sürecinin en kritik adımı, aracınızın hasarını doğru ve dürüst bir şekilde tespit etmektir. Alıcılar, ne aldıklarını tam olarak bilmek isterler. Bu nedenle:</p>
      <ul>
        <li><strong>Ekspertiz Raporu Alın:</strong> Bağımsız bir ekspertiz firmasından detaylı bir rapor almak, hem sizin hem de alıcının elini güçlendirir. Hangi parçaların değiştiği, hangilerinin boyandığı ve mekanik aksamın durumu netleşir.</li>
        <li><strong>Fotoğraflayın:</strong> Hasarlı bölgelerin net ve yüksek çözünürlüklü fotoğraflarını çekin. Farklı açılardan çekilmiş fotoğraflar, alıcının güvenini kazanmanıza yardımcı olur.</li>
        <li><strong>Hasar Kaydını Sorgulayın:</strong> Tramer kaydını hazır bulundurun. Geçmiş hasarların şeffaf bir şekilde sunulması, satış sürecini hızlandırır.</li>
      </ul>

      <h3>2. Gerçekçi Bir Fiyat Belirleyin</h3>
      <p>Hasarlı araç piyasası oldukça değişkendir. Fiyat belirlerken duygusal davranmak yerine piyasa gerçeklerine odaklanın:</p>
      <ul>
        <li><strong>Benzer İlanları İnceleyin:</strong> Sizin aracınıza benzer hasar durumundaki araçların ne kadara satıldığını araştırın.</li>
        <li><strong>Onarım Maliyetini Hesaplayın:</strong> Aracın onarılması durumunda ne kadar masraf çıkacağını yaklaşık olarak öğrenin. Bu, alıcının pazarlık payını anlamanıza yardımcı olur.</li>
        <li><strong>Hurda Değerini Göz Önünde Bulundurun:</strong> Eğer araç ağır hasarlıysa, hurda veya yedek parça değerini de hesaba katın.</li>
      </ul>

      <h3>3. Doğru Satış Kanalını Seçin</h3>
      <p>Hasarlı aracınızı satabileceğiniz farklı kanallar vardır:</p>
      <ul>
        <li><strong>Bireysel Satış:</strong> İlan siteleri üzerinden doğrudan son kullanıcıya satabilirsiniz. Ancak bu süreç zaman alıcı olabilir ve güvenilirlik sorunları yaşanabilir.</li>
        <li><strong>Galeriler:</strong> Bazı galeriler hasarlı araç alımı yapar, ancak genellikle piyasa değerinin altında teklif verirler.</li>
        <li><strong>Kurumsal Hasarlı Araç Alım Merkezleri:</strong> Bizim gibi profesyonel firmalar, aracınızı yerinde inceler, anında değerleme yapar ve nakit ödeme ile satın alır. Bu, en hızlı ve güvenli yöntemdir.</li>
      </ul>

      <h3>4. Yasal Prosedürlere Dikkat Edin</h3>
      <p>Satış işleminin yasal olarak sorunsuz tamamlanması için:</p>
      <ul>
        <li><strong>Noter Satışı:</strong> Satış işlemini mutlaka noterde gerçekleştirin. "Açık satış" veya vekaletle satış gibi yöntemlerden kaçının.</li>
        <li><strong>Ödeme Güvenliği:</strong> Ödemeyi almadan (nakit veya hesaba havale) noter satış sözleşmesini imzalamayın. Blokeli çek veya güvenli ödeme sistemlerini kullanabilirsiniz.</li>
        <li><strong>Plaka Değişikliği:</strong> Eğer isterseniz satış sırasında plaka değişikliği talep edebilirsiniz.</li>
      </ul>

      <h3>Sonuç</h3>
      <p>Hasarlı araç satışı zorlu görünebilir, ancak doğru adımları atarak ve güvenilir bir alıcı ile çalışarak bu süreci karlı bir şekilde tamamlayabilirsiniz. Profesyonel destek almak isterseniz, uzman ekibimizle iletişime geçebilirsiniz.</p>
    `,
    date: '2023-10-15',
    author: 'Ahmet Yılmaz',
    category: 'Rehber',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '2',
    slug: 'pert-arac-nedir-nasil-satilir',
    title: 'Pert Araç Nedir? Pert Kayıtlı Araç Nasıl Satılır?',
    excerpt: 'Pert kaydı (ağır hasar kaydı) olan araçların satış süreci, yasal prosedürler ve değerleme kriterleri hakkında detaylı bilgiler.',
    content: `
      <p>Trafik kazaları sonucunda araçlarda meydana gelen büyük çaplı hasarlar, sigorta literatüründe "pert" veya "ağır hasar" olarak adlandırılır. Peki, bir araç ne zaman pert olur ve pert kayıtlı bir araç nasıl satılır? İşte detaylar:</p>

      <h3>Pert (Ağır Hasar) Nedir?</h3>
      <p>Bir aracın kaza sonrası onarım masraflarının, aracın piyasa değerinin (rayiç bedel) belirli bir oranını (genellikle %70 ve üzeri) aşması durumunda, sigorta şirketi tarafından araç "pert-total" kabul edilir. Bu durumda araç sahibine aracın rayiç bedeli ödenir ve araç sigorta şirketine geçer. Ancak bazı durumlarda araç sahibi, hasarlı aracı kendisi alıp onarmak veya satmak isteyebilir.</p>

      <h3>Pert Araç Satışı Yasal mı?</h3>
      <p>Evet, pert kayıtlı veya ağır hasarlı araçların alım-satımı tamamen yasaldır. Ancak satış sırasında alıcıya aracın pert olduğu bilgisinin verilmesi ve bu durumun Tramer kayıtlarında işlenmiş olması zorunludur. Gizlenen hasarlar, ileride hukuki sorunlara yol açabilir.</p>

      <h3>Pert Araç Nasıl Satılır?</h3>
      <p>Pert aracınızı satarken izleyebileceğiniz yollar şunlardır:</p>
      <ul>
        <li><strong>Onararak Satmak:</strong> Aracı kendi imkanlarınızla onartıp, "ağır hasar kayıtlı" olarak piyasaya sürebilirsiniz. Ancak onarım maliyetleri ve sürecin zorluğu göz önünde bulundurulmalıdır.</li>
        <li><strong>Hasarlı Halde Satmak:</strong> Aracı onarmadan, hasarlı haliyle satabilirsiniz. Bu durumda alıcılar genellikle kaportacılar, tamirciler veya hasarlı araç alım-satımı yapan firmalar olacaktır.</li>
        <li><strong>Yedek Parça Olarak Satmak:</strong> Eğer araç onarılamayacak durumdaysa, "hurda belgeli" olarak trafikten çekip yedek parça olarak satabilirsiniz.</li>
      </ul>

      <h3>Değerleme Nasıl Yapılır?</h3>
      <p>Pert aracın değeri belirlenirken şu faktörler etkilidir:</p>
      <ul>
        <li><strong>Hasarın Boyutu:</strong> Hangi parçaların hasar gördüğü (motor, şasi, airbag vb.) önemlidir.</li>
        <li><strong>Onarım Maliyeti:</strong> Tahmini onarım masrafı, satış fiyatından düşülür.</li>
        <li><strong>Piyasa Değeri:</strong> Aracın hasarsız halinin piyasa değeri baz alınır.</li>
        <li><strong>Yedek Parça Değeri:</strong> Sağlam kalan parçaların değeri hesaplanır.</li>
      </ul>

      <h3>Neden Bizi Tercih Etmelisiniz?</h3>
      <p>Pert aracınızı satmakla uğraşmak istemiyorsanız, firmamız size en iyi çözümü sunar. Aracınızı olduğu yerde inceliyor, en yüksek fiyat teklifini veriyor ve tüm noter/çekici işlemlerini ücretsiz olarak gerçekleştiriyoruz. Pert aracınızı güvenle ve değerinde satmak için hemen bizi arayın.</p>
    `,
    date: '2023-11-02',
    author: 'Mehmet Demir',
    category: 'Bilgi',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '3',
    slug: 'hurda-arac-tesviki-2024',
    title: '2024 Hurda Araç Teşviki ve Geri Dönüşüm Avantajları',
    excerpt: 'Eski aracınızı hurdaya ayırmanın avantajları, 2024 yılı hurda teşvikleri ve çevreye katkıları hakkında bilmeniz gerekenler.',
    content: `
      <p>Eski, çevreye zarar veren ve ekonomik ömrünü tamamlamış araçların trafikten çekilmesi, hem çevre sağlığı hem de trafik güvenliği açısından büyük önem taşır. Devlet, bu süreci teşvik etmek amacıyla zaman zaman hurda araç teşvikleri sunmaktadır. 2024 yılında hurda araç süreci nasıl işliyor?</p>

      <h3>Hurda Araç Nedir?</h3>
      <p>Ekonomik ömrünü tamamlamış, onarımı mümkün olmayan veya onarım maliyeti değerini aşan, yanmış, kaza yapmış veya eskimiş araçlar "hurda araç" veya "ömrünü tamamlamış araç (ÖTA)" olarak sınıflandırılır.</p>

      <h3>Hurda Teşviki Var mı?</h3>
      <p>Geçmiş yıllarda ÖTV indirimi şeklinde uygulanan hurda teşvikleri, dönem dönem yenilenmektedir. Güncel mevzuata göre, 15 yaş ve üzeri araçların trafikten çekilmesi durumunda yeni araç alımında belirli avantajlar sağlanabilmektedir. Ancak en güncel ve kesin bilgi için Resmi Gazete'yi veya vergi dairelerini takip etmek önemlidir.</p>

      <h3>Aracı Hurdaya Ayırmanın Avantajları</h3>
      <ul>
        <li><strong>Vergi Borcundan Kurtulma:</strong> Aracınızı hurdaya ayırdığınızda, birikmiş Motorlu Taşıtlar Vergisi (MTV) borçları ve trafik cezaları konusunda yapılandırma veya silinme fırsatlarından yararlanabilirsiniz (dönemsel kanunlara bağlıdır).</li>
        <li><strong>Masraflardan Kurtulma:</strong> Kullanmadığınız bir araç için sigorta, vergi ve bakım masrafı ödemekten kurtulursunuz.</li>
        <li><strong>Nakit Gelir:</strong> Aracınızı yetkili lisanslı geri dönüşüm tesislerine veya bizim gibi hurda araç alım firmalarına satarak, aracın metal ağırlığı ve parça değeri üzerinden nakit gelir elde edersiniz.</li>
        <li><strong>Çevreye Katkı:</strong> Eski araçların geri dönüştürülmesi, çevre kirliliğini azaltır ve hammadde tasarrufu sağlar.</li>
      </ul>

      <h3>Hurdaya Ayırma İşlemi Nasıl Yapılır?</h3>
      <ol>
        <li><strong>Teslim:</strong> Aracınızı İl Özel İdarelerine, MKEK Hurda İşletmesi Müdürlüklerine veya lisanslı ÖTA teslim yerlerine götürün.</li>
        <li><strong>Kayıt Silme:</strong> Notere giderek aracın trafikten çekildiğine dair "Hurda Belgesi" alın. Bu işlemle aracın kaydı trafikten silinir.</li>
        <li><strong>Vergi Dairesi:</strong> Vergi dairesine giderek aracın vergi kaydını kapatın.</li>
      </ol>

      <h3>Biz Nasıl Yardımcı Oluyoruz?</h3>
      <p>Hurda aracınızla uğraşmak istemiyorsanız, tüm süreci sizin adınıza yönetiyoruz. Aracınızı adresinizden ücretsiz çekici ile alıyor, hurda bedelini nakit olarak ödüyor ve gerekli evrak işlemlerinde size rehberlik ediyoruz. Eski aracınızı nakde çevirmek için bize ulaşın.</p>
    `,
    date: '2023-12-10',
    author: 'Ayşe Kaya',
    category: 'Haber',
    image: 'https://images.unsplash.com/photo-1553260168-69b041873e65?q=80&w=2000&auto=format&fit=crop'
  }
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}
