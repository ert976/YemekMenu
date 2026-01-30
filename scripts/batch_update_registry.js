const fs = require('fs');
const path = require('path');

// Yeni bulunan benzersiz görseller
const newImages = {
  // Simit Grubu - Kahvaltı
  "Simit": {
    "url": "https://cdn.yemek.com/mncrop/940/625/uploads/2019/04/simit-tarifi-son.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/simit/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Börek": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2015/06/gul-boregi-one-cikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/borek/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Menemen": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2023/10/menemen-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/menemen/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Sahanda Yumurta": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/04/sahanda-yumurta-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/sahanda-yumurta/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Omlet": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2015/05/omlet-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/omlet/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Tost": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2023/03/tost-sunum-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/tost/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Poğaça": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2015/05/mayali-pogaca-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/pogaca/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Sucuklu Yumurta": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2015/01/sucuklu-yumurta-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/sucuklu-yumurta/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Pastırmalı Yumurta": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/04/pastirmali-yumurta-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/pastirmali-yumurta/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Ispanaklı Börek": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2014/12/ispanakli-borek-yeni-one-cikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/ispanakli-borek/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Patatesli Börek": {
    "url": "https://cdn.yemek.com/mncrop/940/625/uploads/2015/01/patatesli-borek-tarif-son.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/patatesli-borek/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Kıymalı Pide": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/02/kiymali-pide-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kiymali-pide/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Peynirli Pide": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2022/01/peynirli-pide-yeni-one-cikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/peynirli-pide/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Yumurtalı Ekmek": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2018/10/yumurtali-ekmek-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/yumurtali-ekmek/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Sosisli Börek": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2023/11/sosisli-borek.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/sosisli-borek/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Haşlanmış Yumurta": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2023/11/haslanmis-yumurta.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/haslanmis-yumurta/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Sütlü Mısır": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2023/11/sutlu-misir.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/sutlu-misir/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Açma": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/acma-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/acma/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  
  // Taze Fasulye Grubu - Sebze Yemekleri
  "Taze Fasulye": {
    "url": "https://cdn.yemek.com/uploads/2019/05/tazefasulyefbb.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/taze-fasulye/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Patlıcan Musakka": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2015/01/patlican-musakka-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/patlican-musakka/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Bamya": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/bamya-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/bamya/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Ispanak": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2023/11/ispanak-yemegi-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/ispanak/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Karnabahar": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2014/12/karnabahar-yemegi-tarifi.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/karnabahar/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Mücver": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2014/07/mucver-ytk-site.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/mucver/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  
  // Mantı Grubu
  "Mantı": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/01/manti-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/manti/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Pide": {
    "url": "https://cdn.yemek.com/mnresize/940/940/uploads/2018/07/pide-tarifleri-kategorisi.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/pide/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Gözleme": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/06/gozleme-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/gozleme/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Lahmacun": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/04/lahmacun-yemekcom-1.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/lahmacun/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  
  // Kumpir Grubu
  "Kumpir": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/03/kumpir-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kumpir/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Hamburger": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/burger-sunum-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/hamburger/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  
  // Kekler Grubu
  "Fıstıklı Kek": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2017/01/fistikli-kek.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/fistikli-kek/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Portakallı Kek": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/02/portakalli-kek-tarifi-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/portakalli-kek/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Elmalı Kek": {
    "url": "https://cdn.yemek.com/mncrop/620/388/uploads/2014/07/elmali-kek-tarifi-son.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/elmali-kek/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Muzlu Kek": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2025/04/muzlu-kek-tarifi.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/muzlu-kek/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Çikolatalı Kek": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2023/06/cikolatali-kek-yeni.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/cikolatali-kek/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  
  // Döner & Kebap Grubu
  "Tavuk Döner": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/tavuk-doner-onecikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/tavuk-doner/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Şiş Kebap": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2023/04/sis-kebap-onecikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/sis-kebap/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Patlıcan Kebabı": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/patlican-kebabi-one-cikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/patlican-kebabi/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  
  // Izgara Grubu
  "Tavuk Şiş": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2023/12/tavuk-sis-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/tavuk-sis/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  "Pirzola": {
    "url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/pirzola-onecikan.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/pirzola/",
    "tested": true,
    "date_added": "2026-01-30"
  },
  
  // Kuru Fasulye Grubu
  "Kuru Fasulye": {
    "url": "https://cdn.yemek.com/mncrop/600/315/uploads/2015/11/kuru-fasulye-yemekcom.jpg",
    "status": "verified",
    "source": "yemek.com/tarif/kuru-fasulye/",
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
for (const [foodName, imageData] of Object.entries(newImages)) {
  if (!registry.images[foodName]) {
    registry.images[foodName] = imageData;
    addedCount++;
    console.log(`✅ Added: ${foodName}`);
  } else {
    console.log(`⚠️ Already exists: ${foodName}`);
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
console.log(`📅 Last Updated: ${registry.summary.last_updated}`);
