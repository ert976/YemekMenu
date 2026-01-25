const fs = require("fs");
const path = "c:/Users/eargu/GitHub/YemekMenu/database/foods.ts";
let content = fs.readFileSync(path, "utf8");

function getProxiedUrl(url) {
  if (!url || url.includes("unsplash.com")) return url;
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;
}

const mapping = {
  "Yayla Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Yayla_%C3%A7orbas%C4%B1.jpg",
  Döner:
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Doner_kebab%2C_Istanbul%2C_Turkey.JPG",
  "İzgara Köfte":
    "https://upload.wikimedia.org/wikipedia/commons/a/a1/Turkish_meatballs.jpg",
  "Adana Kebap":
    "https://upload.wikimedia.org/wikipedia/commons/c/cf/Adana_Kebap.jpg",
  "Tarhana Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Tarhana_soup_in_Ankara.jpg",
  Lahmacun:
    "https://images.unsplash.com/photo-1626202340503-4f96440db79f?auto=format&fit=crop&w=800&q=80",
  Baklava:
    "https://images.unsplash.com/photo-1541014163933-2882b544337b?auto=format&fit=crop&w=800&q=80",
  Sütlaç:
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Firinda_s%C3%BCtla%C3%A7.jpg",
  "Sigara Böreği":
    "https://upload.wikimedia.org/wikipedia/commons/5/52/Dost_Evi_Sigara_B%C3%B6re%C4%9Fi_-_panoramio.jpg",
  Künefe:
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/K%C3%BCnefe%2C_Wiesbaden.jpg",
  Poğaça:
    "https://upload.wikimedia.org/wikipedia/commons/f/f3/Peynirli_po%C4%9Fa%C3%A7a_in_Ankara.jpg",
  Pide: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Burek_oslo.jpeg",
  "Yaprak Sarma":
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/Vişneli_Yaprak_Sarma.jpg",
  Simit: "https://upload.wikimedia.org/wikipedia/commons/0/07/Simit-2x.JPG",
  "Patlıcan Karnıyarık":
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Karn%C4%B1yar%C4%B1k.JPG",
  Menemen: "https://upload.wikimedia.org/wikipedia/commons/1/17/Menemen.jpg",
  Mantı: "https://upload.wikimedia.org/wikipedia/commons/1/10/Mant%C4%B1.jpg",
  Manti: "https://upload.wikimedia.org/wikipedia/commons/1/10/Mant%C4%B1.jpg",
  "Çoban Salatası":
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Turkish_salad.jpg",
  "Mercimek Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/1/16/Mercimek_%C3%A7orbas%C4%B1.jpg",
  Bamya: "https://upload.wikimedia.org/wikipedia/commons/7/76/Bamya.jpg",
  "Ezogelin Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/2/23/Ezogelin_Corba.jpg",
  "Kuru Fasulye":
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/Kuru_fasulye.jpg",
  "Mercimek Köfte":
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Mercimekkoftesi.jpg",
  Karnabahar:
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Karnabahar_salatası.jpg",
  "Barbunya Pilaki":
    "https://upload.wikimedia.org/wikipedia/commons/1/10/Barbunya_pilaki_in_Ankara.jpg",
  "Patlıcan Musakka":
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Musakka_ve_pilav.jpg",
  "Taze Fasulye":
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Zeytinya%C4%9Fl%C4%B1_taze_fasulye_from_Turkey.jpg",
  "Domatesli Pilav":
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Domatesli_pilav_from_Turkey.jpg",
  "Nohut Pilav":
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/Pilav%2C_nohut_yahni%2C_chicken%2C_potatoes_etc.jpg",
  "İşkembe Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Tripe_soup_and_mezes_from_Turkey.jpg",
  "Yoğurt Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Yayla_chorba.jpg",
  "Düğün Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/Wedding_soup_from_the_Turkish_cuisine.jpg",
  "Mantar Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Mantar_%C3%A7orbas%C4%B1.jpg",
  "Bulgur Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Yayla_chorba.jpg",
  "Tavuklu Burger":
    "https://upload.wikimedia.org/wikipedia/commons/1/12/Chicken_burger_from_Chitir_Chicken%2C_Hillegersberg%2C_Rotterdam_%282021%29_02.jpg",
  "Şehriye Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Duck_blood_and_green_bean_noodle_Soup_2010.JPG",
  "Sebzeli Çorba":
    "https://upload.wikimedia.org/wikipedia/commons/f/f6/Vegetable_soup_9.jpg",
  "Pırasa Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Potato_Leek_Soup_%284258747258%29.jpg",
  "Lahana Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Kapusniak.jpg",
};

const categoryPool = {
  Çorbalar:
    "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/mercimek-corbasi-yemekcom.jpg",
  Salatalar:
    "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/coban-salatasi-yemekcom.jpg",
  "Sebze Yemekleri":
    "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/taze-fasulye-yemekcom.jpg",
};

let updatedCount = 0;
const foodRegex =
  /name:\s*\"([^\"]+)\",\n\s*image_url:\n\s*\"([^\"]+)\",\n\s*category:\s*\"([^\"]+)\"/g;

let newContent = content.replace(
  foodRegex,
  (match, name, image_url, category) => {
    let sourceUrl =
      mapping[name] ||
      categoryPool[category] ||
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/mercimek-corbasi-yemekcom.jpg";
    let finalUrl = getProxiedUrl(sourceUrl);
    updatedCount++;
    return `name: "${name}",\n    image_url:\n      "${finalUrl}",\n    category: "${category}"`;
  },
);

fs.writeFileSync(path, newContent);
console.log(
  `SUCCESS: Applied 40+ Proxied/Unsplash images for ${updatedCount} items.`,
);
