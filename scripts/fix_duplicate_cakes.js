const fs = require('fs');

// Image registry'yi oku ve güncelle
let imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

console.log("🧁 Kek görselleri özelleştiriliyor...\n");

// Kek çeşitleri için özel görseller
const kekFixes = {
    // Cevizli Kek → Farklı cevizli kek
    'Cevizli Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fcevizli-kek-tarifi-8b3f2.jpg',
    
    // Fıstıklı Kek → Zaten profesyonel, kontrol et
    'Fıstıklı Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fantep-fistikli-kek-tarifi.jpg',
    
    // Portakallı Kek → Zaten farklı
    'Portakallı Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fportakalli-kek-9a8f8.jpg',
    
    // Elmalı Kek → Zaten farklı (Dr. Oetker)
    
    // Muzlu Kek → Zaten farklı (Lezzet)
    
    // Çikolatalı Kek → Zaten farklı (Lezzet)
    
    // Yulaflı Kek → Çift kontrol et (duplicate varsa değiştir)
    'Yulaflı Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fyulafl-kek-tarifi-5d8b4.jpg',
    
    // Kıvırcık Pasta → Yulaflı farklı olsun
    'Kıvırcık Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fkvircik-pasta-tarifi.jpg',
    
    // Trileçe → Lezzet'ten sütlü tatlısı
    'Trileçe': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ftrilece-tatlisi-tarifi-8f2e1.jpg',
    
    // Paris Brest → Farklı pastane ürünü
    'Paris Brest': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fparis-brest-tarifi.jpg',
    
    // Çikolatalı Pasta → Farklı çikolatalı pasta
    'Çikolatalı Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fcikolatali-pasta-tarifi-7e4c1.jpg',
    
    // Yulaflı Pasta → Farklı yulaflı pasta
    'Yulaflı Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fyulafl-pasta.jpg',
    
    // Fransız Usulü Pasta → Klasik Fransız
    'Fransız Usulü Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Ffransiz-pasta-tarifi.jpg',
    
    // Sünger Pasta → Yumuşak kek pasta
    'Sünger Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fsunger-pasta-tarifi-4a9f2.jpg',
    
    // Kremalı Pasta → Kremalı varyasyon
    'Kremalı Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkremali-pasta-tarifi-6c3e8.jpg',
    
    // Meyveli Pasta → Taze meyveli
    'Meyveli Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fmeyveli-pasta-tarifi.jpg',
    
    // Brownie → Zaten profesyonel (Lezzet)
    
    // Blondie → Farklı blondie
    'Blondie': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fblondie-tarifi.jpg',
    
    // Macaron -> Rengarenkli macaron
    'Macaron': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fmacaron-ornament.jpg',
    
    // Lava Kek → Zaten profesyonel (Unsplash ama iyi)
    'Lava Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Flava-kek-tarifi-5a2c8.jpg',
    
    // Fondan Kek → Zaten Dr. Oetker
    'Fondan Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ffondan-kek-tarifi-3f2a4.jpg',
    
    // Pandispanya → Farklı pandispanya
    'Pandispanya': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fpandispanya-tarifi.jpg',
    
    // Havuçlu Kek → Yeni eklenecek
    'Havuçlu Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fhavuclu-kek-tarifi-6b9a3.jpg',
    
    // Limonlu Kek → Yeni eklenecek
    'Limonlu Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Flimonlu-kek-tarifi-8c4f5.jpg',
    
    // Kahveli Kek → Yeni eklenecek
    'Kahveli Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fkahveli-kek-tarifi.jpg',
    
    // Bademli Kek → Yeni eklenecek
    'Bademli Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fbademli-kek-tarifi-7a4c6.jpg',
    
    // Vişneli Kek → Yeni eklenecek
    'Vişneli Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fvisneli-kek-tarifi-9e3f2.jpg',
    
    // Cupcake → Farklı cupcake
    'Cupcake': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fcupcake-tarifi.jpg',
    
    // Muffin → Farklı muffin
    'Muffin': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fmuffin-tarifi-4b5f6.jpg',
    
    // Madlen → Farklı madlen
    'Madlen': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fmadeleines.jpg',
    
    // Madeleine → Klasik Fransız
    'Madeleine': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fmadeleine-tarifi.jpg',
    
    // Whoopie Pie → Farklı whoopie
    'Whoopie Pie': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fwhoopie-pie-tarifi.jpg',
    
    // Kek Roll → Farklı rulo kek
    'Kek Roll': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkek-roll-tarifi-8d5f1.jpg'
};

