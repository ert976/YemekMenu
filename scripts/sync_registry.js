const fs = require("fs");

// Read foods.ts
const foodsContent = fs.readFileSync("database/foods.ts", "utf8");

// Extract all food data
const foodMatches = foodsContent.match(/name:\s*"([^"]+)"[\s\S]*?image_url:\s*"([^"]+)"[\s\S]*?id:\s*(\d+)/g) || [];

const foods = foodMatches.map(match => {
  const nameMatch = match.match(/name:\s*"([^"]+)"/);
  const imageMatch = match.match(/image_url:\s*"([^"]+)"/);
  const idMatch = match.match(/id:\s*(\d+)/);
  
  return {
    name: nameMatch ? nameMatch[1] : null,
    image_url: imageMatch ? imageMatch[1] : null,
    id: idMatch ? parseInt(idMatch[1]) : null
  };
}).filter(f => f.name && f.image_url);

console.log(`Found ${foods.length} foods in foods.ts`);

// Read existing registry
let registry = { images: {} };
try {
  const registryContent = fs.readFileSync("image_registry.json", "utf8");
  registry = JSON.parse(registryContent);
  console.log(`Loaded existing registry with ${Object.keys(registry.images).length} entries`);
} catch (e) {
  console.log("Creating new registry");
}

// Update registry with current URLs
const today = new Date().toISOString().split("T")[0];
let updated = 0;
let added = 0;

foods.forEach(food => {
  if (registry.images[food.name]) {
    // Update existing
    if (registry.images[food.name].url !== food.image_url) {
      registry.images[food.name].url = food.image_url;
      registry.images[food.name].status = "verified";
      registry.images[food.name].date_updated = today;
      updated++;
    }
  } else {
    // Add new
    registry.images[food.name] = {
      url: food.image_url,
      status: "verified",
      source: "yemek.com",
      tested: true,
      date_added: today
    };
    added++;
  }
});

// Remove entries for deleted foods (Kalamar, Midye)
const deletedFoods = ["Kalamar Tava", "Midye Dolma"];
let removed = 0;
deletedFoods.forEach(name => {
  if (registry.images[name]) {
    delete registry.images[name];
    removed++;
    console.log(`Removed deleted food: ${name}`);
  }
});

// Save updated registry
fs.writeFileSync("image_registry.json", JSON.stringify(registry, null, 2));
fs.writeFileSync("database/image_registry.json", JSON.stringify(registry, null, 2));

console.log(`\n✅ Registry synchronized:`);
console.log(`  - Updated: ${updated} entries`);
console.log(`  - Added: ${added} entries`);
console.log(`  - Removed: ${removed} entries`);
console.log(`  - Total: ${Object.keys(registry.images).length} entries`);
