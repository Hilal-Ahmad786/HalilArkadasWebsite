import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-url';
import { getAllCities } from '@/data/cities';
import { blogPosts } from '@/data/blog';

// Every public page. Legal pages are listed with low priority; nothing here is noindexed.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly') =>
    ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority });
  return [
    page('', 1, 'weekly'),
    page('/hasarli-arac-alim', 0.9),
    page('/kazali-arac-alim', 0.9),
    page('/pert-arac-alim', 0.9),
    page('/hurda-arac-alim', 0.9),
    page('/hizmetler', 0.7),
    page('/sehirler', 0.8),
    ...getAllCities().map(city => page(`/sehirler/${city.slug}`, 0.8)),
    page('/blog', 0.6, 'weekly'),
    ...blogPosts.map(post => page(`/blog/${post.slug}`, 0.6)),
    page('/hakkimizda', 0.5),
    page('/iletisim', 0.6),
    page('/gizlilik-politikasi', 0.2, 'yearly'),
    page('/kullanim-kosullari', 0.2, 'yearly'),
  ];
}
