import { Platform } from 'react-native';
import { Database } from './types';

let db: Database;

// Ortak yemek listesi - Tüm platformlar için kullanılacak
const COMMON_FOODS = [
  // ÇORBALAR (20+)
  { id: 1, name: 'Mercimek Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Mercimek_Corba.jpg/800px-Mercimek_Corba.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 2, name: 'Ezogelin Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ezogelin_corba.jpg/800px-Ezogelin_corba.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 3, name: 'Yayla Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Yayla_corbasi.jpg/800px-Yayla_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 4, name: 'İşkembe Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Iskembe_corbasi.jpg/800px-Iskembe_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 0, is_vegan: 0 },
  { id: 5, name: 'Domates Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Domates_corbasi.jpg/800px-Domates_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 6, name: 'Tarhana Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tarhana_corbasi.jpg/800px-Tarhana_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 7, name: 'Bulgur Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bulgur_corbasi.jpg/800px-Bulgur_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 8, name: 'Yoğurt Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yogurt_corbasi.jpg/800px-Yogurt_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 9, name: 'Mantar Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mantar_corbasi.jpg/800px-Mantar_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 10, name: 'Kelle Paça', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kelle_paca.jpg/800px-Kelle_paca.jpg', category: 'Çorbalar', is_vegetarian: 0, is_vegan: 0 },
  { id: 11, name: 'Tavuk Suyu Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_suyu_corbasi.jpg/800px-Tavuk_suyu_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 12, name: 'Sebzeli Çorba', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sebzeli_corba.jpg/800px-Sebzeli_corba.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 13, name: 'Nohut Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Noahut_corbasi.jpg/800px-Noahut_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 14, name: 'Şehriye Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sehriye_corbasi.jpg/800px-Sehriye_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 15, name: 'Düğün Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Dugun_corbasi.jpg/800px-Dugun_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 16, name: 'Lahana Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lahana_corbasi.jpg/800px-Lahana_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1 },
  { id: 17, name: 'Pırasa Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pirasa_corbasi.jpg/800px-Pirasa_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },

  // BAKLAGİLLER (17 yemek)
  { id: 18, name: 'Kuru Fasulye', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kuru_fasulye.jpg/800px-Kuru_fasulye.jpg', category: 'Baklagiller', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 19, name: 'Barbunya Pilaki', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Barbunya_pilaki.jpg/800px-Barbunya_pilaki.jpg', category: 'Baklagiller', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 20, name: 'Yeşil Mercimek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yesil_mercimek.jpg/800px-Yesil_mercimek.jpg', category: 'Baklagiller', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 21, name: 'Nohut Pilav', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Noahut_pilav.jpg/800px-Noahut_pilav.jpg', category: 'Baklagiller', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 22, name: 'Mercimek Köfte', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mercimek_kofte.jpg/800px-Mercimek_kofte.jpg', category: 'Baklagiller', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 23, name: 'Nohut Salata', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Noahut_salata.jpg/800px-Noahut_salata.jpg', category: 'Baklagiller', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 24, name: 'Fasulye Pilaki', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Fasulye_pilaki.jpg/800px-Fasulye_pilaki.jpg', category: 'Baklagiller', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },

  // SEBZE YEMEKLERİ (19 yemek)
  { id: 25, name: 'Taze Fasulye', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Taze_fasulye.jpg/800px-Taze_fasulye.jpg', category: 'Sebze Yemekleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 26, name: 'Patlıcan Musakka', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Musakka.jpg/800px-Musakka.jpg', category: 'Sebze Yemekleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 27, name: 'Bamya', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bamya_yemeği.jpg/800px-Bamya_yemeği.jpg', category: 'Sebze Yemekleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 28, name: 'Ispanak', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ispanak_yemeği.jpg/800px-Ispanak_yemeği.jpg', category: 'Sebze Yemekleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 29, name: 'Karnabahar', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Karnabahar_yemeği.jpg/800px-Karnabahar_yemeği.jpg', category: 'Sebze Yemekleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 30, name: 'Pırasa Yemeği', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pirasa_yemeği.jpg/800px-Pirasa_yemeği.jpg', category: 'Sebze Yemekleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },

  // HAMUR İŞLERİ (20 yemek)
  { id: 31, name: 'Manti', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Turkish_manti.jpg/800px-Turkish_manti.jpg', category: 'Hamur İşleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 32, name: 'Pide', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Pide.jpg/800px-Pide.jpg', category: 'Hamur İşleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 33, name: 'Lahmacun', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lahmacun.jpg/800px-Lahmacun.jpg', category: 'Hamur İşleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 34, name: 'Börek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Borek.jpg/800px-Borek.jpg', category: 'Hamur İşleri', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 35, name: 'Gözleme', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gozleme.jpg/800px-Gozleme.jpg', category: 'Hamur İşleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 36, name: 'Simit', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Simit.jpg/800px-Simit.jpg', category: 'Hamur İşleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },

  // EKLENECİK YEMEKLER (Geçici, detayları eklenecek)
  { id: 46, name: 'Adana Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Adana_kebab.jpg/800px-Adana_kebab.jpg', category: 'Kebaplar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 47, name: 'Urfa Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Urfa_kebab.jpg/800px-Urfa_kebab.jpg', category: 'Kebaplar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 48, name: 'Beyti Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Beyti_kebab.jpg/800px-Beyti_kebab.jpg', category: 'Kebaplar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 49, name: 'Döner Dürüm', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Doner_durum.jpg/800px-Doner_durum.jpg', category: 'Kebaplar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 50, name: 'Tavuk Döner', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Tavuk_doner.jpg/800px-Tavuk_doner.jpg', category: 'Kebaplar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 51, name: 'Köfte', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Turkish_kofte.jpg/800px-Turkish_kofte.jpg', category: 'Kebaplar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 52, name: 'İskender', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Iskender.jpg/800px-Iskender.jpg', category: 'Kebaplar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 53, name: 'Şiş Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sis_kebab.jpg/800px-Sis_kebab.jpg', category: 'Kebaplar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 54, name: 'Tavuk Pilav', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Tavuk_pilav.jpg/800px-Tavuk_pilav.jpg', category: 'Kebaplar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 55, name: 'Kumpir', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kumpir.jpg/800px-Kumpir.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 56, name: 'Midye Dolma', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Midye_dolma.jpg/800px-Midye_dolma.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 57, name: 'Kokoreç', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kokorec.jpg/800px-Kokorec.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 58, name: 'Ciğer Sote', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ciger_sote.jpg/800px-Ciger_sote.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 59, name: 'Paça Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Paca_corbasi.jpg/800px-Paca_corbasi.jpg', category: 'Çorbalar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 60, name: 'Ayran', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ayran.jpg/800px-Ayran.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 61, name: 'Şalgam', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Salgam.jpg/800px-Salgam.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 62, name: 'Kefir', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kefir.jpg/800px-Kefir.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 63, name: 'Turşu Suyu', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tursu_suyu.jpg/800px-Tursu_suyu.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 64, name: 'Çorba', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Corba.jpg/800px-Corba.jpg', category: 'Çorbalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 65, name: 'Et Sote', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Et_sote.jpg/800px-Et_sote.jpg', category: 'Sebze Yemekleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 66, name: 'Tavuk Şiş', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tavuk_sis.jpg/800px-Tavuk_sis.jpg', category: 'Izgara', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 67, name: 'Bonfile', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bonfile.jpg/800px-Bonfile.jpg', category: 'Izgara', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 68, name: 'Antrikot', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Antrikot.jpg/800px-Antrikot.jpg', category: 'Izgara', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 69, name: 'Pirzola', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pirzola.jpg/800px-Pirzola.jpg', category: 'Izgara', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 70, name: 'Mozaik Pasta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mozaik_pasta.jpg/800px-Mozaik_pasta.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 71, name: 'Tiramisu', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tiramisu.jpg/800px-Tiramisu.jpg', category: 'Pastalar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 72, name: 'Profiterol', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Profiterol.jpg/800px-Profiterol.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 73, name: 'Ekler', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ekler.jpg/800px-Ekler.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 74, name: 'Cheesecake', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cheesecake.jpg/800px-Cheesecake.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 75, name: 'Muzlu Pasta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Muzlu_pasta.jpg/800px-Muzlu_pasta.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 76, name: 'Cevizli Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cevizli_kek.jpg/800px-Cevizli_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 77, name: 'Fıstıklı Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Fistikli_kek.jpg/800px-Fistikli_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 78, name: 'Portakallı Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Portakalli_kek.jpg/800px-Portakalli_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 79, name: 'Elmalı Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Elmali_kek.jpg/800px-Elmali_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 80, name: 'Muzlu Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Muzlu_kek.jpg/800px-Muzlu_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 81, name: 'Çikolatalı Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cikolatali_kek.jpg/800px-Cikolatali_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 82, name: 'Kıvırcık Pasta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kivircik_pasta.jpg/800px-Kivircik_pasta.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 83, name: 'Trileçe', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Trilece.jpg/800px-Trilece.jpg', category: 'Pastalar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 84, name: 'Paris Brest', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Paris_brest.jpg/800px-Paris_brest.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 85, name: 'Çikolatalı Pasta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cikolatali_pasta.jpg/800px-Cikolatali_pasta.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 86, name: 'Yulaflı Pasta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Yulafli_pasta.jpg/800px-Yulafli_pasta.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 87, name: 'Fransız Usulü Pasta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Fransiz_pasta.jpg/800px-Fransiz_pasta.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 88, name: 'Sünger Pasta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Sunger_pasta.jpg/800px-Sunger_pasta.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 89, name: 'Kremalı Pasta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kremali_pasta.jpg/800px-Kremali_pasta.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 90, name: 'Meyveli Pasta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Meyveli_pasta.jpg/800px-Meyveli_pasta.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 91, name: 'Brownie', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Brownie.jpg/800px-Brownie.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 92, name: 'Blondie', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Blondie.jpg/800px-Blondie.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 93, name: 'Macaron', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Macaron.jpg/800px-Macaron.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 94, name: 'Lava Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Lava_kek.jpg/800px-Lava_kek.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 95, name: 'Fondan Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Fondan_kek.jpg/800px-Fondan_kek.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 96, name: 'Pandispanya', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pandispanya.jpg/800px-Pandispanya.jpg', category: 'Pastalar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 97, name: 'Yulaflı Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Yulafli_kek.jpg/800px-Yulafli_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 98, name: 'Havuçlu Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Havuclu_kek.jpg/800px-Havuclu_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 99, name: 'Limonlu Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Limonlu_kek.jpg/800px-Limonlu_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 100, name: 'Kahveli Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kahveli_kek.jpg/800px-Kahveli_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 101, name: 'Bademli Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bademli_kek.jpg/800px-Bademli_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 102, name: 'Vişneli Kek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Visneli_kek.jpg/800px-Visneli_kek.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 103, name: 'Cupcake', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cupcake.jpg/800px-Cupcake.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 104, name: 'Muffin', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Muffin.jpg/800px-Muffin.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 105, name: 'Madlen', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Madlen.jpg/800px-Madlen.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 106, name: 'Madeleine', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Madeleine.jpg/800px-Madeleine.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 107, name: 'Whoopie Pie', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Whoopie_pie.jpg/800px-Whoopie_pie.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 108, name: 'Kek Roll', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kek_roll.jpg/800px-Kek_roll.jpg', category: 'Kekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },

  // TATLILAR (10 yemek)
  { id: 37, name: 'Sütlaç', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sutlac_01.jpg/800px-Sutlac_01.jpg', category: 'Sütlü Tatlılar', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 38, name: 'Baklava', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Baklava_02.jpg/800px-Baklava_02.jpg', category: 'Şerbetli Tatlılar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 39, name: 'Künefe', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kunefe.jpg/800px-Kunefe.jpg', category: 'Şerbetli Tatlılar', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 40, name: 'Tavuk Göğsü Tatlısı', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tavuk_gogsu.jpg/800px-Tavuk_gogsu.jpg', category: 'Sütlü Tatlılar', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },

  // KAHVALTI (38 yemek)
  { id: 41, name: 'Menemen', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Menemen_turkish_food.jpg/800px-Menemen_turkish_food.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 42, name: 'Sahanda Yumurta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sahanda_yumurta.jpg/800px-Sahanda_yumurta.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 43, name: 'Omlet', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Omlet.jpg/800px-Omlet.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 44, name: 'Tost', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tost.jpg/800px-Tost.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 45, name: 'Poğaça', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pogaca.jpg/800px-Pogaca.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 189, name: 'Sucuklu Yumurta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sucuklu_yumurta.jpg/800px-Sucuklu_yumurta.jpg', category: 'Kahvaltı', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 190, name: 'Pastırmalı Yumurta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pastirmali_yumurta.jpg/800px-Pastirmali_yumurta.jpg', category: 'Kahvaltı', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 191, name: 'Mücver', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mucver.jpg/800px-Mucver.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 192, name: 'Börek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Borek.jpg/800px-Borek.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 193, name: 'Simit', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Simit.jpg/800px-Simit.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 194, name: 'Açık Büfe', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Acik_bufe.jpg/800px-Acik_bufe.jpg', category: 'Kahvaltı', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 195, name: 'Peynir Tabak', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Peynir_tabak.jpg/800px-Peynir_tabak.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 196, name: 'Zeytin', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Zeytin.jpg/800px-Zeytin.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 197, name: 'Bal', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bal.jpg/800px-Bal.jpg', category: 'Kahvaltı', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 198, name: 'Kaymak', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kaymak.jpg/800px-Kaymak.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 215, name: 'Yumurta Salatası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yumurta_salatasi.jpg/800px-Yumurta_salatasi.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 216, name: 'Çoban Salatası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Coban_salatasi.jpg/800px-Coban_salatasi.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 217, name: 'Domatesli Börek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Domatesli_borek.jpg/800px-Domatesli_borek.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 218, name: 'Ispanaklı Börek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ispanakli_borek.jpg/800px-Ispanakli_borek.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 219, name: 'Patatesli Börek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patatesli_borek.jpg/800px-Patatesli_borek.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 220, name: 'Kıymalı Pide', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kiyimali_pide.jpg/800px-Kiyimali_pide.jpg', category: 'Kahvaltı', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 221, name: 'Peynirli Pide', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Peynirli_pide.jpg/800px-Peynirli_pide.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 222, name: 'Kuşbaşlı Pide', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kusbasi_pide.jpg/800px-Kusbasi_pide.jpg', category: 'Kahvaltı', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 223, name: 'Yumurtalı Ekmek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yumurtali_ekmek.jpg/800px-Yumurtali_ekmek.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 224, name: 'Sosisli Börek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sosisli_borek.jpg/800px-Sosisli_borek.jpg', category: 'Kahvaltı', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },

  // EKLENEN KAHVALTI SEÇENEKLERİ (ID 225-238)
  { id: 225, name: 'Haşlanmış Yumurta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hashlanmis_yumurta.jpg/800px-Hashlanmis_yumurta.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 226, name: 'Menemen', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Menemen_turkish_food.jpg/800px-Menemen_turkish_food.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 227, name: 'Sahanda Yumurta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sahanda_yumurta.jpg/800px-Sahanda_yumurta.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 228, name: 'Omlet', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Omlet.jpg/800px-Omlet.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 229, name: 'Peynirli Omlet', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Peynirli_omlet.jpg/800px-Peynirli_omlet.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 230, name: 'Sebzeli Omlet', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sebzeli_omlet.jpg/800px-Sebzeli_omlet.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 231, name: 'Mantı', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Manti.jpg/800px-Manti.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 232, name: 'Sütlü Mısır', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sutlu_misir.jpg/800px-Sutlu_misir.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 233, name: 'Tost', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tost.jpg/800px-Tost.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 234, name: 'Kaşarlı Tost', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kasarli_tost.jpg/800px-Kasarli_tost.jpg', category: 'Kahvaltı', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 235, name: 'Karışık Tost', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Karisik_tost.jpg/800px-Karisik_tost.jpg', category: 'Kahvaltı', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 236, name: 'Simit', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Simit.jpg/800px-Simit.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 237, name: 'Poğaça', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pogaca.jpg/800px-Pogaca.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 238, name: 'Açma', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Acma.jpg/800px-Acma.jpg', category: 'Kahvaltı', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },

  // SOKAK LEZZETLERİ (30 yemek)
  { id: 94, name: 'Kumpir', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kumpir.jpg/800px-Kumpir.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 95, name: 'Pilav Ustası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pilav_ustasi.jpg/800px-Pilav_ustasi.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 96, name: 'Döner Dürüm', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Doner_durum.jpg/800px-Doner_durum.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 97, name: 'İskender Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Iskender.jpg/800px-Iskender.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 98, name: 'Adana Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Adana_kebap.jpg/800px-Adana_kebap.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 99, name: 'Urfa Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Urfa_kebap.jpg/800px-Urfa_kebap.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 100, name: 'Beyti Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Beyti_kebap.jpg/800px-Beyti_kebap.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 101, name: 'Şiş Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sis_kebap.jpg/800px-Sis_kebap.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 102, name: 'Çiğ Köfte', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cig_kofte.jpg/800px-Cig_kofte.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 103, name: 'Tavuk Döner', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_doner.jpg/800px-Tavuk_doner.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 104, name: 'Et Döner', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Et_doner.jpg/800px-Et_doner.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 105, name: 'Kokoreç', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kokorec.jpg/800px-Kokorec.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 106, name: 'Midye Dolma', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Midye_dolma.jpg/800px-Midye_dolma.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 107, name: 'Tavuk Pilav', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_pilav.jpg/800px-Tavuk_pilav.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 108, name: 'Ciğer Sote', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ciger_sote.jpg/800px-Ciger_sote.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 109, name: 'Paça Çorbası', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Paca_corbasi.jpg/800px-Paca_corbasi.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 110, name: 'Köfte Dürüm', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kofte_durum.jpg/800px-Kofte_durum.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 111, name: 'Hamburger', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hamburger.jpg/800px-Hamburger.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 112, name: 'Karışık Tost', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Karisik_tost.jpg/800px-Karisik_tost.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 113, name: 'Peynirli Tost', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Peynirli_tost.jpg/800px-Peynirli_tost.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 114, name: 'Sucuklu Tost', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sucuklu_tost.jpg/800px-Sucuklu_tost.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 115, name: 'Kıymalı Tost', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kiyamali_tost.jpg/800px-Kiyamali_tost.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 116, name: 'Tantuni', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tantuni.jpg/800px-Tantuni.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 117, name: 'Ciger Sandviç', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ciger_sandvic.jpg/800px-Ciger_sandvic.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 118, name: 'Balık Ekmek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Balik_ekmek.jpg/800px-Balik_ekmek.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 119, name: 'Sahanda Yumurta', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sahanda_yumurta.jpg/800px-Sahanda_yumurta.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 120, name: 'Menemen', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Menemen.jpg/800px-Menemen.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 121, name: 'Çiğ Biftek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cig_biftek.jpg/800px-Cig_biftek.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 122, name: 'Kumpir', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kumpir.jpg/800px-Kumpir.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 123, name: 'Mısır', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Misir.jpg/800px-Misir.jpg', category: 'Sokak Lezzetleri', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },

  // IZGARA & MANGAL (20 yemek)
  { id: 124, name: 'Çiğ Köfte', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cig_kofte_izgara.jpg/800px-Cig_kofte_izgara.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 125, name: 'Kaşarlı Köfte', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kasarli_kofte.jpg/800px-Kasarli_kofte.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 126, name: 'Sulu Köfte', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sulu_kofte.jpg/800px-Sulu_kofte.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 127, name: 'Tavuk Şiş', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_sis.jpg/800px-Tavuk_sis.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 128, name: 'Tavuk Kanat', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_kanat.jpg/800px-Tavuk_kanat.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 129, name: 'Tavuk Bonfile', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_bonfile.jpg/800px-Tavuk_bonfile.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 130, name: 'Bonfile Şiş', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bonfile_sis.jpg/800px-Bonfile_sis.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 131, name: 'Antrikot', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Antrikot.jpg/800px-Antrikot.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 132, name: 'Kuşbaşı', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kusbasi.jpg/800px-Kusbasi.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 133, name: 'Patlıcan Kebabı', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patlican_kebabi.jpg/800px-Patlican_kebabi.jpg', category: 'Izgara & Mangal', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 134, name: 'Kaburga', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kaburga.jpg/800px-Kaburga.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 135, name: 'Sucuk Izgara', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sucuk_izgara.jpg/800px-Sucuk_izgara.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 136, name: 'Pastırma Izgara', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pastirma_izgara.jpg/800px-Pastirma_izgara.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 137, name: 'Biftek', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Biftek.jpg/800px-Biftek.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 138, name: 'Pirzola', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pirzola.jpg/800px-Pirzola.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 139, name: 'Köfte Izgara', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kofte_izgara.jpg/800px-Kofte_izgara.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 140, name: 'Tavuk Pirzola', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_pirzola.jpg/800px-Tavuk_pirzola.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 141, name: 'Karışık Izgara', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Karisik_izgara.jpg/800px-Karisik_izgara.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 142, name: 'Balık Izgara', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Balik_izgara.jpg/800px-Balik_izgara.jpg', category: 'Izgara & Mangal', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 143, name: 'Sebzeli Izgara', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sebzeli_izgara.jpg/800px-Sebzeli_izgara.jpg', category: 'Izgara & Mangal', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },

  // İÇECEKLER (20 yemek)
  { id: 144, name: 'Ayran', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ayran.jpg/800px-Ayran.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 145, name: 'Şalgam', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Salgam.jpg/800px-Salgam.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 146, name: 'Kefir', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kefir.jpg/800px-Kefir.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 147, name: 'Turşu Suyu', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tursu_suyu.jpg/800px-Tursu_suyu.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 148, name: 'Meyve Suyu', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Meyve_suyu.jpg/800px-Meyve_suyu.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 149, name: 'Portakal Suyu', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Portakal_suyu.jpg/800px-Portakal_suyu.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 150, name: 'Elma Suyu', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Elma_suyu.jpg/800px-Elma_suyu.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 151, name: 'Üzüm Suyu', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Uzum_suyu.jpg/800px-Uzum_suyu.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 152, name: 'Smoothie', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Smoothie.jpg/800px-Smoothie.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 153, name: 'Muzlu Smoothie', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Muzlu_smoothie.jpg/800px-Muzlu_smoothie.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 154, name: 'Çilekli Smoothie', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cilekli_smoothie.jpg/800px-Cilekli_smoothie.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 155, name: 'Türk Kahvesi', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Turk_kahvesi.jpg/800px-Turk_kahvesi.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 156, name: 'Sütlü Kahve', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sutlu_kahve.jpg/800px-Sutlu_kahve.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 0, is_halal: 1 },
  { id: 157, name: 'Filtre Kahve', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Filtre_kahve.jpg/800px-Filtre_kahve.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 158, name: 'Espresso', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Espresso.jpg/800px-Espresso.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 159, name: 'Çay', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cay.jpg/800px-Cay.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 160, name: 'Yeşil Çay', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yesil_cay.jpg/800px-Yesil_cay.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 161, name: 'Adaçayı Çayı', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Adacayi_cayi.jpg/800px-Adacayi_cayi.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 162, name: 'Nane Limon', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nane_limon.jpg/800px-Nane_limon.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 163, name: 'Limonata', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Limonata.jpg/800px-Limonata.jpg', category: 'İçecekler', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },

  // DÖNER & KEBAP (25 yemek)
  { id: 164, name: 'Et Döner', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Et_doner_kebap.jpg/800px-Et_doner_kebap.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 165, name: 'Tavuk Döner', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_doner_kebap.jpg/800px-Tavuk_doner_kebap.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 166, name: 'Beyti', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Beyti_kebap2.jpg/800px-Beyti_kebap2.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 167, name: 'İskender', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Iskender2.jpg/800px-Iskender2.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 168, name: 'Adana Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Adana_kebap2.jpg/800px-Adana_kebap2.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 169, name: 'Urfa Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Urfa_kebap2.jpg/800px-Urfa_kebap2.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 170, name: 'Ali Nazik', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ali_nazik.jpg/800px-Ali_nazik.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 171, name: 'Şiş Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sis_kebap2.jpg/800px-Sis_kebap2.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 172, name: 'Çiğ Köfte', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cig_kofte2.jpg/800px-Cig_kofte2.jpg', category: 'Döner & Kebap', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 173, name: 'İçli Köfte', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Icli_kofte.jpg/800px-Icli_kofte.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 174, name: 'Hünkar Beğendi', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hunkar_begendi.jpg/800px-Hunkar_begendi.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 175, name: 'Patates Köftesi', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patates_koftesi.jpg/800px-Patates_koftesi.jpg', category: 'Döner & Kebap', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 176, name: 'Mercimek Köftesi', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mercimek_koftesi2.jpg/800px-Mercimek_koftesi2.jpg', category: 'Döner & Kebap', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 177, name: 'Kaburga Sıyırma', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kaburga_siyirma.jpg/800px-Kaburga_siyirma.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 178, name: 'Çoban Kavurma', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Coban_kavurma.jpg/800px-Coban_kavurma.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 179, name: 'Çökertme Kebabı', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cokertme_kebabi.jpg/800px-Cokertme_kebabi.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 180, name: 'Kuzu Kebabı', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kuzu_kebabi.jpg/800px-Kuzu_kebabi.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 181, name: 'Testi Kebabı', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Testi_kebabi.jpg/800px-Testi_kebabi.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 182, name: 'Cağ Kebabı', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cag_kebabi.jpg/800px-Cag_kebabi.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 183, name: 'Kavurma', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kavurma.jpg/800px-Kavurma.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 184, name: 'Döner Salata', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Doner_salata.jpg/800px-Doner_salata.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 185, name: 'Köfte Tabak', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Kofte_tabak.jpg/800px-Kofte_tabak.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 186, name: 'Tavuk Şiş Kebap', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tavuk_sis_kebap.jpg/800px-Tavuk_sis_kebap.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 },
  { id: 187, name: 'Patlıcan Kebabı', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Patlican_kebabi2.jpg/800px-Patlican_kebabi2.jpg', category: 'Döner & Kebap', is_vegetarian: 1, is_vegan: 1, is_halal: 1 },
  { id: 188, name: 'Kömür Kebabı', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Komur_kebabi.jpg/800px-Komur_kebabi.jpg', category: 'Döner & Kebap', is_vegetarian: 0, is_vegan: 0, is_halal: 1 }
];

// Platform'a göre veritabanı başlat
if (Platform.OS === 'web') {
  // Web platformu için localStorage tabanlı basit veritabanı
  db = {
    execAsync: async (sql: string) => {
      console.log('Web platformu - SQL simülasyonu:', sql);
      return [];
    },
    runAsync: async (sql: string, params?: any[]) => {
      console.log('Web platformu - SQL simülasyonu:', sql, params);
      return { lastInsertRowId: Date.now() };
    },
    getFirstAsync: async (sql: string, params?: any[]) => {
      console.log('Web platformu - SQL simülasyonu:', sql, params);
      // Demo veri döndür
      if (sql.includes('users') && sql.includes('username') && params && params.length === 2) {
        const [username, password] = params;
        if (username === 'demokullanici' && password === 'demoparola') {
          return { id: 1, username: 'demokullanici', email: 'demo@yemekmenu.com' };
        }
      }
      return null;
    },
    getAllAsync: async (sql: string, params?: any[]) => {
      console.log('Web platformu - SQL simülasyonu:', sql, params);
      // Demo yemekler döndür - Kategorilere ayrılmış
      if (sql.includes('foods')) {
        return COMMON_FOODS;
      }
      return [];
    }
  };
} else {
    // Mobil platformlar için mock veritabanı (geçici çözüm)
    db = {
      execAsync: async (sql: string) => {
        console.log('Mobil platform - SQL simülasyonu:', sql);
        return [];
      },
      runAsync: async (sql: string, params?: any[]) => {
        console.log('Mobil platform - SQL simülasyonu:', sql, params);
        return { lastInsertRowId: Date.now() };
      },
      getFirstAsync: async (sql: string, params?: any[]) => {
        console.log('Mobil platform - SQL simülasyonu:', sql, params);
      if (sql.includes('users') && sql.includes('username') && params && params.length === 2) {
        const [username, password] = params;
        if (username === 'demokullanici' && password === 'demoparola') {
          return { id: 1, username: 'demokullanici', email: 'demo@yemekmenu.com' };
        }
      }
      return null;
    },
    getAllAsync: async (sql: string, params?: any[]) => {
      console.log('Mobil platform - SQL simülasyonu:', sql, params);
      if (sql.includes('foods')) {
        return COMMON_FOODS;
      }
      return [];
    }
  };
}

// Veritabanı başlatma fonksiyonu
export const initDatabase = () => {
  if (Platform.OS === 'web') {
    console.log('Web platformu - veritabanı simülasyonu başlatıldı');
    return;
  }
  
  // Platform kontrolü - bazı işlemler sadece belirli platformlarda çalışmalı
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    // Tabloları oluştur
    createTables();
  }
};

// Batch query fonksiyonu - N+1 sorununu çözmek için
export const getFoodsByIds = async (foodIds: number[]): Promise<any[]> => {
  try {
    if (Platform.OS === 'web') {
      // Web platformu için simülasyon
      return COMMON_FOODS.filter((food: any) => foodIds.includes(food.id));
    }
    
    // Mobil platformlar için mock
    return COMMON_FOODS.filter((food: any) => foodIds.includes(food.id));
  } catch (error) {
    console.error('Yemekleri getirme hatası:', error);
    return [];
  }
};

// Tabloları oluşturma
const createTables = async () => {
  // Kullanıcılar tablosu
  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE,
      password TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  );

  // Yemekler tablosu
  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS foods (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      image_url TEXT,
      category TEXT,
      is_vegetarian BOOLEAN DEFAULT 0,
      is_vegan BOOLEAN DEFAULT 0,
      nutritional_info TEXT
    )`
  );

  // Kullanıcı yemek derecelendirmeleri tablosu
  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS user_ratings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      food_id INTEGER,
      rating INTEGER CHECK(rating >= 1 AND rating <= 5),
      rated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (food_id) REFERENCES foods(id)
    )`
  );

  // Menü planları tablosu
  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS meal_plans (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      plan_data TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      diet_preference TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`
  );
};

// Demo kullanıcı oluşturma
export const createDemoUser = async () => {
  await db.runAsync(
    'INSERT OR IGNORE INTO users (username, email, password) VALUES (?, ?, ?)',
    ['demokullanici', 'demo@yemekmenu.com', 'demoparola']
  );
};

// Demo yemekler ekleme
export const addDemoFoods = async () => {
  for (const food of COMMON_FOODS) {
    await db.runAsync(
      'INSERT OR IGNORE INTO foods (name, image_url, category, is_vegetarian, is_vegan) VALUES (?, ?, ?, ?, ?)',
      [food.name, food.image_url, food.category, food.is_vegetarian, food.is_vegan]
    );
  }
};

// Veritabanı başlatma
export const initializeDatabase = () => {
  initDatabase();
  createDemoUser();
  addDemoFoods();
};

// Kullanıcı işlemleri
export const addUser = async (username: string, email: string, password: string) => {
  const result = await db.runAsync(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, password]
  );
  return result.lastInsertRowId;
};

export const getUser = async (username: string, password: string) => {
  console.log('getUser çağrıldı:', username, password);
  const result = await db.getFirstAsync(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password]
  );
  console.log('getUser sonucu:', result);
  return result;
};

// Yemek işlemleri
export const getAllFoods = async () => {
  const result = await db.getAllAsync('SELECT * FROM foods ORDER BY name');
  return result;
};

export const getFoodById = async (id: number) => {
  const result = await db.getFirstAsync('SELECT * FROM foods WHERE id = ?', [id]);
  return result;
};

// Derecelendirme işlemleri
export const rateFood = async (userId: number, foodId: number, rating: number) => {
  const result = await db.runAsync(
    'INSERT OR REPLACE INTO user_ratings (user_id, food_id, rating) VALUES (?, ?, ?)',
    [userId, foodId, rating]
  );
  return result;
};

export const getUserRatings = async (userId: number) => {
  const result = await db.getAllAsync(
    `SELECT ur.*, f.name, f.image_url
     FROM user_ratings ur
     JOIN foods f ON ur.food_id = f.id
     WHERE ur.user_id = ?`,
    [userId]
  );
  return result;
};

// Menü planlama işlemleri
export const saveMealPlan = async (userId: number, planData: string, dietPreference: string) => {
  const result = await db.runAsync(
    'INSERT INTO meal_plans (user_id, plan_data, diet_preference) VALUES (?, ?, ?)',
    [userId, planData, dietPreference]
  );
  return result.lastInsertRowId;
};

export const getMealPlans = async (userId: number) => {
  const result = await db.getAllAsync(
    'SELECT * FROM meal_plans WHERE user_id = ? ORDER BY created_at DESC',
    [userId]
  );
  return result;
};

// Veri sıfırlama işlemleri
export const resetUserData = async (userId: number) => {
  // Kullanıcı derecelendirmelerini sil
  await db.runAsync('DELETE FROM user_ratings WHERE user_id = ?', [userId]);
  // Menü planlarını sil
  await db.runAsync('DELETE FROM meal_plans WHERE user_id = ?', [userId]);
};

export const resetAllUserData = async () => {
  await db.runAsync('DELETE FROM user_ratings');
  await db.runAsync('DELETE FROM meal_plans');
};