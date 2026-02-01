const fs = require('fs');
const path = require('path');

// Read the foods.ts file
const foodsPath = path.join(__dirname, '..', 'database', 'foods.ts');
let content = fs.readFileSync(foodsPath, 'utf8');

// Function to normalize food name for Picsum seed
function normalizeForSeed(name) {
  return name
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/İ/g, 'I')
    .replace(/Ğ/g, 'G')
    .replace(/Ü/g, 'U')
    .replace(/Ş/g, 'S')
    .replace(/Ö/g, 'O')
    .replace(/Ç/g, 'C')
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}

// Track changes
const changes = [];
let updatedCount = 0;

// Process line by line for better control
const lines = content.split('\n');
let currentFoodName = null;
let i = 0;

while (i < lines.length) {
  const line = lines[i];
  
  // Check if this line contains a name field
  const nameMatch = line.match(/name:\s*"([^"]+)"/);
  if (nameMatch) {
    currentFoodName = nameMatch[1];
  }
  
  // Check if this line contains a yemek.com URL
  const urlMatch = line.match(/image_url:\s*"(https:\/\/cdn\.yemek\.com\/[^"]+)"/);
  if (urlMatch && currentFoodName) {
    const oldUrl = urlMatch[1];
    const seed = normalizeForSeed(currentFoodName);
    const newUrl = `https://picsum.photos/seed/${seed}/400/300`;
    
    // Replace the URL in this line
    lines[i] = line.replace(oldUrl, newUrl);
    
    changes.push({
      name: currentFoodName,
      oldUrl: oldUrl.substring(0, 60) + '...',
      newUrl
    });
    updatedCount++;
    
    // Reset currentFoodName after processing
    currentFoodName = null;
  }
  
  // Reset currentFoodName when we hit the end of an object (id line followed by closing brace)
  if (line.includes('id:') && i + 1 < lines.length && lines[i + 1].includes('},')) {
    currentFoodName = null;
  }
  
  i++;
}

// Write the updated content back
const updatedContent = lines.join('\n');
fs.writeFileSync(foodsPath, updatedContent, 'utf8');

// Print summary
console.log('\n🖼️  Image URL Update Summary\n');
console.log('=' .repeat(70));
changes.slice(0, 20).forEach((change, idx) => {
  console.log(`${idx + 1}. ${change.name}`);
  console.log(`   Old: ${change.oldUrl}`);
  console.log(`   New: ${change.newUrl}`);
  console.log('');
});

if (changes.length > 20) {
  console.log(`... and ${changes.length - 20} more\n`);
}

console.log('=' .repeat(70));
console.log(`\n✅ Successfully updated ${updatedCount} image URLs to Picsum.`);
console.log(`📁 File saved: ${foodsPath}`);
console.log('\n🎉 All yemek.com URLs have been converted to Picsum!');
