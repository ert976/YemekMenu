# TODO - Food Visuals & Reliability

## 🎯 Yeni Strateji: Hybrid 200 Yemek (30 Ocak 2026)

**Karar:** 325 yemek → **200 popüler yemek** (Yemeksepeti 2025 verilerine göre)

### 📊 Yeni Yapı
- **180 Mevcut Yemek**: foods.ts'den seçildi (en popülerler)
- **20 Yeni Yemek**: Eksik popülerler eklendi (Pizza, Burger, Kadayıf, Kuzu Tandır, vb.)
- **Toplam: 200 Yemek**

### 🆕 Eklenen 20 Yeni Yemek
**Fast Food:** Pizza, Burger  
**Kebap:** Kuzu Tandır, Kürdan Kebabı, Döner Kebap  
**Tatlı:** Kadayıf  
**Izgara:** Tavuk But, Kuzu Şiş, Ciğer Şiş  
**Etli:** Hünkar Beğendi, Kuzu Kapama, Kuzu Yahni, Etli Barbunya, Tavuk Yahni, Fırında Tavuk, Fırında Patates, Fırında Sebze, Güveç, Kapama  
**Pilav:** Pirinç Pilavı

## 🚩 Mevcut Problemler

1. **Menü Mantığı Hatası**: Öğünler tek yemek yerine kombinasyon olmalı (TASK-MENU-002)
   - Öğle/Akşam: Ana Yemek + Yan Yemek + İçecek
   - Ara öğün: Meyve/Yoğurt (şekerli tatlı değil)

2. **⚠️ Görsel Sorunu - DEVAM EDİYOR (1 Şubat 2026)**
   - **Durum**: Picsum placeholder görseller kullanılıyor ama çoğu yemekle alakasız
   - **Test**: 20-30 resim kontrol edildi, sadece 1-2 tanesi uygun çıktı
   - **Root Cause**: yemek.com Cloudflare hotlink protection var (403 Forbidden)
   - **Denenen Çözümler**:
     - ❌ Direkt CDN URL'leri: 403/404 hatası
     - ❌ Firecrawl screenshot: Cloudflare "Access denied" sayfası
     - ❌ curl/wget User-Agent spoofing: Başarısız
     - ❌ yemek.com tarif sayfaları scrape: Aynı koruma var
   - **Alternatif Kaynaklar**:
     - 🔄 Wikimedia Commons: Bazı Türk yemekleri var ama sınırlı
     - 🔄 Pexels: Gerçek yemek fotoğrafları var ama API key gerekir
     - 🔄 Unsplash Source: `https://source.unsplash.com/400x300/?kebab` (denenebilir)
   - **Önerilen Çözüm**: 
     - assets/images/ klasörüne lokal görseller indir
     - Veya Unsplash Source kullan (generic ama yemek görselleri)
   - **Not**: Şu an için Picsum ile devam, ileride gerçek görseller eklenecek

## ✅ 1 Şubat 2026 Tamamlananlar

- [x] **Image URL Fix**: 156 yemek.com URL'i Picsum'a çevrildi ✅
  - Cloudflare hotlink protection nedeniyle yemek.com görselleri yüklenmiyordu
  - Tüm URL'ler `https://picsum.photos/seed/{food_name}/400/300` formatına dönüştürüldü
  - LazyImage runtime conversion artık yedek olarak çalışıyor
- [x] **FAZ-1**: 20 Yeni Yemek Verisi - ID 330-349 için tam veri girişi ✅
- [x] **FAZ-2**: Kritik Görsel Düzeltmeleri - 18 yemek için yanlış görseller düzeltildi ✅
  - ID 339-341 (Hünkar Beğendi, Kuzu Kapama, Kuzu Yahni)
  - ID 346-349 (Fırında Sebze, Güveç, Kapama, Pirinç Pilavı)
  - ID 355-365 (Kahvaltılık ürünler)
- [x] **FAZ-3**: image_registry.json güncellemesi ✅
- [x] **FAZ-4**: 40 Kritik Yemek Eklendi (ID: 366-405) ✅
  - Pilavlar (8): Bulgur, Nohutlu, Tavuklu, Etli, Sebzeli, Mantarlı, Domatesli, İnce
  - Makarna (7): Spagetti Bolonez, Carbonara, Fırın, Kremalı Mantarlı, Penne Arrabiata, Alfredo, Lazanya
  - Zeytinyağlı (6): Enginar, Pırasa, Taze Fasulye, Bamya, Bakla, Kabak
  - Börek (5): Su, Peynirli, Kıymalı, Ispanaklı, Patatesli
  - Salata (4): Çoban, Gavurdağı, Mevsim, Piyaz
  - Meze (4): Cacık, Humus, Haydari, Muhammara
  - Deniz (4): Hamsi Tava, Balık Izgara, Midye Dolma, Kalamar
  - Tatlı (2): Maraş Dondurması, Waffle

