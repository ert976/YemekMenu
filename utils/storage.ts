import { Platform } from "react-native";

/**
 * Uygulama genelinde kullanılan evrensel depolama katmanı.
 * Web'de localStorage, Native'de ise bellek içi (veya AsyncStorage) kullanımını soyutlar.
 */
class UniversalStorage {
  private memoryStore: Record<string, string> = {};

  async getItem(key: string): Promise<string | null> {
    if (Platform.OS === "web") {
      return localStorage.getItem(key);
    }
    return this.memoryStore[key] || null;
  }

  async setItem(key: string, value: string): Promise<void> {
    if (Platform.OS === "web") {
      localStorage.setItem(key, value);
    } else {
      this.memoryStore[key] = value;
    }
  }

  async removeItem(key: string): Promise<void> {
    if (Platform.OS === "web") {
      localStorage.removeItem(key);
    } else {
      delete this.memoryStore[key];
    }
  }
}

export const storage = new UniversalStorage();
