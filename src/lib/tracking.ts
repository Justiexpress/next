export const trackConversion = (eventName: string, eventData = {}) => {
  if (typeof window !== 'undefined') {
    // Google Analytics
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