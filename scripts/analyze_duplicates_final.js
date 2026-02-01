const fs = require("fs");

// Kalan en kritik duplicate grupları ve çözüm önerileri
const criticalDuplicates = [
  {
    foods: ["Mercimek Çorbası", "İşkembe Çorbası", "Domates Çorbası", "Tarhana Çorbası", "Bulgur Çorbası", "Yoğurt Çorbası", "Mantar Çorbası", "Kelle Paça", "Tavuk Suyu Çorbası", "Sebzeli Çorba", "Nohut Çorbası", "Şehriye Çorbası", "Düğün Çorbası", "Lahana Çorbası", "Pırasa Çorbası"],
    category: "Çorbalar",
    currentUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    searchTerms: ["mercimek çorbası tarifi", "işkembe çorbası", "domates çorbası", "tarhana çorbası", "yayla çorbası", "ezogelin çorbası"]
  },
  {
    foods: ["Börek", "Simit", "Menemen", "Sahanda Yumurta", "Omlet", "Tost", "Poğaça", "Sucuklu Yumurta", "Pastırmalı Yumurta"],
    category: "Kahvaltı",
    currentUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    searchTerms: ["sıhhh börek", "menemen tarifi", "sahanda yumurta", "omlet", "poğaça"]
  },
  {
    foods: ["Tavuk Şiş", "Antrikot", "Pirzola", "Tavuk Kanat"],
    category: "Izgara & Mangal",
    currentUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    searchTerms: ["tavuk şiş", "antrikot", "pirzola", "tavuk kanat", "köfte izgara"]
  },
  {
    foods: ["Taze Fasulye", "Patlıcan Musakka", "Bamya", "Ispanak", "Karnabahar"],
    category: "Sebze Yemekleri",
    currentUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    searchTerms: ["taze fasulye yemeği", "patlıcan musakka", "bamya yemeği", "ıspanak yemeği", "karnabahar"]
  },
  {
    foods: ["Fıstıklı Kek", "Portakallı Kek", "Elmalı Kek", "Muzlu Kek", "Çikolatalı Kek", "Yulaflı Kek"],
    category: "Kekler",
    currentUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    searchTerms: ["fıstıklı kek", "portakallı kek", "elmalı kek", "muzlu kek", "çikolatalı kek"]
  }
];

console.log("🔍 KRİTİK DUPLICATE GRUPLARI ANALİZİ");
console.log(`Toplam ${criticalDuplicates.length} grup analiz ediliyor...\n`);

criticalDuplicates.forEach((group, index) => {
  console.log(`=== GRUP ${index + 1}: ${group.category} ===`);
  console.log(`Etkilen Yemekler (${group.foods.length}): ${group.foods.slice(0, 5).join(", ")}${group.foods.length > 5 ? "..." : ""}`);
  console.log(`Mevcut URL: ${group.currentUrl.substring(0, 80)}...`);
  console.log(`Arama Terimleri: ${group.searchTerms.slice(0, 3).join(", ")}`);
  console.log("");
});

// Her grup için potansiyel çözümleri ara
console.log("🎯 POTANSİYEL ÇÖZÜMLER");
console.log("1. En çok bildirimi alan grubu öncelikle çöz");
console.log("2. Category-based resim arama yap");
console.log("3. Tek tek resim ataması yerine grup bazlı yaklaşım");
console.log("");

// Bildirim istatistikleri
const issuesLog = JSON.parse(fs.readFileSync("c:/Users/eargu/GitHub/YemekMenu/image_issues_log.json", "utf8"));
const reportCounts = {};

issuesLog.forEach(report => {
  reportCounts[report.name] = (reportCounts[report.name] || 0) + 1;
});

const sortedReports = Object.entries(reportCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15);

console.log("📊 EN ÇOK BİLDİRİM ALAN 15 YEMEK:");
sortedReports.forEach(([name, count], index) => {
  console.log(`${index + 1}. ${name} - ${count} bildirim`);
});

console.log("\n💡 STRATEJİK ÖNCELİK SIRASI:");
console.log("1. En çok bildirimi alan 15 yemeği çöz (hazır)")
console.log("2. En çok duplicate'li 5 grubu çöz");
console.log("3. Geri kalan az sayılı duplicate'leri tek tek çöz");

// Save analysis for next steps
fs.writeFileSync("duplicate_analysis_final.json", JSON.stringify({
  criticalGroups: criticalDuplicates,
  topReported: sortedReports,
  strategy: "user_feedback_first_then_duplicates"
}, null, 2));

console.log("\n✅ Detaylı analiz 'duplicate_analysis_final.json' dosyasına kaydedildi.");
console.log("🚀 Şimdi sıra en çok şikayet alan yemeklere özel resim bulmada!");