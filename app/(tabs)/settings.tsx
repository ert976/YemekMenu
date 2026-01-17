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
import { Colors } from "../../constants/Colors";
import { useColorScheme } from "../../hooks/use-color-scheme";

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
    >
      <Text
        style={[
          styles.header,
          {
            color: theme.text,
            backgroundColor: theme.card,
            borderBottomColor: theme.tint + "20",
          },
        ]}
      >
        Ayarlar
      </Text>

      <View style={[styles.section, { backgroundColor: theme.card }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Profil</Text>
        <Text style={[styles.infoText, { color: theme.text }]}>
          Kullanıcı: {user?.username}
        </Text>
        <Text style={[styles.infoText, { color: theme.text }]}>
          E-posta: {user?.email}
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: theme.card }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Veri Yönetimi
        </Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.tint }]}
          onPress={handleResetUserRatings}
        >
          <Text style={styles.buttonText}>Yemek Tercihlerini Sıfırla</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.dangerButton]}
          onPress={handleResetAllData}
        >
          <Text style={styles.buttonText}>Tüm Verileri Sıfırla</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.section, { backgroundColor: theme.card }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Hesap</Text>

        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Uygulama Bilgisi
        </Text>
        <Text style={[styles.infoText, { color: theme.text }]}>
          Yemek Menü Uygulaması v1.2 (Agentic Mode)
        </Text>
        <Text style={[styles.infoText, { color: theme.text }]}>
          Beslenme Uzmanı & Akıllı Planlayıcı
        </Text>
      </View>
    </ScrollView>
  );
}

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