## 📅 Kalan Görevler (Sonraki Seanslar)

- [ ] **FAZ-5**: 60 popüler yemek ekleme (Kebap, Tatlı, Çorba çeşitleri)
- [ ] **FAZ-6**: 40 özel yemek ekleme (Dolma, Sarma, İçecekler)
- [ ] **FAZ-7**: Görsel optimizasyonu - %95+ benzersizlik hedefi
- [ ] **FAZ-8**: Final test ve Admin Paneli doğrulama

## 🚨 YENİ SORUN: Menü Oluşturma Mantığı Hatası (1 Şubat 2026)

### ❌ Tespit Edilen Problemler

**Kullanıcı Test Senaryosu:**
- Öğle Yemeği: Sadece **Karnıyarık** (tek yemek)
- Akşam Yemeği: Sadece **Testi Kebabı** (tek yemek)
- Ara Öğün: **Un Helvası** (şekerli tatlı)
- İkindi: *(Meyve önerisi - kullanıcı tarafından fark edildi)*

### 🔍 Diyetisyen Gözüyle Analiz

```
❌ MEVCUT MANTIK (HATALI):
Öğle:     Karnıyarık (yağlı, ağır, tek yemek)
Akşam:    Testi Kebabı (yağlı, ağır, tek yemek)
Ara:      Un Helvası (şeker, kan şekeri riski)

✅ DOĞRU MENÜ MANTIĞI:
Öğle:     Ana Yemek + Salata + Çorba
Akşam:    Ana Yemek + Yan Yemek + Tatlı
Ara:      Meyve (elma, armut) veya Yoğurt
İkindi:   Protein (ceviz, badem) veya Süt
```

### 🎯 Gereksinimler

- [ ] **Besin Grubu Dengesi**: Her öğün Ana Yemek + Yan Yemek + İçecek
- [ ] **Ara Öğün Mantığı**: Şekerli tatlılar yerine Meyve/Süt/Yoğurt
- [ ] **Öğün Çeşitliliği**: Tek yemek yerine kombinasyon
- [ ] **Kan Şekeri Kontrolü**: Diyabet riski olan kullanıcılar için düşük glisemik seçenekler

### 📋 Kategorilere Göre Öğün Dağılımı

| Öğün | Ana | Yan | İçecek | Ara Öğün Seçenekleri |
|------|-----|-----|--------|---------------------|
| **Öğle** | Et/Tavuk/Baklagil | Pilav/Makarna + Salata | Ayran/Çay | - |
| **Akşam** | Et/Tavuk/Baklagil | Sebze + Salata | Ayran/Çay | - |
| **Ara** | - | - | - | Meyve, Yoğurt, Süt, Kefir |
| **İkindi** | - | - | - | Kuruyemiş, Peynir, Süt |

---

## ✅ 1 Şubat 2026 Yapılanlar

- **🖼️ Görsel URL Fix**: 156 yemek.com URL'i Picsum'a çevrildi ✅
  - Cloudflare hotlink protection nedeniyle yemek.com görselleri yüklenmiyordu (403 Forbidden)
  - Tüm URL'ler `https://picsum.photos/seed/{food_name}/400/300` formatına dönüştürüldü
  - Türkçe karakter normalizasyonu eklendi (ü→u, ş→s, ı→i, ö→o, ç→c, ğ→g)
  - `scripts/update-images.js` batch güncelleme script'i oluşturuldu
  - `image_issues_log.json` temizlendi (215 eski hata kaydı silindi)
  - **Commit**: 615292b - fix(images): Convert 156 yemek.com URLs to Picsum Photos

## ✅ 30 Ocak 2026 Yapılanlar

- **Strateji Değişimi**: 325 → 200 yemek kararı (Yemeksepeti verilerine göre)
- **Hybrid Liste**: 180 mevcut + 20 yeni = 200 yemek listesi oluşturuldu
- **Yemeksepeti Analizi**: En popüler 50 yemek belirlendi
- **Eksik Tespiti**: 20 popüler yemek mevcut listede olmadığı tespit edildi
- **Rapor**: `hybrid_200_foods.json` oluşturuldu
