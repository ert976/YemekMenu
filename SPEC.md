# Yemek Menü Uygulaması - Teknik Özellikler

## Proje Mimarisi

- Expo SDK 54.0.0
- React Native
- TypeScript
- Expo Router (app directory yapısı)
- SQLite veritabanı
- Expo Auth Session ile kimlik doğrulama

## Modüller

### 1. Kimlik Doğrulama Modülü
- Expo Auth Session kullanarak kullanıcı girişi
- Demo kullanıcı hesabı
- Kullanıcı oturum yönetimi

### 2. Yemek Derecelendirme Modülü
- 5 adet emoji ile yemek derecelendirme (hiç sevmiyorum - çok seviyorum)
- Derecelendirme geçmişi
- SQLite'de veri saklama

### 3. Veritabanı Modülü
- SQLite kullanarak yerel veri saklama
- Kullanıcı bilgileri
- Yemek listesi
- Kullanıcı yemek derecelendirmeleri
- Oluşturulan menüler

### 4. Menü Oluşturma Modülü
- Kullanıcı tercihlerine göre dengeli menü oluşturma
- Diyet tercihlerine göre filtreleme
- Haftalık/aylık menü planlama

### 5. Diyet Seçenekleri Modülü
- Vejetaryen, vegan, düşük karbonhidrat, glutensiz gibi seçenekler
- Kullanıcı tercihlerine göre menü özelleştirme

### 6. Ayarlar Modülü
- Verileri sıfırlama (yemek tercihleri, menüler)
- Demo hesabı verilerini sıfırlama

## Veritabanı Şemaları

### Users
- id (primary key)
- username
- email
- created_at

### Foods
- id (primary key)
- name (Türkçe yemek adı)
- image_url
- category
- is_vegetarian
- is_vegan
- nutritional_info

### UserRatings
- id (primary key)
- user_id (foreign key)
- food_id (foreign key)
- rating (1-5 arası)
- rated_at

### MealPlans
- id (primary key)
- user_id (foreign key)
- plan_data (JSON formatında menü)
- created_at
- diet_preference

## Kullanıcı Arayüzü

### Ekranlar
1. Giriş Ekranı
2. Yemek Derecelendirme Ekranı
3. Menü Oluşturma Ekranı
4. Diyet Seçenekleri Ekranı
5. Ayarlar Ekranı

### Yemek Derecelendirme Ekranı
- Yemek görseli
- Yemek adı
- 5 adet emoji butonu:
  - 😠 (hiç sevmiyorum)
  - 😟 (sevmiyorum)
  - 😐 (orta)
  - 😊 (seviyorum)
  - 😍 (çok seviyorum)

## Teknik Gereksinimler

- Expo SDK 54+
- React Native 0.81+
- SQLite 3+
- Minimum Android 7.0 (API level 24)
- Web tarayıcı desteği (Chrome, Firefox, Safari, Edge)

## Geliştirme Ortamı

- Node.js 18+
- Expo CLI
- TypeScript
- ESLint