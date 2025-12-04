import Link from 'next/link';
import { getPublishedServices } from '@/data/services';
import { FaCheck, FaArrowRight, FaPhoneAlt } from 'react-icons/fa';

export default function ServicesGrid() {
  const services = getPublishedServices();

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Kazalı, hasarlı, pert ve hurda araçlarınız için profesyonel alım hizmeti sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              href={`/${service.slug}`}
              key={service.id}
              className="card card-hover group"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-sm text-primary-600 flex items-start gap-2">
                    <span className="text-accent mt-0.5"><FaCheck /></span>
                    <span>{feature.title}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <div className="mt-auto pt-4 border-t border-primary-100">
                <span className="text-accent font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Detaylı Bilgi
                  <span><FaArrowRight /></span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-primary-600 mb-4">
            Hangi hizmeti seçeceğinizden emin değil misiniz?
          </p>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className="btn btn-primary btn-lg gap-2"
          >
            <FaPhoneAlt /> Bizi Arayın, Yönlendirelim
          </a>
        </div>
      </div>
    </section>
  );
}
