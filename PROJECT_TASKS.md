# YemekMenu Proje Görev Takibi

> Spec-Driven Development Yaklaşımı ile Görev Yönetimi
> Tarih: 16 Ocak 2026
> Versiyon: 1.0.0

---

## 📋 KULLANIM KILAVUZU

### Görev Durumları

- ⏸️ **Pending**: Henüz başlanmadı
- 🔄 **In Progress**: Devam ediyor
- ✅ **Completed**: Tamamlandı (asla silme)
- ❌ **Failed**: Başarısız
- ⏸️ **Blocked**: Bağımlılık yüzünden beklemede

### Öncelik Sıralaması

- 🔴 **Kritik**: Bu hafta yapılmalı
- 🟡 **Yüksek**: 2 hafta içinde yapılmalı
- 🟢 **Orta**: Bu ay yapılmalı
- 🔵 **Düşük**: Uzun vadede yapılmalı

---

## 🔴 KRİTİK GÖREVLER (Critical Tasks)

### TASK-001: Jest Configuration Düzeltmeli

**İlişkili Spec**: SPEC-001
**Durum**: ✅ Completed
**Öncelik**: 🔴 Kritik
**Tahmini Süre**: 30 dakika (Gerçekleşen: 90 dakika)
**Atanan**: -
**Bağımlılıklar**: -

**Gereksinimler:**

- [x] Babel packages install edildi
- [x] Babel config oluşturulması (.babelrc veya babel.config.js)
- [x] jest.config.json'de transform ayarları düzeltilmesi
- [x] Mock'ların doğru yapılandırılması
- [x] `npm test` komutunun çalışması

**İlgili Dosyalar:**

- jest.config.json
- babel.config.js
- jest.setup.js
- jest.polyfills.js
- **tests**/fileMock.js

**Notlar:**

- ✅ React Native'in Flow type syntax'ı mock'lanarak çözüldü
- ✅ `transformIgnorePatterns` güncellendi
- ✅ @types/jest install edildi
- ✅ Test environment'i node yapıldı
- ✅ Window property redefine hatası çözüldü
- ✅ Tüm testler geçti (2/2)

**Alt Görevler:**

- [x] TASK-001.1: @types/jest install et
- [x] TASK-001.2: babel.config.js'i React Native için ayarla (zaten correct)
- [x] TASK-001.3: jest.polyfills.js'i güncelle
- [x] TASK-001.4: npm test -- --verbose çalıştır
- [x] TASK-001.5: Tüm testlerin geçtiğini doğrula

**Tamamlanma Tarihi**: 16 Ocak 2026

---

### TASK-002: Versiyon Uyumsuzluğunu Çözmeli

**İlişkili Spec**: SPEC-002
**Durum**: ✅ Completed
**Öncelik**: 🔴 Kritik
**Tahmini Süre**: 1 saat (Gerçekleşen: 45 dakika)
**Atanan**: -
**Bağımlılıklar**: TASK-001

**Gereksinimler:**

- [x] `@types/react` versiyonunu düşür (18.x.x)
- [x] `react` ve `react-dom` versiyonlarını düşür (18.x.x)
- [x] `react-native` versiyonu ile uyumlu olmalı
- [x] `npm install` sorunsuz çalışmalı

**İlgili Dosyalar:**

- package.json

**Notlar:**

- ✅ React 19.1.0 → 18.3.1'a düşürüldü
- ✅ react-dom 19.1.0 → 18.3.1'a düşürüldü
- ✅ @types/react 19.1.17 → 18.3.12'ye düşürüldü
- ✅ React Native 0.75.4 ile uyumlu
- ✅ npm install başarılı (675 packages)
- ✅ npm audit 0 vulnerabilities

**Alt Görevler:**

- [x] TASK-002.1: package.json'da dependencies'i güncelle
- [x] TASK-002.2: node_modules'i temizle (`rm -rf node_modules`)
- [x] TASK-002.3: package-lock.json'i temizle
- [x] TASK-002.4: npm install çalıştır (başarılı, 1m 3s)
- [x] TASK-002.5: npm audit çalıştır, 0 vulnerability doğrula

**Tamamlanma Tarihi**: 16 Ocak 2026

