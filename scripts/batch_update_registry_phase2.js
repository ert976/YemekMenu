const fs = require('fs');
const path = require('path');

// Yeni bulunan benzersiz görseller (Döner, Kebap, Izgara grupları)
const newImages = {
  // Döner & Kebap Grubu
  "Adana Kebap": {
    "url": "https://cdn.yemek.com/mncrop/940/625/uploads/2016/05/adana-kebap-one-cikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/adana-kebap/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Kavurma": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2025/05/kavurma-tarifi.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kavurma/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Tepsi Kebabı": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2024/03/tepsi-kebabi-bosch-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/tepsi-kebabi/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Kağıt Kebabı": {
    "url": "https://cdn.yemek.com/mncrop/940/625/uploads/2018/05/kagit-kebabi-tarifi-son.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kagit-kebabi/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Orman Kebabı": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/01/orman-kebabi-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/orman-kebabi/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Beyti Sarma": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2021/01/beyti-sarma-tarifi.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/beyti-sarma/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Kuşbaşılı Pide": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/01/kusbasili-pide-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kusbasili-pide/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  
  // Izgara Grubu
  "Kaşarlı Köfte": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/02/kasarli-kofte-yatay.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kasarli-kofte/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Sulu Köfte": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2023/11/sulu-kofte-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/sulu-kofte/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Tavuk Bonfile": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/09/tavuk-fileto-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/tavuk-bonfile/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Bonfile Şiş": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2025/09/bonfile-sis-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/bonfile-sis/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Kuşbaşı": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2025/09/kusbasi-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kusbasi/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Kaburga": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2025/09/kaburga-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kaburga/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Sucuk Izgara": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2025/09/sucuk-izgara-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/sucuk-izgara/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Tavuk Pirzola": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2023/12/tavuk-pirzola-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/tavuk-pirzola/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  
  // İçecekler
  "Turşu Suyu": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2023/09/tursu-suyu-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/tursu-suyu/",
    "tested": true,
    "date_added": "2026-01-30"
  }
};

// Registry dosyasını oku
const registryPath = path.join(__dirname, '..', 'image_registry.json');
let registry = { images: {}, summary: {} };

try {
  const data = fs.readFileSync(registryPath, 'utf8');
  registry = JSON.parse(data);
} catch (err) {
  console.log('Creating new registry...');
}

// Yeni görselleri ekle
let addedCount = 0;
let updatedCount = 0;
for (const [foodName, imageData] of Object.entries(newImages)) {
  if (!registry.images[foodName]) {
    registry.images[foodName] = imageData;
    addedCount++;
    console.log(`✅ Added: ${foodName}`);
  } else {
    // Güncelle
    registry.images[foodName] = imageData;
    updatedCount++;
    console.log(`🔄 Updated: ${foodName}`);
  }
}

// Summary güncelle
const totalImages = Object.keys(registry.images).length;
const verifiedImages = Object.values(registry.images).filter(img => img.status === 'verified').length;

registry.summary = {
  total_images: totalImages,
  total_verified: verifiedImages,
  success_rate: `${Math.round((verifiedImages / totalImages) * 100)}%`,
  last_updated: new Date().toISOString().split('T')[0]
};

// Registry'i kaydet
fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), 'utf8');

console.log(`\n🎉 Registry Updated!`);
console.log(`📊 Total Images: ${totalImages}`);
console.log(`✅ Verified: ${verifiedImages}`);
console.log(`🆕 Newly Added: ${addedCount}`);
console.log(`🔄 Updated: ${updatedCount}`);
console.log(`📅 Last Updated: ${registry.summary.last_updated}`);
