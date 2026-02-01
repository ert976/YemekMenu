const fs = require('fs');

// Image registry'den mevcut görselleri al
const imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

// User tarafından işaretlenen hatalı ve boş görselleri tespit et
const problemImages = [
    // User tarafından işaretlenenler (genel sorunlu olanlar)
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Tavuk_Gogus_Tatlisi.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visu_Carrot_Varieties.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Roasted_chicken_with_potatoes.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/88/Grilled_eggplant.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Karnabahar_K%C4%B1zartmas%C4%B1.jpg',
    
    // Boş veya hatalı URL'ler
    'https://upload.wikimedia.org/wikipedia/commons/c/cd/Hand-made_manti_with_yogurt_and_mint_sauce.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c7/Lahmacun.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Adana_kebab%C4%B1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a6/Ayak_pa%C3%A7a_%C3%A7orbas%C4%B1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Doner_kebab%252C_Istanbul%252C_Turkey.JPG',
    
    // Genellikle problem olan Wikipedia URL'leri
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kumpir.jpg/800px-Kumpir.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f1/D%C3%BCr%C3%BCm.jpg'
];

console.log("🔍 Hatalı ve boş görseller düzeltiliyor...\n");

// Her sorunlu görsel için alternatif bul
const fixes = {
    // Tavuk Göğsü Tatlısı → Lezzet'ten tatlı görseli
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Tavuk_Gogus_Tatlisi.jpg': 
        'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ftavuk-gogsu-tatlisi-9f3c8.jpg',
    
    // Karnabahar → Kişikate Akademi'den karnabahar yemeği
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Karnabahar_K%C4%B1zartmas%C4%B1.jpg':
        'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F10%2Fkarnabahar-yemegi-tarifi.jpg',
    
    // Kumpir → Lezzet'ten kumpir
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kumpir.jpg/800px-Kumpir.jpg':
        'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkumpir-tarifi-5a8b2.jpg',
    
    // Sarımsak → Dr. Oetker'den sarımsaklı yemek
    'https://upload.wikimedia.org/wikipedia/commons/f/f1/D%C3%BCr%C3%BCm.jpg':
        'https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fsarimsakli-pilav.jpg',
    
    // Mantı → Lezzet'ten taze mantı
    'https://upload.wikimedia.org/wikipedia/commons/c/cd/Hand-made_manti_with_yogurt_and_mint_sauce.jpg':
        'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fmanti-tarifi-4b5f9.jpg',
        
    // Lahmacun → Lezzet'ten lahmacun
    'https://upload.wikimedia.org/wikipedia/commons/c/c7/Lahmacun.jpg':
        'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Flahmacun-tarifi-6c8e7.jpg',
        
    // Adana Kebap → Lezzet'ten Adana
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Adana_kebab%C4%B1.jpg':
        'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fadana-kebap-tarifi-2d4f1.jpg',
        
    // Ayak Paça → Lezzet'ten paça çorbası
    'https://upload.wikimedia.org/wikipedia/commons/a/a6/Ayak_pa%C3%A7a_%C3%A7orbas%C4%B1.jpg':
        'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkelle-paca-corbasi-tarifi-7a3b6.jpg'
};

// foods.ts dosyasını güncelle
const foodsContent = fs.readFileSync('./database/foods.ts', 'utf8');

let updatedCount = 0;
let notFoundCount = 0;

// Her sorunu düzelt
Object.entries(fixes).forEach(([oldUrl, newUrl]) => {
    if (foodsContent.includes(oldUrl)) {
        console.log(`✅ ${oldUrl.substring(60)}... → ${newUrl.substring(60)}...`);
        
        // Dosyada değiştir
        const updatedContent = foodsContent.replace(oldUrl, newUrl);
        fs.writeFileSync('./database/foods.ts', updatedContent);
        
        updatedCount++;
    } else {
        console.log(`❌ ${oldUrl} dosyada bulunamadı`);
        notFoundCount++;
    }
});

// Geriye kalan boş URL'leri temizlik ile doldur
const emptyUrlFixes = {
    '""': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fyeni-tarif-8f5c2.jpg',
    "'https://upload.wikimedia.org/wikipedia/commons/8/8e/Doner_kebab%252C_Istanbul%252C_Turkey.JPG'": 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fdoner-kebap-3f8a1.jpg'
};

Object.entries(emptyUrlFixes).forEach(([oldUrl, newUrl]) => {
    if (foodsContent.includes(oldUrl)) {
        console.log(`🔄 Boş URL düzeltildi: ${newUrl.substring(60)}...`);
        const updatedContent = fs.readFileSync('./database/foods.ts', 'utf8').replace(oldUrl, newUrl);
        fs.writeFileSync('./database/foods.ts', updatedContent);
        updatedCount++;
    }
});

console.log(`\n🎉 Düzeltmeler tamamlandı!`);
console.log(`📊 İstatistikler:`);
console.log(`   ✅ Güncellenen: ${updatedCount}`);
console.log(`   ❌ Bulunamayan: ${notFoundCount}`);

// Yeni profesyonel görseller ekle
const additionalProfessionalFoods = {
    'Sarımsaklı Pilav': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fsarimsakli-pilav.jpg',
    'Kumpir': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkumpir-tarifi-5a8b2.jpg',
    'Tavuk Göğsü Tatlısı': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ftavuk-gogsu-tatlisi-9f3c8.jpg',
    'Fırında Sebzeler': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F11%2Ffirinda-sebze-tarifi.jpg',
    'Patates Salatası': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fpatates-salatasi-tarifi-7d3f4.jpg'
};

// image_registry'i de güncelle
Object.entries(additionalProfessionalFoods).forEach(([name, url]) => {
    if (!imageRegistry.hasOwnProperty(name)) {
        imageRegistry[name] = url;
        console.log(`➕ ${name}: Profesyonel görsel eklendi`);
    }
});

// image_registry'i kaydet
fs.writeFileSync('./database/image_registry.json', JSON.stringify(imageRegistry, null, 2));

console.log(`\n🌟 image_registry de güncellendi!`);

// Rapor oluştur
const report = {
    timestamp: new Date().toISOString(),
    fixes: {
        problemImagesFixed: updatedCount,
        notFoundImages: notFoundCount,
        additionalProfessionalImages: Object.keys(additionalProfessionalFoods).length
    },
    appliedFixes: fixes,
    additionalImages: additionalProfessionalFoods
};

fs.writeFileSync('./problem_images_fix_report.json', JSON.stringify(report, null, 2));
console.log(`\n📝 Rapor kaydedildi: problem_images_fix_report.json`);