const fs = require('fs');

// Read foods.ts
const content = fs.readFileSync('database/foods.ts', 'utf8');

// Find all food blocks
const foodBlocks = content.match(/\{\s*name:[\s\S]*?id:\s*\d+,?\s*\}/g) || [];

console.log('=== BOŞ/TANIMSIZ GÖRSEL KONTROLÜ ===\n');

let emptyCount = 0;
let placeholderCount = 0;
const issues = [];

foodBlocks.forEach((block, index) => {
  const nameMatch = block.match(/name:\s*"([^"]+)"/);
  const idMatch = block.match(/id:\s*(\d+)/);
  const imageMatch = block.match(/image_url:\s*"([^"]*)"/);
  
  if (nameMatch && idMatch) {
    const name = nameMatch[1];
    const id = parseInt(idMatch[1]);
    const imageUrl = imageMatch ? imageMatch[1] : null;
    
    // Check for empty/undefined
    if (!imageUrl || imageUrl === '' || imageUrl === 'undefined' || imageUrl === 'null') {
      emptyCount++;
      issues.push({ id, name, issue: 'BOŞ/TANIMSIZ', imageUrl });
    }
    // Check for placeholder
    else if (imageUrl.includes('placeholder') || imageUrl.includes('default')) {
      placeholderCount++;
      issues.push({ id, name, issue: 'PLACEHOLDER', imageUrl });
    }
  }
});

if (emptyCount === 0 && placeholderCount === 0) {
  console.log('✅ Boş veya placeholder görsel bulunamadı!\n');
} else {
  console.log(`⚠️  ${emptyCount} boş görsel, ${placeholderCount} placeholder\n`);
  issues.forEach(item => {
    console.log(`ID ${item.id}: ${item.name}`);
    console.log(`  Sorun: ${item.issue}`);
    console.log(`  URL: ${item.imageUrl || '(boş)'}\n`);
  });
}

// Check for duplicates
console.log('\n=== TEKRARLANAN GÖRSEL ANALİZİ ===\n');

const urlMatches = content.match(/image_url:\s*"([^"]+)"/g) || [];
const urls = urlMatches.map(m => m.replace(/image_url:\s*"/g, '').replace(/"$/g, ''));

const urlCounts = {};
urls.forEach(url => {
  urlCounts[url] = (urlCounts[url] || 0) + 1;
});

const duplicates = Object.entries(urlCounts)
  .filter(([url, count]) => count > 1)
  .sort((a, b) => b[1] - a[1]);

if (duplicates.length === 0) {
  console.log('✅ Tekrarlanan görsel bulunamadı!');
} else {
  console.log(`⚠️  ${duplicates.length} farklı görsel tekrarlanıyor:\n`);
  duplicates.forEach(([url, count]) => {
    const filename = url.split('/').pop();
    console.log(`  ${filename}`);
    console.log(`    Kullanan yemek sayısı: ${count}`);
    console.log(`    URL: ${url.substring(0, 80)}...\n`);
  });
}

// Summary
console.log('\n=== ÖZET ===');
console.log(`Toplam yemek: ${foodBlocks.length}`);
console.log(`Toplam görsel: ${urls.length}`);
console.log(`Eşsiz görsel: ${Object.keys(urlCounts).length}`);
console.log(`Tekrarlanan: ${duplicates.length} farklı URL`);
