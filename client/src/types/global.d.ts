declare global {
  function gtag(
    command: 'config' | 'event' | 'exception' | 'page_view' | 'timing_complete',
    targetId: string,
    config?: {
      [key: string]: any;
      event_category?: string;
      event_label?: string;
      value?: number;
      description?: string;
      fatal?: boolean;
    }
  ): void;

  interface PerformanceEntry {
    processingStart?: number;
    hadRecentInput?: boolean;
    value?: number;
  }

  interface PerformanceNavigationTiming {
    navigationStart?: number;
  }
}

export {}; 