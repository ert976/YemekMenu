const fs = require('fs');

// Mevcut image_registry'yi oku
let imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

// Eksik olan önemli yiyecekleri ekle
const additionalFoods = {
    'Tavuk Göğsü Tatlısı': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ftavuk-gogsu-tatlisi-8a3b2.jpg',
    'Çiğ Köfte': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fcig-kofte-tarifi-6c4f5.jpg',
    'Patates Köftesi': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F10%2Fpatates-koftesi-tarifi.jpg',
    'İmam Bayıldı': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fimam-bayildi-tarifi-7f3c8.jpg',
    'Zeytinyağlı Enginar': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fzeytinyagli-enginar-4a2b9.jpg',
    'Havuçlu Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fhavuclu-kek.jpg',
    'Limonlu Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Flimonlu-kek-tarifi-3e5d4.jpg',
    'Kahveli Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkahveli-kek-5b6c7.jpg',
    'Bademli Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F11%2Fbademli-kek-tarifi.jpg',
    'Vişneli Kek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fvisneli-kek-tarifi-2a8b5.jpg',
    'Cupcake': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fcupcake-ornament.jpg',
    'Muffin': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fmuffin-tarifi-7c8f9.jpg',
    'Yulaflı Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F10%2Fyulafl-pasta-tarifi.jpg',
    'Fransız Usulü Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fquiche-lorraine.jpg',
    'Sünger Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fsunger-pasta-tarifi-4d9e3.jpg',
    'Kremalı Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkremali-pasta-tarifi-6a7b1.jpg',
    'Meyveli Pasta': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kisikatesakademi.com.tr%2Fwp-content%2Fuploads%2F2023%2F09%2Fmeyveli-pasta-tarifi.jpg',
    'Blondie': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fblondie-tarifi-8a5c4.jpg',
    'Macaron': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fmacaron-ornament.jpg',
    'Kıymalı Tost': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkiymali-tost-tarifi-3e4d7.jpg',
    'Peynirli Tost': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fpeynirli-tost-9b5c8.jpg',
    'Sucuklu Tost': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fsucuklu-tost-tarifi-7a4f2.jpg',
    'Çoban Salatası': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fcoban-salatasi-5b6c9.jpg',
    'Çiğ Biftek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fcig-biftek-tarifi-4a8e1.jpg',
    'Kaşarlı Köfte': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkasarli-kofte-9c2d3.jpg',
    'Tavuk Bonfile': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ftavuk-bonfile-6f1e5.jpg',
    'Et Döner': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fet-doner-3f8a7.jpg',
    'Hamburger': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fhamburger-tarifi-5a8b2.jpg',
    'Tavuk Pirzola': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ftavuk-pirzola-2e3f9.jpg',
    'Balık Izgara': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fbalik-izgara-4c7b6.jpg',
    'Patlıcan Kebabı': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fpatlican-kebabi-8d2f4.jpg',
    'Kuzu İncik': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkuzu-incik-9b5e3.jpg',
    'İzmir Köfte': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fizmir-kofte-7a6c4.jpg',
    'Kadınbudu Köfte': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkadinbudu-kofte-4e8d1.jpg',
    'Tavuk Şiş Kebap': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ftavuk-sis-kebap-3f2c8.jpg',
    'Karnıyarık': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fkarniyarik-6f8b7.jpg',
    'İmambayıldı': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fimambayildi-5e4a2.jpg',
    'Tas Kebabı': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Ftas-kebabi-8c5f6.jpg',
    'Etli Ekmek': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fetli-ekmek-7a3b4.jpg',
    'Çökertme Kebabı': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lezzet.com.tr%2Fimages%2Flezzet%2Fcokertme-kebabi-9d2e1.jpg',
    'Baklava': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fbaklava-with-pistachios.jpg',
    'Künefe': 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.droetker.com.tr%2FContent%2FImages%2FRecipePhotos%2Fkunefe-with-cheese.jpg'
};

// Yeni yiyecekleri ekle
Object.entries(additionalFoods).forEach(([name, url]) => {
    if (!imageRegistry.hasOwnProperty(name)) {
        imageRegistry[name] = url;
        console.log(`➕ ${name}: Profesyonel görsel eklendi`);
    }
});

// Güncellenmiş image_registry'yi kaydet
fs.writeFileSync('./database/image_registry.json', JSON.stringify(imageRegistry, null, 2));

console.log(`\n🎉 Image_registry genişletildi!`);
console.log(`📊 Toplam yiyecek sayısı: ${Object.keys(imageRegistry).length}`);
console.log(`📈 Eklenen yeni yiyecek: ${Object.keys(additionalFoods).length}`);

console.log(`\n🌟 Eklenen profesyonel görseller:`);
Object.entries(additionalFoods).slice(0, 10).forEach(([name, url]) => {
    const source = url.includes('lezzet.com.tr') ? '🌟 Lezzet' : 
                   url.includes('kisikatesakademi.com.tr') ? '👨‍🍳 Kişikate' :
                   url.includes('droetker.com.tr') ? '🍳 Dr. Oetker' : '📷 Diğer';
    console.log(`   ${source} ${name}`);
});