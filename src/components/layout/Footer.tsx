import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerNavigation } from '@/data/navigation';
import { FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
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

          {/* Corporate / Company Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Kurumsal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-accent transition-colors text-sm">
                  Ana Sayfa
                </Link>
              </li>
              {footerNavigation.company.map((item) => (
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
          <div className="mt-4 flex justify-center items-center gap-2">
            <a
              href="https://paksoft.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center group"
            >
              <div className="flex items-center text-accent group-hover:text-accent-400 transition-colors mr-2">
                {/* Custom Crescent Icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 -rotate-12 mr-1">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.08-1.38-.7.13-1.42.21-2.16.21-5.52 0-10-4.48-10-10S9.42 2.83 14.92 2.83c.74 0 1.46.08 2.16.21C15.58 2.5 13.85 2 12 2z" />
                </svg>
                <span className="font-bold text-sm tracking-wide">PakSoft</span>
              </div>
              <span className="text-primary-400 group-hover:text-accent transition-colors text-xs">Tarafından Geliştirildi</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
