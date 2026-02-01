/**
 * yemek.com'dan MCP Firecrawl ile Otomatik Resim URL Çekme
 * 
 * Bu script, Firecrawl MCP aracını kullanarak yemek.com sitesinden
 * yemek resimlerini otomatik olarak bulur.
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

// Test yemekler
const testFoods = [
  { name: 'Mercimek Çorbası', category: 'Çorbalar' },
  { name: 'Kuru Fasulye', category: 'Baklagiller' },
  { name: 'Adana Kebap', category: 'Döner & Kebap' },
  { name: 'İmam Bayıldı', category: 'Sebze Yemekleri' },
  { name: 'Baklava', category: 'Şerbetli Tatlılar' }
];

// Firecrawl için URL'leri hazırla
console.log('📋 yemek.com URL Listesi:\n');
console.log('Bu URL\'leri Firecrawl MCP aracı ile test edebilirsiniz:\n');

testFoods.forEach(food => {
  const slug = slugify(food.name);
  const url = `https://www.yemek.com/tarif/${slug}`;
  console.log(`${food.name} (${food.category}):`);
  console.log(`  ${url}\n`);
});

console.log('\n📝 Not: Bu URL\'leri yemekmenu_list_foods MCP aracı ile kullanabilirsiniz.');
console.log('Firecrawl scrape ile her URL\'den resim çekilebilir.\n');

// Manuel test için örnek resim URL pattern'leri
console.log('🔍 Resim URL Pattern\'leri:\n');
console.log('1. cdn.yemek.com/mncrop/940/625/uploads/YYYY/MM/resim-adi.jpg');
console.log('2. cdn.yemek.com/uploads/resim-adi.jpg');
console.log('3. og:image meta tag içinde bulunabilir\n');
