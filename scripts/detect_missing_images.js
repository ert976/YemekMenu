const fs = require("fs");
const path = "c:/Users/eargu/GitHub/YemekMenu/database/foods.ts";
const content = fs.readFileSync(path, "utf8");

// Load all image mappings
const imageRegistry = JSON.parse(fs.readFileSync("c:/Users/eargu/GitHub/YemekMenu/database/image_registry.json", "utf8"));
const firecrawlData = JSON.parse(fs.readFileSync("c:/Users/eargu/GitHub/YemekMenu/scripts/firecrawl_batch.json", "utf8"));

const blocks = content.split("  {");
const foodBlocks = blocks.slice(1);

const foodsWithoutImages = [];
const duplicateImages = {};
const allImages = {};

console.log("--- RESİM ANALİZ RAPORU ---\n");

foodBlocks.forEach((block, index) => {
  const nameMatch = block.match(/"name":\s*"([^"]+)"/);
  const urlMatch = block.match(/"image_url":\s*"([^"]+)"/);
  const categoryMatch = block.match(/"category":\s*"([^"]+)"/);
  
  if (nameMatch && urlMatch && categoryMatch) {
    const name = nameMatch[1];
    const url = urlMatch[1];
    const category = categoryMatch[1];
    
    // Say resim usage
    if (!allImages[url]) allImages[url] = [];
    allImages[url].push({ name, category });
    
    // Check if generic/fallback image
    const isGeneric = url.includes("unsplash.com/photo-") || 
                      url.includes("images.weserv.nl") ||
                      url.includes("placeholder") ||
                      allImages[url].length > 1;
    
    if (isGeneric) {
      foodsWithoutImages.push({
        name,
        category,
        currentUrl: url,
        issue: allImages[url].length > 1 ? "DUPLICATE" : "GENERIC",
        sharedWith: allImages[url].filter(f => f.name !== name).map(f => f.name)
      });
    }
  }
});

// Print summary
console.log(`Total Foods Analyzed: ${foodBlocks.length}`);
console.log(`Foods Needing Unique Images: ${foodsWithoutImages.length}`);
console.log(`Foods With Proper Images: ${foodBlocks.length - foodsWithoutImages.length}`);

console.log(`\n--- KRİTİK DUBLE'LAR ---`);
Object.entries(allImages)
  .filter(([url, foods]) => foods.length > 1)
  .forEach(([url, foods]) => {
    console.log(`\nURL: ${url.substring(0, 80)}...`);
    console.log(`Used by (${foods.length}): ${foods.map(f => f.name).join(", ")}`);
  });

console.log(`\n--- RESİMSİZ/GENEL RESİMLİ YEMLER ---`);
foodsWithoutImages.forEach((food, index) => {
  console.log(`${index + 1}. ${food.name} (${food.category}) - ${food.issue}`);
  if (food.sharedWith.length > 0) {
    console.log(`   Shared with: ${food.sharedWith.slice(0, 3).join(", ")}${food.sharedWith.length > 3 ? "..." : ""}`);
  }
});

// Save detailed report
fs.writeFileSync("image_analysis_report.json", JSON.stringify({
  summary: {
    totalFoods: foodBlocks.length,
    needUniqueImages: foodsWithoutImages.length,
    haveUniqueImages: foodBlocks.length - foodsWithoutImages.length,
    duplicateUrls: Object.entries(allImages).filter(([url, foods]) => foods.length > 1).length
  },
  foodsNeedingImages: foodsWithoutImages,
  duplicateGroups: Object.entries(allImages).filter(([url, foods]) => foods.length > 1)
    .map(([url, foods]) => ({ url, foods, count: foods.length }))
}, null, 2));

console.log(`\n--- RAPOR KAYDEDİLDİ ---`);
console.log(`Detaylı rapor: image_analysis_report.json`);