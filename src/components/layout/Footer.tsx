import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerNavigation } from '@/data/navigation';
import { FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-slate-300 mb-4 text-sm">{siteConfig.tagline}</p>
            <div className="flex gap-4">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Hizmetler</h4>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-white font-bold mb-4">Şehirler</h4>
            <ul className="space-y-2">
              {footerNavigation.cities.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2"><FaPhoneAlt /> {siteConfig.phoneDisplay}</li>
              <li className="flex items-center gap-2"><FaEnvelope /> {siteConfig.email}</li>
              <li className="flex items-center gap-2"><FaClock /> {siteConfig.businessHours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-primary-200 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
