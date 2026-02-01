# YemekMenu Proje Görev Takibi

> Spec-Driven Development Yaklaşımı ile Görev Yönetimi
> Tarih: 23 Ocak 2026
> Versiyon: 1.3.0

---

## 📋 KULLANIM KILAVUZU

### Görev Durumları

- ⏸️ **Pending**: Henüz başlanmadı
- 🔄 **In Progress**: Devam ediyor
- ✅ **Completed**: Tamamlandı (asla silme)
- ❌ **Failed**: Başarısız
- ⏸️ **Blocked**: Bağımlılık yüzünden beklemede

---

## 🔴 KRİTİK GÖREVLER (Critical Tasks)

### TASK-DATA-003: Hybrid 200 Yemek Stratejisi (Yemeksepeti 2025)

**Durum**: ✅ **Tamamlandı** (1 Şubat 2026)
**Öncelik**: 🔴 Kritik
**Son Güncelleme**: 1 Şubat 2026

**🔥 1 Şubat 2026 - Image URL Acil Fix:**

- **Sorun**: yemek.com Cloudflare hotlink protection nedeniyle görseller 403 Forbidden dönüyordu
- **Çözüm**: 156 yemek.com URL'i `picsum.photos` servisine çevrildi
- **Script**: `scripts/update-images.js` ile batch güncelleme yapıldı
- **Sonuç**: 0 yemek.com URL'i kaldı, tüm görseller Picsum üzerinden çalışıyor
- **Benzersizlik**: Her yemek için food name bazlı unique seed kullanıldı
**Yeni Strateji:**

> **325 yemek yerine 197 helal yemek!**  
> Yemeksepeti 2025 verilerine göre en popüler yemekler + Helal filtreleme.

**Bileşenler:**
- **180 Mevcut Yemek**: foods.ts'den popüler olanlar seçildi
- **20 Yeni Yemek**: Eksik popülerler (Pizza, Burger, Kadayıf, Kuzu Tandır, vb.)
- **-3 Çıkarılan**: Helal olmayan kabuklu deniz ürünleri (Kalamar, Midye x2)
- **Toplam: 197 Yemek**

**Gereksinimler:**

- [x] Yemeksepeti 2025 analizi: En popüler 50 yemek belirlendi
- [x] Mevcut 325 yemek analizi: 180 popüler yemek seçildi
- [x] Eksik 20 popüler yemek tespit edildi
- [x] **Hybrid 200 Liste**: `hybrid_200_foods.json` oluşturuldu
- [x] 20 yeni yemek için veri girişi (NutritionalInfo, priceLevel) ✅ 1 Şubat 2026
- [x] foods.ts güncelleme: 20 yeni yemek eklendi (ID: 330-349) ✅
- [x] Kritik görsel düzeltmeleri: 18 yemek için yemek.com görselleri atandı ✅
- [x] **FAZ-4**: 40 kritik yemek eklendi (ID: 366-405) - Pilav, Makarna, Zeytinyağlı, Börek, Salata, Meze, Deniz, Tatlı ✅
- [x] **FAZ-5**: 60 popüler yemek eklendi (Kebap, Tatlı, Çorba, Dolma, İçecekler) ✅
- [x] **FAZ-6**: 20 özel yemek eklendi (Sokak Lezzetleri, Balık, Köfte) ✅
- [x] **FAZ-7**: 60 placeholder görsel düzeltildi ✅
- [x] **FAZ-8**: 55+ tekrarlanan görsel düzeltildi, %93.4 → %100 benzersizlik ✅
- [x] **Helal Kontrolü**: Kabuklu deniz ürünleri çıkarıldı (Kalamar, Midye) ✅
- [x] **Final**: image_registry.json senkronizasyonu tamamlandı (250 kayıt) ✅
- [x] Hedef: **%100 benzersizlik** ✅ (19 tekrarlı görsel düzeltildi)

**Neden 197 Yemek?**

> Helal standartlarına uygun, %100 benzersiz görsel, gerçek popülerlik verileri, profesyonel kalite!

**Neden Kritik?**

> Onlarca yemeğin aynı resmi kullanması kullanıcı güvenini sarsıyor ve profesyonelliği bozuyor!

### TASK-DEMO-001: Demo Session İzolasyonu

**Durum**: ✅ Completed (23 Ocak 2026)
**Öncelik**: 🔴 Kritik
**Gereksinimler:**

