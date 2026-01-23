import { Food } from "../types";
import { appState, saveState } from "./state";

export const COMMON_FOODS: Food[] = [
  {
    "name": "Mercimek Çorbası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mercimek_Corba.jpg/800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "estimatedPrice": 18,
    "nutritionalInfo": {
      "calories": 120,
      "protein": 6,
      "carbs": 18,
      "fat": 3
    },
    "id": 1
  },
  {
    "name": "Ezogelin Çorbası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ezogelin_corba.jpg/800px-Ezogelin_corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 2
  },
  {
    "name": "Yayla Çorbası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yayla_çorbası.jpg/800px-Yayla_çorbası.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 3
  },
  {
    "name": "İşkembe Çorbası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/iskembe-corbasi-asama-10.jpg",
    "category": "Çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 4
  },
  {
    "name": "Domates Çorbası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/09/domates-corbasi-asama-10.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 5
  },
  {
    "name": "Tarhana Çorbası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tarhana_soup.jpg/800px-Tarhana_soup.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 6
  },
  {
    "name": "Bulgur Çorbası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bulgur_corbasi.jpg/800px-Bulgur_corbasi.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 7
  },
  {
    "name": "Yoğurt Çorbası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yogurt_corbasi.jpg/800px-Yogurt_corbasi.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 8
  },
  {
    "name": "Mantar Çorbası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/mantar-corbasi-asama-7.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 9
  },
  {
    "name": "Kelle Paça",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/kelle-paca-corbasi-asama-11.jpg",
    "category": "Çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 10
  },
  {
    "name": "Tavuk Suyu Çorbası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_suyu_corbasi.jpg/800px-Tavuk_suyu_corbasi.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 11
  },
  {
    "name": "Sebzeli Çorba",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sebzeli_corba.jpg/800px-Sebzeli_corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 12
  },
  {
    "name": "Nohut Çorbası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Noahut_corbasi.jpg/800px-Noahut_corbasi.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 13
  },
  {
    "name": "Şehriye Çorbası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/tel-sehriye-corbasi-asama-9.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 14
  },
  {
    "name": "Düğün Çorbası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/dugun-corbasi-yemekcom.jpg",
    "category": "Çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 15
  },
  {
    "name": "Lahana Çorbası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lahana_corbasi.jpg/800px-Lahana_corbasi.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 16
  },
  {
    "name": "Pırasa Çorbası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pirasa_corbasi.jpg/800px-Pirasa_corbasi.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 17
  },
  {
    "name": "Kuru Fasulye",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuru_fasulye.jpg/800px-Kuru_fasulye.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 18
  },
  {
    "name": "Barbunya Pilaki",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/zeytinyagli-barbunya-pilaki-asama-11.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 19
  },
  {
    "name": "Yeşil Mercimek",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/yesil-mercimek-yemegi-asama-8.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 20
  },
  {
    "name": "Nohut Pilav",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Noahut_pilav.jpg/800px-Noahut_pilav.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 21
  },
  {
    "name": "Mercimek Köfte",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mercimek_kofte.jpg/800px-Mercimek_kofte.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 22
  },
  {
    "name": "Nohut Salata",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Noahut_salata.jpg/800px-Noahut_salata.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 23
  },
  {
    "name": "Fasulye Pilaki",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Fasulye_pilaki.jpg/800px-Fasulye_pilaki.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 24
  },
  {
    "name": "Taze Fasulye",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Taze_fasulye.jpg/800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 25
  },
  {
    "name": "Patlıcan Musakka",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 26
  },
  {
    "name": "Bamya",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 27
  },
  {
    "name": "Ispanak",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 28
  },
  {
    "name": "Karnabahar",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Karnabahar_yemeği.jpg/800px-Karnabahar_yemeği.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 29
  },
  {
    "name": "Pırasa Yemeği",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pirasa_yemeği.jpg/800px-Pirasa_yemeği.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 30
  },
  {
    "name": "Manti",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Turkish_manti.jpg/800px-Turkish_manti.jpg",
    "category": "Hamur İşleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 31
  },
  {
    "name": "Pide",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Pide.jpg/800px-Pide.jpg",
    "category": "Hamur İşleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 32
  },
  {
    "name": "Lahmacun",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/ev-yapimi-lahmacun-asama-11.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 33
  },
  {
    "name": "Börek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Borek.jpg/800px-Borek.jpg",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 34
  },
  {
    "name": "Gözleme",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gozleme.jpg/800px-Gozleme.jpg",
    "category": "Hamur İşleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 35
  },
  {
    "name": "Simit",
    "image_url": "https://images.unsplash.com/photo-1603532612711-46c39b5639f1",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 36
  },
  {
    "name": "Adana Kebap",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adana_kebabı.jpg/800px-Adana_kebabı.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 37
  },
  {
    "name": "Urfa Kebap",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/05/urfa-kebabi-asama-10.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 38
  },
  {
    "name": "Beyti Kebap",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Beyti_kebap.jpg/800px-Beyti_kebap.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 39
  },
  {
    "name": "Döner Dürüm",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/doner-durum-asama-5.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 40
  },
  {
    "name": "Tavuk Döner",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_doner_kebap.jpg/800px-Tavuk_doner_kebap.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 41
  },
  {
    "name": "Köfte",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Turkish_kofte.jpg/800px-Turkish_kofte.jpg",
    "category": "Kebaplar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 42
  },
  {
    "name": "İskender",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Iskender2.jpg/800px-Iskender2.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 43
  },
  {
    "name": "Şiş Kebap",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sis_kebap2.jpg/800px-Sis_kebap2.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 44
  },
  {
    "name": "Tavuk Pilav",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_pilav.jpg/800px-Tavuk_pilav.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 45
  },
  {
    "name": "Kumpir",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kumpir.jpg/800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 46
  },
  {
    "name": "Midye Dolma",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Midye_dolma.jpg/800px-Midye_dolma.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 47
  },
  {
    "name": "Kokoreç",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kokorec.jpg/800px-Kokorec.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 48
  },
  {
    "name": "Ciğer Sote",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ciger_sote.jpg/800px-Ciger_sote.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 49
  },
  {
    "name": "Paça Çorbası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Paca_corbasi.jpg/800px-Paca_corbasi.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 50
  },
  {
    "name": "Ayran",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ayran.jpg/800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 51
  },
  {
    "name": "Şalgam",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Salgam.jpg/800px-Salgam.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 52
  },
  {
    "name": "Kefir",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kefir.jpg/800px-Kefir.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 53
  },
  {
    "name": "Turşu Suyu",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tursu_suyu.jpg/800px-Tursu_suyu.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 54
  },
  {
    "name": "Çorba",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Corba.jpg/800px-Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 55
  },
  {
    "name": "Et Sote",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Et_sote.jpg/800px-Et_sote.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 56
  },
  {
    "name": "Tavuk Şiş",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 57
  },
  {
    "name": "Bonfile",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bonfile.jpg/800px-Bonfile.jpg",
    "category": "Izgara",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 58
  },
  {
    "name": "Antrikot",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 59
  },
  {
    "name": "Pirzola",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pirzola.jpg/800px-Pirzola.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 60
  },
  {
    "name": "Mozaik Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mozaik_pasta.jpg/800px-Mozaik_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 61
  },
  {
    "name": "Tiramisu",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tiramisu.jpg/800px-Tiramisu.jpg",
    "category": "Pastalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 62
  },
  {
    "name": "Profiterol",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/profiterol-asama-12.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 63
  },
  {
    "name": "Ekler",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ekler.jpg/800px-Ekler.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 64
  },
  {
    "name": "Cheesecake",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cheesecake.jpg/800px-Cheesecake.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 65
  },
  {
    "name": "Muzlu Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Muzlu_pasta.jpg/800px-Muzlu_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 66
  },
  {
    "name": "Cevizli Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cevizli_kek.jpg/800px-Cevizli_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 67
  },
  {
    "name": "Fıstıklı Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Fistikli_kek.jpg/800px-Fistikli_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 68
  },
  {
    "name": "Portakallı Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Portakalli_kek.jpg/800px-Portakalli_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 69
  },
  {
    "name": "Elmalı Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Elmali_kek.jpg/800px-Elmali_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 70
  },
  {
    "name": "Muzlu Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Muzlu_kek.jpg/800px-Muzlu_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 71
  },
  {
    "name": "Çikolatalı Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cikolatali_kek.jpg/800px-Cikolatali_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 72
  },
  {
    "name": "Kıvırcık Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kivircik_pasta.jpg/800px-Kivircik_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 73
  },
  {
    "name": "Trileçe",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/trilece-asama-11.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 74
  },
  {
    "name": "Paris Brest",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Paris_brest.jpg/800px-Paris_brest.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 75
  },
  {
    "name": "Çikolatalı Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cikolatali_pasta.jpg/800px-Cikolatali_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 76
  },
  {
    "name": "Yulaflı Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Yulafli_pasta.jpg/800px-Yulafli_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 77
  },
  {
    "name": "Fransız Usulü Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Fransiz_pasta.jpg/800px-Fransiz_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 78
  },
  {
    "name": "Sünger Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sunger_pasta.jpg/800px-Sunger_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 79
  },
  {
    "name": "Kremalı Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kremali_pasta.jpg/800px-Kremali_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 80
  },
  {
    "name": "Meyveli Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Meyveli_pasta.jpg/800px-Meyveli_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 81
  },
  {
    "name": "Brownie",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Brownie.jpg/800px-Brownie.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 82
  },
  {
    "name": "Blondie",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Blondie.jpg/800px-Blondie.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 83
  },
  {
    "name": "Macaron",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Macaron.jpg/800px-Macaron.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 84
  },
  {
    "name": "Lava Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Lava_kek.jpg/800px-Lava_kek.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 85
  },
  {
    "name": "Fondan Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Fondan_kek.jpg/800px-Fondan_kek.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 86
  },
  {
    "name": "Pandispanya",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pandispanya.jpg/800px-Pandispanya.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 87
  },
  {
    "name": "Yulaflı Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Yulafli_kek.jpg/800px-Yulafli_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 88
  },
  {
    "name": "Havuçlu Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Havuclu_kek.jpg/800px-Havuclu_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 89
  },
  {
    "name": "Limonlu Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Limonlu_kek.jpg/800px-Limonlu_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 90
  },
  {
    "name": "Kahveli Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kahveli_kek.jpg/800px-Kahveli_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 91
  },
  {
    "name": "Bademli Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bademli_kek.jpg/800px-Bademli_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 92
  },
  {
    "name": "Vişneli Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Visneli_kek.jpg/800px-Visneli_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 93
  },
  {
    "name": "Cupcake",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cupcake.jpg/800px-Cupcake.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 94
  },
  {
    "name": "Muffin",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Muffin.jpg/800px-Muffin.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 95
  },
  {
    "name": "Madlen",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Madlen.jpg/800px-Madlen.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 96
  },
  {
    "name": "Madeleine",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Madeleine.jpg/800px-Madeleine.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 97
  },
  {
    "name": "Whoopie Pie",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Whoopie_pie.jpg/800px-Whoopie_pie.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 98
  },
  {
    "name": "Kek Roll",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kek_roll.jpg/800px-Kek_roll.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 99
  },
  {
    "name": "Sütlaç",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/firin-sutlac-yemekcom.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 100
  },
  {
    "name": "Baklava",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/fistikli-baklava-asama-11.jpg",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 101
  },
  {
    "name": "Künefe",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/kunefe-asama-10.jpg",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 102
  },
  {
    "name": "Tavuk Göğsü Tatlısı",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tavuk_gogsu.jpg/800px-Tavuk_gogsu.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 103
  },
  {
    "name": "Menemen",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Menemen.jpg/800px-Menemen.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 104
  },
  {
    "name": "Sahanda Yumurta",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/sahanda-yumurta-asama-5.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 105
  },
  {
    "name": "Omlet",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Omlet.jpg/800px-Omlet.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 106
  },
  {
    "name": "Tost",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tost.jpg/800px-Tost.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 107
  },
  {
    "name": "Poğaça",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/peynirli-pogaca-asama-10.jpg",
    "category": "Kahvaltı",
    "subCategory": "bakery",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 108
  },
  {
    "name": "Sucuklu Yumurta",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/sucuklu-yumurta-asama-5.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 109
  },
  {
    "name": "Pastırmalı Yumurta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pastirmali_yumurta.jpg/800px-Pastirmali_yumurta.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 110
  },
  {
    "name": "Mücver",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 111
  },
  {
    "name": "Açık Büfe",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Acik_bufe.jpg/800px-Acik_bufe.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 112
  },
  {
    "name": "Peynir Tabak",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Peynir_tabak.jpg/800px-Peynir_tabak.jpg",
    "category": "Kahvaltı",
    "subCategory": "side",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 113
  },
  {
    "name": "Zeytin",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Zeytin.jpg/800px-Zeytin.jpg",
    "category": "Kahvaltı",
    "subCategory": "side",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 114
  },
  {
    "name": "Bal",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bal.jpg/800px-Bal.jpg",
    "category": "Kahvaltı",
    "subCategory": "side",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 115
  },
  {
    "name": "Kaymak",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kaymak.jpg/800px-Kaymak.jpg",
    "category": "Kahvaltı",
    "subCategory": "side",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 116
  },
  {
    "name": "Yumurta Salatası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yumurta_salatasi.jpg/800px-Yumurta_salatasi.jpg",
    "category": "Kahvaltı",
    "subCategory": "side",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 117
  },
  {
    "name": "Çoban Salatası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/coban-salatasi-yemekcom.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 118
  },
  {
    "name": "Domatesli Börek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Domatesli_borek.jpg/800px-Domatesli_borek.jpg",
    "category": "Kahvaltı",
    "subCategory": "bakery",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 119
  },
  {
    "name": "Ispanaklı Börek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ispanakli_borek.jpg/800px-Ispanakli_borek.jpg",
    "category": "Kahvaltı",
    "subCategory": "bakery",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 120
  },
  {
    "name": "Patatesli Börek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patatesli_borek.jpg/800px-Patatesli_borek.jpg",
    "category": "Kahvaltı",
    "subCategory": "bakery",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 121
  },
  {
    "name": "Kıymalı Pide",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kiyimali_pide.jpg/800px-Kiyimali_pide.jpg",
    "category": "Kahvaltı",
    "subCategory": "bakery",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 122
  },
  {
    "name": "Peynirli Pide",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Peynirli_pide.jpg/800px-Peynirli_pide.jpg",
    "category": "Kahvaltı",
    "subCategory": "bakery",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 123
  },
  {
    "name": "Kuşbaşlı Pide",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kusbasi_pide.jpg/800px-Kusbasi_pide.jpg",
    "category": "Kahvaltı",
    "subCategory": "bakery",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 124
  },
  {
    "name": "Yumurtalı Ekmek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yumurtali_ekmek.jpg/800px-Yumurtali_ekmek.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 125
  },
  {
    "name": "Sosisli Börek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sosisli_borek.jpg/800px-Sosisli_borek.jpg",
    "category": "Kahvaltı",
    "subCategory": "bakery",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 126
  },
  {
    "name": "Haşlanmış Yumurta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hashlanmis_yumurta.jpg/800px-Hashlanmis_yumurta.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 127
  },
  {
    "name": "Peynirli Omlet",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Peynirli_omlet.jpg/800px-Peynirli_omlet.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 128
  },
  {
    "name": "Sebzeli Omlet",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sebzeli_omlet.jpg/800px-Sebzeli_omlet.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 129
  },
  {
    "name": "Mantı",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/kayseri-mantisi-asama-10.jpg",
    "category": "Hamur İşleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 130
  },
  {
    "name": "Sütlü Mısır",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sutlu_misir.jpg/800px-Sutlu_misir.jpg",
    "category": "Kahvaltı",
    "subCategory": "side",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 131
  },
  {
    "name": "Kaşarlı Tost",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kasarli_tost.jpg/800px-Kasarli_tost.jpg",
    "category": "Kahvaltı",
    "subCategory": "main",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 132
  },
  {
    "name": "Karışık Tost",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Karisik_tost.jpg/800px-Karisik_tost.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 133
  },
  {
    "name": "Açma",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Acma.jpg/800px-Acma.jpg",
    "category": "Kahvaltı",
    "subCategory": "bakery",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 134
  },
  {
    "name": "Pilav Ustası",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pilav_ustasi.jpg/800px-Pilav_ustasi.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 135
  },
  {
    "name": "İskender Kebap",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/ev-yapimi-iskender-kebap-asama-10.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 136
  },
  {
    "name": "Çiğ Köfte",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/etsiz-cig-kofte-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 137
  },
  {
    "name": "Et Döner",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Et_doner_kebap.jpg/800px-Et_doner_kebap.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 138
  },
  {
    "name": "Köfte Dürüm",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kofte_durum.jpg/800px-Kofte_durum.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 139
  },
  {
    "name": "Hamburger",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hamburger.jpg/800px-Hamburger.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 140
  },
  {
    "name": "Peynirli Tost",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Peynirli_tost.jpg/800px-Peynirli_tost.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 141
  },
  {
    "name": "Sucuklu Tost",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sucuklu_tost.jpg/800px-Sucuklu_tost.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 142
  },
  {
    "name": "Kıymalı Tost",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kiyamali_tost.jpg/800px-Kiyamali_tost.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 143
  },
  {
    "name": "Tantuni",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tantuni.jpg/800px-Tantuni.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 144
  },
  {
    "name": "Ciger Sandviç",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ciger_sandvic.jpg/800px-Ciger_sandvic.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 145
  },
  {
    "name": "Balık Ekmek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Balik_ekmek.jpg/800px-Balik_ekmek.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 146
  },
  {
    "name": "Çiğ Biftek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cig_biftek.jpg/800px-Cig_biftek.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 147
  },
  {
    "name": "Mısır",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Misir.jpg/800px-Misir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 148
  },
  {
    "name": "Kaşarlı Köfte",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kasarli_kofte.jpg/800px-Kasarli_kofte.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 149
  },
  {
    "name": "Sulu Köfte",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sulu_kofte.jpg/800px-Sulu_kofte.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 150
  },
  {
    "name": "Tavuk Kanat",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_kanat.jpg/800px-Tavuk_kanat.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 151
  },
  {
    "name": "Tavuk Bonfile",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_bonfile.jpg/800px-Tavuk_bonfile.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 152
  },
  {
    "name": "Bonfile Şiş",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bonfile_sis.jpg/800px-Bonfile_sis.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 153
  },
  {
    "name": "Kuşbaşı",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kusbasi.jpg/800px-Kusbasi.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 154
  },
  {
    "name": "Patlıcan Kebabı",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patlican_kebabi2.jpg/800px-Patlican_kebabi2.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 155
  },
  {
    "name": "Kaburga",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kaburga.jpg/800px-Kaburga.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 156
  },
  {
    "name": "Sucuk Izgara",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sucuk_izgara.jpg/800px-Sucuk_izgara.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 157
  },
  {
    "name": "Pastırma Izgara",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pastirma_izgara.jpg/800px-Pastirma_izgara.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 158
  },
  {
    "name": "Biftek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Biftek.jpg/800px-Biftek.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 159
  },
  {
    "name": "Köfte Izgara",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kofte_izgara.jpg/800px-Kofte_izgara.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 160
  },
  {
    "name": "Tavuk Pirzola",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_pirzola.jpg/800px-Tavuk_pirzola.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 161
  },
  {
    "name": "Karışık Izgara",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Karisik_izgara.jpg/800px-Karisik_izgara.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 162
  },
  {
    "name": "Balık Izgara",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Balik_izgara.jpg/800px-Balik_izgara.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 163
  },
  {
    "name": "Sebzeli Izgara",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sebzeli_izgara.jpg/800px-Sebzeli_izgara.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 164
  },
  {
    "name": "Meyve Suyu",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Meyve_suyu.jpg/800px-Meyve_suyu.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 165
  },
  {
    "name": "Portakal Suyu",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Portakal_suyu.jpg/800px-Portakal_suyu.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 166
  },
  {
    "name": "Elma Suyu",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Elma_suyu.jpg/800px-Elma_suyu.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 167
  },
  {
    "name": "Üzüm Suyu",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Uzum_suyu.jpg/800px-Uzum_suyu.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 168
  },
  {
    "name": "Smoothie",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Smoothie.jpg/800px-Smoothie.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 169
  },
  {
    "name": "Muzlu Smoothie",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Muzlu_smoothie.jpg/800px-Muzlu_smoothie.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 170
  },
  {
    "name": "Çilekli Smoothie",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cilekli_smoothie.jpg/800px-Cilekli_smoothie.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 171
  },
  {
    "name": "Çay",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cay.jpg/800px-Cay.jpg",
    "category": "Kahvaltı",
    "subCategory": "drink",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 176
  },
  {
    "name": "Türk Kahvesi",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Turk_kahvesi.jpg/800px-Turk_kahvesi.jpg",
    "category": "Kahvaltı",
    "subCategory": "drink",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 172
  },
  {
    "name": "Yeşil Çay",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yesil_cay.jpg/800px-Yesil_cay.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 177
  },
  {
    "name": "Adaçayı Çayı",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Adacayi_cayi.jpg/800px-Adacayi_cayi.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 178
  },
  {
    "name": "Nane Limon",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nane_limon.jpg/800px-Nane_limon.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 179
  },
  {
    "name": "Limonata",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Limonata.jpg/800px-Limonata.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 180
  },
  {
    "name": "Beyti",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Beyti_kebap2.jpg/800px-Beyti_kebap2.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 181
  },
  {
    "name": "Ali Nazik",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 182
  },
  {
    "name": "İçli Köfte",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/icli-kofte-asama-11.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 183
  },
  {
    "name": "Hünkar Beğendi",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/hunkar-begendi-asama-11.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 184
  },
  {
    "name": "Patates Köftesi",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patates_koftesi.jpg/800px-Patates_koftesi.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 185
  },
  {
    "name": "Mercimek Köftesi",
    "image_url": "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 186
  },
  {
    "name": "Kaburga Sıyırma",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kaburga_siyirma.jpg/800px-Kaburga_siyirma.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 187
  },
  {
    "name": "Çoban Kavurma",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Coban_kavurma.jpg/800px-Coban_kavurma.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 188
  },
  {
    "name": "Çökertme Kebabı",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/cokertme-kebabi-asama-11.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 189
  },
  {
    "name": "Kuzu Kebabı",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kuzu_kebabi.jpg/800px-Kuzu_kebabi.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 190
  },
  {
    "name": "Testi Kebabı",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Testi_kebabi.jpg/800px-Testi_kebabi.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 191
  },
  {
    "name": "Cağ Kebabı",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cag_kebabi.jpg/800px-Cag_kebabi.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 192
  },
  {
    "name": "Kavurma",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kavurma.jpg/800px-Kavurma.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 193
  },
  {
    "name": "Döner Salata",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Doner_salata.jpg/800px-Doner_salata.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 194
  },
  {
    "name": "Köfte Tabak",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kofte_tabak.jpg/800px-Kofte_tabak.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 195
  },
  {
    "name": "Tavuk Şiş Kebap",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_sis_kebap.jpg/800px-Tavuk_sis_kebap.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 196
  },
  {
    "name": "Kömür Kebabı",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Komur_kebabi.jpg/800px-Komur_kebabi.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 197
  },
  {
    "name": "Karnıyarık",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 199
  },
  {
    "name": "İmambayıldı",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/imambayildi-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 200
  },
  {
    "name": "Zeytinyağlı Enginar",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/zeytinyagli-enginar-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 3,
    "id": 201
  },
  {
    "name": "Pırasa",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 202
  },
  {
    "name": "Türlü",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 203
  },
  {
    "name": "Pazı Sarması",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/pazi-sarmasi-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 204
  },
  {
    "name": "Kabak Mücver",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/mucver-yemekcom.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 205
  },
  {
    "name": "Etli Ekmek",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/etli-ekmek-asama-10.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 206
  },
  {
    "name": "Tas Kebabı",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/tas-kebabi-asama-10.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 207
  },
  {
    "name": "Kuzu İncik",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/kuzu-incik-asama-10.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 208
  },
  {
    "name": "İzmir Köfte",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/izmir-kofte-asama-10.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 209
  },
  {
    "name": "Kadınbudu Köfte",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/kadinbudu-kofte-asama-10.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 210
  },
  {
    "name": "Nohut",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/etli-nohut-yemegi-asama-11.jpg",
    "category": "Baklagiller",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 211
  },
  {
    "name": "Mıhlama / Kuymak",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/mihlama-asama-7.jpg",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 212
  },
  {
    "name": "Beyaz Peynir",
    "image_url": "https://images.unsplash.com/photo-1559561853-08451507c73a",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 213
  },
  {
    "name": "Zeytin (Siyah/Yeşil)",
    "image_url": "https://images.unsplash.com/photo-1536511132770-e51c6c06830b",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 214
  },
  {
    "name": "Bal - Kaymak",
    "image_url": "https://images.unsplash.com/photo-1584947897500-0387532f7a61",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 215
  },
  {
    "name": "Domates - Salatalık Söğüş",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 216
  },
  {
    "name": "Türk Çayı",
    "image_url": "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 217
  },
  {
    "name": "Kazandibi",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/kazandibi-asama-11.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 218
  },
  {
    "name": "Revani",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/revani-asama-10.jpg",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 219
  },
  {
    "name": "Elma",
    "image_url": "https://images.unsplash.com/photo-1560806887-1e4cd0b6bcd6",
    "category": "Meyveler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 220
  },
  {
    "name": "Muz",
    "image_url": "https://images.unsplash.com/photo-1571771894821-ad9902d83f4e",
    "category": "Meyveler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 221
  },
  {
    "name": "Mevsim Meyveleri Tabağı",
    "image_url": "https://images.unsplash.com/photo-1519996529931-28324d5a630e",
    "category": "Meyveler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 222
  },
  {
    "name": "Pirinc Pilavı",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/pirinc-pilavi-asama-10.jpg",
    "category": "Pilavlar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 223
  },
  {
    "name": "Bulgur Pilavı",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/sebzeli-bulgur-pilavi-asama-9.jpg",
    "category": "Pilavlar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 224
  },
  {
    "name": "Makarna (Salçalı)",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/salcali-makarna-asama-7.jpg",
    "category": "Hamur İşleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 225
  },
  {
    "name": "Pide (Kuşbaşılı)",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/kusbasili-pide-asama-11.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 226
  },
  {
    "name": "Çupra Izgara",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/cupra-izgara-asama-10.jpg",
    "category": "Deniz Ürünleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 227
  },
  {
    "name": "Somon Izgara",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/firin-somon-asama-11.jpg",
    "category": "Deniz Ürünleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 228
  },
  {
    "name": "Hamsi Tava",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/hamsi-tava-asama-8.jpg",
    "category": "Deniz Ürünleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 229
  },
  {
    "name": "Kısır",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/kisir-yemekcom.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 230
  },
  {
    "name": "Zeytinyağlı Yaprak Sarma",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 231
  },
  {
    "name": "Biber Dolması",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 232
  },
  {
    "name": "Şakşuka",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 233
  },
  {
    "name": "Enginar",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 3,
    "id": 234
  },
  {
    "name": "Kereviz",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 235
  },
  {
    "name": "Bezelye",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 236
  },
  {
    "name": "Semizotu",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 237
  },
  {
    "name": "Patates Oturtma",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 238
  },
  {
    "name": "Kabak Kalye",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 239
  },
  {
    "name": "Karnabahar Graten",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 240
  },
  {
    "name": "Brokoli Salatası",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 241
  },
  {
    "name": "Izgara Köfte",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 242
  },
  {
    "name": "Kuzu Pirzola",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 243
  },
  {
    "name": "Kanat Izgara",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 244
  },
  {
    "name": "Beyti Sarma",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 245
  },
  {
    "name": "Tepsi Kebabı",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 246
  },
  {
    "name": "Kağıt Kebabı",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 247
  },
  {
    "name": "Orman Kebabı",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 248
  },
  {
    "name": "Yuvalama Çorbası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/yuvalama-asama-13.jpg",
    "category": "Çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 249
  },
  {
    "name": "Lebeniye Çorbası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/lebeniye-corbasi-asama-10.jpg",
    "category": "Çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 250
  },
  {
    "name": "Erişteli Yeşil Mercimek Çorbası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/yesil-mercimek-corbasi-asama-7.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 251
  },
  {
    "name": "Brokoli Çorbası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/kremali-brokoli-corbasi-asama-9.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 252
  },
  {
    "name": "Balkabağı Çorbası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/balkabagi-corbasi-asama-9.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 253
  },
  {
    "name": "Kıymalı Yumurta",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/kiymali-yumurta-asama-5.jpg",
    "category": "Kahvaltı",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 254
  },
  {
    "name": "Çılbır",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/cilbir-asama-7.jpg",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 255
  },
  {
    "name": "Patatesli Yumurta",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/patatesli-yumurta-asama-5.jpg",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 256
  },
  {
    "name": "Sigara Böreği",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/sigara-boregi-asama-8.jpg",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 257
  },
  {
    "name": "Paçanga Böreği",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/pacanga-boregi-asama-7.jpg",
    "category": "Kahvaltı",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 258
  },
  {
    "name": "Gözleme (Peynirli)",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/peynirli-gozleme-asama-8.jpg",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 259
  },
  {
    "name": "Acuka",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/acuka-asama-5.jpg",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 260
  },
  {
    "name": "Pişi",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/pisi-asama-7.jpg",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 261
  },
  {
    "name": "Pekmez - Tahin",
    "image_url": "https://images.unsplash.com/photo-1584947897500-0387532f7a61",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 262
  },
  {
    "name": "Kuru İncir - Ceviz",
    "image_url": "https://images.unsplash.com/photo-1596560548464-f010549b84d7",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 263
  },
  {
    "name": "Keşkül",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/keskul-asama-6.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 264
  },
  {
    "name": "Tavukgöğsü",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/tavuk-gogsu-asama-8.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 265
  },
  {
    "name": "Supangle",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/supangle-asama-7.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 266
  },
  {
    "name": "Ayva Tatlısı",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/ayva-tatlisi-asama-11.jpg",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 267
  },
  {
    "name": "Kabak Tatlısı",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/kabak-tatlisi-asama-8.jpg",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 268
  },
  {
    "name": "Tulumba Tatlısı",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/tulumba-tatlisi-asama-12.jpg",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 269
  },
  {
    "name": "Şekerpare",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/sekerpare-asama-11.jpg",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 270
  },
  {
    "name": "İrmik Helvası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/irmik-helvasi-asama-7.jpg",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 271
  },
  {
    "name": "Un Helvası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/un-helvasi-asama-6.jpg",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 272
  },
  {
    "name": "Haydari",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/haydari-yemekcom.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 273
  },
  {
    "name": "Humus",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/humus-yemekcom.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 274
  },
  {
    "name": "Deniz Börülcesi",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/deniz-borulcesi-asama-9.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 275
  },
  {
    "name": "Babagannuş",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/babagannus-asama-8.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 276
  },
  {
    "name": "Atom",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2019/02/atom-mezesi-tarifi.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 277
  },
  {
    "name": "Muhammara",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/muhammara-asama-5.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 278
  },
  {
    "name": "Cacık",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/cacik-yemekcom.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 279
  },
  {
    "name": "Gavurdağı Salatası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/gavurdagi-salatasi-asama-6.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 280
  },
  {
    "name": "Roka Salatası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/roka-salatasi-asama-5.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 281
  },
  {
    "name": "Piyaz",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/antalya-piyazi-asama-9.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 282
  },
  {
    "name": "Rus Salatası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/rus-salatasi-asama-7.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 283
  },
  {
    "name": "Tarator",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/havuc-tarator-asama-6.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 284
  },
  {
    "name": "Havuç Tarator",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/havuc-tarator-asama-6.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 285
  },
  {
    "name": "Patlıcan Salatası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/patlican-salatasi-asama-6.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 286
  },
  {
    "name": "Köpoğlu",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/kopoglu-asama-9.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 287
  },
  {
    "name": "Girit Ezmesi",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/girit-ezmesi-asama-5.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 288
  },
  {
    "name": "İmam Bayıldı",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/imambayildi-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 289
  },
  {
    "name": "Zeytinyağlı Taze Fasulye",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/zeytinyagli-taze-fasulye-asama-11.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 290
  },
  {
    "name": "Zeytinyağlı Barbunya",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/zeytinyagli-barbunya-pilaki-asama-11.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 291
  },
  {
    "name": "Zeytinyağlı Pırasa",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/zeytinyagli-pirasa-asama-9.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 292
  },
  {
    "name": "Zeytinyağlı Brüksel Lahanası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/bruksel-lahanasi-yemegi-asama-7.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 293
  },
  {
    "name": "Zeytinyağlı Karnabahar",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/firin-karnabahar-asama-7.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 294
  },
  {
    "name": "Zeytinyağlı Yer Elması",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/02/yer-elmasi-yemegi-asama-9.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 295
  },
  {
    "name": "Zeytinyağlı Şevketi Bostan",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/sevketi-bostan-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 3,
    "id": 296
  },
  {
    "name": "Zeytinyağlı Bamya",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/etli-bamya-yemekcom.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 297
  },
  {
    "name": "Saray Sarması",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/saray-sarmasi-asama-7.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 298
  },
  {
    "name": "Magnolia",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/magnolia-asama-6.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 299
  },
  {
    "name": "Güllaç",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/gullac-asama-9.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 300
  },
  {
    "name": "Aşure",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/asure-asama-15.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 301
  },
  {
    "name": "Zerde",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/zerde-asama-6.jpg",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 302
  },
  {
    "name": "Puding",
    "image_url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 303
  },
  {
    "name": "Meyveli Yoğurt",
    "image_url": "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 304
  },
  {
    "name": "Dondurma",
    "image_url": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 305
  },
  {
    "name": "Yaprak Sarması",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/yaprak-sarmasi-yemekcom.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 306
  },
  {
    "name": "Biber Dolması",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/etli-biber-dolmasi-yemekcom.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 307
  },
  {
    "name": "Kabak Dolması",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/kabak-dolmasi-yemekcom.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 308
  },
  {
    "name": "Patlıcan Dolması",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/patlican-dolmasi-yemekcom.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 309
  },
  {
    "name": "Domates Dolması",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/zeytinyagli-domates-dolmasi.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 310
  },
  {
    "name": "Lahana Sarması",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/lahana-sarmasi-one-cikan.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 311
  },
  {
    "name": "Kuru Fasulye Dolması",
    "image_url": "https://i.lezzet.com.tr/images-xxlarge-recipe/kuru-fasulye-dolmasi-11b69bc6-5353-4f31-8631-d9e35df51c6e.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 312
  },
  {
    "name": "Enginar Dolması",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/enginar-dolmasi-yemekcom.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 313
  },
  {
    "name": "Lazanya",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/lazanya-tarifi.jpg",
    "category": "Makarna",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 314
  },
  {
    "name": "Fettuccine Alfredo",
    "image_url": "https://i.nefisyemektarifleri.com/2019/09/21/fettucini-alfredo-1.jpg",
    "category": "Makarna",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 315
  },
  {
    "name": "Spagetti Bolonez",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/03/spagetti-bolonez-sunum.jpg",
    "category": "Makarna",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 316
  },
  {
    "name": "Penne Arrabiata",
    "image_url": "https://i.nefisyemektarifleri.com/2017/08/03/penne-arrabiata-3.jpg",
    "category": "Makarna",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 317
  },
  {
    "name": "Kremalı Mantarlı Makarna",
    "image_url": "https://i.nefisyemektarifleri.com/2020/02/14/kremali-mantarli-makarna-3.jpg",
    "category": "Makarna",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 318
  },
  {
    "name": "Fırın Makarna",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2020/05/firin-makarna-tarifi.jpg",
    "category": "Makarna",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 319
  },
  {
    "name": "Carbonara",
    "image_url": "https://i.nefisyemektarifleri.com/2018/09/14/carbonara-2.jpg",
    "category": "Makarna",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 320
  },
  {
    "name": "Makarna Salatası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/makarna-salatasi-yemekcom.jpg",
    "category": "Makarna",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 321
  },
  {
    "name": "Çoban Salatası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/coban-salatasi-yemekcom.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 322
  },
  {
    "name": "Akdeniz Salatası",
    "image_url": "https://i.lezzet.com.tr/images-xxlarge-recipe/akdeniz-salatasi-c6f47e4b-43f3-4c79-bef7-33c02b30cd87.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 323
  },
  {
    "name": "Mevsim Salatası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/mevsim-salatasi-yemekcom.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 324
  },
  {
    "name": "Patates Salatası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/patates-salatasi-yemekcom.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 325
  },
  {
    "name": "Ton Balıklı Salata",
    "image_url": "https://i.nefisyemektarifleri.com/2018/01/24/ton-balikli-salata.jpg",
    "category": "Salatalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 326
  },
  {
    "name": "Kısır",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/kisir-yemekcom.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 327
  },
  {
    "name": "Gavurdağı Salatası",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/gavurdagi-salatasi-yemekcom.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 328
  },
  {
    "name": "Tavuklu Sezar Salatası",
    "image_url": "https://i.nefisyemektarifleri.com/2017/07/26/tavuklu-sezar-salatasi.jpg",
    "category": "Salatalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 329
  }
];

