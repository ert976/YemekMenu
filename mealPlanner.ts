import { BUSINESS_RULES } from "./constants/business-rules";
import { getAllFoods, getUserRatings, saveMealPlan } from "./database/index";
import { DailyMeal, DietType, Food, MealPlan } from "./types";
import { InsufficientDataError, handleError } from "./utils/errorHandler";
import { generateEntityId } from "./utils/id-generator";

// State Machine for Weekly Tracking
interface WeeklyState {
  counts: Record<string, number>; // e.g. { "MEAT_RED": 2 }
  usedIds: Set<number>;
}

// Map real categories to "Dietitian Groups" defined in Business Rules
const getGroup = (category: string): string => {
  for (const [group, categories] of Object.entries(
    BUSINESS_RULES.MEAL_PLAN.GROUPS,
  )) {
    if (categories.includes(category)) return group;
  }
  return "OTHER";
};

// Helper: Shuffle Array
const shuffle = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

/**
 * Advanced Dietitian Algorithm Generator
 */
export async function generateBalancedMenu(
  days: number = BUSINESS_RULES.MEAL_PLAN.DEFAULT_DAYS,
  diet: DietType = "normal",
  halalOnly: boolean = false,
  userId?: number,
  isEconomyMode: boolean = false,
): Promise<MealPlan> {
  try {
    const allFoods = await getAllFoods();
    const ratings = userId ? await getUserRatings(userId) : [];
    const ratingMap = new Map(ratings.map((r) => [r.food_id, r.rating]));

    // 1. Base Filter (Diet, Halal, Dislikes)
    const validFoods = allFoods.filter((f) => {
      // User Dislikes (Rating 1)
      if (ratingMap.get(f.id) === 1) return false;
      // Halal Check
      if (halalOnly && !f.is_halal) return false;
      // Diet Check
      if (diet === "vegetarian" && !f.is_vegetarian) return false;
      if (diet === "vegan" && !f.is_vegan) return false;
      if (diet === "glutenfree" && f.category === "Hamur İşleri") return false;
      return true;
    });

    if (validFoods.length < BUSINESS_RULES.MEAL_PLAN.MIN_FOOD_VARIETY) {
      throw new InsufficientDataError(
        "Diyetiniz için yeterli çeşitlilikte yemek yok.",
      );
    }

    const plan: DailyMeal[] = [];
    const weeklyState: WeeklyState = { counts: {}, usedIds: new Set() };

    for (let dayIndex = 0; dayIndex < days; dayIndex++) {
      // Weekly Reset
      if (dayIndex % 7 === 0) {
        weeklyState.counts = {};
        // Note: We might NOT clear usedIds fully to force variety across month,
        // but for now let's clear to allow repeats in new weeks if pool is small.
        if (dayIndex > 0) weeklyState.usedIds.clear();
      }

      // 2. Select Template for the Day (e.g. Monday = Veggie + Meat)
      const template = BUSINESS_RULES.MEAL_PLAN.DAILY_TEMPLATES[dayIndex % 7];

      // 3. Generate Breakfast (Fixed Structure)
      const breakfast = generateBreakfast(
        validFoods,
        weeklyState.usedIds,
        ratingMap,
        isEconomyMode,
      );

      // 4. Generate Lunch (Based on Template)
      const lunchMain = selectMainDish(
        validFoods,
        template.lunch,
        weeklyState,
        ratingMap,
        isEconomyMode,
      );

      // 5. Generate Dinner (Based on Template)
      const dinnerMain = selectMainDish(
        validFoods,
        template.dinner,
        weeklyState,
        ratingMap,
        isEconomyMode,
        lunchMain ? [lunchMain.category] : [], // Avoid same category twice in a day
      );

      // 6. Generate Snack
      const snack = selectSnack(validFoods, weeklyState.usedIds, isEconomyMode);

      const dailyStats = calculateStats([
        breakfast,
        lunchMain,
        dinnerMain,
        snack,
      ]);

      plan.push({
        breakfast: breakfast, // Returns Food[] array
        lunch: lunchMain,
        dinner: dinnerMain,
        snack: snack,
        nutritionDescription: `${dailyStats.calories} kcal`,
      });
    }

    // Output Formatting
    const weeklyGroups: DailyMeal[][] = [];
    for (let i = 0; i < plan.length; i += 7) {
      weeklyGroups.push(plan.slice(i, i + 7));
    }

    const newPlan: MealPlan = {
      id: generateEntityId(),
      userId: userId || 0,
      dietPreference: diet,
      plan_data: plan,
      weekly_groups: weeklyGroups,
      createdAt: new Date().toISOString(),
    };

    if (userId) await saveMealPlan(newPlan);
    return newPlan;
  } catch (error) {
    throw handleError(error, { log: true, showToast: true });
  }
}

/**
 * Generates a Rich Breakfast Plate
 * Rules: 1 Main (Egg/Soup) + 2-3 Sides (Cheese/Olive) + 1 Drink + Optional Pastry
 */
