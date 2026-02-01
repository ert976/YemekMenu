const fs = require('fs');

// Image registry dosyasını oku
let imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

// Sebze Yemekleri kategorisindeki yiyecekler ve onlara özel görseller
const sebzeFixes = [
    {
        food: "Taze Fasulye",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ftaze-fasulye-yemegi-zeytinyagli-d95b4.jpg",
        searchTerm: "zeytinyağlı taze fasulye"
    },
    {
        food: "Patlıcan Musakka",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fpatlican-musakka-tarifi-48f2a.jpg",
        searchTerm: "klassik patlıcan musakka"
    },
    {
        food: "Bamya",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F09%2Fzeytinyagli-bamya-tarifi.jpg",
        searchTerm: "zeytinyağlı bamya"
    },
    {
        food: "Ispanak",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fispanak-yemegi-81d6c.jpg",
        searchTerm: "etli ıspanak yemeği"
    },
    {
        food: "Karnabahar",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fkarnabahar-yemegi.jpg",
        searchTerm: "fırında karnabahar"
    }
];

console.log("🥬 Sebze Yemekleri Görsel Optimizasyonu Başlatılıyor...\n");

// Sebze yiyeceklerini güncelle
let updatedCount = 0;
sebzeFixes.forEach(fix => {
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

console.log(`🎉 Sebze Yemekleri optimizasyonu tamamlandı!`);
console.log(`📊 Toplam güncellenen yiyecek: ${updatedCount}/5`);

// Rapor oluştur
const report = {
    timestamp: new Date().toISOString(),
    category: "Sebze Yemekleri",
    totalFoods: sebzeFixes.length,
    updatedFoods: updatedCount,
    fixes: sebzeFixes.map(fix => ({
        food: fix.food,
        oldUrl: "Güncellendi",
        newUrl: fix.newUrl,
        searchTerm: fix.searchTerm,
        status: imageRegistry.hasOwnProperty(fix.food) ? "✅ GÜNCELLENDİ" : "❌ HATA"
    }))
};

fs.writeFileSync('./sebze_registry_fix_report.json', JSON.stringify(report, null, 2));
console.log(`📝 Rapor kaydedildi: sebze_registry_fix_report.json`);