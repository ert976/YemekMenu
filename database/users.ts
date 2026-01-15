import { User } from '../types';

// Kullanıcı işlemleri
export const getUser = async (username: string, password: string): Promise<User | null> => {
  try {
    // Mock kullanıcı kontrolü
    if (username === 'testuser' && password === 'password123') {
      return {
        id: 1,
        username: 'testuser',
        email: 'test@example.com'
      };
    }
    return null;
  } catch (error) {
    console.error('Kullanıcı getirme hatası:', error);
    return null;
  }
};

export const addUser = async (username: string, email: string, password: string): Promise<boolean> => {
  try {
    // Mock kullanıcı ekleme
    console.log(`Kullanıcı eklendi: ${username}, ${email}`);
    return true;
  } catch (error) {
    console.error('Kullanıcı ekleme hatası:', error);
    return false;
  }
};

export const updateUser = async (userId: number, updates: Partial<User>): Promise<boolean> => {
  try {
    console.log(`Kullanıcı güncellendi: ${userId}`, updates);
    return true;
  } catch (error) {
    console.error('Kullanıcı güncelleme hatası:', error);
    return false;
  }
};

export const deleteUser = async (userId: number): Promise<boolean> => {
  try {
    console.log(`Kullanıcı silindi: ${userId}`);
    return true;
  } catch (error) {
    console.error('Kullanıcı silme hatası:', error);
    return false;
  }
};
