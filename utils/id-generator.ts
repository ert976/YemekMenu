/**
 * Güvenli ve benzersiz ID üretimi için utility fonksiyonları.
 *
 * Date.now() tabanlı ID üretimi, aynı milisaniyede birden fazla istek
 * geldiğinde çakışma riski taşır. Bu modül, crypto.randomUUID() veya
 * fallback yöntemleri kullanarak güvenli ID'ler üretir.
 */

/**
 * Benzersiz bir string ID üretir (UUID v4 formatında).
 *
 * @returns UUID formatında benzersiz string ID
 * @example
 * const id = generateUUID(); // "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 */
export function generateUUID(): string {
  // Browser environment with Web Crypto API
  if (
    typeof globalThis !== "undefined" &&
    globalThis.crypto &&
    typeof globalThis.crypto.randomUUID === "function"
  ) {
    return globalThis.crypto.randomUUID();
  }

  // Node.js environment
  if (typeof require !== "undefined") {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const nodeCrypto = require("crypto");
      if (nodeCrypto.randomUUID) {
        return nodeCrypto.randomUUID();
      }
    } catch {
      // Fallback if require fails
    }
  }

  // Fallback: Polyfill for environments without crypto support
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Benzersiz bir sayısal ID üretir.
 *
 * ID formatı: [timestamp (son 10 hane)] + [random 3 hane]
 * Bu format, sıralama için timestamp avantajını korurken
 * çakışma riskini minimize eder.
 *
 * @returns Benzersiz sayısal ID
 * @example
 * const id = generateNumericId(); // 1705766123456789
 */
export function generateNumericId(): number {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  // Son 10 hane timestamp + 3 hane random = 13 haneli ID
  return timestamp * 1000 + random;
}

/**
 * Belirli bir prefix ile benzersiz string ID üretir.
 *
 * @param prefix - ID'nin başına eklenecek ön ek
 * @returns Prefix'li benzersiz string ID
 * @example
 * const userId = generatePrefixedId("USR"); // "USR_a1b2c3d4"
 */
export function generatePrefixedId(prefix: string): string {
  const uuid = generateUUID();
  const shortId = uuid.split("-")[0]; // İlk 8 karakter
  return `${prefix}_${shortId}`;
}

/**
 * Veritabanı için güvenli bir primary key ID üretir.
 * MealPlan ve User gibi entityler için kullanılır.
 *
 * @returns Benzersiz sayısal ID
 */
export function generateEntityId(): number {
  return generateNumericId();
}
