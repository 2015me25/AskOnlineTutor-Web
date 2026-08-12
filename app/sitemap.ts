import { MetadataRoute } from 'next';
import { SITE_METADATA } from '@/lib/constants/links';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_METADATA.siteUrl;

  const routes = [
    '',
    '/products',
    '/products/beam-master',
    '/calculators',
    '/calculators/beam',
    '/calculators/cantilever-beam',
    '/calculators/simply-supported-beam',
    '/calculators/bending-moment',
    '/calculators/shear-force',
    '/calculators/deflection',
    '/calculators/moment-of-inertia',
    '/guides',
    '/guides/shear-force-diagram',
    '/guides/bending-moment-diagram',
    '/guides/beam-deflection',
    '/guides/moment-of-inertia',
    '/solutions/students',
    '/solutions/engineers',
    '/solutions/educators',
    '/pricing',
    '/about',
    '/contact',
    '/resources',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/calculators') || route.startsWith('/products') ? 0.9 : 0.8,
  }));
}
