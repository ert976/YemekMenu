// YemekMenu Proje Type Definitions
// Tüm interface ve type'ları tek dosyada toplama

// ====================
// TEMEL TYPE'LAR
// ====================

export interface Food {
  id: number;
  name: string;
  image_url: string;
  category: FoodCategory;
  is_vegetarian: 0 | 1;
  is_vegan: 0 | 1;
  is_halal?: 0 | 1;
}

export type FoodCategory = 
  | 'Çorbalar'
  | 'Baklagiller'
  | 'Sebze Yemekleri'
  | 'Hamur İşleri'
  | 'Şerbetli Tatlılar'
  | 'Sütlü Tatlılar'
  | 'Kahvaltı'
  | 'Sokak Lezzetleri'
  | 'Izgara & Mangal'
  | 'İçecekler'
  | 'Döner & Kebap';

export interface User {
  id: number;
  username: string;
  email: string;
  password?: string; // sadece database'de
}

export interface UserRating {
  id: number;
  user_id: number;
  food_id: number;
  rating: number;
  created_at?: string;
}

// ====================
// DİYET TYPE'LARI
// ====================

export type DietType = 'normal' | 'vegetarian' | 'vegan' | 'lowcarb' | 'glutenfree';

export interface DietFilter {
  type: DietType;
  showHalalOnly?: boolean;
}

// ====================
// MENÜ PLANLAMA
// ====================

export interface MealPlan {
  id: number;
  userId: number;
  plan_data: string; // JSON string
  diet_preference: DietType;
  created_at?: string;
}

export interface DailyMeal {
  day: number;
  breakfast: Food | null;
  lunch: Food | null;
  dinner: Food | null;
  snack?: Food | null;
}

export interface MenuSuggestion {
  meals: DailyMeal[];
  totalCalories?: number;
  dietPreference: DietType;
}

// ====================
// NUTRISYON BİLGİLERİ
// ====================

export interface NutritionalInfo {
  calories: number;
  protein: number; // gram
  carbs: number; // gram
  fat: number; // gram
  fiber?: number; // gram
  sugar?: number; // gram
  sodium?: number; // mg
}

// ====================
// AUTH CONTEXT
// ====================

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

// ====================
// DATABASE TYPE'LARI
// ====================

export interface Database {
  execAsync: (sql: string) => Promise<any[]>;
  runAsync: (sql: string, params?: any[]) => Promise<{ lastInsertRowId: number }>;
  getFirstAsync: (sql: string, params?: any[]) => Promise<any>;
  getAllAsync: (sql: string, params?: any[]) => Promise<any[]>;
}

// ====================
// API RESPONSE TYPE'LARI
// ====================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
}

// ====================
// UI COMPONENT TYPE'LARI
// ====================

export interface FoodCardProps {
  food: Food;
  onPress?: (food: Food) => void;
  onRating?: (foodId: number, rating: number) => void;
  showRating?: boolean;
  userRating?: number;
}

export interface RatingComponentProps {
  foodId: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

export interface FilterOptions {
  categories?: FoodCategory[];
  dietTypes?: DietType[];
  vegetarianOnly?: boolean;
  veganOnly?: boolean;
  halalOnly?: boolean;
}

// ====================
// FORM TYPE'LARI
// ====================

export interface LoginForm {
  username: string;
  password: string;
}

export interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface MealPlanForm {
  dietPreference: DietType;
  showHalalOnly: boolean;
  calorieTarget?: number;
  days: number;
}

// ====================
// ERROR TYPE'LARI
// ====================

export interface AppError {
  code: string;
  message: string;
  details?: any;
}

export type ErrorCode = 
  | 'NETWORK_ERROR'
  | 'AUTH_ERROR'
  | 'VALIDATION_ERROR'
  | 'DATABASE_ERROR'
  | 'NOT_FOUND'
  | 'PERMISSION_DENIED'
  | 'UNKNOWN_ERROR';

// ====================
// UTILITY TYPE'LAR
// ====================

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Yemek ID'sine göre yemek bulma için yardımcı type
export type FoodById = Record<number, Food>;

// Kullanıcı derecelendirmeleri için yardımcı type
export type UserRatingsByFood = Record<number, number>;

// ====================
// CONSTANTS
// ====================

export const FOOD_CATEGORIES: FoodCategory[] = [
  'Çorbalar',
  'Baklagiller',
  'Sebze Yemekleri',
  'Hamur İşleri',
  'Şerbetli Tatlılar',
  'Sütlü Tatlılar',
  'Kahvaltı',
  'Sokak Lezzetleri',
  'Izgara & Mangal',
  'İçecekler',
  'Döner & Kebap'
];

export const DIET_TYPES: DietType[] = [
  'normal',
  'vegetarian',
  'vegan',
  'lowcarb',
  'glutenfree'
];

export const RATING_SCALE = {
  MIN: 1,
  MAX: 5,
  STEP: 0.5
} as const;

export const CALORIE_TARGETS = {
  MIN: 1200,
  MAX: 3500,
  DEFAULT: 2000
} as const;
