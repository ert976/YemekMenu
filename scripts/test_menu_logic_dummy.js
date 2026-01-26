const { generateBalancedMenu } = require("../mealPlanner");
const { BUSINESS_RULES } = require("../constants/business-rules");

async function testLogic() {
  console.log("--- Testing Dietitian Logic ---");
  try {
    const plan = await generateBalancedMenu(7); // 1 Week

    let stats = {
      MEAT: 0,
      LEGUME: 0,
      VEG: 0,
      BREAKFAST_ITEMS: 0,
    };

    plan.plan_data.forEach((day, i) => {
      console.log(`\nDay ${i + 1}:`);
      console.log(
        `  Breakfast: ${day.breakfast.map((f) => f.name).join(", ")}`,
      );
      console.log(
        `  Lunch: ${day.lunch?.name || "SKIP"} (${day.lunch?.category})`,
      );
      console.log(
        `  Dinner: ${day.dinner?.name || "SKIP"} (${day.dinner?.category})`,
      );

      if (day.breakfast.length < 2) console.error("  FAIL: Weak Breakfast");

      const lunchCat = day.lunch?.category || "";
      const dinnerCat = day.dinner?.category || "";

      if (
        lunchCat.includes("Et") ||
        lunchCat.includes("Kebap") ||
        dinnerCat.includes("Et")
      )
        stats.MEAT++;
      if (lunchCat.includes("Bakla") || dinnerCat.includes("Bakla"))
        stats.LEGUME++;
    });

    console.log("\n--- Stats ---");
    console.log("Total Meat Days:", stats.MEAT);
    console.log("Total Legume Days:", stats.LEGUME);

    if (stats.MEAT > 3) console.warn("WARNING: High Meat Count");
    if (stats.LEGUME > 2) console.warn("WARNING: High Legume Count");
  } catch (e) {
    console.error(e);
  }
}

// Mocking dependencies for standalone run if needed, but easier to run via existing setup if possible.
// Since this is TS, running directly via node might fail without ts-node.
// I will rely on manual user verification if ts-node is not easy.
