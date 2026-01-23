
import fs from 'fs';
import path from 'path';

// This script will read foods.ts (or rather a JSON version of it) and enrich it.
// Since I can't easily run TS, I will just apply the logic via Edit tool if possible, 
// but since it's 300+ items, I will overwrite the file with a corrected version.

// Let's define the correction mapping
const enrichFood = (food) => {
  if (food.category === "Kahvaltı") {
    const name = food.name.toLowerCase();
    if (name.includes("yumurta") || name.includes("menemen") || name.includes("tost") || name.includes("omlet") || name.includes("mıhlama") || name.includes("kuymak") || name.includes("sucuk")) {
      food.subCategory = "main";
    } else if (name.includes("peynir") || name.includes("zeytin") || name.includes("bal") || name.includes("kaymak") || name.includes("reçel") || name.includes("tereyağ") || name.includes("domates") || name.includes("salatalık")) {
      food.subCategory = "side";
    } else if (name.includes("çay") || name.includes("kahve") || name.includes("suyu") || name.includes("limonata") || name.includes("süt") || name.includes("ayran")) {
      food.subCategory = "drink";
    } else if (name.includes("simit") || name.includes("poğaça") || name.includes("açma") || name.includes("börek") || name.includes("çörek") || name.includes("pide")) {
      food.subCategory = "bakery";
    } else {
      food.subCategory = "side"; // Default
    }
  }
  return food;
};
