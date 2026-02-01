# YemekMenu - Kişisel Menü Planlama Uygulaması

> 🍳 **React Native + Expo** ile geliştirilen kişisel menü planlama uygulaması
> 🎨 **197 yemek** seçeneği ile zengin menü oluşturma (Helal filtresi uygulandı)
> 🎯 **Stitch tasarım sistemi** ile modern ve kullanıcı dostu arayüz
> 📱 **Enterprise seviyesinde** performans ve stability
> 🖼️ **%100 görsel eşsizliği** - Tüm yemekler benzersiz görsellere sahip

## 📋 Proje Özellikleri

### 🍽️ **Yemek Veritabanı**
- **Toplam**: 197 yemek ✅ (Helal olmayanlar çıkarıldı: Kalamar, Midye)
- **Son Güncelleme**: 1 Şubat 2026 - Görsel Optimizasyon ve Helal Kontrolü Tamamlandı!
- **Görsel Benzersizliği**: **%100** - Tüm yemekler benzersiz görsellere sahip (19 tekrar düzeltildi)
- **Kategoriler**: 16 farklı kategori (Pilavlar, Makarna, Zeytinyağlılar, Mezeler, Deniz Ürünleri, Dolma & Sarma, İçecekler, İzgara & Mangal)
- **Diyet Seçenekleri**: Normal, Vejetaryen, Vegan, Düşük Karbonhidrat, Glütensiz, **Helal**
- **Fiyatlandırma**: 2026 Ocak market verilerine göre güncellendi (5-680₺ arası)
- **Besin Değerleri**: Tüm 197 yemeğe nutritionalInfo eklendi (kalori, protein, karbonhidrat, yağ)
- **Görsel Kayıtları**: image_registry.json ile 250+ kayıtlı görsel
- **Helal Filtresi**: Kabuklu deniz ürünleri (midye, kalamar) çıkarıldı
- **Esneklik**: Çorbalar artık tüm öğünlerde (kahvaltı, öğle, akşam) tercih edilebilir.

### 🎨 **Teknik Özellikler**
- **Platform**: React Native + Expo
- **Database**: AsyncStorage (Mobile) / LocalStorage (Web) - Kalıcı veri saklama
- **Type Safety**: TypeScript ile %95+ type coverage
- **Performance**: expo-image caching, useMemo/useCallback optimizasyonları, FlatList virtualization
- **Error Handling**: Merkezi errorHandler ve ErrorBoundary entegrasyonu
- **Integration**: MCP Server desteği ile AI asistan entegrasyonu

### 🎨 **UI/UX Özellikleri**
- **Tasarım Sistemi**: Stitch design system
- **Component'ler**: Modern, reusable, responsive
- **Animasyonlar**: Smooth transitions ve micro-interactions
- **Accessibility**: Screen reader desteği

### 🔧 **Geliştirme Özellikleri**
- **Menü Planlama**: Kişiselleştirilmiş menü oluşturma
- **Derecelendirme**: 5 yıldızında yemek derecelendirme
- **Filtreleme**: Diyet ve helal filtreleri
- **Performans**: Image lazy loading ve caching

## 🚀 GitHub Deposu

### 📂 **Depo Bilgileri**
- **Platform**: GitHub
- **Lisans**: MIT Lisansı
- **Dil**: TypeScript/JavaScript
- **Framework**: React Native + Expo
- **Durum**: Yayına Hazır

### 📈 **Proje Yapısı**
```
YemekMenu/
├── app/                 # Ana uygulama sayfaları
├── components/           # UI bileşenleri
├── constants/           # Tema ve sabitler
├── database/            # Veritabanı modülleri
├── utils/               # Yardımcı fonksiyonlar
├── types.ts             # Tip tanımlamaları
├── auth.tsx             # Kimlik doğrulama
├── mealPlanner.ts        # Menü planlama motoru
├── package.json          # Bağımlılıklar
├── README.md            # Proje açıklaması
└── TODO.md             # Görev listesi
```
YemekMenu/
├── app/                 # Ana uygulama
├── components/           # UI component'leri
├── constants/           # Theme ve constants
├── database/            # Database modülleri
├── utils/               # Utility fonksiyonları
├── types.ts             # Type definitions
├── auth.tsx             # Authentication
├── mealPlanner.ts        # Menü planlama
├── package.json          # Dependencies
├── README.md            # Proje açıklaması
└── TODO.md             # Görev listesi
```

### 🔧 **Geliştirme Akışı (Yeni)**

**Puanlama → Otomatik Menü:**
1. Kullanıcı PreferenceFlow'da yemekleri puanlar (🤢 😐 😍)
2. Rating'ler database'e kaydedilir
3. Otomatik menü oluşturulur (gıda mühendisi algoritması ile)
4. Menü dengeli, sağlıklı ve çeşitli olur

**Diyet Tercihleri:**
- Settings'ten diyet seçimi (normal, vegan, vegetarian, glutenfree)
- Diyet değişince menü otomatik güncellenir
- Helal filtresi de mevcut

## 🎯 **Kullanım**

### 📱 **Başlangıç**
```bash
# Repository'ı klonlayın
git clone https://github.com/username/yemekmenu.git

# Dependencies'ı yükleyin
npm install

# Expo CLI kurulumu
npm install -g @expo/cli

# Uygulamayı çalıştırın
npx expo start
```

### 🔧 **Geliştirme**
```bash
# Yeni yemek eklemek için database.ts dosyasını düzenleyin
# Component'leri components/ klasörüne ekleyin
# Theme'i constants/theme.ts dosyasından güncelleyin
```

### 🚀️ **Deployment**
```bash
# Web için
npx expo build

# Mobil için
npx expo build:android
npx expo build:ios

# Test için
npm test
```

## 📊 **Katkıda Olmak**

Bu proje açık kaynak kodlu ve katkıda katkıda geliştirilmeye açıktır! 🎉

- 🍽️ **Yemek önerileri**: Yemek veritabanını zenginletme
- 🎨 **UI iyileştirmeleri**: Modern arayüzler eklemek
- 🔧 **Yeni özellikler**: Sosyal özellikler, sharing, favoriler
- 📱 **Platform genişletmeleri**: Web, mobil, desktop

---

**YemekMenu - Lezzetli ve dengeli beslenme için kişisel menü planlama uygulamanız!** 🍳🥘🍴🥚
