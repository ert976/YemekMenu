import { Food } from "../types";
import { appState, saveState } from "./state";

export const COMMON_FOODS: Food[] = [
  // --- ÇORBALAR (1-15) ---
  {
    id: 1,
    name: "Mercimek Çorbası",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mercimek_Corba.jpg/800px-Mercimek_Corba.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 2,
    name: "Ezogelin Çorbası",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ezogelin_corba.jpg/800px-Ezogelin_corba.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 3,
    name: "Yayla Çorbası",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yayla_çorbası.jpg/800px-Yayla_çorbası.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 4,
    name: "Tarhana Çorbası",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tarhana_soup.jpg/800px-Tarhana_soup.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 5,
    name: "Domates Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/09/domates-corbasi-asama-10.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 6,
    name: "İşkembe Çorbası",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/İşkembe_çorbası.jpg",
    category: "Çorbalar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 7,
    name: "Kelle Paça",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kelle_Paça_%28cropped%29.jpg/640px-Kelle_Paça_%28cropped%29.jpg",
    category: "Çorbalar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 8,
    name: "Tavuk Suyu Çorba",
    image_url:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2014/11/terbiyeli-tavuk-suyu-corbasi-yemekcom.jpg",
    category: "Çorbalar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 9,
    name: "Mantar Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2019/01/sutlu-mantar-corbasi-tarifi.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 10,
    name: "Şehriye Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2018/12/tel-sehriye-corbasi-yemekcom.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 11,
    name: "Brokoli Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/brokoli-corbasi-yemekcom.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 12,
    name: "Düğün Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/dugun-corbasi-tarifi.jpg",
    category: "Çorbalar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 13,
    name: "Yüksük Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/11/yuksuk-corbasi-tarifi.jpg",
    category: "Çorbalar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 14,
    name: "Ayran Aşı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/06/ayran-asi-corbasi-yemekcom.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 15,
    name: "Lebeniye Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/02/lebeniye-corbasi-tarifi.jpg",
    category: "Çorbalar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },

  // --- SEBZE YEMEKLERİ (16-35) ---
  {
    id: 16,
    name: "Taze Fasulye",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Taze_fasulye.jpg/800px-Taze_fasulye.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 17,
    name: "Zeytinyağlı Enginar",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Zeytinyağlı_Enginar.jpg/800px-Zeytinyağlı_Enginar.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 18,
    name: "Kıymalı Ispanak",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Spinach_dish.jpg/800px-Spinach_dish.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 19,
    name: "İmambayıldı",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/İmambayıldı.jpg/800px-İmambayıldı.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 20,
    name: "Pırasa Yemeği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2017/11/zeytinyagli-pirasa-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 21,
    name: "Karnabahar Yemeği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/kiymali-karnabahar-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 22,
    name: "Kabak Dolması",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/08/etli-kabak-dolmasi-1.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 23,
    name: "Zeytinyağlı Barbunya",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/zeytinyagli-barbunya-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 24,
    name: "Bamya Yemeği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/08/bamya-yemegi-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 25,
    name: "Mücver",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/firinda-mucver-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 26,
    name: "Şakşuka",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/saksuka-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 27,
    name: "Türlü",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/09/turlu-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 28,
    name: "Kapuska",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/01/etsiz-kapuska-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 29,
    name: "Patlıcan Musakka",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/02/patlican-musakka-tarifi-.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 30,
    name: "Zeytinyağlı Kereviz",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/portakalli-kereviz-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 31,
    name: "Bakla Yemeği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/zeytinyagli-ic-bakla-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 32,
    name: "Semizotu Yemeği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/05/kiymali-semizotu-yemegi-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 33,
    name: "Biber Dolması",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/zeytinyagli-biber-dolmasi-yemekcom.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 34,
    name: "Karnıyarık",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/karniyarik-yemekcom.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 35,
    name: "Yaprak Sarma",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/zeytinyagli-yaprak-sarma-yeni.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },

  // --- ETLİ YEMEKLER & KEBAPLAR (36-60) ---
  {
    id: 36,
    name: "Adana Kebap",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adana_kebabı.jpg/800px-Adana_kebabı.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 37,
    name: "İskender Kebap",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/İskender_kebabı.jpg/800px-İskender_kebabı.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 38,
    name: "Izgara Köfte",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Köfte_grilled.jpg/800px-Köfte_grilled.jpg",
    category: "Izgara & Mangal",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 39,
    name: "Kuzu Tandır",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kuzu_Tandır.jpg/800px-Kuzu_Tandır.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 40,
    name: "Ali Nazik",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Alinazik_kebabı.jpg/800px-Alinazik_kebabı.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 41,
    name: "Beyti Kebap",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/02/beyti-kebabi-tarifi.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 42,
    name: "Hünkar Beğendi",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/hunkar-begendi-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 43,
    name: "Et Sote",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/11/et-sote-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 44,
    name: "Tas Kebabı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2018/06/tas-kebabi-yemekcom.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 45,
    name: "Çökertme Kebabı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/cokertme-kebabi-yemekcom.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 46,
    name: "Tavuk Şiş",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/05/tavuk-sis-tarifi.jpg",
    category: "Izgara & Mangal",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 47,
    name: "Kanat Izgara",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/10/soslu-tavuk-kanat-tarifi.jpg",
    category: "Izgara & Mangal",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 48,
    name: "Ciğer Tava",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/ciger-tava-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 49,
    name: "Kağıt Kebabı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/02/kagit-kebabi-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 50,
    name: "Kadınbudu Köfte",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/kadinbudu-kofte-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 51,
    name: "Dalyan Köfte",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/dalyan-kofte-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 52,
    name: "İslim Kebabı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/islim-kebabi-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 53,
    name: "Orman Kebabı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/orman-kebabi-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 54,
    name: "Fırında Tavuk",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/09/fırında-tavuk-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 55,
    name: "Sulu Köfte",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/02/sulu-kofte-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 56,
    name: "Patatesli Et Haşlama",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/01/et-haslama-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 57,
    name: "Güveç",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/09/etli-turlu-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 58,
    name: "Urfa Kebap",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Urfa_kebap.jpg/800px-Urfa_kebap.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 59,
    name: "Testi Kebabı",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Testi_kebab.jpg/800px-Testi_kebab.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 60,
    name: "Cağ Kebabı",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Oltu_cağ_kebabı.jpg/800px-Oltu_cağ_kebabı.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },

  // --- BAKLAGİLLER (61-70) ---
  {
    id: 61,
    name: "Kuru Fasulye",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuru_fasulye.jpg/800px-Kuru_fasulye.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 62,
    name: "Nohut Yemeği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/etli-nohut-yemegi-tarifi.jpg",
    category: "Baklagiller",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 63,
    name: "Yeşil Mercimek",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/12/yesil-mercimek-yemegi-tarifi.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 64,
    name: "Barbunya Plaki",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/zeytinyagli-barbunya-tarifi.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 65,
    name: "Mercimek Köftesi",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/mercimek-koftesi-yemekcom.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 66,
    name: "Falafel",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/02/falafel-tarifi.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 67,
    name: "Etli Kuru Fasulye",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/etli-kuru-fasulye-tarifi.jpg",
    category: "Baklagiller",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 68,
    name: "Piyaz",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/piyaz-tarifi.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 69,
    name: "Humus",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/humus-tarifi.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 70,
    name: "Maş Fasulyesi Salatası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/03/mas-fasulyesi-salatasi-tarifi.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },

  // --- HAMUR İŞLERİ (71-85) ---
  {
    id: 71,
    name: "Kayseri Mantısı",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Manti_Turkish.jpg/800px-Manti_Turkish.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 72,
    name: "Lahmacun",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lahmacun_gaziantep.jpg/800px-Lahmacun_gaziantep.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  // --- ÇORBALAR & BAŞLANGIÇLAR (200+) ---
  {
    id: 201,
    name: "Yayla Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/yayla-corbasi-tarifi.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 150, protein: 5, carbs: 15, fat: 8 },
  },
  {
    id: 202,
    name: "Ezogelin Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/ezogelin-corbasi-tarifi.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 140, protein: 7, carbs: 20, fat: 3 },
  },
  {
    id: 203,
    name: "Domates Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/09/domates-corbasi-yemekcom.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 120, protein: 3, carbs: 12, fat: 6 },
  },
  {
    id: 204,
    name: "Tarhana Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/tarhana-corbasi-tarifi.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 160, protein: 6, carbs: 25, fat: 4 },
  },
  {
    id: 205,
    name: "Sebze Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2017/12/sebze-corbasi-tarifi.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 90, protein: 2, carbs: 12, fat: 2 },
  },

  // --- ZEYTİNYAĞLILAR & VEGAN/VEJETARYEN ANA YEMEKLER (220+) ---
  {
    id: 220,
    name: "Zeytinyağlı Enginar",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/zeytinyagli-enginar-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
    nutritionalInfo: { calories: 180, protein: 4, carbs: 15, fat: 12 },
  },
  {
    id: 221,
    name: "İmam Bayıldı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/08/imam-bayildi-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
    nutritionalInfo: { calories: 250, protein: 4, carbs: 20, fat: 18 },
  },
  {
    id: 222,
    name: "Zeytinyağlı Taze Fasulye",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/zeytinyagli-taze-fasulye-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
    nutritionalInfo: { calories: 150, protein: 3, carbs: 10, fat: 10 },
  },
  {
    id: 223,
    name: "Biber Dolması (Zeytinyağlı)",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2018/06/biber-dolmasi-yemekcom.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 220, protein: 4, carbs: 35, fat: 8 },
  },
  {
    id: 224,
    name: "Kabak Mücver",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/kabak-mucver-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 280, protein: 8, carbs: 25, fat: 15 },
  },
  {
    id: 225,
    name: "Fırında Karnabahar",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2019/12/firinda-karnabahar-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 150, protein: 6, carbs: 12, fat: 8 },
  },
  {
    id: 226,
    name: "Mercimek Köftesi",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/mercimek-koftesi-yenii.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 300, protein: 12, carbs: 40, fat: 10 },
  },
  {
    id: 227,
    name: "Nohut Yemeği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/etli-nohut-yemegi-tarifi.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 350, protein: 15, carbs: 30, fat: 12 },
  },
  {
    id: 228,
    name: "Kuru Fasulye (Etsiz)",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/04/etsiz-kuru-fasulye-tarifi.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 340, protein: 14, carbs: 32, fat: 10 },
  },
  {
    id: 229,
    name: "Mantar Sote",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/02/mantar-sote-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
    nutritionalInfo: { calories: 160, protein: 5, carbs: 8, fat: 10 },
  },
  {
    id: 230,
    name: "Ispanak Yemeği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/kiymali-ispanak-tarifi.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 180, protein: 7, carbs: 10, fat: 11 },
  },

  // --- DİYET & SAĞLIKLI KAHVALTI ALTERNATİFLERİ (240+) ---
  {
    id: 240,
    name: "Avokado Soslu Yumurta",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/10/avokado-soslu-poce-yumurta-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    nutritionalInfo: { calories: 320, protein: 14, carbs: 8, fat: 25 },
  },
  {
    id: 241,
    name: "Yulaf Lapası (Meyveli)",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2018/02/muzlu-yulaf-lapasi-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
    nutritionalInfo: { calories: 280, protein: 8, carbs: 45, fat: 6 },
  },
  {
    id: 242,
    name: "Granola Kasesi",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2019/07/ev-yapimi-granola-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    nutritionalInfo: { calories: 350, protein: 10, carbs: 50, fat: 12 },
  },
  {
    id: 243,
    name: "Cevizli Lor",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/cevizli-lor-kavurmasi_1.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    nutritionalInfo: { calories: 180, protein: 12, carbs: 2, fat: 14 },
  },
  {
    id: 244,
    name: "Tofu Scramble (Vegan Menemen)",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2021/03/tofu-scramble-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 3,
    nutritionalInfo: { calories: 220, protein: 15, carbs: 8, fat: 14 },
  },
  {
    id: 245,
    name: "Smoothie Bowl",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/07/smoothie-bowl-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 3,
    nutritionalInfo: { calories: 250, protein: 4, carbs: 40, fat: 5 },
  },
  {
    id: 246,
    name: "Glutensiz Ekmek",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2018/09/glutensiz-ekmek-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "bakery",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 3,
    nutritionalInfo: { calories: 120, protein: 3, carbs: 22, fat: 2 },
  },

  // --- IZGARA & ETLİ YEMEKLER (260+) ---
  {
    id: 260,
    name: "Izgara Tavuk Göğüs",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/izgara-tavuk-tarifi.jpg",
    category: "Izgara & Mangal",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    nutritionalInfo: { calories: 250, protein: 30, carbs: 0, fat: 8 },
  },
  {
    id: 261,
    name: "Izgara Levrek",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/firinda-levrek-tarifi.jpg",
    category: "Deniz Ürünleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    nutritionalInfo: { calories: 300, protein: 25, carbs: 0, fat: 15 },
  },
  {
    id: 262,
    name: "Fırın Tavuk Patates",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/02/firin-tavuk-patates-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 450, protein: 25, carbs: 35, fat: 20 },
  },
  {
    id: 263,
    name: "Karnıyarık",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/karniyarik-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    nutritionalInfo: { calories: 400, protein: 15, carbs: 20, fat: 25 },
  },
  {
    id: 264,
    name: "Hünkar Beğendi",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/hunkar-begendi-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    nutritionalInfo: { calories: 550, protein: 28, carbs: 15, fat: 35 },
  },
  {
    id: 265,
    name: "Orman Kebabı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/05/orman-kebabi-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    nutritionalInfo: { calories: 380, protein: 20, carbs: 25, fat: 18 },
  },
  {
    id: 266,
    name: "Tavuk Sote",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/tavuk-sote-tarifi.jpg",
    category: "Etli Yemekler",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    nutritionalInfo: { calories: 320, protein: 25, carbs: 15, fat: 12 },
  },
  {
    id: 73,
    name: "Kıymalı Pide",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/kiymali-pide-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 74,
    name: "Su Böreği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/su-boregi-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 75,
    name: "Sigara Böreği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/sigara-boregi-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 76,
    name: "Gözleme",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/gozleme-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 77,
    name: "Peynirli Pide",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/kasarli-pide-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 78,
    name: "Çiğ Börek",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/cig-borek-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 79,
    name: "Talaş Böreği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/talas-boregi-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 80,
    name: "Paçanga Böreği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/pacanga-boregi-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 81,
    name: "Ev Makarnası (Erişte)",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/10/peynirli-cevizli-eriste.jpg",
    category: "Hamur İşleri",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 82,
    name: "Lazanya",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/lazanya-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 83,
    name: "Pizza",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/ev-yapimi-pizza-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 84,
    name: "Poğaça",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2019/12/yumusacik-sade-pogaca-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 85,
    name: "Simit",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2017/02/ev-yapimi-simit-tarifi.jpg",
    category: "Hamur İşleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },

  // --- PİLAVLAR & MAKARNALAR (86-95) ---
  {
    id: 86,
    name: "Pirinç Pilavı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/sehriyeli-pilav-yemekcom.jpg",
    category: "Pilavlar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 87,
    name: "Bulgur Pilavı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/domatesli-bulgur-pilavi-tarifi.jpg",
    category: "Pilavlar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 88,
    name: "İç Pilav",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/12/ic-pilav-tarifi.jpg",
    category: "Pilavlar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 89,
    name: "Makarna",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/04/domates-soslu-makarna-tarifi.jpg",
    category: "Pilavlar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 90,
    name: "Fırın Makarna",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/firin-makarna-tarifi.jpg",
    category: "Pilavlar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 91,
    name: "Perde Pilavı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/perde-pilavi-tarifi.jpg",
    category: "Pilavlar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 92,
    name: "Meyhane Pilavı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/meyhane-pilavi-tarifi.jpg",
    category: "Pilavlar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 93,
    name: "Noodle",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/04/sebzeli-noodle-tarifi.jpg",
    category: "Pilavlar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 94,
    name: "Kuskus",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/10/kuskus-pilavi-tarifi.jpg",
    category: "Pilavlar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 95,
    name: "Mantı Makarna",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/sosyete-mantisi-tarifi.jpg",
    category: "Pilavlar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },

  // --- TATLILAR (96-105) ---
  {
    id: 96,
    name: "Sütlaç",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sütlaç.jpg/800px-Sütlaç.jpg",
    category: "Sütlü Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 97,
    name: "Baklava",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baklava_dessert.jpg/800px-Baklava_dessert.jpg",
    category: "Şerbetli Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 98,
    name: "Kazandibi",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/kazandibi-tarifi.jpg",
    category: "Sütlü Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 99,
    name: "Künefe",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/kunefe-tarifi.jpg",
    category: "Şerbetli Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 100,
    name: "Profiterol",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/profiterol-tarifi.jpg",
    category: "Sütlü Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 101,
    name: "Revani",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/revani-tarifi.jpg",
    category: "Şerbetli Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 102,
    name: "Şekerpare",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2018/12/sekerpare-yemekcom.jpg",
    category: "Şerbetli Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 103,
    name: "Triliçe",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/trilice-tarifi.jpg",
    category: "Sütlü Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 104,
    name: "Aşure",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2018/09/asure-tarifi.jpg",
    category: "Sütlü Tatlılar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 105,
    name: "Güllaç",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/gullac-tarifi.jpg",
    category: "Sütlü Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },

  // --- KAHVALTILIKLAR (106-150) ---
  // Ana Yemekler
  {
    id: 106,
    name: "Menemen",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Menemen.jpg/800px-Menemen.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 107,
    name: "Sucuklu Yumurta",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/10/sucuklu-yumurta-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 108,
    name: "Mıhlama (Kuymak)",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/mihlama-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 109,
    name: "Sahanda Yumurta",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2018/06/sahanda-yumurta-yemekcom.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 110,
    name: "Haşlanmış Yumurta",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/haslanmis-yumurta-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 111,
    name: "Omlet",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/omlet-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 112,
    name: "Patates Kızartması",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/patates-kizartmasi-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 113,
    name: "Pişi",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/pisi-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "bakery",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 114,
    name: "Sigara Böreği",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/sigara-boregi-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "bakery",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },

  // Yan Ürünler (Peynir, Zeytin, Reçel vb.)
  {
    id: 116,
    name: "Ezine Peyniri",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/beyaz-peynir.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 117,
    name: "Kaşar Peyniri",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/kasar-peyniri.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 118,
    name: "Tulum Peyniri",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/tulum-peyniri.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 119,
    name: "Siyah Zeytin",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/siyah-zeytin.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 120,
    name: "Yeşil Zeytin",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/yesil-zeytin.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 121,
    name: "Bal & Kaymak",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/bal-kaymak.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 122,
    name: "Tereyağı",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/tereyagi.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 123,
    name: "Domates & Salatalık",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/domates-salatalik.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 124,
    name: "Çilek Reçeli",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/cilek-receli.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 125,
    name: "Vişne Reçeli",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/visne-receli.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 126,
    name: "Tahin & Pekmez",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/tahin-pekmez.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 127,
    name: "Acuka (Çemen)",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/acuka.jpg",
    category: "Kahvaltı",
    subCategory: "side",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 128,
    name: "Krep",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/05/krep-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 129,
    name: "Pancakes",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/pancake-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 130,
    name: "Simit",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2017/02/ev-yapimi-simit-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "bakery",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 131,
    name: "Açma",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/acma-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "bakery",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 132,
    name: "Poğaça",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2019/12/yumusacik-sade-pogaca-tarifi.jpg",
    category: "Kahvaltı",
    subCategory: "bakery",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
  },

  // İçecekler
  {
    id: 133,
    name: "Demleme Çay",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/cay.jpg",
    category: "Kahvaltı",
    subCategory: "drink",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 134,
    name: "Taze Portakal Suyu",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/portakal-suyu.jpg",
    category: "Kahvaltı",
    subCategory: "drink",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
  },
  {
    id: 135,
    name: "Türk Kahvesi",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/turk-kahvesi.jpg",
    category: "Kahvaltı",
    subCategory: "drink",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },

  // Geleneksel Sabah Çorbaları
  {
    id: 136,
    name: "Sabah Mercimek Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/mercimek-corbasi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
  },
  {
    id: 137,
    name: "Beyran Çorbası",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/beyran-corbasi.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
  },
  {
    id: 138,
    name: "Kelle Paça (Sabah)",
    image_url:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/kelle-paca.jpg",
    category: "Kahvaltı",
    subCategory: "main",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
  },
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
