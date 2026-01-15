import { UserRating } from '../types';

// Derecelendirme işlemleri
export const getUserRatings = async (userId: number): Promise<UserRating[]> => {
  try {
    // Mock derecelendirme verileri
    return [
      { id: 1, user_id: userId, food_id: 1, rating: 5 },
      { id: 2, user_id: userId, food_id: 2, rating: 4 },
      { id: 3, user_id: userId, food_id: 3, rating: 3 }
    ];
  } catch (error) {
    console.error('Derecelendirmeleri getirme hatası:', error);
    return [];
  }
};

export const rateFood = async (userId: number, foodId: number, rating: number): Promise<boolean> => {
  try {
    console.log(`Yemek derecelendirildi: User ${userId}, Food ${foodId}, Rating ${rating}`);
    return true;
  } catch (error) {
    console.error('Yemek derecelendirme hatası:', error);
    return false;
  }
};

export const updateRating = async (ratingId: number, newRating: number): Promise<boolean> => {
  try {
    console.log(`Derecelendirme güncellendi: ${ratingId}, New Rating ${newRating}`);
    return true;
  } catch (error) {
    console.error('Derecelendirme güncelleme hatası:', error);
    return false;
  }
};

export const deleteRating = async (ratingId: number): Promise<boolean> => {
  try {
    console.log(`Derecelendirme silindi: ${ratingId}`);
    return true;
  } catch (error) {
    console.error('Derecelendirme silme hatası:', error);
    return false;
  }
};

export const getFoodRatings = async (foodId: number): Promise<UserRating[]> => {
  try {
    // Mock yemek derecelendirmeleri
    return [
      { id: 1, user_id: 1, food_id: foodId, rating: 5 },
      { id: 2, user_id: 2, food_id: foodId, rating: 4 },
      { id: 3, user_id: 3, food_id: foodId, rating: 3 }
    ];
  } catch (error) {
    console.error('Yemek derecelendirmelerini getirme hatası:', error);
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
    console.error('Ortalama derecelendirme hesaplama hatası:', error);
    return 0;
  }
};
