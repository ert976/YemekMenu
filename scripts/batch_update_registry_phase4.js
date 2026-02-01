const fs = require('fs');
const path = require('path');

// Yeni bulunan köfte görselleri
const newImages = {
  "İzmir Köfte": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2023/01/kusursuz-izmir-kofte-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/izmir-kofte/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Beğendili Köfte": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2025/01/begendili-kofte-tarifi.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/begendili-kofte/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Ekşili Köfte": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2014/06/eksili-kofte-yeni-versiyon.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/eksili-kofte/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Dalyan Köfte": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2015/10/dalyan-kofte-vestel-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/dalyan-kofte/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Kürdan Kebabı": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2025/01/kurdan-kebabi-tarifi.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kurdan-kebabi/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Söğürmeli Köfte": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2022/12/sogurmeli-kofte-onecikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/sogurmeli-kofte/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Köfteli İskender": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2024/12/kofteli-iskender-tarifi.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kofteli-iskender/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Ev Köftesi": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2022/05/ev-koftesi-yemekcom-1.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/ev-koftesi/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Islama Köfte": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2018/10/islama-kofte-yemekcom-2.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/islama-kofte/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Apartman Köfte": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2024/11/apartman-kofte-tarifi.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/apartman-kofte/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Kıbrıs Köftesi": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2018/12/kibris-koftesi-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kibris-koftesi-2/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Saçaklı Köfte": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2022/10/sacakli-kofte-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/sacakli-kofte/",
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

console.log(`\n🎉 Faz 4 Complete!`);
console.log(`📊 Total Images: ${totalImages}`);
console.log(`🆕 Newly Added: ${addedCount}`);
