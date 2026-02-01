const fs = require('fs');
const path = require('path');

// Yeni bulunan zeytinyağlı görselleri
const newImages = {
  "Zeytinyağlı Pırasa": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/01/zeytinyagli-pirasa-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/zeytinyagli-pirasa/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Zeytinyağlı Bamya": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2022/05/zeytinyagli-bamya-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/zeytinyagli-bamya/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Zeytinyağlı Karnabahar": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2025/09/zeytinyagli-karnabahar-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/zeytinyagli-karnabahar/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Zeytinyağlı Brüksel Lahanası": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2025/10/zeytinyagli-bruksel-lahanasi-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/zeytinyagli-bruksel-lahanasi/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Zeytinyağlı Yer Elması": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2025/11/zeytinyagli-yer-elmasi-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/zeytinyagli-yer-elmasi/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Zeytinyağlı Kereviz": {
    "url": "https://cdn.yemek.com/mncrop/940/625/uploads/2014/12/kereviz-buyuk-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/zeytinyagli-kereviz/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Zeytinyağlı Bezelye": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2017/04/zeytinyagli-bezelye-one-cikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/zeytinyagli-bezelye/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Zeytinyağlı Lahana": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2021/05/zeytinyagli-lahana-one-cikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/zeytinyagli-lahana/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Zeytinyağlı Türlü": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2021/05/zeytinyagli-turlu-one-cikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/zeytinyagli-turlu/",
    "tested": true,
    "date_added": "2026-01-30"
  }
};

const registryPath = path.join(__dirname, '..', 'image_registry.json');
let registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

let addedCount = 0;
for (const [foodName, imageData] of Object.entries(newImages)) {
  if (!registry.images[foodName]) {
    registry.images[foodName] = imageData;
    addedCount++;
    console.log(`✅ Added: ${foodName}`);
  } else {
    console.log(`⚠️ Exists: ${foodName}`);
  }
}

const totalImages = Object.keys(registry.images).length;
const verifiedImages = Object.values(registry.images).filter(img => img.status === 'verified').length;

registry.summary = {
  total_images: totalImages,
  total_verified: verifiedImages,
  success_rate: `${Math.round((verifiedImages / totalImages) * 100)}%`,
  last_updated: new Date().toISOString().split('T')[0]
};

fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf8');

console.log(`\n🎉 Zeytinyağlılar Eklendi!`);
console.log(`📊 Total Images: ${totalImages}`);
console.log(`🆕 Newly Added: ${addedCount}`);
console.log(`🌿 Zeytinyağlı Kategorisi: 9 yeni görsel!`);
