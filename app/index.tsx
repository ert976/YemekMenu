import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Dimensions,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useAuth } from "../auth";
import { useColorScheme } from "../hooks/use-color-scheme";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, register } = useAuth();
  const router = useRouter();
  const colorScheme = useColorScheme() ?? "light";

  const handleAuth = async () => {
    if (!username || !password || (isRegister && !email)) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = isRegister
        ? await register(username, email, password)
        : await login(username, password);

      if (result.success) {
        router.replace("/(tabs)");
      } else {
        Alert.alert("Hata", result.error?.message || "Bir hata oluştu.");
      }
    } catch (error: any) {
      Alert.alert("Hata", error.message || "Bir hata oluştu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoLogin = async () => {
    setIsSubmitting(true);
    try {
      const result = await login("demo", "demo123");
      if (result.success) {
        router.replace("/(tabs)");
      } else {
        // Demo hesabı yoksa oluştur
        const regResult = await register(
          "demo",
          "demo@yemekmenu.com",
          "demo123",
        );
        if (regResult.success) {
          router.replace("/(tabs)");
        }
      }
    } catch (e) {
      router.replace("/(tabs)"); // Fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
        }}
        style={styles.background}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.85)"]}
          style={styles.overlay}
        >
          <View style={styles.content}>
            <View style={styles.headerContainer}>
              <View style={styles.logoContainer}>
                <Ionicons name="restaurant" size={40} color="#FF7A00" />
              </View>
              <Text style={styles.title}>YemekMenü</Text>
              <Text style={styles.subtitle}>Beslenme Uzmanınız</Text>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputWrapper}>
                <Ionicons
                  name="person-outline"
                  size={20}
                  color="#aaa"
                  style={styles.inputIcon}
                />
                <TextInput
                  placeholder="Kullanıcı Adı"
                  placeholderTextColor="#aaa"
                  style={styles.input}
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                />
              </View>

              {isRegister && (
                <View style={styles.inputWrapper}>
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color="#aaa"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    placeholder="E-posta"
                    placeholderTextColor="#aaa"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                  />
                </View>
              )}

              <View style={styles.inputWrapper}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#aaa"
                  style={styles.inputIcon}
                />
                <TextInput
                  placeholder="Şifre"
                  placeholderTextColor="#aaa"
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleAuth}
                disabled={isSubmitting}
              >
                <LinearGradient
                  colors={["#FF7A00", "#FF4D00"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientButton}
                >
                  {isSubmitting ? (
                    <ActivityIndicator color="white" />
                  ) : (
                    <Text style={styles.buttonText}>
                      {isRegister ? "Kayıt Ol" : "Giriş Yap"}
                    </Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.switchButton}
                onPress={() => setIsRegister(!isRegister)}
              >
                <Text style={styles.switchText}>
                  {isRegister
                    ? "Zaten hesabınız var mı? Giriş yapın"
                    : "Hesabınız yok mu? Hemen kayıt olun"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.demoButton}
                onPress={handleDemoLogin}
              >
                <Text style={styles.demoButtonText}>Hızlı Demo Deneyimi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, width: "100%", height: "100%" },
  overlay: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: "#aaa",
    marginTop: 5,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 60,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
  loginButton: {
    height: 60,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 10,
    elevation: 5,
  },
  gradientButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  switchButton: {
    marginTop: 20,
    alignItems: "center",
  },
  switchText: {
    color: "#FF7A00",
    fontSize: 14,
    fontWeight: "500",
  },
  demoButton: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  demoButtonText: {
    color: "#aaa",
    fontSize: 14,
    fontWeight: "600",
  },
});
