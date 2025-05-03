export const trackConversion = (eventName: string, eventData = {}) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', eventName, {
          'send_to': 'AW-697508779/tF-ACKqxyb4aEKvHzMwC',
          ...eventData
        });
      }
      
      // Facebook Pixel
      if (window.fbq) {
        window.fbq('track', eventName, eventData);
      }
    }
  };