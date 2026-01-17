// Auth Rate Limiting ve Utility Functions

// Rate limiting için attempt tracking
interface RateLimitTracker {
  username: string;
  attempts: number;
  lastAttempt: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitTracker>();

// Rate limit: max 5 attempt/dakika
export const RATE_LIMIT_MAX_ATTEMPTS = 5;
export const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 dakika

export function checkRateLimit(username: string): { allowed: boolean; message?: string } {
  const now = Date.now();
  const tracker = rateLimitMap.get(username);

  if (!tracker) {
    // İlk attempt
    rateLimitMap.set(username, {
      username,
      attempts: 1,
      lastAttempt: now,
      resetAt: now + RATE_LIMIT_WINDOW_MS
    });
    return { allowed: true };
  }

  // Time window kontrolü
  if (now > tracker.resetAt) {
    // Reset
    rateLimitMap.set(username, {
      username,
      attempts: 1,
      lastAttempt: now,
      resetAt: now + RATE_LIMIT_WINDOW_MS
    });
    return { allowed: true };
  }

  // Attempt limit kontrolü
  if (tracker.attempts >= RATE_LIMIT_MAX_ATTEMPTS) {
    const remainingTime = Math.ceil((tracker.resetAt - now) / 1000);
    return {
      allowed: false,
      message: `Çok fazla deneme. ${remainingTime} saniye bekleyin.`
    };
  }

  // Artır ve devam et
  tracker.attempts++;
  tracker.lastAttempt = now;
  rateLimitMap.set(username, tracker);
  return { allowed: true };
}

export function resetRateLimit(username: string): void {
  rateLimitMap.delete(username);
}

// Password complexity check
export interface PasswordCheckResult {
  isValid: boolean;
  errors: string[];
}

export function checkPasswordComplexity(password: string): PasswordCheckResult {
  const errors: string[] = [];

  // Minimum uzunluk: 8 karakter
  if (password.length < 8) {
    errors.push('Şifre en az 8 karakter olmalı');
  }

  // Maksimum uzunluk: 128 karakter
  if (password.length > 128) {
    errors.push('Şifre en fazla 128 karakter olabilir');
  }

  // Büyük harf kontrolü
  if (!/[A-Z]/.test(password)) {
    errors.push('Şifre en az bir büyük harf içermeli');
  }

  // Küçük harf kontrolü
  if (!/[a-z]/.test(password)) {
    errors.push('Şifre en az bir küçük harf içermeli');
  }

  // Rakam kontrolü
  if (!/[0-9]/.test(password)) {
    errors.push('Şifre en az bir rakam içermeli');
  }

  // Özel karakter kontrolü
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Şifre en az bir özel karakter içermeli (!@#$%^&*(),.?":{}|<>)');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
