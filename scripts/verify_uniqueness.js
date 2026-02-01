const fs = require('fs');

// Read foods.ts
const content = fs.readFileSync('database/foods.ts', 'utf8');

// Extract all image URLs
const matches = content.match(/image_url:\s*"([^"]+)"/g);
if (!matches) {
  console.log('No image URLs found');
  process.exit(1);
}

const urls = matches.map(m => {
  const url = m.replace(/image_url:\s*"/g, '').replace(/"$/g, '');
  return url;
}).filter(url => url.includes('http'));

const total = urls.length;
const unique = [...new Set(urls)].length;
const duplicates = total - unique;
const percentage = ((unique / total) * 100).toFixed(2);

console.log('=== IMAGE UNIQUENESS REPORT ===');
console.log('Total foods:', total);
console.log('Unique images:', unique);
console.log('Duplicates:', duplicates);
console.log('Uniqueness:', percentage + '%');
console.log('');
console.log('Target: 95%+');

if (percentage >= 95) {
  console.log('✅ TARGET ACHIEVED!');
} else {
  console.log('⚠️  Below target - more fixes needed');
}

// Find duplicates
const counts = {};
urls.forEach(url => {
  counts[url] = (counts[url] || 0) + 1;
});

const dups = Object.entries(counts)
  .filter(([url, count]) => count > 1)
  .sort((a, b) => b[1] - a[1]);

if (dups.length > 0) {
  console.log('\nDuplicate URLs (top 10):');
  dups.slice(0, 10).forEach(([url, count]) => {
    console.log('  -', url.split('/').pop(), '(' + count + ' foods)');
  });
} else {
  console.log('\n✅ No duplicates found!');
}

// Summary by category
console.log('\n=== CATEGORY SUMMARY ===');
const categories = {};
const foodMatches = content.match(/name:\s*"([^"]+)"[\s\S]*?image_url:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"/g);
if (foodMatches) {
  foodMatches.forEach(match => {
    const catMatch = match.match(/category:\s*"([^"]+)"/);
    if (catMatch) {
      const cat = catMatch[1];
      categories[cat] = (categories[cat] || 0) + 1;
    }
  });
  
  Object.entries(categories)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, count]) => {
      console.log('  ' + cat + ':', count, 'foods');
    });
}
