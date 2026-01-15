# YemekMenu Projesi - Detaylı Analiz Raporu

## 📋 Proje Özeti
YemekMenu, kullanıcıların Türk yemeklerini derecelendirmesine ve kişiselleştirilmiş menü oluşturmasına olanak tanıyan bir React Native uygulamasıdır.

## Temel Bilgiler
- **Platform**: React Native (Expo SDK 54.0)
- **Dil**: TypeScript
- **Veritabanı**: SQLite (çevrimdışı destek)
- **Navigasyon**: Expo Router (app directory yapısı)
- **Kimlik Doğrulama**: Expo Auth Session

## 🏗️ Teknik Mimari

### 1. Teknoloji Stack'i
- React Native 0.81.5
- Expo SDK 54.0
- TypeScript 5.9.2
- Expo Router 6.0
- SQLite 16.0
- Expo Auth Session

### Bağımlılıklar
- **UI Framework**: React 19.1.0, React Native 0.81.5
- **Navigasyon**: Expo Router 6.0 (file-based routing)
- **Veritabanı**: expo-sqlite 16.0
- **Animasyon**: react-native-reanimated 4.1
- **Gesture Handling**: react-native-gesture-handler 2.28

### 2. Proje Yapısı
```
YemekMenu/
├── app/                          # Expo Router sayfaları
│   ├── (tabs)/                   # Tab navigasyon grubu
│   │   ├── index.tsx            # Yemek derecelendirme ekranı
│   │   ├── explore.tsx          # Menü oluşturma ekranı
│   │   ├── settings.tsx         # Ayarlar ekranı
│   │   └── _layout.tsx          # Tab layout
│   ├── _layout.tsx              # Root layout
│   ├── index.tsx                # Ana sayfa
│   └── modal.tsx                # Modal ekran
├── components/                   # Yeniden kullanılabilir bileşenler
│   ├── ui/                      # UI bileşenleri
│   ├── FoodRatingComponent.tsx  # Yemek derecelendirme bileşeni
│   ├── AdaptiveScreen.tsx       # Responsive ekran bileşeni
│   └── ResponsiveComponents.tsx # Responsive UI bileşenleri
├── hooks/                        # Custom React hooks
│   ├── useResponsive.ts         # Responsive tasarım hook'u
│   └── use-theme-color.ts       # Tema renk hook'u
├── constants/                    # Sabitler
│   ├── Colors.ts                # Renk tanımları
│   ├── theme.ts                 # Tema yapılandırması
│   └── responsive.ts            # Responsive breakpoint'ler
├── auth.tsx                      # Kimlik doğrulama modülü
├── database.ts                   # Veritabanı işlemleri (44KB)
├── mealPlanner.ts               # Menü planlama algoritması
└── stitch/                       # Tasarım dosyaları
```

## 💾 Veritabanı Mimarisi

### Tablo Şemaları

#### 1. users - Kullanıcı Tablosu
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE,
  password TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

#### 2. foods - Yemek Tablosu
```sql
CREATE TABLE foods (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  image_url TEXT,
  category TEXT,
  is_vegetarian BOOLEAN DEFAULT 0,
  is_vegan BOOLEAN DEFAULT 0,
  nutritional_info TEXT
)
```

#### 3. user_ratings - Derecelendirme Tablosu
```sql
CREATE TABLE user_ratings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  food_id INTEGER,
  rating INTEGER CHECK(rating >= 1 AND rating <= 5),
  rated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (food_id) REFERENCES foods(id)
)
```

#### 4. meal_plans - Menü Planı Tablosu
```sql
CREATE TABLE meal_plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  plan_data TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  diet_preference TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
)
```

### Veri Modeli
```
users (id PK, username UK, email UK, password, created_at)
  |
  +-- rates (user_id FK) --> user_ratings (id PK, user_id, food_id FK, rating, rated_at)
  |
  +-- creates (user_id FK) --> meal_plans (id PK, user_id, plan_data, created_at, diet_preference)

user_ratings (food_id FK) --> foods (id PK, name, image_url, category, is_vegetarian, is_vegan, nutritional_info)
```

## 🍽️ Yemek Kategorileri ve Veri Seti

