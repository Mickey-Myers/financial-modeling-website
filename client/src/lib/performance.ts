// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Record<string, any> = {};

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Track Core Web Vitals
  trackCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    this.trackLCP();
    
    // First Input Delay (FID)
    this.trackFID();
    
    // Cumulative Layout Shift (CLS)
    this.trackCLS();
    
    // First Contentful Paint (FCP)
    this.trackFCP();
  }

  private trackLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.sendToAnalytics('LCP', lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  private trackFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.processingStart !== undefined) {
            this.metrics.fid = entry.processingStart - entry.startTime;
            this.sendToAnalytics('FID', entry.processingStart - entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  private trackCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput && entry.value !== undefined) {
            clsValue += entry.value;
          }
        }
        this.metrics.cls = clsValue;
        this.sendToAnalytics('CLS', clsValue);
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  private trackFCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            this.sendToAnalytics('FCP', entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }

  private sendToAnalytics(metric: string, value: number) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: metric,
        value: Math.round(value)
      });
    }
  }

  // Track page load performance
  trackPageLoad() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            connection: navigation.connectEnd - navigation.connectStart,
            request: navigation.responseStart - navigation.requestStart,
            response: navigation.responseEnd - navigation.responseStart,
            dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            load: navigation.loadEventEnd - navigation.loadEventStart,
            total: navigation.loadEventEnd - (navigation.navigationStart || 0)
          };

          this.metrics.pageLoad = metrics;
          
          // Send to analytics
          if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_metrics', {
              event_category: 'Performance',
              custom_parameter_1: metrics.total
            });
          }
        }
      }, 0);
    });
  }

  // Get all collected metrics
  getMetrics() {
    return this.metrics;
  }
}

// Lazy loading utility for images
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  const monitor = PerformanceMonitor.getInstance();
  monitor.trackCoreWebVitals();
  monitor.trackPageLoad();
  
  // Setup lazy loading
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLazyLoading);
  } else {
    setupLazyLoading();
  }
} 