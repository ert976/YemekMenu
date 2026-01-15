import { Food, User } from '../types';

// Test utility fonksiyonları
export const createMockUser = (overrides: Partial<User> = {}): User => ({
  id: 1,
  username: 'testuser',
  email: 'test@example.com',
  created_at: new Date().toISOString(),
  ...overrides
});

export const createMockFood = (overrides: Partial<Food> = {}): Food => ({
  id: Math.floor(Math.random() * 1000),
  name: 'Test Yemeği',
  image_url: 'https://example.com/image.jpg',
  category: 'Çorbalar',
  is_vegetarian: 1,
  is_vegan: 1,
  is_halal: 1,
  ...overrides
});

export const createMockUserRating = (overrides: Partial<any> = {}): any => ({
  id: Math.floor(Math.random() * 1000),
  user_id: 1,
  food_id: Math.floor(Math.random() * 1000),
  rating: 5,
  created_at: new Date().toISOString(),
  ...overrides
});

// Mock verileri
const mockUsers: User[] = [
  createMockUser({ id: 1, username: 'demokullanici', email: 'demo@yemekmenu.com' }),
  createMockUser({ id: 2, username: 'testuser', email: 'test@example.com' })
];

const mockFoods: Food[] = [
  createMockFood({ id: 1, name: 'Mercimek Çorbası', category: 'Çorbalar' }),
  createMockFood({ id: 2, name: 'Menemen', category: 'Kahvaltı' }),
  createMockFood({ id: 3, name: 'Kuru Fasulye', category: 'Baklagiller' }),
  createMockFood({ id: 4, name: 'Et Döner', category: 'Döner & Kebap', is_vegetarian: 0 })
];

const mockUserRatings: any[] = [
  createMockUserRating({ user_id: 1, food_id: 1, rating: 5 }),
  createMockUserRating({ user_id: 1, food_id: 2, rating: 4 }),
  createMockUserRating({ user_id: 1, food_id: 3, rating: 3 }),
  createMockUserRating({ user_id: 1, food_id: 4, rating: 5 })
];

// Database mock'ları
const mockDatabase = {
  execAsync: jest.fn(),
  runAsync: jest.fn().mockResolvedValue({ lastInsertRowId: Date.now() }),
  getFirstAsync: jest.fn(),
  getAllAsync: jest.fn()
};

// Test setup ve teardown
export const setupTestDatabase = () => {
  // Mock veritabanı ayarla
  jest.mock('../database', () => ({
    initDatabase: jest.fn(),
    getFoodsByIds: jest.fn(),
    getUserRatings: jest.fn(),
    saveMealPlan: jest.fn(),
    addUser: jest.fn(),
    getUser: jest.fn()
  }));
};

export const teardownTestDatabase = () => {
  jest.clearAllMocks();
};

// Test helper fonksiyonları
export const expectError = (fn: () => any, expectedError: string) => {
  expect(fn).rejects.toThrow(expectedError);
};

export const expectSuccess = async (fn: () => Promise<any>) => {
  const result = await fn();
  expect(result).toBeDefined();
  return result;
};