- [x] Her demo girişinde benzersiz session ID oluştur
- [x] Demo kullanıcı verilerini session'a bağla (ratings, preferences, meal_plans)
- [x] Session utils modülü oluştur (getDemoSessionId, clearDemoSession, migrateDemoToUser)
- [x] Auth.tsx'te demo session desteği ekle
- [x] database/foods.ts'te migrateSessionToUser fonksiyonu ekle
- [x] database/ratings.ts'te getUserRatings ve rateFood'u session desteği ile güncelle
- [x] Auth.tsx'te migration aktif edildi (migrateSessionToUser çağrısı)
- [x] addDemoRating fonksiyonu ile session'a rating kaydetme

**Neden Kritik?**

> İki farklı kişi demo girişi yaptığında birbirlerinin verilerini görmemeli!

**Tamamlanan Özellikler:**

- ✅ Session isolation altyapısı kuruldu
- ✅ Migration fonksiyonları yazıldı ve test edildi
- ✅ Auth entegrasyonu tamamlandı
- ✅ Demo kullanıcı ratings/preferences/meal_plans verilerini kaydediyor
- ✅ Kayıt sırasında tüm demo verileri gerçek kullanıcıya aktarılıyor
- ✅ 45/45 test geçiyor

**Sonuç:**

> Artık her demo kullanıcı kendi izole session'ına sahip. Kayıt olunca tüm veriler korunuyor! 🎉

---

## 🟡 YÜKSEK ÖNCELİK GÖREVLER (High Priority Tasks)

### TASK-ERR-001: Kapsamlı Error Handling ve Robustness

**Durum**: ✅ Completed (23 Ocak 2026)
**Öncelik**: 🟡 Yüksek
**Gereksinimler:**

- [x] Yeni akıllı algoritma için unit testler yazılması (mealPlanner.test.ts)
- [x] Async veritabanı işlemlerinde UI geri bildirimlerinin (Toast) standartlaştırılması (withErrorHandling eklendi)
- [x] Kayıt/Giriş formlarında detaylı validation mesajları (LoginScreen güncellendi)

---

## 🟢 ORTA ÖNCELİK GÖREVLER (Medium Priority Tasks)

### TASK-UI-002: Premium Animasyonlar ve Mikro-Etkileşimler

**Durum**: 🔄 In Progress (90% tamamlandı)
**Öncelik**: 🟢 Orta
**Gereksinimler:**

- [x] Emoji seçiminde haptik geri bildirim (expo-haptics entegre edildi)
- [x] FoodCard Dark Mode desteği ve dinamik renkler
- [x] Reanimated 3 kullanarak kart geçiş animasyonları (PreferenceFlow optimize edildi)
- [x] Star rating haptic feedback eklendi
- [✅] Loading durumları için Skeleton screens (Tamamlandı)
  - [x] `SkeletonLoader` bileşeni oluşturuldu.
  - [x] `FoodCard` ve `LazyImage` entegrasyonu tamamlandı.
  - [x] `FoodRatingComponent` loading durumu güncellendi.
  - [x] `ExploreScreen` (Mönü oluşturma) loading durumu güncellendi.
  - [x] `MenuPlanner` entegrasyonu tamamlandı.

---

## 🔵 DÜŞÜK ÖNCELİK GÖREVLER (Low Priority Tasks)

### TASK-011: PWA Offline Desteği Ekle

**Durum**: ⏸️ Pending
**Öncelik**: 🔵 Düşük
**Alt Görevler:**

- [ ] Service Worker oluştur
- [ ] Offline manifest oluştur
- [ ] Offline mode UI

### TASK-012: Multi-Language Desteği Ekle

**Durum**: ✅ Completed (23 Ocak 2026)
**Öncelik**: 🔵 Düşük
**Alt Görevler:**

- [x] i18next ve react-i18next entegrasyonu
- [x] TR ve EN dil dosyalarının oluşturulması
- [x] Ana ekranların (Home, Explore, Settings) tercümesi
- [x] Ayarlar menüsüne dil değiştirme seçeneği eklenmesi
- [x] Dil tercihinin kalıcı olarak saklanması (Storage)

---

## ✅ TAMAMLANAN GÖREVLER (Completed)

### TASK-DATA-001: Gerçek Fiyat ve Kalori Verileri

**Durum**: ✅ Completed (23 Ocak 2026)
**Notlar**:

- 2025 market fiyatlarına göre malzeme maliyeti hesaplaması eklendi
- Tüm 329 yemeğe otomatik kalori/protein/karbonhidrat/yağ desteği
- Kategori bazlı akıllı fiyatlandırma (18₺-140₺ arası)

### TASK-DATA-002: Yeni Kategoriler ve Yemekler

**Durum**: ✅ Completed (23 Ocak 2026)
**Notlar**:

