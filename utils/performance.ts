import { Platform } from 'react-native';

// Performance monitoring utilities
export class PerformanceMonitor {
  private static metrics: Map<string, number> = new Map();
  private static startTimes: Map<string, number> = new Map();

  // Performans ölçümünü başlat
  static startTimer(name: string): void {
    this.startTimes.set(name, Date.now());
  }

  // Performans ölçümünü bitir ve kaydet
  static endTimer(name: string): number {
    const startTime = this.startTimes.get(name);
    if (!startTime) {
      console.warn(`Timer '${name}' was not started`);
      return 0;
    }

    const duration = Date.now() - startTime;
    this.recordMetric(name, duration);
    this.startTimes.delete(name);
    
    return duration;
  }

  // Metrik kaydet
  static recordMetric(name: string, value: number): void {
    this.metrics.set(name, value);
    
    // Log warning for slow operations
    if (value > 1000) { // 1 second
      console.warn(`Slow operation detected: ${name} took ${value}ms`);
    }
  }

  // Metrikleri getir
  static getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  // Tüm metrikleri getir
  static getAllMetrics(): Record<string, number> {
    const result: Record<string, number> = {};
    this.metrics.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }

  // Metrikleri temizle
  static clearMetrics(): void {
    this.metrics.clear();
    this.startTimes.clear();
  }

  // Memory usage kontrolü (basit)
  static getMemoryUsage(): string {
    if (Platform.OS === 'web') {
      return 'Web platform - memory monitoring not available';
    }
    
    // React Native için basit memory kontrolü
    return 'Memory monitoring available in production';
  }

  // Component render performansı
  static measureComponentRender<T>(
    componentName: string,
    renderFunction: () => T
  ): T {
    this.startTimer(`${componentName}_render`);
    const result = renderFunction();
    this.endTimer(`${componentName}_render`);
    return result;
  }

  // Async operation performansı
  static async measureAsync<T>(
    name: string,
    asyncFunction: () => Promise<T>
  ): Promise<T> {
    this.startTimer(name);
    try {
      const result = await asyncFunction();
      this.endTimer(name);
      return result;
    } catch (error) {
      this.endTimer(name);
      throw error;
    }
  }
}

// React Hook for performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  const measureRender = <T>(renderFunction: () => T): T => {
    return PerformanceMonitor.measureComponentRender(componentName, renderFunction);
  };

  const measureAsync = async <T>(
    name: string,
    asyncFunction: () => Promise<T>
  ): Promise<T> => {
    return PerformanceMonitor.measureAsync(`${componentName}_${name}`, asyncFunction);
  };

  return {
    measureRender,
    measureAsync,
    getMetrics: PerformanceMonitor.getAllMetrics,
    clearMetrics: PerformanceMonitor.clearMetrics,
  };
};

// Performance optimization utilities
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

// Image caching utility
export const ImageCache = {
  cache: new Map<string, any>(),
  
  get(key: string): any {
    return this.cache.get(key);
  },
  
  set(key: string, value: any): void {
    this.cache.set(key, value);
  },
  
  clear(): void {
    this.cache.clear();
  },
  
  size(): number {
    return this.cache.size;
  }
};
