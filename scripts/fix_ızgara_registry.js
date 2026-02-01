const fs = require('fs');

// Image registry dosyasını oku
let imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

// Izgara & Mangal kategorisindeki yiyecekler ve onlara özel görseller
const ızgaraFixes = [
    {
        food: "Tavuk Şiş",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ftavuk-sis-kebap-tarifi-7a8b2.jpg",
        searchTerm: "tavuk şiş kebap"
    },
    {
        food: "Antrikot",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fantrikot-tarifi-93d4f.jpg",
        searchTerm: "ızgara antrikot"
    },
    {
        food: "Pirzola",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F10%2Fkuzu-pirzola-tarifi.jpg",
        searchTerm: "kuzu pirzola"
    },
    {
        food: "Tavuk Kanat",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fbarbeku-tavuk-kanat.jpg",
        searchTerm: "barbekü tavuk kanat"
    }
];

console.log("🔥 Izgara & Mangal Görsel Optimizasyonu Başlatılıyor...\n");

// Izgara yiyeceklerini güncelle
let updatedCount = 0;
ızgaraFixes.forEach(fix => {
    if (imageRegistry.hasOwnProperty(fix.food)) {
        const oldUrl = imageRegistry[fix.food];
        imageRegistry[fix.food] = fix.newUrl;
        console.log(`✅ ${fix.food}:`);
        console.log(`   Eski: ${oldUrl.substring(0, 80)}...`);
        console.log(`   Yeni: ${fix.newUrl.substring(0, 80)}...`);
        console.log(`   Arama: ${fix.searchTerm}\n`);
        updatedCount++;
    } else {
        console.log(`❌ ${fix.food} image_registry'de bulunamadı!`);
    }
});

// Dosyayı kaydet
fs.writeFileSync('./database/image_registry.json', JSON.stringify(imageRegistry, null, 2));

console.log(`🎉 Izgara & Mangal optimizasyonu tamamlandı!`);
console.log(`📊 Toplam güncellenen yiyecek: ${updatedCount}/4`);

// Rapor oluştur
const report = {
    timestamp: new Date().toISOString(),
    category: "Izgara & Mangal",
    totalFoods: ızgaraFixes.length,
    updatedFoods: updatedCount,
    fixes: ızgaraFixes.map(fix => ({
        food: fix.food,
        oldUrl: "Güncellendi",
        newUrl: fix.newUrl,
        searchTerm: fix.searchTerm,
        status: imageRegistry.hasOwnProperty(fix.food) ? "✅ GÜNCELLENDİ" : "❌ HATA"
    }))
};

fs.writeFileSync('./ızgara_registry_fix_report.json', JSON.stringify(report, null, 2));
console.log(`📝 Rapor kaydedildi: ızgara_registry_fix_report.json`);