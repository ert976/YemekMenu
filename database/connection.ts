import { Database } from "../types";
import { generateEntityId } from "../utils/id-generator";
import { Platform } from "react-native";

// Bellek içi depolama (Global state)
let memoryStorage: Record<string, any[]> = {
  users: [],
  foods: [],
  user_ratings: [],
  meal_plans: [],
};

const STORAGE_KEY = "YEMEKMENU_DB_MOCK";

// Basit bir SQL-benzeri arayüz sağlamak için mock veritabanı
const mockDb: Database = {
  execAsync: async (sql: string) => {
    console.log("Web/Mock: SQL Exec:", sql);
    return [];
  },
  runAsync: async (sql: string, params: unknown[] = []) => {
    console.log("Web/Mock: SQL Run:", sql, params);
    
    // Basit tablo bazlı simülasyon
    if (sql.includes("INSERT INTO users")) {
      memoryStorage.users.push(params);
      saveToLocalStorage();
    } else if (sql.includes("INSERT INTO meal_plans")) {
      memoryStorage.meal_plans.push(params);
      saveToLocalStorage();
    }

    return { lastInsertRowId: generateEntityId() };
  },
  getFirstAsync: async (sql: string, params: unknown[] = []) => {
    console.log("Web/Mock: SQL GetFirst:", sql, params);
    return null;
  },
  getAllAsync: async (sql: string, params: unknown[] = []) => {
    console.log("Web/Mock: SQL GetAll:", sql, params);
    return [];
  },
};

const saveToLocalStorage = () => {
  if (Platform.OS === "web") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryStorage));
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  }
};

const loadFromLocalStorage = () => {
  if (Platform.OS === "web") {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        memoryStorage = JSON.parse(saved);
        console.log("Loaded database from localStorage");
      }
    } catch (e) {
      console.error("Failed to load from localStorage", e);
    }
  }
};

let db: Database = mockDb;

export const getDatabase = (): Database => db;

export const initDatabase = async (): Promise<void> => {
  loadFromLocalStorage();
  console.log("Depolama katmanı başlatıldı (Persistent Web mod)");
};

export const createTables = async (): Promise<void> => {
  console.log("Tablo şemaları doğrulandı");
};
