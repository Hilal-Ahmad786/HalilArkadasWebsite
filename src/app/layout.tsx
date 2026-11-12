import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GoogleTagManager from '@/components/analytics/GoogleTagManager';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import FacebookPixel from '@/components/analytics/FacebookPixel';
import PopupDialog from '@/components/layout/PopupDialog';
import { siteConfig } from '@/data/site';
import { SITE_URL } from '@/lib/site-url';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['kazalı araç alımı', 'hasarlı araç alımı', 'pert araç alımı', 'hurda araç alımı'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

// Business identity for search engines: the real contact data from siteConfig, no ratings.
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: siteConfig.name,
  url: SITE_URL,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: `${SITE_URL}${siteConfig.logo}`,
  address: { '@type': 'PostalAddress', streetAddress: 'İvedik OSB Mahallesi, 1468. Cadde No: 56', addressLocality: 'Yenimahalle', addressRegion: 'Ankara', addressCountry: 'TR' },
  areaServed: { '@type': 'Country', name: 'Türkiye' },
  openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '08:00', closes: '22:00' },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <GoogleTagManager />
        {children}
        <PopupDialog />
        <GoogleAnalytics />
        <FacebookPixel />
      </body>
    </html>
  );
}
