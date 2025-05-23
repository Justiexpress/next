import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import '@fontsource/open-sans';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import '../styles/globals.scss';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Justiexpress | Tutelas, Derechos de Petición y Asesoría Legal',
  description: 'Tutelas, derechos de petición, reclamaciones, asesorías. Abogados expertos. ¡Contáctanos ya!',
  keywords: 'tutela colombia, derecho de petición, abogados online, asesoría legal digital, reclamaciones legales, desacatos, impugnaciones, contratos, justiexpress',
  openGraph: {
    title: 'Justiexpress | Asesoría Legal Online en Colombia',
    description: 'Servicios legales profesionales: Acciones de tutela, derechos de petición, reclamaciones, desacatos e impugnaciones. ¡Contáctanos ahora!',
    url: 'https://www.justiexpress.com',
    siteName: 'Justiexpress',
    images: [
      {
        url: 'https://www.justiexpress.com/logo-social.png',
        width: 1200,
        height: 630,
        alt: 'Justiexpress Logo',
      },
    ],
    locale: 'es-CO',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.justiexpress.com',
    languages: {
      'es-co': 'https://www.justiexpress.com',
    },
  },
  robots: 'index, follow, max-image-preview:large',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tagmanager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9B26PB');
          `}
        </Script>
        {/* Fin Google Tag Manager */}

        {/* Mantenemos Google Analytics por compatibilidad */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0RH4X36HRM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0RH4X36HRM');
          `}
        </Script>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/apple-touch-icon-167x167.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9B26PB"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* Fin Google Tag Manager (noscript) */}
        
        <div className="app-container" itemScope itemType="https://schema.org/LegalService">
          <meta itemProp="name" content="Justiexpress - Servicios Legales Online" />
          <meta itemProp="description" content="Servicios legales profesionales en Colombia: tutelas, derechos de petición y asesoría jurídica" />
          <link itemProp="image" href="https://www.justiexpress.com/logo.png" />
          <meta itemProp="telephone" content="+573185725324" />
          <meta itemProp="email" content="justiexpress@gmail.com" />
          <meta itemProp="address" content="Calle 45 # 6-58" />
          <meta itemProp="priceRange" content="$" />
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}