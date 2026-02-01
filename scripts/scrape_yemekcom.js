/**
 * Yemek.com'dan Firecrawl MCP ile resim URL'leri çekme
 * 
 * Kullanım:
 * node scripts/scrape_yemekcom.js "Adana Kebap"
 */

const fs = require('fs');

// Yemek.com arama URL'si
function getYemekComSearchUrl(foodName) {
  const query = encodeURIComponent(foodName);
  return `https://www.yemek.com/arama?q=${query}`;
}

// Firecrawl MCP ile sayfa içeriğini çek
async function scrapeYemekCom(foodName) {
  const searchUrl = getYemekComSearchUrl(foodName);
  
  console.log(`🔍 Searching yemek.com for: ${foodName}`);
  console.log(`📍 URL: ${searchUrl}`);
  
  // NOT: Bu kısmı OpenCode TUI içinde çalıştırmalısınız:
  // "use firecrawl to scrape ${searchUrl} and extract image URLs"
  
  console.log('\n📝 OpenCode TUI komutunu kopyalayın:');
  console.log(`use firecrawl to scrape ${searchUrl} and extract all image URLs from recipe cards`);
  
  return searchUrl;
}

// Batch processing için
async function batchScrape() {
  const duplicates = JSON.parse(fs.readFileSync('./duplicate_report.json', 'utf8'));
  
  const foodsToScrape = [];
  
  // En kritik duplicate grupları al
  duplicates.forEach(([url, foodNames]) => {
    if (foodNames.length >= 5) { // 5+ yemek aynı resmi kullanıyorsa
      foodsToScrape.push(...foodNames);
    }
  });
  
  console.log(`\n📊 Total foods to scrape: ${foodsToScrape.length}`);
  console.log(`\n🎯 Top priority foods:`);
  
  foodsToScrape.slice(0, 10).forEach((food, idx) => {
    console.log(`${idx + 1}. ${food}`);
  });
  
  // Her yemek için arama URL'si üret
  console.log(`\n\n📋 OpenCode TUI Komutları:\n`);
  console.log('─'.repeat(60));
  
  foodsToScrape.slice(0, 5).forEach((food, idx) => {
    const url = getYemekComSearchUrl(food);
    console.log(`\n${idx + 1}. ${food}:`);
    console.log(`use firecrawl to scrape "${url}" and extract the main recipe image URL`);
    console.log('─'.repeat(60));
  });
}

// Command line argument
const foodName = process.argv[2];

if (foodName) {
  scrapeYemekCom(foodName);
} else {
  batchScrape();
}
