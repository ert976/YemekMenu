const fs = require('fs');
const path = require('path');

// Yeni bulunan görseller (Faz 3)
const newImages = {
  "Karnıyarık": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2014/10/karniyarik-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/karniyarik/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "İmam Bayıldı": {
    "url": "https://cdn.yemek.com/mncrop/940/625/uploads/2015/01/imam-bayildi-yeni-one-cikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/imam-bayildi/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Zeytinyağlı Enginar": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/01/zeytinyagli-enginar-tarifi.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/zeytinyagli-enginar/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Biber Dolması": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/biber-dolmasi-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/biber-dolmasi/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Şakşuka": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2025/01/saksuka-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/saksuka/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Zeytinyağlı Taze Fasulye": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/04/zeytinyagli-taze-fasulye-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/zeytinyagli-taze-fasulye/",
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

console.log(`\n🎉 Phase 3 Complete!`);
console.log(`📊 Total Images: ${totalImages}`);
console.log(`🆕 Newly Added: ${addedCount}`);