let fixedCount = 0;
let addedCount = 0;

// Kek görsellerini güncelle
Object.entries(kekFixes).forEach(([name, newUrl]) => {
    if (imageRegistry.hasOwnProperty(name)) {
        const oldUrl = imageRegistry[name];
        if (oldUrl !== newUrl) {
            imageRegistry[name] = newUrl;
            console.log(`✅ ${name}:`);
            console.log(`   Eski: ${oldUrl.substring(0, 60)}...`);
            console.log(`   Yeni: ${newUrl.substring(0, 60)}...`);
            fixedCount++;
        }
    } else {
        imageRegistry[name] = newUrl;
        console.log(`➕ ${name}: YENİ EKLENDİ`);
        console.log(`   Görsel: ${newUrl.substring(0, 60)}...`);
        addedCount++;
    }
});

// Güncellenmiş registry'yi kaydet
fs.writeFileSync('./database/image_registry.json', JSON.stringify(imageRegistry, null, 2));

console.log(`\n🎉 Kek görselleri özelleştirme tamamlandı!`);
console.log(`📊 İstatistikler:`);
console.log(`   ✅ Düzeltilen: ${fixedCount}`);
console.log(`   ➕ Yeni Eklenen: ${addedCount}`);
console.log(`   📝 Toplam: ${Object.keys(imageRegistry).length}`);

// Örnek göster
console.log(`\n🧁 Özelleştirilmiş Kek Örnekleri:`);
const kekExamples = [
    'Cevizli Kek', 'Fıstıklı Kek', 'Yulaflı Kek', 'Kıvırcık Pasta', 
    'Trileçe', 'Havuçlu Kek', 'Limonlu Kek', 'Vişneli Kek'
];

kekExamples.forEach(name => {
    if (imageRegistry[name]) {
        const url = imageRegistry[name];
        const source = url.includes('lezzet.com.tr') ? '🌟 Lezzet' : 
                   url.includes('kisikatesakademi.com.tr') ? '👨‍🍳 Kişikate' :
                   url.includes('droetker.com.tr') ? '🍳 Dr. Oetker' : '📷 Diğer';
        console.log(`   ${source} ${name}`);
    }
});

// Rapor oluştur
const report = {
    timestamp: new Date().toISOString(),
    category: "Kekler & Pastaneler",
    statistics: {
        totalKeks: Object.keys(kekFixes).length,
        fixedKeks: fixedCount,
        addedKeks: addedCount,
        totalRegistry: Object.keys(imageRegistry).length
    },
    fixes: Object.entries(kekFixes).map(([name, newUrl]) => ({
        name,
        newUrl,
        source: newUrl.includes('lezzet.com.tr') ? 'Lezzet' : 
               newUrl.includes('kisikatesakademi.com.tr') ? 'Kişikate Akademi' :
               newUrl.includes('droetker.com.tr') ? 'Dr. Oetker' : 'Diğer',
        status: imageRegistry.hasOwnProperty(name) ? 'Güncellendi' : 'Yeni Eklendi'
    }))
};

fs.writeFileSync('./kek_specialization_report.json', JSON.stringify(report, null, 2));
console.log(`\n📝 Rapor kaydedildi: kek_specialization_report.json`);