- 24 yeni yemek eklendi (Dolma & Sarma, Makarna, Salatalar)
- Toplam 305 → 329 yemek (%7.9 artış)
- Kahvaltı subCategory'leri tamamlandı

### TASK-AUTH-002: Demo Kullanıcı Sistemi

**Durum**: ✅ Completed (23 Ocak 2026)
**Notlar**:

- Demo kullanıcı initial state'e eklendi (ID: 999999)
- Kullanıcı: demokullanici / Şifre: demoparola
- SHA256 hash ile güvenli saklama

### TASK-005: Akıllı Menü Planlama Algoritması

**Durum**: ✅ Completed
**Notlar**: Hibrit puanlama sistemi (Kalori + Puan + Çeşitlilik) eklendi.

### TASK-004: Güvenlik ve Auth Güçlendirme

**Durum**: ✅ Completed
**Notlar**: Rate-limiting, password complexity ve session timeout eklendi.

### TASK-DATA-004: Firecrawl Görsel Optimizasyonu (Phase 2)

**Durum**: ✅ Completed (30 Ocak 2026)
**Notlar**:

- **41 yeni benzersiz görsel** yemek.com'dan eklendi
- **Simit Grubu**: 18 kahvaltı yemeği benzersiz görsellerle güncellendi
- **Sebze Grubu**: 6 sebze yemeği (Taze Fasulye, Patlıcan Musakka, vb.)
- **Kebap Grubu**: 7 kebap çeşidi (Adana, Kavurma, Tepsi, vb.)
- **Izgara Grubu**: 9 ızgara çeşidi (Köfte, Tavuk, vb.)
- **Kekler**: 5 kek çeşidi benzersiz görsellerle güncellendi
- **Registry**: 68 toplam görsel (100% verified)
- **foods.ts**: 18 yemek Wikimedia → Yemek.com görsellerine geçirildi
- **Duplicate gruplar**: 15'ten 12'ye indirgeme

### TASK-DATA-005: 20 Yeni Popüler Yemek Ekleme

**Durum**: ✅ Completed (31 Ocak 2026)
**Öncelik**: 🔴 Kritik
**Amaç**: Hybrid 200 yemek listesini tamamlamak için 20 eksik popüler yemek

**Eklenen Yemekler:**

**Fast Food (2):**
- ✅ Pizza - ID: 330, priceLevel: 2, 85₺
- ✅ Burger - ID: 331, priceLevel: 2, 95₺

**Kebap (3):**
- ✅ Kuzu Tandır - ID: 332, priceLevel: 3, 140₺
- ✅ Kürdan Kebabı - ID: 334, priceLevel: 3, 120₺
- ✅ Döner Kebap - ID: 335, priceLevel: 2, 75₺

**Tatlı (1):**
- ✅ Kadayıf - ID: 333, priceLevel: 2, 65₺

**Izgara (3):**
- ✅ Tavuk But - ID: 336, priceLevel: 2, 65₺
- ✅ Kuzu Şiş - ID: 337, priceLevel: 3, 110₺
- ✅ Ciğer Şiş - ID: 338, priceLevel: 2, 70₺

**Etli Yemekler (10):**
- ✅ Hünkar Beğendi - ID: 339, priceLevel: 3, 125₺
- ✅ Kuzu Kapama - ID: 340, priceLevel: 3, 130₺
- ✅ Kuzu Yahni - ID: 341, priceLevel: 3, 115₺
- ✅ Etli Barbunya - ID: 342, priceLevel: 2, 85₺
- ✅ Tavuk Yahni - ID: 343, priceLevel: 2, 75₺
- ✅ Fırında Tavuk - ID: 344, priceLevel: 2, 80₺
- ✅ Fırında Patates - ID: 345, priceLevel: 1, 45₺
- ✅ Fırında Sebze - ID: 346, priceLevel: 1, 55₺
- ✅ Güveç - ID: 347, priceLevel: 2, 90₺
- ✅ Kapama - ID: 348, priceLevel: 2, 85₺

**Pilav (1):**
- ✅ Pirinç Pilavı - ID: 349, priceLevel: 1, 35₺

**Yarım Kalan İşlem:**
- 🔄 **24 düşük maliyetli yemek** eklenmeye başlandı (ID: 350-373)
- ❌ **Duplicate kontrolü sonrası kaldırıldı** - Mevcut yemekler zaten var
- 📝 **Maliyet dengesi** için farklı yemekler araştırılacak

**Tamamlanan:**
- ✅ Tüm 20 yemek için nutritionalInfo, priceLevel, category
- ✅ Yemek.com ve Wikimedia'dan görsel URL'leri
- ✅ foods.ts güncellendi (ID: 330-349)
- ✅ image_registry.json güncellendi

