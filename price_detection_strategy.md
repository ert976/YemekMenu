# 📊 Malzeme Fiyat Tespit ve Veri Kaynağı Stratejisi

Kullanıcının "malzeme fiyatlarını nasıl tespit ederiz" sorusu, uygulamanın "Ekonomi Modu"ndan gerçek bir "Kârlılık ve Maliyet Analizi" sistemine geçişi için anahtardır. İşte bu veriyi toplamak ve güncel tutmak için 3 ana strateji:

## 1. Dış Veri Kaynakları & API Entegrasyonu (Otomatik)

En profesyonel ve ölçeklenebilir yöntemdir. Güncel piyasa verilerini sağlayan servisler kullanılabilir:

- **Resmi Veriler (TÜİK / TCMB):** Temel gıda maddelerinin aylık ortalama fiyatlarını çeken bir servis yazılabilir.
- **Market API'leri:** Büyük zincir marketlerin (Getir, Migros vb.) ürün fiyatlarını sağlayan (veya halka açık verilerinden beslenen) API'ler ile o günkü "Mercimek" veya "Kıyma" fiyatı çekilerek porsiyon maliyeti dinamik hesaplanabilir.

## 2. Web Scraping (Yarı-Otomatik)

Eğer doğrudan bir API yoksa, `Firecrawl` veya benzeri araçlarla rakip yemek firmalarının veya online marketlerin fiyat listeleri periyodik olarak taranabilir:

- **Strateji:** Haftada bir kez en popüler 50 malzemenin fiyatı büyük market sitelerinden taranır.
- **AI Normalizasyon:** Farklı birimlerdeki (adet, kg, paket) veriler Gemini 1.5 kullanılarak "Birim Fiyat" (₺/gr) haline getirilir.

## 3. Kurumsal Giriş Paneli (Manuel - En Doğru Sonuç)

Yemek firmaları için en sağlıklı yöntem, kendi satın alma fiyatlarını girmeleridir:

- **Maliyet Paneli:** Uygulamaya "Firma Modu" eklendiğinde, firma "Bugün mercimeği ₺40'dan aldım" diyerek giriş yapar.
- **Reçete Sistemi:** Her yemeğe (örn: Mercimek Çorbası) bir reçeçe (100gr mercimek, 10gr yağ) atanır. Uygulama otomatik olarak porsiyon maliyetini ₺X olarak hesaplar.

## 🚀 Teknik Yol Haritası (Next Steps)

1. **Aşama:** Şu anki `priceLevel` (1, 2, 3) mantığını kullanarak algoritmayı stabilize etme. (Tamamlandı ✅)
2. **Aşama:** Yemeğe `ingredients[]` (Malzemeler) dizisi eklenmesi.
3. **Aşama:** Bir "Mock Price API" ile rastgele güncellenen malzeme fiyatlarını simüle ederek dinamik maliyet hesaplama.
4. **Aşama:** Gerçek bir API veya Scraper ile canlı verilere bağlanma.

> [!TIP]
> **Antigravity Tavsiyesi:** İlk aşamada veriyi her gün çekmek yerine, popüler bir marketin fiyat listesini ayda bir kez JSON olarak sisteme "statik" olarak gömmek ve üzerinden çarpanla hesaplama yapmak, yayınlama hızı (Time-to-Market) açısından en verimli yoldur.

---

_YemekMenü - Veri Odaklı Gastronomi Vizyonu_
