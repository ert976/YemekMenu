import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useAuth } from "../auth";
import { Colors } from "../constants/Colors";
import { getAllFoods, getUserRatings, rateFood } from "../database";
import { useColorScheme } from "../hooks/use-color-scheme";

const { width } = Dimensions.get("window");

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
  const [foods, setFoods] = useState<Food[]>([]);
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [userRatings, setUserRatings] = useState<Record<number, number>>({});

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

  const handleRating = async (rating: number) => {
    if (!user || foods.length === 0) return;

    try {
      await rateFood(user.id, foods[currentFoodIndex].id, rating);

      const newRatings = { ...userRatings };
      newRatings[foods[currentFoodIndex].id] = rating;
      setUserRatings(newRatings);

      if (currentFoodIndex === foods.length - 1) {
        Alert.alert(
          "Harika!",
          "Tüm yemekleri derecelendirdin. Şimdi sana özel bir menü oluşturmaya ne dersin?",
          [{ text: "Hadi Bakalım", onPress: () => onRatingComplete() }],
        );
      } else {
        setTimeout(() => {
          setCurrentFoodIndex((prev) => prev + 1);
        }, 300);
      }
    } catch (error) {
      Alert.alert("Hata", "Derecelendirme kaydedilemedi.");
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={theme.tint} />
        <Text style={[styles.loadingText, { color: theme.text }]}>
          Lezzetler yükleniyor...
        </Text>
      </View>
    );
  }

  if (foods.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Ionicons name="alert-circle-outline" size={48} color={theme.icon} />
        <Text style={[styles.loadingText, { color: theme.text }]}>
          Yemek bulunamadı.
        </Text>
      </View>
    );
  }

  if (currentFoodIndex >= foods.length) {
    return (
      <View style={styles.centerContainer}>
        <Ionicons name="checkmark-circle" size={64} color={theme.success} />
        <Text style={[styles.completeTitle, { color: theme.text }]}>
          Hepsi Bu Kadar!
        </Text>
        <Text style={styles.completeSubtitle}>
          Tüm yemekleri derecelendirdin.
        </Text>
        <TouchableOpacity
          style={[styles.resetButton, { backgroundColor: theme.tint }]}
          onPress={() => setCurrentFoodIndex(0)}
        >
          <Text style={styles.resetButtonText}>
            Listeyi Baştan Gözden Geçir
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentFood = foods[currentFoodIndex];
  const currentRating = userRatings[currentFood.id] || null;
  const progress = (currentFoodIndex + 1) / foods.length;

  return (
    <View style={styles.flex}>
      <View style={styles.progressArea}>
        <View style={[styles.progressBarBg, { backgroundColor: theme.border }]}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${progress * 100}%`, backgroundColor: theme.tint },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {currentFoodIndex + 1} / {foods.length}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.card,
            { backgroundColor: theme.card, shadowColor: theme.text },
          ]}
        >
          <Image
            source={{
              uri:
                currentFood.image_url ||
                "https://via.placeholder.com/400x300?text=Yemek+Resmi",
            }}
            style={styles.foodImage}
            contentFit="cover"
            transition={300}
          />

          <View style={styles.cardInfo}>
            <View style={styles.tagRow}>
              <View
                style={[
                  styles.categoryTag,
                  { backgroundColor: theme.tint + "15" },
                ]}
              >
                <Text style={[styles.categoryText, { color: theme.tint }]}>
                  {currentFood.category.toUpperCase()}
                </Text>
              </View>
              {currentFood.is_vegetarian && (
                <View
                  style={[styles.categoryTag, { backgroundColor: "#4CAF5015" }]}
                >
                  <Text style={[styles.categoryText, { color: "#4CAF50" }]}>
                    VEJETARYEN
                  </Text>
                </View>
              )}
            </View>

            <Text style={[styles.foodName, { color: theme.text }]}>
              {currentFood.name}
            </Text>

            <View style={styles.ratingSection}>
              <Text style={[styles.ratingPrompt, { color: theme.text }]}>
                Bu lezzet sana ne hissettiriyor?
              </Text>

              <View style={styles.emojiGrid}>
                {[
                  { emoji: "🤢", value: 1, label: "Kalsın" },
                  { emoji: "😕", value: 2, label: "Belki" },
                  { emoji: "😐", value: 3, label: "Fena Değil" },
                  { emoji: "😋", value: 4, label: "Severim" },
                  { emoji: "😍", value: 5, label: "Bayılırım!" },
                ].map((item) => (
                  <TouchableOpacity
                    key={item.value}
                    style={[
                      styles.emojiCard,
                      {
                        backgroundColor: theme.background,
                        borderColor: theme.border,
                      },
                      currentRating === item.value && {
                        borderColor: theme.tint,
                        backgroundColor: theme.tint + "10",
                      },
                    ]}
                    onPress={() => handleRating(item.value)}
                  >
                    <Text style={styles.emojiText}>{item.emoji}</Text>
                    <Text
                      style={[
                        styles.emojiLabel,
                        { color: theme.text },
                        currentRating === item.value && {
                          color: theme.tint,
                          fontWeight: "700",
                        },
                      ]}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.navigationRow}>
          <TouchableOpacity
            style={[
              styles.navBtn,
              currentFoodIndex === 0 && styles.disabledNav,
            ]}
            onPress={() =>
              currentFoodIndex > 0 && setCurrentFoodIndex((prev) => prev - 1)
            }
            disabled={currentFoodIndex === 0}
          >
            <Ionicons
              name="arrow-back"
              size={20}
              color={currentFoodIndex === 0 ? theme.icon : theme.text}
            />
            <Text
              style={[
                styles.navBtnText,
                { color: currentFoodIndex === 0 ? theme.icon : theme.text },
              ]}
            >
              Geri
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navBtn}
            onPress={() => setCurrentFoodIndex((prev) => prev + 1)}
          >
            <Text style={[styles.navBtnText, { color: theme.text }]}>Atla</Text>
            <Ionicons name="arrow-forward" size={20} color={theme.text} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  progressArea: {
    paddingHorizontal: 25,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  progressBarBg: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 3,
  },
  progressText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#888",
    width: 45,
  },
  card: {
    borderRadius: 32,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  foodImage: {
    width: "100%",
    height: width * 0.75,
  },
  cardInfo: {
    padding: 24,
  },
  tagRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },
  categoryTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  foodName: {
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  ratingSection: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.05)",
    paddingTop: 20,
  },
  ratingPrompt: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 15,
    textAlign: "center",
    opacity: 0.7,
  },
  emojiGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  emojiCard: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 2,
  },
  emojiText: {
    fontSize: 24,
    marginBottom: 4,
  },
  emojiLabel: {
    fontSize: 10,
    textAlign: "center",
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "500",
  },
  completeTitle: {
    fontSize: 24,
    fontWeight: "800",
    marginTop: 20,
  },
  completeSubtitle: {
    color: "#888",
    marginTop: 8,
    fontSize: 16,
  },
  resetButton: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 16,
  },
  resetButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  navigationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 5,
  },
  navBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 10,
  },
  navBtnText: {
    fontSize: 15,
    fontWeight: "600",
  },
  disabledNav: {
    opacity: 0.3,
  },
});

export default FoodRatingComponent;
