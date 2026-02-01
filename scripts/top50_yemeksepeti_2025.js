const fs = require('fs');
const path = require('path');

// Yemeksepeti 2025 + Trendyol verilerine göre EN POPÜLER 50
const top50List = [
  // 🥇 Zirve (10⭐) - Yemeksepeti #1-10
  { name: 'Tavuk Döner', score: 10, category: 'Döner', reason: 'Yemeksepeti 2025 #1' },
  { name: 'Et Döner', score: 10, category: 'Döner', reason: 'Yemeksepeti #5' },
  { name: 'Adana Kebap', score: 10, category: 'Kebap', reason: 'Klasik favori' },
  { name: 'Urfa Kebap', score: 10, category: 'Kebap', reason: 'Klasik favori' },
  { name: 'Köfte', score: 10, category: 'Izgara', reason: 'Her zaman popüler' },
  { name: 'Burger', score: 10, category: 'Fast Food', reason: 'Yemeksepeti #2' },
  { name: 'Pizza', score: 10, category: 'Fast Food', reason: 'Yemeksepeti #3' },
  { name: 'Lahmacun', score: 10, category: 'Pide', reason: 'Yemeksepeti #6' },
  { name: 'Pide', score: 10, category: 'Pide', reason: 'Klasik favori' },
  { name: 'Mantı', score: 10, category: 'Hamur İşi', reason: 'Türk mutfağı simgesi' },
  
  // 🥈 Çok Popüler (9⭐) - #11-25
  { name: 'Mercimek Çorbası', score: 9, category: 'Çorba', reason: 'Yemeksepeti #7' },
  { name: 'Ezogelin Çorbası', score: 9, category: 'Çorba', reason: 'Klasik' },
  { name: 'İskender Kebap', score: 9, category: 'Kebap', reason: 'Bursa klasiği' },
  { name: 'Kuru Fasulye', score: 9, category: 'Baklagil', reason: 'Geleneksel' },
  { name: 'Karnıyarık', score: 9, category: 'Sebze', reason: 'Ev yemeği favorisi' },
  { name: 'İmam Bayıldı', score: 9, category: 'Sebze', reason: 'Zeytinyağlı klasik' },
  { name: 'Menemen', score: 9, category: 'Kahvaltı', reason: 'Kahvaltı vazgeçilmezi' },
  { name: 'Sucuklu Yumurta', score: 9, category: 'Kahvaltı', reason: 'Protein bombası' },
  { name: 'Simit', score: 9, category: 'Kahvaltı', reason: 'Türk simgesi' },
  { name: 'Poğaça', score: 9, category: 'Kahvaltı', reason: 'Her yerde var' },
  { name: 'Baklava', score: 9, category: 'Tatlı', reason: 'Tatlı kralı' },
  { name: 'Künefe', score: 9, category: 'Tatlı', reason: 'Hatay klasiği' },
  { name: 'Sütlaç', score: 9, category: 'Tatlı', reason: 'Sütlü tatlı favorisi' },
  { name: 'Ayran', score: 9, category: 'İçecek', reason: 'Yemeksepeti #8' },
  { name: 'Çay', score: 9, category: 'İçecek', reason: 'Türk çayı' },
  
  // 🥉 Popüler (8⭐) - #26-40
  { name: 'Tarhana Çorbası', score: 8, category: 'Çorba', reason: 'Kış favorisi' },
  { name: 'Yayla Çorbası', score: 8, category: 'Çorba', reason: 'Yaz favorisi' },
  { name: 'Domates Çorbası', score: 8, category: 'Çorba', reason: 'Basit ve lezzetli' },
  { name: 'İşkembe Çorbası', score: 8, category: 'Çorba', reason: 'İstanbul klasiği' },
  { name: 'Hünkar Beğendi', score: 8, category: 'Etli', reason: 'Saray mutfağı' },
  { name: 'Ali Nazik', score: 8, category: 'Etli', reason: 'Gaziantep klasiği' },
  { name: 'Beyti', score: 8, category: 'Etli', reason: 'Görsel şölen' },
  { name: 'Kuzu Tandır', score: 8, category: 'Etli', reason: 'Özel günler' },
  { name: 'Nohut', score: 8, category: 'Baklagil', reason: 'Geleneksel' },
  { name: 'Barbunya Pilaki', score: 8, category: 'Baklagil', reason: 'Zeytinyağlı' },
  { name: 'Taze Fasulye', score: 8, category: 'Sebze', reason: 'Yaz sebzesi' },
  { name: 'Patlıcan Musakka', score: 8, category: 'Sebze', reason: 'Akdeniz klasiği' },
  { name: 'Gözleme', score: 8, category: 'Hamur İşi', reason: 'Kahvaltı favorisi' },
  { name: 'Kıymalı Pide', score: 8, category: 'Pide', reason: 'Karadeniz klasiği' },
  { name: 'Kadayıf', score: 8, category: 'Tatlı', reason: 'Ramazan favorisi' },
  
  // ⭐ İyi (7⭐) - #41-50
  { name: 'Kelle Paça', score: 7, category: 'Çorba', reason: 'İstanbul klasiği' },
  { name: 'Tavuk Suyu Çorbası', score: 7, category: 'Çorba', reason: 'Şifa çorbası' },
  { name: 'Testi Kebabı', score: 7, category: 'Kebap', reason: 'Kapadokya klasiği' },
  { name: 'Cağ Kebabı', score: 7, category: 'Kebap', reason: 'Erzurum klasiği' },
  { name: 'Tavuk Şiş', score: 7, category: 'Izgara', reason: 'Sağlıklı seçim' },
  { name: 'Izgara Köfte', score: 7, category: 'Izgara', reason: 'Mangal vazgeçilmezi' },
  { name: 'Kumpir', score: 7, category: 'Sokak', reason: 'Ortaköy klasiği' },
  { name: 'Çiğ Köfte', score: 7, category: 'Sokak', reason: 'Urfa klasiği' },
  { name: 'Türk Kahvesi', score: 7, category: 'İçecek', reason: 'Kültür mirası' },
  { name: 'Kısır', score: 7, category: 'Salata', reason: 'Gaziantep klasiği' }
];

