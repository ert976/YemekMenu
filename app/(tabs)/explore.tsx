import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useAuth } from "../../auth";
import { Colors, Spacing, BorderRadius, Typography } from "../../constants/theme";
import { useToast } from "../../context/ToastContext";
import { useColorScheme } from "../../hooks/use-color-scheme";
import { generateBalancedMenu } from "../../mealPlanner";
import { DietType, Food, MealPlan } from "../../types";
import { SkeletonLoader } from "../../components/ui/SkeletonLoader";

const { width } = Dimensions.get("window");

export default function ExploreScreen() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const { showSuccess, showError } = useToast();

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
      showSuccess("30 Günlük Akıllı Planınız Hazır!");
    } catch (error: unknown) {
      const msg =
        error instanceof Error ? error.message : "Mönü oluşturulamadı.";
      showError(msg);
    } finally {
      setLoading(false);
    }
  };

  const getBadgeColor = (type?: string) => {
    switch (type) {
      case "preference":
        return "#FF7A00";
      case "economy":
        return theme.success;
      case "health":
        return theme.info;
      default:
        return theme.textSecondary;
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
    meal: Food | Food[] | null | undefined,
    label: string,
    icon: string,
    showCompact = false,
  ) => {
    if (!meal) return null;

    // --- SERPME KAHVALTI (DİZİ) GÖSTERİMİ ---
    if (Array.isArray(meal)) {
      const totalCalories = meal.reduce(
        (acc, curr) => acc + (curr.nutritionalInfo?.calories || 0),
        0,
      );
      return (
        <View
          style={[
            styles.mealItem,
            {
              backgroundColor: theme.surface,
              flexDirection: "column",
              alignItems: "flex-start",
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 10,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.mealLabel, { color: theme.primary }]}>
              {icon} {label}
            </Text>
            <Text style={[styles.nutritionValue, { color: theme.textSecondary }]}>🔥 ~{totalCalories} kcal</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {meal.map((item) => (
              <View
                key={item.id}
                style={{
                  marginRight: 12,
                  width: 80,
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: item.image_url }}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: BorderRadius.large,
                    marginBottom: 5,
                  }}
                />
                <Text
                  numberOfLines={2}
                  style={{
                    ...Typography.body.small,
                    textAlign: "center",
                    color: theme.textMain,
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Text>
                {item.subCategory === "main" && (
                  <Text style={{ fontSize: 9, color: theme.primary }}>
                    Ana Öğün
                  </Text>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      );
    }

    // --- TEKİL YEMEK GÖSTERİMİ (ÖĞLE / AKŞAM) ---
    const priceIcons = "₺".repeat(meal.priceLevel || 2);
    return (
      <View
        style={[
          styles.mealItem,
          { backgroundColor: theme.surface },
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
              <Text style={[styles.mealLabel, { color: theme.primary }]}>
                {icon} {label}
              </Text>
            )}
            <Text style={[styles.priceTag, { color: theme.primary }]}>
              {priceIcons}
            </Text>
          </View>
          <Text
            style={[
              styles.mealName,
              { color: theme.textMain },
              showCompact && { fontSize: 14 },
            ]}
            numberOfLines={1}
          >
            {meal.name}
          </Text>
          <View style={styles.nutritionRow}>
            <Text style={[styles.nutritionValue, { color: theme.textSecondary }]}>
              🔥 {meal.nutritionalInfo?.calories} kcal
            </Text>
            {!showCompact && (
              <Text style={[styles.nutritionValue, { color: theme.textSecondary }]}>
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
        <Text style={[styles.sectionTitle, { color: theme.textMain }]}>
          {t("explore.daily")} Detay - {t("explore.day", { count: selectedDayIndex + currentWeekIndex * 7 + 1 })}
        </Text>
        {renderMealItem(dayData.breakfast, t("explore.breakfast"), "🍳")}
        {renderMealItem(dayData.lunch, t("explore.lunch"), "🥗")}
        {renderMealItem(dayData.dinner, t("explore.dinner"), "🍖")}
        {dayData.snack && renderMealItem(dayData.snack, t("explore.snack"), "🍎")}

        <View style={[styles.descriptionCard, { backgroundColor: theme.surface, borderColor: theme.border, borderWidth: 1 }]}>
          <Ionicons name="bulb-outline" size={20} color={theme.primary} />
          <Text style={[styles.descriptionText, { color: theme.textMain }]}>
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
      <LinearGradient colors={[theme.primary, "#FF4D00"]} style={styles.header}>
        <Text style={styles.headerTitle}>{t("explore.title")}</Text>
        <Text style={styles.headerSubtitle}>{t("explore.subtitle")}</Text>
      </LinearGradient>

      <View style={styles.configContainer}>
        <View style={styles.tabBar}>
          {(["daily", "weekly", "monthly"] as const).map((mode) => (
            <TouchableOpacity
              key={mode}
              style={[
                styles.tabItem,
                viewMode === mode && {
                  borderBottomColor: theme.primary,
                  borderBottomWidth: 3,
                },
              ]}
              onPress={() => setViewMode(mode)}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: viewMode === mode ? theme.primary : theme.textSecondary },
                ]}
              >
                {t(`explore.${mode}`)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {!currentPlan ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="calendar-outline" size={64} color={theme.border} />
            <Text style={[styles.emptyText, { color: theme.textSecondary }]}>{t("explore.noPlan")}</Text>
            <TouchableOpacity
              style={[styles.generateButton, { backgroundColor: theme.primary }]}
              onPress={generateMenu}
            >
              <Text style={styles.generateButtonText}>
                {t("explore.generateBtn")}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.planContainer}>
            {loading ? (
              <View style={styles.skeletonContainer}>
                <SkeletonLoader width="100%" height={150} style={{ marginBottom: Spacing.md }} />
                <SkeletonLoader width="100%" height={80} style={{ marginBottom: Spacing.md }} />
                <SkeletonLoader width="100%" height={250} style={{ marginBottom: Spacing.md }} />
                <SkeletonLoader width="100%" height={120} />
              </View>
            ) : viewMode === "weekly" && (
              <View>
                <View style={styles.weekSelector}>
                  {[0, 1, 2, 3].map((idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={[
                        styles.weekBtn,
                        { backgroundColor: theme.surface, borderColor: theme.border, borderWidth: 1 },
                        currentWeekIndex === idx && {
                          backgroundColor: theme.primary,
                          borderColor: theme.primary,
                        },
                      ]}
                      onPress={() => setCurrentWeekIndex(idx)}
                    >
                      <Text
                        style={[
                          styles.weekBtnText,
                          { color: theme.textSecondary },
                          currentWeekIndex === idx && { color: "white" },
                        ]}
                      >
                        {t("explore.week", { count: idx + 1 })}
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
                        { backgroundColor: theme.surface, borderColor: theme.border },
                        selectedDayIndex === idx && { backgroundColor: theme.primary, borderColor: theme.primary },
                      ]}
                      onPress={() => setSelectedDayIndex(idx)}
                    >
                      <Text style={[styles.dayCardText, { color: theme.textMain }, selectedDayIndex === idx && { color: "white" }]}>
                        {t("explore.day", { count: idx + 1 + currentWeekIndex * 7 })}
                      </Text>
                      <Ionicons
                        name="restaurant-outline"
                        size={16}
                        color={selectedDayIndex === idx ? "white" : theme.primary}
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
                    style={[styles.gridItem, { backgroundColor: theme.surface, borderColor: theme.border, borderWidth: 1 }]}
                    onPress={() => {
                      setViewMode("daily");
                      setSelectedDayIndex(idx % 7);
                      setCurrentWeekIndex(Math.floor(idx / 7));
                    }}
                  >
                    <Text style={{ color: theme.textMain, fontSize: 10 }}>
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
              <Text style={[styles.reGenerateButtonText, { color: theme.primary }]}>{t("explore.refreshBtn")}</Text>
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
    borderBottomLeftRadius: BorderRadius.extraLarge,
    borderBottomRightRadius: BorderRadius.extraLarge,
  },
  headerTitle: { ...Typography.display.small, color: "white" },
  headerSubtitle: {
    ...Typography.body.medium,
    color: "rgba(255,255,255,0.8)",
    marginTop: 5,
  },
  configContainer: { padding: Spacing.lg },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: Spacing.lg,
  },
  tabItem: { paddingVertical: Spacing.sm, flex: 1, alignItems: "center" },
  tabText: { ...Typography.heading.small },
  emptyContainer: { alignItems: "center", marginTop: 50 },
  emptyText: { ...Typography.body.medium, marginTop: 15, marginBottom: 25 },
  generateButton: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.full,
  },
  generateButtonText: { color: "white", ...Typography.heading.medium },
  planContainer: { flex: 1 },
  skeletonContainer: {
    paddingTop: Spacing.md,
  },
  weekSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spacing.md,
  },
  weekBtn: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.large,
  },
  weekBtnText: { ...Typography.body.small, fontWeight: "600" },
  dayScroll: { marginBottom: Spacing.lg },
  dayCard: {
    width: 70,
    height: 70,
    borderRadius: BorderRadius.extraLarge,
    justifyContent: "center",
    alignItems: "center",
    marginRight: Spacing.sm,
    borderWidth: 1,
  },
  dayCardText: { ...Typography.body.small, fontWeight: "bold", marginBottom: 5 },
  dayDetails: { marginTop: Spacing.sm },
  sectionTitle: { ...Typography.heading.large, marginBottom: Spacing.md },
  mealItem: {
    flexDirection: "row",
    padding: Spacing.md,
    borderRadius: BorderRadius.extraLarge,
    marginBottom: Spacing.md,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  mealImage: { width: 70, height: 70, borderRadius: BorderRadius.large },
  mealInfo: { flex: 1, marginLeft: Spacing.md },
  mealTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  mealLabel: { ...Typography.body.small, fontWeight: "bold" },
  priceTag: { ...Typography.body.small, fontWeight: "bold" },
  mealName: { ...Typography.heading.medium },
  nutritionRow: { flexDirection: "row", marginTop: 5 },
  nutritionValue: { ...Typography.body.small, marginRight: 10 },
  descriptionCard: {
    flexDirection: "row",
    padding: Spacing.md,
    borderRadius: BorderRadius.large,
    marginTop: Spacing.sm,
    alignItems: "center",
  },
  descriptionText: {
    marginLeft: Spacing.sm,
    ...Typography.body.small,
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
    borderRadius: BorderRadius.default,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Spacing.xs,
  },
  reGenerateButton: { marginTop: Spacing.xl, padding: Spacing.md, alignItems: "center" },
  reGenerateButtonText: { ...Typography.heading.medium },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: BorderRadius.default,
    zIndex: 10,
  },
  badgeText: { color: "white", fontSize: 10, fontWeight: "bold" },
  compactMeal: { padding: Spacing.sm },
  compactMealImage: { width: 50, height: 50, borderRadius: BorderRadius.default },
});