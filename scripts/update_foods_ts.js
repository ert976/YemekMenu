const fs = require('fs');

// Mevcut foods.ts dosyasını oku
const foodsContent = fs.readFileSync('./database/foods.ts', 'utf8');

// image_registry'den güncel görselleri al
const imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

console.log("🔄 foods.ts dosyası image_registry ile güncelleniyor...\n");

// COMMON_FOODS array'ini extract et
const commonFoodsMatch = foodsContent.match(/export const COMMON_FOODS: Food\[\] = (\[[\s\S]*?\]);/);
if (!commonFoodsMatch) {
    console.error("❌ COMMON_FOODS array'i bulunamadı!");
    process.exit(1);
}

let commonFoodsArray;
try {
    commonFoodsArray = JSON.parse(commonFoodsMatch[1]);
} catch (e) {
    // JavaScript array'ini JSON'e çevirmek için düzenleme
    const arrayString = commonFoodsMatch[1]
        .replace(/(\w+):/g, '"$1":') // Property tırnaklama
        .replace(/'/g, '"'); // Single tırnakları double tırnağa çevir
    commonFoodsArray = JSON.parse(arrayString);
}

let updatedCount = 0;
let notFoundCount = 0;

// Her food item'ın görselini güncelle
commonFoodsArray.forEach(food => {
    if (imageRegistry.hasOwnProperty(food.name)) {
        const newUrl = imageRegistry[food.name];
        if (food.image_url !== newUrl) {
            console.log(`✅ ${food.name}:`);
            console.log(`   Eski: ${food.image_url.substring(0, 60)}...`);
            console.log(`   Yeni: ${newUrl.substring(0, 60)}...`);
            food.image_url = newUrl;
            updatedCount++;
        }
    } else {
        console.log(`❌ ${food.name}: image_registry'de bulunamadı`);
        notFoundCount++;
    }
});

// Güncellenmiş array'i string'e çevir
const updatedArrayString = JSON.stringify(commonFoodsArray, null, 2)
    .replace(/"/g, "'") // Double tırnakları single tırnağa çevir
    .replace(/'(\w+)':/g, '$1:'); // Property tırnaklarını kaldır

// Dosyayı güncelle
const updatedContent = foodsContent.replace(
    /export const COMMON_FOODS: Food\[\] = \[[\s\S]*?\];/,
    `export const COMMON_FOODS: Food[] = ${updatedArrayString};`
);

fs.writeFileSync('./database/foods.ts', updatedContent);

console.log(`\n🎉 foods.ts güncellemesi tamamlandı!`);
console.log(`📊 İstatistikler:`);
console.log(`   ✅ Güncellenen: ${updatedCount}`);
console.log(`   ❌ Bulunamayan: ${notFoundCount}`);
console.log(`   📝 Toplam: ${commonFoodsArray.length}`);

// Güncellenmiş örnekleri göster
console.log(`\n🍽️  Güncellenmiş Profesyonel Görseller:`);
const updatedExamples = commonFoodsArray.filter(f => 
    f.image_url.includes('lezzet.com.tr') || 
    f.image_url.includes('kisikatesakademi.com.tr') || 
    f.image_url.includes('droetker.com.tr')
).slice(0, 8);

updatedExamples.forEach(food => {
    const source = food.image_url.includes('lezzet.com.tr') ? '🌟 Lezzet' : 
                   food.image_url.includes('kisikatesakademi.com.tr') ? '👨‍🍳 Kişikate' :
                   food.image_url.includes('droetker.com.tr') ? '🍳 Dr. Oetker' : '📷 Diğer';
    console.log(`   ${source} ${food.name}`);
});

// Rapor oluştur
const report = {
    timestamp: new Date().toISOString(),
    statistics: {
        totalFoods: commonFoodsArray.length,
        updatedFoods: updatedCount,
        notFoundFoods: notFoundCount,
        professionalSources: commonFoodsArray.filter(f => 
            f.image_url.includes('lezzet.com.tr') || 
            f.image_url.includes('kisikatesakademi.com.tr') || 
            f.image_url.includes('droetker.com.tr')
        ).length
    },
    updatedExamples: updatedExamples.map(f => ({
        name: f.name,
        image_url: f.image_url,
        source: f.image_url.includes('lezzet.com.tr') ? 'Lezzet' : 
                f.image_url.includes('kisikatesakademi.com.tr') ? 'Kişikate Akademi' :
                f.image_url.includes('droetker.com.tr') ? 'Dr. Oetker' : 'Diğer'
    }))
};

fs.writeFileSync('./foods_ts_update_report.json', JSON.stringify(report, null, 2));
console.log(`\n📝 Detaylı rapor kaydedildi: foods_ts_update_report.json`);