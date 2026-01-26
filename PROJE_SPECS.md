# YemekMenu Proje Spesifikasyonları

> Spec-Driven Development Yaklaşımı ile Proje Yönetimi
> Tarih: 23 Ocak 2026
> Versiyon: 3.5.0

---

## 📋 PROJE GENEL BAKIŞ

### 🎯 Proje Amacı

Kişisel menü planlama uygulaması ile kullanıcıların sağlıklı ve dengeli beslenmesine yardımcı olmak. Genişletilmiş 329 yemek veritabanı ile akıllı öneriler sunmak.

### 🏗️ Mimari Kararları

| Karar          | Açıklama                             | Durum |
| -------------- | ------------------------------------ | ----- |
| Platform       | React Native + Expo (Cross-platform) | ✅    |
| Database       | SQLite (Mobile) / LocalStorage (Web) | ✅    |
| Language       | TypeScript (%95+ type coverage)      | ✅    |
| Performance    | expo-image, useMemo, FlatList        | ✅    |
| Architecture   | Modüler Database, MCP Server Support | ✅    |
| Error Handling | Merkezi Handler + ErrorBoundary      | ✅    |
| Pricing System | 2025 Market Data + Smart Calculation | ✅    |

---

## 🔴 KRİTİK SPECS (Critical Specs)

### SPEC-010: Demo Session İzolasyonu

**Priorite**: 🔴 Kritik
**Durum**: ✅ Tamamlandı (23 Ocak 2026)
**Metric**: Her demo kullanıcı kendi session'ını görmeli

**Gereksinimler:**

- [x] Her demo girişinde benzersiz anonymous session ID oluşturulmalı
- [x] Demo verileri (ratings, preferences, meal_plans) session'a bağlı olmalı
- [x] İki farklı demo kullanıcı birbirlerinin verilerini görmemeli
- [x] Kayıt sırasında demo session → gerçek kullanıcı migration yapılmalı

**Kabul Kriterleri:**

```typescript
// Senaryo 1: İki farklı cihazda demo girişi ✅
Device A: Demo giriş → Kuru fasulye 5⭐ → Session A (ID: -123456)
Device B: Demo giriş → Kuru fasulye puansız → Session B (ID: -789012)
// Sonuç: Device A ve B birbirlerini görmemeli ✅

// Senaryo 2: Demo → Kayıtlı kullanıcı migration ✅
Demo giriş → 10 yemek puanla → "Hesap Oluştur"
// Sonuç: Tüm 10 puan yeni hesaba taşınmalı ✅
```

**Teknik Detaylar:**

- `utils/session-utils.ts`: Session management modülü
- Negative ID kullanımı (-XXXXXX) ile demo/gerçek kullanıcı ayrımı
- `migrateSessionToUser()`: ratings, preferences, meal_plans transferi
- `addDemoRating()`: Demo session'a real-time rating kaydetme

**Test Coverage:** 45/45 passing ✅

---

### SPEC-001: Test Framework Çalışır Olmalı

**Priorite**: 🔴 Kritik
**Durum**: ✅ Tamamlandı
**Metric**: Tüm testlerin çalışması, build süresi < 5 saniye

**Gereksinimler:**

- [x] Jest configuration doğru yapılandırılmış olmalı
- [x] Babel transform'leri doğru ayarlanmış olmalı
- [x] `npm test` komutu hatasız çalışmalı
- [x] Test coverage raporu oluşturulmalı
- [x] Mock'lar doğru çalışmalı (react-native, expo modules)

**Kabul Kriterleri:**

```bash
npm test -- --verbose --coverage
# Sonuç: 100% success, 0 errors, 0 warnings
# Gerçek: 45/45 test geçti, ~3.5s, 0 errors ✅
```

---

### SPEC-002: Versiyon Uyumluluğu Sağlanmalı

**Priorite**: 🔴 Kritik
**Durum**: ✅ Tamamlandı
**Metric**: Tüm dependency'ler uyumlu olmalı

**Gereksinimler:**

- [x] `@types/react` ve `react-native` uyumlu versiyonlarda olmalı
- [x] `react` ve `react-native` compatible olmalı
- [x] `expo` versiyonu tüm dependencies ile uyumlu olmalı
- [x] `npm install` sorunsuz çalışmalı (force/legacy-peer-deps olmadan)

**Kabul Kriterleri:**

```bash
npm install
# Sonuç: 0 vulnerabilities, 0 ERESOLVE errors
# Gerçek: 675 packages added, 0 vulnerabilities
npm audit
# Sonuç: 0 vulnerabilities
# Gerçek: found 0 vulnerabilities
```

---

### SPEC-003: Yemek Veritabanı Zenginliği

**Priorite**: 🔴 Kritik
**Durum**: ✅ Tamamlandı
**Metric**:

