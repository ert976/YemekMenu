const fs = require('fs');
const path = require('path');

// Mevcut foods.ts'den 200 popüler yemeği seç
const foodsPath = path.join(__dirname, '..', 'database', 'foods.ts');
const foodsContent = fs.readFileSync(foodsPath, 'utf8');

// Tüm yemekleri çıkar
const foodBlocks = foodsContent.match(/\{\s*"name":[^}]+\},?/g) || [];
const allFoods = foodBlocks.map(block => {
  const nameMatch = block.match(/"name":\s*"([^"]+)"/);
  const categoryMatch = block.match(/"category":\s*"([^"]+)"/);
  return {
    name: nameMatch ? nameMatch[1] : '',
    category: categoryMatch ? categoryMatch[1] : '',
    fullBlock: block
  };
}).filter(f => f.name);

console.log(`Toplam yemek: ${allFoods.length}`);

// Popülerlik puanlama (Türk mutfağında popülerlik)
const popularityScores = {
  // Çorbalar - Yüksek popülerlik
  'Mercimek Çorbası': 10,
  'Ezogelin Çorbası': 10,
  'Tarhana Çorbası': 9,
  'Yayla Çorbası': 8,
  'Domates Çorbası': 8,
  'İşkembe Çorbası': 7,
  'Kelle Paça': 7,
  'Mantar Çorbası': 6,
  
  // Ana Yemekler (Etli) - Çok popüler
  'Adana Kebap': 10,
  'Urfa Kebap': 10,
  'İskender Kebap': 10,
  'Et Döner': 10,
  'Tavuk Döner': 9,
  'Köfte': 10,
  'Izgara Köfte': 9,
  'İzmir Köfte': 8,
  'Karnıyarık': 9,
  'İmam Bayıldı': 9,
  'Hünkar Beğendi': 8,
  'Ali Nazik': 8,
  'Beyti': 8,
  'Kuzu Tandır': 8,
  'Testi Kebabı': 7,
  'Cağ Kebabı': 7,
  'Beyti Sarma': 7,
  
  // Ana Yemekler (Sebze) - Popüler
  'Karnıyarık': 9,
  'İmam Bayıldı': 9,
  'Mantı': 10,
  'Pide': 9,
  'Lahmacun': 9,
  'Gözleme': 8,
  'Kıymalı Pide': 8,
  'Peynirli Pide': 8,
  
  // Baklagiller
  'Kuru Fasulye': 9,
  'Nohut': 8,
  'Barbunya Pilaki': 7,
  'Yeşil Mercimek': 7,
  'Nohut Pilav': 7,
  
  // Kahvaltı - Çok popüler
  'Menemen': 10,
  'Sucuklu Yumurta': 10,
  'Pastırmalı Yumurta': 9,
  'Sahanda Yumurta': 9,
  'Omlet': 8,
  'Simit': 10,
  'Poğaça': 9,
  'Börek': 9,
  'Açma': 8,
  'Tost': 8,
  'Kahvaltı Tabağı': 9,
  'Peynir': 8,
  'Zeytin': 8,
  'Bal': 7,
  'Kaymak': 7,
  'Tereyağı': 7,
  
  // Tatlılar - Çok popüler
  'Baklava': 10,
  'Künefe': 10,
  'Sütlaç': 9,
  'Kadayıf': 9,
  'Revani': 8,
  'Şekerpare': 8,
  'İrmik Helvası': 8,
  'Aşure': 7,
  'Güllaç': 7,
  'Kazandibi': 7,
  'Tavuk Göğsü': 7,
  'Profiterol': 8,
  'Ekler': 7,
  'Pasta': 7,
  
  // İçecekler
  'Çay': 10,
  'Türk Kahvesi': 10,
  'Ayran': 9,
  'Şalgam': 7,
  'Soda': 6,
  'Meyve Suyu': 7,
  'Limonata': 7,
  
  // Zeytinyağlılar/Salatalar
  'Zeytinyağlı Enginar': 8,
  'Zeytinyağlı Pırasa': 7,
  'Zeytinyağlı Taze Fasulye': 7,
  'Zeytinyağlı Bamya': 6,
  'Çoban Salatası': 8,
  'Gavurdağı Salatası': 7,
  'Kısır': 8,
  'Piyaz': 7,
  'Humus': 7,
  'Cacık': 8,
  
  // Pilav/Makarna
  'Pilav': 9,
  'Bulgur Pilavı': 8,
  'Nohutlu Pilav': 8,
  'Tavuklu Pilav': 8,
  'Spagetti Bolonez': 7,
  'Fırın Makarna': 7,
  'Kremalı Makarna': 7,
  
  // Izgara
  'Tavuk Şiş': 8,
  'Köfte Izgara': 8,
  'Pirzola': 7,
  'Antrikot': 7,
  'Tavuk Pirzola': 7,
  'Sucuk Izgara': 7,
  'Pastırma': 7,
  'Sucuk': 7,
};

// Her yemeğe popülerlik puanı ata
allFoods.forEach(food => {
  food.score = popularityScores[food.name] || 5; // Bilinmeyenler için varsayılan 5
  
  // Kategori bonusu
  const categoryBonus = {
    'Çorbalar': 1,
    'Ana Yemekler': 2,
    'Etli Yemekler': 2,
    'Döner & Kebap': 2,
    'Izgara & Mangal': 1,
    'Kahvaltı': 2,
    'Tatlılar': 2,
    'Sütlü Tatlılar': 1,
    'Şerbetli Tatlılar': 1
  };
  
  food.score += categoryBonus[food.category] || 0;
});

// Puanlara göre sırala ve top 200'ü seç
allFoods.sort((a, b) => b.score - a.score);
const top200 = allFoods.slice(0, 200);

console.log(`\nTop 200 seçildi!`);
console.log(`Ortalama popülerlik: ${(top200.reduce((sum, f) => sum + f.score, 0) / 200).toFixed(1)}`);

// Kategori dağılımı
const categoryDist = {};
top200.forEach(f => {
  categoryDist[f.category] = (categoryDist[f.category] || 0) + 1;
});

console.log('\nKategori Dağılımı:');
Object.entries(categoryDist)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, count]) => {
    console.log(`  ${cat}: ${count}`);
  });

// Yeni foods.ts içeriği oluştur
const newFoodsContent = `import { Food } from "../types";
import { appState, saveState } from "./state";

export const COMMON_FOODS: Food[] = [
${top200.map(f => f.fullBlock).join('\n')}
];

// ... rest of the file
`;

// Rapor kaydet
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    totalOriginal: allFoods.length,
    selected: top200.length,
    removed: allFoods.length - 200,
    averageScore: (top200.reduce((sum, f) => sum + f.score, 0) / 200).toFixed(1)
  },
  categoryDistribution: categoryDist,
  top20: top200.slice(0, 20).map(f => ({ name: f.name, score: f.score })),
  removed: allFoods.slice(200).map(f => f.name)
};

fs.writeFileSync('top200_selection_report.json', JSON.stringify(report, null, 2));
console.log('\n📝 Rapor kaydedildi: top200_selection_report.json');
console.log('\n⚠️ foods.ts güncellenmedi - raporu kontrol edin!');
console.log('Onaylandığında foods.ts otomatik güncellenecek.');
