import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import {
    ActivityIndicator,
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
    ViewToken,
} from "react-native";
import { useAuth } from "../auth";
import { Colors, Spacing, BorderRadius, Typography } from "../constants/theme";
import { getAllFoods, getUserRatings, rateFood } from "../database";
import { useColorScheme } from "../hooks/use-color-scheme";
import { SkeletonLoader } from "./ui/SkeletonLoader";
import { useTranslation } from "react-i18next";

interface Food {
  id: number;
  name: string;
  image_url: string;
  category: string;
  is_vegetarian: boolean;
  is_vegan: boolean;
}

interface FoodRatingComponentProps {
  onRatingComplete: () => void;
}

const FoodRatingComponent: React.FC<FoodRatingComponentProps> = ({
  onRatingComplete,
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const { width } = useWindowDimensions();
  const { t } = useTranslation();
  const [foods, setFoods] = useState<Food[]>([]);
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [userRatings, setUserRatings] = useState<Record<number, number>>({});
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setLoading(true);
    await Promise.all([loadFoods(), loadUserRatings()]);
    setLoading(false);
  };

  const loadFoods = async () => {
    try {
      const foodsData = await getAllFoods();
      setFoods(foodsData as Food[]);
    } catch (error) {
      console.error("Yemekler yüklenirken hata oluştu:", error);
    }
  };

  const loadUserRatings = async () => {
    if (user) {
      try {
        const ratings = await getUserRatings(user.id);
        const ratingsMap: Record<number, number> = {};
        (ratings as any[]).forEach((rating) => {
          ratingsMap[rating.food_id] = rating.rating;
        });
        setUserRatings(ratingsMap);
      } catch (error) {
        console.error(
          "Kullanıcı derecelendirmeleri yüklenirken hata oluştu:",
          error,
        );
      }
    }
  };

  const handleRating = useCallback(async (foodId: number, rating: number) => {
    if (!user) return;

    // Haptik geri bildirim
    if (rating >= 4) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else if (rating <= 2) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    try {
      await rateFood(user.id, foodId, rating);

      const newRatings = { ...userRatings };
      newRatings[foodId] = rating;
      setUserRatings(newRatings);

      if (currentFoodIndex === foods.length - 1) {
        Alert.alert(
          t("rate.completeTitle"),
          t("rate.completeMsg"),
          [{ text: t("rate.completeBtn"), onPress: () => onRatingComplete() }],
        );
      } else {
        flatListRef.current?.scrollToIndex({
          index: currentFoodIndex + 1,
          animated: true,
        });
      }
    } catch (error) {
      Alert.alert("Hata", "Derecelendirme kaydedilemedi.");
    }
  }, [user, userRatings, currentFoodIndex, foods.length, onRatingComplete]);

  const ratingOptions = useMemo(() => [
    { emoji: "🤢", value: 1, label: t("common.skip") },
    { emoji: "😕", value: 2, label: t("common.cancel") },
    { emoji: "😐", value: 3, label: t("common.next") },
    { emoji: "😋", value: 4, label: t("common.save") },
    { emoji: "😍", value: 5, label: t("common.finish") },
  ], [t]);

  const progressPercentage = useMemo(() => {
    return ((currentFoodIndex + 1) / foods.length) * 100;
  }, [currentFoodIndex, foods.length]);

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setCurrentFoodIndex(viewableItems[0].index ?? 0);
    }
  }).current;

  const renderFoodItem = useCallback(({ item, index }: { item: Food, index: number }) => {
    const currentRating = userRatings[item.id] || null;
    
    return (
      <View style={[styles.cardContainer, { width: width }]}>
        <View style={[styles.card, { backgroundColor: theme.surface }]}>
          <Image
            source={{ uri: item.image_url || "https://via.placeholder.com/400x300?text=Yemek+Resmi" }}
            style={[styles.foodImage, { height: width * 0.7 }]}
            contentFit="cover"
            transition={300}
          />

          <View style={styles.cardInfo}>
            <View style={styles.tagRow}>
              <View style={[styles.categoryTag, { backgroundColor: theme.primary + "15" }]}>
                <Text style={[styles.categoryText, { color: theme.primary }]}>
                  {item.category.toUpperCase()}
                </Text>
              </View>
              {item.is_vegetarian && (
                <View style={[styles.categoryTag, { backgroundColor: "#4CAF5015" }]}>
                  <Text style={[styles.categoryText, { color: "#4CAF50" }]}>VEJETARYEN</Text>
                </View>
              )}
            </View>

            <Text style={[styles.foodName, { color: theme.textMain }]}>{item.name}</Text>

            <View style={styles.ratingSection}>
              <Text style={[styles.ratingPrompt, { color: theme.textSecondary }]}>
                {t("rate.prompt")}
              </Text>

              <View style={styles.emojiGrid}>
                {ratingOptions.map((rating) => (
                  <TouchableOpacity
                    key={rating.value}
                    style={[
                      styles.emojiCard,
                      { backgroundColor: theme.background, borderColor: theme.border },
                      currentRating === rating.value && { borderColor: theme.primary, backgroundColor: theme.primary + "10" }
                    ]}
                    onPress={() => handleRating(item.id, rating.value)}
                  >
                    <Text style={styles.emojiText}>{rating.emoji}</Text>
                    <Text style={[styles.emojiLabel, { color: theme.textMain }, currentRating === rating.value && { color: theme.primary, fontWeight: "700" }]}>
                      {rating.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }, [userRatings, theme, width, handleRating, ratingOptions]);

  if (loading) {
    return (
      <View style={[styles.centerContainer, { backgroundColor: theme.background, padding: Spacing.lg }]}>
        <View style={[styles.card, { backgroundColor: theme.surface, width: '100%', height: 500 }]}>
          <SkeletonLoader width="100%" height={300} borderRadius={0} />
          <View style={{ padding: Spacing.lg }}>
            <SkeletonLoader width="40%" height={20} style={{ marginBottom: Spacing.sm }} />
            <SkeletonLoader width="80%" height={30} style={{ marginBottom: Spacing.md }} />
            <View style={{ borderTopWidth: 1, borderTopColor: "rgba(0,0,0,0.05)", paddingTop: Spacing.md }}>
              <SkeletonLoader width="60%" height={20} style={{ marginBottom: Spacing.md, alignSelf: 'center' }} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <SkeletonLoader key={i} width={50} height={50} borderRadius={12} />
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.flex, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <View style={[styles.progressBarBg, { backgroundColor: theme.border }]}>
          <View style={[styles.progressBarFill, { width: `${progressPercentage}%`, backgroundColor: theme.primary }]} />
        </View>
        <Text style={[styles.progressText, { color: theme.textSecondary }]}>
          {currentFoodIndex + 1} / {foods.length}
        </Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={foods}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        windowSize={3}
        initialNumToRender={2}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.navBtn, currentFoodIndex === 0 && styles.disabledNav]}
          onPress={() => flatListRef.current?.scrollToIndex({ index: currentFoodIndex - 1, animated: true })}
          disabled={currentFoodIndex === 0}
        >
          <Ionicons name="arrow-back" size={20} color={theme.textMain} />
          <Text style={[styles.navBtnText, { color: theme.textMain }]}>{t("common.back")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navBtn}
          onPress={() => {
            if (currentFoodIndex < foods.length - 1) {
              flatListRef.current?.scrollToIndex({ index: currentFoodIndex + 1, animated: true });
            } else {
              onRatingComplete();
            }
          }}
        >
          <Text style={[styles.navBtnText, { color: theme.textMain }]}>
            {currentFoodIndex === foods.length - 1 ? t("common.finish") : t("common.skip")}
          </Text>
          <Ionicons name="arrow-forward" size={20} color={theme.textMain} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  centerContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
  },
  progressBarBg: {
    flex: 1,
    height: 6,
    borderRadius: BorderRadius.full,
    overflow: "hidden",
  },
  progressBarFill: { height: "100%", borderRadius: BorderRadius.full },
  progressText: {
    ...Typography.body.small,
    width: 45,
    textAlign: "right",
  },
  cardContainer: {
    padding: Spacing.md,
    justifyContent: "center",
  },
  card: {
    borderRadius: BorderRadius.extraLarge,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  foodImage: { width: "100%", backgroundColor: "#f0f0f0" },
  cardInfo: { padding: Spacing.lg },
  tagRow: { flexDirection: "row", gap: Spacing.xs, marginBottom: Spacing.sm },
  categoryTag: { paddingHorizontal: Spacing.sm, paddingVertical: 4, borderRadius: BorderRadius.default },
  categoryText: { ...Typography.body.small, fontWeight: "800" },
  foodName: { ...Typography.display.small, marginBottom: Spacing.md },
  ratingSection: { borderTopWidth: 1, borderTopColor: "rgba(0,0,0,0.05)", paddingTop: Spacing.md },
  ratingPrompt: { ...Typography.body.medium, marginBottom: Spacing.sm, textAlign: "center" },
  emojiGrid: { flexDirection: "row", justifyContent: "space-between", gap: Spacing.xs },
  emojiCard: { flex: 1, paddingVertical: Spacing.sm, alignItems: "center", borderRadius: BorderRadius.large, borderWidth: 1 },
  emojiText: { fontSize: 24, marginBottom: 4 },
  emojiLabel: { fontSize: 9, textAlign: "center" },
  loadingText: { ...Typography.body.large, marginTop: Spacing.md },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Spacing.lg,
    paddingBottom: Spacing.xl,
  },
  navBtn: { flexDirection: "row", alignItems: "center", gap: Spacing.xs },
  navBtnText: { ...Typography.heading.small },
  disabledNav: { opacity: 0.2 },
});

export default FoodRatingComponent;
