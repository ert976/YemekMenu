import { Platform } from 'react-native';
import { DietType, Food, MealPlan, User, UserRating } from '../types';

// Mock yemek verileri (geçici olarak burada tutulacak)
const COMMON_FOODS = [
  // ÇORBALAR (20+)
  { id: 1, name: 'Mercimek Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mercimek_Corba.jpg/800px-Mercimek_Corba.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 2, name: 'Ezogelin Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ezogelin_corba.jpg/800px-Ezogelin_corba.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  // ... diğer yemekler
];

// Yemek işlemleri
export const getFoodById = async (foodId: number): Promise<Food | null> => {
  try {
    if (Platform.OS === 'web') {
      // Web platformu için simülasyon
      return COMMON_FOODS.find((food: Food) => food.id === foodId) || null;
    }
    
    // Mobil platformlar için mock
    return COMMON_FOODS.find((food: Food) => food.id === foodId) || null;
  } catch (error) {
    console.error('Yemek getirme hatası:', error);
    return null;
  }
};

export const getFoodsByIds = async (foodIds: number[]): Promise<Food[]> => {
  try {
    if (Platform.OS === 'web') {
      // Web platformu için simülasyon
      return COMMON_FOODS.filter((food: Food) => foodIds.includes(food.id));
    }
    
    // Mobil platformlar için mock
    return COMMON_FOODS.filter((food: Food) => foodIds.includes(food.id));
  } catch (error) {
    console.error('Yemekleri getirme hatası:', error);
    return [];
  }
};

export const getAllFoods = async (): Promise<Food[]> => {
  try {
    if (Platform.OS === 'web') {
      return COMMON_FOODS;
    }
    
    return COMMON_FOODS;
  } catch (error) {
    console.error('Tüm yemekleri getirme hatası:', error);
    return [];
  }
};

export const searchFoods = async (query: string): Promise<Food[]> => {
  try {
    const allFoods = await getAllFoods();
    return allFoods.filter((food: Food) => 
      food.name.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    console.error('Yemek arama hatası:', error);
    return [];
  }
};

export const getFoodsByCategory = async (category: string): Promise<Food[]> => {
  try {
    const allFoods = await getAllFoods();
    return allFoods.filter((food: Food) => food.category === category);
  } catch (error) {
    console.error('Kategoriye göre yemekleri getirme hatası:', error);
    return [];
  }
};

// Kullanıcı işlemleri
export const getUser = async (username: string, password: string): Promise<User | null> => {
  try {
    // Mock kullanıcı kontrolü
    if (username === 'testuser' && password === 'password123') {
      return {
        id: 1,
        username: 'testuser',
        email: 'test@example.com'
      };
    }
    return null;
  } catch (error) {
    console.error('Kullanıcı getirme hatası:', error);
    return null;
  }
};

export const addUser = async (username: string, email: string, password: string): Promise<boolean> => {
  try {
    // Mock kullanıcı ekleme
    console.log(`Kullanıcı eklendi: ${username}, ${email}`);
    return true;
  } catch (error) {
    console.error('Kullanıcı ekleme hatası:', error);
    return false;
  }
};

// Derecelendirme işlemleri
export const getUserRatings = async (userId: number): Promise<UserRating[]> => {
  try {
    // Mock derecelendirme verileri
    return [
      { id: 1, user_id: userId, food_id: 1, rating: 5 },
      { id: 2, user_id: userId, food_id: 2, rating: 4 },
      { id: 3, user_id: userId, food_id: 3, rating: 3 }
    ];
  } catch (error) {
    console.error('Derecelendirmeleri getirme hatası:', error);
    return [];
  }
};

export const rateFood = async (userId: number, foodId: number, rating: number): Promise<boolean> => {
  try {
    console.log(`Yemek derecelendirildi: User ${userId}, Food ${foodId}, Rating ${rating}`);
    return true;
  } catch (error) {
    console.error('Yemek derecelendirme hatası:', error);
    return false;
  }
};

// Menü planlama işlemleri
export const saveMealPlan = async (userId: number, planData: string, dietPreference: DietType): Promise<number> => {
  try {
    console.log(`Menü planı kaydedildi: User ${userId}, Diet ${dietPreference}`);
    return Date.now();
  } catch (error) {
    console.error('Menü planı kaydetme hatası:', error);
    return -1;
  }
};

export const getMealPlans = async (userId: number): Promise<MealPlan[]> => {
  try {
    // Mock menü planları
    return [
      {
        id: 1,
        userId,
        plan_data: JSON.stringify([]),
        diet_preference: 'normal'
      }
    ];
  } catch (error) {
    console.error('Menü planlarını getirme hatası:', error);
    return [];
  }
};

export const resetUserData = async (userId: number): Promise<boolean> => {
  try {
    console.log(`Kullanıcı verileri sıfırlandı: ${userId}`);
    return true;
  } catch (error) {
    console.error('Kullanıcı verilerini sıfırlama hatası:', error);
    return false;
  }
};
