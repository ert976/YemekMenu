import { generateBalancedMenu } from "../mealPlanner";

describe("mealPlanner", () => {
  describe("generateBalancedMenu", () => {
    it("should generate a 30-day menu plan", async () => {
      const plan = await generateBalancedMenu(30);
      expect(plan.plan_data.length).toBe(30);
      expect(plan.weekly_groups?.length).toBe(5); // 30 / 7 = 4.28 -> 5 groups
    });

    it("should respect diet restrictions (vegetarian)", async () => {
      const plan = await generateBalancedMenu(7, "vegetarian");
      plan.plan_data.forEach((day) => {
        if (day.lunch) expect(day.lunch.is_vegetarian).toBe(true);
        if (day.dinner) expect(day.dinner.is_vegetarian).toBe(true);
      });
    });

    it("should prevent category clashes within the same day", async () => {
      const plan = await generateBalancedMenu(7);
      plan.plan_data.forEach((day) => {
        const categories = new Set();
        // Breakfast is now an array, add all categories from it
        if (day.breakfast && Array.isArray(day.breakfast)) {
          day.breakfast.forEach((f) => categories.add(f.category));
        }

        if (day.lunch) {
          // Lunch might clash with breakfast, but usually breakfast is "Kahvaltı" category.
          // The tracker logic should prevent picking same category.
          // However, "Kahvaltı" category is strictly for breakfast now.
          // Just ensure lunch is not already added.
          // Note: Logic in mealPlanner uses dayCategoryTracker.
          expect(categories.has(day.lunch.category)).toBe(false);
          categories.add(day.lunch.category);
        }
        if (day.dinner) {
          expect(categories.has(day.dinner.category)).toBe(false);
          categories.add(day.dinner.category);
        }
      });
    });

    it("should generate a multi-item breakfast plate (Serpme)", async () => {
      const plan = await generateBalancedMenu(1);
      const breakfast = plan.plan_data[0].breakfast;

      expect(Array.isArray(breakfast)).toBe(true);
      expect(breakfast.length).toBeGreaterThanOrEqual(3); // En az Main + Side + Drink

      const hasMain = breakfast.some((f) => f.subCategory === "main");
      const hasSide = breakfast.some((f) => f.subCategory === "side");
      const hasDrink = breakfast.some((f) => f.subCategory === "drink");

      expect(hasMain).toBe(true);
      expect(hasDrink).toBe(true);
      // Side might be optional in some edge cases but our logic adds at least 2.
      expect(hasSide).toBe(true);
    });

    it("should handle economy mode by preferring budget items", async () => {
      const plan = await generateBalancedMenu(
        7,
        "normal",
        false,
        undefined,
        true,
      );
      plan.plan_data.forEach((day) => {
        if (day.lunch) expect(day.lunch.priceLevel).toBe(1);
        // Dinner might be level 1 or 2 in economy mode (based on local logic)
        if (day.dinner) expect([1, 2]).toContain(day.dinner.priceLevel);
      });
    });

    it("should assign valid reason tags to meals", async () => {
      const plan = await generateBalancedMenu(1);
      const day = plan.plan_data[0];
      expect(day.lunch?.reasonTag).toBeDefined();
      expect(day.lunch?.reasonType).toBeDefined();
    });
  });
});