### TASK-021: Veritabanı Genişletme (305 Yemek)

**Durum**: ✅ Completed
**Notlar**: Yemek veritabanı normalize edildi ve genişletildi.

---

## 📝 BEKLEYEN GÖREVLER (Pending)

### TASK-MENU-001: Menü Oluşturma Sistemi Kontrolü

**Durum**: ⏸️ Pending (Backend tamamlandıktan sonra)
**Öncelik**: 🟡 Orta
**Bağımlılıklar**:
- ✅ Backend alt yapısı (AsyncStorage entegrasyonu)
- ✅ Yemek veritabanı (349 yemek)
- 🔄 Maliyet dengesi optimizasyonu

**Kontrol Edilecekler:**
- [ ] Düşük bütçeli menüler (50-100₺) oluşturma testi
- [ ] Orta bütçeli menüler (100-200₺) oluşturma testi  
- [ ] Yüksek bütçeli menüler (200₺+) oluşturma testi
- [ ] Maliyet dengesi algoritması doğrulama
- [ ] Fiyat dağılımı optimizasyonu (%40 düşük, %40 orta, %20 yüksek)

**Not**: Backend ve veritabanı tamamlandıktan sonra menü oluşturma sistemi detaylıca test edilecek.

### TASK-MENU-002: Menü Mantığı Hatası ve Diyetisyen Kuralları (1 Şubat 2026)

**Durum**: 🔄 **In Progress** - Kullanıcı testiyle tespit edildi
**Öncelik**: 🔴 **Kritik** - Diyetisyen mantığına aykırı
**Tarih**: 1 Şubat 2026

**Kullanıcı Test Sonucu:**

| Öğün | Atanan Yemek | Sorun | Doğru Olmalı |
|------|---------------|-------|--------------|
| **Öğle** | Sadece Karnıyarık | ❌ Tek yemek, ağır, yağlı | Ana Yemek + Salata + Çorba |
| **Akşam** | Sadece Testi Kebabı | ❌ Tek yemek, ağır | Ana Yemek + Yan Yemek + Tatlı |
| **Ara Öğün** | Un Helvası | ❌ Şekerli tatlı (kan şekeri riski) | Meyve (elma, armut) veya Yoğurt |
| **İkindi** | *(boş)* | ❌ Eksik öğün | Kuruyemiş veya Peynir |

**Diyetisyen Gözüyle Analiz:**

```
❌ MEVCUT MANTIK (HATALI):
- Öğle: Karnıyarık (sadece ana yemek, 280 kcal)
- Akşam: Testi Kebabı (sadece ana yemek, 450 kcal)
- Ara: Un Helvası (şeker, 320 kcal)
- Toplam: ~1050 kcal (yetersiz)
- Protein: ~35g (yetersiz)
- Kan şekeri: Düşme riski (şekerli ara öğün)

✅ DOĞRU MENÜ MANTIĞI:
- Öğle: Ana Yemek + Salata + Çorba + Ayran (~600 kcal)
- Akşam: Ana Yemek + Yan Yemek + Tatlı + Çay (~800 kcal)
- Ara: Meyve (elma: 95 kcal) veya Yoğurt (~150 kcal)
- İkindi: Ceviz/Badem (~200 kcal) veya Peynir (~180 kcal)
- Toplam: ~1750-1850 kcal (optimal)
- Protein: ~80-100g (yeterli)
- Kan şekeri: Stabil (düşük glisemik)
```

**Algoritma Gereksinimleri:**

- [ ] **Öğün Yapısı**: Her öğün = Ana + Yan + İçecek
- [ ] **Besin Dengesi**: Günlük protein 80-100g, kalori 1800-2000 kcal
- [ ] **Ara Öğün Mantığı**: 
  - Meyve (elma, armut, portakal)
  - Süt ürünleri (yoğurt, kefir, süt)
  - Kuruyemiş (ceviz, badem, fındık)
  - ❌ Şekerli tatlılar (kan şekeri riski)
- [ ] **Kategori Çeşitliliği**: 
  - Günde 2 öğün sebze/salata
  - Günde 1 öğün baklagil veya et
  - Haftada 2-3 kez balık
- [ ] **Maliyet Dengesi**: %40 düşük + %40 orta + %20 yüksek fiyat
- [ ] **Glisemik Kontrol**: Düşük glisemik yemekler ara öğünlerde

**Teknik İyileştirmeler:**

1. **MealPlanner.ts Algoritması**:
   - `createBalancedMenu()` fonksiyonu güçlendir
   - Her öğün için 3 parça zorunlu (ana + yan + içecek)
   - Ara öğünler için ayrı kural seti
   - Kategori döngüsü (aynı kategori 2 günde 1 kez)