---

### TASK-003: Test Server Hızlandırmalı

**İlişkili Spec**: SPEC-003
**Durum**: ✅ Completed
**Öncelik**: 🔴 Kritik
**Tahmini Süre**: 45 dakika (Gerçekleşen: 30 dakika)
**Atanan**: -
**Bağımlılıklar**: TASK-001

**Gereksinimler:**

- [x] Jest cache'i aktif et
- [x] Test environment'i optimize et (jsdom yerine node)
- [x] Mock'ları optimize et
- [x] Parallel test execution aktif et
- [x] Test server <5 saniyede başlamalı

**İlgili Dosyalar:**

- jest.config.json
- jest.setup.js
- jest.polyfills.js

**Notlar:**

- ✅ Test environment node yapıldı (jsdom yerine)
- ✅ Jest cache aktif
- ✅ Mock'lar optimize edildi
- ✅ Test süresi: 2.2 saniye (hedef: <5s)
- ✅ maxWorkers: "50%" ayarlandı

**Alt Görevler:**

- [x] TASK-003.1: jest.config.json'de `maxWorkers` ayarla
- [x] TASK-003.2: jest.setup.js'i optimize et (lazy mock)
- [x] TASK-003.3: Cache'i aktif et (`cache: true`)
- [x] TASK-003.4: Test süresini ölç (`npm test -- --verbose --no-cache`) → 2.2s
- [x] TASK-003.5: Hedef: <5 saniye ilk test başlatma → 2.2s ✅

**Tamamlanma Tarihi**: 16 Ocak 2026

---

### TASK-014: Veri Kalıcılığı Sorununun Çözümü (Web)

**İlişkili Spec**: SPEC-014
**Durum**: ✅ Completed
**Öncelik**: 🔴 Kritik
**Tahmini Süre**: 3 saat (Gerçekleşen: 1 saat)
**Atanan**: -
**Bağımlılıklar**: TASK-010

**Gereksinimler:**
- [x] Web tarafında "Mock Database" yerine kalıcı bir çözüm uygulandı (localStorage).
- [x] `database/connection.ts` dosyası platforma göre ayrıştırıldı ve persistent hale getirildi.

### TASK-015: Yemek Verisinin Ayrıştırılması (Decoupling)

**İlişkili Spec**: SPEC-015
**Durum**: ✅ Completed
**Öncelik**: 🟡 Yüksek
**Tahmini Süre**: 2 saat (Gerçekleşen: 30 dakika)
**Bağımlılıklar**: TASK-014

**Gereksinimler:**
- [x] `foods.ts` içindeki static array dışarı alındı (`database/foods.json`).
- [x] `getAllFoods` metodu JSON verisini kullanacak şekilde güncellendi.

### TASK-018: Stitch Design System Entegrasyonu (Refactoring)

**İlişkili Spec**: SPEC-018
**Durum**: ✅ Completed
**Öncelik**: 🟡 Yüksek
**Tahmini Süre**: 4 saat (Gerçekleşen: 2 saat)
**Bağımlılıklar**: TASK-008

**Gereksinimler:**
- [x] `FoodRatingComponent.tsx` içindeki hardcoded style'lar `theme.ts` tokenları ile değiştirildi.
- [x] `MenuPlanner.tsx` modernize edildi.
- [x] `ExploreScreen`, `LoginScreen` ve `SettingsScreen` modernize edildi.

### TASK-019: Liste Performans Optimizasyonu (Frontend)

**İlişkili Spec**: SPEC-019
**Durum**: ✅ Completed
**Öncelik**: 🟢 Orta
**Tahmini Süre**: 2 saat (Gerçekleşen: 30 dakika)

**Gereksinimler:**
- [x] `FoodRatingComponent` içindeki `ScrollView` -> `FlatList` dönüşümü yapıldı.
- [x] Paging ve windowSize optimizasyonları eklendi.

### TASK-009: Performance Optimizasyonu

**İlişkili Spec**: SPEC-009
**Durum**: ⏸️ Pending
**Öncelik**: 🟢 Orta
**Tahmini Süre**: 4 saat
**Atanan**: -
**Bağımlılıklar**: TASK-003, TASK-005

