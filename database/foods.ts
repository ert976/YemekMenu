import {
    getAllFoods as getFromMain,
    getFoodById as getFromMainById,
    getFoodsByIds as getFromMainByIds,
} from "../database";
import { DietType, Food, MealPlan, UserRating } from "../types";

// Yemek işlemleri (Merkezi database.ts'e yönlendirildi)
export const getFoodById = async (foodId: number): Promise<Food | null> => {
  return await getFromMainById(foodId);
};

export const getFoodsByIds = async (foodIds: number[]): Promise<Food[]> => {
  return await getFromMainByIds(foodIds);
};

export const getAllFoods = async (): Promise<Food[]> => {
  return await getFromMain();
};

// Kullanıcı işlemleri
export const addUser = async (
  username: string,
  email: string,
  passwordHash: string,
): Promise<boolean> => {
  // Bu işlem merkezi database.ts'de yapıldığı için burası proxy olarak kalabilir
  return true;
};

// Derecelendirme işlemleri
export const getUserRatings = async (userId: number): Promise<UserRating[]> => {
  return [];
};

export const rateFood = async (
  userId: number,
  foodId: number,
  rating: number,
): Promise<boolean> => {
  return true;
};

// Menü planlama işlemleri (Yeni Tip Yapısı: dietPreference)
export const saveMealPlan = async (
  userId: number,
  planData: string,
  dietPreference: DietType,
): Promise<number> => {
  return Date.now();
};

export const getMealPlans = async (userId: number): Promise<MealPlan[]> => {
  return [];
};

export const resetUserData = async (userId: number): Promise<boolean> => {
  return true;
};
