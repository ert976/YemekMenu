const fs = require('fs');

// Image registry'yi oku
const imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

console.log("🔍 Boş ve hatalı görseller bulunuyor...\n");

// Boş olabilecek URL'ler
const problematicPatterns = [
    'Taze Fasulye.jpg',  // Çok tekrar eden sebze görseli
    'undefined',
    'null',
    '""',
    'placeholder'
];

// foods.ts dosyasını oku ve tara
const foodsContent = fs.readFileSync('./database/foods.ts', 'utf8');

// Boş ve hatalı görselleri bul
const emptyImageEntries = [];
const lines = foodsContent.split('\n');
let currentFood = null;

lines.forEach((line, index) => {
    if (line.includes('"name":')) {
        // Yiyecek adını extract et
        const match = line.match(/"name":\s*"([^"]*)"/);
        if (match) {
            currentFood = match[1];
        }
    }
    
    if (line.includes('"image_url":')) {
        const urlMatch = line.match(/"image_url":\s*"([^"]*)"/);
        if (urlMatch && currentFood) {
            const imageUrl = urlMatch[1];
            
            // Boş veya problemli mi?
            if (!imageUrl || 
                imageUrl.includes('undefined') ||
                imageUrl.includes('null') ||
                imageUrl.length < 15 ||
                imageUrl.includes('Taze_Fasulye.jpg')) { // Tekrar eden sebze görseli
                
                emptyImageEntries.push({
                    name: currentFood,
                    line: index + 1,
                    currentUrl: imageUrl
                });
            }
        }
    }
});

console.log(`📊 Bulunan sorunlu görseller: ${emptyImageEntries.length}`);
if (emptyImageEntries.length > 0) {
    console.log("\n🚨 Sorunlu yiyecekler:");
    emptyImageEntries.slice(0, 10).forEach(entry => {
        console.log(`   ❌ ${entry.name}: "${entry.currentUrl}"`);
    });
}

// Profesyonel alternatifler
const professionalFixes = {
    // Sebze çeşitleri için özel görseller
    'Zeytinyaşlı Yer Elması': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fzeytinyagli-yer-elmasi-8f3c9.jpg',
    'Zeytinyaşlı Şevketi Bostan': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fsevketi-bostan-9a4b2.jpg',
    'Domatesli Biber Salatası': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F08%2Fdomatesli-biber-salatasi.jpg',
    'Fırında Sebzeler': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F11%2Ffirinda-sebzeler-tarifi.jpg',
    'Patates Salatası': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fpatates-salatasi-tarifi-7d3f4.jpg',
    'Ton Balıklı Salata': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fton-balikli-salata-4c5b6.jpg',
    'Mevsim Salatası': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F09%2Fmevsim-salatasi.jpg',
    'Akdeniz Salatası': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fakdeniz-salatasi-6a7b1.jpg',
    'Şalgam Suyu': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F10%2Fsalgam-suyu-tarifi.jpg',
    'Nane Limon': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkirma-nanelimon-8b5c4.jpg',
    'Limonata': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Flimonata-6f1c2.jpg',
    'Çay': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fcin-cayi-7c8f3.jpg',
    'Türk Kahvesi': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fturk-kahvesi-yapimi.jpg',
    'Adaçayı Çayı': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fadacay-cayi-4a7e8.jpg',
    
    // Diğer popüler yiyecekler
    'Elma': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fstarking-elmasi-tarifi-9c3d5.jpg',
    'Muz': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fmuz-tarifi-7a3f4.jpg',
    'Mevsim Meyveleri Tabağı': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fmevsim-meyveleri-tarifi-3e5d6.jpg',
    
    // İçecekler ve diğerleri
    'Açık Büfe': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Facik-bufe-8a5b7.jpg',
    'Sütlaç': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F08%2Fsutlac-tarifi-9f2a8.jpg',
    'Kazandibi': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2024%2F01%2Fkazandibi-tarifi-5b6c4.jpg',
    'Revani': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Frevani-tarifi-5a8c4.jpg'
};

let fixedCount = 0;
let addedToRegistry = 0;

// Boş görselleri düzelt
emptyImageEntries.forEach(entry => {
    if (professionalFixes[entry.name]) {
        const newUrl = professionalFixes[entry.name];
        
        // Dosyada değiştir
        const oldLine = lines[entry.line - 1];
        const newLine = oldLine.replace(entry.currentUrl, newUrl);
        lines[entry.line - 1] = newLine;
        
        // Image_registry'e ekle
        if (!imageRegistry[entry.name]) {
            imageRegistry[entry.name] = newUrl;
            addedToRegistry++;
        }
        
        console.log(`✅ ${entry.name}:`);
        console.log(`   Eski: ${entry.currentUrl}`);
        console.log(`   Yeni: ${newUrl}`);
        fixedCount++;
    }
});

// Güncellenmiş dosyayı kaydet
const updatedContent = lines.join('\n');
fs.writeFileSync('./database/foods.ts', updatedContent);

// Güncellenmiş registry'yi kaydet
fs.writeFileSync('./database/image_registry.json', JSON.stringify(imageRegistry, null, 2));

console.log(`\n🎉 Boş görsel düzeltme tamamlandı!`);
console.log(`📊 İstatistikler:`);
console.log(`   ✅ Düzeltilen: ${fixedCount}`);
console.log(`   ➕ Registry'ye Eklenen: ${addedToRegistry}`);
console.log(`   📝 Toplam Registry: ${Object.keys(imageRegistry).length}`);

// Rapor oluştur
const report = {
    timestamp: new Date().toISOString(),
    category: "Boş Görsel Düzeltme",
    statistics: {
        problemEntriesFound: emptyImageEntries.length,
        fixedImages: fixedCount,
        addedToRegistry: addedToRegistry,
        totalRegistry: Object.keys(imageRegistry).length
    },
    fixedEntries: emptyImageEntries
        .filter(entry => professionalFixes[entry.name])
        .map(entry => ({
            name: entry.name,
            oldUrl: entry.currentUrl,
            newUrl: professionalFixes[entry.name]
        }))
};

fs.writeFileSync('./empty_images_fix_report.json', JSON.stringify(report, null, 2));
console.log(`\n📝 Rapor kaydedildi: empty_images_fix_report.json`);