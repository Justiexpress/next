import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/privado'], // Rutas que no quieres que se indexen
    },
    sitemap: 'https://www.justiexpress.com/sitemap.xml',
  };
}