import { UserRating } from "../types";
import { appState, saveState } from "./state";
import { saveUserPreference } from "./foods";
import { addDemoRating, getDemoSessionData } from "../utils/session-utils";

// Derecelendirme işlemleri
export const getUserRatings = async (userId: number): Promise<UserRating[]> => {
  try {
    // Demo session kontrolü (negative ID)
    if (userId < 0) {
      const sessionData = await getDemoSessionData();
      if (sessionData) {
        return sessionData.ratings.map((r, idx) => ({
          id: idx + 1,
          user_id: userId,
          food_id: r.food_id,
          rating: r.rating,
        }));
      }
      return [];
    }
    
    // Gerçek kullanıcı için appState'ten döndür
    return appState.user_ratings.filter((r) => r.user_id === userId);
  } catch (error) {
    console.error("Derecelendirmeleri getirme hatası:", error);
    return [];
  }
};

export const rateFood = async (
  userId: number,
  foodId: number,
  rating: number,
): Promise<boolean> => {
  try {
    console.log(
      `Yemek derecelendirildi: User ${userId}, Food ${foodId}, Rating ${rating}`,
    );

    // Demo session için
    if (userId < 0) {
      await addDemoRating(foodId, rating);
      return true;
    }

    // Gerçek kullanıcı için
    // appState'e ekle/güncelle
    const existingIndex = appState.user_ratings.findIndex(
      (r) => r.user_id === userId && r.food_id === foodId
    );

    if (existingIndex >= 0) {
      appState.user_ratings[existingIndex].rating = rating;
    } else {
      appState.user_ratings.push({
        id: appState.user_ratings.length + 1,
        user_id: userId,
        food_id: foodId,
        rating,
      });
    }

    // 5-point scale to binary preference mapping
    if (rating >= 4) {
      await saveUserPreference(userId, foodId, "like");
    } else if (rating <= 2) {
      await saveUserPreference(userId, foodId, "dislike");
    }
    // Rating 3 is neutral, doesn't affect preferences

    await saveState();
    return true;
  } catch (error) {
    console.error("Yemek derecelendirme hatası:", error);
    return false;
  }
};

export const updateRating = async (
  ratingId: number,
  newRating: number,
): Promise<boolean> => {
  try {
    console.log(
      `Derecelendirme güncellendi: ${ratingId}, New Rating ${newRating}`,
    );
    return true;
  } catch (error) {
    console.error("Derecelendirme güncelleme hatası:", error);
    return false;
  }
};

export const deleteRating = async (ratingId: number): Promise<boolean> => {
  try {
    console.log(`Derecelendirme silindi: ${ratingId}`);
    return true;
  } catch (error) {
    console.error("Derecelendirme silme hatası:", error);
    return false;
  }
};

export const getFoodRatings = async (foodId: number): Promise<UserRating[]> => {
  try {
    // Mock yemek derecelendirmeleri
    return [
      { id: 1, user_id: 1, food_id: foodId, rating: 5 },
      { id: 2, user_id: 2, food_id: foodId, rating: 4 },
      { id: 3, user_id: 3, food_id: foodId, rating: 3 },
    ];
  } catch (error) {
    console.error("Yemek derecelendirmelerini getirme hatası:", error);
    return [];
  }
};

export const getAverageRating = async (foodId: number): Promise<number> => {
  try {
    const ratings = await getFoodRatings(foodId);
    if (ratings.length === 0) return 0;

    const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    return sum / ratings.length;
  } catch (error) {
    console.error("Ortalama derecelendirme hesaplama hatası:", error);
    return 0;
  }
};
