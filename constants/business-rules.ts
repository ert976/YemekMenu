export const BUSINESS_RULES = {
  MEAL_PLAN: {
    DEFAULT_DAYS: 30,
    MIN_FOOD_VARIETY: 10,
    WEEKLY_REFRESH_DAYS: 7,
    LUNCH_CATEGORIES: ["Çorbalar", "Sebze Yemekleri", "Baklagiller", "Etli Yemekler", "Hamur İşleri", "Pilavlar"],
    DINNER_CATEGORIES: ["Çorbalar", "Etli Yemekler", "Döner & Kebap", "Izgara & Mangal", "Sebze Yemekleri", "Deniz Ürünleri"],
    SNACK_CATEGORIES: ["Sütlü Tatlılar", "Şerbetli Tatlılar", "Meyveler"],
    BAKERY_PROBABILITY: 0.6,
    ECONOMY_SIDE_COUNT: 2,
    NORMAL_SIDE_COUNT: 3,
  },
  NUTRITION: {
    HIGH_PROTEIN_THRESHOLD: 25,
    LOW_CARB_THRESHOLD: 30,
    TARGET_CALORIES: 2000,
    RATIOS: {
      PROTEIN: 0.30,
      CARBS: 0.40,
      FAT: 0.30,
    }
  },
};
