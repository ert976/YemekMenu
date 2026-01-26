import { Food } from "../types";
import { appState, saveState } from "./state";

export const COMMON_FOODS: Food[] = [
  {
    "name": "Mercimek ├çorbas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mercimek_Corba.jpg/800px-Mercimek_Corba.jpg",
    "category": "├çorbalar",
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
    "name": "Ezogelin ├çorbas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ezogelin_corba.jpg/800px-Ezogelin_corba.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 2
  },
  {
    "name": "Yayla ├çorbas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yayla_├ğorbas─▒.jpg/800px-Yayla_├ğorbas─▒.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 3
  },
  {
    "name": "─░┼şkembe ├çorbas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/iskembe-corbasi-asama-10.jpg",
    "category": "├çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 4
  },
  {
    "name": "Domates ├çorbas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/09/domates-corbasi-asama-10.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 5
  },
  {
    "name": "Tarhana ├çorbas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tarhana_soup.jpg/800px-Tarhana_soup.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 6
  },
  {
    "name": "Bulgur ├çorbas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bulgur_corbasi.jpg/800px-Bulgur_corbasi.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 7
  },
  {
    "name": "Yo─şurt ├çorbas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yogurt_corbasi.jpg/800px-Yogurt_corbasi.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 8
  },
  {
    "name": "Mantar ├çorbas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/mantar-corbasi-asama-7.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 9
  },
  {
    "name": "Kelle Pa├ğa",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/kelle-paca-corbasi-asama-11.jpg",
    "category": "├çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 10
  },
  {
    "name": "Tavuk Suyu ├çorbas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_suyu_corbasi.jpg/800px-Tavuk_suyu_corbasi.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 11
  },
  {
    "name": "Sebzeli ├çorba",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sebzeli_corba.jpg/800px-Sebzeli_corba.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 12
  },
  {
    "name": "Nohut ├çorbas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Noahut_corbasi.jpg/800px-Noahut_corbasi.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 13
  },
  {
    "name": "┼Şehriye ├çorbas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/tel-sehriye-corbasi-asama-9.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 14
  },
  {
    "name": "D├╝─ş├╝n ├çorbas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/dugun-corbasi-yemekcom.jpg",
    "category": "├çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 15
  },
  {
    "name": "Lahana ├çorbas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lahana_corbasi.jpg/800px-Lahana_corbasi.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 16
  },
  {
    "name": "P─▒rasa ├çorbas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pirasa_corbasi.jpg/800px-Pirasa_corbasi.jpg",
    "category": "├çorbalar",
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
    "name": "Ye┼şil Mercimek",
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
    "name": "Mercimek K├Âfte",
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
    "name": "Patl─▒can Musakka",
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
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Karnabahar_yeme─şi.jpg/800px-Karnabahar_yeme─şi.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 29
  },
  {
    "name": "P─▒rasa Yeme─şi",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pirasa_yeme─şi.jpg/800px-Pirasa_yeme─şi.jpg",
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
    "category": "Hamur ─░┼şleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 31
  },
  {
    "name": "Pide",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Pide.jpg/800px-Pide.jpg",
    "category": "Hamur ─░┼şleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 32
  },
  {
    "name": "Lahmacun",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/ev-yapimi-lahmacun-asama-11.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 33
  },
  {
    "name": "B├Ârek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Borek.jpg/800px-Borek.jpg",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 34
  },
  {
    "name": "G├Âzleme",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gozleme.jpg/800px-Gozleme.jpg",
    "category": "Hamur ─░┼şleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 35
  },
  {
    "name": "Simit",
    "image_url": "https://images.unsplash.com/photo-1603532612711-46c39b5639f1",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 36
  },
  {
    "name": "Adana Kebap",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adana_kebab─▒.jpg/800px-Adana_kebab─▒.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 37
  },
  {
    "name": "Urfa Kebap",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/05/urfa-kebabi-asama-10.jpg",
    "category": "D├Âner & Kebap",
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
    "name": "D├Âner D├╝r├╝m",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/doner-durum-asama-5.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 40
  },
  {
    "name": "Tavuk D├Âner",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_doner_kebap.jpg/800px-Tavuk_doner_kebap.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 41
  },
  {
    "name": "K├Âfte",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Turkish_kofte.jpg/800px-Turkish_kofte.jpg",
    "category": "Kebaplar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 42
  },
  {
    "name": "─░skender",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Iskender2.jpg/800px-Iskender2.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 43
  },
  {
    "name": "┼Şi┼ş Kebap",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sis_kebap2.jpg/800px-Sis_kebap2.jpg",
    "category": "D├Âner & Kebap",
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
    "name": "Kokore├ğ",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kokorec.jpg/800px-Kokorec.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 48
  },
  {
    "name": "Ci─şer Sote",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ciger_sote.jpg/800px-Ciger_sote.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 49
  },
  {
    "name": "Pa├ğa ├çorbas─▒",
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
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 51
  },
  {
    "name": "┼Şalgam",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Salgam.jpg/800px-Salgam.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 52
  },
  {
    "name": "Kefir",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kefir.jpg/800px-Kefir.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 53
  },
  {
    "name": "Tur┼şu Suyu",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tursu_suyu.jpg/800px-Tursu_suyu.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 54
  },
  {
    "name": "├çorba",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Corba.jpg/800px-Corba.jpg",
    "category": "├çorbalar",
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
    "name": "Tavuk ┼Şi┼ş",
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
    "category": "S├╝tl├╝ Tatl─▒lar",
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
    "name": "F─▒st─▒kl─▒ Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Fistikli_kek.jpg/800px-Fistikli_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 68
  },
  {
    "name": "Portakall─▒ Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Portakalli_kek.jpg/800px-Portakalli_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 69
  },
  {
    "name": "Elmal─▒ Kek",
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
    "name": "├çikolatal─▒ Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cikolatali_kek.jpg/800px-Cikolatali_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 72
  },
  {
    "name": "K─▒v─▒rc─▒k Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kivircik_pasta.jpg/800px-Kivircik_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 73
  },
  {
    "name": "Trile├ğe",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/trilece-asama-11.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
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
    "name": "├çikolatal─▒ Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cikolatali_pasta.jpg/800px-Cikolatali_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 76
  },
  {
    "name": "Yulafl─▒ Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Yulafli_pasta.jpg/800px-Yulafli_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 77
  },
  {
    "name": "Frans─▒z Usul├╝ Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Fransiz_pasta.jpg/800px-Fransiz_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 78
  },
  {
    "name": "S├╝nger Pasta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sunger_pasta.jpg/800px-Sunger_pasta.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 79
  },
  {
    "name": "Kremal─▒ Pasta",
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
    "name": "Yulafl─▒ Kek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Yulafli_kek.jpg/800px-Yulafli_kek.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 88
  },
  {
    "name": "Havu├ğlu Kek",
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
    "name": "Vi┼şneli Kek",
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
    "name": "S├╝tla├ğ",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/firin-sutlac-yemekcom.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 100
  },
  {
    "name": "Baklava",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/fistikli-baklava-asama-11.jpg",
    "category": "┼Şerbetli Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 101
  },
  {
    "name": "K├╝nefe",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/kunefe-asama-10.jpg",
    "category": "┼Şerbetli Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 102
  },
  {
    "name": "Tavuk G├Â─şs├╝ Tatl─▒s─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tavuk_gogsu.jpg/800px-Tavuk_gogsu.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 103
  },
  {
    "name": "Menemen",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Menemen.jpg/800px-Menemen.jpg",
    "category": "Kahvalt─▒",
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
    "category": "Kahvalt─▒",
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
    "category": "Kahvalt─▒",
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
    "category": "Kahvalt─▒",
    "subCategory": "main",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 107
  },
  {
    "name": "Po─şa├ğa",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/peynirli-pogaca-asama-10.jpg",
    "category": "Kahvalt─▒",
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
    "category": "Kahvalt─▒",
    "subCategory": "main",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 109
  },
  {
    "name": "Past─▒rmal─▒ Yumurta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pastirmali_yumurta.jpg/800px-Pastirmali_yumurta.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "main",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 110
  },
  {
    "name": "M├╝cver",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 111
  },
  {
    "name": "A├ğ─▒k B├╝fe",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Acik_bufe.jpg/800px-Acik_bufe.jpg",
    "category": "Kahvalt─▒",
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
    "category": "Kahvalt─▒",
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
    "category": "Kahvalt─▒",
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
    "category": "Kahvalt─▒",
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
    "category": "Kahvalt─▒",
    "subCategory": "side",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 116
  },
  {
    "name": "Yumurta Salatas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yumurta_salatasi.jpg/800px-Yumurta_salatasi.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "side",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 117
  },
  {
    "name": "├çoban Salatas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/coban-salatasi-yemekcom.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 118
  },
  {
    "name": "Domatesli B├Ârek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Domatesli_borek.jpg/800px-Domatesli_borek.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "bakery",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 119
  },
  {
    "name": "Ispanakl─▒ B├Ârek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ispanakli_borek.jpg/800px-Ispanakli_borek.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "bakery",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 120
  },
  {
    "name": "Patatesli B├Ârek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patatesli_borek.jpg/800px-Patatesli_borek.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "bakery",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 121
  },
  {
    "name": "K─▒ymal─▒ Pide",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kiyimali_pide.jpg/800px-Kiyimali_pide.jpg",
    "category": "Kahvalt─▒",
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
    "category": "Kahvalt─▒",
    "subCategory": "bakery",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 123
  },
  {
    "name": "Ku┼şba┼şl─▒ Pide",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kusbasi_pide.jpg/800px-Kusbasi_pide.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "bakery",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 124
  },
  {
    "name": "Yumurtal─▒ Ekmek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yumurtali_ekmek.jpg/800px-Yumurtali_ekmek.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "main",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 125
  },
  {
    "name": "Sosisli B├Ârek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sosisli_borek.jpg/800px-Sosisli_borek.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "bakery",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 126
  },
  {
    "name": "Ha┼şlanm─▒┼ş Yumurta",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hashlanmis_yumurta.jpg/800px-Hashlanmis_yumurta.jpg",
    "category": "Kahvalt─▒",
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
    "category": "Kahvalt─▒",
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
    "category": "Kahvalt─▒",
    "subCategory": "main",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 129
  },
  {
    "name": "Mant─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/kayseri-mantisi-asama-10.jpg",
    "category": "Hamur ─░┼şleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 130
  },
  {
    "name": "S├╝tl├╝ M─▒s─▒r",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sutlu_misir.jpg/800px-Sutlu_misir.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "side",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 131
  },
  {
    "name": "Ka┼şarl─▒ Tost",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kasarli_tost.jpg/800px-Kasarli_tost.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "main",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 132
  },
  {
    "name": "Kar─▒┼ş─▒k Tost",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Karisik_tost.jpg/800px-Karisik_tost.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 133
  },
  {
    "name": "A├ğma",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Acma.jpg/800px-Acma.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "bakery",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 134
  },
  {
    "name": "Pilav Ustas─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pilav_ustasi.jpg/800px-Pilav_ustasi.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 135
  },
  {
    "name": "─░skender Kebap",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/ev-yapimi-iskender-kebap-asama-10.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 136
  },
  {
    "name": "├çi─ş K├Âfte",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/etsiz-cig-kofte-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 137
  },
  {
    "name": "Et D├Âner",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Et_doner_kebap.jpg/800px-Et_doner_kebap.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 138
  },
  {
    "name": "K├Âfte D├╝r├╝m",
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
    "name": "K─▒ymal─▒ Tost",
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
    "name": "Ciger Sandvi├ğ",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ciger_sandvic.jpg/800px-Ciger_sandvic.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 145
  },
  {
    "name": "Bal─▒k Ekmek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Balik_ekmek.jpg/800px-Balik_ekmek.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 146
  },
  {
    "name": "├çi─ş Biftek",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cig_biftek.jpg/800px-Cig_biftek.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 147
  },
  {
    "name": "M─▒s─▒r",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Misir.jpg/800px-Misir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 148
  },
  {
    "name": "Ka┼şarl─▒ K├Âfte",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kasarli_kofte.jpg/800px-Kasarli_kofte.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 149
  },
  {
    "name": "Sulu K├Âfte",
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
    "name": "Bonfile ┼Şi┼ş",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bonfile_sis.jpg/800px-Bonfile_sis.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 153
  },
  {
    "name": "Ku┼şba┼ş─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kusbasi.jpg/800px-Kusbasi.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 154
  },
  {
    "name": "Patl─▒can Kebab─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patlican_kebabi2.jpg/800px-Patlican_kebabi2.jpg",
    "category": "D├Âner & Kebap",
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
    "name": "Past─▒rma Izgara",
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
    "name": "K├Âfte Izgara",
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
    "name": "Kar─▒┼ş─▒k Izgara",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Karisik_izgara.jpg/800px-Karisik_izgara.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 162
  },
  {
    "name": "Bal─▒k Izgara",
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
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 165
  },
  {
    "name": "Portakal Suyu",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Portakal_suyu.jpg/800px-Portakal_suyu.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 166
  },
  {
    "name": "Elma Suyu",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Elma_suyu.jpg/800px-Elma_suyu.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 167
  },
  {
    "name": "├£z├╝m Suyu",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Uzum_suyu.jpg/800px-Uzum_suyu.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 168
  },
  {
    "name": "Smoothie",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Smoothie.jpg/800px-Smoothie.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 169
  },
  {
    "name": "Muzlu Smoothie",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Muzlu_smoothie.jpg/800px-Muzlu_smoothie.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 170
  },
  {
    "name": "├çilekli Smoothie",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cilekli_smoothie.jpg/800px-Cilekli_smoothie.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 171
  },
  {
    "name": "├çay",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cay.jpg/800px-Cay.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "drink",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 176
  },
  {
    "name": "T├╝rk Kahvesi",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Turk_kahvesi.jpg/800px-Turk_kahvesi.jpg",
    "category": "Kahvalt─▒",
    "subCategory": "drink",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 172
  },
  {
    "name": "Ye┼şil ├çay",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yesil_cay.jpg/800px-Yesil_cay.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 177
  },
  {
    "name": "Ada├ğay─▒ ├çay─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Adacayi_cayi.jpg/800px-Adacayi_cayi.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 178
  },
  {
    "name": "Nane Limon",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nane_limon.jpg/800px-Nane_limon.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 179
  },
  {
    "name": "Limonata",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Limonata.jpg/800px-Limonata.jpg",
    "category": "─░├ğecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 180
  },
  {
    "name": "Beyti",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Beyti_kebap2.jpg/800px-Beyti_kebap2.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 181
  },
  {
    "name": "Ali Nazik",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 182
  },
  {
    "name": "─░├ğli K├Âfte",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/icli-kofte-asama-11.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 183
  },
  {
    "name": "H├╝nkar Be─şendi",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/hunkar-begendi-asama-11.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 184
  },
  {
    "name": "Patates K├Âftesi",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patates_koftesi.jpg/800px-Patates_koftesi.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 185
  },
  {
    "name": "Mercimek K├Âftesi",
    "image_url": "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 186
  },
  {
    "name": "Kaburga S─▒y─▒rma",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kaburga_siyirma.jpg/800px-Kaburga_siyirma.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 187
  },
  {
    "name": "├çoban Kavurma",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Coban_kavurma.jpg/800px-Coban_kavurma.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 188
  },
  {
    "name": "├ç├Âkertme Kebab─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/cokertme-kebabi-asama-11.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 189
  },
  {
    "name": "Kuzu Kebab─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kuzu_kebabi.jpg/800px-Kuzu_kebabi.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 190
  },
  {
    "name": "Testi Kebab─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Testi_kebabi.jpg/800px-Testi_kebabi.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 191
  },
  {
    "name": "Ca─ş Kebab─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cag_kebabi.jpg/800px-Cag_kebabi.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 192
  },
  {
    "name": "Kavurma",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kavurma.jpg/800px-Kavurma.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 193
  },
  {
    "name": "D├Âner Salata",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Doner_salata.jpg/800px-Doner_salata.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 194
  },
  {
    "name": "K├Âfte Tabak",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kofte_tabak.jpg/800px-Kofte_tabak.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 195
  },
  {
    "name": "Tavuk ┼Şi┼ş Kebap",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_sis_kebap.jpg/800px-Tavuk_sis_kebap.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 196
  },
  {
    "name": "K├Âm├╝r Kebab─▒",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Komur_kebabi.jpg/800px-Komur_kebabi.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 197
  },
  {
    "name": "Karn─▒yar─▒k",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 199
  },
  {
    "name": "─░mambay─▒ld─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/imambayildi-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 200
  },
  {
    "name": "Zeytinya─şl─▒ Enginar",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/zeytinyagli-enginar-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 3,
    "id": 201
  },
  {
    "name": "P─▒rasa",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 202
  },
  {
    "name": "T├╝rl├╝",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 203
  },
  {
    "name": "Paz─▒ Sarmas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/pazi-sarmasi-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 204
  },
  {
    "name": "Kabak M├╝cver",
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
    "name": "Tas Kebab─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/tas-kebabi-asama-10.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 207
  },
  {
    "name": "Kuzu ─░ncik",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/kuzu-incik-asama-10.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 208
  },
  {
    "name": "─░zmir K├Âfte",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/izmir-kofte-asama-10.jpg",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 209
  },
  {
    "name": "Kad─▒nbudu K├Âfte",
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
    "name": "M─▒hlama / Kuymak",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/mihlama-asama-7.jpg",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 212
  },
  {
    "name": "Beyaz Peynir",
    "image_url": "https://images.unsplash.com/photo-1559561853-08451507c73a",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 213
  },
  {
    "name": "Zeytin (Siyah/Ye┼şil)",
    "image_url": "https://images.unsplash.com/photo-1536511132770-e51c6c06830b",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 214
  },
  {
    "name": "Bal - Kaymak",
    "image_url": "https://images.unsplash.com/photo-1584947897500-0387532f7a61",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 215
  },
  {
    "name": "Domates - Salatal─▒k S├Â─ş├╝┼ş",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 216
  },
  {
    "name": "T├╝rk ├çay─▒",
    "image_url": "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 217
  },
  {
    "name": "Kazandibi",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/kazandibi-asama-11.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 218
  },
  {
    "name": "Revani",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/revani-asama-10.jpg",
    "category": "┼Şerbetli Tatl─▒lar",
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
    "name": "Mevsim Meyveleri Taba─ş─▒",
    "image_url": "https://images.unsplash.com/photo-1519996529931-28324d5a630e",
    "category": "Meyveler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 222
  },
  {
    "name": "Pirinc Pilav─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/pirinc-pilavi-asama-10.jpg",
    "category": "Pilavlar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 223
  },
  {
    "name": "Bulgur Pilav─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/sebzeli-bulgur-pilavi-asama-9.jpg",
    "category": "Pilavlar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 224
  },
  {
    "name": "Makarna (Sal├ğal─▒)",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/salcali-makarna-asama-7.jpg",
    "category": "Hamur ─░┼şleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 225
  },
  {
    "name": "Pide (Ku┼şba┼ş─▒l─▒)",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/kusbasili-pide-asama-11.jpg",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 226
  },
  {
    "name": "├çupra Izgara",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/cupra-izgara-asama-10.jpg",
    "category": "Deniz ├£r├╝nleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 227
  },
  {
    "name": "Somon Izgara",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/firin-somon-asama-11.jpg",
    "category": "Deniz ├£r├╝nleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 228
  },
  {
    "name": "Hamsi Tava",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/hamsi-tava-asama-8.jpg",
    "category": "Deniz ├£r├╝nleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 229
  },
  {
    "name": "K─▒s─▒r",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/kisir-yemekcom.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 230
  },
  {
    "name": "Zeytinya─şl─▒ Yaprak Sarma",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 231
  },
  {
    "name": "Biber Dolmas─▒",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 232
  },
  {
    "name": "┼Şak┼şuka",
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
    "name": "Brokoli Salatas─▒",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 241
  },
  {
    "name": "Izgara K├Âfte",
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
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 245
  },
  {
    "name": "Tepsi Kebab─▒",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 246
  },
  {
    "name": "Ka─ş─▒t Kebab─▒",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 247
  },
  {
    "name": "Orman Kebab─▒",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "D├Âner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 248
  },
  {
    "name": "Yuvalama ├çorbas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/yuvalama-asama-13.jpg",
    "category": "├çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 249
  },
  {
    "name": "Lebeniye ├çorbas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/05/lebeniye-corbasi-asama-10.jpg",
    "category": "├çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 250
  },
  {
    "name": "Eri┼şteli Ye┼şil Mercimek ├çorbas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/yesil-mercimek-corbasi-asama-7.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 251
  },
  {
    "name": "Brokoli ├çorbas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/kremali-brokoli-corbasi-asama-9.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 252
  },
  {
    "name": "Balkaba─ş─▒ ├çorbas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/balkabagi-corbasi-asama-9.jpg",
    "category": "├çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 253
  },
  {
    "name": "K─▒ymal─▒ Yumurta",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/kiymali-yumurta-asama-5.jpg",
    "category": "Kahvalt─▒",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 254
  },
  {
    "name": "├ç─▒lb─▒r",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/cilbir-asama-7.jpg",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 255
  },
  {
    "name": "Patatesli Yumurta",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/patatesli-yumurta-asama-5.jpg",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 256
  },
  {
    "name": "Sigara B├Âre─şi",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/sigara-boregi-asama-8.jpg",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 257
  },
  {
    "name": "Pa├ğanga B├Âre─şi",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/pacanga-boregi-asama-7.jpg",
    "category": "Kahvalt─▒",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 258
  },
  {
    "name": "G├Âzleme (Peynirli)",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/peynirli-gozleme-asama-8.jpg",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 259
  },
  {
    "name": "Acuka",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/acuka-asama-5.jpg",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 260
  },
  {
    "name": "Pi┼şi",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/pisi-asama-7.jpg",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 261
  },
  {
    "name": "Pekmez - Tahin",
    "image_url": "https://images.unsplash.com/photo-1584947897500-0387532f7a61",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 262
  },
  {
    "name": "Kuru ─░ncir - Ceviz",
    "image_url": "https://images.unsplash.com/photo-1596560548464-f010549b84d7",
    "category": "Kahvalt─▒",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 263
  },
  {
    "name": "Ke┼şk├╝l",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/keskul-asama-6.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 264
  },
  {
    "name": "Tavukg├Â─şs├╝",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/tavuk-gogsu-asama-8.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 265
  },
  {
    "name": "Supangle",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/supangle-asama-7.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 266
  },
  {
    "name": "Ayva Tatl─▒s─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/ayva-tatlisi-asama-11.jpg",
    "category": "┼Şerbetli Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 267
  },
  {
    "name": "Kabak Tatl─▒s─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/kabak-tatlisi-asama-8.jpg",
    "category": "┼Şerbetli Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 268
  },
  {
    "name": "Tulumba Tatl─▒s─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/tulumba-tatlisi-asama-12.jpg",
    "category": "┼Şerbetli Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 269
  },
  {
    "name": "┼Şekerpare",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/sekerpare-asama-11.jpg",
    "category": "┼Şerbetli Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 270
  },
  {
    "name": "─░rmik Helvas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/irmik-helvasi-asama-7.jpg",
    "category": "┼Şerbetli Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 271
  },
  {
    "name": "Un Helvas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/un-helvasi-asama-6.jpg",
    "category": "┼Şerbetli Tatl─▒lar",
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
    "name": "Deniz B├Âr├╝lcesi",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/deniz-borulcesi-asama-9.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 275
  },
  {
    "name": "Babagannu┼ş",
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
    "name": "Cac─▒k",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/cacik-yemekcom.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 279
  },
  {
    "name": "Gavurda─ş─▒ Salatas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/gavurdagi-salatasi-asama-6.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 280
  },
  {
    "name": "Roka Salatas─▒",
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
    "name": "Rus Salatas─▒",
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
    "name": "Havu├ğ Tarator",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/havuc-tarator-asama-6.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 285
  },
  {
    "name": "Patl─▒can Salatas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/patlican-salatasi-asama-6.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 286
  },
  {
    "name": "K├Âpo─şlu",
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
    "name": "─░mam Bay─▒ld─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/09/imambayildi-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 289
  },
  {
    "name": "Zeytinya─şl─▒ Taze Fasulye",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/zeytinyagli-taze-fasulye-asama-11.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 290
  },
  {
    "name": "Zeytinya─şl─▒ Barbunya",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/zeytinyagli-barbunya-pilaki-asama-11.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 291
  },
  {
    "name": "Zeytinya─şl─▒ P─▒rasa",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/zeytinyagli-pirasa-asama-9.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 292
  },
  {
    "name": "Zeytinya─şl─▒ Br├╝ksel Lahanas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/bruksel-lahanasi-yemegi-asama-7.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 293
  },
  {
    "name": "Zeytinya─şl─▒ Karnabahar",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/firin-karnabahar-asama-7.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 294
  },
  {
    "name": "Zeytinya─şl─▒ Yer Elmas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/02/yer-elmasi-yemegi-asama-9.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 295
  },
  {
    "name": "Zeytinya─şl─▒ ┼Şevketi Bostan",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/sevketi-bostan-asama-10.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 3,
    "id": 296
  },
  {
    "name": "Zeytinya─şl─▒ Bamya",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/08/etli-bamya-yemekcom.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 297
  },
  {
    "name": "Saray Sarmas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/saray-sarmasi-asama-7.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 298
  },
  {
    "name": "Magnolia",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/magnolia-asama-6.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 299
  },
  {
    "name": "G├╝lla├ğ",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/gullac-asama-9.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 300
  },
  {
    "name": "A┼şure",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/10/asure-asama-15.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 301
  },
  {
    "name": "Zerde",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/zerde-asama-6.jpg",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 302
  },
  {
    "name": "Puding",
    "image_url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 303
  },
  {
    "name": "Meyveli Yo─şurt",
    "image_url": "https://images.unsplash.com/photo-1488477181946-6428a0291777",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 304
  },
  {
    "name": "Dondurma",
    "image_url": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a",
    "category": "S├╝tl├╝ Tatl─▒lar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 305
  },
  {
    "name": "Yaprak Sarmas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/yaprak-sarmasi-yemekcom.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 306
  },
  {
    "name": "Biber Dolmas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/etli-biber-dolmasi-yemekcom.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 307
  },
  {
    "name": "Kabak Dolmas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/06/kabak-dolmasi-yemekcom.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 308
  },
  {
    "name": "Patl─▒can Dolmas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/patlican-dolmasi-yemekcom.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 309
  },
  {
    "name": "Domates Dolmas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/zeytinyagli-domates-dolmasi.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 310
  },
  {
    "name": "Lahana Sarmas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/lahana-sarmasi-one-cikan.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 311
  },
  {
    "name": "Kuru Fasulye Dolmas─▒",
    "image_url": "https://i.lezzet.com.tr/images-xxlarge-recipe/kuru-fasulye-dolmasi-11b69bc6-5353-4f31-8631-d9e35df51c6e.jpg",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 312
  },
  {
    "name": "Enginar Dolmas─▒",
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
    "name": "Kremal─▒ Mantarl─▒ Makarna",
    "image_url": "https://i.nefisyemektarifleri.com/2020/02/14/kremali-mantarli-makarna-3.jpg",
    "category": "Makarna",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 318
  },
  {
    "name": "F─▒r─▒n Makarna",
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
    "name": "Makarna Salatas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/makarna-salatasi-yemekcom.jpg",
    "category": "Makarna",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 321
  },
  {
    "name": "├çoban Salatas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/coban-salatasi-yemekcom.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 322
  },
  {
    "name": "Akdeniz Salatas─▒",
    "image_url": "https://i.lezzet.com.tr/images-xxlarge-recipe/akdeniz-salatasi-c6f47e4b-43f3-4c79-bef7-33c02b30cd87.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 323
  },
  {
    "name": "Mevsim Salatas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/mevsim-salatasi-yemekcom.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 324
  },
  {
    "name": "Patates Salatas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/patates-salatasi-yemekcom.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 325
  },
  {
    "name": "Ton Bal─▒kl─▒ Salata",
    "image_url": "https://i.nefisyemektarifleri.com/2018/01/24/ton-balikli-salata.jpg",
    "category": "Salatalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 326
  },
  {
    "name": "K─▒s─▒r",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/kisir-yemekcom.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 327
  },
  {
    "name": "Gavurda─ş─▒ Salatas─▒",
    "image_url": "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/gavurdagi-salatasi-yemekcom.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 328
  },
  {
    "name": "Tavuklu Sezar Salatas─▒",
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
    case "├çorbalar":
      return { calories: 120, protein: 5, carbs: 18, fat: 3 };
    case "Baklagiller":
      return { calories: 280, protein: 18, carbs: 45, fat: 2 };
    case "Sebze Yemekleri":
      return { calories: 180, protein: 4, carbs: 15, fat: 10 };
    case "Izgara & Mangal":
    case "D├Âner & Kebap":
    case "Etli Yemekler":
      return { calories: 420, protein: 32, carbs: 12, fat: 24 };
    case "Hamur ─░┼şleri":
      return { calories: 380, protein: 10, carbs: 55, fat: 14 };
    case "Kahvalt─▒":
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
    case "S├╝tl├╝ Tatl─▒lar":
      return { calories: 280, protein: 6, carbs: 42, fat: 9 };
    case "┼Şerbetli Tatl─▒lar":
      return { calories: 480, protein: 5, carbs: 72, fat: 18 };
    case "Meyveler":
      return { calories: 65, protein: 1, carbs: 16, fat: 0 };
    case "Deniz ├£r├╝nleri":
      return { calories: 220, protein: 28, carbs: 5, fat: 8 };
    default:
      return { calories: 250, protein: 8, carbs: 30, fat: 10 };
  }
};

