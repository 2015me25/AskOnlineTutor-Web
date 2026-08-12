import { MetadataRoute } from 'next';
import { SITE_METADATA } from '@/lib/constants/links';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${SITE_METADATA.siteUrl}/sitemap.xml`,
  };
}
