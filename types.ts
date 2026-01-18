export type DietType =
  | "normal"
  | "vegetarian"
  | "vegan"
  | "lowcarb"
  | "glutenfree";

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Food {
  id: number;
  name: string;
  image_url: string;
  category: string;
  is_vegetarian: boolean;
  is_vegan: boolean;
  is_halal?: boolean;
  nutritionalInfo?: NutritionalInfo;
  priceLevel?: 1 | 2 | 3;
  estimatedPrice?: number;
  subCategory?: "main" | "side" | "drink" | "bakery"; // Kahvaltı detayları için
  reasonTag?: string; // Algoritma rozeti (örn: "Favoriniz")
  reasonType?: "preference" | "economy" | "health" | "variety";
}

export type FoodCategory =
  | "Çorbalar"
  | "Sebze Yemekleri"
  | "Etli Yemekler"
  | "Baklagiller"
  | "Makarna & Pilav"
  | "Hamur İşleri"
  | "Döner & Kebap"
  | "Pizzalar"
  | "Burgerler"
  | "Salatalar"
  | "Mezeler"
  | "Tatlılar"
  | "Şerbetli Tatlılar"
  | "Sütlü Tatlılar"
  | "İçecekler"
  | "Kahvaltı"
  | "Fast Food"
  | "Izgara & Mangal"
  | "Deniz Ürünleri"
  | "Sokak Lezzetleri";

export interface User {
  id: number;
  username: string;
  email: string;
  passwordHash?: string;
  avatarUrl?: string;
  lastActivity?: number;
}

export interface UserRating {
  id: number;
  user_id: number;
  food_id: number;
  rating: number;
}

export interface DailyMeal {
  breakfast: Food[]; // Artık serpme kahvaltı (dizi)
  lunch: Food | null;
  dinner: Food | null;
  snack?: Food | null;
  nutritionDescription?: string;
}

export interface MealPlan {
  id: number;
  userId: number;
  dietPreference: DietType;
  plan_data: DailyMeal[];
  weekly_groups?: DailyMeal[][];
  createdAt: string;
}

export interface MenuSuggestion {
  meals: DailyMeal[];
  dietPreference: DietType;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: AppError;
}

export interface AppError {
  code: string;
  message: string;
  details?: any;
}

export interface Database {
  execAsync: (sql: string) => Promise<any>;
  runAsync: (
    sql: string,
    params?: any[],
  ) => Promise<{ lastInsertRowId: number }>;
  getFirstAsync: (sql: string, params?: any[]) => Promise<any>;
  getAllAsync: (sql: string, params?: any[]) => Promise<any[]>;
}

export interface SurveyResponse {
  userId: number;
  diet_preference: DietType;
  allergies: string[];
  disliked_categories: string[];
  goal: "weight_loss" | "muscle_gain" | "maintenance" | "healthy_eating";
}
