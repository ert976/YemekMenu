const fs = require('fs');

// Mevcut foods.ts dosyasını oku
const foodsContent = fs.readFileSync('./database/foods.ts', 'utf8');

// Image registry'den tüm güncel görselleri al
const imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

console.log("🔄 300+ yiyecek için görsel optimizasyonu başlatılıyor...\n");
console.log(`📊 Image registry'de ${Object.keys(imageRegistry).length} görsel var`);

// JavaScript array'ini extract et
const arrayMatch = foodsContent.match(/export const COMMON_FOODS: Food\[\] = (\[[\s\S]*?\]);/s);
if (!arrayMatch) {
    console.error("❌ COMMON_FOODS array'i bulunamadı!");
    process.exit(1);
}

let commonFoodsArray;
try {
    // JavaScript'i JSON'e çevir - daha robust yöntem
    const arrayString = arrayMatch[1]
        .replace(/(\w+):/g, '"$1":') // Property adlarını tırnakla
        .replace(/'/g, '"') // Single tırnakları double tırnağa çevir
        .replace(/,\s*]/g, ']') // Son virgülü temizle
        .replace(/,\s*}/g, '}'); // Object son virgülü temizle
    
    commonFoodsArray = JSON.parse(arrayString);
} catch (e) {
    console.error("❌ Array parse hatası:", e.message);
    // Başka bir yöntem deneyelim
    const lines = foodsContent.split('\n');
    const arrayStart = lines.findIndex(line => line.includes('export const COMMON_FOODS'));
    if (arrayStart === -1) {
        console.error("❌ COMMON_FOODS başlangıcı bulunamadı!");
        process.exit(1);
    }
    
    // Manuel extract
    const arrayLines = [];
    let braceCount = 0;
    let inArray = false;
    
    for (let i = arrayStart; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.includes('COMMON_FOODS')) {
            inArray = true;
            continue;
        }
        
        if (inArray) {
            arrayLines.push(line);
            
            // Brace counting
            for (const char of line) {
                if (char === '{') braceCount++;
                if (char === '}') braceCount--;
            }
            
            // Array bitti mi?
            if (braceCount === 0 && line.includes('];')) {
                break;
            }
        }
    }
    
    const arrayContent = '[' + arrayLines.join('\n') + ']';
    commonFoodsArray = JSON.parse(arrayContent);
}

console.log(`📝 Toplam yiyecek sayısı: ${commonFoodsArray.length}`);

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
        food.image_url.length < 10 ||
        food.image_url.includes('Tavuk_Gogus_Tatlisi') ||
        food.image_url.includes('NCI_Visu') ||
        food.image_url.includes('Grilled_eggplant') ||
        food.image_url.includes('Karnabahar_K%C4%B1zartmas%C4%B1');

    if (imageRegistry.hasOwnProperty(food.name)) {
        const newUrl = imageRegistry[food.name];
        if (food.image_url !== newUrl) {
            console.log(`✅ ${food.name}:`);
            if (isPlaceholder) {
                console.log(`   🚨 PROBLEM/PLACEHOLDER -> PROFESYONEL`);
                placeholderCount++;
            } else {
                console.log(`   🔄 GÜNCELLENDİ`);
            }
            console.log(`   Eski: ${food.image_url.substring(0, 70)}...`);
            console.log(`   Yeni: ${newUrl.substring(0, 70)}...`);
            food.image_url = newUrl;
            updatedCount++;
        }
    } else {
        if (isPlaceholder) {
            console.log(`❌ ${food.name}: PROBLEM GÖRSEL ve image_registry'de YOK!`);
            placeholderCount++;
        } else {
            console.log(`⚠️  ${food.name}: image_registry'de bulunamadı`);
        }
        notFoundCount++;
    }
});

// Güncellenmiş array'i JavaScript formatında oluştur
const updatedArrayString = JSON.stringify(commonFoodsArray, null, 2)
    .replace(/"/g, "'") // Double tırnakları single tırnağa çevir
    .replace(/'(\w+)':/g, '$1:'); // Property tırnaklarını kaldır

// Dosyayı güncelle
const updatedContent = foodsContent.replace(
    /export const COMMON_FOODS: Food\[\] = \[[\s\S]*?\];/s,
    `export const COMMON_FOODS: Food[] = ${updatedArrayString};`
);

fs.writeFileSync('./database/foods.ts', updatedContent);

console.log(`\n🎉 300+ YİYECEK OPTİMİZASYONU TAMAMLANDI!`);
console.log(`📊 DETAYLI İSTATİSTİKLER:`);
console.log(`   ✅ Güncellenen: ${updatedCount}`);
console.log(`   🚨 Düzeltilen Problem: ${placeholderCount}`);
console.log(`   ❌ Registry'de Olmayan: ${notFoundCount}`);
console.log(`   📝 Toplam Yiyecek: ${commonFoodsArray.length}`);
console.log(`   📈 Güncelleme Oranı: %${((updatedCount / commonFoodsArray.length) * 100).toFixed(1)}`);

// Güncellenmiş profesyonel görselleri göster
const professionalExamples = commonFoodsArray.filter(f => 
    f.image_url.includes('lezzet.com.tr') || 
    f.image_url.includes('kisikatesakademi.com.tr') || 
    f.image_url.includes('droetker.com.tr')
);

console.log(`\n🌟 PROFESYONEL GÖRSELLERDEN ÖRNEKLER:`);
professionalExamples.slice(0, 15).forEach(food => {
    const source = food.image_url.includes('lezzet.com.tr') ? '🌟 Lezzet' : 
                   food.image_url.includes('kisikatesakademi.com.tr') ? '👨‍🍳 Kişikate' :
                   food.image_url.includes('droetker.com.tr') ? '🍳 Dr. Oetker' : '📷 Diğer';
    console.log(`   ${source} ${food.name} (${food.category})`);
});

// Kategori bazında istatistik
const categoryStats = {};
commonFoodsArray.forEach(food => {
    categoryStats[food.category] = (categoryStats[food.category] || 0) + 1;
});

console.log(`\n📂 KATEGORİLERE GÖRE DAĞILIM:`);
Object.entries(categoryStats).sort((a, b) => b[1] - a[1]).forEach(([category, count]) => {
    console.log(`   ${category}: ${count} yiyecek`);
});

// Rapor oluştur
const report = {
    timestamp: new Date().toISOString(),
    statistics: {
        totalFoods: commonFoodsArray.length,
        updatedFoods: updatedCount,
        problemFixed: placeholderCount,
        notFoundFoods: notFoundCount,
        professionalSources: professionalExamples.length,
        updatePercentage: ((updatedCount / commonFoodsArray.length) * 100).toFixed(1)
    },
    categoryDistribution: categoryStats,
    professionalExamples: professionalExamples.slice(0, 20).map(f => ({
        name: f.name,
        category: f.category,
        image_url: f.image_url,
        source: f.image_url.includes('lezzet.com.tr') ? 'Lezzet' : 
                f.image_url.includes('kisikatesakademi.com.tr') ? 'Kişikate Akademi' :
                f.image_url.includes('droetker.com.tr') ? 'Dr. Oetker' : 'Diğer'
    }))
};

fs.writeFileSync('./complete_300_foods_optimization_report.json', JSON.stringify(report, null, 2));
console.log(`\n📝 Detaylı rapor kaydedildi: complete_300_foods_optimization_report.json`);