const fs = require('fs');

// Mevcut foods.ts dosyasını oku
const foodsContent = fs.readFileSync('./database/foods.ts', 'utf8');

// Tüm image_registry'den güncel görselleri al
const imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

console.log("🔄 TÜM foods.ts dosyası image_registry ile güncelleniyor...\n");

// JavaScript array'ini extract et - daha robust yöntem
const arrayMatch = foodsContent.match(/export const COMMON_FOODS: Food\[\] = (\[[\s\S]*?\]);/ms);
if (!arrayMatch) {
    console.error("❌ COMMON_FOODS array'i bulunamadı!");
    process.exit(1);
}

let commonFoodsArray;
try {
    // JavaScript'i JSON'e çevir
    const arrayString = arrayMatch[1]
        .replace(/(\w+):/g, '"$1":') // Property adlarını tırnakla
        .replace(/'/g, '"') // Single tırnakları double tırnağa
        .replace(/,\s*]/g, ']') // Son virgülü temizle
        .replace(/,\s*}/g, '}'); // Object son virgülü temizle
    
    commonFoodsArray = JSON.parse(arrayString);
} catch (e) {
    console.error("❌ Array parse hatası:", e.message);
    process.exit(1);
}

console.log(`📊 Toplam yiyecek sayısı: ${commonFoodsArray.length}`);

let updatedCount = 0;
let placeholderCount = 0;
let notFoundCount = 0;

// Her food item'ın görselini güncelle
commonFoodsArray.forEach((food, index) => {
    // Placeholder veya hatalı URL kontrol et
    const isPlaceholder = !food.image_url || 
        food.image_url.includes('placeholder') || 
        food.image_url.includes('undefined') ||
        food.image_url.includes('null') ||
        food.image_url === '' ||
        food.image_url.length < 10;

    if (imageRegistry.hasOwnProperty(food.name)) {
        const newUrl = imageRegistry[food.name];
        if (food.image_url !== newUrl) {
            console.log(`✅ ${food.name}:`);
            if (isPlaceholder) {
                console.log(`   🚨 PLACEHOLDER -> PROFESYONEL`);
                placeholderCount++;
            } else {
                console.log(`   🔄 GÜNCELLENDİ`);
            }
            console.log(`   Eski: ${food.image_url.substring(0, 60)}...`);
            console.log(`   Yeni: ${newUrl.substring(0, 60)}...`);
            food.image_url = newUrl;
            updatedCount++;
        }
    } else {
        if (isPlaceholder) {
            console.log(`❌ ${food.name}: PLACEHOLDER ve image_registry'de YOK!`);
            placeholderCount++;
        } else {
            console.log(`⚠️  ${food.name}: image_registry'de bulunamadı`);
        }
        notFoundCount++;
    }
});

// Güncellenmiş array'i tekrar JavaScript formatında oluştur
const updatedArrayString = JSON.stringify(commonFoodsArray, null, 2)
    .replace(/"/g, "'") // Double tırnakları single tırnağa çevir
    .replace(/'(\w+)':/g, '$1:'); // Property tırnaklarını kaldır

// Dosyayı güncelle - sadece array kısmını değiştir
const updatedContent = foodsContent.replace(
    /export const COMMON_FOODS: Food\[\] = \[[\s\S]*?\];/ms,
    `export const COMMON_FOODS: Food[] = ${updatedArrayString};`
);

fs.writeFileSync('./database/foods.ts', updatedContent);

console.log(`\n🎉 TÜM foods.ts güncellemesi tamamlandı!`);
console.log(`📊 DETAYLI İSTATİSTİKLER:`);
console.log(`   ✅ Güncellenen: ${updatedCount}`);
console.log(`   🚨 Düzeltilen Placeholder: ${placeholderCount}`);
console.log(`   ❌ Bulunamayan: ${notFoundCount}`);
console.log(`   📝 Toplam: ${commonFoodsArray.length}`);
console.log(`   📈 Güncelleme Oranı: %${((updatedCount / commonFoodsArray.length) * 100).toFixed(1)}`);

// Güncellenmiş profesyonel görselleri göster
const professionalExamples = commonFoodsArray.filter(f => 
    f.image_url.includes('lezzet.com.tr') || 
    f.image_url.includes('kisikatesakademi.com.tr') || 
    f.image_url.includes('droetker.com.tr')
);

console.log(`\n🌟 PROFESYONEL KAYNAKLARDAN GÜNCELLENEN ÖRNEKLER:`);
professionalExamples.slice(0, 12).forEach(food => {
    const source = food.image_url.includes('lezzet.com.tr') ? '🌟 Lezzet' : 
                   food.image_url.includes('kisikatesakademi.com.tr') ? '👨‍🍳 Kişikate' :
                   food.image_url.includes('droetker.com.tr') ? '🍳 Dr. Oetker' : '📷 Diğer';
    console.log(`   ${source} ${food.name}`);
});

// Hala sorunlu olanları göster
const stillProblematic = commonFoodsArray.filter(f => 
    !f.image_url || 
    f.image_url.includes('placeholder') || 
    f.image_url.includes('undefined') ||
    f.image_url.includes('null') ||
    f.image_url === '' ||
    f.image_url.length < 10
);

if (stillProblematic.length > 0) {
    console.log(`\n⚠️  HALA SORUNLU OLANLAR (${stillProblematic.length}):`);
    stillProblematic.slice(0, 10).forEach(food => {
        console.log(`   ❌ ${food.name}: ${food.image_url ? food.image_url.substring(0, 40) + '...' : 'BOŞ'}`);
    });
}

// Rapor oluştur
const report = {
    timestamp: new Date().toISOString(),
    statistics: {
        totalFoods: commonFoodsArray.length,
        updatedFoods: updatedCount,
        placeholderFixed: placeholderCount,
        notFoundFoods: notFoundCount,
        professionalSources: professionalExamples.length,
        stillProblematic: stillProblematic.length,
        updatePercentage: ((updatedCount / commonFoodsArray.length) * 100).toFixed(1)
    },
    professionalExamples: professionalExamples.slice(0, 15).map(f => ({
        name: f.name,
        image_url: f.image_url,
        source: f.image_url.includes('lezzet.com.tr') ? 'Lezzet' : 
                f.image_url.includes('kisikatesakademi.com.tr') ? 'Kişikate Akademi' :
                f.image_url.includes('droetker.com.tr') ? 'Dr. Oetker' : 'Diğer'
    })),
    stillProblematic: stillProblematic.map(f => ({
        name: f.name,
        image_url: f.image_url,
        issue: !f.image_url ? 'BOŞ' : 
               f.image_url.includes('placeholder') ? 'PLACEHOLDER' :
               f.image_url.includes('undefined') ? 'UNDEFINED' : 'DİĞER'
    }))
};

fs.writeFileSync('./complete_foods_ts_fix_report.json', JSON.stringify(report, null, 2));
console.log(`\n📝 Detaylı rapor kaydedildi: complete_foods_ts_fix_report.json`);