function generateBreakfast(
  pool: Food[],
  usedIds: Set<number>,
  ratingMap: Map<number, number>,
  isEconomy: boolean,
): Food[] {
  const plate: Food[] = [];
  const breakfastPool = pool.filter(
    (f) => f.category === "Kahvaltı" || f.category === "Çorbalar",
  );

  // A. Main Item (Egg, Menemen OR Soup)
  // %30 chance of Soup for breakfast (Traditional)
  const useSoup = Math.random() < 0.3;
  const mainCandidates = useSoup
    ? breakfastPool.filter((f) => f.category === "Çorbalar")
    : breakfastPool.filter(
        (f) => f.category === "Kahvaltı" && f.subCategory === "main",
      ); // Assuming subCategories exist or inference needed

  // Fallback if subCategory is missing: Use "Kahvaltı" items that are PriceLevel 2+ or PriceLevel 1 with keywords
  const safeMainCandidates =
    mainCandidates.length > 0
      ? mainCandidates
      : breakfastPool.filter((f) => f.category === "Kahvaltı");

  const main = pickBest(safeMainCandidates, usedIds, ratingMap);
  if (main) plate.push(assignReason(main, "Güne Başlangıç"));

  // B. Sides (Peynir, Zeytin, Yeşillik)
  // Since we might not have `subCategory` set in DB, we rely on low price items in "Kahvaltı"
  const sidesCandidates = breakfastPool.filter(
    (f) => f.category === "Kahvaltı" && f.id !== main?.id && f.priceLevel === 1,
  );
  const sideCount = isEconomy ? 2 : 3;

  const selectedSides = shuffle(sidesCandidates).slice(0, sideCount);
  selectedSides.forEach((s) => plate.push(s));

  // C. Drink
  // If no specific drink category, maybe just skip or add a generic placeholder if DB supported it.
  // Assuming "İçecekler" category exists or some breakfast items are drinks.
  const drinks = pool.filter((f) => f.category === "İçecekler");
  if (drinks.length > 0) {
    plate.push(drinks[Math.floor(Math.random() * drinks.length)]);
  }

  return plate;
}

/**
 * Selects a specific dish based on target Group (e.g. "MEAT_RED")
 */
function selectMainDish(
  pool: Food[],
  targetGroupKey: string,
  state: WeeklyState,
  ratingMap: Map<number, number>,
  isEconomy: boolean,
  excludedCategories: string[] = [],
): Food | null {
  // 1. Identify valid categories for this Group
  // e.g. targetGroupKey="MEAT_RED" -> ["Etli Yemekler", "Döner", ...]
  const allowedCategories =
    BUSINESS_RULES.MEAL_PLAN.GROUPS[
      targetGroupKey as keyof typeof BUSINESS_RULES.MEAL_PLAN.GROUPS
    ];

  // Fallback: If template asks for "CHICKEN" but we grouped it under MEAT_RED or undefined, map loosely
  const targetCategories = allowedCategories || [
    BUSINESS_RULES.MEAL_PLAN.LUNCH_CATEGORIES[0],
  ];

  // 2. Filter Pool
  let candidates = pool.filter(
    (f) =>
      targetCategories.includes(f.category) &&
      !state.usedIds.has(f.id) &&
      !excludedCategories.includes(f.category),
  );

  // 3. Economy Filter
  if (isEconomy) {
    const cheapCandidates = candidates.filter((f) => (f.priceLevel || 2) <= 1);
    if (cheapCandidates.length > 0) candidates = cheapCandidates;
  }

  // 4. Hard Fallback: If no candidates (e.g. consumed all Red Meat), switch to "VEGETABLES" or "PASTRY"
  if (candidates.length === 0) {
    const fallbackCats = BUSINESS_RULES.MEAL_PLAN.GROUPS.VEGETABLES;
    candidates = pool.filter(
      (f) => fallbackCats.includes(f.category) && !state.usedIds.has(f.id),
    );
  }

  // 5. Select Best (Rating Weighted)
  const selected = pickBest(candidates, state.usedIds, ratingMap);

  if (selected) {
    state.usedIds.add(selected.id);
    const group = getGroup(selected.category);
    state.counts[group] = (state.counts[group] || 0) + 1;

    // Add Logic Reason Tag
    return assignReason(selected, targetGroupKey);
  }

  return null;
}

function selectSnack(
  pool: Food[],
  usedIds: Set<number>,
  isEconomy: boolean,
): Food | null {
  const cats = BUSINESS_RULES.MEAL_PLAN.SNACK_CATEGORIES;
  const candidates = pool.filter(
    (f) => cats.includes(f.category) && !usedIds.has(f.id),
  );
  return pickBest(candidates, usedIds, new Map()); // Simple pick
}

function pickBest(
  candidates: Food[],
  usedIds: Set<number>,
  ratingMap: Map<number, number>,
): Food | null {
  if (candidates.length === 0) return null;

  // Weighted Random Selection based on Rating
  const weighted: Food[] = [];
  candidates.forEach((f) => {
    const rating = ratingMap.get(f.id) || 3;
    const weight = rating === 5 ? 10 : rating === 4 ? 5 : rating === 1 ? 0 : 2;
    for (let i = 0; i < weight; i++) weighted.push(f);
  });

  if (weighted.length === 0) return candidates[0];
  return weighted[Math.floor(Math.random() * weighted.length)];
}

function assignReason(food: Food, logicKey: string): Food {
  let tag = "Dengeli Seçim";
  if (logicKey === "MEAT_RED") tag = "Protein Deposu";
  if (logicKey === "VEGETABLES") tag = "Lif Kaynağı";
  if (logicKey === "LEGUMES") tag = "Bitkisel Protein";
  if (logicKey === "FISH") tag = "Omega-3";
  if (logicKey === "Güne Başlangıç") tag = "Enerjik Başla";

  return { ...food, reasonTag: tag, reasonType: "health" };
}

function calculateStats(foods: (Food | null | Food[])[]): { calories: number } {
  let total = 0;
  foods.forEach((item) => {
    if (!item) return;
    if (Array.isArray(item)) {
      item.forEach((f) => (total += f.nutritionalInfo?.calories || 0));
    } else {
      total += item.nutritionalInfo?.calories || 0;
    }
  });
  return { calories: total };
}

export function filterFoodsByDiet() {
  /* Legacy compatibility stub */
}
export function generateMenuSuggestions() {
  return [];
}
