const fs = require("fs");
const path = "c:/Users/eargu/GitHub/YemekMenu/database/foods.ts";
const scriptPath =
  "c:/Users/eargu/GitHub/YemekMenu/scripts/update_food_images.js";

const content = fs.readFileSync(path, "utf8");
const scriptContent = fs.readFileSync(scriptPath, "utf8");

// Extraction of mapped names
const mappingSection = scriptContent.match(
  /const mapping = \{([\s\S]+?)\};/,
)[1];
const mappedNames = [];
const keyRegex = /"([^"]+)":/g;
let match;
while ((match = keyRegex.exec(mappingSection)) !== null) {
  mappedNames.push(match[1]);
}

const foods = [];
const blocks = content.split("  {");

for (const block of blocks) {
  const nameMatch = block.match(/"name":\s*"([^"]+)"/);
  if (nameMatch) {
    const name = nameMatch[1];
    if (!mappedNames.includes(name)) {
      foods.push(name);
    }
  }
}

fs.writeFileSync("missing_images_list.json", JSON.stringify(foods, null, 2));
console.log(
  `Identified ${foods.length} foods needing UNIQUE images (not in hardcoded mapping).`,
);
