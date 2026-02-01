const fs = require('fs');

// Her iki dosyayı da oku
const foods = JSON.parse(fs.readFileSync('./database/foods.json', 'utf8'));
const imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

console.log("🔄 Görüsel optimizasyon sonuçları foods.json'a aktarılıyor...\n");

let updatedCount = 0;
let skippedCount = 0;

// Her food item'ı güncelle
foods.forEach(food => {
    if (imageRegistry.hasOwnProperty(food.name)) {
        const oldUrl = food.image_url;
        const newUrl = imageRegistry[food.name];
        
        if (oldUrl !== newUrl) {
            food.image_url = newUrl;
            console.log(`✅ ${food.name}:`);
            console.log(`   Eski: ${oldUrl.substring(0, 60)}...`);
            console.log(`   Yeni: ${newUrl.substring(0, 60)}...`);
            console.log();
            updatedCount++;
        } else {
            console.log(`⏭️  ${food.name}: Zaten güncel`);
            skippedCount++;
        }
    } else {
        console.log(`❌ ${food.name}: image_registry'de bulunamadı`);
        skippedCount++;
    }
});

// Güncellenmiş foods.json'ı kaydet
fs.writeFileSync('./database/foods.json', JSON.stringify(foods, null, 2));

console.log(`🎉 Güncelleme tamamlandı!`);
console.log(`📊 İstatistikler:`);
console.log(`   ✅ Güncellenen: ${updatedCount}`);
console.log(`   ⏭️  Atlanan: ${skippedCount}`);
console.log(`   📝 Toplam: ${foods.length}`);

// Örnek güncellenmiş yiyecekleri göster
console.log(`\n🍽️  Güncellenmiş Örnekler:`);
const updatedExamples = foods.filter(f => 
    imageRegistry.hasOwnProperty(f.name) && 
    f.image_url.includes('lezzet.com.tr') || 
    f.image_url.includes('kisikatesakademi.com.tr') || 
    f.image_url.includes('droetker.com.tr')
).slice(0, 5);

updatedExamples.forEach(food => {
    console.log(`   🌟 ${food.name}: ${food.image_url.substring(0, 80)}...`);
});

// Rapor oluştur
const report = {
    timestamp: new Date().toISOString(),
    statistics: {
        totalFoods: foods.length,
        updatedFoods: updatedCount,
        skippedFoods: skippedCount,
        professionalSources: foods.filter(f => 
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

fs.writeFileSync('./sync_foods_report.json', JSON.stringify(report, null, 2));
console.log(`\n📝 Detaylı rapor kaydedildi: sync_foods_report.json`);