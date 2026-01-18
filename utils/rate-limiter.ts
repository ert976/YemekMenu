export interface RateLimitEntry {
  attempts: number;
  firstAttempt: number;
  lastAttempt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();
const DEFAULT_MAX_ATTEMPTS = 5;
const DEFAULT_WINDOW_MS = 60 * 1000; // 1 dakika

export function checkRateLimit(
  identifier: string,
  maxAttempts: number = DEFAULT_MAX_ATTEMPTS,
  windowMs: number = DEFAULT_WINDOW_MS,
): {
  allowed: boolean;
  remainingAttempts: number;
  resetTime: number;
  message?: string;
} {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  const getLimitMessage = (resetAt: number) => {
    const remainingSeconds = Math.ceil((resetAt - now) / 1000);
    return `Çok fazla deneme yaptınız. Lütfen ${remainingSeconds} saniye sonra tekrar deneyin.`;
  };

  if (!entry) {
    rateLimitStore.set(identifier, {
      attempts: 1,
      firstAttempt: now,
      lastAttempt: now,
    });
    return {
      allowed: true,
      remainingAttempts: maxAttempts - 1,
      resetTime: now + windowMs,
    };
  }

  const timeSinceFirstAttempt = now - entry.firstAttempt;

  if (timeSinceFirstAttempt > windowMs) {
    rateLimitStore.set(identifier, {
      attempts: 1,
      firstAttempt: now,
      lastAttempt: now,
    });
    return {
      allowed: true,
      remainingAttempts: maxAttempts - 1,
      resetTime: now + windowMs,
    };
  }

  if (entry.attempts >= maxAttempts) {
    const resetTime = entry.firstAttempt + windowMs;
    return {
      allowed: false,
      remainingAttempts: 0,
      resetTime,
      message: getLimitMessage(resetTime),
    };
  }

  entry.attempts += 1;
  entry.lastAttempt = now;
  rateLimitStore.set(identifier, entry);

  return {
    allowed: true,
    remainingAttempts: maxAttempts - entry.attempts,
    resetTime: entry.firstAttempt + windowMs,
  };
}

export function resetRateLimit(identifier: string): void {
  rateLimitStore.delete(identifier);
}

export function getRemainingTime(identifier: string): number {
  const entry = rateLimitStore.get(identifier);
  if (!entry) return 0;

  const resetTime = entry.firstAttempt + DEFAULT_WINDOW_MS;
  return Math.max(0, resetTime - Date.now());
}
