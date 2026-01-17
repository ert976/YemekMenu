import { getAllFoods, getUserPreferences, saveMealPlan } from "./database";
import { DailyMeal, DietType, Food, MealPlan, MenuSuggestion } from "./types";
import { InsufficientDataError } from "./utils/errors";

/**
 * Belirli bir diyete ve tercihlere göre yemekleri filtreler ve önceliklendirir
 */
export async function filterFoodsByDiet(
  foods: Food[],
  diet: DietType,
  halalOnly: boolean = false,
  likedIds: number[] = [],
  dislikedIds: number[] = [],
): Promise<Food[]> {
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
      filtered = filtered.filter((f) => (f.nutritionalInfo?.carbs || 30) < 30);
      break;
    case "glutenfree":
      filtered = filtered.filter((f) => f.category !== "Hamur İşleri");
      break;
  }

  return filtered.sort((a, b) => {
    const aLiked = likedIds.includes(a.id) ? 1 : 0;
    const bLiked = likedIds.includes(b.id) ? 1 : 0;
    return bLiked - aLiked;
  });
}

/**
 * Akıllı Rozet Atayıcı: Yemeğin neden seçildiğini belirler
 */
function assignReason(
  food: Food,
  likedIds: number[],
  isEconomy: boolean,
): Food {
  let tag = "Variyet";
  let type: any = "variety";

  if (likedIds.includes(food.id)) {
    tag = "Favoriniz 🏆";
    type = "preference";
  } else if (isEconomy && (food.priceLevel || 2) === 1) {
    tag = "Ekonomik 💰";
    type = "economy";
  } else if ((food.nutritionalInfo?.protein || 0) > 25) {
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
  days: number = 30,
  diet: DietType = "normal",
  halalOnly: boolean = false,
  userId?: number,
  isEconomyMode: boolean = false,
): Promise<MealPlan> {
  const allFoods = await getAllFoods();
  const preferences = userId
    ? await getUserPreferences(userId)
    : { likedIds: [], dislikedIds: [] };

  const filteredFoods = await filterFoodsByDiet(
    allFoods,
    diet,
    halalOnly,
    preferences.likedIds,
    preferences.dislikedIds,
  );

  if (filteredFoods.length < 5) {
    throw new InsufficientDataError(
      "Diyetiniz için yeterli çeşitlilikte yemek bulunamadı.",
    );
  }

  const plan: DailyMeal[] = [];
  const usedIds = new Set<number>();

  for (let i = 0; i < days; i++) {
    // 10 günde bir çeşitliliği tazele (UsedIds temizleme sıklığını artırdık)
    if (i % 10 === 0) usedIds.clear();

    const priceTarget = isEconomyMode ? [1, 2] : i % 7 < 5 ? [1, 2] : [1, 2, 3];

    const getSmartMeal = (cats: string | string[], pLevels: number[]) => {
      const selected = getRandomFoodByPrice(
        filteredFoods,
        cats,
        usedIds,
        pLevels,
      );
      return selected
        ? assignReason(selected, preferences.likedIds, isEconomyMode)
        : null;
    };

    const dayMeals: DailyMeal = {
      breakfast: getSmartMeal("Kahvaltı", [1, 2]),
      lunch: getSmartMeal(
        ["Sebze Yemekleri", "Baklagiller", "Çorbalar"],
        [1, 2],
      ),
      dinner: getSmartMeal(
        ["Izgara & Mangal", "Döner & Kebap", "Hamur İşleri"],
        priceTarget,
      ),
      snack: getSmartMeal(["Sütlü Tatlılar", "Şerbetli Tatlılar"], [1, 2, 3]),
      nutritionDescription: isEconomyMode
        ? "Maliyet kazancı optimize edildi."
        : "Haftalık lezzet dengesi önceliklendirildi.",
    };

    if (!dayMeals.lunch) dayMeals.lunch = filteredFoods[0];
    if (!dayMeals.dinner) dayMeals.dinner = filteredFoods[1];

    plan.push(dayMeals);
  }

  const weeklyGroups: DailyMeal[][] = [];
  for (let i = 0; i < plan.length; i += 7) {
    weeklyGroups.push(plan.slice(i, i + 7));
  }

  const newPlan: MealPlan = {
    id: Date.now(),
    userId: userId || 0,
    dietPreference: diet,
    plan_data: plan,
    weekly_groups: weeklyGroups,
    createdAt: new Date().toISOString(),
  };

  if (userId) await saveMealPlan(newPlan);
  return newPlan;
}

function getRandomFoodByPrice(
  foods: Food[],
  categories: string | string[],
  usedIds: Set<number>,
  priceLevels: number[],
): Food | null {
  const cats = Array.isArray(categories) ? categories : [categories];
  const pool = foods.filter(
    (f) =>
      cats.includes(f.category as string) &&
      priceLevels.includes(f.priceLevel || 2),
  );

  if (pool.length === 0) {
    // Pool boşsa kriterleri gevşet (Güvenlik katmanı)
    return foods.filter((f) => cats.includes(f.category as string))[0] || null;
  }

  const unused = pool.filter((f) => !usedIds.has(f.id));
  const selected =
    unused.length > 0
      ? unused[Math.floor(Math.random() * unused.length)]
      : pool[Math.floor(Math.random() * pool.length)];

  if (selected) usedIds.add(selected.id);
  return selected;
}

export async function generateMenuSuggestions(): Promise<MenuSuggestion[]> {
  return []; // Legacy support
}