Uygulama **258 adet** Türk yemeği içermektedir:

| Kategori | Yemek Sayısı | Örnekler |
|----------|-------------|----------|
| Çorbalar | 17 | Mercimek, Ezogelin, Yayla, Tarhana |
| Baklagiller | 17 | Kuru Fasulye, Barbunya, Nohut, Mercimek |
| Sebze Yemekleri | 20 | Taze Fasulye, Patlıcan Musakka, Bamya, Ispanak |
| Hamur İşleri | 20 | Mantı, Pide, Lahmacun, Börek, Gözleme |
| Sütlü Tatlılar | 20 | Sütlaç, Kazandibi, Tavuk Göğsü, Muhallebi |
| Şerbetli Tatlılar | 20 | Baklava, Künefe, Kadayıf, Revani |
| Salatalar | 20 | Çoban, Gavurdağı, Ezme, Kısır |
| Yan Ürünler | 20 | Pilav, Bulgur, Makarna, Cacık |
| Kahvaltı | 18 | Menemen, Omlet, Tost, Börek |

> **Note**: Tüm yemekler `is_vegetarian` ve `is_vegan` bayrakları ile işaretlenmiştir, bu sayede diyet filtreleme kolayca yapılabilir.

## 🎯 Temel Özellikler

### 1. Kimlik Doğrulama Sistemi
**Dosya**: `auth.tsx`

```typescript
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}
```

**Özellikler:**
- ✅ Demo kullanıcı desteği (demokullanici / demoparola)
- ✅ Context API ile global state yönetimi
- ✅ Otomatik oturum başlatma
- ⚠️ **Şifre hashleme yok (güvenlik riski)**

### 2. Yemek Derecelendirme Sistemi
**Dosya**: `components/FoodRatingComponent.tsx`

**Derecelendirme Ölçeği:**
- 😠 1 - Hiç sevmiyorum
- 😟 2 - Sevmiyorum
- 😐 3 - Orta
- 😊 4 - Seviyorum
- 😍 5 - Çok seviyorum

**Akış:**
1. Kullanıcıya sırayla yemekler gösterilir
2. Her yemek için emoji ile derecelendirme yapılır
3. Derecelendirme SQLite'a kaydedilir
4. Otomatik olarak sonraki yemeğe geçilir
5. Tüm yemekler derecelendirildiğinde tamamlanma mesajı gösterilir

### 3. Menü Planlama Algoritması
**Dosya**: `mealPlanner.ts`

**Diyet Türleri:**
```typescript
type DietType = 'normal' | 'vegetarian' | 'vegan' | 'lowcarb' | 'glutenfree';
```

**Algoritma Mantığı:**
```
Kullanıcı Derecelendirmeleri
        ↓
   Diyet Filtreleme
        ↓
    Diyet Türü?
        ↓
    ┌───┴───┬──────┬──────────┬──────────┐
    ↓       ↓      ↓          ↓          ↓
Vegetarian Vegan Low Carb Gluten Free Normal
(is_veg=1) (vegan=1) (No Hamur) (No Hamur) Tümü
    ↓       ↓      ↓          ↓          ↓
    Puanlara Göre Sıralama
        ↓
    Öğün Bazlı Seçim
        ↓
    7 Günlük Menü
        ↓
  Veritabanına Kaydet
```

**Öğün Seçim Stratejisi:**
- **Kahvaltı**: Yan Ürün, Hamur İşi, Zeytinyağlı kategorilerinden
- **Öğle Yemeği**: Tatlı ve Yan Ürün hariç tüm kategorilerden
- **Akşam Yemeği**: Tatlı ve Yan Ürün hariç tüm kategorilerden

### 4. Platform Desteği

**Web Platform:**
- localStorage tabanlı simülasyon
- SQL sorguları mock edilmiş
- Demo veri otomatik yüklenir

**Mobil Platform (Android/iOS):**
- Gerçek SQLite veritabanı
- Çevrimdışı çalışma desteği
- Veri persistence

## 🎨 Kullanıcı Arayüzü

### Ekranlar

#### 1. Ana Ekran (Yemek Derecelendirme)
**Dosya**: `app/(tabs)/index.tsx`

