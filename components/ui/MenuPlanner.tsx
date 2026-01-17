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
import { Colors } from "../../constants/Colors";
import { useColorScheme } from "../../hooks/use-color-scheme";
import { generateBalancedMenu } from "../../mealPlanner";
import { DietType, MealPlan } from "../../types";

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
    } catch (error: any) {
      Alert.alert(
        "Hata",
        error.message || "Menü oluşturulurken bir hata oluştu.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>
          Profesyonel Menü Planlayıcı
        </Text>

        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.label, { color: theme.text }]}>
            Diyet Tercihi
          </Text>
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
                  dietPreference === diet && { backgroundColor: theme.tint },
                ]}
                onPress={() => setDietPreference(diet)}
              >
                <Text
                  style={[
                    styles.optionText,
                    dietPreference === diet && { color: "#fff" },
                  ]}
                >
                  {diet.charAt(0).toUpperCase() + diet.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={[styles.generateButton, { backgroundColor: theme.tint }]}
            onPress={handleGenerateMenu}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.generateButtonText}>
                30 Günlük Plan Hazırla
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {generatedPlan && (
          <View style={styles.resultContainer}>
            <Text style={[styles.resultTitle, { color: theme.text }]}>
              Yeni Planınız Hazır!
            </Text>
            <Text style={{ color: theme.text }}>
              4 hafta, toplam 30 günlük profesyonel mönü oluşturuldu.
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

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