const getPriceByCategory = (category: string, priceLevel?: number) => {
  // 4 ki┼şilik evde malzeme maliyeti (2025 Ocak ger├ğek market fiyatlar─▒)
  const basePrices: Record<string, number> = {
    "├çorbalar": 18,           // Mercimek(12Ôé║) + So─şan(2Ôé║) + Tereya─ş─▒(4Ôé║)
    "Baklagiller": 25,        // Fasulye(10Ôé║) + Sal├ğa(5Ôé║) + So─şan(3Ôé║) + Ya─ş(7Ôé║)
    "Sebze Yemekleri": 35,    // Sebze(15Ôé║) + So─şan(3Ôé║) + Domates(8Ôé║) + Ya─ş(9Ôé║)
    "Etli Yemekler": 120,     // K─▒yma/Et(80Ôé║) + Sebze(15Ôé║) + Ya─ş(10Ôé║) + Baharat(5Ôé║)
    "Izgara & Mangal": 140,   // Et/Tavuk(100Ôé║) + Malzeme(20Ôé║) + Odun(20Ôé║)
    "D├Âner & Kebap": 110,     // K─▒yma(70Ôé║) + Ekmek(15Ôé║) + Sebze(15Ôé║) + Baharat(10Ôé║)
    "Hamur ─░┼şleri": 28,       // Un(8Ôé║) + Ya─ş(10Ôé║) + ─░├ğ malzeme(10Ôé║)
    "Kahvalt─▒": 35,           // Yumurta(12Ôé║) + Peynir(15Ôé║) + Zeytin(8Ôé║)
    "Pilavlar": 22,           // Pirin├ğ(12Ôé║) + Tereya─ş─▒(6Ôé║) + ┼Şehriye(4Ôé║)
    "Makarna": 32,            // Makarna(8Ôé║) + Sal├ğa(6Ôé║) + K─▒yma(12Ôé║) + Ka┼şar(6Ôé║)
    "Makarna & Pilav": 30,    
    "Dolma & Sarma": 55,      // Zeytinya─ş─▒(25Ôé║) + Pirin├ğ(10Ôé║) + Sebze(15Ôé║) + Baharat(5Ôé║)
    "Salatalar": 28,          // Domates(10Ôé║) + Salatal─▒k(8Ôé║) + Limon(5Ôé║) + Zeytinya─ş─▒(15Ôé║)
    "S├╝tl├╝ Tatl─▒lar": 38,     // S├╝t(12Ôé║) + ┼Şeker(8Ôé║) + Un(6Ôé║) + Tereya─ş─▒(12Ôé║)
    "┼Şerbetli Tatl─▒lar": 55,  // Un(10Ôé║) + ┼Şeker(12Ôé║) + Ya─ş(15Ôé║) + Ceviz/F─▒st─▒k(18Ôé║)
    "Deniz ├£r├╝nleri": 85,     // Bal─▒k/Karides(60Ôé║) + Limon(5Ôé║) + Salata(15Ôé║) + Ya─ş(5Ôé║)
    "Pizzalar": 45,           // Hamur(15Ôé║) + Ka┼şar(18Ôé║) + Sucuk/Salam(12Ôé║)
    "Burgerler": 50,          // K├Âfte(25Ôé║) + Ekmek(10Ôé║) + Sebze(10Ôé║) + Sos(5Ôé║)
    "Meyveler": 20,
    "Fast Food": 40,
    "Sokak Lezzetleri": 30,
  };

  const basePrice = basePrices[category] || 35;
  
  // priceLevel varsa ekstra maliyet ekle (premium malzemeler i├ğin)
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

/**
 * Demo session verilerini ger├ğek kullan─▒c─▒ya migrate et
 */
export const migrateSessionToUser = async (
  sessionUserId: number, // Negative demo session ID
  newUserId: number,      // Positive real user ID
  sessionData: {
    ratings: { food_id: number; rating: number }[];
    preferences: { likedIds: number[]; dislikedIds: number[] };
    meal_plans: any[];
  }
) => {
  console.log(`[Migration] Starting: Session ${sessionUserId} ÔåÆ User ${newUserId}`);
  
  try {
    // 1. Ratings'leri migrate et
    for (const rating of sessionData.ratings) {
      const existing = appState.user_ratings.find(
        (r) => r.user_id === newUserId && r.food_id === rating.food_id
      );
      
      if (!existing) {
        appState.user_ratings.push({
          id: appState.user_ratings.length + 1,
          user_id: newUserId,
          food_id: rating.food_id,
          rating: rating.rating,
        });
      }
    }
    console.log(`[Migration] Migrated ${sessionData.ratings.length} ratings`);

    // 2. Preferences'─▒ migrate et
    const userPrefs = await getUserPreferences(newUserId);
    
    // Liked IDs
    for (const likedId of sessionData.preferences.likedIds) {
      if (!userPrefs.likedIds.includes(likedId)) {
        userPrefs.likedIds.push(likedId);
      }
    }
    
    // Disliked IDs
    for (const dislikedId of sessionData.preferences.dislikedIds) {
      if (!userPrefs.dislikedIds.includes(dislikedId)) {
        userPrefs.dislikedIds.push(dislikedId);
      }
    }
    console.log(`[Migration] Migrated preferences: ${userPrefs.likedIds.length} likes, ${userPrefs.dislikedIds.length} dislikes`);

    // 3. Meal plans'i migrate et
    for (const plan of sessionData.meal_plans) {
      appState.meal_plans.push({
        ...plan,
        userId: newUserId, // User ID'yi de─şi┼ştir
      });
    }
    console.log(`[Migration] Migrated ${sessionData.meal_plans.length} meal plans`);

    // 4. State'i kaydet
    await saveState();
    
    console.log(`[Migration] Ô£à Completed successfully`);
    return true;
  } catch (error) {
    console.error(`[Migration] ÔØî Failed:`, error);
    return false;
  }
};
