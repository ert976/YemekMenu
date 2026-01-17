import { hashPassword, verifyPassword } from '../utils/crypto-utils';
import { checkRateLimit, resetRateLimit } from '../utils/rate-limiter';
import { validatePassword, getPasswordStrength } from '../utils/password-validator';

describe('crypto-utils', () => {
  describe('hashPassword', () => {
    it('should generate a hash with salt', async () => {
      const password = 'testPassword123';
      const hash = await hashPassword(password);

      expect(hash).toBeDefined();
      expect(hash).toContain(':');
      const [salt, hashedKey] = hash.split(':');
      expect(salt).toBeDefined();
      expect(hashedKey).toBeDefined();
      expect(salt.length).toBe(32);
      expect(hashedKey.length).toBe(64);
    });

    it('should generate hash in correct format', async () => {
      const password = 'testPassword123';
      const hash = await hashPassword(password);

      expect(hash).toMatch(/^[a-f0-9]{32}:[a-f0-9]{64}$/);
    });
  });

  describe('verifyPassword', () => {
    it('should verify correct password', async () => {
      const password = 'testPassword123';
      const hash = await hashPassword(password);
      const isValid = await verifyPassword(password, hash);

      expect(isValid).toBe(true);
    });

    it('should reject incorrect password', async () => {
      const password = 'testPassword123';
      const hash = await hashPassword(password);
      const isValid = await verifyPassword('wrongPassword', hash);

      expect(isValid).toBe(false);
    });

    it('should handle invalid hash format', async () => {
      const isValid = await verifyPassword('password', 'invalidHash');

      expect(isValid).toBe(false);
    });
  });
});

describe('rate-limiter', () => {
  beforeEach(() => {
    resetRateLimit('test-user');
  });

  describe('checkRateLimit', () => {
    it('should allow first attempt', () => {
      const result = checkRateLimit('test-user');

      expect(result.allowed).toBe(true);
      expect(result.remainingAttempts).toBe(4);
    });

    it('should allow multiple attempts under limit', () => {
      for (let i = 0; i < 3; i++) {
        const result = checkRateLimit('test-user');
        expect(result.allowed).toBe(true);
      }

      const result = checkRateLimit('test-user');
      expect(result.remainingAttempts).toBe(1);
    });

    it('should block attempts over limit', () => {
      for (let i = 0; i < 5; i++) {
        checkRateLimit('test-user');
      }

      const result = checkRateLimit('test-user');
      expect(result.allowed).toBe(false);
      expect(result.remainingAttempts).toBe(0);
    });

    it('should reset after window expires', () => {
      for (let i = 0; i < 5; i++) {
        checkRateLimit('test-user');
      }

      jest.useFakeTimers();
      jest.advanceTimersByTime(61 * 1000);

      const result = checkRateLimit('test-user');
      expect(result.allowed).toBe(true);
      expect(result.remainingAttempts).toBe(4);
      jest.useRealTimers();
    });

    it('should handle different users independently', () => {
      for (let i = 0; i < 5; i++) {
        checkRateLimit('user1');
      }

      const result = checkRateLimit('user2');
      expect(result.allowed).toBe(true);
    });
  });

  describe('resetRateLimit', () => {
    it('should reset rate limit for user', () => {
      for (let i = 0; i < 5; i++) {
        checkRateLimit('test-user');
      }

      resetRateLimit('test-user');

      const result = checkRateLimit('test-user');
      expect(result.allowed).toBe(true);
      expect(result.remainingAttempts).toBe(4);
    });
  });
});

describe('password-validator', () => {
  describe('validatePassword', () => {
    it('should accept valid password', () => {
      const result = validatePassword('Test123!@#');

      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should reject short password', () => {
      const result = validatePassword('Test1!');

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Şifre en az 8 karakter olmalı');
    });

    it('should reject password without uppercase', () => {
      const result = validatePassword('test123!@#');

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Şifre en az bir büyük harf içermeli');
    });

    it('should reject password without lowercase', () => {
      const result = validatePassword('TEST123!@#');

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Şifre en az bir küçük harf içermeli');
    });

    it('should reject password without numbers', () => {
      const result = validatePassword('Test!@#');

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Şifre en az bir rakam içermeli');
    });

    it('should reject password without special characters', () => {
      const result = validatePassword('Test12345');

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Şifre en az bir özel karakter içermeli');
    });

    it('should reject password with sequential characters', () => {
      const result = validatePassword('Test123abc!');
      expect(result.isValid).toBe(true);

      const result2 = validatePassword('123abcABC!');
      expect(result2.isValid).toBe(false);
      expect(result2.errors.some(e => e.includes('tahmin edilebilir desenler'))).toBe(true);
    });

    it('should reject password with repeated characters', () => {
      const result = validatePassword('Taaab123!@#');

      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.includes('tahmin edilebilir desenler'))).toBe(true);
    });

    it('should reject common passwords', () => {
      const result = validatePassword('Password123!');

      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Şifre yaygın kelimeler içermemeli');
    });
  });

  describe('getPasswordStrength', () => {
    it('should return strength 1 for very weak password', () => {
      const strength = getPasswordStrength('a');
      expect(strength).toBe(1);
    });

    it('should return strength 2 for weak password', () => {
      const strength = getPasswordStrength('abcdefgh');
      expect(strength).toBe(2);
    });

    it('should return strength 3 for moderate password', () => {
      const strength = getPasswordStrength('Abcdefgh');
      expect(strength).toBe(3);
    });

    it('should return strength 4 for good password', () => {
      const strength = getPasswordStrength('Abcdef1gh');
      expect(strength).toBe(4);
    });

    it('should return strength 5 for strong password', () => {
      const strength = getPasswordStrength('Abcdef1!gh');
      expect(strength).toBe(5);
    });

    it('should return strength 5 for very strong password', () => {
      const strength = getPasswordStrength('Abcdef1!ghij');
      expect(strength).toBe(5);
    });

    it('should cap strength at 5', () => {
      const strength = getPasswordStrength('Abcdef1!ghijklmnopqrs');
      expect(strength).toBe(5);
    });
  });
});