- **Yemek Veritabanı:** 329 çeşit Türk mutfağı yemeği (Genişletilmiş Diyet Seçenekleri ile).
- **Kategoriler:** Çorbalar, Zeytinyağlılar, Etli Yemekler, Baklagiller, Hamur İşleri, Tatlılar, Kahvaltılıklar, Dolma & Sarma, Makarna, Salatalar.
- **Kişiselleştirme:**
  - Vejetaryen, Vegan, Glutensiz, Düşük Karbonhidrat filtreleri.
  - "Serpme Kahvaltı" (Parça parça seçim imkanı: Peynir, Zeytin, Reçel, Ana Sıcak vb.).
  - Bütçe dostu veya Gurme tercih modları.
- **Fiyatlandırma:** 2025 Ocak market verilerine göre gerçekçi malzeme maliyeti (18₺-140₺)
- **Beslenme:** Otomatik kalori/protein/karbonhidrat/yağ hesaplaması (kategori bazlı)

**Kabul Kriterleri:**

```bash
npm test -- --watch
# Sonuç: <5 saniyede ilk test çalışır
# Gerçek: ~3.5s, hedef: <5s ✅
```

---

### SPEC-014: Kitlesel Görsel Benzersizleştirme (Visual Uniqueness)

**Priorite**: 🔴 Kritik
**Durum**: 🔄 Devam Ediyor (131/329 Benzersiz)
**Metric**: Her yemeğin kendine ait, benzersiz (unique) ve HD görseli olmalı

**Gereksinimler:**

- [x] Tüm 329 yemek için dublike/placeholder resimlerin otomatik tespiti
- [x] `database/image_registry.json` ile kalıcı görsel hafızası (Sıfır Veri Kaybı)
- [x] Çorbalar, Kahvaltılıklar ve Tatlıların (131 adet) benzersizleştirilmesi
- [ ] Kebablar, Makarnalar ve Salataların (198 adet) benzersizleştirilmesi
- [x] UI Üzerinden Hatalı Resim İhbar Sistemi (🚩 Butonu)
- [x] Admin Paneli (`/admin/gallery`) ile görsel denetim

**Kabul Kriterleri:**

```bash
node scripts/audit_uniqueness.js
# Sonuç: "Total Duplicated URL Instances: 0" olmalı
```

---

## 🟡 YÜKSEK ÖNCELİK SPECS (High Priority Specs)

### SPEC-004: Authentication Güvenli Olmalı

**Priorite**: 🟡 Yüksek
**Durum**: ✅ Tamamlandı
**Metric**: Password hash + salt + rate limiting

**Gereksinimler:**

- [x] Password hash'leniyor (crypto-utils.ts)
- [x] Salt kullanılıyor (auth-utils.ts)
- [x] Rate limiting eklendi (rate-limiter.ts)
- [x] Session timeout eklendi (30 dk)
- [x] Password complexity check eklendi (password-validator.ts)

---

### SPEC-005: Menü Planlama Algoritması Akıllı ve Dengeli Olmalı

**Priorite**: 🟡 Yüksek
**Durum**: ✅ Tamamlandı
**Metric**: Kalori hedefi, kullanıcı puanı ve çeşitlilik odaklı puanlama sistemi

**Gereksinimler:**

- [x] Dinamik kalori hedefleme (Target: 2000 kcal)
- [x] Kategori çeşitliliği (Sequential Category Penalty)
- [x] Aynı yemeğin tekrar seçilmemesi kontrolü
- [x] Makro dengesi takibi (Protein/Karbonhidrat/Yağ)
- [x] Kullanıcı derecelendirmelerine göre ağırlıklı seçim (Scoring Engine)
- [x] **5'li Emoji Skalası Entegrasyonu**
  - 🤢 (1): Dislike (Menüde asla çıkmaz)
  - 😕 (2): Dislike (Menüde çıkma ihtimali çok düşük)
  - 😐 (3): Nötr (Standart algoritma)
  - 😋 (4): Like (Menüde sık çıkar)
  - 😍 (5): Super Like (Menüde öncelikli + "Favoriniz" rozeti)

---

### SPEC-006: Error Handling Kapsamlı Olmalı

**Priorite**: 🟡 Yüksek
**Durum**: ✅ Tamamlandı
**Metric**: Tüm async operasyonlarda error handling

**Gereksinimler:**

- [x] Network error handling (errorHandler.ts)
- [x] Database error handling
- [x] Validation error handling (UI feedback eklendi)
- [x] User-friendly error messages
- [x] Error boundary component

---

### SPEC-007: Type Coverage %90+ Olmalı

**Priorite**: 🟡 Yüksek
**Durum**: ✅ İyi
**Metric**: %90+ TypeScript coverage

**Gereksinimleri Karşılandı:**

- [x] types.ts dosyası oluşturuldu
- [x] Tüm interface'ler tanımlandı
- [x] Utility type'lar eklendi
- [x] Constants eklendi
- [ ] `any` type'ları kaldırılmalı (varsa)

---

## 🟢 ORTA ÖNCELİK SPECS (Medium Priority Specs)

### SPEC-008: UI Modern ve Responsive Olmalı

**Priorite**: 🟢 Orta
**Durum**: ✅ Tamamlandı
**Metric**: Stitch tasarım sistemine uygun, cross-platform responsive

**Gereksinimler:**