- Yemek görseli (250px yükseklik)
- Yemek adı ve kategorisi
- 5 emoji derecelendirme butonu
- İlerleme göstergesi (X / Toplam)

#### 2. Menü Oluşturma Ekranı
**Dosya**: `app/(tabs)/explore.tsx`

**Bileşenler:**
- Diyet seçenekleri (horizontal scroll)
- "Dengeli Menü Oluştur" butonu
- Oluşturulan menü önizlemesi (7 günlük)
- Önerilen yemekler listesi (top 5)
- Geçmiş menüler

#### 3. Ayarlar Ekranı
**Dosya**: `app/(tabs)/settings.tsx`

**Özellikler:**
- Yemek tercihlerini sıfırlama
- Tüm verileri sıfırlama (destructive)
- Çıkış yapma
- Uygulama bilgisi

### Responsive Tasarım
**Dosya**: `hooks/useResponsive.ts`

**Breakpoint'ler:**
```typescript
const BREAKPOINTS = {
  xs: 0,    // Mobil
  sm: 640,  // Küçük tablet
  md: 768,  // Tablet
  lg: 1024, // Laptop
  xl: 1280, // Desktop
  xxl: 1536 // Büyük ekran
}
```

## ✅ Güçlü Yönler

### 1. Kod Organizasyonu
- ✅ Modüler yapı (auth, database, mealPlanner ayrı dosyalar)
- ✅ TypeScript kullanımı (tip güvenliği)
- ✅ Expo Router ile modern routing
- ✅ Component-based architecture

### 2. Kullanıcı Deneyimi
- ✅ Sezgisel emoji tabanlı derecelendirme
- ✅ Otomatik ilerleme (derecelendirme sonrası)
- ✅ Responsive tasarım desteği
- ✅ Çevrimdışı çalışma (SQLite)

### 3. Veri Yönetimi
- ✅ Kapsamlı Türk yemekleri veri seti (258 yemek)
- ✅ Diyet filtreleme (5 farklı diyet)
- ✅ Foreign key constraints
- ✅ Veri sıfırlama özellikleri

### 4. Platform Uyumluluğu
- ✅ Web, iOS, Android desteği
- ✅ Platform-specific kod yönetimi
- ✅ Mock veritabanı (web için)

## ⚠️ Kritik Sorunlar ve İyileştirme Önerileri

### 🔴 Yüksek Öncelikli Sorunlar

#### 1. Güvenlik Açıkları
> ⚠️ **Şifre Güvenliği**: Şifreler düz metin olarak saklanıyor!

**Sorun:**
```typescript
// auth.tsx - Line 52
const login = async (username: string, password: string) => {
  const userData = await getUser(username, password);
  // Şifre hashleme yok!
}
```

**Çözüm:**
```typescript
import bcrypt from 'bcryptjs';

// Kayıt sırasında
const hashedPassword = await bcrypt.hash(password, 10);

// Giriş sırasında
const isValid = await bcrypt.compare(password, user.password);
```

#### 2. Veritabanı Hatası - Syntax Error
> ⚠️ **database.ts dosyasında syntax hatası var!**

**Sorun** (`database.ts:57-227`):
```typescript
getAllAsync: async (sql: string, params?: any[]) => {
  // ...
  return [];
}
  { id: 104, name: 'Barbunya Yemeği', ... },  // ❌ Hatalı satır!
  // ... 170 satır daha yemek verisi
};
```

**Açıklama**: `getAllAsync` fonksiyonu kapanmadan önce yemek verileri eklenmiş. Bu kod çalışmaz!

**Çözüm:**
```typescript
getAllAsync: async (sql: string, params?: any[]) => {
  if (sql.includes('foods')) {
    return COMMON_FOODS;
  }
  return [];
}
}; // ✅ Fonksiyon burada kapanmalı
// Yemek verileri COMMON_FOODS dizisine eklenmeli
```

#### 3. Eksik Hata Yönetimi
**Sorun:**
```typescript
// mealPlanner.ts - Line 26
export const generateBalancedMenu = async (...) => {
  try {
    const userRatings: any = await getUserRatings(userId);
    // Eğer userRatings boşsa ne olacak?
    // Eğer yeterli yemek yoksa?
  } catch (error) {
    console.error('Menü oluşturma hatası:', error);
    throw error; // Sadece console.error yeterli değil
  }
};
```

