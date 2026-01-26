const fs = require("fs");
const path = require("path");

const registryPath = path.join(__dirname, "../database/image_registry.json");
const foodsPath = path.join(__dirname, "../database/foods.ts");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

// Get all food names from database
const foodsContent = fs.readFileSync(foodsPath, "utf8");
const nameRegex = /"name":\s*"([^"]+)"/g;
const allFoods = [];
let match;
while ((match = nameRegex.exec(foodsContent)) !== null) {
  allFoods.push(match[1]);
}

// Find items needing images (not in registry or using placeholder)
const placeholder =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd";
const itemsToDiscover = allFoods.filter((name) => {
  return (
    !registry[name] ||
    registry[name].includes("photo-1512621776951-a57141f2eefd")
  );
});

console.log(`Total foods in DB: ${allFoods.length}`);
console.log(`Items needing discovery: ${itemsToDiscover.length}`);

// We will process these in chunks through the Firecrawl Agent
const CHUNK_SIZE = 40;
const chunks = [];
for (let i = 0; i < itemsToDiscover.length; i += CHUNK_SIZE) {
  chunks.push(itemsToDiscover.slice(i, i + CHUNK_SIZE));
}

async function runDiscovery() {
  console.log(`Starting discovery for ${chunks.length} chunks...`);
  // Note: The actual Tool call happens in the AI context.
  // This script serves as a manifest for the AI to follow.
}

fs.writeFileSync(
  "discovery_manifest.json",
  JSON.stringify(
    {
      total: itemsToDiscover.length,
      chunks: chunks,
    },
    null,
    2,
  ),
);

console.log("Discovery manifest created. Ready to invoke Firecrawl Agent.");
