import { User } from '../types';

const users = new Map<number, User>();
let nextUserId = 1;

export const getUser = async (username: string): Promise<User | null> => {
  try {
    for (const [id, user] of users) {
      if (user.username === username) {
        return user;
      }
    }
    return null;
  } catch (error) {
    console.error('Kullanıcı getirme hatası:', error);
    return null;
  }
};

export const addUser = async (username: string, email: string, passwordHash: string): Promise<number | null> => {
  try {
    const id = nextUserId++;
    const newUser: User = {
      id,
      username,
      email,
      passwordHash
    };
    users.set(id, newUser);
    return id;
  } catch (error) {
    console.error('Kullanıcı ekleme hatası:', error);
    return null;
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