**Çözüm:**
```typescript
export const generateBalancedMenu = async (...) => {
  try {
    const userRatings = await getUserRatings(userId);

    if (!userRatings || userRatings.length === 0) {
      throw new Error('Lütfen önce yemekleri derecelendirin');
    }

    if (userRatings.length < 21) { // 7 gün * 3 öğün
      throw new Error('En az 21 yemek derecelendirilmeli');
    }

    // ...
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert('Hata', error.message);
    }
    throw error;
  }
};
```

### 🟡 Orta Öncelikli İyileştirmeler

#### 4. Menü Algoritması Geliştirmeleri
**Sorun**: Menü oluşturma tamamen rastgele, beslenme dengesi yok.

```typescript
// Mevcut kod - Line 60
dailyMeal.breakfast = breakfastOptions[Math.floor(Math.random() * breakfastOptions.length)];
```

**Öneriler:**
- ✅ Aynı yemeğin tekrar seçilmemesi
- ✅ Kalori dengesi (günlük hedef kalori)
- ✅ Protein/karbonhidrat/yağ dengesi
- ✅ Kategori çeşitliliği (her gün farklı kategoriler)

**Geliştirilmiş Algoritma:**
```typescript
interface NutritionalBalance {
  dailyCalories: number;
  proteinRatio: number;
  carbRatio: number;
  fatRatio: number;
}

const generateBalancedMenuV2 = async (
  userId: number,
  dietPreference: DietType,
  nutritionalGoals?: NutritionalBalance
) => {
  const usedFoodIds = new Set<number>();
  const categoryUsage = new Map<string, number>();

  for (let day = 1; day <= 7; day++) {
    // Kategori çeşitliliği için en az kullanılan kategorileri seç
    const leastUsedCategories = getLeastUsedCategories(categoryUsage);

    // Kalori hedefine göre yemek seç
    const dailyMeal = selectMealsWithCalorieTarget(
      filteredFoods,
      usedFoodIds,
      leastUsedCategories,
      nutritionalGoals
    );

    meals.push(dailyMeal);
  }
};
```

#### 5. Type Safety İyileştirmeleri
**Sorun**: Çok fazla `any` kullanımı

```typescript
// Mevcut kod
const userRatings: any = await getUserRatings(userId);
const food: any = await getFoodById(foodId);
```

**Çözüm:**
```typescript
// types.ts
export interface Food {
  id: number;
  name: string;
  image_url: string;
  category: FoodCategory;
  is_vegetarian: boolean;
  is_vegan: boolean;
  nutritional_info?: NutritionalInfo;
}

export interface UserRating {
  id: number;
  user_id: number;
  food_id: number;
  rating: 1 | 2 | 3 | 4 | 5;
  rated_at: string;
  name?: string;
  image_url?: string;
}

// Kullanım
const userRatings: UserRating[] = await getUserRatings(userId);
const food: Food | null = await getFoodById(foodId);
```

#### 6. Performans Optimizasyonu
**Sorun**: Her yemek için ayrı veritabanı sorgusu

```typescript
// mealPlanner.ts - Line 96
for (const foodId of foodIds) {
  const food: any = await getFoodById(foodId); // ❌ N+1 sorgu problemi
  if (food) {
    foods.push(food);
  }
}
```

**Çözüm:**
```typescript
// Tek sorguda tüm yemekleri al
const getFoodsByIds = async (foodIds: number[]): Promise<Food[]> => {
  const placeholders = foodIds.map(() => '?').join(',');
  const result = await db.getAllAsync(
    `SELECT * FROM foods WHERE id IN (${placeholders})`,
    foodIds
  );
  return result as Food[];
};

// Kullanım
const foods = await getFoodsByIds(foodIds);
```

### 🟢 Düşük Öncelikli İyileştirmeler

