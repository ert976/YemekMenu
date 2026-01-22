import { useAuth } from "@/auth";
import FoodRatingComponent from "@/components/FoodRatingComponent";
import { Colors, Spacing, Typography } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RateFoodScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const { user } = useAuth();

  const router = useRouter();

  const handleRatingComplete = () => {
    // Derecelendirme tamamlandığında Menü Oluştur (Explore) ekranına yönlendir
    router.replace("/explore");
  };

  if (!user) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.textMain }}>Lütfen önce giriş yapın.</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.headerArea}>
        <Text style={[styles.header, { color: theme.textMain }]}>
          Yemekleri Keşfet
        </Text>
        <Text style={[styles.subHeader, { color: theme.textSecondary }]}>
          Zevkine göre puanla, sana özel menüler hazırlayalım
        </Text>
      </View>
      <FoodRatingComponent onRatingComplete={handleRatingComplete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerArea: {
    paddingTop: 60,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  header: {
    ...Typography.display.small,
    letterSpacing: -0.5,
  },
  subHeader: {
    ...Typography.body.medium,
    marginTop: 4,
  },
});