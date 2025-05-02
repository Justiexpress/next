import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import '../styles/globals.scss';

// Importar estilos globales
import '@fontsource/open-sans';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import '../components/BarraNav/BarraNav.module.scss';
import '../components/Contador/Contador.module.scss';
import '../components/Quote/Quote.module.scss';
import '../components/Servicios/ServiciosCard.module.scss';
import '../components/Form/Form.module.scss';
import '../components/Testimonios/Testimonios.module.scss';
import '../components/QuienesSomos/QuienesSomos.module.scss';
import '../components/Footer/Footer.module.scss';
import '../components/SocialBar/SocialBar.module.scss';

// Función para trackear eventos de conversión
export const trackConversion = (eventName: string, eventData = {}) => {
  // Google Analytics / Google Ads
  const gtagFunction = (window as any).gtag;
  if (gtagFunction) {
    gtagFunction('event', eventName, {
      'send_to': 'AW-697508779/tF-ACKqxyb4aEKvHzMwC',
      ...eventData
    });
  }

  // Facebook Pixel tracking
  const fbqFunction = (window as any).fbq;
  if (fbqFunction) {
    fbqFunction('track', eventName, eventData);
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Inicializar AOS con opciones optimizadas
    AOS.init({
      once: true, // Animaciones solo una vez
      disable: 'mobile', // Deshabilitar en móviles para mejor rendimiento
      duration: 1500, // Reducir duración para mejor rendimiento
    });
    
    // Precargar imágenes críticas
    const preloadImages = ['logo.png', 'hero-background.jpg'];
    preloadImages.forEach(image => {
      const img = new Image();
      img.src = `/assets/img/${image}`;
    });
  }, []);

  return (
    <HelmetProvider>
      <Component {...pageProps} trackConversion={trackConversion} />
    </HelmetProvider>
  );
}

export default MyApp;