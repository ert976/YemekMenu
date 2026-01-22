import { Food } from "../types";
import { appState, saveState } from "./state";

export const COMMON_FOODS: Food[] = [
  // --- ÇORBALAR (1-15) ---
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
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/09/domates-corbasi-asama-10.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  
  // --- SEBZE YEMEKLERİ (16-35) ---
  {
    id: 16,
    name: "Taze Fasulye",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Taze_fasulye.jpg/800px-Taze_fasulye.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  
  // --- ETLİ YEMEKLER (36-60) ---
  {
    id: 36,
    name: "Adana Kebap",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adana_kebabı.jpg/800px-Adana_kebabı.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  
  // --- BAKLAGİLLER (61-70) ---
  {
    id: 61,
    name: "Kuru Fasulye",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuru_fasulye.jpg/800px-Kuru_fasulye.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  
  // --- KAHVALTILIKLAR (106-150) ---
  {
    id: 106,
    name: "Menemen",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Menemen.jpg/800px-Menemen.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  
  // --- MEYVELER (300+) ---
  {
    id: 301,
    name: "Elma",
    image_url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6",
    category: "Meyveler",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2 }
  },
  {
    id: 302,
    name: "Muz",
    image_url: "https://images.unsplash.com/photo-1571771894821-ad9902d83f4e",
    category: "Meyveler",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 89, protein: 1.1, carbs: 23, fat: 0.3 }
  },
  {
    id: 303,
    name: "Mevsim Meyveleri Tabağı",
    image_url: "https://images.unsplash.com/photo-1519996529931-28324d5a630e",
    category: "Meyveler",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
    nutritionalInfo: { calories: 120, protein: 1, carbs: 30, fat: 0.5 }
  }
];

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
    case "Etli Yemekler":
      return { calories: 450, protein: 35, carbs: 10, fat: 25 };
    case "Hamur İşleri":
      return { calories: 400, protein: 12, carbs: 60, fat: 15 };
    case "Kahvaltı":
      return { calories: 300, protein: 15, carbs: 20, fat: 18 };
    case "Pilavlar":
      return { calories: 300, protein: 5, carbs: 50, fat: 8 };
    case "Sütlü Tatlılar":
      return { calories: 250, protein: 6, carbs: 40, fat: 8 };
    case "Şerbetli Tatlılar":
      return { calories: 450, protein: 4, carbs: 70, fat: 18 };
    case "Meyveler":
      return { calories: 80, protein: 1, carbs: 20, fat: 0 };
    default:
      return { calories: 250, protein: 8, carbs: 30, fat: 10 };
  }
};

export const getAllFoods = async (): Promise<Food[]> => {
  return COMMON_FOODS.map((f) => ({
    ...f,
    nutritionalInfo:
      f.nutritionalInfo || getNutritionByCategory(f.category as string),
    estimatedPrice: f.priceLevel ? f.priceLevel * 45 : 85,
  }));
};

export const getFoodById = async (id: number): Promise<Food | null> => {
  const foods = await getAllFoods();
  return foods.find((f) => f.id === id) || null;
};

export const getFoodsByIds = async (ids: number[]): Promise<Food[]> => {
  const foods = await getAllFoods();
  return foods.filter((f) => ids.includes(f.id));
};

export const getUserPreferences = async (userId: number) => {
  if (!appState.preferences[userId]) {
    appState.preferences[userId] = { likedIds: [], dislikedIds: [] };
  }
  return appState.preferences[userId];
};

/**
 * Saves a user's preference for a specific food.
 * @param userId - The ID of the user.
 * @param foodId - The ID of the food.
 * @param type - The type of preference ('like' or 'dislike').
 */
export const saveUserPreference = async (
  userId: number,
  foodId: number,
  type: "like" | "dislike",
) => {
  const prefs = await getUserPreferences(userId);
  if (type === "like") {
    if (!prefs.likedIds.includes(foodId)) prefs.likedIds.push(foodId);
    prefs.dislikedIds = prefs.dislikedIds.filter((id) => id !== foodId);
  } else {
    if (!prefs.dislikedIds.includes(foodId)) prefs.dislikedIds.push(foodId);
    prefs.likedIds = prefs.likedIds.filter((id) => id !== foodId);
  }
  await saveState();
};