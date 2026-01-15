import { DietType, MealPlan } from '../types';

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

export const getMealPlan = async (planId: number): Promise<MealPlan | null> => {
  try {
    // Mock menü planı
    return {
      id: planId,
      userId: 1,
      plan_data: JSON.stringify([]),
      diet_preference: 'normal'
    };
  } catch (error) {
    console.error('Menü planı getirme hatası:', error);
    return null;
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
      },
      {
        id: 2,
        userId,
        plan_data: JSON.stringify([]),
        diet_preference: 'vegetarian'
      }
    ];
  } catch (error) {
    console.error('Menü planlarını getirme hatası:', error);
    return [];
  }
};

export const updateMealPlan = async (planId: number, updates: Partial<MealPlan>): Promise<boolean> => {
  try {
    console.log(`Menü planı güncellendi: ${planId}`, updates);
    return true;
  } catch (error) {
    console.error('Menü planı güncelleme hatası:', error);
    return false;
  }
};

export const deleteMealPlan = async (planId: number): Promise<boolean> => {
  try {
    console.log(`Menü planı silindi: ${planId}`);
    return true;
  } catch (error) {
    console.error('Menü planı silme hatası:', error);
    return false;
  }
};

export const getMealPlansByDiet = async (userId: number, dietPreference: DietType): Promise<MealPlan[]> => {
  try {
    const allPlans = await getMealPlans(userId);
    return allPlans.filter(plan => plan.diet_preference === dietPreference);
  } catch (error) {
    console.error('Diyete göre menü planlarını getirme hatası:', error);
    return [];
  }
};
