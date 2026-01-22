import { useAuth } from "@/auth";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Colors, Spacing, BorderRadius, Typography } from "../../constants/theme";
import { useColorScheme } from "../../hooks/use-color-scheme";
import { generateBalancedMenu } from "../../mealPlanner";
import { DietType, MealPlan } from "../../types";
import { Ionicons } from "@expo/vector-icons";

interface MenuPlannerProps {
  onMenuCreated?: (menuId: number) => void;
}

export const MenuPlanner: React.FC<MenuPlannerProps> = ({ onMenuCreated }) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const { user } = useAuth();

  const [dietPreference, setDietPreference] = useState<DietType>("normal");
  const [showHalalOnly, setShowHalalOnly] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<MealPlan | null>(null);

  const handleGenerateMenu = async () => {
    if (!user) {
      Alert.alert("Hata", "Lütfen giriş yapın.");
      return;
    }

    setIsGenerating(true);
    try {
      const plan = await generateBalancedMenu(
        30,
        dietPreference,
        showHalalOnly,
        user.id,
      );
      setGeneratedPlan(plan);
      if (onMenuCreated) {
        onMenuCreated(plan.id);
      }
      Alert.alert("Başarılı", "30 Günlük Planınız Oluşturuldu!");
    } catch (error: unknown) {
      const msg =
        error instanceof Error
          ? error.message
          : "Menü oluşturulurken bir hata oluştu.";
      Alert.alert("Hata", msg);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.textMain }]}>
          Profesyonel Menü Planlayıcı
        </Text>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          Beslenme hedeflerinize uygun 30 günlük akıllı mönü oluşturun.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme.surface }]}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="restaurant-outline" size={20} color={theme.primary} />
            <Text style={[styles.label, { color: theme.textMain }]}>Diyet Tercihi</Text>
          </View>
          <View style={styles.optionsRow}>
            {(
              [
                "normal",
                "vegetarian",
                "vegan",
                "lowcarb",
                "glutenfree",
              ] as DietType[]
            ).map((diet) => (
              <TouchableOpacity
                key={diet}
                style={[
                  styles.optionButton,
                  { borderColor: theme.border },
                  dietPreference === diet && { backgroundColor: theme.primary, borderColor: theme.primary },
                ]}
                onPress={() => setDietPreference(diet)}
              >
                <Text
                  style={[
                    styles.optionText,
                    { color: theme.textMain },
                    dietPreference === diet && { color: "#fff", fontWeight: "700" },
                  ]}
                >
                  {diet.charAt(0).toUpperCase() + diet.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={[styles.generateButton, { backgroundColor: theme.primary }]}
          onPress={handleGenerateMenu}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <>
              <Text style={styles.generateButtonText}>30 Günlük Plan Hazırla</Text>
              <Ionicons name="sparkles" size={18} color="#fff" />
            </>
          )}
        </TouchableOpacity>
      </View>

      {generatedPlan && (
        <View style={[styles.resultContainer, { backgroundColor: theme.success + "10", borderColor: theme.success }]}>
          <Ionicons name="checkmark-circle" size={24} color={theme.success} />
          <View style={styles.resultTextContainer}>
            <Text style={[styles.resultTitle, { color: theme.success }]}>
              Yeni Planınız Hazır!
            </Text>
            <Text style={[styles.resultSubtitle, { color: theme.textSecondary }]}>
              4 hafta, toplam 30 günlük profesyonel mönü oluşturuldu.
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { padding: Spacing.lg },
  header: { marginBottom: Spacing.xl },
  title: { ...Typography.display.small, marginBottom: Spacing.xs },
  subtitle: { ...Typography.body.medium },
  card: { 
    padding: Spacing.lg, 
    borderRadius: BorderRadius.extraLarge,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  section: { marginBottom: Spacing.lg },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: Spacing.sm, marginBottom: Spacing.md },
  label: { ...Typography.heading.medium },
  optionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.sm,
  },
  optionButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
  },
  optionText: { ...Typography.body.small },
  generateButton: {
    height: 56,
    borderRadius: BorderRadius.large,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.sm,
    marginTop: Spacing.sm,
  },
  generateButtonText: { color: "#fff", ...Typography.heading.medium },
  resultContainer: {
    marginTop: Spacing.xl,
    padding: Spacing.md,
    borderRadius: BorderRadius.large,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
  },
  resultTextContainer: { flex: 1 },
  resultTitle: { ...Typography.heading.medium },
  resultSubtitle: { ...Typography.body.small },
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: { padding: 20, borderRadius: 15, elevation: 4 },
  label: { fontSize: 16, fontWeight: "600", marginBottom: 10 },
  optionsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  optionButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  optionText: { fontSize: 14 },
  generateButton: {
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  generateButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "rgba(0,255,0,0.05)",
  },
  resultTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
});
