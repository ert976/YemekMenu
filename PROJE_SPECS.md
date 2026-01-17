# YemekMenu Proje Spesifikasyonları

> Spec-Driven Development Yaklaşımı ile Proje Yönetimi
> Tarih: 16 Ocak 2026
> Versiyon: 3.0.0

---

## 📋 PROJE GENEL BAKIŞ

### 🎯 Proje Amacı
Kişisel menü planlama uygulaması ile kullanıcıların sağlıklı ve dengeli beslenmesine yardımcı olmak.

### 🏗️ Mimari Kararları

| Karar | Açıklama | Durum |
|-------|----------|-------|
| Platform | React Native + Expo (Cross-platform) | ✅ |
| Database | SQLite (Mobile) / In-memory (Web) | ✅ |
| Language | TypeScript (%90+ type coverage) | ✅ |
| State Management | React Context API | ✅ |
| Routing | Expo Router (File-based) | ✅ |
| Testing | Jest + React Native Testing Library | ⚠️ (Config sorunu var) |
| Styling | React Native StyleSheet + Custom Theme | ✅ |
| Authentication | Local SQLite (Hash password) | ✅ |

---

## 🔴 KRİTİK SPECS (Critical Specs)

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
# Gerçek: 2/2 test geçti, 2.363s, 0 errors
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

### SPEC-003: Test Server Hızlı Başlatmalı
**Priorite**: 🔴 Kritik
**Durum**: ✅ Tamamlandı
**Metric**: Test server <5 saniyede başlamalı

**Gereksinimler:**
- [x] Jest cache'i aktif olmalı
- [x] Test environment optimize edilmiş olmalı
- [x] Mock'lar optimize edilmiş olmalı
- [x] Parallel test execution aktif olmalı

**Kabul Kriterleri:**
```bash
npm test -- --watch
# Sonuç: <5 saniyede ilk test çalışır
# Gerçek: 2.363s, hedef: <5s ✅
```

---

## 🟡 YÜKSEK ÖNCELİK SPECS (High Priority Specs)

### SPEC-004: Authentication Güvenli Olmalı
**Priorite**: 🟡 Yüksek
**Durum**: ⚠️ Partial (Hash var ama weak)
**Metric**: Password hash + salt kullanmalı

**Gereksinimler:**
- [x] Password hash'leniyor (crypto-utils.ts)
- [ ] Salt kullanılmalı
- [ ] Rate limiting eklenmeli
- [ ] Session timeout eklenmeli
- [ ] Password complexity check eklenmeli

---

### SPEC-005: Menü Planlama Algoritması Dengeli Olmalı
**Priorite**: 🟡 Yüksek
**Durum**: ⚠️ Random (Yetersiz)
**Metric**: Günlük kalori hedefine uygun, kategori çeşitliliği

**Gereksinimler:**
- [ ] Günlük kalori hedefi (1800-2500 kcal)
- [ ] Kategori çeşitliliği (her gün farklı kategoriler)
- [ ] Aynı yemeğin tekrar seçilmemesi (7 gün içinde)
- [ ] Protein/Karbonhidrat/Yağ oranı dengeli olmalı (40-30-30)
- [ ] Kullanıcı derecelendirmelerine göre öneri yapmalı

---

### SPEC-006: Error Handling Kapsamlı Olmalı
**Priorite**: 🟡 Yüksek
**Durum**: ⚠️ Yetersiz
**Metric**: Tüm async operasyonlarda error handling

**Gereksinimler:**
- [ ] Network error handling
- [ ] Database error handling
- [ ] Validation error handling
- [ ] User-friendly error messages
- [ ] Error boundary component

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
**Durum**: ⚠️ Temel (Modernizasyon gerekli)
**Metric**: Stitch tasarım sistemine uygun, cross-platform responsive

**Gereksinimler:**
- [ ] Stitch tasarım system entegrasyonu
- [ ] Mobile + Web responsive
- [ ] Dark mode desteği
- [ ] Animasyonlar (hover, press, transitions)
- [ ] Accessibility (screen reader, high contrast)

---

### SPEC-009: Performance Optimize Edilmiş Olmalı
**Priorite**: 🟢 Orta
**Durum**: ⚠️ Temel (Optimizasyon gerekli)
**Metric**: Load time < 3s, smooth animations (60fps)

**Gereksinimler:**
- [ ] Image lazy loading + caching (expo-image)
- [ ] Code splitting (expo-router otomatik)
- [ ] Memoization (useMemo, useCallback)
- [ ] Virtualization (FlatList for long lists)
- [ ] N+1 query problemi çözülmüş olmalı

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
- [ ] index.ts (Unified export)
- [ ] Migration scripts

---

## 🔵 DÜŞÜK ÖNCELİK SPECS (Low Priority Specs)

### SPEC-011: PWA Offline Desteği Olmalı
**Priorite**: 🔵 Düşük
**Durum**: ❌ Yok
**Metric**: Offline mode ile basic functionality

---

### SPEC-012: Multi-Language Desteği Olmalı
**Priorite**: 🔵 Düşük
**Durum**: ❌ Yok
**Metric**: i18n library ile TR + EN desteklemeli

---

### SPEC-013: Monitoring ve Logging Olmalı
**Priorite**: 🔵 Düşük
**Durum**: ❌ Yok
**Metric**: Error tracking, analytics, performance monitoring

---

## 📊 SPECS ÖZETİ

| Kategori | Toplam | Tamamlanmış | Devam Eden | Beklemede |
|----------|--------|-------------|------------|------------|
| 🔴 Kritik | 3 | 3 | 0 | 0 |
| 🟡 Yüksek | 4 | 1 | 3 | 0 |
| 🟢 Orta | 3 | 1 | 2 | 0 |
| 🔵 Düşük | 3 | 0 | 0 | 3 |
| **Toplam** | **13** | **5 (38%)** | **5 (38%)** | **3 (23%)** |

---

## 🎯 MEVCUT DURUM ANALİZİ

### ✅ Güçlü Yanlar (Strengths)
1. **Type Safety**: types.ts ile iyi bir type infrastructure var
2. **Modüler Database**: database/ klasörü ile modüler yapı oluşturulmuş
3. **Authentication**: Hash password ile güvenli auth var
4. **Rich Food Database**: 93+ yemek verisi var

### ⚠️ Zayıf Yanlar (Weaknesses)
1. **Test Framework**: Jest config hatası, testler çalışmıyor
2. **Performance**: Test server çok yavaş başlıyor
3. **Version Conflicts**: React Native ve React type uyumsuzluğu
4. **Error Handling**: Yetersiz error handling

### 🔴 Kritik Sorunlar (Critical Issues)
1. **SPEC-001**: Jest testleri çalışmıyor (babel config eksik)
2. **SPEC-002**: React Native 0.75.4 + @types/react 19.1.17 conflict
3. **SPEC-003**: Test server >30 saniye başlıyor

---

## 📝 SPECS VERSİYON GEÇMİŞİ

| Versiyon | Tarih | Değişiklikler |
|----------|-------|---------------|
| 3.0.0 | 16 Jan 2026 | Spec-driven approach ile yeniden düzenlendi |
| 2.1.0 | 15 Jan 2026 | PROJE_ANALIZI_UZMAN.md'den alındı |
| 2.0.0 | 13 Jan 2026 | TODO.md güncellendi |
| 1.0.0 | 04 Jan 2026 | İlk versiyon |

---

**Not**: Bu dosya PROJECT_TASKS.md ile birlikte kullanılır. Her spec için ilgili TASK'ler oluşturulur.