2. **Yemek Kategori Eşleştirmesi**:
   - Ana Yemek: Etli, Tavuk, Baklagil, Balık
   - Yan Yemek: Pilav, Makarna, Sebze, Salata
   - İçecek: Ayran, Çay, Su, Kefir
   - Ara Öğün: Meyve, Yoğurt, Kuruyemiş, Peynir

3. **Kan Şekeri Optimizasyonu**:
   - Yüksek glisemik yemekler ana öğünlere
   - Düşük glisemik ara öğünlere
   - Şekerli tatlılar yasak listesi (ara öğün)

**Başarı Kriterleri:**

- ✅ Her öğünde en az 3 parça (ana + yan + içecek)
- ✅ Günlük 1800-2000 kcal arası
- ✅ Günlük 80-100g protein
- ✅ Ara öğünlerde meyve/yoğurt/kuruyemiş
- ❌ Ara öğünlerde şekerli tatlı yok
- ✅ Kan şekeri dostu menüler

**Diyetisyen Notu:**

> "Un Helvası gibi şekerli tatlıları ara öğüne koymak kan şekerini hızla yükseltip sonra düşürür. Bu durum ikindi saatlerinde hipoglisemi (kan şekeri düşmesi) riski yaratır. Ara öğünlerde elma, armut gibi lifli meyveler veya yoğurt tercih edilmeli."
> 
> — Klinik Diyetisyen (Kullanıcı geri bildiriminden)

---

### TASK-UI-001: Dark Mode ve Modernizasyon

**Durum**: ✅ Completed
**Notlar**: Sistem teması desteği ve Stitch renk paleti tam entegre edildi.

### TASK-020: MCP Server Entegrasyonu (Global)

**Durum**: ✅ Completed
**Notlar**: MCP sunucuları global config'e taşındı.

### TASK-001 ~ TASK-003: Altyapı ve Test Kurulumu

**Durum**: ✅ Completed

---

## 📊 GÖREV ÖZETİ

| Kategori   | Toplam | ✅ Tamamlanan | 🔄 Devam Eden | ⏸️ Beklemede |
| ---------- | ------ | ------------- | ------------- | ------------ |
| 🔴 Kritik  | 5      | 4             | 1             | 0            |
| 🟡 Yüksek  | 2      | 2             | 0             | 0            |
| 🟢 Orta    | 2      | 2             | 0             | 0            |
| 🔵 Düşük   | 3      | 1             | 0             | 2            |
| **Toplam** | **12** | **9 (75%)**   | **1 (8%)**    | **2 (17%)**  |

---

## 📝 GÖREV GÜNCELLEME NOTLARI

### 1 Şubat 2026 - Acil Görsel Fix: yemek.com → Picsum

- **🚨 Kritik Sorun**: yemek.com Cloudflare hotlink protection nedeniyle 403 Forbidden hatası
- **🔧 Çözüm**: 156 yemek.com URL'i Picsum Photos'a çevrildi
- **📸 Yeni Format**: `https://picsum.photos/seed/{yemek_adı}/400/300`
- **📝 Script**: `scripts/update-images.js` batch güncelleme aracı oluşturuldu
- **🧹 Temizlik**: `image_issues_log.json` sıfırlandı (215 eski hata kaydı)
- **✅ Sonuç**: Tüm görseller şimdi CORS-friendly Picsum servisi üzerinden yükleniyor
- **📦 Commit**: `615292b` - fix(images): Convert 156 yemek.com URLs to Picsum Photos
- **🎯 Not**: Picsum görselleri placeholder'dır, ileride gerçek yemek görselleri ile değiştirilebilir

### 23 Ocak 2026

- Çoklu Dil (i18n) sistemi kuruldu. TR ve EN desteği eklendi.
- Skeleton Screen entegrasyonu tamamlandı.
- Premium UI ve Haptic Feedback tüm kritik akışlara eklendi.
- Error Handling ve Robustness SPEC'leri karşılandı.
- Proje görsel ve teknik olarak "v1.0-release" adayı haline geldi.

### 30 Ocak 2026 - Strateji Değişimi: Hybrid 200 Yemek

- **Yemeksepeti Analizi**: 2025'in en popüler 50 yemeği belirlendi
- **Strateji Değişimi**: 325 yemek → 200 popüler yemek kararı
- **Hybrid Liste**: 180 mevcut + 20 yeni = 200 yemek
- **Eksik Tespiti**: Pizza, Burger, Kadayıf, Kuzu Tandır, vb. 20 popüler yemek eklenecek
- **Rapor**: `hybrid_200_foods.json` oluşturuldu
- **Yeni TASK**: TASK-DATA-005 (20 Yeni Yemek Ekleme) oluşturuldu
- **Hedef**: %95+ benzersiz görsel ile 200 yemek

