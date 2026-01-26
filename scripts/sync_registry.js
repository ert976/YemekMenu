const fs = require("fs");
const path = "c:/Users/eargu/GitHub/YemekMenu/database/foods.ts";
const registryPath =
  "c:/Users/eargu/GitHub/YemekMenu/database/image_registry.json";

const content = fs.readFileSync(path, "utf8");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

let updatedCount = 0;
const blocks = content.split("  {");
const header = blocks[0];
const foodBlocks = blocks.slice(1);

const newFoodBlocks = foodBlocks.map((block) => {
  const nameMatch = block.match(/"name":\s*"([^"]+)"/);
  if (nameMatch) {
    const name = nameMatch[1];
    const url = registry[name];

    if (url) {
      updatedCount++;
      return block.replace(/"image_url":\s*"[^"]+"/, `"image_url": "${url}"`);
    }
  }
  return block;
});

const finalContent = header + "  {" + newFoodBlocks.join("  {");
fs.writeFileSync(path, finalContent);

console.log(
  `SUCCESS: Injected ${updatedCount} UNIQUE verified URLs from registry into database/foods.ts`,
);
