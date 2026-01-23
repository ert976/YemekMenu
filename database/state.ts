import { MealPlan, User, UserRating } from "../types";
import { storage } from "../utils/storage";
import { hashPassword } from "../utils/auth-utils";

// Demo kullanıcı için sabit hash (demoparola için önceden hesaplanmış)
// Hash: SHA256("demoparola" + "yemekmenu_salt")
const DEMO_USER_HASH = "cd649cd0467e079f8ddd08263cb5e3556fde945f86de67605f143ae76c495a00";

// Uygulama Durumu (App State)
export const appState: {
  users: User[];
  user_ratings: UserRating[];
  meal_plans: MealPlan[];
  preferences: {
    [userId: number]: { likedIds: number[]; dislikedIds: number[] };
  };
} = {
  users: [
    {
      id: 999999, // Demo kullanıcı için özel ID (food ID'leriyle çakışmamak için)
      username: "demokullanici",
      email: "demo@yemekmenu.app",
      passwordHash: DEMO_USER_HASH,
      lastActivity: Date.now(),
    },
  ],
  user_ratings: [],
  meal_plans: [],
  preferences: {},
};

export const STORAGE_KEY = "@yemekmenu_storage";

export const loadState = async () => {
  try {
    const saved = await storage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      appState.users = parsed.users || [];
      appState.user_ratings = parsed.user_ratings || [];
      appState.meal_plans = parsed.meal_plans || [];
      appState.preferences = parsed.preferences || {};
    }
  } catch (e) {
    console.error("Yükleme hatası:", e);
  }
};

export const saveState = async () => {
  try {
    await storage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.error("Kaydetme hatası:", e);
  }
};

// İlk yükleme
loadState();
