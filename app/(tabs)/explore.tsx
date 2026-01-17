import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
    Alert,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useAuth } from "../../auth";
import { Colors } from "../../constants/Colors";
import { useColorScheme } from "../../hooks/use-color-scheme";
import { generateBalancedMenu } from "../../mealPlanner";
import { DietType, Food, MealPlan } from "../../types";

const { width } = Dimensions.get("window");

export default function ExploreScreen() {
  const { user } = useAuth();
  const theme = useColorScheme() === "dark" ? Colors.dark : Colors.light;

  const [loading, setLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<MealPlan | null>(null);
  const [selectedDiet, setSelectedDiet] = useState<DietType>("normal");
  const [showHalalOnly, setShowHalalOnly] = useState(false);

  const [viewMode, setViewMode] = useState<"daily" | "weekly" | "monthly">(
    "weekly",
  );
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const generateMenu = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const plan = await generateBalancedMenu(
        30,
        selectedDiet,
        showHalalOnly,
        user.id,
        showHalalOnly,
      );
      setCurrentPlan(plan);
      setCurrentWeekIndex(0);
      setSelectedDayIndex(0);
      Alert.alert("Başarılı", "30 Günlük Akıllı Planınız Hazır!");
    } catch (error: any) {
      Alert.alert("Hata", error.message || "Mönü oluşturulamadı.");
    } finally {
      setLoading(false);
    }
  };

  const getBadgeColor = (type?: string) => {
    switch (type) {
      case "preference":
        return "#FF7A00";
      case "economy":
        return "#4CAF50";
      case "health":
        return "#2196F3";
      default:
        return "#9E9E9E";
    }
  };

  const renderBadge = (food: Food) => {
    if (!food.reasonTag) return null;
    return (
      <View
        style={[
          styles.badge,
          { backgroundColor: getBadgeColor(food.reasonType) },
        ]}
      >
        <Text style={styles.badgeText}>{food.reasonTag}</Text>
      </View>
    );
  };

  const renderMealItem = (
    meal: Food | null | undefined,
    label: string,
    icon: string,
    showCompact = false,
  ) => {
    if (!meal) return null;
    const priceIcons = "₺".repeat(meal.priceLevel || 2);
    return (
      <View
        style={[
          styles.mealItem,
          { backgroundColor: theme.card },
          showCompact && styles.compactMeal,
        ]}
      >
        <Image
          source={{ uri: meal.image_url }}
          style={showCompact ? styles.compactMealImage : styles.mealImage}
        />
        {renderBadge(meal)}
        <View style={styles.mealInfo}>
          <View style={styles.mealTitleRow}>
            {!showCompact && (
              <Text style={styles.mealLabel}>
                {icon} {label}
              </Text>
            )}
            <Text style={[styles.priceTag, { color: theme.tint }]}>
              {priceIcons}
            </Text>
          </View>
          <Text
            style={[
              styles.mealName,
              { color: theme.text },
              showCompact && { fontSize: 14 },
            ]}
            numberOfLines={1}
          >
            {meal.name}
          </Text>
          <View style={styles.nutritionRow}>
            <Text style={styles.nutritionValue}>
              🔥 {meal.nutritionalInfo?.calories} kcal
            </Text>
            {!showCompact && (
              <Text style={styles.nutritionValue}>
                🥩 {meal.nutritionalInfo?.protein}g P
              </Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  const renderSelectedDay = () => {
    if (!currentPlan) return null;
    const dayData =
      currentPlan.plan_data[selectedDayIndex + currentWeekIndex * 7];
    if (!dayData) return null;

    return (
      <View style={styles.dayDetails}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Günlük Detay - Gün {selectedDayIndex + currentWeekIndex * 7 + 1}
        </Text>
        {renderMealItem(dayData.breakfast, "Kahvaltı", "🍳")}
        {renderMealItem(dayData.lunch, "Öğle Yemeği", "🥗")}
        {renderMealItem(dayData.dinner, "Akşam Yemeği", "🍖")}
        {dayData.snack && renderMealItem(dayData.snack, "Ara Öğün", "🍎")}

        <View style={[styles.descriptionCard, { backgroundColor: theme.card }]}>
          <Ionicons name="bulb-outline" size={20} color={theme.tint} />
          <Text style={[styles.descriptionText, { color: theme.text }]}>
            {dayData.nutritionDescription}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <LinearGradient colors={["#FF7A00", "#FF4D00"]} style={styles.header}>
        <Text style={styles.headerTitle}>Beslenme Uzmanı</Text>
        <Text style={styles.headerSubtitle}>30 Günlük Kişisel Plan</Text>
      </LinearGradient>

      <View style={styles.configContainer}>
        <View style={styles.tabBar}>
          {(["daily", "weekly", "monthly"] as const).map((mode) => (
            <TouchableOpacity
              key={mode}
              style={[
                styles.tabItem,
                viewMode === mode && {
                  borderBottomColor: theme.tint,
                  borderBottomWidth: 3,
                },
              ]}
              onPress={() => setViewMode(mode)}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: viewMode === mode ? theme.tint : "#aaa" },
                ]}
              >
                {mode === "daily"
                  ? "Günlük"
                  : mode === "weekly"
                    ? "Haftalık"
                    : "Aylık"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {!currentPlan ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="calendar-outline" size={64} color="#ccc" />
            <Text style={styles.emptyText}>Henüz bir plan oluşturmadınız.</Text>
            <TouchableOpacity
              style={styles.generateButton}
              onPress={generateMenu}
            >
              <Text style={styles.generateButtonText}>
                30 Günlük Mönü Oluştur
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.planContainer}>
            {viewMode === "weekly" && (
              <View>
                <View style={styles.weekSelector}>
                  {[0, 1, 2, 3].map((idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={[
                        styles.weekBtn,
                        currentWeekIndex === idx && {
                          backgroundColor: theme.tint,
                        },
                      ]}
                      onPress={() => setCurrentWeekIndex(idx)}
                    >
                      <Text
                        style={[
                          styles.weekBtnText,
                          currentWeekIndex === idx && { color: "white" },
                        ]}
                      >
                        {idx + 1}. Hafta
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.dayScroll}
                >
                  {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={[
                        styles.dayCard,
                        { backgroundColor: theme.card },
                        selectedDayIndex === idx && styles.activeDayCard,
                      ]}
                      onPress={() => setSelectedDayIndex(idx)}
                    >
                      <Text style={[styles.dayCardText, { color: theme.text }]}>
                        Gün {idx + 1 + currentWeekIndex * 7}
                      </Text>
                      <Ionicons
                        name="restaurant-outline"
                        size={16}
                        color={selectedDayIndex === idx ? "white" : theme.tint}
                      />
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                {renderSelectedDay()}
              </View>
            )}

            {viewMode === "monthly" && (
              <View style={styles.monthlyGrid}>
                {currentPlan.plan_data.map((_, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={[styles.gridItem, { backgroundColor: theme.card }]}
                    onPress={() => {
                      setViewMode("daily");
                      setSelectedDayIndex(idx % 7);
                      setCurrentWeekIndex(Math.floor(idx / 7));
                    }}
                  >
                    <Text style={{ color: theme.text, fontSize: 10 }}>
                      {idx + 1}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <TouchableOpacity
              style={styles.reGenerateButton}
              onPress={generateMenu}
            >
              <Text style={styles.reGenerateButtonText}>Planı Yenile</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    padding: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "white" },
  headerSubtitle: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)",
    marginTop: 5,
  },
  configContainer: { padding: 20 },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tabItem: { paddingVertical: 10, flex: 1, alignItems: "center" },
  tabText: { fontWeight: "bold", fontSize: 14 },
  emptyContainer: { alignItems: "center", marginTop: 50 },
  emptyText: { color: "#999", marginTop: 15, marginBottom: 25 },
  generateButton: {
    backgroundColor: "#FF7A00",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  generateButtonText: { color: "white", fontWeight: "bold" },
  planContainer: { flex: 1 },
  weekSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  weekBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
  },
  weekBtnText: { fontSize: 12, fontWeight: "600", color: "#666" },
  dayScroll: { marginBottom: 20 },
  dayCard: {
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  activeDayCard: { backgroundColor: "#FF7A00", borderColor: "#FF7A00" },
  dayCardText: { fontSize: 12, fontWeight: "bold", marginBottom: 5 },
  dayDetails: { marginTop: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
  mealItem: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  mealImage: { width: 70, height: 70, borderRadius: 15 },
  mealInfo: { flex: 1, marginLeft: 15 },
  mealTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  mealLabel: { fontSize: 10, color: "#FF7A00", fontWeight: "bold" },
  priceTag: { fontSize: 12, fontWeight: "bold", opacity: 0.8 },
  mealName: { fontSize: 16, fontWeight: "700" },
  nutritionRow: { flexDirection: "row", marginTop: 5 },
  nutritionValue: { fontSize: 11, color: "#888", marginRight: 10 },
  descriptionCard: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    alignItems: "center",
  },
  descriptionText: {
    marginLeft: 10,
    fontSize: 13,
    flex: 1,
    fontStyle: "italic",
  },
  monthlyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: (width - 60) / 7,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  reGenerateButton: { marginTop: 30, padding: 15, alignItems: "center" },
  reGenerateButtonText: { color: "#FF7A00", fontWeight: "bold" },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    zIndex: 10,
  },
  badgeText: { color: "white", fontSize: 10, fontWeight: "bold" },
  compactMeal: { padding: 10 },
  compactMealImage: { width: 50, height: 50, borderRadius: 10 },
});
