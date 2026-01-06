'use client';

import { CTASection as CTASectionType } from '@/data/types';
import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';

import { siteConfig } from '@/data/site';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

interface CTASectionProps {
  data: CTASectionType;
}

export default function CTASection({ data }: CTASectionProps) {
  const handlePrimaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleSecondaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const getPrimaryHref = () => '#';
  const getSecondaryHref = () => '#';

  return (
    <section
      className={`section ${data.background === 'gradient'
        ? 'bg-gradient-to-br from-primary-800 via-secondary-800 to-secondary-900'
        : 'bg-accent-50'
        }`}
    >
      <div className="container">
        <div className={`max-w-4xl mx-auto text-center ${data.background === 'gradient' ? 'text-white' : ''
          }`}>
          {/* Badge */}
          {data.badge && (
            <div className="inline-block mb-6">
              <span className={`badge ${data.background === 'gradient'
                ? 'bg-white/20 text-white border border-white/30'
                : 'badge-primary'
                }`}>
                {data.badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className={`text-3xl md:text-5xl font-black mb-4 ${data.background === 'gradient' ? 'text-white' : 'text-primary-900'
            }`}>
            {data.title}
            {data.titleHighlight && (
              <>
                <br />
                <span className={
                  data.background === 'gradient' ? 'text-accent-300' : 'text-accent'
                }>
                  {data.titleHighlight}
                </span>
              </>
            )}
          </h2>

          {/* Description */}
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${data.background === 'gradient' ? 'text-white/90' : 'text-primary-600'
            }`}>
            {data.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              onClick={handlePrimaryClick}
              className="btn btn-primary btn-lg gap-2"
              style={data.primaryButton.action === 'whatsapp' ? { backgroundColor: '#25D366', borderColor: '#25D366', color: 'white' } : undefined}
            >
              {data.primaryButton.action === 'phone' && <FaPhoneAlt />}
              {data.primaryButton.action === 'whatsapp' && <FaWhatsapp className="text-xl" />}
              {data.primaryButton.text}
            </a>

            {data.secondaryButton && (
              <a
                href="#"
                onClick={handleSecondaryClick}
                className={`btn btn-lg gap-2 ${data.background === 'gradient'
                  ? 'btn-secondary'
                  : 'btn-outline'
                  }`}
                style={data.secondaryButton.action === 'whatsapp' ? { backgroundColor: '#25D366', borderColor: '#25D366', color: 'white' } : undefined}
              >
                {data.secondaryButton.action === 'phone' && <FaPhoneAlt />}
                {data.secondaryButton.action === 'whatsapp' && <FaWhatsapp className="text-xl" />}
                {data.secondaryButton.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
