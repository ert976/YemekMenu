import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Image as ExpoImage } from "expo-image";
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { useTranslation } from "react-i18next";
import {
    ActivityIndicator,
    FlatList,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewToken,
    useWindowDimensions,
} from "react-native";
import { useAuth } from "../auth";
import { BorderRadius, Colors, Spacing, Typography } from "../constants/theme";
import { getAllFoods, getUserRatings, rateFood } from "../database";
import { useColorScheme } from "../hooks/use-color-scheme";

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
  const { width: windowWidth } = useWindowDimensions();
  const width = windowWidth > 0 ? windowWidth : 375;
  const { t } = useTranslation();
  const [foods, setFoods] = useState<Food[]>([]);
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [userRatings, setUserRatings] = useState<Record<number, number>>({});
  const flatListRef = useRef<FlatList>(null);
  const webScrollRef = useRef<ScrollView>(null);

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: width,
      offset: width * index,
      index,
    }),
    [width],
  );

  useEffect(() => {
    loadInitialData();
  }, [user?.id]);

  const loadInitialData = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));
      const currentRatings = await loadUserRatings();
      await loadFoods(currentRatings);
    } catch (err) {
      console.error("[FoodRatingComponent] Critical load error:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadFoods = async (currentRatings: Record<number, number> = {}) => {
    try {
      const allFoods = await getAllFoods();
      if (!allFoods || allFoods.length === 0) return;

      const ratedIds = Object.keys(currentRatings).map(Number);
      const categoryList = [...new Set(allFoods.map((f) => f.category))].filter(
        Boolean,
      );
      let balancedPool: Food[] = [];

      categoryList.forEach((cat) => {
        const catFoods = allFoods.filter((f) => f.category === cat);
        const unratedInCat = catFoods.filter((f) => !ratedIds.includes(f.id));
        const ratedInCat = catFoods.filter((f) => ratedIds.includes(f.id));
        const shuffledUnrated = [...unratedInCat].sort(
          () => 0.5 - Math.random(),
        );
        const shuffledRated = [...ratedInCat].sort(() => 0.5 - Math.random());
        const combined = [...shuffledUnrated, ...shuffledRated].slice(0, 20);
        balancedPool.push(...combined);
      });

      if (balancedPool.length === 0) balancedPool = allFoods.slice(0, 50);
      const finalBatch = balancedPool.sort(() => 0.5 - Math.random());
      setFoods(finalBatch as Food[]);
    } catch (error) {
      console.error("Yemekler yüklenirken hata oluştu:", error);
    }
  };

  const loadUserRatings = async (): Promise<Record<number, number>> => {
    if (user) {
      try {
        const ratings = await getUserRatings(user.id);
        const ratingsMap: Record<number, number> = {};
        (ratings as any[]).forEach((rating) => {
          ratingsMap[rating.food_id] = rating.rating;
        });
        setUserRatings(ratingsMap);
        return ratingsMap;
      } catch (error) {
        console.error(
          "Kullanıcı derecelendirmeleri yüklenirken hata oluştu:",
          error,
        );
      }
    }
    return {};
  };

  const scrollWebTo = (index: number) => {
    if (Platform.OS === "web") {
      const scrollX = index * width;
      webScrollRef.current?.scrollTo({ x: scrollX, animated: true });
    } else {
      flatListRef.current?.scrollToIndex({ index, animated: true });
    }
  };

  const handleRating = useCallback(
    async (foodId: number, rating: number) => {
      if (!user) return;
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      try {
        await rateFood(user.id, foodId, rating);
        const newRatings = { ...userRatings };
        newRatings[foodId] = rating;
        setUserRatings(newRatings);
        setTimeout(() => {
          if (currentFoodIndex < foods.length - 1) {
            scrollWebTo(currentFoodIndex + 1);
          }
        }, 300);
      } catch (error) {
        console.error("Derecelendirme kaydedilemedi:", error);
      }
    },
    [user, userRatings, currentFoodIndex, foods.length, width],
  );

  const ratingOptions = useMemo(
    () => [
      { emoji: "🤮", value: 1, label: "Hiç Sevmem" },
      { emoji: "😕", value: 2, label: "Pek Sevmem" },
      { emoji: "😐", value: 3, label: "Fark Etmez" },
      { emoji: "😋", value: 4, label: "Severim" },
      { emoji: "😍", value: 5, label: "Çok Severim" },
    ],
    [],
  );

  const progressPercentage = useMemo(() => {
    if (foods.length === 0) return 0;
    return ((currentFoodIndex + 1) / foods.length) * 100;
  }, [currentFoodIndex, foods.length]);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentFoodIndex(viewableItems[0].index ?? 0);
      }
    },
  ).current;

  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const getSafeImageSource = (item: Food) => {
    // Sadece orijinal resmi kullan, yedek resim sistemini devre dışı bırak
    console.log(
      `[FoodRating] 📸 Using ORIGINAL for: ${item.name} - ${item.image_url}`,
    );
    return { uri: item.image_url };
  };

  const renderFoodItem = useCallback(
    ({ item, index }: { item: Food; index: number }) => {
      const currentRating = userRatings[item.id] || null;
      return (
        <View style={[styles.cardContainer, { width: width }]}>
          <View style={[styles.card, { backgroundColor: theme.surface }]}>
            <View
              style={[
                styles.foodImageContainer,
                { height: width * 0.7, backgroundColor: theme.border + "20" },
              ]}
            >
              <ExpoImage
                source={getSafeImageSource(item)}
                style={styles.foodImageAbsolute}
                contentFit="cover"
                transition={300}
                cachePolicy="memory-disk"
                onLoad={() => {
                  console.log(
                    `[LazyImage] ✅ SUCCESS: ${item.name} - ${item.image_url}`,
                  );
                }}
                onError={() => {
                  console.log(
                    `[LazyImage] ❌ ERROR: ${item.name} - ${item.image_url}`,
                  );
                  if (!failedImages[item.id]) {
                    setFailedImages((prev) => ({ ...prev, [item.id]: true }));
                  }
                }}
              />
              {/* Report Buttons Overlay */}
              <View
                style={{
                  flexDirection: "row",
                  position: "absolute",
                  top: 10,
                  left: 10,
                  zIndex: 9999,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(255,0,0,0.8)",
                    padding: 8,
                    borderRadius: 6,
                    marginRight: 8,
                  }}
                  onPress={() => {
                    fetch("/report-image", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        id: item.id,
                        name: item.name,
                        issue: "missing",
                      }),
                    }).then(() => alert("Reported: Missing"));
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 12, fontWeight: "bold" }}
                  >
                    📷 YOK
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(255,165,0,0.8)",
                    padding: 8,
                    borderRadius: 6,
                  }}
                  onPress={() => {
                    fetch("/report-image", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        id: item.id,
                        name: item.name,
                        issue: "wrong",
                      }),
                    }).then(() => alert("Reported: Wrong"));
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 12, fontWeight: "bold" }}
                  >
                    ⚠️ YANLIŞ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardInfo}>
              <View style={styles.tagRow}>
                <View
                  style={[
                    styles.categoryTag,
                    { backgroundColor: theme.primary + "15" },
                  ]}
                >
                  <Text style={[styles.categoryText, { color: theme.primary }]}>
                    {(item.category || "").toUpperCase()}
                  </Text>
                </View>
                {item.is_vegetarian && (
                  <View
                    style={[
                      styles.categoryTag,
                      { backgroundColor: "#4CAF5015" },
                    ]}
                  >
                    <Text style={[styles.categoryText, { color: "#4CAF50" }]}>
                      VEJETARYEN
                    </Text>
                  </View>
                )}
              </View>
              <Text style={[styles.foodName, { color: theme.textMain }]}>
                {item.name}
              </Text>
              <View style={styles.ratingSection}>
                <Text
                  style={[styles.ratingPrompt, { color: theme.textSecondary }]}
                >
                  Bu yemeği ne kadar seviyorsunuz?
                </Text>
                <View style={styles.emojiGrid}>
                  {ratingOptions.map((rating) => (
                    <TouchableOpacity
                      key={rating.value}
                      style={[
                        styles.emojiCard,
                        {
                          backgroundColor: theme.background,
                          borderColor: theme.border,
                        },
                        currentRating === rating.value && {
                          borderColor: theme.primary,
                          backgroundColor: theme.primary + "10",
                        },
                      ]}
                      onPress={() => handleRating(item.id, rating.value)}
                    >
                      <Text style={styles.emojiText}>{rating.emoji}</Text>
                      <Text
                        style={[
                          styles.emojiLabel,
                          { color: theme.textMain },
                          currentRating === rating.value && {
                            color: theme.primary,
                            fontWeight: "700",
                          },
                        ]}
                      >
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
    },
    [userRatings, theme, width, handleRating, ratingOptions],
  );

  if (loading) {
    return (
      <View
        style={[styles.centerContainer, { backgroundColor: theme.background }]}
      >
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={styles.header}>
        <View style={[styles.progressBarBg, { backgroundColor: theme.border }]}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${progressPercentage}%`,
                backgroundColor: theme.primary,
              },
            ]}
          />
        </View>
        <Text style={[styles.progressText, { color: theme.textSecondary }]}>
          {currentFoodIndex + 1} / {foods.length}
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        {Platform.OS === "web" ? (
          <ScrollView
            ref={webScrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => {
              const x = e.nativeEvent.contentOffset.x;
              const newIndex = Math.round(x / width);
              if (newIndex !== currentFoodIndex) setCurrentFoodIndex(newIndex);
            }}
            scrollEventThrottle={16}
          >
            {foods.map((item) => (
              <View
                key={`web-card-${item.id}`}
                style={{
                  width: width,
                  padding: Spacing.md,
                  alignItems: "center",
                }}
              >
                <View
                  style={[
                    styles.card,
                    { backgroundColor: theme.surface, minHeight: 600 },
                  ]}
                >
                  <View style={styles.cardInfo}>
                    <View style={styles.tagRow}>
                      <View
                        style={[
                          styles.categoryTag,
                          { backgroundColor: theme.primary + "15" },
                        ]}
                      >
                        <Text
                          style={[
                            styles.categoryText,
                            { color: theme.primary },
                          ]}
                        >
                          {(item.category || "").toUpperCase()}
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={[
                        styles.foodName,
                        { color: theme.textMain, fontSize: 24 },
                      ]}
                    >
                      {item.name}
                    </Text>
                  </View>

                  <View style={styles.foodImageContainer}>
                    <ExpoImage
                      source={getSafeImageSource(item)}
                      style={styles.foodImageAbsolute}
                      contentFit="cover"
                      transition={200}
                      onLoad={() => {
                        console.log(
                          `[LazyImage] ✅ SUCCESS: ${item.name} - ${item.image_url}`,
                        );
                      }}
                      onError={() => {
                        console.log(
                          `[LazyImage] ❌ ERROR: ${item.name} - ${item.image_url}`,
                        );
                        if (!failedImages[item.id]) {
                          setFailedImages((prev) => ({
                            ...prev,
                            [item.id]: true,
                          }));
                        }
                      }}
                    />
                    {/* Report Buttons Overlay (Web) */}
                    <View
                      style={{
                        flexDirection: "row",
                        position: "absolute",
                        top: 10,
                        left: 10,
                        zIndex: 9999,
                      }}
                    >
                      <TouchableOpacity
                        style={
                          {
                            backgroundColor: "rgba(255,0,0,0.8)",
                            padding: 8,
                            borderRadius: 6,
                            marginRight: 8,
                            cursor: "pointer",
                          } as any
                        }
                        onPress={() => {
                          fetch("/report-image", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              id: item.id,
                              name: item.name,
                              issue: "missing",
                            }),
                          }).then(() => alert("Reported: Missing"));
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 12,
                            fontWeight: "bold",
                          }}
                        >
                          📷 YOK
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={
                          {
                            backgroundColor: "rgba(255,165,0,0.8)",
                            padding: 8,
                            borderRadius: 6,
                            cursor: "pointer",
                          } as any
                        }
                        onPress={() => {
                          fetch("/report-image", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              id: item.id,
                              name: item.name,
                              issue: "wrong",
                            }),
                          }).then(() => alert("Reported: Wrong"));
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 12,
                            fontWeight: "bold",
                          }}
                        >
                          ⚠️ YANLIŞ
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{ padding: Spacing.md }}>
                    <View style={styles.emojiGrid}>
                      {ratingOptions.map((opt) => (
                        <TouchableOpacity
                          key={opt.value}
                          onPress={() => handleRating(item.id, opt.value)}
                          style={[
                            styles.emojiCard,
                            {
                              backgroundColor: theme.background,
                              borderColor: theme.border,
                            },
                            userRatings[item.id] === opt.value && {
                              borderColor: theme.primary,
                              backgroundColor: theme.primary + "10",
                            },
                          ]}
                        >
                          <Text style={styles.emojiText}>{opt.emoji}</Text>
                          <Text style={styles.emojiLabel}>{opt.label}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 30,
                      }}
                    >
                      <TouchableOpacity
                        style={[
                          styles.webNavBtn,
                          currentFoodIndex === 0 && { opacity: 0 },
                        ]}
                        onPress={() => scrollWebTo(currentFoodIndex - 1)}
                        disabled={currentFoodIndex === 0}
                      >
                        <Ionicons
                          name="arrow-back-circle"
                          size={44}
                          color={theme.primary}
                        />
                        <Text style={styles.webNavText}>Geri</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.webNavBtn}
                        onPress={() => {
                          if (currentFoodIndex < foods.length - 1) {
                            scrollWebTo(currentFoodIndex + 1);
                          } else {
                            onRatingComplete();
                          }
                        }}
                      >
                        <Text style={styles.webNavText}>
                          {currentFoodIndex === foods.length - 1
                            ? "Bitir"
                            : "Atla"}
                        </Text>
                        <Ionicons
                          name="arrow-forward-circle"
                          size={44}
                          color={theme.primary}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        ) : (
          <FlatList
            ref={flatListRef}
            data={foods}
            renderItem={renderFoodItem}
            keyExtractor={(item) => `f-${item.id}`}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            getItemLayout={getItemLayout}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  progressText: { ...Typography.body.small, width: 45, textAlign: "right" },
  cardContainer: {
    padding: Spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    maxWidth: 450,
    borderRadius: BorderRadius.extraLarge,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
  },
  foodImageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#f8f8f8",
  },
  foodImageAbsolute: { width: "100%", height: "100%" },
  cardInfo: { padding: Spacing.lg },
  tagRow: { flexDirection: "row", gap: Spacing.xs, marginBottom: Spacing.sm },
  categoryTag: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.default,
  },
  categoryText: { ...Typography.body.small, fontWeight: "800" },
  foodName: { ...Typography.display.small, marginBottom: Spacing.md },
  ratingSection: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.05)",
    paddingTop: Spacing.md,
  },
  ratingPrompt: {
    ...Typography.body.medium,
    marginBottom: Spacing.sm,
    textAlign: "center",
  },
  emojiGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Spacing.xs,
  },
  emojiCard: {
    flex: 1,
    paddingVertical: Spacing.sm,
    alignItems: "center",
    borderRadius: BorderRadius.large,
    borderWidth: 1,
  },
  emojiText: { fontSize: 24, marginBottom: 4 },
  emojiLabel: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 4,
    fontWeight: "500",
  },
  webNavBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 10,
    borderRadius: 12,
  },
  webNavText: { fontSize: 16, fontWeight: "600" },
});

export default FoodRatingComponent;
