export const trackConversion = (eventName: string, eventData = {}) => {
  if (typeof window !== 'undefined') {
    // Enviar a la capa de datos de GTM
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...eventData
      });
    }
    
    // Google Ads
    const w = window as any;
    if (w.gtag) {
      w.gtag('event', eventName, {
        'send_to': 'AW-697508779/tF-ACKqxyb4aEKvHzMwC',
        ...eventData
      });
    }
    
    // Facebook Pixel
    if (w.fbq) {
      w.fbq('track', eventName, eventData);
    }
  }
};