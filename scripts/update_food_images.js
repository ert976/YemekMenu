const fs = require("fs");
const path = "c:/Users/eargu/GitHub/YemekMenu/database/foods.ts";
let content = fs.readFileSync(path, "utf8");

function getProxiedUrl(url) {
  if (!url || url.includes("unsplash.com")) return url;
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;
}

const mapping = {
  Bonfile:
    "https://media.istockphoto.com/id/1213561258/photo/steak-from-turkish-cuisine.jpg?s=612x612&w=0&k=20&c=eFMbhxca6ANWyAoL6IJ_AxaTeDB3-uECW0rGh50FDt8=",
  Ekler:
    "https://hypeandhyper.com/content/images/size/w600/2022/10/grafi-jeremiah-v3SUdMi3u9s-unsplash-2.jpg",
  Cheesecake:
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/Saffron_Cheesecake_%28Unsplash%29.jpg",
  "Muzlu Pasta": "https://i.ytimg.com/vi/jAqTEKmkJJI/maxresdefault.jpg",
  "Cevizli Kek":
    "https://www.neomutfak.com/wp-content/uploads/2015/12/PSX_20151229_213327.jpg",
  Köfte:
    "https://media.gettyimages.com/id/952966478/photo/turkish-kofte-with-french-fries-on-a-plate.jpg?s=612x612&w=gi&k=20&c=7XO-TnOecofukR1fcucNqgtqz_wVzoMGsK31QFOERZc=",
  "Mozaik Pasta":
    "https://www.giverecipe.com/wp-content/uploads/2014/03/Mozaik-Pasta-1.jpg",
  Tiramisu:
    "https://image.idntimes.com/post/20240711/resep-tiramisu-tanpa-mascarpone-yang-tetap-creamy-dan-lezat-01-3kz8p-hl5rv4.jpg",
  Profiterol:
    "https://media.gettyimages.com/id/866537884/photo/chocolate-profiterol.jpg?s=612x612&w=gi&k=20&c=KjFdM6I3mvsKPDzUCwfX-3-QueE7sTKEs219SSqKIbU=",
  // Discovered / Verified batch entries
  "Urfa Kebap":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adana_kebabı.jpg/800px-Adana_kebabı.jpg",
  İskender:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/%C4%B0skender_kebap.JPG/800px-%C4%B0skender_kebap.JPG",
  "Beyti Kebap":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Beyti_Kebap.jpg/800px-Beyti_Kebap.jpg",
  Tantuni:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Tantuni2.jpg/800px-Tantuni2.jpg",
  "Mercimek Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mercimek_Corba.jpg/800px-Mercimek_Corba.jpg",
  "Ezogelin Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ezogelin_corba.jpg/800px-Ezogelin_corba.jpg",
  "Yayla Çorbası":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Yayla_ğorbası.jpg/800px-Yayla_ğorbası.jpg",
};

const categoryPool = {
  Çorbalar:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mercimek_Corba.jpg/800px-Mercimek_Corba.jpg",
  Salatalar:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Turkish_salad.jpg/800px-Turkish_salad.jpg",
  "Sebze Yemekleri":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Taze_fasulye.jpg/800px-Taze_fasulye.jpg",
  Baklagiller:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kuru_fasulye.jpg/800px-Kuru_fasulye.jpg",
  "Döner & Kebap":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Doner_kebab%2C_Istanbul%2C_Turkey.JPG/800px-Doner_kebab%2C_Istanbul%2C_Turkey.JPG",
  Tatlılar:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Baklava%2C_Turkish_cuisine.jpg/800px-Baklava%2C_Turkish_cuisine.jpg",
  Kahvaltı:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Simit-2x.JPG/800px-Simit-2x.JPG",
  "Hamur İşleri":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mant%C4%B1.jpg/800px-Mant%C4%B1.jpg",
  Meyveler:
    "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80",
  İçecekler:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ayran.jpg/800px-Ayran.jpg",
  "Izgara & Mangal":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Turkish_meatballs.jpg/800px-Turkish_meatballs.jpg",
  "Sokak Lezzetleri":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kumpir.jpg/800px-Kumpir.jpg",
  Kekler:
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  Pastalar:
    "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=800&q=80",
  Pilavlar:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pilav%2C_nohut_yahni%2C_chicken%2C_potatoes_etc.jpg/800px-Pilav%2C_nohut_yahni%2C_chicken%2C_potatoes_etc.jpg",
  Makarna:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spaghetti_napolitana.jpg/800px-Spaghetti_napolitana.jpg",
};

// SAFETY FIRST: We will update the image_url line by line without removing any other food data.
// We look for patterns like:
// {
//   "name": "...",
//   "image_url": "...",
//   "category": "..."
// }

let updatedCount = 0;
const blocks = content.split("  {");
const header = blocks[0];
const foodBlocks = blocks.slice(1);

const newFoodBlocks = foodBlocks.map((block) => {
  const nameMatch = block.match(/"name":\s*"([^"]+)"/);
  const categoryMatch = block.match(/"category":\s*"([^"]+)"/);

  if (nameMatch && categoryMatch) {
    const name = nameMatch[1];
    const category = categoryMatch[1];
    const sourceUrl =
      mapping[name] ||
      categoryPool[category] ||
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd";
    const finalUrl = getProxiedUrl(sourceUrl);

    // Replace only the image_url line
    updatedCount++;
    return block.replace(
      /"image_url":\s*"[^"]+"/,
      `"image_url": "${finalUrl}"`,
    );
  }
  return block;
});

const finalContent = header + "  {" + newFoodBlocks.join("  {");
fs.writeFileSync(path, finalContent);

console.log(
  `SUCCESS: Safely updated ${updatedCount} food image URLs without deleting any records.`,
);
