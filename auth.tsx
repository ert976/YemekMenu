import React, { createContext, useContext, useEffect, useState } from "react";
import { addUser, getUser } from "./database";
import { ApiResponse, User } from "./types";
import { storage } from "./utils/storage";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, passwordHash: string) => Promise<ApiResponse<User>>;
  register: (
    username: string,
    email: string,
    passwordHash: string,
  ) => Promise<ApiResponse<User>>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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
      const savedUser = await storage.getItem("@user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error("Yükleme hatası:", e);
    } finally {
      setLoading(false);
    }
  };

  const login = async (
    username: string,
    passwordHash: string,
  ): Promise<ApiResponse<User>> => {
    try {
      const foundUser = await getUser(username, passwordHash);
      if (foundUser) {
        const userToSave = {
          id: foundUser.id,
          username: foundUser.username,
          email: foundUser.email,
        };
        await storage.setItem("@user", JSON.stringify(userToSave));
        setUser(userToSave);
        return { success: true, data: userToSave };
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
    passwordHash: string,
  ): Promise<ApiResponse<User>> => {
    try {
      const id = await addUser(username, email, passwordHash);
      const newUser = { id, username, email };
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
