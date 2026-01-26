const fs = require("fs");
const path = "c:/Users/eargu/GitHub/YemekMenu/database/foods.ts";

let content = fs.readFileSync(path, "utf8");

// Advanced name repairs based on observed errors
const repairs = {
  Yoçurt: "Yoğurt",
  Düçün: "Düğün",
  Yemeçi: "Yemeği",
  Kuçbaşlı: "Kuşbaşılı",
  Salğalı: "Salçalı",
  Poşaça: "Poğaça",
  Pağanga: "Paçanga",
  Gavurdaşı: "Gavurdağı",
  Yoşurt: "Yoğurt",
  Dügün: "Düğün",
  "Cis Köfte": "Çiğ Köfte",
  Ciğ: "Çiğ",
  Sütlağ: "Sütlaç",
  Güllağ: "Güllaç",
  Cağ: "Cağ", // Ensure Cağ is correct
  Balkabaşı: "Balkabağı",
  Kaşıt: "Kağıt",
  "Sigara Böreşi": "Sigara Böreği",
};

let fixedContent = content;
for (const [broken, fixed] of Object.entries(repairs)) {
  fixedContent = fixedContent.split(broken).join(fixed);
}

// Global generic repairs for any leftover patterns
fixedContent = fixedContent.replace(/ğorbası/g, "çorbası");
fixedContent = fixedContent.replace(/ğorba/g, "çorba");
fixedContent = fixedContent.replace(/┼Ş/g, "Ş");
fixedContent = fixedContent.replace(/┼ş/g, "ş");
fixedContent = fixedContent.replace(/─▒/g, "ı");
fixedContent = fixedContent.replace(/─░/g, "İ");
fixedContent = fixedContent.replace(/├ç/g, "Ç");
fixedContent = fixedContent.replace(/├Â/g, "ö");
fixedContent = fixedContent.replace(/├╝/g, "ü");
fixedContent = fixedContent.replace(/├ğ/g, "ğ");

fs.writeFileSync(path, fixedContent, "utf8");
console.log("SUCCESS: Repaired names in database/foods.ts");
