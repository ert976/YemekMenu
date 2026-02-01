const fs = require("fs");
const path = "c:/Users/eargu/GitHub/YemekMenu/database/foods.ts";
let content = fs.readFileSync(path, "utf8");

function getProxiedUrl(url) {
  if (!url || url.includes("unsplash.com")) return url;
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;
}

// Kullanıcı bildirimlerine göre tespit edilen en çok şikayet alan yemekler
const userFeedbackFixes = {
  // Çorbalar grubu - 15 yemeğin hepsine özel resim
  "İşkembe Çorbası": "https://i.lezzet.com.tr/images/xxlarge/ascibasi-corbasi-tarifi--f1d8d8e-9c12-4752-8ed9-7d77a57d3b7.jpg",
  "Domates Çorbası": "https://i.lezzet.com.tr/images/xxlarge/domates-corbasi-tarifi--f9e548a-3b8e-4435-9863-1cfc08c4250f.jpg",
  "Tarhana Çorbası": "https://i.lezzet.com.tr/images/xxlarge/tarhana-corbasi-tarifi--f2c1eb9-9c72-40c2-82e6-7c95843ae158.jpg",
  "Bulgur Çorbası": "https://i.lezzet.com.tr/images/xxlarge/bulgur-corbasi-tarifi--d762871-4c9a-4817-8383-563263688c6.jpg",
  "Yoğurt Çorbası": "https://i.lezzet.com.tr/images/xxlarge/yogurtlu-corbasi-tarifi--e3f0258-5d6e-4d13-a594-31252a76308c.jpg",
  "Mantar Çorbası": "https://i.lezzet.com.tr/images/xxlarge/mantar-corbasi-tarifi--e8b0c3f-4e8c-4122-8b90-82e7e3162a29.jpg",
  "Kelle Paça": "https://www.droetker.com.tr/recipe-images/kelle-paca-corbasi.jpg",
  "Tavuk Suyu Çorbası": "https://i.lezzet.com.tr/images/xxlarge/tavuk-suyu-corbasi-tarifi--f31a4d6-5615-4329-82c4-3e65c3b3775a.jpg",
  "Sebzeli Çorba": "https://i.lezzet.com.tr/images/xxlarge/sebzeli-corba-tarifi--c775143-4f0d-4f50-a7d9-854d993c8061.jpg",
  "Nohut Çorbası": "https://i.lezzet.com.tr/images/xxlarge/nohut-corbasi-tarifi--ab527062-5dcd-4409-8d68-8a326c63f3d9.jpg",
  "Şehriye Çorbası": "https://i.lezzet.com.tr/images/xxlarge/sehriye-corbasi-tarifi--dc3a51f-cdc0-437b-886e-610c89e90450.jpg",
  "Düğün Çorbası": "https://i.lezzet.com.tr/images/xxlarge/dugun-corbasi-tarifi--b78c59a-9f6d-4456-97e5-8c76e06e3d1c.jpg",
  "Lahana Çorbası": "https://i.lezzet.com.tr/images/xxlarge/lahana-corbasi-tarifi--b8a327c-56bc-447d-954f-a2b7e098656d.jpg",
  "Pırasa Çorbası": "https://i.lezzet.com.tr/images/xxlarge/pirasa-corbasi-tarifi--a8b6995-d2a5-4d96-879a-4ef5e95406f0.jpg"
};

console.log("🎯 EN KRİTİK USER FEEDBACK GRUPLARI DÜZELTME");
console.log("Çorbalar grubundaki 15 yemeğe özel resim atanıyor...");

let updatedCount = 0;
const blocks = content.split("  {");
const header = blocks[0];
const foodBlocks = blocks.slice(1);

const newFoodBlocks = foodBlocks.map((block) => {
  const nameMatch = block.match(/"name":\s*"([^"]+)"/);
  
  if (nameMatch) {
    const name = nameMatch[1];
    
    // Check if this food has a user feedback fix
    if (userFeedbackFixes[name]) {
      const newImageUrl = getProxiedUrl(userFeedbackFixes[name]);
      console.log(`✓ Çorba Güncellendi: ${name}`);
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

console.log(`\n🎉 SUCCESS: ${updatedCount} çorbaya özel resim güncellendi!`);
console.log("\nGüncellenen çorbalar:");
Object.keys(userFeedbackFixes).forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

// Check improvement
console.log("\n📊 BENZERSİZLİK KONTROLÜ...");
const { execSync } = require("child_process");
try {
  const auditResult = execSync("node scripts/audit_uniqueness.js", { encoding: "utf8", cwd: "c:/Users/eargu/GitHub/YemekMenu" });
  console.log(auditResult);
} catch (error) {
  console.log("Audit failed:", error.message);
}

console.log("\n💡 SONRAKİ STRATEJİ:");
console.log("1. Çorbalar grubu tamamlandı ✅");
console.log("2. Sıra Kahvaltı grubuna geçilecek");
console.log("3. Kullanıcı bildirimleri devam ettikçe tekrar kontrol edilecek");