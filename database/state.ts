import { MealPlan, User, UserRating } from "../types";
import { storage } from "../utils/storage";

// Uygulama Durumu (App State)
export const appState: {
  users: User[];
  user_ratings: UserRating[];
  meal_plans: MealPlan[];
  preferences: {
    [userId: number]: { likedIds: number[]; dislikedIds: number[] };
  };
} = {
  users: [],
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
