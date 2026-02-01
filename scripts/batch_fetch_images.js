/**
 * YemekMenu - Kitlesel Görsel Benzersizleştirme (Phase 2)
 * Firecrawl MCP kullanarak yemek.com'dan toplu resim çekme
 * 
 * NOT: Bu script manual olarak çalıştırılmalı, çünkü Firecrawl MCP araçlarını kullanır
 */

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

// Kategori bazlı alternatif slug'lar
function getAlternativeSlugs(foodName, category) {
  const baseSlug = slugify(foodName);
  const alternatives = [
    baseSlug,
    baseSlug + '-tarifi',
    'ev-usulu-' + baseSlug,
    baseSlug.replace(/-/g, ''),
  ];
  
  // Kategori bazlı özel durumlar
  if (category === 'Döner & Kebap') {
    alternatives.push(baseSlug + '-kebabi');
    alternatives.push(baseSlug.replace('-kebap', '-kebabi'));
  }
  
  if (category === 'Şerbetli Tatlılar' || category === 'Sütlü Tatlılar') {
    alternatives.push(baseSlug + '-tatlisi');
    alternatives.push('fistikli-' + baseSlug);
    alternatives.push('cevizli-' + baseSlug);
  }
  
  return alternatives;
}

// Duplicate report'tan yemekleri yükle
function loadDuplicateFoods() {
  const reportPath = path.join(__dirname, '..', 'duplicate_report.json');
  
  if (!fs.existsSync(reportPath)) {
    console.error('❌ duplicate_report.json bulunamadı!');
    console.error('   Lütfen önce: node scripts/audit_uniqueness.js');
    process.exit(1);
  }
  
  const duplicateGroups = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  
  // Tüm duplicate gruplardan yemekleri topla
  const duplicateFoods = [];
  const seenNames = new Set();
  
  // Format: [[url, [name1, name2, ...]], ...]
  duplicateGroups.forEach(group => {
    const [sharedURL, foodNames] = group;
    
    foodNames.forEach(name => {
      if (!seenNames.has(name)) {
        seenNames.add(name);
        duplicateFoods.push({
          name: name,
          currentURL: sharedURL
        });
      }
    });
  });
  
  return duplicateFoods;
}

// Manuel test için batch hazırla
function prepareBatchForFirecrawl() {
  const foods = loadDuplicateFoods();
  
  console.log(`\n📋 Toplu Resim Çekme Hazırlığı\n`);
  console.log(`📊 Toplam Duplicate Yemek: ${foods.length}\n`);
  
  // İlk 10 yemek için batch hazırla (test için)
  const testBatch = foods.slice(0, 10);
  
  console.log('🧪 TEST BATCH (İlk 10 Yemek):\n');
  console.log('```javascript');
  console.log('// Bu kodu OpenCode/Cursor üzerinde çalıştırın:');
  console.log('// Firecrawl MCP aracını kullanarak her URL için scrape yapın\n');
  
  testBatch.forEach((food, index) => {
    const slug = slugify(food.name);
    const url = `https://www.yemek.com/tarif/${slug}`;
    
    console.log(`// ${index + 1}. ${food.name} (${food.category})`);
    console.log(`await firecrawl_scrape({`);
    console.log(`  url: "${url}",`);
    console.log(`  formats: ["markdown"],`);
    console.log(`  onlyMainContent: true`);
    console.log(`});\n`);
  });
  
  console.log('```\n');
  
  // Tüm batch için URL listesi
  const allURLs = foods.map(food => {
    const slug = slugify(food.name);
    return {
      name: food.name,
      url: `https://www.yemek.com/tarif/${slug}`,
      alternatives: getAlternativeSlugs(food.name, 'Unknown')
    };
  });
  
  // JSON dosyasına kaydet
  const outputPath = path.join(__dirname, 'firecrawl_batch.json');
  fs.writeFileSync(outputPath, JSON.stringify(allURLs, null, 2), 'utf-8');
  
  console.log(`✅ Tüm batch kaydedildi: ${outputPath}`);
  console.log(`📝 Toplam ${allURLs.length} yemek için URL hazırlandı\n`);
  
  return allURLs;
}

// Image URL'i markdown'dan çıkar
function extractImageFromMarkdown(markdown, foodName) {
  // Pattern 1: cdn.yemek.com resim URL'leri
  const patterns = [
    /cdn\.yemek\.com\/mncrop\/\d+\/\d+\/uploads\/[^\s\)]+\.jpg/i,
    /cdn\.yemek\.com\/mnresize\/\d+\/\d+\/uploads\/[^\s\)]+\.jpg/i,
    /cdn\.yemek\.com\/uploads\/[^\s\)]+\.jpg/i
  ];
  
  for (const pattern of patterns) {
    const match = markdown.match(pattern);
    if (match) {
      let url = match[0];
      if (!url.startsWith('http')) {
        url = 'https://' + url;
      }
      return url;
    }
  }
  
  console.warn(`⚠️  ${foodName} için resim bulunamadı`);
  return null;
}

// Firecrawl sonuçlarını işle
function processFirecrawlResults(results) {
  const updates = [];
  
  results.forEach(result => {
    if (result.success && result.markdown) {
      const imageURL = extractImageFromMarkdown(result.markdown, result.foodName);
      
      if (imageURL) {
        updates.push({
          id: result.foodId,
          name: result.foodName,
          oldURL: result.oldURL,
          newURL: imageURL
        });
      }
    }
  });
  
  return updates;
}

// Main
function main() {
  console.log('🚀 YemekMenu - Kitlesel Görsel Benzersizleştirme\n');
  console.log('=' .repeat(60));
  
  const batch = prepareBatchForFirecrawl();
  
  console.log('\n📖 KULLANIM:\n');
  console.log('1. firecrawl_batch.json dosyasını açın');
  console.log('2. Her URL için Firecrawl MCP aracıyla scrape yapın');
  console.log('3. Dönen markdown içinden resim URL\'lerini çıkarın');
  console.log('4. database/image_registry.json\'a kaydedin\n');
  
  console.log('💡 TİP: Toplu işlem için paralel Firecrawl çağrıları yapabilirsiniz');
  console.log('   (Rate limiting için 500ms delay kullanın)\n');
}

if (require.main === module) {
  main();
}

module.exports = {
  slugify,
  getAlternativeSlugs,
  extractImageFromMarkdown,
  processFirecrawlResults
};