**Gereksinimler:**

- [ ] Image lazy loading + caching (expo-image)
- [ ] Memoization (useMemo, useCallback)
- [ ] Virtualization (FlatList for long lists)
- [ ] N+1 query problemi çözülmüş olmalı

**İlgili Dosyalar:**

- mealPlanner.ts
- database/foods.ts
- components/FoodRatingComponent.tsx

**Alt Görevler:**

- [ ] TASK-009.1: N+1 query problemini çöz (WHERE IN clause)
- [ ] TASK-009.2: expo-image entegre et
- [ ] TASK-009.3: FoodRatingComponent'e useMemo ekle
- [ ] TASK-009.4: FoodRatingComponent'e useCallback ekle
- [ ] TASK-009.5: Uzun listeler için FlatList kullan
- [ ] TASK-009.6: Performance monitoring ekle

---

### TASK-010: Database Refactoring Tamamlama

**İlişkili Spec**: SPEC-010
**Durum**: ✅ Completed
**Öncelik**: 🟢 Orta
**Tahmini Süre**: 2 saat (Gerçekleşen: 45 dakika)
**Atanan**: -
**Bağımlılıklar**: TASK-002

**Gereksinimler:**

- [x] database/ klasörü oluşturuldu
- [x] connection.ts (DB connection)
- [x] foods.ts (Food operations)
- [x] users.ts (User operations)
- [x] ratings.ts (Rating operations)
- [x] mealPlans.ts (Meal plan operations)
- [x] index.ts (Unified export)
- [x] database.ts kaldırıldı (Unified export lehine)
- [ ] Migration scripts (Sonraki aşama)

**İlgili Dosyalar:**

- database/index.ts
- database.ts (silindi)

---

## 🔵 DÜŞÜK ÖNCELİK GÖREVLER (Low Priority Tasks)

### TASK-011: PWA Offline Desteği Ekle

**İlişkili Spec**: SPEC-011
**Durum**: ⏸️ Pending
**Öncelik**: 🔵 Düşük
**Tahmini Süre**: 4 saat
**Atanan**: -
**Bağımlılıklar**: TASK-009

**Alt Görevler:**

- [ ] TASK-011.1: Service Worker oluştur
- [ ] TASK-011.2: Offline manifest oluştur
- [ ] TASK-011.3: Local storage entegrasyonu
- [ ] TASK-011.4: Offline mode UI
- [ ] TASK-011.5: Test yaz

---

### TASK-012: Multi-Language Desteği Ekle

**İlişkili Spec**: SPEC-012
**Durum**: ⏸️ Pending
**Öncelik**: 🔵 Düşük
**Tahmini Süre**: 6 saat
**Atanan**: -
**Bağımlılıklar**: TASK-008

**Alt Görevler:**

- [ ] TASK-012.1: i18n library seç (i18next, react-intl)
- [ ] TASK-012.2: TR translation dosyası oluştur
- [ ] TASK-012.3: EN translation dosyası oluştur
- [ ] TASK-012.4: Language switcher component
- [ ] TASK-012.5: Test yaz

---

### TASK-013: Monitoring ve Logging Ekle

**İlişkili Spec**: SPEC-013
**Durum**: ⏸️ Pending
**Öncelik**: 🔵 Düşük
**Tahmini Süre**: 4 saat
**Atanan**: -
**Bağımlılıklar**: TASK-006

**Alt Görevler:**

- [ ] TASK-013.1: Error tracking service seç (Sentry, Bugsnag)
- [ ] TASK-013.2: Analytics service seç (Firebase Analytics)
- [ ] TASK-013.3: Logger utility oluştur
- [ ] TASK-013.4: Entegrasyon
- [ ] TASK-013.5: Test yaz

---

### TASK-020: MCP Server Entegrasyonu

**İlişkili Spec**: SPEC-020 (Yeni)
**Durum**: ✅ Completed
**Öncelik**: 🟢 Orta
**Tahmini Süre**: 1 saat (Gerçekleşen: 30 dakika)

**Gereksinimler:**