const getNutritionByCategory = (category: string) => {
  switch (category) {
    case "Çorbalar":
      return { calories: 120, protein: 5, carbs: 18, fat: 3 };
    case "Baklagiller":
      return { calories: 280, protein: 18, carbs: 45, fat: 2 };
    case "Sebze Yemekleri":
      return { calories: 180, protein: 4, carbs: 15, fat: 10 };
    case "Izgara & Mangal":
    case "Döner & Kebap":
    case "Etli Yemekler":
      return { calories: 420, protein: 32, carbs: 12, fat: 24 };
    case "Hamur İşleri":
      return { calories: 380, protein: 10, carbs: 55, fat: 14 };
    case "Kahvaltı":
      return { calories: 280, protein: 12, carbs: 22, fat: 16 };
    case "Pilavlar":
      return { calories: 320, protein: 6, carbs: 58, fat: 8 };
    case "Makarna":
    case "Makarna & Pilav":
      return { calories: 450, protein: 14, carbs: 65, fat: 12 };
    case "Dolma & Sarma":
      return { calories: 280, protein: 10, carbs: 38, fat: 8 };
    case "Salatalar":
      return { calories: 140, protein: 5, carbs: 12, fat: 8 };
    case "Sütlü Tatlılar":
      return { calories: 280, protein: 6, carbs: 42, fat: 9 };
    case "Şerbetli Tatlılar":
      return { calories: 480, protein: 5, carbs: 72, fat: 18 };
    case "Meyveler":
      return { calories: 65, protein: 1, carbs: 16, fat: 0 };
    case "Deniz Ürünleri":
      return { calories: 220, protein: 28, carbs: 5, fat: 8 };
    default:
      return { calories: 250, protein: 8, carbs: 30, fat: 10 };
  }
};

