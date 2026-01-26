const fs = require("fs");
const path = require("path");

const foodsPath = path.join(__dirname, "../database/foods.ts");
const scriptPath = path.join(__dirname, "update_food_images.js");

const foodsFile = fs.readFileSync(foodsPath, "utf8");
const scriptFile = fs.readFileSync(scriptPath, "utf8");

// Extract food names from foods.ts
const foodNames = [];
const nameRegex = /"name":\s*"([^"]+)"/g;
let match;
while ((match = nameRegex.exec(foodsFile)) !== null) {
  foodNames.push(match[1]);
}

// Extract mapped names from script manually (parsing the object structure roughly)
// We look for keys in the mapping object
const mappingSection = scriptFile.match(/const mapping = \{([\s\S]+?)\};/)[1];
const mappedNames = [];
// Matches keys like "Name": or Name:
const keyRegex = /^\s*(?:"([^"]+)"|([a-zA-Z0-9_\u00C0-\u017F ]+))\s*:/gm;

let keyMatch;
while ((keyMatch = keyRegex.exec(mappingSection)) !== null) {
  const name = keyMatch[1] || keyMatch[2];
  mappedNames.push(name.trim());
}

const missing = foodNames.filter((n) => !mappedNames.includes(n));

console.log("Total Foods:", foodNames.length);
console.log("Mapped Foods:", mappedNames.length);
console.log("Missing Mappings (" + missing.length + "):");
missing.forEach((m) => console.log(" - " + m));