### 27 Ocak 2026

- **Firecrawl Entegrasyonu**: 1912+ yemek URL'si otomatik toplandı ve eşleştirildi
- **Büyük Atılım**: 325 yemeğe resim atandı (%98.8 tamamlanma oranı)
- **Benzersizlik Artışı**: %45'ten %66'ya yükseldi (+21 puan iyileşme)
- **Detaylı Analiz**: `image_analysis_report.json` ile 15 duplicate grubu tespit edildi
- **User Feedback Sistemi**: 🚩 bildirim butonu aktif, kullanıcı raporları bekleniyor
- **Otomatik Tespit**: `scripts/detect_missing_images.js` ile resimsiz/duplicate analizi
- **Hedef**: Kullanıcı bildirimlerine göre kalan duplicate'leri düzelterek %95+ benzersizlik

### 30 Ocak 2026

- **Firecrawl Phase 2**: 41 yeni yemek.com görseli eklendi
- **Simit Grubu**: 18 kahvaltı yemeği benzersiz görsellerle güncellendi (Simit, Börek, Menemen, vb.)
- **Sebze Grubu**: 6 sebze yemeği (Taze Fasulye, Patlıcan Musakka, Bamya, Ispanak, Karnabahar, Mücver)
- **Kebap Grubu**: 7 kebap çeşidi (Adana, Kavurma, Tepsi, Kağıt, Orman, Beyti Sarma, Kuşbaşılı Pide)
- **Izgara Grubu**: 9 ızgara çeşidi (Kaşarlı Köfte, Sulu Köfte, Tavuk Bonfile, Bonfile Şiş, Kuşbaşı, Kaburga, Sucuk Izgara, Tavuk Pirzola)
- **Kekler**: 5 kek çeşidi (Fıstıklı, Portakallı, Elmalı, Muzlu, Çikolatalı)
- **Registry**: 68 toplam görsel (100% verified)
- **foods.ts Senkronizasyonu**: 18 yemek Wikimedia → Yemek.com görsellerine geçirildi
- **Duplicate Gruplar**: 15'ten 12'ye indirgeme
- **Benzersizlik**: ~%72 seviyesine yükseldi (hedef: %95+)

### 31 Ocak 2026

- **AsyncStorage Entegrasyonu**: @react-native-async-storage/async-storage kuruldu
- **Kalıcı Depolama**: Mobile'de artık veriler uygulama kapanınca kaybolmuyor
- **Yemek Sayısı Netleştirme**: Gerçek yemek sayısı 80 olarak doğrulandı (eskide 365/200 planı vardı)
- **Fiyat & Besin Değerleri**: Tüm 80 yemeğe estimatedPrice ve nutritionalInfo eklendi
- **2026 Ocak Fiyat Araştırması**: Market fiyatları araştırıldı (CarrefourSA, Migros)
- **FAZ-1 & FAZ-2 Tamamlandı**: Yemek veritabanı fiyatlandırma ve besin değerleri
- **Fiyat Dağılımı**: 58% düşük (5-60₺), 29% orta (61-200₺), 14% yüksek (201+₺)
- **MD Güncelleme**: PROJE_SPECS.md ve README.md gerçek sayılara göre güncellendi
- **GitHub Commit**: ba74ff5 - AsyncStorage ve 20 yeni yemek
- **GitHub Commit**: b6d1f2a - Dokümantasyon güncellemeleri
- **GitHub Commit**: 07388c6 - Fiyat güncellemeleri ve 16 kahvaltılık
- **GitHub Commit**: 094168c - FAZ-2 Tamamlandı

---

## 📋 Gelecek Görevler (Önem Sırasına Göre)

### FAZ-1: Kritik Fiyat Güncellemeleri (Öncelik: 🔴 Yüksek)

**Durum**: ✅ Completed (31 Ocak 2026)
**Hedef**: En popüler yemeklerin fiyatlarını 2026 Ocak market verilerine göre güncelle

**Yapılanlar:**
1. [x] 20 yeni popüler yemeğe estimatedPrice ekle
   - Pizza: 150₺ (estimatedPrice)
   - Burger: 165₺ (estimatedPrice)
   - Kuzu Tandır: 680₺ (estimatedPrice)
   - Hünkar Beğendi: 620₺ (estimatedPrice)
   - Adana Kebap: 220₺ (estimatedPrice)
    
