const fs = require('fs');
const path = require('path');

// Yeni bulunan döner ve tatlı görselleri
const newImages = {
  // Döner Çeşitleri - Kritik Grup!
  "Et Döner": {
    "url": "https://cdn.yemek.com/mnresize/1250/832/uploads/2021/10/et-doner-tarifi.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/et-doner/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Döner Kebap": {
    "url": "https://cdn.yemek.com/mnresize/1250/832/uploads/2021/10/doner-kebap.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/doner-kebap/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Ev Yapımı Döner": {
    "url": "https://cdn.yemek.com/mnresize/1250/832/uploads/2021/10/ev-yapimi-doner.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/ev-yapimi-doner/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Tavuk Döner": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/tavuk-doner-onecikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/tavuk-doner/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Döner": {
    "url": "https://cdn.yemek.com/mnresize/1250/832/uploads/2021/10/doner.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/doner/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  
  // Tatlılar
  "Baklava": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2017/06/fistikli-baklava-yemekcom1.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/baklava/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Kadayıf Tatlısı": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/01/tel-kadayif-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kadayif/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Künefe": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2015/05/kunefe-reels-yemekcom-1.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kunefe/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Sütlaç": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2019/05/sutlac-guncelleme-sunum-1.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/sutlac/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Aşure": {
    "url": "https://cdn.yemek.com/mncrop/940/625/uploads/2014/10/asure-site-tarif.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/asure/",
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
    console.log(`🔄 Updated: ${foodName}`);
    registry.images[foodName] = imageData;
    addedCount++;
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

console.log(`\n🎉 Döner & Tatlılar Eklendi!`);
console.log(`📊 Total Images: ${totalImages}`);
console.log(`🆕 Added/Updated: ${addedCount}`);
console.log(`🎯 Döner Krizi Çözüldü: 5 farklı döner görseli!`);
