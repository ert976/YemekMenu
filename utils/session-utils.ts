/**
 * Anonymous Session Management for Demo Users
 * 
 * Her demo girişi benzersiz bir session ID alır.
 * Bu sayede farklı kullanıcılar birbirlerinin verilerini görmez.
 */

import { storage } from "./storage";
import { generateEntityId } from "./id-generator";

const SESSION_KEY = "@demo_session_id";
const SESSION_DATA_KEY = "@demo_session_data";

export interface DemoSessionData {
  sessionId: number;
  ratings: { food_id: number; rating: number }[];
  preferences: { likedIds: number[]; dislikedIds: number[] };
  meal_plans: any[];
  createdAt: number;
}

/**
 * Demo session ID'sini al veya yeni oluştur
 */
export const getDemoSessionId = async (): Promise<number> => {
  try {
    const existing = await storage.getItem(SESSION_KEY);
    if (existing) {
      return parseInt(existing, 10);
    }

    // Yeni session ID oluştur (negative ID kullan, gerçek user ID'lerle çakışmasın)
    const newSessionId = -1 * generateEntityId();
    await storage.setItem(SESSION_KEY, newSessionId.toString());
    
    // Session data'yı initialize et
    const initialData: DemoSessionData = {
      sessionId: newSessionId,
      ratings: [],
      preferences: { likedIds: [], dislikedIds: [] },
      meal_plans: [],
      createdAt: Date.now(),
    };
    await storage.setItem(SESSION_DATA_KEY, JSON.stringify(initialData));

    console.log(`[DemoSession] Created new session: ${newSessionId}`);
    return newSessionId;
  } catch (error) {
    console.error("[DemoSession] Error getting session ID:", error);
    throw error;
  }
};

/**
 * Demo session data'yı al
 */
export const getDemoSessionData = async (): Promise<DemoSessionData | null> => {
  try {
    const data = await storage.getItem(SESSION_DATA_KEY);
    if (!data) return null;
    return JSON.parse(data);
  } catch (error) {
    console.error("[DemoSession] Error getting session data:", error);
    return null;
  }
};

/**
 * Demo session data'yı kaydet
 */
export const saveDemoSessionData = async (data: DemoSessionData): Promise<void> => {
  try {
    await storage.setItem(SESSION_DATA_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("[DemoSession] Error saving session data:", error);
    throw error;
  }
};

/**
 * Demo session'a rating ekle
 */
export const addDemoRating = async (
  foodId: number,
  rating: number
): Promise<void> => {
  try {
    const sessionData = await getDemoSessionData();
    if (!sessionData) {
      console.error("[DemoSession] No active session to add rating");
      return;
    }

    // Mevcut rating'i bul ve güncelle veya yeni ekle
    const existingIndex = sessionData.ratings.findIndex(r => r.food_id === foodId);
    
    if (existingIndex >= 0) {
      sessionData.ratings[existingIndex].rating = rating;
    } else {
      sessionData.ratings.push({ food_id: foodId, rating });
    }

    // Preferences'ı otomatik güncelle (5-point scale)
    if (rating >= 4) {
      if (!sessionData.preferences.likedIds.includes(foodId)) {
        sessionData.preferences.likedIds.push(foodId);
      }
      sessionData.preferences.dislikedIds = sessionData.preferences.dislikedIds.filter(
        id => id !== foodId
      );
    } else if (rating <= 2) {
      if (!sessionData.preferences.dislikedIds.includes(foodId)) {
        sessionData.preferences.dislikedIds.push(foodId);
      }
      sessionData.preferences.likedIds = sessionData.preferences.likedIds.filter(
        id => id !== foodId
      );
    }

    await saveDemoSessionData(sessionData);
    console.log(`[DemoSession] Added rating: Food ${foodId} = ${rating}⭐`);
  } catch (error) {
    console.error("[DemoSession] Error adding rating:", error);
  }
};

/**
 * Demo session'ı temizle (logout veya migration sonrası)
 */
export const clearDemoSession = async (): Promise<void> => {
  try {
    await storage.removeItem(SESSION_KEY);
    await storage.removeItem(SESSION_DATA_KEY);
    console.log("[DemoSession] Session cleared");
  } catch (error) {
    console.error("[DemoSession] Error clearing session:", error);
  }
};

/**
 * Demo session'ı gerçek kullanıcıya migrate et
 */
export const migrateDemoToUser = async (
  newUserId: number
): Promise<DemoSessionData | null> => {
  try {
    const sessionData = await getDemoSessionData();
    if (!sessionData) {
      console.log("[DemoSession] No session data to migrate");
      return null;
    }

    console.log(`[DemoSession] Migrating session ${sessionData.sessionId} → User ${newUserId}`);
    console.log(`[DemoSession] Migrating ${sessionData.ratings.length} ratings`);
    console.log(`[DemoSession] Migrating ${sessionData.preferences.likedIds.length} likes`);
    console.log(`[DemoSession] Migrating ${sessionData.meal_plans.length} meal plans`);

    return sessionData;
  } catch (error) {
    console.error("[DemoSession] Migration error:", error);
    return null;
  }
};

/**
 * Demo user mu kontrol et
 */
export const isDemoUser = (userId: number): boolean => {
  return userId === 999999; // Demo user ID (state.ts'den)
};
