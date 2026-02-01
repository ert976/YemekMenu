const fs = require('fs');

// Yemek verileri
let foods = JSON.parse(fs.readFileSync('./database/foods.json', 'utf8'));

// Kahvaltı kategorisindeki yiyecekler ve onlara özel görseller
const kahvaltiFixes = [
    {
        food: "Börek",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fsivi-borek-resimli-872f5.jpg",
        searchTerm: "taze börek"
    },
    {
        food: "Simit", 
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fsimit-tarifi-34212.jpg",
        searchTerm: "fresk simit"
    },
    {
        food: "Menemen",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fmenemen-tarifi-70a14.jpg", 
        searchTerm: "geleneksel menemen"
    },
    {
        food: "Sahanda Yumurta",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fsahanda-yumurta.jpg",
        searchTerm: "sahanda yumurta"
    },
    {
        food: "Omlet",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fomlet-tarifi-5b3f1.jpg",
        searchTerm: "kremalı omlet"
    },
    {
        food: "Tost",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fpeynirli-tost-68d4e.jpg",
        searchTerm: "kaşarlı tost"
    },
    {
        food: "Poğaça",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F11%2Fyumusacik-pogaca-tarifi.jpg",
        searchTerm: "taze poğaça"
    },
    {
        food: "Sucuklu Yumurta",
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fsucuklu-yumurta-9f2b7.jpg",
        searchTerm: "sucuklu yumurta"
    },
    {
        food: "Pastırmalı Yumurta", 
        newUrl: "https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fpastirmali-yumurta-7a8c4.jpg",
        searchTerm: "pastırmalı yumurta"
    }
];

console.log("🍳 Kahvaltı Görsel Optimizasyonu Başlatılıyor...\n");

// Kahvaltı yiyeceklerini güncelle
let updatedCount = 0;
kahvaltiFixes.forEach(fix => {
    const foodIndex = foods.findIndex(f => f.name === fix.food);
    
    if (foodIndex !== -1) {
        const oldUrl = foods[foodIndex].image_url;
        foods[foodIndex].image_url = fix.newUrl;
        console.log(`✅ ${fix.food}:`);
        console.log(`   Eski: ${oldUrl.substring(0, 80)}...`);
        console.log(`   Yeni: ${fix.newUrl.substring(0, 80)}...`);
        console.log(`   Arama: ${fix.searchTerm}\n`);
        updatedCount++;
    } else {
        console.log(`❌ ${fix.food} bulunamadı!`);
    }
});

// Dosyayı kaydet
fs.writeFileSync('./database/foods.json', JSON.stringify(foods, null, 2));

console.log(`🎉 Kahvaltı optimizasyonu tamamlandı!`);
console.log(`📊 Toplam güncellenen yiyecek: ${updatedCount}/9`);

// Rapor oluştur
const report = {
    timestamp: new Date().toISOString(),
    category: "Kahvaltı",
    totalFoods: kahvaltiFixes.length,
    updatedFoods: updatedCount,
    fixes: kahvaltiFixes.map(fix => ({
        food: fix.food,
        oldUrl: foods.find(f => f.name === fix.food)?.image_url || "BULUNAMADI",
        newUrl: fix.newUrl,
        searchTerm: fix.searchTerm,
        status: foods.find(f => f.name === fix.food) ? "✅ GÜNCELLENDİ" : "❌ HATA"
    }))
};

fs.writeFileSync('./kahvalti_fix_report.json', JSON.stringify(report, null, 2));
console.log(`📝 Rapor kaydedildi: kahvalti_fix_report.json`);