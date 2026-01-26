const fs = require("fs");
const path = "c:/Users/eargu/GitHub/YemekMenu/database/foods.ts";
const content = fs.readFileSync(path, "utf8");

const urlMap = {}; // URL -> [Food Names]
const blocks = content.split("  {");
const foodBlocks = blocks.slice(1);

foodBlocks.forEach((block) => {
  const nameMatch = block.match(/"name":\s*"([^"]+)"/);
  const urlMatch = block.match(/"image_url":\s*"([^"]+)"/);
  if (nameMatch && urlMatch) {
    const name = nameMatch[1];
    const url = urlMatch[1];
    if (!urlMap[url]) urlMap[url] = [];
    urlMap[url].push(name);
  }
});

const duplicates = Object.entries(urlMap).filter(
  ([url, names]) => names.length > 1,
);

console.log(`--- IMAGE AUDIT REPORT ---`);
console.log(`Total Unique URLs: ${Object.keys(urlMap).length}`);
console.log(`Total Duplicated URL Instances: ${duplicates.length}`);
console.log(`\nDuplicate Breakdown:`);
duplicates.forEach(([url, names]) => {
  console.log(`URL: ${url}`);
  console.log(`  used by: ${names.join(", ")}`);
});

fs.writeFileSync("duplicate_report.json", JSON.stringify(duplicates, null, 2));
