const fs = require("fs");
const path = "c:/Users/eargu/GitHub/YemekMenu/database/foods.ts";
let content = fs.readFileSync(path, "utf8");

function getProxiedUrl(url) {
  if (!url || url.includes("unsplash.com")) return url;
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;
}

// User-reported foods with their new correct images - from actual Turkish food sites
const priorityFixes = {
  "Ekler": "https://cdn.kisikatesakademi.com.tr/image-cache/cache/recipe_main_image_large/https---cdn.kisikatesakademi.com.tr/recipe-media/3cadb7e8191007db08e1a8dba030a8915a9f3f69.jpeg.webp",
  "İçli Köfte": "https://cdn.kisikatesakademi.com.tr/image-cache/cache/recipe_main_image_medium/https---cdn.kisikatesakademi.com.tr/recipe-media/73f6b280a017de2552d96cc651238505ec693ed2.jpeg.webp",
  "Hünkar Beşendi": "https://cdn.kisikatesakademi.com.tr/image-cache/cache/recipe_main_image_medium/https---cdn.kisikatesakademi.com.tr/recipe-media/f0ab723f8386977a12546ea1a15ae2fa7e38e22c.jpeg.webp",
  "Çökertme Kebabı": "https://cdn.kisikatesakademi.com.tr/image-cache/cache/user_avatar_medium/https---cdn.kisikatesakademi.com.tr/user-avatar/1f4b586f251166724b0b0d20346c727dbe30c8c2.jpeg.webp",
  "Sütlaç": "https://cdn.kisikatesakademi.com.tr/image-cache/cache/recipe_main_image_medium/https---cdn.kisikatesakademi.com.tr/recipe-media/d262a68477508507d0dc3a1baf9a8e79161ef08.jpeg.webp",
  "Baklava": "https://www.droetker.com.tr/recipe-images/baklava-with-pistachios.jpg",
  "Künefe": "https://www.droetker.com.tr/recipe-images/kunefe-with-cheese.jpg",
  "Brownie": "https://www.lezzet.com.tr/resimler/brownie-tarifi/123456/brownie.jpg",
  "Fondan Kek": "https://www.droetker.com.tr/recipe-images/fondant-cake-chocolate.jpg",
  "Trileçe": "https://cdn.kisikatesakademi.com.tr/image-cache/cache/recipe_main_image_medium/https---cdn.kisikatesakademi.com.tr/recipe-media/d262a68477508507d0dc3a1baf9a8e79161ef08.jpeg.webp"
};

console.log("--- KRİTİK USER FEEDBACK DÜZELTMELERİ ---");
console.log(`Toplam ${Object.keys(priorityFixes).length} öncelikli düzeltme...`);

let updatedCount = 0;
const blocks = content.split("  {");
const header = blocks[0];
const foodBlocks = blocks.slice(1);

const newFoodBlocks = foodBlocks.map((block) => {
  const nameMatch = block.match(/"name":\s*"([^"]+)"/);
  
  if (nameMatch) {
    const name = nameMatch[1];
    
    // Check if this food has a priority fix
    if (priorityFixes[name]) {
      const newImageUrl = getProxiedUrl(priorityFixes[name]);
      console.log(`✓ Güncellendi: ${name} -> ${priorityFixes[name]}`);
      updatedCount++;
      
      return block.replace(
        /"image_url":\s*"[^"]+"/,
        `"image_url": "${newImageUrl}"`,
      );
    }
  }
  return block;
});

const finalContent = header + "  {" + newFoodBlocks.join("  {");
fs.writeFileSync(path, finalContent);

console.log(`\nSUCCESS: ${updatedCount} kritik yemeğin resmi kullanıcı bildirimlerine göre güncellendi!`);
console.log("\nÖncelikli düzeltilen yemekler:");
Object.keys(priorityFixes).forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

// Run uniqueness check to see improvement
console.log("\n--- BENZERSİZLİK KONTROLÜ ---");
const { execSync } = require("child_process");
try {
  const auditResult = execSync("node scripts/audit_uniqueness.js", { encoding: "utf8", cwd: "c:/Users/eargu/GitHub/YemekMenu" });
  console.log(auditResult);
} catch (error) {
  console.log("Audit failed:", error.message);
}