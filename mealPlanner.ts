import {
  getAllFoods,
  getUserPreferences,
  saveMealPlan,
  getUserRatings,
} from "./database/index";
import {
  DailyMeal,
  DietType,
  Food,
  MealPlan,
  MenuSuggestion,
  UserRating,
} from "./types";
import { generateEntityId } from "./utils/id-generator";
import { BUSINESS_RULES } from "./constants/business-rules";
import {
  handleError,
  ErrorType,
  AppError,
  InsufficientDataError,
} from "./utils/errorHandler";

/**
 * Belirli bir diyete ve tercihlere göre yemekleri filtreler ve önceliklendirir
 */
export async function filterFoodsByDiet(
  foods: Food[],
  diet: DietType,
  halalOnly: boolean = false,
  ratings: UserRating[] = [],
): Promise<Food[]> {
  try {
    const dislikedIds = ratings
      .filter((r) => r.rating === 1)
      .map((r) => r.food_id);
    let filtered = foods.filter((food) => !dislikedIds.includes(food.id));

    if (halalOnly) {
      filtered = filtered.filter((f) => f.is_halal);
    }

    switch (diet) {
      case "vegetarian":
        filtered = filtered.filter((f) => f.is_vegetarian);
        break;
      case "vegan":
        filtered = filtered.filter((f) => f.is_vegan);
        break;
      case "lowcarb":
        filtered = filtered.filter(
          (f) =>
            (f.nutritionalInfo?.carbs ||
              BUSINESS_RULES.NUTRITION.LOW_CARB_THRESHOLD) <
            BUSINESS_RULES.NUTRITION.LOW_CARB_THRESHOLD,
        );
        break;
      case "glutenfree":
        filtered = filtered.filter((f) => f.category !== "Hamur İşleri");
        break;
    }

    return filtered;
  } catch (error) {
    throw handleError(error, { log: true, showToast: false });
  }
}

/**
 * Akıllı Rozet Atayıcı: Yemeğin neden seçildiğini belirler
 */
function assignReason(
  food: Food,
  ratings: UserRating[],
  isEconomy: boolean,
): Food {
  let tag = "Variyet";
  let type: "variety" | "preference" | "economy" | "health" = "variety";

  const userRating = ratings.find((r) => r.food_id === food.id)?.rating || 3;

  if (userRating >= 5) {
    tag = "Favoriniz 😍";
    type = "preference";
  } else if (userRating === 4) {
    tag = "Sevdiğiniz 😋";
    type = "preference";
  } else if (isEconomy && (food.priceLevel || 2) === 1) {
    tag = "Ekonomik 💰";
    type = "economy";
  } else if (
    (food.nutritionalInfo?.protein || 0) >
    BUSINESS_RULES.NUTRITION.HIGH_PROTEIN_THRESHOLD
  ) {
    tag = "Protein 🥩";
    type = "health";
  } else if ((food.priceLevel || 2) === 1) {
    tag = "Bütçe Dostu ₺";
    type = "economy";
  }

  return { ...food, reasonTag: tag, reasonType: type };
}

