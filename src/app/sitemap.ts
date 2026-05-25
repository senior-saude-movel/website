import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/politica-de-privacidade`, lastModified: now, priority: 0.5 },
    { url: `${site.url}/termos-de-uso`, lastModified: now, priority: 0.5 },
  ];
}
