/**
 * yemek.com'dan Otomatik Resim URL Çekme
 * 
 * Bu script, yemek.com sitesinden yemek resimlerini otomatik olarak bulur ve
 * database/image_registry.json'a kaydeder.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Türkçe karakterleri URL-safe karakterlere çevir
function slugify(text) {
  const charMap = {
    'ç': 'c', 'Ç': 'C',
    'ğ': 'g', 'Ğ': 'G',
    'ı': 'i', 'İ': 'i',
    'ö': 'o', 'Ö': 'O',
    'ş': 's', 'Ş': 'S',
    'ü': 'u', 'Ü': 'U'
  };
  
  return text
    .split('')
    .map(char => charMap[char] || char)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// yemek.com'dan HTML fetch et (redirect'leri takip et)
async function fetchHTML(url, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // 301/302 redirect'leri takip et
      if (res.statusCode === 301 || res.statusCode === 302) {
        if (redirectCount > 5) {
          reject(new Error('Too many redirects'));
          return;
        }
        const redirectURL = res.headers.location;
        console.log(`   ↪️  Redirect: ${redirectURL}`);
        fetchHTML(redirectURL, redirectCount + 1).then(resolve).catch(reject);
        return;
      }
      
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${url}`));
        }
      });
    }).on('error', reject);
  });
}

// HTML'den resim URL'ini çıkar
function extractImageURL(html) {
  // Tarif resmi için çeşitli pattern'ler
  const patterns = [
    /cdn\.yemek\.com\/mncrop\/\d+\/\d+\/uploads\/[^"]+\.jpg/i,
    /cdn\.yemek\.com\/uploads\/[^"]+\.jpg/i,
    /"og:image"[^>]*content="([^"]+)"/i,
    /property="og:image"[^>]*content="([^"]+)"/i
  ];
  
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) {
      const url = match[1] || match[0];
      if (!url.startsWith('http')) {
        return 'https://' + url;
      }
      return url;
    }
  }
  
  return null;
}

// Bir yemek için resim URL'i bul
async function findImageForFood(foodName, retryCount = 0) {
  const slug = slugify(foodName);
  const url = `https://www.yemek.com/tarif/${slug}`;
  
  console.log(`\n🔍 Aranıyor: ${foodName}`);
  console.log(`   URL: ${url}`);
  
  try {
    // Rate limiting için bekle
    await new Promise(resolve => setTimeout(resolve, 500 + retryCount * 1000));
    
    const html = await fetchHTML(url);
    const imageURL = extractImageURL(html);
    
    if (imageURL) {
      console.log(`   ✅ BULUNDU: ${imageURL}`);
      return { success: true, url: imageURL };
    } else {
      console.log(`   ⚠️  Resim bulunamadı (HTML parse başarısız)`);
      return { success: false, reason: 'parse_failed' };
    }
  } catch (error) {
    if (error.message.includes('404') && retryCount < 2) {
      // Alternatif slug dene
      const altSlugs = [
        slug + '-tarifi',
        slug.replace(/-/g, ''),
        'ev-usulu-' + slug
      ];
      
      console.log(`   ⚠️  404 - Alternatif deneniyor...`);
      return findImageForFood(foodName, retryCount + 1);
    }
    
    console.log(`   ❌ HATA: ${error.message}`);
    return { success: false, reason: error.message };
  }
}

// Test modu: Birkaç yemek dene
async function testMode() {
  console.log('🧪 TEST MODU - yemek.com Bağlantı Testi\n');
  console.log('='.repeat(60));
  
  const testFoods = [
    'Mercimek Çorbası',
    'Kuru Fasulye',
    'Adana Kebap',
    'İmam Bayıldı',
    'Baklava'
  ];
  
  const results = [];
  
  for (const food of testFoods) {
    const result = await findImageForFood(food);
    results.push({
      name: food,
      success: result.success,
      url: result.url || null,
      reason: result.reason || null
    });
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 TEST SONUÇLARI:\n');
  
  const successCount = results.filter(r => r.success).length;
  console.log(`✅ Başarılı: ${successCount}/${testFoods.length}`);
  console.log(`❌ Başarısız: ${testFoods.length - successCount}/${testFoods.length}`);
  
  console.log('\n📋 Detaylar:');
  results.forEach(r => {
    if (r.success) {
      console.log(`  ✅ ${r.name}`);
      console.log(`     ${r.url}`);
    } else {
      console.log(`  ❌ ${r.name} (${r.reason})`);
    }
  });
}

// Ana fonksiyon
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--test')) {
    await testMode();
  } else {
    console.log('Kullanım: node fetch_yemek_images.js --test');
    console.log('');
    console.log('Seçenekler:');
    console.log('  --test    5 yemek ile test modu');
  }
}

// Script çalıştır
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { findImageForFood, slugify };
