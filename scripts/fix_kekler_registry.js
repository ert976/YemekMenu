const fs = require('fs');

// Image registry dosyasını oku
let imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

// Kekler kategorisindeki yiyecekler ve onlara özel görseller
const kekFixes = [
    {
        food: "Fıstıklı Kek",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ffistikli-kek-tarifi-8b4c2.jpg",
        searchTerm: "antep fıstıklı kek"
    },
    {
        food: "Portakallı Kek",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F11%2Fportakalli-kek-tarifi.jpg",
        searchTerm: "moist portakallı kek"
    },
    {
        food: "Elmalı Kek",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Felmalı-kek.jpg",
        searchTerm: "tarçınlı elmalı kek"
    },
    {
        food: "Muzlu Kek",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fmuzlu-kek-tarifi-6a7f3.jpg",
        searchTerm: "pratik muzlu kek"
    },
    {
        food: "Çikolatalı Kek",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkolay-cikolatali-kek-99d5e.jpg",
        searchTerm: "moist çikolatalı kek"
    },
    {
        food: "Yulaflı Kek",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F10%2Fyulaflı-kek-tarifi.jpg",
        searchTerm: "sağlıklı yulaflı kek"
    }
];

console.log("🧁 Kekler Görsel Optimizasyonu Başlatılıyor...\n");

// Kekleri güncelle
let updatedCount = 0;
kekFixes.forEach(fix => {
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

console.log(`🎉 Kekler optimizasyonu tamamlandı!`);
console.log(`📊 Toplam güncellenen yiyecek: ${updatedCount}/6`);

// Rapor oluştur
const report = {
    timestamp: new Date().toISOString(),
    category: "Kekler",
    totalFoods: kekFixes.length,
    updatedFoods: updatedCount,
    fixes: kekFixes.map(fix => ({
        food: fix.food,
        oldUrl: "Güncellendi",
        newUrl: fix.newUrl,
        searchTerm: fix.searchTerm,
        status: imageRegistry.hasOwnProperty(fix.food) ? "✅ GÜNCELLENDİ" : "❌ HATA"
    }))
};

fs.writeFileSync('./kekler_registry_fix_report.json', JSON.stringify(report, null, 2));
console.log(`📝 Rapor kaydedildi: kekler_registry_fix_report.json`);