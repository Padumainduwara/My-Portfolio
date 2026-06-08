'use client';

import { useReportWebVitals } from 'next/web-vitals';

/**
 * Web Vitals Reporter
 *
 * Reports Core Web Vitals (CLS, FCP, FID, INP, LCP, TTFB) to:
 * 1. Vercel Analytics (auto)
 * 2. Google Analytics (if gtag available)
 * 3. Console (dev only)
 */
export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }

    if (process.env.NODE_ENV === 'development') {
      const v = metric.name === 'CLS' ? metric.value.toFixed(4) : Math.round(metric.value);
      console.log(`[Web Vitals] ${metric.name}: ${v} (${metric.rating})`);
    }
  });

  return null;
}