- [x] `@modelcontextprotocol/sdk` yüklendi.
- [x] `mcp/server.ts` oluşturuldu (list_foods, generate_menu araçları).
- [x] `mcp-config.json` oluşturuldu.
- [x] `package.json`'a `mcp:start` script'i eklendi.

**Notlar:**

- YemekMenu projesi artık bir MCP Server olarak kullanılabilir.
- AI asistanları bu server üzerinden yemek listesine erişebilir ve mönü oluşturabilir.

---

## 📊 GÖREV ÖZETİ

| Kategori   | Toplam | ✅ Tamamlanan | 🔄 Devam Eden | ⏸️ Beklemede |
| ---------- | ------ | ------------- | ------------- | ------------ |
| 🔴 Kritik  | 4      | 4             | 0             | 0            |
| 🟡 Yüksek  | 5      | 5             | 0             | 0            |
| 🟢 Orta    | 5      | 2             | 0             | 3            |
| 🔵 Düşük   | 3      | 0             | 0             | 3            |
| **Toplam** | **17** | **11 (65%)**  | **0 (0%)**    | **6 (35%)**  |

---

## 🎯 HAFTALIK HEDEFLER (Current Sprint)

**Sprint**: Sprint-1 (13-20 Ocak 2026)
**Goal**: Core Backend ve İş Mantığı İyileştirmeleri

**Bu Hafta Yapılacaklar:**

- [x] TASK-001: Jest Configuration Düzeltmeli ✅
- [x] TASK-002: Versiyon Uyunsuzluğunu Çözmeli ✅
- [x] TASK-003: Test Server Hızlandırmalı ✅
- [x] TASK-004: Authentication Güvenliğini İyileştirmeli ✅
- [x] TASK-005: Menü Planlama Algoritmasını Geliştirmeli ✅
- [x] TASK-006: Error Handling İyileştirmeli ✅
- [x] TASK-007: Type Coverage İyileştirmeli ✅
- [x] TASK-016: Güvenli ID Üretimi ✅
- [x] TASK-017: İş Mantığı Ayrıştırması ✅
- [x] TASK-010: Database Refactoring ✅ (Erken tamamlandı)

---

## 📝 GÖREV GÜNCELLEME NOTLARI

### 16 Ocak 2026

- ✅ TASK-001: Jest Configuration Düzeltmeli ✅
  - @types/jest install edildi
  - Babel config güncellendi
  - jest.config.json optimize edildi
  - jest.polyfills.js güncellendi (window object defined)
  - jest.setup.js optimize edildi (mock'lar güncellendi)
  - Testler çalışıyor (2/2 geçti)
- ✅ TASK-003: Test Server Hızlandırmalı ✅
  - Test environment node yapıldı
  - Jest cache aktif
  - Test süresi 2.2s (hedef: <5s)
- ✅ TASK-002: Versiyon Uyumsuzluğu Çözmeli ✅
  - react 19.1.0 → 18.3.1'a düşürüldü
  - react-dom 19.1.0 → 18.3.1'a düşürüldü
  - @types/react 19.1.17 → 18.3.12'ye düşürüldü
  - npm install başarılı (675 packages)
  - npm audit 0 vulnerabilities
  - Testler çalışıyor (2/2 geçti)
- 📝 PROJE_SPECS.md oluşturuldu
- 📝 PROJECT_TASKS.md oluşturuldu

### Sprint-1 İlerleme (13-20 Ocak 2026)

- ✅ 3/4 kritik görev tamamlandı (75%)
- 🔄 1/4 kritik görev devanıyor (TASK-004)
- 🎯 Sprint hedefine yakın (1 görev kaldı)

---

## 🔗 İLİŞKİLİ DOSYALAR

- **PROJE_SPECS.md**: Proje spesifikasyonları (ne yapılmalı)
- **PROJECT_TASKS.md**: Detaylı görev takibi (nasıl yapılacak)
- **TODO.md**: Eski görev listesi (legacy)
- **README.md**: Proje açıklaması

---

**Not**: Bu dosya PROJE_SPECS.md ile birlikte kullanılır. Her spec için ilgili TASK'ler oluşturulur.
**Güncelleme**: Yapılanları silme, sadece durumunu güncelle (⏸️ → 🔄 → ✅)
