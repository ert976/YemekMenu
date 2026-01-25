import { Food } from "../types";
import { appState, saveState } from "./state";

export const COMMON_FOODS: Food[] = [
  {
    name: "Mercimek Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F16%2FMercimek_%25C3%25A7orbas%25C4%25B1.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    estimatedPrice: 18,
    nutritionalInfo: {
      calories: 120,
      protein: 6,
      carbs: 18,
      fat: 3,
    },
    id: 1,
  },
  {
    name: "Ezogelin Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F23%2FEzogelin_Corba.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 2,
  },
  {
    name: "Yayla Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F96%2FYayla_%25C3%25A7orbas%25C4%25B1.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 3,
  },
  {
    name: "İşkembe Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F79%2FTripe_soup_and_mezes_from_Turkey.jpg",
    category: "Çorbalar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    id: 4,
  },
  {
    name: "Domates Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 5,
  },
  {
    name: "Tarhana Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb2%2FTarhana_soup_in_Ankara.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 6,
  },
  {
    name: "Bulgur Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F44%2FYayla_chorba.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 7,
  },
  {
    name: "Yoğurt Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F44%2FYayla_chorba.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 8,
  },
  {
    name: "Mantar Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F45%2FMantar_%25C3%25A7orbas%25C4%25B1.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 9,
  },
  {
    name: "Kelle Paça",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Çorbalar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    id: 10,
  },
  {
    name: "Tavuk Suyu Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 11,
  },
  {
    name: "Sebzeli Çorba",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff6%2FVegetable_soup_9.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 12,
  },
  {
    name: "Nohut Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 13,
  },
  {
    name: "Şehriye Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fe%2Fe7%2FDuck_blood_and_green_bean_noodle_Soup_2010.JPG",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 14,
  },
  {
    name: "Düğün Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb2%2FWedding_soup_from_the_Turkish_cuisine.jpg",
    category: "Çorbalar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 15,
  },
  {
    name: "Lahana Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd1%2FKapusniak.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 16,
  },
  {
    name: "Pırasa Çorbası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F26%2FPotato_Leek_Soup_%25284258747258%2529.jpg",
    category: "Çorbalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 17,
  },
  {
    name: "Kuru Fasulye",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffc%2FKuru_fasulye.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 18,
  },
  {
    name: "Barbunya Pilaki",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F10%2FBarbunya_pilaki_in_Ankara.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
    id: 19,
  },
  {
    name: "Yeşil Mercimek",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 20,
  },
  {
    name: "Nohut Pilav",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2e%2FPilav%252C_nohut_yahni%252C_chicken%252C_potatoes_etc.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 21,
  },
  {
    name: "Mercimek Köfte",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F51%2FMercimekkoftesi.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 22,
  },
  {
    name: "Nohut Salata",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 23,
  },
  {
    name: "Fasulye Pilaki",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Baklagiller",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 24,
  },
  {
    name: "Taze Fasulye",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc7%2FZeytinya%25C4%259Fl%25C4%25B1_taze_fasulye_from_Turkey.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 25,
  },
  {
    name: "Patlıcan Musakka",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F9d%2FMusakka_ve_pilav.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 26,
  },
  {
    name: "Bamya",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F76%2FBamya.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
    id: 27,
  },
  {
    name: "Ispanak",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Ftaze-fasulye-yemekcom.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 28,
  },
  {
    name: "Karnabahar",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fc0%2FKarnabahar_salatas%C4%B1.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 29,
  },
  {
    name: "Pırasa Yemeği",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Ftaze-fasulye-yemekcom.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 30,
  },
  {
    name: "Manti",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F10%2FMant%25C4%25B1.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 31,
  },
  {
    name: "Pide",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffc%2FBurek_oslo.jpeg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 32,
  },
  {
    name: "Lahmacun",
    image_url:
      "https://images.unsplash.com/photo-1626202340503-4f96440db79f?auto=format&fit=crop&w=800&q=80",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 33,
  },
  {
    name: "Börek",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 34,
  },
  {
    name: "Gözleme",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Hamur İşleri",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 35,
  },
  {
    name: "Poğaça",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff3%2FPeynirli_po%25C4%259Fa%25C3%25A7a_in_Ankara.jpg",
    category: "Hamur İşleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 36,
  },
  {
    name: "Simit",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F07%2FSimit-2x.JPG",
    category: "Kahvaltı",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 37,
  },
  {
    name: "Menemen",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F17%2FMenemen.jpg",
    category: "Kahvaltı",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 38,
  },
  {
    name: "Sucuklu Yumurta",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Kahvaltı",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 39,
  },
  {
    name: "Adana Kebap",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fc%2Fcf%2FAdana_Kebap.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    id: 40,
  },
  {
    name: "Urfa Kebabı",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    id: 41,
  },
  {
    name: "İskender Kebap",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    id: 42,
  },
  {
    name: "Döner",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8e%2FDoner_kebab%252C_Istanbul%252C_Turkey.JPG",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 43,
  },
  {
    name: "Şiş Kebap",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    id: 44,
  },
  {
    name: "İzgara Köfte",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa1%2FTurkish_meatballs.jpg",
    category: "Döner & Kebap",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 45,
  },
  {
    name: "Tavuklu Burger",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F12%2FChicken_burger_from_Chitir_Chicken%252C_Hillegersberg%252C_Rotterdam_%25282021%2529_02.jpg",
    category: "Fast Food",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 46,
  },
  {
    name: "Makarna",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Makarna",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 47,
  },
  {
    name: "Lazanya",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Makarna",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 48,
  },
  {
    name: "Domatesli Pilav",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbc%2FDomatesli_pilav_from_Turkey.jpg",
    category: "Pilavlar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 49,
  },
  {
    name: "Patlıcan Karnıyarık",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F87%2FKarn%25C4%25B1yar%25C4%25B1k.JPG",
    category: "Sebze Yemekleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 50,
  },
  {
    name: "Yaprak Sarma",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F5a%2FVi%C5%9Fneli_Yaprak_Sarma.jpg",
    category: "Dolma & Sarma",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 51,
  },
  {
    name: "İmambayıldı",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Ftaze-fasulye-yemekcom.jpg",
    category: "Sebze Yemekleri",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 2,
    id: 52,
  },
  {
    name: "Baklava",
    image_url:
      "https://images.unsplash.com/photo-1541014163933-2882b544337b?auto=format&fit=crop&w=800&q=80",
    category: "Şerbetli Tatlılar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    id: 53,
  },
  {
    name: "Künefe",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7a%2FK%25C3%25BCnefe%252C_Wiesbaden.jpg",
    category: "Şerbetli Tatlılar",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    id: 54,
  },
  {
    name: "Sütlaç",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F7c%2FFirinda_s%25C3%25BCtla%25C3%25A7.jpg",
    category: "Sütlü Tatlılar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 2,
    id: 55,
  },
  {
    name: "Çoban Salatası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F39%2FTurkish_salad.jpg",
    category: "Salatalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 56,
  },
  {
    name: "Mevsim Salatası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F06%2Fcoban-salatasi-yemekcom.jpg",
    category: "Salatalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 57,
  },
  {
    name: "Patates Salatası",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F06%2Fcoban-salatasi-yemekcom.jpg",
    category: "Salatalar",
    is_vegetarian: true,
    is_vegan: false,
    is_halal: true,
    priceLevel: 1,
    id: 58,
  },
  {
    name: "Kısır",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F06%2Fcoban-salatasi-yemekcom.jpg",
    category: "Salatalar",
    is_vegetarian: true,
    is_vegan: true,
    is_halal: true,
    priceLevel: 1,
    id: 59,
  },
  {
    name: "Izgara Balık",
    image_url:
      "https://images.weserv.nl/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2014%2F11%2Fmercimek-corbasi-yemekcom.jpg",
    category: "Deniz Ürünleri",
    is_vegetarian: false,
    is_vegan: false,
    is_halal: true,
    priceLevel: 3,
    id: 60,
  },
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
    case "Fast Food":
      return { calories: 450, protein: 20, carbs: 40, fat: 20 };
    default:
      return { calories: 250, protein: 8, carbs: 30, fat: 10 };
  }
};