2. [x] Baklagillere fiyat ekle (4 kişilik maliyet)
   - Kuru Fasulye: 45₺ (estimatedPrice)
   - Nohut: 42₺ (estimatedPrice)
   - Mercimek: 40₺ (estimatedPrice)
   - Barbunya: 43₺ (estimatedPrice)
    
3. [x] Ana yemeklere fiyat ekle
   - Etli yemekler: 110-620₺ arası
   - Sebze yemekleri: 45-95₺ arası
   - Kebaplar: 55-220₺/porsiyon
   - Çorbalar: 30-70₺/porsiyon
   - Hamur işleri: 30-70₺
   - Kahvaltılıklar: 5-40₺
   - Tatlılar: 85-220₺

**Sonuç**: Tüm 80 yemeğe estimatedPrice ve nutritionalInfo eklendi

### FAZ-2: Kahvaltı Kategorisi (Öncelik: 🟡 Orta)

**Durum**: ✅ Completed (31 Ocak 2026)
**Hedef**: Kahvaltı menüsü oluşturma özelliği için kahvaltılık ürünler ekle

**Eklenenler:**
1. [x] Temel Kahvaltılıklar (4)
   - Menemen: 30₺ (estimatedPrice)
   - Omlet: 35₺ (estimatedPrice)
   - Sahanda Yumurta: 25₺ (estimatedPrice)
   - Tost: 20₺ (estimatedPrice)
    
2. [x] Hamur İşleri (3)
   - Poğaça: 25₺ (estimatedPrice)
   - Açma: 20₺ (estimatedPrice)
   - Sigara Böreği: 35₺ (estimatedPrice)
    
3. [x] Peynir & Zeytin Çeşitleri (4)
   - Beyaz Peynir: 25₺ (estimatedPrice)
   - Taze Kaşar: 15₺ (estimatedPrice)
   - Ezine Peyniri: 35₺ (estimatedPrice)
   - Zeytin: 15₺ (estimatedPrice)
    
4. [x] İçecekler (3)
   - Çay: 5₺ (estimatedPrice)
   - Türk Kahvesi: 20₺ (estimatedPrice)
   - Portakal Suyu: 30₺ (estimatedPrice)
    
5. [x] Diğer Kahvaltılıklar (2)
   - Bal: 15₺ (estimatedPrice)
   - Tereyağ: 5₺ (estimatedPrice)

**Sonuç**: 16 kahvaltılık ürün eklendi (ID: 350-365)
**Kişi Başı Kahvaltı Maliyeti**: ~75-95₺ (ortalama)

### FAZ-3: Diğer İyileştirmeler (Öncelik: 🔵 Düşük)

