import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

/**
 * Uygulama genelinde kullanılan evrensel depolama katmanı.
 * Web'de localStorage, Native'de AsyncStorage kullanır.
 * Artık mobile'de de kalıcı depolama var! ✅
 */
class UniversalStorage {
  async getItem(key: string): Promise<string | null> {
    if (Platform.OS === "web" && typeof localStorage !== "undefined") {
      return localStorage.getItem(key);
    }
    // Mobile'de AsyncStorage kullan (kalıcı!)
    return await AsyncStorage.getItem(key);
  }

  async setItem(key: string, value: string): Promise<void> {
    if (Platform.OS === "web" && typeof localStorage !== "undefined") {
      localStorage.setItem(key, value);
    } else {
      // Mobile'de AsyncStorage kullan (kalıcı!)
      await AsyncStorage.setItem(key, value);
    }
  }

  async removeItem(key: string): Promise<void> {
    if (Platform.OS === "web" && typeof localStorage !== "undefined") {
      localStorage.removeItem(key);
    } else {
      await AsyncStorage.removeItem(key);
    }
  }

  /**
   * Tüm veriyi temizle (logout vs. için)
   */
  async clear(): Promise<void> {
    if (Platform.OS === "web" && typeof localStorage !== "undefined") {
      localStorage.clear();
    } else {
      await AsyncStorage.clear();
    }
  }

  /**
   * Tüm key'leri listele (debug için)
   */
  async getAllKeys(): Promise<string[]> {
    if (Platform.OS === "web" && typeof localStorage !== "undefined") {
      return Object.keys(localStorage);
    }
    return await AsyncStorage.getAllKeys();
  }
}

export const storage = new UniversalStorage();
