import { Food } from "../types";
import { appState, saveState } from "./state";

// Backup current state before making changes
const backupFoods = [...appState.foods];

// Count current images by URL to identify the most problematic patterns
const urlCounts = {};
const problematicUrls = [];

appState.foods.forEach(food => {
  const url = food.image_url;
  if (!url) return;
  
  urlCounts[url] = (urlCounts[url] || 0) + 1;
  
  if (urlCounts[url] > 1) {
    problematicUrls.push({
      url,
      count: urlCounts[url],
      foods: appState.foods.filter(f => f.image_url === url).map(f => f.name)
    });
  }
});

// Sort by most problematic
const sortedProblematic = problematicUrls.sort((a, b) => b.count - a.count);

console.log("🔍 PROBLEM ANALİZİ RAPORU");
console.log(`Toplam ${appState.foods.length} yemek arasından...`);
console.log(`Toplam ${sortedProblematic.length} duplicate URL bulundu`);

// Display top 10 most problematic image URLs
console.log("\n📊 EN ÇOK PROBLEMATİK 10 RESİM URL'LERİ:");
sortedProblematic.slice(0, 10).forEach((item, index) => {
  console.log(`${index + 1}. URL: ${item.url.substring(0, 100)}...`);
  console.log(`   Kullanılan Yemekler (${item.count}): ${item.foods.slice(0, 8).join(", ")}${item.foods.length > 8 ? "..." : ""}`);
  console.log("");
});

// Analysis by category
const categoryIssues = {};
appState.foods.forEach(food => {
  if (urlCounts[food.image_url] > 1) {
    const category = food.category;
    categoryIssues[category] = (categoryIssues[category] || 0) + 1;
  }
});

console.log("\n📈 KATEGORİ BAZLI PROBLEM ANALİZİ:");
Object.entries(categoryIssues)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([category, count], index) => {
    console.log(`${index + 1}. ${category}: ${count} duplicate resim`);
  });

// Suggest solutions for top problematic groups
console.log("\n💡 ÇÖZÜM ÖNERİLERİ:");

sortedProblematic.slice(0, 5).forEach((item, index) => {
  console.log(`\n${index + 1}. GRUP: ${item.foods[0]} ve diğer ${item.count - 1} yemek`);
  console.log(`   MEVCUT DURUM: ${item.url}`);
  console.log(`   ÇÖZÜM: Her yemek için özel resim bulma`);
  
  // Calculate impact score
  const impactScore = item.count * 10; // Each duplicate affects user experience severely
  console.log(`   ÖNCELİK: ${impactScore} (user experience puanı)`);
  
  if (item.foods[0].includes("Çorba")) {
    console.log(`   🎯 ÖZEL STRATEJİ: Türk çorba sitelerinden her birine özel fotoğraf bul`);
  } else if (item.foods[0].includes("Börek")) {
    console.log(`   🥐 ÖZEL STRATEJİ: Türk kahvaltı fotoğraf kaynaklarından benzersiz resimler`);
  } else if (item.foods[0].includes("Kek")) {
    console.log(`   🎂 ÖZEL STRATEJİ: Türk tatlısının her birine özgün lezzet fotoğraf bul`);
  } else if (item.url.includes("unsplash.com")) {
    console.log(`   🖼️ ÖZEL STRATEJİ: Profesyonel stok fotoğraf bankalarından ilgili kategoriye özel fotoğraf seç`);
  }
});

console.log("\n📈 TOPLAM ETKİLEN YEMEK SAYISI:");
console.log(`Total foods: ${appState.foods.length}`);
console.log(`Unique images: ${Object.keys(urlCounts).length}`);
console.log(`Duplicate instances: ${appState.foods.length - Object.keys(urlCounts).length}`);

// Create action plan
const actionPlan = {
  criticalFixes: [
    {
      foods: sortedProblematic.slice(0, 3).flatMap(item => item.foods.slice(0, 2)), // Top 3 groups, max 2 foods each
      priority: "HIGH",
      strategy: "firecrawl_search + manual_selection"
    }
  ],
  mediumFixes: [
    {
      foods: sortedProblematic.slice(3, 8).flatMap(item => item.foods.slice(0, 2)), // Next 5 groups
      priority: "MEDIUM", 
      strategy: "category_specific_search"
    }
  ],
  lowFixes: [
    {
      foods: sortedProblematic.slice(8).flatMap(item => item.foods.slice(0, 2)), // Remaining groups
      priority: "LOW",
      strategy: "generic_professional_images"
    }
  ]
  ]
};

// Save analysis and action plan
const analysisReport = {
  timestamp: new Date().toISOString(),
  current_state: {
    total_foods: appState.length,
    unique_images: Object.keys(urlCounts).length,
    duplicates: appState.foods.length - Object.keys(urlCounts).length,
    uniqueness_percentage: ((Object.keys(urlCounts).length / appState.foods.length) * 100).toFixed(1)
  },
  problematic_urls: sortedProblematic,
  category_issues: categoryIssues,
  action_plan: actionPlan,
  top_most_problematic: sortedProblematic.slice(0, 3)
};

// Write comprehensive report
fs.writeFileSync("comprehensive_image_analysis.json", JSON.stringify(analysisReport, null, 2));

console.log("\n✅ KAPSAMLI ANALİZ 'comprehensive_image_analysis.json' dosyasına kaydedildi.");
console.log("🎯 Şimdi bu rapora göre stratejik resim bulma işlemine başlayabilirsiniz!");