# 🚀 YemekMenü: Mağaza Yayınlama Rehberi

Uygulamanız teknik ve görsel olarak App Store ve Google Play Store için hazır hale getirilmiştir. İşte başarıyla yayınlamak için takip etmeniz gereken son adımlar:

## 1. Görsel Varlıkların Hazırlanması

`app.json` içinde referans verilen ikonların (`assets/images/`) kurumsal temamıza uygun olduğundan emin olun:

- **İkon:** 1024x1024 px (Şeffaf olmayan arka plan).
- **Splash Screen:** 2048x2048 px (Ortalanmış logo).

## 2. EAS Build ve Mağaza Gönderimi

Expo'nun en güncel yayınlama araçlarını (EAS) kullanmanızı öneririm:

### Adım 1: EAS CLI Kurulumu ve Giriş

```bash
npm install -g eas-cli
eas login
```

### Adım 2: Proje Yapılandırması

```bash
eas build:configure
```

### Adım 3: Android Yayını (.aab)

Google Play Store için üretim paketi oluşturun:

```bash
eas build --platform android --profile production
```

### Adım 4: iOS Yayını (.ipa)

App Store Connect'e gönderim için:

```bash
eas build --platform ios --profile production
```

## 3. Yayınlama Öncesi Son Kontroller ✅

- [ ] **Açıklamalar:** Mağaza açıklamasında "Ekonomi Modu" ve "Beslenme Uzmanı" özelliklerini vurgulamayı unutmayın.
- [ ] **Ekran Görüntüleri:** Uygulamanın modern Orange/Charcoal tasarımını gösteren şık ekran görüntüleri kullanın.
- [ ] **Üretim Testi:** `eas build` ile oluşturulan paketi TestFlight (iOS) veya Internal Testing (Android) üzerinden son bir kez deneyin.

## 🌟 Profesyonel Öneriler

- **Maliyet Verisi:** `price_detection_strategy.md` dosyasındaki yöntemlerden birini seçerek ilerleyen sürümlerde sistemi daha da otomatikleştirebilirsiniz.
- **Kullanıcı Geri Bildirimi:** Uygulama içindeki oylama verilerini kullanarak mönüleri her ay daha da kişiselleştirin.

Uygulamanızın mağazalardaki başarısını heyecanla bekliyoruz!

---

_Antigravity AI - Başarı Yolculuğunuzda Yanınızda_
