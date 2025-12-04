// src/data/navigation.ts
import { NavigationLink } from './types';

export const mainNavigation: NavigationLink[] = [
  {
    label: 'Ana Sayfa',
    href: '/',
  },
  {
    label: 'Hizmetler',
    href: '/hizmetler',
    children: [
      {
        label: 'Kazalı Araç Alımı',
        href: '/kazali-arac-alim',
      },
      {
        label: 'Hasarlı Araç Alımı',
        href: '/hasarli-arac-alim',
      },
      {
        label: 'Pert Araç Alımı',
        href: '/pert-arac-alim',
      },
      {
        label: 'Hurda Araç Alımı',
        href: '/hurda-arac-alim',
      },
    ],
  },
  {
    label: 'Şehirler',
    href: '/sehirler',
    children: [
      {
        label: 'İstanbul',
        href: '/sehirler/istanbul',
      },
      {
        label: 'Ankara',
        href: '/sehirler/ankara',
      },
      {
        label: 'İzmir',
        href: '/sehirler/izmir',
      },
      {
        label: 'Bursa',
        href: '/sehirler/bursa',
      },
      {
        label: 'Antalya',
        href: '/sehirler/antalya',
      },
    ],
  },
  {
    label: 'Hakkımızda',
    href: '/hakkimizda',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'İletişim',
    href: '/iletisim',
  },
];

export const footerNavigation = {
  services: [
    { label: 'Kazalı Araç Alımı', href: '/kazali-arac-alim' },
    { label: 'Hasarlı Araç Alımı', href: '/hasarli-arac-alim' },
    { label: 'Pert Araç Alımı', href: '/pert-arac-alim' },
    { label: 'Hurda Araç Alımı', href: '/hurda-arac-alim' },
  ],
  cities: [
    { label: 'İstanbul', href: '/sehirler/istanbul' },
    { label: 'Ankara', href: '/sehirler/ankara' },
    { label: 'İzmir', href: '/sehirler/izmir' },
    { label: 'Bursa', href: '/sehirler/bursa' },
    { label: 'Antalya', href: '/sehirler/antalya' },
  ],
  company: [
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Blog', href: '/blog' },
    { label: 'İletişim', href: '/iletisim' },
    { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
    { label: 'Kullanım Koşulları', href: '/kullanim-kosullari' },
  ],
};