const getPriceByCategory = (category: string, priceLevel?: number) => {
  // 4 kişilik evde malzeme maliyeti (2025 Ocak gerçek market fiyatları)
  const basePrices: Record<string, number> = {
    "Çorbalar": 18,           // Mercimek(12₺) + Soğan(2₺) + Tereyağı(4₺)
    "Baklagiller": 25,        // Fasulye(10₺) + Salça(5₺) + Soğan(3₺) + Yağ(7₺)
    "Sebze Yemekleri": 35,    // Sebze(15₺) + Soğan(3₺) + Domates(8₺) + Yağ(9₺)
    "Etli Yemekler": 120,     // Kıyma/Et(80₺) + Sebze(15₺) + Yağ(10₺) + Baharat(5₺)
    "Izgara & Mangal": 140,   // Et/Tavuk(100₺) + Malzeme(20₺) + Odun(20₺)
    "Döner & Kebap": 110,     // Kıyma(70₺) + Ekmek(15₺) + Sebze(15₺) + Baharat(10₺)
    "Hamur İşleri": 28,       // Un(8₺) + Yağ(10₺) + İç malzeme(10₺)
    "Kahvaltı": 35,           // Yumurta(12₺) + Peynir(15₺) + Zeytin(8₺)
    "Pilavlar": 22,           // Pirinç(12₺) + Tereyağı(6₺) + Şehriye(4₺)
    "Makarna": 32,            // Makarna(8₺) + Salça(6₺) + Kıyma(12₺) + Kaşar(6₺)
    "Makarna & Pilav": 30,    
    "Dolma & Sarma": 55,      // Zeytinyağı(25₺) + Pirinç(10₺) + Sebze(15₺) + Baharat(5₺)
    "Salatalar": 28,          // Domates(10₺) + Salatalık(8₺) + Limon(5₺) + Zeytinyağı(15₺)
    "Sütlü Tatlılar": 38,     // Süt(12₺) + Şeker(8₺) + Un(6₺) + Tereyağı(12₺)
    "Şerbetli Tatlılar": 55,  // Un(10₺) + Şeker(12₺) + Yağ(15₺) + Ceviz/Fıstık(18₺)
    "Deniz Ürünleri": 85,     // Balık/Karides(60₺) + Limon(5₺) + Salata(15₺) + Yağ(5₺)
    "Pizzalar": 45,           // Hamur(15₺) + Kaşar(18₺) + Sucuk/Salam(12₺)
    "Burgerler": 50,          // Köfte(25₺) + Ekmek(10₺) + Sebze(10₺) + Sos(5₺)
    "Meyveler": 20,
    "Fast Food": 40,
    "Sokak Lezzetleri": 30,
  };

  const basePrice = basePrices[category] || 35;
  
  // priceLevel varsa ekstra maliyet ekle (premium malzemeler için)
  if (priceLevel) {
    return basePrice + (priceLevel - 1) * 15;
  }
  
  return basePrice;
};

export const getAllFoods = async (): Promise<Food[]> => {
  return COMMON_FOODS.map((f) => ({
    ...f,
    nutritionalInfo:
      f.nutritionalInfo || getNutritionByCategory(f.category as string),
    estimatedPrice: f.estimatedPrice || getPriceByCategory(f.category as string, f.priceLevel),
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
