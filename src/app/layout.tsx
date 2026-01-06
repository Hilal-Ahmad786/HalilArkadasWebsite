import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import PopupDialog from '@/components/layout/PopupDialog';
import DemoGuard from '@/components/layout/DemoGuard';
import { siteConfig } from '@/data/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
    url: process.env.NEXT_PUBLIC_SITE_URL,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <PopupDialog />
        <DemoGuard />
      </body>
    </html>
  );
}
