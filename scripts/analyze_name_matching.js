const fs = require('fs');
const path = require('path');

// Registry ve foods.ts arasındaki isim eşleştirmesi
const registryPath = path.join(__dirname, '..', 'image_registry.json');
const foodsPath = path.join(__dirname, '..', 'database', 'foods.ts');

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const foodsContent = fs.readFileSync(foodsPath, 'utf8');

// foods.ts'deki tüm yemek isimlerini çıkar
const foodNames = [];
const nameMatches = foodsContent.match(/"name":\s*"([^"]+)"/g);
if (nameMatches) {
  nameMatches.forEach(match => {
    const name = match.replace(/"name":\s*"/, '').replace(/"$/, '');
    foodNames.push(name);
  });
}

// Eşleşme analizi
const registryNames = Object.keys(registry.images);
const matched = [];
const unmatched = [];
const registryUnused = [];

// foods.ts'deki her yemek için registry'de ara
foodNames.forEach(foodName => {
  const directMatch = registryNames.find(rName => rName === foodName);
  const normalizedMatch = registryNames.find(rName => 
    rName.toLowerCase().replace(/\s+/g, '') === foodName.toLowerCase().replace(/\s+/g, '')
  );
  
  if (directMatch || normalizedMatch) {
    matched.push({
      foodsName: foodName,
      registryName: directMatch || normalizedMatch,
      type: directMatch ? 'exact' : 'normalized'
    });
  } else {
    unmatched.push(foodName);
  }
});

// Kullanılmayan registry görselleri
registryNames.forEach(rName => {
  const isUsed = matched.some(m => m.registryName === rName);
  if (!isUsed) {
    registryUnused.push(rName);
  }
});

console.log('=== İSİM EŞLEŞTİRME RAPORU ===\n');
console.log(`📊 Toplam foods.ts yemek: ${foodNames.length}`);
console.log(`📊 Toplam registry görsel: ${registryNames.length}`);
console.log(`✅ Eşleşen: ${matched.length}`);
console.log(`❌ Eşleşmeyen: ${unmatched.length}`);
console.log(`⚠️ Kullanılmayan registry: ${registryUnused.length}\n`);

console.log('❌ EŞLEŞMEYEN YEMEKLER (İlk 20):');
unmatched.slice(0, 20).forEach((name, i) => {
  console.log(`  ${i+1}. ${name}`);
});

console.log('\n⚠️ KULLANILMAYAN REGISTRY GÖRSELLERİ (İlk 20):');
registryUnused.slice(0, 20).forEach((name, i) => {
  console.log(`  ${i+1}. ${name}`);
});

// Eşleşme önerileri
console.log('\n💡 OLASI EŞLEŞMELER:');
unmatched.slice(0, 10).forEach(foodName => {
  const possibleMatches = registryUnused.filter(rName => {
    const foodWords = foodName.toLowerCase().split(/\s+/);
    const regWords = rName.toLowerCase().split(/\s+/);
    return foodWords.some(fw => regWords.some(rw => rw.includes(fw) || fw.includes(rw)));
  });
  
  if (possibleMatches.length > 0) {
    console.log(`  ${foodName} → ${possibleMatches.slice(0, 3).join(', ')}`);
  }
});

// Raporu kaydet
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    totalFoods: foodNames.length,
    totalRegistry: registryNames.length,
    matched: matched.length,
    unmatched: unmatched.length,
    unusedRegistry: registryUnused.length,
    matchRate: `${((matched.length / foodNames.length) * 100).toFixed(1)}%`
  },
  matched,
  unmatched: unmatched.slice(0, 50),
  unusedRegistry: registryUnused.slice(0, 50)
};

fs.writeFileSync('name_matching_report.json', JSON.stringify(report, null, 2));
console.log('\n📝 Rapor kaydedildi: name_matching_report.json');