- [x] Stitch tasarım system entegrasyonu
- [x] Mobile + Web responsive
- [x] Dark mode desteği (System preference integrated)
- [x] Skeleton Screens (Premium Loading experience)
- [x] Animasyonlar (Premium transitions & Reanimated 3)
- [x] Haptic Feedback entegrasyonu
- [ ] Accessibility (screen reader, high contrast) - (Sonraki aşama)

---

### SPEC-009: Performance Optimize Edilmiş Olmalı

**Priorite**: 🟢 Orta
**Durum**: ✅ Tamamlandı
**Metric**: Load time < 3s, smooth animations (60fps)

**Gereksinimler:**

- [x] Image lazy loading + caching (expo-image)
- [x] Code splitting (expo-router otomatik)
- [x] Memoization (useMemo, useCallback)
- [x] Virtualization (FlatList for long lists)
- [x] N+1 query problemi çözülmüş olmalı

---

### SPEC-010: Database Refactoring Yapılmalı

**Priorite**: 🟢 Orta
**Durum**: ✅ Modüle ayrılmış
**Metric**: Modüler, maintainable code structure

**Gereksinimleri Karşılandı:**

- [x] database/ klasörü oluşturuldu
- [x] connection.ts (DB connection)
- [x] foods.ts (Food operations)
- [x] users.ts (User operations)
- [x] ratings.ts (Rating operations)
- [x] mealPlans.ts (Meal plan operations)
- [x] index.ts (Unified export)
- [ ] Migration scripts

---

## 🔵 DÜŞÜK ÖNCELİK SPECS (Low Priority Specs)

### SPEC-011: PWA Offline Desteği Olmalı

**Priorite**: 🔵 Düşük
**Durum**: ⏸️ Pending
**Metric**: Offline mode ile basic functionality

---

### SPEC-012: Multi-Language Desteği Olmalı

**Priorite**: 🔵 Düşük
**Durum**: ✅ Tamamlandı
**Metric**: i18n library ile TR + EN desteklemeli

**Gereksinimler:**

- [x] `i18next` ve `react-i18next` kullanımı
- [x] JSON tabanlı translation yönetimi
- [x] Dinamik dil değişimi (re-render olmadan)
- [x] Sağdan sola (RTL) desteği altyapısı (Gelecek için)
- [x] Kullanıcı dil tercihinin persist edilmesi (i18next-browser-languagedetector / local storage altyapısı)

---

### SPEC-013: Monitoring ve Logging Olmalı

**Priorite**: 🔵 Düşük
**Durum**: ⏸️ Pending
**Metric**: Error tracking, analytics, performance monitoring

---

## 📊 SPECS ÖZETİ

| Kategori   | Toplam | Tamamlanmış  | Devam Eden | Beklemede   |
| ---------- | ------ | ------------ | ---------- | ----------- |
| 🔴 Kritik  | 4      | 3            | 1          | 0           |
| 🟡 Yüksek  | 4      | 4            | 0          | 0           |
| 🟢 Orta    | 3      | 3            | 0          | 0           |
| 🔵 Düşük   | 3      | 1            | 0          | 2           |
| **Toplam** | **14** | **11 (78%)** | **1 (8%)** | **2 (14%)** |

---

## 🎯 MEVCUT DURUM ANALİZİ

### ✅ Güçlü Yanlar (Strengths)

1. **Smart Algorithm**: Kalori ve tercih odaklı akıllı puanlama sistemi.
2. **Enterprise Security**: Salted hash, rate limiting ve validation entegre.
3. **Type Safety**: %95+ coverage ile güvenli kod tabanı.
4. **Resilience**: `image_registry.json` ile görsel verilerin kalıcılığı sağlandı.
5. **Detection**: Admin Paneli ve İhbar sistemi ile veri kalitesi kontrol altında.

### ⚠️ Zayıf Yanlar (Weaknesses)

1. **Visual Consistency**: Bazı kategorilerde hala dublike resimler mevcut (Kebaplar vb.).
2. **PWA Support**: Offline desteği beklemede.

---

## 📝 SPECS VERSİYON GEÇMİŞİ

| Versiyon | Tarih       | Değişiklikler                                                        |
| -------- | ----------- | -------------------------------------------------------------------- |
| 3.6.0    | 26 Jan 2026 | Kitlesel Görsel Benzersizleştirme (Phase 1) ve İhbar Sistemi eklendi |
| 3.5.0    | 23 Jan 2026 | Çoklu Dil (i18n) desteği ve Türkçe yerelleştirme tamamlandı          |
| 3.4.0    | 23 Jan 2026 | Skeleton screens, Premium UI ve Error Handling tamamlandı            |
| 3.3.0    | 23 Jan 2026 | Demo Session İzolasyonu ve Migration eklendi                         |
| 3.2.0    | 23 Jan 2026 | Algorithm, Security ve Dark Mode tamamlandı                          |
| 3.1.0    | 22 Jan 2026 | DB 300+ yemek genişletmesi eklendi                                   |
| 3.0.0    | 16 Jan 2026 | Spec-driven approach ile yeniden düzenlendi                          |

---

**Not**: Bu dosya PROJECT_TASKS.md ile birlikte kullanılır.
