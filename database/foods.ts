import { Food } from "../types";
import { appState, saveState } from "./state";

export const COMMON_FOODS: Food[] = [
  // --- ÇORBALAR (1-15) ---
  { id: 1, name: "Mercimek Çorbası", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mercimek_Corba.jpg/800px-Mercimek_Corba.jpg", category: "Çorbalar", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 2, name: "Ezogelin Çorbası", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ezogelin_corba.jpg/800px-Ezogelin_corba.jpg", category: "Çorbalar", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 3, name: "Yayla Çorbası", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yayla_çorbası.jpg/800px-Yayla_çorbası.jpg", category: "Çorbalar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 4, name: "Tarhana Çorbası", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tarhana_soup.jpg/800px-Tarhana_soup.jpg", category: "Çorbalar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 5, name: "Domates Çorbası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/09/domates-corbasi-asama-10.jpg", category: "Çorbalar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 6, name: "Düğün Çorbası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/dugun-corbasi-yemekcom.jpg", category: "Çorbalar", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 7, name: "Mantar Çorbası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/mantar-corbasi-asama-7.jpg", category: "Çorbalar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 8, name: "Şehriye Çorbası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/tel-sehriye-corbasi-asama-9.jpg", category: "Çorbalar", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 9, name: "Kelle Paça", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/kelle-paca-corbasi-asama-11.jpg", category: "Çorbalar", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 10, name: "İşkembe Çorbası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/iskembe-corbasi-asama-10.jpg", category: "Çorbalar", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },

  // --- SEBZE YEMEKLERİ (16-45) ---
  { id: 16, name: "Taze Fasulye", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Taze_fasulye.jpg/800px-Taze_fasulye.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 17, name: "Bamya", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/etli-bamya-yemekcom.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 18, name: "Karnıyarık", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/karniyarik-yemekcom.jpg", category: "Sebze Yemekleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 19, name: "İmambayıldı", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/imambayildi-asama-10.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 20, name: "Zeytinyağlı Enginar", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/zeytinyagli-enginar-asama-10.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 3 },
  { id: 21, name: "Ispanak", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/ispanak-yemegi-asama-8.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 22, name: "Pırasa", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/zeytinyagli-pirasa-asama-9.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 23, name: "Türlü", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/etli-turlu-asama-11.jpg", category: "Sebze Yemekleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 24, name: "Pazı Sarması", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/pazi-sarmasi-asama-10.jpg", category: "Sebze Yemekleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 25, name: "Kabak Mücver", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/mucver-yemekcom.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },

  // --- ETLİ YEMEKLER & KEBAPLAR (46-100) ---
  { id: 46, name: "Adana Kebap", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adana_kebabı.jpg/800px-Adana_kebabı.jpg", category: "Döner & Kebap", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 47, name: "Urfa Kebap", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/05/urfa-kebabi-asama-10.jpg", category: "Döner & Kebap", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 48, name: "İskender Kebap", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/ev-yapimi-iskender-kebap-asama-10.jpg", category: "Döner & Kebap", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 49, name: "Etli Ekmek", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/etli-ekmek-asama-10.jpg", category: "Etli Yemekler", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 50, name: "Tas Kebabı", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/tas-kebabi-asama-10.jpg", category: "Etli Yemekler", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 51, name: "Hünkar Beğendi", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/hunkar-begendi-asama-11.jpg", category: "Etli Yemekler", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 52, name: "Kuzu İncik", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/kuzu-incik-asama-10.jpg", category: "Etli Yemekler", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 53, name: "İzmir Köfte", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/izmir-kofte-asama-10.jpg", category: "Etli Yemekler", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 54, name: "Kadınbudu Köfte", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/kadinbudu-kofte-asama-10.jpg", category: "Etli Yemekler", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 55, name: "Çökertme Kebabı", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/cokertme-kebabi-asama-11.jpg", category: "Etli Yemekler", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },

  // --- BAKLAGİLLER (101-120) ---
  { id: 101, name: "Kuru Fasulye", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuru_fasulye.jpg/800px-Kuru_fasulye.jpg", category: "Baklagiller", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 102, name: "Nohut", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/etli-nohut-yemegi-asama-11.jpg", category: "Baklagiller", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 103, name: "Yeşil Mercimek", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/yesil-mercimek-yemegi-asama-8.jpg", category: "Baklagiller", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 104, name: "Barbunya Pilaki", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/zeytinyagli-barbunya-pilaki-asama-11.jpg", category: "Baklagiller", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },

  // --- KAHVALTILIKLAR (121-250) ---
  { id: 121, name: "Menemen", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Menemen.jpg/800px-Menemen.jpg", category: "Kahvaltı", subCategory: "main", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 122, name: "Sahanda Yumurta", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/sahanda-yumurta-asama-5.jpg", category: "Kahvaltı", subCategory: "main", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 123, name: "Sucuklu Yumurta", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/sucuklu-yumurta-asama-5.jpg", category: "Kahvaltı", subCategory: "main", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 124, name: "Mıhlama / Kuymak", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/mihlama-asama-7.jpg", category: "Kahvaltı", subCategory: "main", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 125, name: "Beyaz Peynir", image_url: "https://images.unsplash.com/photo-1559561853-08451507c73a", category: "Kahvaltı", subCategory: "side", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 126, name: "Zeytin (Siyah/Yeşil)", image_url: "https://images.unsplash.com/photo-1536511132770-e51c6c06830b", category: "Kahvaltı", subCategory: "side", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 127, name: "Bal - Kaymak", image_url: "https://images.unsplash.com/photo-1584947897500-0387532f7a61", category: "Kahvaltı", subCategory: "side", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 128, name: "Domates - Salatalık Söğüş", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Kahvaltı", subCategory: "side", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 129, name: "Simit", image_url: "https://images.unsplash.com/photo-1603532612711-46c39b5639f1", category: "Kahvaltı", subCategory: "bakery", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 130, name: "Poğaça", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/peynirli-pogaca-asama-10.jpg", category: "Kahvaltı", subCategory: "bakery", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 131, name: "Türk Çayı", image_url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3", category: "Kahvaltı", subCategory: "drink", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },

  // --- TATLILAR (251-300) ---
  { id: 251, name: "Baklava", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/fistikli-baklava-asama-11.jpg", category: "Şerbetli Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 252, name: "Sütlaç", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/firin-sutlac-yemekcom.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 253, name: "Künefe", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/kunefe-asama-10.jpg", category: "Şerbetli Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 254, name: "Kazandibi", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/kazandibi-asama-11.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 255, name: "Revani", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/revani-asama-10.jpg", category: "Şerbetli Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },

  // --- MEYVELER (301+) ---
  { id: 301, name: "Elma", image_url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6", category: "Meyveler", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1, nutritionalInfo: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2 } },
  { id: 302, name: "Muz", image_url: "https://images.unsplash.com/photo-1571771894821-ad9902d83f4e", category: "Meyveler", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1, nutritionalInfo: { calories: 89, protein: 1.1, carbs: 23, fat: 0.3 } },
  { id: 303, name: "Mevsim Meyveleri Tabağı", image_url: "https://images.unsplash.com/photo-1519996529931-28324d5a630e", category: "Meyveler", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2, nutritionalInfo: { calories: 120, protein: 1, carbs: 30, fat: 0.5 } },

  // --- EKSTRALAR (400+) ---
  { id: 401, name: "Pirinc Pilavı", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/pirinc-pilavi-asama-10.jpg", category: "Pilavlar", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 402, name: "Bulgur Pilavı", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/sebzeli-bulgur-pilavi-asama-9.jpg", category: "Pilavlar", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 403, name: "Makarna (Salçalı)", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/salcali-makarna-asama-7.jpg", category: "Hamur İşleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 404, name: "Mantı", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/kayseri-mantisi-asama-10.jpg", category: "Hamur İşleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 405, name: "Lahmacun", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/ev-yapimi-lahmacun-asama-11.jpg", category: "Döner & Kebap", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 406, name: "Pide (Kuşbaşılı)", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/kusbasili-pide-asama-11.jpg", category: "Döner & Kebap", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 407, name: "Döner Dürüm", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/doner-durum-asama-5.jpg", category: "Döner & Kebap", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 408, name: "Çupra Izgara", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/cupra-izgara-asama-10.jpg", category: "Deniz Ürünleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 409, name: "Somon Izgara", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/firin-somon-asama-11.jpg", category: "Deniz Ürünleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 410, name: "Hamsi Tava", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/hamsi-tava-asama-8.jpg", category: "Deniz Ürünleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },

  // --- TOPLU EKLEME (500+) ---
  { id: 501, name: "Mercimek Köftesi", image_url: "https://images.unsplash.com/photo-1606787366850-de6330128bfc", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 502, name: "Kısır", image_url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 503, name: "Mücver", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 504, name: "Patlıcan Musakka", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 505, name: "Zeytinyağlı Yaprak Sarma", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 506, name: "Biber Dolması", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 507, name: "Karnıyarık", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 508, name: "Şakşuka", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 509, name: "Enginar", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 3 },
  { id: 510, name: "Kereviz", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 511, name: "Ispanak", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 512, name: "Pırasa", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 513, name: "Bezelye", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 514, name: "Bamya", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 515, name: "Semizotu", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 516, name: "Patates Oturtma", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 517, name: "Türlü", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 518, name: "Kabak Kalye", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 519, name: "Karnabahar Graten", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 520, name: "Brokoli Salatası", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 521, name: "Izgara Köfte", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Izgara & Mangal", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 522, name: "Tavuk Şiş", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Izgara & Mangal", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 523, name: "Kuzu Pirzola", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Izgara & Mangal", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 524, name: "Kanat Izgara", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Izgara & Mangal", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 525, name: "Antrikot", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Izgara & Mangal", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 526, name: "Beyti Sarma", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Döner & Kebap", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 527, name: "Ali Nazik", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Döner & Kebap", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 528, name: "Tepsi Kebabı", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Döner & Kebap", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 529, name: "Kağıt Kebabı", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Döner & Kebap", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 530, name: "Orman Kebabı", image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Döner & Kebap", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },

  // --- ÇORBALAR DEVAM ---
  { id: 601, name: "Yuvalama Çorbası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/yuvalama-asama-13.jpg", category: "Çorbalar", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 602, name: "Lebeniye Çorbası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/lebeniye-corbasi-asama-10.jpg", category: "Çorbalar", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 603, name: "Erişteli Yeşil Mercimek Çorbası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/yesil-mercimek-corbasi-asama-7.jpg", category: "Çorbalar", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 604, name: "Brokoli Çorbası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/kremali-brokoli-corbasi-asama-9.jpg", category: "Çorbalar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 605, name: "Balkabağı Çorbası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/balkabagi-corbasi-asama-9.jpg", category: "Çorbalar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 },

  // --- KAHVALTI DEVAM ---
  { id: 701, name: "Kıymalı Yumurta", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/kiymali-yumurta-asama-5.jpg", category: "Kahvaltı", subCategory: "main", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 702, name: "Çılbır", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/cilbir-asama-7.jpg", category: "Kahvaltı", subCategory: "main", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 703, name: "Patatesli Yumurta", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/patatesli-yumurta-asama-5.jpg", category: "Kahvaltı", subCategory: "main", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 704, name: "Sigara Böreği", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/sigara-boregi-asama-8.jpg", category: "Kahvaltı", subCategory: "bakery", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 705, name: "Paçanga Böreği", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/pacanga-boregi-asama-7.jpg", category: "Kahvaltı", subCategory: "bakery", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 706, name: "Gözleme (Peynirli)", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/peynirli-gozleme-asama-8.jpg", category: "Kahvaltı", subCategory: "bakery", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 707, name: "Acuka", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/acuka-asama-5.jpg", category: "Kahvaltı", subCategory: "side", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 708, name: "Pişi", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/pisi-asama-7.jpg", category: "Kahvaltı", subCategory: "bakery", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 709, name: "Pekmez - Tahin", image_url: "https://images.unsplash.com/photo-1584947897500-0387532f7a61", category: "Kahvaltı", subCategory: "side", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 710, name: "Kuru İncir - Ceviz", image_url: "https://images.unsplash.com/photo-1596560548464-f010549b84d7", category: "Kahvaltı", subCategory: "side", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },

  // --- TATLI VE DİĞERLERİ ---
  { id: 801, name: "Profiterol", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/profiterol-asama-12.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 802, name: "Keşkül", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/keskul-asama-6.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 803, name: "Tavukgöğsü", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/tavuk-gogsu-asama-8.jpg", category: "Sütlü Tatlılar", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 804, name: "Supangle", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/supangle-asama-7.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 805, name: "Ayva Tatlısı", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/ayva-tatlisi-asama-11.jpg", category: "Şerbetli Tatlılar", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 806, name: "Kabak Tatlısı", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/kabak-tatlisi-asama-8.jpg", category: "Şerbetli Tatlılar", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 807, name: "Tulumba Tatlısı", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/tulumba-tatlisi-asama-12.jpg", category: "Şerbetli Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 808, name: "Şekerpare", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/sekerpare-asama-11.jpg", category: "Şerbetli Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 809, name: "İrmik Helvası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/irmik-helvasi-asama-7.jpg", category: "Şerbetli Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 810, name: "Un Helvası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/un-helvasi-asama-6.jpg", category: "Şerbetli Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },

  // --- SON DOKUNUŞLAR ---
  { id: 901, name: "İçli Köfte", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/icli-kofte-asama-11.jpg", category: "Etli Yemekler", is_vegetarian: false, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 902, name: "Çiğ Köfte", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/etsiz-cig-kofte-asama-10.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 903, name: "Kısır", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/kisir-yemekcom.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 904, name: "Haydari", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/haydari-yemekcom.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 905, name: "Humus", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/humus-yemekcom.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 906, name: "Deniz Börülcesi", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/deniz-borulcesi-asama-9.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 907, name: "Babagannuş", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/babagannus-asama-8.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 908, name: "Atom", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2019/02/atom-mezesi-tarifi.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 909, name: "Muhammara", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/muhammara-asama-5.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 910, name: "Cacık", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/cacik-yemekcom.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 911, name: "Gavurdağı Salatası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/gavurdagi-salatasi-asama-6.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 912, name: "Çoban Salatası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/coban-salatasi-yemekcom.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 913, name: "Roka Salatası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/roka-salatasi-asama-5.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 914, name: "Piyaz", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/antalya-piyazi-asama-9.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 915, name: "Rus Salatası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/rus-salatasi-asama-7.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 916, name: "Tarator", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/havuc-tarator-asama-6.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 917, name: "Havuç Tarator", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/havuc-tarator-asama-6.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 918, name: "Patlıcan Salatası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/patlican-salatasi-asama-6.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 919, name: "Köpoğlu", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/kopoglu-asama-9.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 920, name: "Girit Ezmesi", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/girit-ezmesi-asama-5.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 },

  // --- SON SERİ ---
  { id: 1001, name: "İmam Bayıldı", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/imambayildi-asama-10.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 1002, name: "Zeytinyağlı Enginar", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/zeytinyagli-enginar-asama-10.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 3 },
  { id: 1003, name: "Zeytinyağlı Taze Fasulye", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/zeytinyagli-taze-fasulye-asama-11.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 1004, name: "Zeytinyağlı Barbunya", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/zeytinyagli-barbunya-pilaki-asama-11.jpg", category: "Baklagiller", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 1005, name: "Zeytinyağlı Pırasa", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/zeytinyagli-pirasa-asama-9.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 1006, name: "Zeytinyağlı Brüksel Lahanası", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/bruksel-lahanasi-yemegi-asama-7.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 1007, name: "Zeytinyağlı Karnabahar", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/firin-karnabahar-asama-7.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 1008, name: "Zeytinyağlı Yer Elması", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/02/yer-elmasi-yemegi-asama-9.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 1009, name: "Zeytinyağlı Şevketi Bostan", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/sevketi-bostan-asama-10.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 3 },
  { id: 1010, name: "Zeytinyağlı Bamya", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/etli-bamya-yemekcom.jpg", category: "Sebze Yemekleri", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 1011, name: "Saray Sarması", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/saray-sarmasi-asama-7.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 1012, name: "Magnolia", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/magnolia-asama-6.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 1013, name: "Trileçe", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/trilece-asama-11.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 },
  { id: 1014, name: "Güllaç", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/gullac-asama-9.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 3 },
  { id: 1015, name: "Aşure", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/asure-asama-15.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 2 },
  { id: 1016, name: "Keşkül", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/keskul-asama-6.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 1017, name: "Zerde", image_url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/zerde-asama-6.jpg", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: true, is_halal: true, priceLevel: 1 },
  { id: 1018, name: "Puding", image_url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 1019, name: "Meyveli Yoğurt", image_url: "https://images.unsplash.com/photo-1488477181946-6428a0291777", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 1 },
  { id: 1020, name: "Dondurma", image_url: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a", category: "Sütlü Tatlılar", is_vegetarian: true, is_vegan: false, is_halal: true, priceLevel: 2 }
];

const getNutritionByCategory = (category: string) => {
  switch (category) {
    case "Çorbalar":
      return { calories: 150, protein: 5, carbs: 20, fat: 4 };
    case "Baklagiller":
      return { calories: 350, protein: 20, carbs: 50, fat: 2 };
    case "Sebze Yemekleri":
      return { calories: 200, protein: 4, carbs: 15, fat: 12 };
    case "Izgara & Mangal":
    case "Döner & Kebap":
    case "Etli Yemekler":
      return { calories: 450, protein: 35, carbs: 10, fat: 25 };
    case "Hamur İşleri":
      return { calories: 400, protein: 12, carbs: 60, fat: 15 };
    case "Kahvaltı":
      return { calories: 300, protein: 15, carbs: 20, fat: 18 };
    case "Pilavlar":
      return { calories: 300, protein: 5, carbs: 50, fat: 8 };
    case "Sütlü Tatlılar":
      return { calories: 250, protein: 6, carbs: 40, fat: 8 };
    case "Şerbetli Tatlılar":
      return { calories: 450, protein: 4, carbs: 70, fat: 18 };
    case "Meyveler":
      return { calories: 80, protein: 1, carbs: 20, fat: 0 };
    default:
      return { calories: 250, protein: 8, carbs: 30, fat: 10 };
  }
};

export const getAllFoods = async (): Promise<Food[]> => {
  return COMMON_FOODS.map((f) => ({
    ...f,
    nutritionalInfo:
      f.nutritionalInfo || getNutritionByCategory(f.category as string),
    estimatedPrice: f.priceLevel ? f.priceLevel * 45 : 85,
  }));
};

export const getFoodById = async (id: number): Promise<Food | null> => {
  const foods = await getAllFoods();
  return foods.find((f) => f.id === id) || null;
};

export const getFoodsByIds = async (ids: number[]): Promise<Food[]> => {
  const foods = await getAllFoods();
  return foods.filter((f) => ids.includes(f.id));
};

export const getUserPreferences = async (userId: number) => {
  if (!appState.preferences[userId]) {
    appState.preferences[userId] = { likedIds: [], dislikedIds: [] };
  }
  return appState.preferences[userId];
};

/**
 * Saves a user's preference for a specific food.
 * @param userId - The ID of the user.
 * @param foodId - The ID of the food.
 * @param type - The type of preference ('like' or 'dislike').
 */
export const saveUserPreference = async (
  userId: number,
  foodId: number,
  type: "like" | "dislike",
) => {
  const prefs = await getUserPreferences(userId);
  if (type === "like") {
    if (!prefs.likedIds.includes(foodId)) prefs.likedIds.push(foodId);
    prefs.dislikedIds = prefs.dislikedIds.filter((id) => id !== foodId);
  } else {
    if (!prefs.dislikedIds.includes(foodId)) prefs.dislikedIds.push(foodId);
    prefs.likedIds = prefs.likedIds.filter((id) => id !== foodId);
  }
  await saveState();
};