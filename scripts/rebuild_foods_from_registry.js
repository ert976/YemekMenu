const fs = require('fs');

// Image registry'den tüm güncel görselleri al
const imageRegistry = JSON.parse(fs.readFileSync('./database/image_registry.json', 'utf8'));

// Mevcut foods.ts dosyasını oku (silk ilk satırlar)
const foodsContent = fs.readFileSync('./database/foods.ts', 'utf8');
const firstLines = foodsContent.split('\n').slice(0, 3).join('\n'); // import lar

console.log("🔄 COMMON_FOODS array'ini image_registry ile yeniden oluştur...\n");

// COMMON_FOODS array'ini image_registry'den oluştur
const commonFoodsArray = Object.entries(imageRegistry).map(([name, image_url], index) => {
    // Bazı bilgileri korumak için mevcut array'den bul
    const category = getCategoryFromName(name);
    const foodData = {
        id: index + 1,
        name: name,
        image_url: image_url,
        category: category,
        is_vegetarian: isVegetarianCategory(category),
        is_vegan: isVeganCategory(category),
        is_halal: true,
        priceLevel: getPriceLevel(category)
    };

    // Estimated price ekle
    foodData.estimatedPrice = getPriceByCategory(category, foodData.priceLevel);
    
    // Nutritional info ekle
    foodData.nutritionalInfo = getNutritionByCategory(category);
    
    return foodData;
});

console.log(`📊 Toplam oluşturulan yiyecek: ${commonFoodsArray.length}`);

// Kategorilere göre yiyecek sayısı
const categoryStats = {};
commonFoodsArray.forEach(food => {
    categoryStats[food.category] = (categoryStats[food.category] || 0) + 1;
});

console.log(`📂 Kategori dağılımı:`);
Object.entries(categoryStats).forEach(([category, count]) => {
    console.log(`   ${category}: ${count} yiyecek`);
});

// Array'i JavaScript formatında oluştur
const arrayString = JSON.stringify(commonFoodsArray, null, 2)
    .replace(/"/g, "'") // Double tırnakları single tırnağa çevir
    .replace(/'(\w+)':/g, '$1:'); // Property tırnaklarını kaldır

// Yeni foods.ts dosyası oluştur
const newContent = `${firstLines}

export const COMMON_FOODS: Food[] = ${arrayString};

export const getAllFoods = async (): Promise<Food[]> => {
  return COMMON_FOODS.map((f) => ({
    ...f,
    nutritionalInfo:
      f.nutritionalInfo || getNutritionByCategory(f.category as string),
    estimatedPrice: f.estimatedPrice || getPriceByCategory(f.category as string, f.priceLevel),
  }));
};

export const getFoodById = async (id: number): Promise<Food | null> => {
  const foods = await getAllFoods();
  return foods.find((f) => f.id === id) || null;
};

${foodsContent.split('\n').slice(-30).join('\n')}`; // Son 30 satır (diğer fonksiyonlar)

fs.writeFileSync('./database/foods.ts', newContent);

console.log(`\n🎉 COMMON_FOODS tamamıyla yeniden oluşturuldu!`);
console.log(`✅ Tüm yiyecekler image_registry'den güncel görseller kullanıyor`);

// Profesyonel kaynaklardan gelen örnekleri göster
const professionalExamples = commonFoodsArray.filter(f => 
    f.image_url.includes('lezzet.com.tr') || 
    f.image_url.includes('kisikatesakademi.com.tr') || 
    f.image_url.includes('droetker.com.tr')
).slice(0, 15);

console.log(`\n🌟 PROFESYONEL GÖRSELLERDEN ÖRNEKLER:`);
professionalExamples.forEach(food => {
    const source = food.image_url.includes('lezzet.com.tr') ? '🌟 Lezzet' : 
                   food.image_url.includes('kisikatesakademi.com.tr') ? '👨‍🍳 Kişikate' :
                   food.image_url.includes('droetker.com.tr') ? '🍳 Dr. Oetker' : '📷 Diğer';
    console.log(`   ${source} ${food.name} (${food.category})`);
});

// Yardımcı fonksiyonlar
function getCategoryFromName(name) {
    if (name.includes('Çorba') || name.includes('Corba')) return 'Çorbalar';
    if (name.includes('Kebap') || name.includes('Köfte')) return 'Kebaplar';
    if (name.includes('Pilav') || name.includes('Bulgur') || name.includes('Nohut')) return 'Baklagiller';
    if (name.includes('Börek') || name.includes('Gözleme') || name.includes('Pide') || name.includes('Simit')) return 'Kahvaltı';
    if (name.includes('Kek') || name.includes('Pasta') || name.includes('Tatlı')) return 'Tatlılar';
    if (name.includes('Sebze') || name.includes('Fasulye') || name.includes('Ispanak') || name.includes('Patlıcan')) return 'Sebze Yemekleri';
    if (name.includes('Tavuk') || name.includes('Kanat') || name.includes('Şiş') || name.includes('Izgara')) return 'Izgara & Mangal';
    if (name.includes('Salata')) return 'Salatalar';
    if (name.includes('İçecek') || name.includes('Ayran') || name.includes('Çay')) return 'İçecekler';
    return 'Diğer';
}

function isVegetarianCategory(category) {
    return !['Kebaplar', 'Izgara & Mangal'].includes(category);
}

function isVeganCategory(category) {
    return ['Çorbalar', 'Baklagiller', 'Sebze Yemekleri', 'Salatalar', 'İçecekler'].includes(category);
}

function getPriceLevel(category) {
    switch(category) {
        case 'Çorbalar': return 1;
        case 'Tatlılar': return 2;
        case 'Kebaplar': return 3;
        case 'Izgara & Mangal': return 2;
        case 'Kahvaltı': return 1;
        case 'Sebze Yemekleri': return 1;
        case 'Baklagiller': return 1;
        case 'Salatalar': return 1;
        case 'İçecekler': return 1;
        default: return 1;
    }
}

function getPriceByCategory(category, priceLevel) {
    const basePrices = {
        'Çorbalar': 18,
        'Tatlılar': 25,
        'Kebaplar': 35,
        'Izgara & Mangal': 30,
        'Kahvaltı': 20,
        'Sebze Yemekleri': 22,
        'Baklagiller': 18,
        'Salatalar': 15,
        'İçecekler': 10,
        'Diğer': 20
    };
    return basePrices[category] || 20;
}

function getNutritionByCategory(category) {
    const nutritionMap = {
        'Çorbalar': { calories: 120, protein: 6, carbs: 18, fat: 3 },
        'Tatlılar': { calories: 280, protein: 4, carbs: 45, fat: 10 },
        'Kebaplar': { calories: 350, protein: 25, carbs: 15, fat: 20 },
        'Izgara & Mangal': { calories: 300, protein: 28, carbs: 8, fat: 18 },
        'Kahvaltı': { calories: 250, protein: 12, carbs: 30, fat: 12 },
        'Sebze Yemekleri': { calories: 180, protein: 8, carbs: 22, fat: 8 },
        'Baklagiller': { calories: 200, protein: 12, carbs: 28, fat: 6 },
        'Salatalar': { calories: 120, protein: 4, carbs: 18, fat: 6 },
        'İçecekler': { calories: 80, protein: 2, carbs: 15, fat: 1 },
        'Diğer': { calories: 220, protein: 10, carbs: 25, fat: 10 }
    };
    return nutritionMap[category] || nutritionMap['Diğer'];
}

console.log(`\n📝 Yeni foods.ts dosyası image_registry ile senkronize edildi!`);