const getPriceByCategory = (category: string, priceLevel?: number) => {
  const basePrices: Record<string, number> = {
    Çorbalar: 18,
    Baklagiller: 25,
    "Sebze Yemekleri": 35,
    "Etli Yemekler": 120,
    "Izgara & Mangal": 140,
    "Döner & Kebap": 110,
    "Hamur İşleri": 28,
    Kahvaltı: 35,
    Pilavlar: 22,
    Makarna: 32,
    "Makarna & Pilav": 30,
    "Dolma & Sarma": 55,
    Salatalar: 28,
    "Sütlü Tatlılar": 38,
    "Şerbetli Tatlılar": 55,
    "Deniz Ürünleri": 85,
    "Fast Food": 40,
    Meyveler: 20,
  };

  const basePrice = basePrices[category] || 35;

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
    estimatedPrice:
      f.estimatedPrice ||
      getPriceByCategory(f.category as string, f.priceLevel),
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

export const migrateSessionToUser = async (
  sessionUserId: number,
  newUserId: number,
  sessionData: {
    ratings: { food_id: number; rating: number }[];
    preferences: { likedIds: number[]; dislikedIds: number[] };
    meal_plans: any[];
  },
) => {
  console.log(
    `[Migration] Starting: Session ${sessionUserId} → User ${newUserId}`,
  );

  try {
    for (const rating of sessionData.ratings) {
      const existing = appState.user_ratings.find(
        (r) => r.user_id === newUserId && r.food_id === rating.food_id,
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

    const userPrefs = await getUserPreferences(newUserId);

    for (const likedId of sessionData.preferences.likedIds) {
      if (!userPrefs.likedIds.includes(likedId)) {
        userPrefs.likedIds.push(likedId);
      }
    }

    for (const dislikedId of sessionData.preferences.dislikedIds) {
      if (!userPrefs.dislikedIds.includes(dislikedId)) {
        userPrefs.dislikedIds.push(dislikedId);
      }
    }
    console.log(
      `[Migration] Migrated preferences: ${userPrefs.likedIds.length} likes, ${userPrefs.dislikedIds.length} dislikes`,
    );

    for (const plan of sessionData.meal_plans) {
      appState.meal_plans.push({
        ...plan,
        userId: newUserId,
      });
    }
    console.log(
      `[Migration] Migrated ${sessionData.meal_plans.length} meal plans`,
    );

    await saveState();

    console.log(`[Migration] ✅ Completed successfully`);
    return true;
  } catch (error) {
    console.error(`[Migration] ❌ Failed:`, error);
    return false;
  }
};
