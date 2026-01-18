import React, { createContext, useContext, useEffect, useState } from "react";
import { addUser, getUser } from "./database";
import { ApiResponse, User } from "./types";
import {
    checkRateLimit,
    hashPassword,
    resetRateLimit,
    validatePassword,
    verifyPassword,
} from "./utils/auth-utils";
import { storage } from "./utils/storage";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (
    username: string,
    passwordPlain: string,
  ) => Promise<ApiResponse<User>>;
  register: (
    username: string,
    email: string,
    passwordPlain: string,
  ) => Promise<ApiResponse<User>>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30 dakika

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const savedUserJson = await storage.getItem("@user");
      if (savedUserJson) {
        const savedUser: User = JSON.parse(savedUserJson);

        // Session timeout kontrolü
        const now = Date.now();
        if (
          savedUser.lastActivity &&
          now - savedUser.lastActivity > SESSION_TIMEOUT_MS
        ) {
          console.log("Oturum zaman aşımına uğradı");
          await logout();
          return;
        }

        // Aktivite güncelle
        const updatedUser = { ...savedUser, lastActivity: now };
        await storage.setItem("@user", JSON.stringify(updatedUser));
        setUser(updatedUser);
      }
    } catch (e) {
      console.error("Yükleme hatası:", e);
    } finally {
      setLoading(false);
    }
  };

  const login = async (
    username: string,
    passwordPlain: string,
  ): Promise<ApiResponse<User>> => {
    try {
      // 1. Rate limiting kontrolü
      const rateLimit = checkRateLimit(username);
      if (!rateLimit.allowed) {
        return {
          success: false,
          error: {
            code: "RATE_LIMIT_EXCEEDED",
            message:
              rateLimit.message ||
              "Çok fazla deneme yaptınız. Lütfen daha sonra tekrar deneyin.",
          },
        };
      }

      // 2. Kullanıcıyı getir
      const foundUser = await getUser(username);

      // 3. Şifre doğrulama
      if (foundUser && foundUser.passwordHash) {
        const isPasswordCorrect = await verifyPassword(
          passwordPlain,
          foundUser.passwordHash,
        );

        if (isPasswordCorrect) {
          // Başarılı giriş: Rate limit'i sıfırla
          resetRateLimit(username);

          const userToSave: User = {
            id: foundUser.id,
            username: foundUser.username,
            email: foundUser.email,
            lastActivity: Date.now(),
          };

          await storage.setItem("@user", JSON.stringify(userToSave));
          setUser(userToSave);
          return { success: true, data: userToSave };
        }
      }

      return {
        success: false,
        error: {
          code: "AUTH_FAILED",
          message: "Hatalı kullanıcı adı veya şifre.",
        },
      };
    } catch (e: any) {
      return {
        success: false,
        error: {
          code: "AUTH_ERROR",
          message: e.message || "Giriş yapılamadı.",
        },
      };
    }
  };

  const register = async (
    username: string,
    email: string,
    passwordPlain: string,
  ): Promise<ApiResponse<User>> => {
    try {
      // 1. Şifre karmaşıklık kontrolü
      const validation = validatePassword(passwordPlain);
      if (!validation.isValid) {
        return {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: validation.errors.join("\n"),
          },
        };
      }

      // 2. Mevcut kullanıcı kontrolü
      const existingUser = await getUser(username);
      if (existingUser) {
        return {
          success: false,
          error: {
            code: "USER_EXISTS",
            message: "Bu kullanıcı adı zaten alınmış.",
          },
        };
      }

      // 3. Şifre hash'leme
      const passwordHash = await hashPassword(passwordPlain);

      // 4. Kaydetme
      const id = await addUser(username, email, passwordHash);
      if (!id) throw new Error("Kullanıcı oluşturulamadı.");

      const newUser: User = {
        id,
        username,
        email,
        lastActivity: Date.now(),
      };

      await storage.setItem("@user", JSON.stringify(newUser));
      setUser(newUser);
      return { success: true, data: newUser };
    } catch (e: any) {
      return {
        success: false,
        error: {
          code: "AUTH_ERROR",
          message: e.message || "Kayıt yapılamadı.",
        },
      };
    }
  };

  const logout = async () => {
    await storage.removeItem("@user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
