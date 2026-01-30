const fs = require('fs');
const path = require('path');

// HİBRİD STRATEJİ: 180 Mevcut + 20 Yeni = 200 Yemek

// 1. Mevcut foods.ts'den 180 yemek seç (popüler ve eşleşenler)
const mevcutFoodsPath = path.join(__dirname, '..', 'database', 'foods.ts');
const mevcutContent = fs.readFileSync(mevcutFoodsPath, 'utf8');

// Tüm yemek bloklarını çıkar
const foodBlocks = mevcutContent.match(/\{\s*"name":[^}]+\},?/g) || [];
const allFoods = foodBlocks.map(block => {
  const nameMatch = block.match(/"name":\s*"([^"]+)"/);
  const categoryMatch = block.match(/"category":\s*"([^"]+)"/);
  return {
    name: nameMatch ? nameMatch[1] : '',
    category: categoryMatch ? categoryMatch[1] : '',
    fullBlock: block,
    score: 0
  };
}).filter(f => f.name);

// Popülerlik puanlama (Yemeksepeti 2025)
const popularityScores = {
  'Tavuk Döner': 10, 'Et Döner': 10, 'Adana Kebap': 10, 'Urfa Kebap': 10,
  'Köfte': 10, 'Lahmacun': 10, 'Pide': 10, 'Mantı': 10,
  'Mercimek Çorbası': 10, 'Baklava': 10, 'Künefe': 10, 'Simit': 10,
  'Menemen': 10, 'Ayran': 10, 'Çay': 10, 'Kumpir': 10,
  'Çiğ Köfte': 10, 'Tost': 10, 'Ezogelin Çorbası': 9, 'Tarhana Çorbası': 9,
  'Yayla Çorbası': 9, 'Domates Çorbası': 9, 'İşkembe Çorbası': 9,
  'Kelle Paça': 9, 'İskender Kebap': 9, 'Beyti': 9, 'Ali Nazik': 9,
  'Kuzu Tandır': 9, 'Izgara Köfte': 9, 'Tavuk Şiş': 9,
  'Kuru Fasulye': 9, 'Nohut': 9, 'Barbunya Pilaki': 9,
  'Karnıyarık': 9, 'İmam Bayıldı': 9, 'Sucuklu Yumurta': 9,
  'Pastırmalı Yumurta': 9, 'Poğaça': 9, 'Açma': 9,
  'Gözleme': 9, 'Börek': 9, 'Sütlaç': 9, 'Kadayıf': 9,
  'Türk Kahvesi': 9, 'Şalgam': 9, 'Kısır': 9, 'Hamburger': 9
};

// Her yemeğe puan ata
allFoods.forEach(food => {
  food.score = popularityScores[food.name] || 5;
  
  // Kategori bonusu
  const categoryBonus = {
    'Çorbalar': 1, 'Ana Yemekler': 2, 'Etli Yemekler': 2,
    'Döner & Kebap': 2, 'Izgara & Mangal': 1, 'Kahvaltı': 2,
    'Tatlılar': 2, 'Sütlü Tatlılar': 1, 'Şerbetli Tatlılar': 1
  };
  food.score += categoryBonus[food.category] || 0;
});

// Puana göre sırala ve ilk 180'i seç
allFoods.sort((a, b) => b.score - a.score);
const selected180 = allFoods.slice(0, 180);

console.log('✅ 180 MEVCUT YEMEK SEÇİLDİ');
console.log(`Ortalama popülerlik: ${(selected180.reduce((sum, f) => sum + f.score, 0) / 180).toFixed(1)}\n`);

// 2. EKSİK 20 POPÜLER YEMEK (Yemeksepeti listesinde olup mevcut olmayanlar)
const eksik20 = [
  { name: 'Pizza', category: 'Fast Food', score: 10, isNew: true },
  { name: 'Burger', category: 'Fast Food', score: 10, isNew: true },
  { name: 'Kuzu Tandır', category: 'Kebap', score: 9, isNew: true },
  { name: 'Kadayıf', category: 'Tatlı', score: 9, isNew: true },
  { name: 'Kürdan Kebabı', category: 'Kebap', score: 8, isNew: true },
  { name: 'Döner Kebap', category: 'Döner', score: 10, isNew: true },
  { name: 'Tavuk But', category: 'Izgara', score: 7, isNew: true },
  { name: 'Kuzu Şiş', category: 'Izgara', score: 7, isNew: true },
  { name: 'Ciğer Şiş', category: 'Izgara', score: 7, isNew: true },
  { name: 'Hünkar Beğendi', category: 'Etli', score: 8, isNew: true },
  { name: 'Kuzu Kapama', category: 'Etli', score: 7, isNew: true },
  { name: 'Kuzu Yahni', category: 'Etli', score: 7, isNew: true },
  { name: 'Etli Barbunya', category: 'Etli', score: 7, isNew: true },
  { name: 'Tavuk Yahni', category: 'Etli', score: 7, isNew: true },
  { name: 'Fırında Tavuk', category: 'Etli', score: 8, isNew: true },
  { name: 'Fırında Patates', category: 'Etli', score: 7, isNew: true },
  { name: 'Fırında Sebze', category: 'Etli', score: 7, isNew: true },
  { name: 'Güveç', category: 'Etli', score: 7, isNew: true },
  { name: 'Kapama', category: 'Etli', score: 7, isNew: true },
  { name: 'Pirinç Pilavı', category: 'Pilav', score: 8, isNew: true }
];

// Yeni yemekler için template oluştur
const newFoodTemplate = (food, id) => `  {
    "name": "${food.name}",
    "image_url": "",
    "category": "${food.category}",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": ${id}
  }`;

console.log('🆕 20 YENİ YEMEK EKLENDİ:');
eksik20.forEach((f, i) => console.log(`  ${i+1}. ${f.name} (${f.category})`));

// 3. TOP 200 LİSTESİNİ BİRLEŞTİR
const final200 = [...selected180, ...eksik20];

console.log('\n═══════════════════════════════════════');
console.log('📊 HİBRİD 200 YEMEK ÖZETİ');
console.log('═══════════════════════════════════════');
console.log(`Mevcut: 180 yemek`);
console.log(`Yeni: 20 yemek`);
console.log(`Toplam: ${final200.length} yemek`);

// Kategori dağılımı
const categoryDist = {};
final200.forEach(f => {
  categoryDist[f.category] = (categoryDist[f.category] || 0) + 1;
});

console.log('\n📈 KATEGORİ DAĞILIMI:');
Object.entries(categoryDist)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, count]) => {
    const percent = ((count/200)*100).toFixed(0);
    console.log(`  ${cat.padEnd(20)} ${String(count).padStart(3)} (%${percent})`);
  });

// Rapor kaydet
const report = {
  timestamp: new Date().toISOString(),
  strategy: 'Hibrid: 180 Mevcut + 20 Yeni',
  summary: {
    mevcut: 180,
    yeni: 20,
    toplam: 200
  },
  mevcut180: selected180.map(f => ({ name: f.name, category: f.category, score: f.score })),
  yeni20: eksik20,
  categoryDistribution: categoryDist
};

fs.writeFileSync('hybrid_200_foods.json', JSON.stringify(report, null, 2));
console.log('\n📝 Rapor: hybrid_200_foods.json');
console.log('\n⚠️ foods.ts güncellenmedi - onay bekleniyor!');
console.log('Onaylandığında 180 mevcut + 20 yeni ile foods.ts güncellenecek.');