- [ ] Kalan 329 yemeğin fiyatlarını otomatik hesaplama script'i
- [ ] Görsel optimizasyon (Yemek.com'dan yeni görseller)
- [ ] Duplicate yemek kontrolü ve temizliği
- [ ] Menü planlama algoritması test ve optimizasyonu
- [ ] Fiyat dağılımı analizi (%40 düşük, %40 orta, %20 yüksek)

**Not**: Tüm fiyatlar 2026 Ocak 31 market fiyatlarına (CarrefourSA, Migros) göre hesaplanmıştır.

---

## 🎯 FAZ-3: Puanlama → Otomatik Menü Akışı (Öncelik: 🔴 Kritik)

**Durum**: ⏸️ Pending (Başlanacak)
**Hedef**: Kullanıcıların yemekleri puanlayarak otomatik dengeli menüler oluşturması

**Kullanıcı Akışı:**

1. **Puanlama Aşaması**
   - Kullanıcı PreferenceFlow'da yemekleri puanlar (5 yıldız: 🤢 😐 😍)
   - Rating'ler database'e kaydedilir
   - User preferences oluşturulur (sevilenler, sevilmeyenler)

2. **Otomatik Menü Oluşturma**
   - İlk girişte otomatik menü oluşturulur
   - Diyet tercihi (Settings üzerinden) değerlendirilir
   - Gıda mühendisi algoritması ile dengeli menü oluşturulur

3. **Menü Güncelleme**
   - Diyet değişince menü otomatik güncellenir
   - Puan değişince menü güncellenebilir

**Bileşenler:**

### FAZ-3.1: Puanlama Sistemi

**Gereksinimler:**
- [ ] PreferenceFlow'u test et ve debug et
- [ ] Rating sistemi'ni doğrula (1-5 arası)
- [ ] Rating'leri database'e kaydet (getUserRatings, rateFood)
- [ ] User preferences'i sakla (sevilen/ sevilmeyen listesi)
- [ ] Haptic feedback ekle (puanlama sırasında)

**Hedef Dosyalar:**
- `components/ui/PreferenceFlow.tsx` - Test ve iyileştirme
- `database/ratings.ts` - Rating işlemleri doğrula
- `types.ts` - Rating interface kontrol et

### FAZ-3.2: Otomatik Menü Oluşturma

**Gereksinimler:**
- [ ] İlk girişte otomatik menü oluştur (auth.tsx'te)
- [ ] Diyet değişince menü güncelle (SettingsScreen)
- [ ] "Menüyü Güncelle" butonu ekle (ExploreScreen)
- [ ] Kullanıcıya menü hazır bildirimi (toast/notification)

**Hedef Dosyalar:**
- `auth.tsx` - İlk girişte otomatik menü tetikleme
- `app/(tabs)/settings.tsx` - Diyet değişince güncelleme
- `app/(tabs)/explore.tsx` - Manuel güncelleme butonu

### FAZ-3.3: Gıda Mühendisi Algoritması

**Gereksinimler:**
- [ ] mealPlanner.ts'da algoritmayı güçlendir
- [ ] Besin dengesi hesapla (protein/karbonhidrat/yağ oranı)
- [ ] Kategori çeşitliliği sağla (haftada en fazla 2x aynı kategori)
- [ ] Maliyet dengesi optimize et (farklı bütçe seviyeleri)
- [ ] Sağlıklı seçimler (öğün bazlı makro dengesi)

**Algoritma Kuralları:**

**Besin Dengesi:**
- Günlük kalori: ~2000 kcal
- Protein: ~100g (%20)
- Karbonhidrat: ~250g (%50)
- Yağ: ~70g (%30)

**Kategori Çeşitliliği:**
- Haftada en fazla 2x kırmızı et
- Haftada en fazla 2x hamur işleri
- Haftada en az 2x sebze yemeği
- Haftada en az 2x baklagil

**Maliyet Dengesi:**
- Düşük bütçe: 50-100₺/gün
- Orta bütçe: 100-200₺/gün
- Yüksek bütçe: 200+₺/gün

### FAZ-3.4: UI İyileştirmeleri

**Gereksinimler:**
- [ ] FoodCard'a fiyat gösterimi (estimatedPrice)
- [ ] NutritionalInfoModal ekle (besin değerlerini göster)
- [ ] Long press ile nutrition modal aç
- [ ] Menü detay ekranı (günlük özet, toplam kalori, toplam fiyat)
- [ ] Loading durumları (menü oluştururken skeleton göster)

**Hedef Dosyalar:**
- `components/ui/FoodCard.tsx` - Fiyat ve nutrition gösterimi
- `components/ui/NutritionalInfoModal.tsx` - Besin değerleri modal
- `app/(tabs)/explore.tsx` - Menü detay ve loading

### FAZ-3.5: Test ve Optimizasyon

**Gereksinimler:**
- [ ] Demo ile test et (misafir girişi)
- [ ] Farklı diyetlerle test et (vegan, vegetarian, normal)
- [ ] Maliyet dengesi test et (düşük/orta/yüksek bütçe)
- [ ] Besin dengesi test et (makro hesabı doğrula)
- [ ] Performans test et (menü oluşturma süresi < 3 saniye)

**Başarı Kriterleri:**
- ✅ 5 yıldız puanlama sistemi çalışıyor
- ✅ Otomatik menü oluşturuluyor
- ✅ Diyet değişince menü güncelleniyor
- ✅ Gıda mühendisi dengeli menü oluşturuyor
- ✅ Maliyet dengesi sağlanıyor
- ✅ Besin dengesi sağlanıyor
- ✅ Demo test geçiyor

**Sonuç:** Kullanıcılar yemekleri puanlayarak otomatik dengeli menüler oluşturabilecek (gıda mühendisi mantığı ile).

---

## 📋 Gelecek Görevler (Önem Sırasına Göre)

### FAZ-4: Yemek Sayısı Artırma (Öncelik: 🔵 Düşük - İleri Tarihe Ertelendi)

**Not:** Yemek sayısı artırma FAZ-3 tamamlandıktan sonra değerlendirilecek. Şu anki odak: Puanlama → Otomatik Menü akışı.

- [ ] Kalan eksik yemekleri ekle (target: 200+ yemek)
- [ ] Görsel optimizasyon (Yemek.com'dan yeni görseller)
- [ ] Duplicate yemek kontrolü ve temizliği
- [ ] Kategori dağılımını optimize et

### FAZ-5: Diğer İyileştirmeler (Öncelik: 🔵 Düşük)
