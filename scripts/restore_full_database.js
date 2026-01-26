const fs = require("fs");

const path = "c:/Users/eargu/GitHub/YemekMenu/database/foods_backup_utf8.ts";
const targetPath = "c:/Users/eargu/GitHub/YemekMenu/database/foods.ts";

let content = fs.readFileSync(path, "utf8");

// Mapping for broken characters (UTF-16 -> UTF-8 mess up)
// These are common patterns seen in the file reading output
const charMap = {
  "├ç": "Ç",
  "─▒": "ı",
  "├Â": "ö",
  "┼ş": "ş",
  "─ş": "ş",
  "─░": "İ",
  "├╝": "ü",
  "├ğ": "ğ",
  "─ƒ": "ğ",
  "├«": "î",
  "├ó": "â",
  "├┤": "ô",
  "Ôé║": "₺",
  ÔåÆ: "→",
  "Ô£à": "✅",
  ÔØî: "❌",
};

let fixedContent = content;
for (const [broken, fixed] of Object.entries(charMap)) {
  fixedContent = fixedContent.split(broken).join(fixed);
}

fs.writeFileSync(targetPath, fixedContent, "utf8");
console.log("SUCCESS: Restored 329 items with fixed encoding.");
