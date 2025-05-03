import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // URL base de tu sitio web
  const baseUrl = 'https://www.justiexpress.com';
  
  // Fecha actual para lastModified
  const currentDate = new Date().toISOString();
  
  // Definición de las rutas principales de tu sitio
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // Si tienes una página de términos y condiciones
    {
      url: `${baseUrl}/tyc`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // Si tienes una política de privacidad
    {
      url: `${baseUrl}/privacidad`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}