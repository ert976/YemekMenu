import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    ActivityIndicator,
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
import { useToast } from "../context/ToastContext";
import { useColorScheme } from "../hooks/use-color-scheme";
import { Colors, Spacing, BorderRadius, Typography } from "../constants/theme";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, register } = useAuth();
  const { showError } = useToast();
  const router = useRouter();
  const { t } = useTranslation();
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  const handleAuth = async () => {
    if (!username || !password || (isRegister && !email)) {
      showError("Lütfen tüm alanları doldurun.");
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
        showError(result.error?.message || "Bir hata oluştu.");
      }
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Bir hata oluştu.";
      showError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoLogin = async () => {
    setIsSubmitting(true);
    try {
      const demoPass = "Demo!12345";
      const result = await login("demo", demoPass);
      if (result.success) {
        router.replace("/(tabs)");
        return;
      }

      const regResult = await register("demo", "demo@yemekmenu.com", demoPass);
      if (regResult.success) {
        router.replace("/(tabs)");
        return;
      }

      const randomSuffix = Math.floor(Math.random() * 10000);
      const dynamicUser = `demo_${randomSuffix}`;
      const fallbackResult = await register(
        dynamicUser,
        `${dynamicUser}@yemekmenu.com`,
        demoPass,
      );

      if (fallbackResult.success) {
        router.replace("/(tabs)");
      } else {
        showError(fallbackResult.error?.message || "Demo girişi oluşturulamadı.");
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Beklenmeyen hata";
      showError(msg);
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
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}
          style={styles.overlay}
        >
          <View style={styles.content}>
            <View style={styles.headerContainer}>
              <View style={[styles.logoContainer, { borderColor: theme.primary }]}>
                <Ionicons name="restaurant" size={40} color={theme.primary} />
              </View>
              <Text style={styles.title}>{t("auth.welcome")}</Text>
              <Text style={styles.subtitle}>{t("auth.subtitle")}</Text>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={20} color="#aaa" style={styles.inputIcon} />
                <TextInput
                  placeholder={t("auth.username")}
                  placeholderTextColor="#aaa"
                  style={styles.input}
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                />
              </View>

              {isRegister && (
                <View style={styles.inputWrapper}>
                  <Ionicons name="mail-outline" size={20} color="#aaa" style={styles.inputIcon} />
                  <TextInput
                    placeholder={t("auth.email")}
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
                <Ionicons name="lock-closed-outline" size={20} color="#aaa" style={styles.inputIcon} />
                <TextInput
                  placeholder={t("auth.password")}
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
                  colors={[theme.primary, "#FF4D00"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientButton}
                >
                  {isSubmitting ? (
                    <ActivityIndicator color="white" />
                  ) : (
                    <Text style={styles.buttonText}>
                      {isRegister ? t("auth.register") : t("auth.login")}
                    </Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.switchButton}
                onPress={() => setIsRegister(!isRegister)}
              >
                <Text style={[styles.switchText, { color: theme.primary }]}>
                  {isRegister
                    ? t("auth.haveAccount")
                    : t("auth.noAccount")}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.demoButton}
                onPress={handleDemoLogin}
              >
                <Text style={styles.demoButtonText}>{t("auth.demoLogin")}</Text>
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
    paddingHorizontal: Spacing.xl,
    justifyContent: "center",
  },
  content: { alignItems: "center" },
  headerContainer: { alignItems: "center", marginBottom: Spacing.xxl },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.extraLarge,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Spacing.md,
    borderWidth: 2,
  },
  title: {
    ...Typography.display.large,
    color: "white",
    letterSpacing: 1,
  },
  subtitle: {
    ...Typography.body.large,
    color: "#ccc",
    marginTop: 5,
  },
  formContainer: { width: "100%", maxWidth: 400 },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: BorderRadius.large,
    marginBottom: Spacing.md,
    paddingHorizontal: Spacing.md,
    height: 60,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  inputIcon: { marginRight: Spacing.sm },
  input: { flex: 1, color: "white", fontSize: 16 },
  loginButton: {
    height: 60,
    borderRadius: BorderRadius.large,
    overflow: "hidden",
    marginTop: Spacing.sm,
    elevation: 5,
  },
  gradientButton: { flex: 1, alignItems: "center", justifyContent: "center" },
  buttonText: { color: "white", ...Typography.heading.large },
  switchButton: { marginTop: Spacing.lg, alignItems: "center" },
  switchText: { ...Typography.body.medium, fontWeight: "600" },
  demoButton: {
    marginTop: Spacing.xl,
    padding: Spacing.md,
    borderRadius: BorderRadius.large,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
  },
  demoButtonText: { color: "#aaa", ...Typography.heading.small },
});
