import { Food, MealPlan, User, UserRating } from "./types";
import { storage } from "./utils/storage";

// Uygulama Durumu (App State)
const appState: {
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

const STORAGE_KEY = "@yemekmenu_storage";

const loadState = async () => {
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

const saveState = async () => {
  try {
    await storage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.error("Kaydetme hatası:", e);
  }
};

loadState();

// 50+ YEMEKLİK GENİŞLETİLMİŞ LİSTE
const COMMON_FOODS: Food[] = [
  // ÇORBALAR (Bütçe: 1)
  {
    id: 1,
    name: "Mercimek Çorbası",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mercimek_Corba.jpg/800px-Mercimek_Corba.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 2,
    name: "Ezogelin Çorbası",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ezogelin_corba.jpg/800px-Ezogelin_corba.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 3,
    name: "Yayla Çorbası",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yayla_çorbası.jpg/800px-Yayla_çorbası.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 4,
    name: "Tarhana Çorbası",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tarhana_soup.jpg/800px-Tarhana_soup.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 5,
    name: "Domates Çorbası",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Tomato_soup_in_a_bowl.jpg/800px-Tomato_soup_in_a_bowl.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },

  // SEBZE YEMEKLERİ (Bütçe: 1-2)
  {
    id: 10,
    name: "Zeytinyağlı Enginar",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Zeytinyağlı_Enginar.jpg/800px-Zeytinyağlı_Enginar.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 11,
    name: "Taze Fasulye",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Taze_fasulye.jpg/800px-Taze_fasulye.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 12,
    name: "Pırasa Yemeği",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Leek_soup.jpg/800px-Leek_soup.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 13,
    name: "Kıymalı Ispanak",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Spinach_dish.jpg/800px-Spinach_dish.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 14,
    name: "İmambayıldı",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/İmambayıldı.jpg/800px-İmambayıldı.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },

  // ETLİ YEMEKLER & KEBAPLAR (Bütçe: 3)
  {
    id: 20,
    name: "Adana Kebap",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adana_kebabı.jpg/800px-Adana_kebabı.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 21,
    name: "İskender Kebap",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/İskender_kebabı.jpg/800px-İskender_kebabı.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 22,
    name: "Izgara Köfte",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Köfte_grilled.jpg/800px-Köfte_grilled.jpg",
    category: "Izgara & Mangal",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 23,
    name: "Kuzu Tandır",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kuzu_Tandır.jpg/800px-Kuzu_Tandır.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 24,
    name: "Ali Nazik",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Alinazik_kebabı.jpg/800px-Alinazik_kebabı.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },

  // BAKLAGİLLER (Bütçe: 1)
  {
    id: 30,
    name: "Kuru Fasulye",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuru_fasulye.jpg/800px-Kuru_fasulye.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 31,
    name: "Nohut Yemeği",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Chickpea_curry.jpg/800px-Chickpea_curry.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 32,
    name: "Yeşil Mercimek",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lentil_soup_2.jpg/800px-Lentil_soup_2.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },

  // HAMUR İŞLERİ (Bütçe: 2)
  {
    id: 40,
    name: "Kayseri Mantısı",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Manti_Turkish.jpg/800px-Manti_Turkish.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 41,
    name: "Lahmacun",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lahmacun_slice.jpg/800px-Lahmacun_slice.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 42,
    name: "Kıymalı Pide",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Pide_with_meat.jpg/800px-Pide_with_meat.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 43,
    name: "Su Böreği",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Su_böreği.jpg/800px-Su_böreği.jpg",
    category: "Hamur İşleri",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },

  // TATLILAR (Bütçe: 2-3)
  {
    id: 50,
    name: "Sütlaç",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sütlaç.jpg/800px-Sütlaç.jpg",
    category: "Sütlü Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 51,
    name: "Baklava",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baklava_dessert.jpg/800px-Baklava_dessert.jpg",
    category: "Şerbetli Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 52,
    name: "Kazandibi",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kazandibi.jpg/800px-Kazandibi.jpg",
    category: "Sütlü Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 53,
    name: "Künefe",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kunefe_sweet.jpg/800px-Kunefe_sweet.jpg",
    category: "Şerbetli Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
];

export const initDatabase = async () => {};

const getNutritionByCategory = (category: string) => {
  switch (category) {
    case "Çorbalar":
      return { calories: 150, protein: 5, carbs: 20, fat: 4 };
    case "Baklagiller":
      return { calories: 350, protein: 20, carbs: 50, fat: 2 };
    case "Sebze Yemekleri":
      return { calories: 200, protein: 4, carbs: 15, fat: 12 };
    case "Izgara & Mangal":
    case "Döner & Kebap":
      return { calories: 450, protein: 35, carbs: 10, fat: 25 };
    case "Hamur İşleri":
      return { calories: 400, protein: 12, carbs: 60, fat: 15 };
    case "Kahvaltı":
      return { calories: 300, protein: 15, carbs: 20, fat: 18 };
    default:
      return { calories: 250, protein: 8, carbs: 30, fat: 10 };
  }
};

export const getAllFoods = async (): Promise<Food[]> => {
  return COMMON_FOODS.map((f) => ({
    ...f,
    nutritionalInfo:
      f.nutritionalInfo || getNutritionByCategory(f.category as string),
    estimatedPrice: f.priceLevel ? f.priceLevel * 45 : 85, // Katman bazlı tahmini fiyat
  }));
};

export const getFoodById = async (id: number) => {
  const foods = await getAllFoods();
  return foods.find((f) => f.id === id) || null;
};

export const getFoodsByIds = async (ids: number[]) => {
  const foods = await getAllFoods();
  return foods.filter((f) => ids.includes(f.id));
};

export const addUser = async (
  username: string,
  email: string,
  passwordHash: string,
) => {
  const id = Date.now();
  appState.users.push({ id, username, email, passwordHash });
  await saveState();
  return id;
};

export const getUser = async (username: string, passwordHash: string) => {
  return (
    appState.users.find(
      (u) => u.username === username && u.passwordHash === passwordHash,
    ) || null
  );
};

export const getUserPreferences = async (userId: number) => {
  return appState.preferences[userId] || { likedIds: [], dislikedIds: [] };
};

export const updateUserPreferences = async (
  userId: number,
  likedIds: number[],
  dislikedIds: number[],
) => {
  appState.preferences[userId] = { likedIds, dislikedIds };
  await saveState();
};

export const getUserRatings = async (userId: number): Promise<UserRating[]> => {
  return appState.user_ratings.filter((r) => r.user_id === userId);
};

export const rateFood = async (
  userId: number,
  foodId: number,
  rating: number,
): Promise<boolean> => {
  const existingIndex = appState.user_ratings.findIndex(
    (r) => r.user_id === userId && r.food_id === foodId,
  );
  if (existingIndex > -1) {
    appState.user_ratings[existingIndex].rating = rating;
  } else {
    appState.user_ratings.push({
      id: Date.now(),
      user_id: userId,
      food_id: foodId,
      rating,
    });
  }
  await saveState();
  return true;
};

export const saveMealPlan = async (plan: MealPlan) => {
  appState.meal_plans.unshift(plan);
  await saveState();
  return plan.id;
};

export const getMealPlans = async (userId: number): Promise<MealPlan[]> => {
  return appState.meal_plans.filter((p) => p.userId === userId);
};
