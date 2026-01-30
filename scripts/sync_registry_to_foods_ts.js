const fs = require('fs');
const path = require('path');

// Registry dosyasını oku
const registryPath = path.join(__dirname, '..', 'image_registry.json');
const foodsPath = path.join(__dirname, '..', 'database', 'foods.ts');

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
let foodsContent = fs.readFileSync(foodsPath, 'utf8');

let updateCount = 0;
let skippedCount = 0;
let notFoundCount = 0;

console.log('🔄 Syncing image_registry.json to foods.ts...\n');

// Registry'deki her yemek için foods.ts'i güncelle
for (const [foodName, imageData] of Object.entries(registry.images)) {
  // Yemek adını escape et
  const escapedName = foodName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // foods.ts'de bu yemeği ara ("name": "Food Name" formatında, boşluklu)
  const namePattern = new RegExp(`"name": "${escapedName}"`, 'i');
  
  if (namePattern.test(foodsContent)) {
    // Yemeğin başlangıç pozisyonunu bul
    const foodStartIndex = foodsContent.search(namePattern);
    
    if (foodStartIndex !== -1) {
      // Yemeğin bloğunu bul (bir sonraki }, ile biten blok)
      let blockEnd = foodsContent.indexOf('\n  },\n', foodStartIndex);
      if (blockEnd === -1) blockEnd = foodsContent.indexOf('\n},\n', foodStartIndex);
      if (blockEnd === -1) blockEnd = foodsContent.indexOf('];', foodStartIndex);
      
      const foodBlock = foodsContent.substring(foodStartIndex, blockEnd);
      
      // Mevcut image_url'i bul ("image_url": "..." formatında)
      const imageUrlMatch = foodBlock.match(/"image_url":\s*"([^"]*)"/);
      
      if (imageUrlMatch) {
        const currentUrl = imageUrlMatch[1];
        const newUrl = imageData.url;
        
        // Eğer URL değişecekse güncelle
        if (currentUrl !== newUrl && !currentUrl.includes('weserv.nl')) {
          const newFoodBlock = foodBlock.replace(
            /"image_url":\s*"[^"]*"/,
            `"image_url": "${newUrl}"`
          );
          
          foodsContent = foodsContent.substring(0, foodStartIndex) + 
                        newFoodBlock + 
                        foodsContent.substring(blockEnd);
          
          updateCount++;
          console.log(`✅ Updated: ${foodName}`);
          console.log(`   Old: ${currentUrl.substring(0, 50)}...`);
          console.log(`   New: ${newUrl.substring(0, 50)}...\n`);
        } else if (currentUrl === newUrl) {
          skippedCount++;
          console.log(`⚠️ Same URL: ${foodName}`);
        } else {
          skippedCount++;
          console.log(`⏭️ Skipped (weserv): ${foodName}`);
        }
      }
    }
  } else {
    notFoundCount++;
    console.log(`❌ Not found in foods.ts: ${foodName}`);
  }
}

// Güncellenmiş içeriği kaydet
fs.writeFileSync(foodsPath, foodsContent, 'utf8');

console.log(`\n🎉 Sync Complete!`);
console.log(`✅ Updated: ${updateCount} foods`);
console.log(`⚠️ Skipped: ${skippedCount} foods`);
console.log(`❌ Not found: ${notFoundCount} foods`);
console.log(`📊 Registry Total: ${Object.keys(registry.images).length} images`);