#### 7. UI/UX İyileştirmeleri
**Öneriler:**
- ✅ Loading state'leri (skeleton screens)
- ✅ Empty state'ler (henüz veri yok mesajları)
- ✅ Animasyonlar (react-native-reanimated kullanımı)
- ✅ Haptic feedback (derecelendirme sırasında)
- ✅ Dark mode desteği

#### 8. Test Coverage
**Sorun**: Hiç test yok!

**Öneriler:**
```typescript
// __tests__/mealPlanner.test.ts
describe('generateBalancedMenu', () => {
  it('should create 7-day menu', async () => {
    const menu = await generateBalancedMenu(1, 'normal', 7);
    expect(menu.meals).toHaveLength(7);
  });

  it('should respect vegetarian diet', async () => {
    const menu = await generateBalancedMenu(1, 'vegetarian', 7);
    menu.meals.forEach(day => {
      expect(day.breakfast.is_vegetarian).toBe(true);
      expect(day.lunch.is_vegetarian).toBe(true);
      expect(day.dinner.is_vegetarian).toBe(true);
    });
  });
});
```

#### 9. Kod Tekrarı Azaltma
**Sorun**: Platform kontrolü her yerde tekrarlanıyor

```typescript
// database.ts - Tekrarlanan kod
if (Platform.OS === 'web') {
  // Web kodu
} else {
  // Mobil kodu
}
```

**Çözüm:**
```typescript
// database/index.ts
import { WebDatabase } from './web';
import { MobileDatabase } from './mobile';

export const db = Platform.OS === 'web'
  ? new WebDatabase()
  : new MobileDatabase();
```

#### 10. Yemek Görselleri
**Sorun**: Tüm görseller Wikipedia'dan, bazıları kırık linkler olabilir

**Öneriler:**
- ✅ Görselleri local assets'e taşı
- ✅ Placeholder görseller ekle
- ✅ Image caching (expo-image kullanılıyor ✅)
- ✅ Lazy loading

## 📊 Kod Metrikleri

| Metrik | Değer | Durum |
|--------|-------|-------|
| Toplam Dosya | ~30 | ✅ İyi organize |
| TypeScript Kullanımı | %100 | ✅ Mükemmel |
| Kod Satırı (database.ts) | 428 | ⚠️ Çok büyük, bölünmeli |
| Yemek Sayısı | 258 | ✅ Zengin veri seti |
| Test Coverage | 0% | ❌ Kritik eksiklik |
| Type Safety | ~60% | ⚠️ Çok fazla any |

## 🚀 Öncelikli Aksiyon Planı

### Hemen Yapılması Gerekenler
1. ✅ **database.ts** syntax hatasını düzelt (Kritik!)
2. ✅ Şifre hashleme ekle (Güvenlik)
3. ✅ Type definitions oluştur (Kod kalitesi)

### Kısa Vadede (1-2 hafta)
4. Hata yönetimi iyileştir
5. Menü algoritmasını geliştir
6. Performans optimizasyonu (N+1 sorgu)

### Orta Vadede (1 ay)
7. Test coverage ekle
8. UI/UX iyileştirmeleri
9. Kod refactoring (database.ts bölme)

### Uzun Vadede (2-3 ay)
10. Kalori hesaplama özelliği
11. Besin değerleri veritabanı
12. Sosyal özellikler (menü paylaşma)

## 🎯 Sonuç

YemekMenu projesi, sağlam bir temel üzerine kurulmuş, kullanıcı dostu bir uygulamadır. Ancak:

### ✅ Güçlü Yönler
- Modern teknoloji stack'i (Expo, TypeScript)
- Zengin Türk yemekleri veri seti
- Çevrimdışı destek
- Responsive tasarım

### ⚠️ İyileştirme Gereken Alanlar
- **Kritik**: Syntax hatası ve güvenlik açıkları
- **Önemli**: Type safety ve hata yönetimi
- **İsteğe Bağlı**: Test coverage ve UI polish

### 📈 Potansiyel
Yukarıdaki iyileştirmeler yapıldığında, bu uygulama **production-ready** bir ürün haline gelebilir ve App Store/Play Store'da yayınlanabilir.

---

**Rapor Tarihi**: 13 Ocak 2026
**Analiz Edici**: AI Assistant
**Versiyon**: 1.0.0
