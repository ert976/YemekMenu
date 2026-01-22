import React from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useAuth } from "../../auth";
import { Colors, Spacing, BorderRadius, Typography } from "../../constants/theme";
import { useColorScheme } from "../../hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {
  const { user, logout } = useAuth();
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  const handleResetUserRatings = () => {
    Alert.alert(
      "Tercihleri Sıfırla",
      "Yemek tercihlerin (sevdiğin/sevmediğin yemekler) silinecek. Emin misin?",
      [
        { text: "Vazgeç", style: "cancel" },
        {
          text: "Evet, Sıfırla",
          onPress: () => Alert.alert("Başarılı", "Tercihler sıfırlandı."),
        },
      ],
    );
  };

  const handleResetAllData = () => {
    Alert.alert(
      "Tüm Verileri Sıfırla",
      "Oluşturduğun tüm mönüler ve ayarlar silinecek. Bu işlem geri alınamaz.",
      [
        { text: "Vazgeç", style: "cancel" },
        {
          text: "Her Şeyi Sil",
          style: "destructive",
          onPress: () => Alert.alert("Başarılı", "Tüm veriler temizlendi."),
        },
      ],
    );
  };

  const handleLogout = async () => {
    await logout();
    Alert.alert("Bilgi", "Başarıyla çıkış yapıldı.");
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.textMain }]}>Ayarlar</Text>
      </View>

      <View style={[styles.section, { backgroundColor: theme.surface }]}>
        <View style={styles.sectionHeader}>
          <Ionicons name="person-circle-outline" size={24} color={theme.primary} />
          <Text style={[styles.sectionTitle, { color: theme.textMain }]}>Profil</Text>
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.textSecondary }]}>Kullanıcı</Text>
            <Text style={[styles.infoValue, { color: theme.textMain }]}>{user?.username}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.textSecondary }]}>E-posta</Text>
            <Text style={[styles.infoValue, { color: theme.textMain }]}>{user?.email}</Text>
          </View>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: theme.surface }]}>
        <View style={styles.sectionHeader}>
          <Ionicons name="shield-checkmark-outline" size={24} color={theme.primary} />
          <Text style={[styles.sectionTitle, { color: theme.textMain }]}>Veri Yönetimi</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.primary + "10", borderColor: theme.primary, borderWidth: 1 }]}
          onPress={handleResetUserRatings}
        >
          <Text style={[styles.buttonText, { color: theme.primary }]}>Yemek Tercihlerini Sıfırla</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.error + "10", borderColor: theme.error, borderWidth: 1 }]}
          onPress={handleResetAllData}
        >
          <Text style={[styles.buttonText, { color: theme.error }]}>Tüm Verileri Sıfırla</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.section, { backgroundColor: theme.surface }]}>
        <View style={styles.sectionHeader}>
          <Ionicons name="log-out-outline" size={24} color={theme.textSecondary} />
          <Text style={[styles.sectionTitle, { color: theme.textMain }]}>Hesap</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.textSecondary + "10" }]}
          onPress={handleLogout}
        >
          <Text style={[styles.buttonText, { color: theme.textSecondary }]}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: theme.textSecondary }]}>
          Yemek Menü Uygulaması v1.2 (Agentic Mode)
        </Text>
        <Text style={[styles.footerText, { color: theme.textSecondary }]}>
          Beslenme Uzmanı & Akıllı Planlayıcı
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { padding: Spacing.lg },
  header: {
    paddingVertical: Spacing.xl,
    alignItems: "center",
  },
  headerTitle: { ...Typography.display.small },
  section: {
    padding: Spacing.lg,
    borderRadius: BorderRadius.extraLarge,
    marginBottom: Spacing.lg,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: Spacing.sm, marginBottom: Spacing.lg },
  sectionTitle: { ...Typography.heading.medium },
  profileInfo: { gap: Spacing.md },
  infoRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  infoLabel: { ...Typography.body.medium },
  infoValue: { ...Typography.heading.small },
  button: {
    padding: Spacing.md,
    borderRadius: BorderRadius.large,
    alignItems: "center",
    marginBottom: Spacing.md,
  },
  buttonText: { ...Typography.heading.small },
  footer: {
    alignItems: "center",
    marginTop: Spacing.xl,
    gap: Spacing.xs,
  },
  footerText: { ...Typography.body.small, opacity: 0.6 },
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    borderBottomWidth: 1,
  },
  section: {
    margin: 15,
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 20 },
  button: {
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 12,
  },
  dangerButton: { backgroundColor: "#dc3545" },
  logoutButton: { backgroundColor: "#6c757d" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  infoText: { fontSize: 14, marginBottom: 8, opacity: 0.7 },
});
