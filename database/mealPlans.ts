import { MealPlan } from "../types";
import { appState, saveState } from "./state";

export const saveMealPlan = async (plan: MealPlan) => {
  appState.meal_plans = appState.meal_plans.filter(
    (p) => p.userId !== plan.userId || p.id !== plan.id,
  );
  appState.meal_plans.push(plan);
  await saveState();
  return plan.id;
};

export const getMealPlans = async (userId: number): Promise<MealPlan[]> => {
  return appState.meal_plans.filter((p) => p.userId === userId);
};

export const getLatestMealPlan = async (
  userId: number,
): Promise<MealPlan | null> => {
  const plans = await getMealPlans(userId);
  if (plans.length === 0) return null;
  return plans.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )[0];
};