/**
 * 30 Günlük Otomatik ve Akıllı Mönü Oluşturur
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

    const filteredFoods = await filterFoodsByDiet(
      allFoods,
      diet,
      halalOnly,
      ratings,
    );

    if (filteredFoods.length < BUSINESS_RULES.MEAL_PLAN.MIN_FOOD_VARIETY) {
      throw new InsufficientDataError(
        "Diyetiniz için yeterli çeşitlilikte yemek bulunamadı.",
      );
    }

  const plan: DailyMeal[] = [];
  const usedIds = new Set<number>();

  for (let i = 0; i < days; i++) {
    // 7 günde bir çeşitliliği tazele
    if (i % BUSINESS_RULES.MEAL_PLAN.WEEKLY_REFRESH_DAYS === 0) usedIds.clear();

    const dayCategoryTracker = new Set<string>();

    const getSmartMeal = (cats: string[], pLevels: number[]) => {
      const selected = getRandomFoodByPrice(
        filteredFoods,
        cats,
        usedIds,
        pLevels,
        ratings,
        dayCategoryTracker,
      );
      if (selected) {
        dayCategoryTracker.add(selected.category as string);
        return assignReason(selected, ratings, isEconomyMode);
      }
      return null;
    };

    // Yeni Serpme Kahvaltı Mantığı
    const getBreakfastPlate = (): Food[] => {
      const breakfastFoods = filteredFoods.filter(
        (f) => f.category === "Kahvaltı",
      );
      
      // Çorbaları da kahvaltı havuzuna ekle (Sabah çorbası kültürü)
      const soupFoods = filteredFoods.filter(
        (f) => f.category === "Çorbalar"
      );

      const mains = breakfastFoods.filter((f) => f.subCategory === "main");
      const sides = breakfastFoods.filter((f) => f.subCategory === "side");
      const bakeries = breakfastFoods.filter((f) => f.subCategory === "bakery");
      const drinks = breakfastFoods.filter((f) => f.subCategory === "drink");

      const plate: Food[] = [];

      // 1. Ana Ürün Seç (Yumurta, Menemen vb.) veya Çorba (%20 ihtimal)
      let main: Food | null = null;
      if (Math.random() < 0.2 && soupFoods.length > 0) {
         main = getRandomItem(soupFoods, usedIds) || getRandomItem(soupFoods);
      } 
      
      if (!main) {
         main = getRandomItem(mains, usedIds) || getRandomItem(mains);
      }

      if (main) plate.push(assignReason(main, ratings, isEconomyMode));

      // 2. Yan Ürünler (Peynir, Zeytin vb.) - 2-3 çeşit
      const sideCount = isEconomyMode
        ? BUSINESS_RULES.MEAL_PLAN.ECONOMY_SIDE_COUNT
        : BUSINESS_RULES.MEAL_PLAN.NORMAL_SIDE_COUNT;
      for (let k = 0; k < sideCount; k++) {
        const side = getRandomItem(
          sides.filter((s) => !plate.find((p) => p.id === s.id)),
        );
        if (side) plate.push(side);
      }

      // 3. Hamur İşi (Haftada 2-3 kez)
      if (Math.random() > BUSINESS_RULES.MEAL_PLAN.BAKERY_PROBABILITY) {
        const bakery = getRandomItem(bakeries);
        if (bakery) plate.push(bakery);
      }

      // 4. İçecek (Her zaman)
      const drink = getRandomItem(drinks) || drinks[0];
      if (drink) plate.push(drink);

      return plate;
    };

    const dayMeals: DailyMeal = {
      breakfast: getBreakfastPlate(),
      lunch: null,
      dinner: null,
      snack: null,
    };

    // Günlük besin değerlerini takip et
    const getNutrition = (m: DailyMeal) => {
      let calories = 0,
        protein = 0,
        carbs = 0,
        fat = 0;
      const all = [
        ...m.breakfast,
        ...(m.lunch ? [m.lunch] : []),
        ...(m.dinner ? [m.dinner] : []),
        ...(m.snack ? [m.snack] : []),
      ];
      all.forEach((f) => {
        calories += f.nutritionalInfo?.calories || 0;
        protein += f.nutritionalInfo?.protein || 0;
        carbs += f.nutritionalInfo?.carbs || 0;
        fat += f.nutritionalInfo?.fat || 0;
      });
      return { calories, protein, carbs, fat };
    };

    // Öğle Yemeği Seçimi
    dayMeals.lunch = getSmartMeal(
      BUSINESS_RULES.MEAL_PLAN.LUNCH_CATEGORIES,
      isEconomyMode ? [1] : [1, 2],
    );

    // Akşam Yemeği Seçimi (Dengeleme denemesi)
    const dinnerOptions = [1, 2, 3].map(() =>
      getRandomFoodByPrice(
        filteredFoods,
        BUSINESS_RULES.MEAL_PLAN.DINNER_CATEGORIES,
        usedIds,
        isEconomyMode ? [1, 2] : i % 7 < 5 ? [1, 2] : [1, 2, 3],
        ratings,
        dayCategoryTracker,
      ),
    );

    const breakfastNutrition = dayMeals.breakfast.reduce(
      (acc, f) => acc + (f.nutritionalInfo?.calories || 0),
      0,
    );
    const lunchNutrition = dayMeals.lunch?.nutritionalInfo?.calories || 0;
    const currentTotal = breakfastNutrition + lunchNutrition;

    // Hedefe en yakın olanı seç
    dayMeals.dinner = dinnerOptions
      .filter((f): f is Food => f !== null)
      .sort((a, b) => {
        const diffA = Math.abs(
          currentTotal +
            (a.nutritionalInfo?.calories || 0) -
            2000 /* Hedef median */,
        );
        const diffB = Math.abs(
          currentTotal +
            (b.nutritionalInfo?.calories || 0) -
            2000 /* Hedef median */,
        );
        return diffA - diffB;
      })[0];

    if (dayMeals.dinner) {
      usedIds.add(dayMeals.dinner.id);
      dayCategoryTracker.add(dayMeals.dinner.category as string);
      dayMeals.dinner = assignReason(dayMeals.dinner, ratings, isEconomyMode);
    }

    // Ara Öğün (Tatlı)
    dayMeals.snack = getSmartMeal(BUSINESS_RULES.MEAL_PLAN.SNACK_CATEGORIES, [
      1, 2, 3,
    ]);

    const dailyStats = getNutrition(dayMeals);
    dayMeals.nutritionDescription = `${dailyStats.calories} kcal | P: ${dailyStats.protein}g, K: ${dailyStats.carbs}g, Y: ${dailyStats.fat}g`;

    // Güvenlik: Eğer öğünler boş kalırsa alternatif ata

    if (!dayMeals.lunch) {
      const fallback =
        filteredFoods.find(
          (f) => !dayCategoryTracker.has(f.category as string),
        ) || filteredFoods[0];
      dayMeals.lunch = assignReason(fallback, ratings, isEconomyMode);
    }
    if (!dayMeals.dinner) {
      const fallback =
        filteredFoods.find(
          (f) =>
            f.id !== dayMeals.lunch?.id &&
            !dayCategoryTracker.has(f.category as string),
        ) || filteredFoods[1];
      dayMeals.dinner = assignReason(fallback, ratings, isEconomyMode);
    }

    plan.push(dayMeals);
  }

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


