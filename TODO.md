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

## 🚩 Current Problems

1. **Görsel Atama**: 200 yemek için %95+ benzersiz görsel hedefi
2. **20 Yeni Yemek**: Görsel ve veri girişi gerekiyor
3. **Registry**: 104 görsel → 200 yemek için yetersiz

## 📅 Pending Tasks

- [ ] **20 Yeni Yemek Verisi**: NutritionalInfo, priceLevel, category tanımlamaları
- [ ] **200 Yemek Görsel Ataması**: Firecrawl ile yemek.com'dan toplama
- [ ] **Registry Genişletme**: 104 → 200 görsel
- [ ] **foods.ts Güncelleme**: 325 → 200 yemek (filtreleme)
- [ ] **Final Test**: 200 yemek için %95+ benzersizlik validasyonu

## ✅ Accomplished Today (30 Ocak 2026)

- **Strateji Değişimi**: 325 → 200 yemek kararı (Yemeksepeti verilerine göre)
- **Hybrid Liste**: 180 mevcut + 20 yeni = 200 yemek listesi oluşturuldu
- **Yemeksepeti Analizi**: En popüler 50 yemek belirlendi
- **Eksik Tespiti**: 20 popüler yemek mevcut listede olmadığı tespit edildi
- **Rapor**: `hybrid_200_foods.json` oluşturuldu
