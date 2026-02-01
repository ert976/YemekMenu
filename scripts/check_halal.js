const fs = require('fs');

// Read foods.ts
const content = fs.readFileSync('database/foods.ts', 'utf8');

// Find all foods with is_halal: true that might be problematic
const foodBlocks = content.match(/\{\s*name:[\s\S]*?id:\s*\d+,?\s*\}/g) || [];

const issues = [];
const shellfishNames = ['midye', 'kalamar', 'ahtapot', 'karides', 'istakoz', 'yengeç', 'tarak', 'salyangoz'];
const alcoholicDrinks = ['bira', 'şarap', 'rakı', 'votka', 'viski', 'cin'];

foodBlocks.forEach(block => {
  const nameMatch = block.match(/name:\s*"([^"]+)"/);
  const halalMatch = block.match(/is_halal:\s*(true|false)/);
  
  if (nameMatch && halalMatch) {
    const name = nameMatch[1];
    const isHalal = halalMatch[1] === 'true';
    const lowerName = name.toLowerCase();
    
    // Check for shellfish marked as halal
    if (isHalal && shellfishNames.some(sf => lowerName.includes(sf))) {
      issues.push({
        name: name,
        issue: 'KABUKLU DENİZ ÜRÜNÜ (Shellfish)',
        current: 'is_halal: true',
        should: 'is_halal: false'
      });
    }
    
    // Check for alcoholic drinks marked as halal
    if (isHalal && alcoholicDrinks.some(ad => lowerName.includes(ad))) {
      issues.push({
        name: name,
        issue: 'ALKOLLÜ İÇKİ',
        current: 'is_halal: true',
        should: 'is_halal: false'
      });
    }
  }
});

console.log('=== HELAL/DIŞI KONTROL RAPORU ===\n');
if (issues.length === 0) {
  console.log('✅ Sorunlu ürün bulunamadı!');
} else {
  console.log(`⚠️  ${issues.length} sorunlu ürün bulundu:\n`);
  issues.forEach((item, i) => {
    console.log(`${i+1}. ${item.name}`);
    console.log(`   Sorun: ${item.issue}`);
    console.log(`   Mevcut: ${item.current}`);
    console.log(`   Olması Gereken: ${item.should}\n`);
  });
}

// Also check for duplicate IDs
const idMatches = content.match(/id:\s*(\d+)/g) || [];
const ids = idMatches.map(m => parseInt(m.replace(/id:\s*/, '')));
const duplicates = ids.filter((item, index) => ids.indexOf(item) !== index);
if (duplicates.length > 0) {
  console.log('\n⚠️  TEKRARLANAN IDLER:');
  console.log([...new Set(duplicates)].join(', '));
}