function getRandomFoodByPrice(
  foods: Food[],
  categories: string[],
  usedIds: Set<number>,
  priceLevels: number[],
  ratings: UserRating[],
  dayCategoryTracker?: Set<string>,
): Food | null {
  const pool = foods.filter(
    (f) =>
      categories.includes(f.category as string) &&
      priceLevels.includes(f.priceLevel || 2) &&
      (!dayCategoryTracker || !dayCategoryTracker.has(f.category as string)),
  );

  if (pool.length === 0) {
    // Pool boşsa kategori kısıtlamasını koruyarak fiyatı gevşet
    return (
      foods.filter((f) => categories.includes(f.category as string))[0] || null
    );
  }

  // Ağırlıklı seçim: Rating'i yüksek olanların şansı daha fazla
  const weightedPool: Food[] = [];
  pool.forEach((f) => {
    const rating = ratings.find((r) => r.food_id === f.id)?.rating || 3;
    let weight = 1;
    if (rating === 5) weight = 5;
    else if (rating === 4) weight = 3;
    else if (rating === 2) weight = 0.5;
    // Rating 1 zaten filterFoodsByDiet'te elenmiş olmalı

    for (let i = 0; i < weight; i++) {
      weightedPool.push(f);
    }
  });

  const unused = weightedPool.filter((f) => !usedIds.has(f.id));
  const selected =
    unused.length > 0
      ? unused[Math.floor(Math.random() * unused.length)]
      : weightedPool[Math.floor(Math.random() * weightedPool.length)];

  if (selected) usedIds.add(selected.id);
  return selected;
}


export async function generateMenuSuggestions(): Promise<MenuSuggestion[]> {
  return []; // Legacy support
}

function getRandomItem(list: Food[], excludeIds?: Set<number>): Food | null {
  const pool = excludeIds ? list.filter((f) => !excludeIds.has(f.id)) : list;
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}
