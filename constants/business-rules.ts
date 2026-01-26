export const BUSINESS_RULES = {
  MEAL_PLAN: {
    DEFAULT_DAYS: 30,
    MIN_FOOD_VARIETY: 15,
    WEEKLY_REFRESH_DAYS: 7,

    // Dietitian Logic: Category Groups
    GROUPS: {
      LEGUMES: ["Baklagiller"],
      VEGETABLES: ["Sebze Yemekleri", "Dolma & Sarma"],
      MEAT_RED: ["Etli Yemekler", "Döner & Kebap", "Izgara & Mangal"],
      CHICKEN: ["Tavuk Yemekleri", "Tavuklu Burger"], // Assuming we might distinguish these
      FISH: ["Deniz Ürünleri"],
      CARBS_SIDE: ["Pilavlar", "Makarna", "Makarna & Pilav"],
      SOUPS: ["Çorbalar"],
      FAST_FOOD: ["Fast Food", "Burgerler", "Pizzalar"],
      BREAKFAST_MAIN: ["Kahvaltı"],
      PASTRY: ["Hamur İşleri"],
    },

    // Weekly Constraints (Max occurrences per week)
    WEEKLY_LIMITS: {
      LEGUMES: 2, // Max 2 times a week
      MEAT_RED: 3, // Max 3 times a week
      FISH: 2, // Target 2 times (at least 1 if possible)
      FAST_FOOD: 1, // Max 1 unhealthy meal
      PASTRY: 2, // Max 2 pastries
      VEGETABLES: 7, // Unlimited (healthy)
    },

    // Templates for daily main course pairs (Lunch - Dinner)
    // To ensure variety: e.g. If Lunch is Veggie, Dinner might be Meat.
    DAILY_TEMPLATES: [
      { day: "Monday", lunch: "VEGETABLES", dinner: "MEAT_RED" }, // Sendromsuz Protein
      { day: "Tuesday", lunch: "LEGUMES", dinner: "VEGETABLES" }, // Earthy
      { day: "Wednesday", lunch: "VEGETABLES", dinner: "CHICKEN" }, // Light Midweek
      { day: "Thursday", lunch: "CARBS_SIDE", dinner: "MEAT_RED" }, // Energy
      { day: "Friday", lunch: "VEGETABLES", dinner: "FISH" }, // Omega 3 Day
      { day: "Saturday", lunch: "FAST_FOOD", dinner: "VEGETABLES" }, // Cheat Lunch
      { day: "Sunday", lunch: "PASTRY", dinner: "SOUPS" }, // Cozy Sunday
    ],

    LUNCH_CATEGORIES: [
      "Çorbalar",
      "Sebze Yemekleri",
      "Baklagiller",
      "Etli Yemekler",
      "Hamur İşleri",
      "Pilavlar",
    ],
    DINNER_CATEGORIES: [
      "Çorbalar",
      "Etli Yemekler",
      "Döner & Kebap",
      "Izgara & Mangal",
      "Sebze Yemekleri",
      "Deniz Ürünleri",
    ],
    SNACK_CATEGORIES: ["Sütlü Tatlılar", "Şerbetli Tatlılar", "Meyveler"],
    BAKERY_PROBABILITY: 0.6,
    ECONOMY_SIDE_COUNT: 2,
    NORMAL_SIDE_COUNT: 3,
  },
  NUTRITION: {
    HIGH_PROTEIN_THRESHOLD: 20,
    LOW_CARB_THRESHOLD: 30,
    TARGET_CALORIES: 2000,
    RATIOS: {
      PROTEIN: 0.3,
      CARBS: 0.4,
      FAT: 0.3,
    },
  },
};
