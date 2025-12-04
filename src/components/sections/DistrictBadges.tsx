import { getAllCities } from '@/data/cities';

interface DistrictBadgesProps {
  citySlug?: string;
  title?: string;
  subtitle?: string;
}

export default function DistrictBadges({ 
  citySlug, 
  title = "Hizmet Verdiğimiz İlçeler",
  subtitle 
}: DistrictBadgesProps) {
  let districts: string[] = [];
  let cityName = '';

  if (citySlug) {
    // Show districts for specific city
    const cities = getAllCities();
    const city = cities.find(c => c.slug === citySlug);
    if (city) {
      districts = city.cityInfo.coverage;
      cityName = city.name;
    }
  }

  if (districts.length === 0) {
    return null;
  }

  // Split districts into two groups for side-by-side display
  const midPoint = Math.ceil(districts.length / 2);
  const leftDistricts = districts.slice(0, midPoint);
  const rightDistricts = districts.slice(midPoint);

  return (
    <section className="section bg-white">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-secondary-900 mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-secondary-600">{subtitle}</p>
          )}
          {cityName && (
            <p className="text-lg text-primary font-semibold mt-2">
              {cityName}'ın her köşesinde aktif hizmet
            </p>
          )}
        </div>

        {/* Districts in Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left Column - Ana İlçeler */}
          <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎯</span>
              <h3 className="text-lg font-bold text-blue-900">Ana İlçeler</h3>
            </div>
            <div className="space-y-2">
              {leftDistricts.map((district, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 hover:bg-blue-100 transition-colors"
                >
                  <span className="text-blue-600">📍</span>
                  <span className="text-secondary-700 font-medium">{district}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Diğer Bölgeler */}
          <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏘️</span>
              <h3 className="text-lg font-bold text-orange-900">Diğer Bölgeler</h3>
            </div>
            <div className="space-y-2">
              {rightDistricts.map((district, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 hover:bg-orange-100 transition-colors"
                >
                  <span className="text-orange-600">📍</span>
                  <span className="text-secondary-700 font-medium">{district}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Alert */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🔥</span>
            <h3 className="text-xl font-black">Hangi İlçede Olursanız Olun, 2-3 Saat İçinde Yanınızdayız!</h3>
          </div>
          <p className="text-white/90 text-sm">
            {cityName}'daki tüm ilçelerde aktif hizmet veriyoruz
          </p>
        </div>
      </div>
    </section>
  );
}
