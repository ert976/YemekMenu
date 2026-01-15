import * as WebBrowser from 'expo-web-browser';
import { createContext, useContext, useEffect, useState } from 'react';
import { addUser, getUser, initializeDatabase } from './database';
import { AuthContextType, User } from './types';
import { hashPassword } from './utils/crypto-utils';

WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Uygulama başladığında veritabanını başlat
    initializeDatabase();
    
    // Burada mevcut kullanıcı oturumunu kontrol edebiliriz
    // Basit bir uygulama için localStorage veya async storage kullanabiliriz
    // Ancak bu projede SQLite kullanarak kullanıcı durumunu yöneteceğiz
    
    // Demo kullanıcı oturumunu başlat
    const demoLogin = async () => {
      const demoUser = await getUser('demokullanici', 'demoparola');
      if (demoUser) {
        setUser(demoUser as User);
        setIsAuthenticated(true);
      }
      setLoading(false);
    };
    
    demoLogin();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      // Şifreleri hash'le ve karşılaştır
      const hashedPassword = await hashPassword(password);
      const userData = await getUser(username, hashedPassword);

      if (userData) {
        setUser(userData as User);
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Giriş hatası:', error);
      return false;
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      // Kullanıcı adı veya e-posta zaten var mı kontrol et
      const existingUser = await getUser(username, password);
      if (existingUser) {
        return false; // Kullanıcı zaten var
      }

      // Şifreleri hash'le
      const hashedPassword = await hashPassword(password);

      const userId = await addUser(username, email, hashedPassword);
      if (userId) {
        // Kayıt sonrası hash'li şifre ile giriş yap
        const userData = await getUser(username, hashedPassword);
        if (userData) {
          setUser(userData as User);
          setIsAuthenticated(true);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.error('Kayıt hatası:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}