/**
 * Lightweight analytics tracker for conversion buttons (Book Interview, WhatsApp, Download CV, etc.)
 */
export function trackConversion(action, label = '', details = {}) {
  try {
    // If Google Analytics / Gtag is loaded on window
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: 'Conversion',
        event_label: label,
        ...details,
      });
    }

    // Development diagnostic log
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event] Action: "${action}" | Label: "${label}"`, details);
    }
  } catch (err) {
    // Fail silently without disrupting user flow
    console.debug('Analytics event could not be logged:', err);
  }
}