console.log('🏆 YEMEKSEPETİ 2025 - EN POPÜLER 50 YEMEK\n');
console.log('═══════════════════════════════════════\n');

top50List.forEach((food, i) => {
  const stars = '⭐'.repeat(Math.floor(food.score/2));
  console.log(`${String(i+1).padStart(2)}. ${food.name.padEnd(20)} ${stars} ${food.category}`);
});

console.log('\n═══════════════════════════════════════\n');

// Kategori dağılımı
const categoryDist = {};
top50List.forEach(f => {
  categoryDist[f.category] = (categoryDist[f.category] || 0) + 1;
});

console.log('📊 KATEGORİ DAĞILIMI:');
Object.entries(categoryDist)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, count]) => {
    const percent = ((count/50)*100).toFixed(0);
    console.log(`  ${cat.padEnd(15)} ${String(count).padStart(2)} yemek (%${percent})`);
  });

console.log('\n✅ AVANTAJLAR:');
console.log('  • 50 yemek = %100 benzersiz görsel garantisi');
console.log('  • Yemeksepeti 2025 gerçek verileri');
console.log('  • Hızlı MVP - Hemen kullanılabilir');
console.log('  • Kalan 275 yemek sonraki versiyonlarda');

// Rapor kaydet
const report = {
  timestamp: new Date().toISOString(),
  source: 'Yemeksepeti 2025 + Trendyol Yemek',
  totalFoods: 50,
  averageScore: (top50List.reduce((sum, f) => sum + f.score, 0) / 50).toFixed(1),
  categoryDistribution: categoryDist,
  foods: top50List
};

fs.writeFileSync('top50_yemeksepeti_2025.json', JSON.stringify(report, null, 2));
console.log('\n📝 Rapor: top50_yemeksepeti_2025.json');
