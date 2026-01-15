import * as SQLite from 'expo-sqlite';
import { Platform } from 'react-native';
import { Database } from '../types';

let db: Database;

// Veritabanı bağlantısı
export const getDatabase = (): Database => {
  return db;
};

// Veritabanı başlatma fonksiyonu
export const initDatabase = async (): Promise<void> => {
  try {
    if (Platform.OS === 'web') {
      console.log('Web platformu - veritabanı simülasyonu başlatıldı');
      return;
    }
    
    // SQLite veritabanını oluştur
    db = await SQLite.openDatabaseAsync('yemekmenu.db');
    
    // Tabloları oluştur
    await createTables();
    
    console.log('Veritabanı başarıyla başlatıldı');
  } catch (error) {
    console.error('Veritabanı başlatma hatası:', error);
    throw error;
  }
};

// Tabloları oluşturma
export const createTables = async (): Promise<void> => {
  try {
    // Kullanıcılar tablosu
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE,
        password TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Yemekler tablosu
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS foods (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        image_url TEXT NOT NULL,
        category TEXT NOT NULL,
        is_vegetarian INTEGER DEFAULT 0,
        is_vegan INTEGER DEFAULT 0,
        is_halal INTEGER DEFAULT 1
      );
    `);

    // Kullanıcı derecelendirmeleri tablosu
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS user_ratings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        food_id INTEGER NOT NULL,
        rating REAL NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id),
        FOREIGN KEY (food_id) REFERENCES foods (id)
      );
    `);

    // Menü planları tablosu
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS meal_plans (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        plan_data TEXT NOT NULL,
        diet_preference TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id)
      );
    `);

    console.log('Tablolar başarıyla oluşturuldu');
  } catch (error) {
    console.error('Tablo oluşturma hatası:', error);
    throw error;
  }
};
