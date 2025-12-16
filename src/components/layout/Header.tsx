'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { mainNavigation } from '@/data/navigation';
import { formatPhoneDisplay, formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { FaPhoneAlt, FaWhatsapp, FaBolt, FaCheckCircle, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><FaBolt className="text-yellow-400" /> 7/24 Hızlı Destek</span>
            <span className="hidden md:flex items-center gap-1"><FaCheckCircle className="text-green-400" /> %100 Güvenli İşlem</span>
          </div>
          <a
            href={formatPhoneHref(siteConfig.phone)}
            onClick={() => trackPhoneClick('header-top')}
            className="font-semibold hover:text-accent transition-colors flex items-center gap-2"
          >
            <FaPhoneAlt /> {formatPhoneDisplay(siteConfig.phone)}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Logo Image */}
            <img
              src={siteConfig.logo}
              alt={siteConfig.name}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-primary-700 hover:text-accent font-medium transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-primary-700 hover:bg-accent-50 hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={formatWhatsAppHref(siteConfig.whatsapp)}
              onClick={() => trackWhatsAppClick('header')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm text-white border-0 gap-2"
              style={{ backgroundColor: '#25D366' }}
            >
              <FaWhatsapp className="text-lg" /> WhatsApp
            </a>
            <a
              href={formatPhoneHref(siteConfig.phone)}
              onClick={() => trackPhoneClick('header')}
              className="btn btn-primary btn-sm gap-2"
            >
              <FaPhoneAlt /> Hemen Ara
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-primary-700"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 max-h-[80vh] overflow-y-auto">
            {mainNavigation.map((item) => (
              <div key={item.href} className="py-2">
                <Link
                  href={item.href}
                  className="block text-primary-700 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-sm text-primary-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={formatWhatsAppHref(siteConfig.whatsapp)}
                onClick={() => trackWhatsAppClick('header-mobile')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full text-white border-0 gap-2"
                style={{ backgroundColor: '#25D366' }}
              >
                <FaWhatsapp className="text-lg" /> WhatsApp
              </a>
              <a
                href={formatPhoneHref(siteConfig.phone)}
                onClick={() => trackPhoneClick('header-mobile')}
                className="btn btn-primary w-full gap-2"
              >
                <FaPhoneAlt /> Hemen Ara
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
