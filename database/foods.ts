import { Food } from "../types";
import { appState, saveState } from "./state";

export const COMMON_FOODS: Food[] = [
  {
    "name": "Mercimek Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F31%2FEzogelin_corba.jpg%2F800px-Ezogelin_corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 2
  },
  {
    "name": "Yayla Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe5%2FYayla_%C4%9Forbas%C4%B1.jpg%2F800px-Yayla_%C4%9Forbas%C4%B1.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 3
  },
  {
    "name": "İşkembe Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 4
  },
  {
    "name": "Domates Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 5
  },
  {
    "name": "Tarhana Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 6
  },
  {
    "name": "Bulgur Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 7
  },
  {
    "name": "Yoğurt Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 8
  },
  {
    "name": "Mantar Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 9
  },
  {
    "name": "Kelle Paça",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 10
  },
  {
    "name": "Tavuk Suyu Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 11
  },
  {
    "name": "Sebzeli Çorba",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 12
  },
  {
    "name": "Nohut Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 13
  },
  {
    "name": "Şehriye Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 14
  },
  {
    "name": "Düğün Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 15
  },
  {
    "name": "Lahana Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 16
  },
  {
    "name": "Pırasa Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 17
  },
  {
    "name": "Kuru Fasulye",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffa%2FKuru_fasulye.jpg%2F800px-Kuru_fasulye.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 18
  },
  {
    "name": "Barbunya Pilaki",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffa%2FKuru_fasulye.jpg%2F800px-Kuru_fasulye.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 19
  },
  {
    "name": "Yeşil Mercimek",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffa%2FKuru_fasulye.jpg%2F800px-Kuru_fasulye.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 20
  },
  {
    "name": "Nohut Pilav",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffa%2FKuru_fasulye.jpg%2F800px-Kuru_fasulye.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 21
  },
  {
    "name": "Mercimek Köfte",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffa%2FKuru_fasulye.jpg%2F800px-Kuru_fasulye.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 22
  },
  {
    "name": "Nohut Salata",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffa%2FKuru_fasulye.jpg%2F800px-Kuru_fasulye.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 23
  },
  {
    "name": "Fasulye Pilaki",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffa%2FKuru_fasulye.jpg%2F800px-Kuru_fasulye.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 24
  },
  {
    "name": "Taze Fasulye",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 25
  },
  {
    "name": "Patlıcan Musakka",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 26
  },
  {
    "name": "Bamya",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 27
  },
  {
    "name": "Ispanak",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 28
  },
  {
    "name": "Karnabahar",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 29
  },
  {
    "name": "Pırasa Yemeği",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 30
  },
  {
    "name": "Manti",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F10%2FMant%25C4%25B1.jpg%2F800px-Mant%25C4%25B1.jpg",
    "category": "Hamur İşleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 31
  },
  {
    "name": "Pide",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F10%2FMant%25C4%25B1.jpg%2F800px-Mant%25C4%25B1.jpg",
    "category": "Hamur İşleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 32
  },
  {
    "name": "Lahmacun",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 33
  },
  {
    "name": "Börek",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 34
  },
  {
    "name": "Gözleme",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F10%2FMant%25C4%25B1.jpg%2F800px-Mant%25C4%25B1.jpg",
    "category": "Hamur İşleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 35
  },
  {
    "name": "Simit",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 36
  },
  {
    "name": "Adana Kebap",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 37
  },
  {
    "name": "Urfa Kebap",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd4%2FAdana_kebab%C4%B1.jpg%2F800px-Adana_kebab%C4%B1.jpg",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 38
  },
  {
    "name": "Beyti Kebap",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff6%2FBeyti_Kebap.jpg%2F800px-Beyti_Kebap.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 39
  },
  {
    "name": "Döner Dürüm",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 40
  },
  {
    "name": "Tavuk Döner",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 41
  },
  {
    "name": "Köfte",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fmedia.gettyimages.com%2Fid%2F952966478%2Fphoto%2Fturkish-kofte-with-french-fries-on-a-plate.jpg%3Fs%3D612x612%26w%3Dgi%26k%3D20%26c%3D7XO-TnOecofukR1fcucNqgtqz_wVzoMGsK31QFOERZc%3D",
    "category": "Kebaplar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 42
  },
  {
    "name": "İskender",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F0d%2F%25C4%25B0skender_kebap.JPG%2F800px-%25C4%25B0skender_kebap.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 43
  },
  {
    "name": "Şiş Kebap",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 44
  },
  {
    "name": "Tavuk Pilav",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 45
  },
  {
    "name": "Kumpir",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 46
  },
  {
    "name": "Midye Dolma",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 47
  },
  {
    "name": "Kokoreç",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 48
  },
  {
    "name": "Çiğer Sote",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 49
  },
  {
    "name": "Paça Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 50
  },
  {
    "name": "Ayran",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 51
  },
  {
    "name": "Şalgam",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 52
  },
  {
    "name": "Kefir",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 53
  },
  {
    "name": "Turşu Suyu",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 54
  },
  {
    "name": "Çorba",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 55
  },
  {
    "name": "Et Sote",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 56
  },
  {
    "name": "Tavuk Şiş",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 57
  },
  {
    "name": "Bonfile",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1213561258%2Fphoto%2Fsteak-from-turkish-cuisine.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DeFMbhxca6ANWyAoL6IJ_AxaTeDB3-uECW0rGh50FDt8%3D",
    "category": "Izgara",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 58
  },
  {
    "name": "Antrikot",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 59
  },
  {
    "name": "Pirzola",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 60
  },
  {
    "name": "Mozaik Pasta",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fwww.giverecipe.com%2Fwp-content%2Fuploads%2F2014%2F03%2FMozaik-Pasta-1.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 61
  },
  {
    "name": "Tiramisu",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fimage.idntimes.com%2Fpost%2F20240711%2Fresep-tiramisu-tanpa-mascarpone-yang-tetap-creamy-dan-lezat-01-3kz8p-hl5rv4.jpg",
    "category": "Pastalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 62
  },
  {
    "name": "Profiterol",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fmedia.gettyimages.com%2Fid%2F866537884%2Fphoto%2Fchocolate-profiterol.jpg%3Fs%3D612x612%26w%3Dgi%26k%3D20%26c%3DKjFdM6I3mvsKPDzUCwfX-3-QueE7sTKEs219SSqKIbU%3D",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 63
  },
  {
    "name": "Ekler",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fhypeandhyper.com%2Fcontent%2Fimages%2Fsize%2Fw600%2F2022%2F10%2Fgrafi-jeremiah-v3SUdMi3u9s-unsplash-2.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 64
  },
  {
    "name": "Cheesecake",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa8%2FSaffron_Cheesecake_%2528Unsplash%2529.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 65
  },
  {
    "name": "Muzlu Pasta",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FjAqTEKmkJJI%2Fmaxresdefault.jpg",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 66
  },
  {
    "name": "Cevizli Kek",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fwww.neomutfak.com%2Fwp-content%2Fuploads%2F2015%2F12%2FPSX_20151229_213327.jpg",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 67
  },
  {
    "name": "Fıstıklı Kek",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 68
  },
  {
    "name": "Portakallı Kek",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 69
  },
  {
    "name": "Elmalı Kek",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 70
  },
  {
    "name": "Muzlu Kek",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 71
  },
  {
    "name": "Çikolatalı Kek",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 72
  },
  {
    "name": "Kıvırcık Pasta",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 73
  },
  {
    "name": "Trileçe",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 74
  },
  {
    "name": "Paris Brest",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 75
  },
  {
    "name": "Çikolatalı Pasta",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 76
  },
  {
    "name": "Yulaflı Pasta",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 77
  },
  {
    "name": "Fransız Usulü Pasta",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 78
  },
  {
    "name": "Sünger Pasta",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 79
  },
  {
    "name": "Kremalı Pasta",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 80
  },
  {
    "name": "Meyveli Pasta",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 81
  },
  {
    "name": "Brownie",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 82
  },
  {
    "name": "Blondie",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 83
  },
  {
    "name": "Macaron",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 84
  },
  {
    "name": "Lava Kek",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 85
  },
  {
    "name": "Fondan Kek",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 86
  },
  {
    "name": "Pandispanya",
    "image_url": "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
    "category": "Pastalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 87
  },
  {
    "name": "Yulaflı Kek",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 88
  },
  {
    "name": "Havuçlu Kek",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 89
  },
  {
    "name": "Limonlu Kek",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 90
  },
  {
    "name": "Kahveli Kek",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 91
  },
  {
    "name": "Bademli Kek",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 92
  },
  {
    "name": "Vişneli Kek",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 93
  },
  {
    "name": "Cupcake",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 94
  },
  {
    "name": "Muffin",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 95
  },
  {
    "name": "Madlen",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 96
  },
  {
    "name": "Madeleine",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 97
  },
  {
    "name": "Whoopie Pie",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 98
  },
  {
    "name": "Kek Roll",
    "image_url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "category": "Kekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 99
  },
  {
    "name": "Sütlaç",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 100
  },
  {
    "name": "Baklava",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 101
  },
  {
    "name": "Künefe",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 102
  },
  {
    "name": "Tavuk Göğsü Tatlısı",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 103
  },
  {
    "name": "Menemen",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 111
  },
  {
    "name": "Açık Büfe",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 118
  },
  {
    "name": "Domatesli Börek",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F10%2FMant%25C4%25B1.jpg%2F800px-Mant%25C4%25B1.jpg",
    "category": "Hamur İşleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 130
  },
  {
    "name": "Sütlü Mısır",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 133
  },
  {
    "name": "Açma",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 135
  },
  {
    "name": "İskender Kebap",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 136
  },
  {
    "name": "Çiğ Köfte",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 137
  },
  {
    "name": "Et Döner",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 138
  },
  {
    "name": "Köfte Dürüm",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 139
  },
  {
    "name": "Hamburger",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 140
  },
  {
    "name": "Peynirli Tost",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 141
  },
  {
    "name": "Sucuklu Tost",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 142
  },
  {
    "name": "Kıymalı Tost",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 143
  },
  {
    "name": "Tantuni",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F92%2FTantuni2.jpg%2F800px-Tantuni2.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 144
  },
  {
    "name": "Ciger Sandviç",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 145
  },
  {
    "name": "Balık Ekmek",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 146
  },
  {
    "name": "Çiş Biftek",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 147
  },
  {
    "name": "Mısır",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FKumpir.jpg%2F800px-Kumpir.jpg",
    "category": "Sokak Lezzetleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 148
  },
  {
    "name": "Kaşarlı Köfte",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 149
  },
  {
    "name": "Sulu Köfte",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 150
  },
  {
    "name": "Tavuk Kanat",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 151
  },
  {
    "name": "Tavuk Bonfile",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 152
  },
  {
    "name": "Bonfile Şiş",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 153
  },
  {
    "name": "Kuşbaşı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 154
  },
  {
    "name": "Patlıcan Kebabı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 155
  },
  {
    "name": "Kaburga",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 156
  },
  {
    "name": "Sucuk Izgara",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 157
  },
  {
    "name": "Pastırma Izgara",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 158
  },
  {
    "name": "Biftek",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 159
  },
  {
    "name": "Köfte Izgara",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 160
  },
  {
    "name": "Tavuk Pirzola",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 161
  },
  {
    "name": "Karışık Izgara",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 162
  },
  {
    "name": "Balık Izgara",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 163
  },
  {
    "name": "Sebzeli Izgara",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 164
  },
  {
    "name": "Meyve Suyu",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 165
  },
  {
    "name": "Portakal Suyu",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 166
  },
  {
    "name": "Elma Suyu",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 167
  },
  {
    "name": "Üzüm Suyu",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 168
  },
  {
    "name": "Smoothie",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 169
  },
  {
    "name": "Muzlu Smoothie",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 170
  },
  {
    "name": "Çilekli Smoothie",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 171
  },
  {
    "name": "Çay",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
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
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 177
  },
  {
    "name": "Adaçayı Çayı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 178
  },
  {
    "name": "Nane Limon",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 179
  },
  {
    "name": "Limonata",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F87%2FAyran.jpg%2F800px-Ayran.jpg",
    "category": "İçecekler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 180
  },
  {
    "name": "Beyti",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 181
  },
  {
    "name": "Ali Nazik",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 182
  },
  {
    "name": "İçli Köfte",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 183
  },
  {
    "name": "Hünkar Beşendi",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 184
  },
  {
    "name": "Patates Köftesi",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 185
  },
  {
    "name": "Mercimek Köftesi",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 186
  },
  {
    "name": "Kaburga Sıyırma",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 187
  },
  {
    "name": "Çoban Kavurma",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 188
  },
  {
    "name": "Çökertme Kebabı",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 189
  },
  {
    "name": "Kuzu Kebabı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 190
  },
  {
    "name": "Testi Kebabı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 191
  },
  {
    "name": "Cağ Kebabı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 192
  },
  {
    "name": "Kavurma",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 193
  },
  {
    "name": "Döner Salata",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 194
  },
  {
    "name": "Köfte Tabak",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 195
  },
  {
    "name": "Tavuk Şiş Kebap",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 196
  },
  {
    "name": "Kömür Kebabı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 197
  },
  {
    "name": "Karnıyarık",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 199
  },
  {
    "name": "İmambayıldı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 200
  },
  {
    "name": "Zeytinyaşlı Enginar",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 3,
    "id": 201
  },
  {
    "name": "Pırasa",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 202
  },
  {
    "name": "Türlü",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 203
  },
  {
    "name": "Pazı Sarması",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 204
  },
  {
    "name": "Kabak Mücver",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 205
  },
  {
    "name": "Etli Ekmek",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 206
  },
  {
    "name": "Tas Kebabı",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 207
  },
  {
    "name": "Kuzu İncik",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 208
  },
  {
    "name": "İzmir Köfte",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 209
  },
  {
    "name": "Kadınbudu Köfte",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Etli Yemekler",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 210
  },
  {
    "name": "Nohut",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffa%2FKuru_fasulye.jpg%2F800px-Kuru_fasulye.jpg",
    "category": "Baklagiller",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 211
  },
  {
    "name": "Mıhlama / Kuymak",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 212
  },
  {
    "name": "Beyaz Peynir",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 213
  },
  {
    "name": "Zeytin (Siyah/Yeşil)",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 214
  },
  {
    "name": "Bal - Kaymak",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 215
  },
  {
    "name": "Domates - Salatalık Söşüş",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 216
  },
  {
    "name": "Türk Çayı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 217
  },
  {
    "name": "Kazandibi",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 218
  },
  {
    "name": "Revani",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 219
  },
  {
    "name": "Elma",
    "image_url": "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80",
    "category": "Meyveler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 220
  },
  {
    "name": "Muz",
    "image_url": "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80",
    "category": "Meyveler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 221
  },
  {
    "name": "Mevsim Meyveleri Tabağı",
    "image_url": "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80",
    "category": "Meyveler",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 222
  },
  {
    "name": "Pirinc Pilavı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2e%2FPilav%252C_nohut_yahni%252C_chicken%252C_potatoes_etc.jpg%2F800px-Pilav%252C_nohut_yahni%252C_chicken%252C_potatoes_etc.jpg",
    "category": "Pilavlar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 223
  },
  {
    "name": "Bulgur Pilavı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2e%2FPilav%252C_nohut_yahni%252C_chicken%252C_potatoes_etc.jpg%2F800px-Pilav%252C_nohut_yahni%252C_chicken%252C_potatoes_etc.jpg",
    "category": "Pilavlar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 224
  },
  {
    "name": "Makarna (Salçalı)",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F10%2FMant%25C4%25B1.jpg%2F800px-Mant%25C4%25B1.jpg",
    "category": "Hamur İşleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 225
  },
  {
    "name": "Pide (Kuşbaşılı)",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 226
  },
  {
    "name": "Çupra Izgara",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Deniz Ürünleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 227
  },
  {
    "name": "Somon Izgara",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Deniz Ürünleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 228
  },
  {
    "name": "Hamsi Tava",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Deniz Ürünleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 229
  },
  {
    "name": "Kısır",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 230
  },
  {
    "name": "Zeytinyaşlı Yaprak Sarma",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 231
  },
  {
    "name": "Biber Dolması",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 232
  },
  {
    "name": "Şakşuka",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 233
  },
  {
    "name": "Enginar",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 3,
    "id": 234
  },
  {
    "name": "Kereviz",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 235
  },
  {
    "name": "Bezelye",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 236
  },
  {
    "name": "Semizotu",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 237
  },
  {
    "name": "Patates Oturtma",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 238
  },
  {
    "name": "Kabak Kalye",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 239
  },
  {
    "name": "Karnabahar Graten",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 240
  },
  {
    "name": "Brokoli Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 241
  },
  {
    "name": "Izgara Köfte",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 242
  },
  {
    "name": "Kuzu Pirzola",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 243
  },
  {
    "name": "Kanat Izgara",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa1%2FTurkish_meatballs.jpg%2F800px-Turkish_meatballs.jpg",
    "category": "Izgara & Mangal",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 244
  },
  {
    "name": "Beyti Sarma",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 245
  },
  {
    "name": "Tepsi Kebabı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 246
  },
  {
    "name": "Kağıt Kebabı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 247
  },
  {
    "name": "Orman Kebabı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG%2F800px-Doner_kebab%252C_Istanbul%252C_Turkey.JPG",
    "category": "Döner & Kebap",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 248
  },
  {
    "name": "Yuvalama Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 249
  },
  {
    "name": "Lebeniye Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 250
  },
  {
    "name": "Erişteli Yeşil Mercimek Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 251
  },
  {
    "name": "Brokoli Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 252
  },
  {
    "name": "Balkabağı Çorbası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6c%2FMercimek_Corba.jpg%2F800px-Mercimek_Corba.jpg",
    "category": "Çorbalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 253
  },
  {
    "name": "Kıymalı Yumurta",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 254
  },
  {
    "name": "Çılbır",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 255
  },
  {
    "name": "Patatesli Yumurta",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 256
  },
  {
    "name": "Sigara Böreği",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 257
  },
  {
    "name": "Paçanga Böreşi",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 258
  },
  {
    "name": "Gözleme (Peynirli)",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 259
  },
  {
    "name": "Acuka",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 260
  },
  {
    "name": "Pişi",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 261
  },
  {
    "name": "Pekmez - Tahin",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 262
  },
  {
    "name": "Kuru İncir - Ceviz",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F07%2FSimit-2x.JPG%2F800px-Simit-2x.JPG",
    "category": "Kahvaltı",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 263
  },
  {
    "name": "Keşkül",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 264
  },
  {
    "name": "Tavukgöğsü",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 265
  },
  {
    "name": "Supangle",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 266
  },
  {
    "name": "Ayva Tatlısı",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 267
  },
  {
    "name": "Kabak Tatlısı",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 268
  },
  {
    "name": "Tulumba Tatlısı",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 269
  },
  {
    "name": "Şekerpare",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 270
  },
  {
    "name": "İrmik Helvası",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 271
  },
  {
    "name": "Un Helvası",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Şerbetli Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 272
  },
  {
    "name": "Haydari",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 273
  },
  {
    "name": "Humus",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 274
  },
  {
    "name": "Deniz Börülcesi",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 275
  },
  {
    "name": "Babagannuş",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 276
  },
  {
    "name": "Atom",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 277
  },
  {
    "name": "Muhammara",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 278
  },
  {
    "name": "Cacık",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 279
  },
  {
    "name": "Gavurdağı Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 280
  },
  {
    "name": "Roka Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 281
  },
  {
    "name": "Piyaz",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 282
  },
  {
    "name": "Rus Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 283
  },
  {
    "name": "Tarator",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 284
  },
  {
    "name": "Havuç Tarator",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 285
  },
  {
    "name": "Patlıcan Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 286
  },
  {
    "name": "Köpoğlu",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 287
  },
  {
    "name": "Girit Ezmesi",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 288
  },
  {
    "name": "İmam Bayıldı",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 289
  },
  {
    "name": "Zeytinyaşlı Taze Fasulye",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 290
  },
  {
    "name": "Zeytinyaşlı Barbunya",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ffa%2FKuru_fasulye.jpg%2F800px-Kuru_fasulye.jpg",
    "category": "Baklagiller",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 291
  },
  {
    "name": "Zeytinyaşlı Pırasa",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 292
  },
  {
    "name": "Zeytinyaşlı Brüksel Lahanası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 293
  },
  {
    "name": "Zeytinyaşlı Karnabahar",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 294
  },
  {
    "name": "Zeytinyaşlı Yer Elması",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 295
  },
  {
    "name": "Zeytinyaşlı Şevketi Bostan",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 3,
    "id": 296
  },
  {
    "name": "Zeytinyaşlı Bamya",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FTaze_fasulye.jpg%2F800px-Taze_fasulye.jpg",
    "category": "Sebze Yemekleri",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 297
  },
  {
    "name": "Saray Sarması",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 298
  },
  {
    "name": "Magnolia",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 299
  },
  {
    "name": "Güllaç",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 300
  },
  {
    "name": "Aşure",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 301
  },
  {
    "name": "Zerde",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 302
  },
  {
    "name": "Puding",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 303
  },
  {
    "name": "Meyveli Yoğurt",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 304
  },
  {
    "name": "Dondurma",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Sütlü Tatlılar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 305
  },
  {
    "name": "Yaprak Sarması",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 306
  },
  {
    "name": "Biber Dolması",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 307
  },
  {
    "name": "Kabak Dolması",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 308
  },
  {
    "name": "Patlıcan Dolması",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 309
  },
  {
    "name": "Domates Dolması",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Dolma & Sarma",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 310
  },
  {
    "name": "Lahana Sarması",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 311
  },
  {
    "name": "Kuru Fasulye Dolması",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 312
  },
  {
    "name": "Enginar Dolması",
    "image_url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "category": "Dolma & Sarma",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 3,
    "id": 313
  },
  {
    "name": "Lazanya",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F52%2FSpaghetti_napolitana.jpg%2F800px-Spaghetti_napolitana.jpg",
    "category": "Makarna",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 314
  },
  {
    "name": "Fettuccine Alfredo",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F52%2FSpaghetti_napolitana.jpg%2F800px-Spaghetti_napolitana.jpg",
    "category": "Makarna",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 315
  },
  {
    "name": "Spagetti Bolonez",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F52%2FSpaghetti_napolitana.jpg%2F800px-Spaghetti_napolitana.jpg",
    "category": "Makarna",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 316
  },
  {
    "name": "Penne Arrabiata",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F52%2FSpaghetti_napolitana.jpg%2F800px-Spaghetti_napolitana.jpg",
    "category": "Makarna",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 2,
    "id": 317
  },
  {
    "name": "Kremalı Mantarlı Makarna",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F52%2FSpaghetti_napolitana.jpg%2F800px-Spaghetti_napolitana.jpg",
    "category": "Makarna",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 318
  },
  {
    "name": "Fırın Makarna",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F52%2FSpaghetti_napolitana.jpg%2F800px-Spaghetti_napolitana.jpg",
    "category": "Makarna",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 319
  },
  {
    "name": "Carbonara",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F52%2FSpaghetti_napolitana.jpg%2F800px-Spaghetti_napolitana.jpg",
    "category": "Makarna",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 320
  },
  {
    "name": "Makarna Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F52%2FSpaghetti_napolitana.jpg%2F800px-Spaghetti_napolitana.jpg",
    "category": "Makarna",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 321
  },
  {
    "name": "Çoban Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FTurkish_salad.jpg%2F800px-Turkish_salad.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 322
  },
  {
    "name": "Akdeniz Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FTurkish_salad.jpg%2F800px-Turkish_salad.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 323
  },
  {
    "name": "Mevsim Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FTurkish_salad.jpg%2F800px-Turkish_salad.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 324
  },
  {
    "name": "Patates Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FTurkish_salad.jpg%2F800px-Turkish_salad.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 1,
    "id": 325
  },
  {
    "name": "Ton Balıklı Salata",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FTurkish_salad.jpg%2F800px-Turkish_salad.jpg",
    "category": "Salatalar",
    "is_vegetarian": false,
    "is_vegan": false,
    "is_halal": true,
    "priceLevel": 2,
    "id": 326
  },
  {
    "name": "Kısır",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FTurkish_salad.jpg%2F800px-Turkish_salad.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 327
  },
  {
    "name": "Gavurdağı Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FTurkish_salad.jpg%2F800px-Turkish_salad.jpg",
    "category": "Salatalar",
    "is_vegetarian": true,
    "is_vegan": true,
    "is_halal": true,
    "priceLevel": 1,
    "id": 328
  },
  {
    "name": "Tavuklu Sezar Salatası",
    "image_url": "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F39%2FTurkish_salad.jpg%2F800px-Turkish_salad.jpg",
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
    "Çorbalar": 18,           // Mercimek(12₺) + Soşan(2₺) + Tereyaşı(4₺)
    "Baklagiller": 25,        // Fasulye(10₺) + Salça(5₺) + Soşan(3₺) + Yaş(7₺)
    "Sebze Yemekleri": 35,    // Sebze(15₺) + Soşan(3₺) + Domates(8₺) + Yaş(9₺)
    "Etli Yemekler": 120,     // Kıyma/Et(80₺) + Sebze(15₺) + Yaş(10₺) + Baharat(5₺)
    "Izgara & Mangal": 140,   // Et/Tavuk(100₺) + Malzeme(20₺) + Odun(20₺)
    "Döner & Kebap": 110,     // Kıyma(70₺) + Ekmek(15₺) + Sebze(15₺) + Baharat(10₺)
    "Hamur İşleri": 28,       // Un(8₺) + Yaş(10₺) + İç malzeme(10₺)
    "Kahvaltı": 35,           // Yumurta(12₺) + Peynir(15₺) + Zeytin(8₺)
    "Pilavlar": 22,           // Pirinç(12₺) + Tereyaşı(6₺) + Şehriye(4₺)
    "Makarna": 32,            // Makarna(8₺) + Salça(6₺) + Kıyma(12₺) + Kaşar(6₺)
    "Makarna & Pilav": 30,    
    "Dolma & Sarma": 55,      // Zeytinyaşı(25₺) + Pirinç(10₺) + Sebze(15₺) + Baharat(5₺)
    "Salatalar": 28,          // Domates(10₺) + Salatalık(8₺) + Limon(5₺) + Zeytinyaşı(15₺)
    "Sütlü Tatlılar": 38,     // Süt(12₺) + Şeker(8₺) + Un(6₺) + Tereyaşı(12₺)
    "Şerbetli Tatlılar": 55,  // Un(10₺) + Şeker(12₺) + Yaş(15₺) + Ceviz/Fıstık(18₺)
    "Deniz Ürünleri": 85,     // Balık/Karides(60₺) + Limon(5₺) + Salata(15₺) + Yaş(5₺)
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

/**
 * Demo session verilerini gerçek kullanıcıya migrate et
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
  console.log(`[Migration] Starting: Session ${sessionUserId} → User ${newUserId}`);
  
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

    // 2. Preferences'ı migrate et
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
        userId: newUserId, // User ID'yi deşiştir
      });
    }
    console.log(`[Migration] Migrated ${sessionData.meal_plans.length} meal plans`);

    // 4. State'i kaydet
    await saveState();
    
    console.log(`[Migration] ✅ Completed successfully`);
    return true;
  } catch (error) {
    console.error(`[Migration] ❌ Failed:`, error);
    return false;
  }
};
