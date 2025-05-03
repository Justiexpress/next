'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'mobile',
      duration: 1500,
    });

    const preloadImages = ['logo.png', 'hero-background.jpg'];
    preloadImages.forEach(image => {
      const img = new Image();
      img.src = `/assets/img/${image}`;
    });
  }, []);

  return <>{children}</>;
}