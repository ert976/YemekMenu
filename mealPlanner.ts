import { getAllFoods, getUserPreferences, saveMealPlan } from "./database";
import { DailyMeal, DietType, Food, MealPlan, MenuSuggestion } from "./types";
import { InsufficientDataError } from "./utils/errors";
import { generateEntityId } from "./utils/id-generator";

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
  let type: "variety" | "preference" | "economy" | "health" = "variety";

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
    // 7 günde bir çeşitliliği tazele
    if (i % 7 === 0) usedIds.clear();

    const dayCategoryTracker = new Set<string>();

    const getSmartMeal = (cats: string[], pLevels: number[]) => {
      const selected = getRandomFoodByPrice(
        filteredFoods,
        cats,
        usedIds,
        pLevels,
        dayCategoryTracker, // Aynı gün içindeki kategorileri takip et
      );
      if (selected) {
        dayCategoryTracker.add(selected.category as string);
        return assignReason(selected, preferences.likedIds, isEconomyMode);
      }
      return null;
    };

    // Yeni Serpme Kahvaltı Mantığı
    const getBreakfastPlate = (): Food[] => {
      const breakfastFoods = filteredFoods.filter(
        (f) => f.category === "Kahvaltı",
      );

      const mains = breakfastFoods.filter((f) => f.subCategory === "main");
      const sides = breakfastFoods.filter((f) => f.subCategory === "side");
      const bakeries = breakfastFoods.filter((f) => f.subCategory === "bakery");
      const drinks = breakfastFoods.filter((f) => f.subCategory === "drink");

      const plate: Food[] = [];

      // 1. Ana Ürün Seç (Yumurta, Menemen vb.)
      const main = getRandomItem(mains, usedIds) || getRandomItem(mains);
      if (main)
        plate.push(assignReason(main, preferences.likedIds, isEconomyMode));

      // 2. Yan Ürünler (Peynir, Zeytin vb.) - 2-3 çeşit
      const sideCount = isEconomyMode ? 2 : 3;
      for (let k = 0; k < sideCount; k++) {
        const side = getRandomItem(
          sides.filter((s) => !plate.find((p) => p.id === s.id)),
        );
        if (side) plate.push(side);
      }

      // 3. Hamur İşi (Haftada 2-3 kez)
      if (Math.random() > 0.6) {
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
      lunch: getSmartMeal(
        ["Sebze Yemekleri", "Baklagiller", "Çorbalar"],
        isEconomyMode ? [1] : [1, 2],
      ),
      dinner: getSmartMeal(
        ["Izgara & Mangal", "Döner & Kebap", "Hamur İşleri", "Sebze Yemekleri"],
        isEconomyMode ? [1, 2] : i % 7 < 5 ? [1, 2] : [1, 2, 3],
      ),
      snack: getSmartMeal(["Sütlü Tatlılar", "Şerbetli Tatlılar"], [1, 2, 3]),
      nutritionDescription: isEconomyMode
        ? "Maliyet kazancı optimize edildi."
        : "Haftalık lezzet dengesi önceliklendirildi.",
    };

    // Güvenlik: Eğer öğünler boş kalırsa alternatif ata
    if (!dayMeals.lunch) {
      const fallback =
        filteredFoods.find(
          (f) => !dayCategoryTracker.has(f.category as string),
        ) || filteredFoods[0];
      dayMeals.lunch = assignReason(
        fallback,
        preferences.likedIds,
        isEconomyMode,
      );
    }
    if (!dayMeals.dinner) {
      const fallback =
        filteredFoods.find(
          (f) =>
            f.id !== dayMeals.lunch?.id &&
            !dayCategoryTracker.has(f.category as string),
        ) || filteredFoods[1];
      dayMeals.dinner = assignReason(
        fallback,
        preferences.likedIds,
        isEconomyMode,
      );
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
}

function getRandomFoodByPrice(
  foods: Food[],
  categories: string[],
  usedIds: Set<number>,
  priceLevels: number[],
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

function getRandomItem(list: Food[], excludeIds?: Set<number>): Food | null {
  const pool = excludeIds ? list.filter((f) => !excludeIds.has(f.id)) : list;
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}
