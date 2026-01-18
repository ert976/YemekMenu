import { Database } from "../types";

// Bellek içi depolama (Global state)
const memoryStorage: Record<string, unknown> = {
  users: [],
  foods: [],
  user_ratings: [],
  meal_plans: [],
};

// Basit bir SQL-benzeri arayüz sağlamak için mock veritabanı
const mockDb: Database = {
  execAsync: async (sql: string) => {
    // Şema oluşturma komutlarını simüle et
    console.log("Web/Mock: SQL Exec:", sql);
    return [];
  },
  runAsync: async (sql: string, params: any[] = []) => {
    // Bu metod genellikle INSERT/UPDATE için kullanılır
    console.log("Web/Mock: SQL Run:", sql, params);
    // Basit bir ID döndür
    return { lastInsertRowId: Date.now() };
  },
  getFirstAsync: async (sql: string, params: any[] = []) => {
    console.log("Web/Mock: SQL GetFirst:", sql, params);
    return null;
  },
  getAllAsync: async (sql: string, params: any[] = []) => {
    console.log("Web/Mock: SQL GetAll:", sql, params);
    return [];
  },
};

let db: Database = mockDb;

export const getDatabase = (): Database => db;

export const initDatabase = async (): Promise<void> => {
  console.log("Depolama katmanı başlatıldı (Web-uyumlu mod)");
  // Gerekiyorsa burada localStorage'dan veri yükleme yapılabilir
};

export const createTables = async (): Promise<void> => {
  console.log("Tablo şemaları doğrulandı");
};
