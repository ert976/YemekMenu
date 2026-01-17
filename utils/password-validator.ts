export interface PasswordValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface PasswordComplexityRules {
  minLength: number;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumbers: boolean;
  requireSpecialChars: boolean;
  forbiddenPatterns?: RegExp[];
}

const DEFAULT_RULES: PasswordComplexityRules = {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true,
  forbiddenPatterns: [
    /(.)\1{2,}/, // 3 veya daha fazla ardışık aynı karakter (örn: aaa)
    /^(012|123|234|345|456|567|678|789|890|987|876|765|654|543|432|321|210)/, // Artan/azalan sayı dizileri
    /^(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|zyx|yxw|xwv|wvu|vut|uts|tsr|srq|rqp|qpo|pon|onm|nml|mlk|lkj|kji|ijh|hgf|gfe|fed|edc|dcb|cba)/i // Artan/azalan harf dizileri
  ]
};

export function validatePassword(
  password: string,
  rules: PasswordComplexityRules = DEFAULT_RULES
): PasswordValidationResult {
  const errors: string[] = [];

  if (password.length < rules.minLength) {
    errors.push(`Şifre en az ${rules.minLength} karakter olmalı`);
  }

  if (rules.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Şifre en az bir büyük harf içermeli');
  }

  if (rules.requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Şifre en az bir küçük harf içermeli');
  }

  if (rules.requireNumbers && !/\d/.test(password)) {
    errors.push('Şifre en az bir rakam içermeli');
  }

  if (rules.requireSpecialChars && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Şifre en az bir özel karakter içermeli');
  }

  if (rules.forbiddenPatterns) {
    for (const pattern of rules.forbiddenPatterns) {
      if (pattern.test(password)) {
        errors.push('Şifre tahmin edilebilir desenler içermemeli (örn: aaa, 123, abc)');
        break;
      }
    }
  }

  if (password.toLowerCase().includes('password') || 
      password.toLowerCase().includes('sifre') ||
      password.toLowerCase().includes('123456')) {
    errors.push('Şifre yaygın kelimeler içermemeli');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function getPasswordStrength(password: string): number {
  let strength = 0;

  if (password.length >= 8) strength += 1;
  if (password.length >= 12) strength += 1;
  if (password.length >= 16) strength += 1;
  if (/[a-z]/.test(password)) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/\d/.test(password)) strength += 1;
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength += 1;
  if (password.length >= 20 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength += 1;

  return Math.min(strength, 5);
}

export function getPasswordStrengthLabel(strength: number): string {
  switch (strength) {
    case 0:
      return 'Çok Zayıf';
    case 1:
      return 'Zayıf';
    case 2:
      return 'Orta';
    case 3:
      return 'İyi';
    case 4:
      return 'Güçlü';
    case 5:
      return 'Çok Güçlü';
    default:
      return 'Bilinmiyor';
  }
}
