import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { getAllFoods, rateFood, getUserRatings } from '../database';
import { useAuth } from '../auth';

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

const FoodRatingComponent: React.FC<FoodRatingComponentProps> = ({ onRatingComplete }) => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0);
  const [userRating, setUserRating] = useState<number | null>(null);
  const { user } = useAuth();
  const [userRatings, setUserRatings] = useState<Record<number, number>>({});

  useEffect(() => {
    loadFoods();
    loadUserRatings();
  }, []);

  const loadFoods = async () => {
    try {
      const foodsData = await getAllFoods();
      setFoods(foodsData as Food[]);
    } catch (error) {
      console.error('Yemekler yüklenirken hata oluştu:', error);
      Alert.alert('Hata', 'Yemekler yüklenirken bir hata oluştu.');
    }
  };

  const loadUserRatings = async () => {
    if (user) {
      try {
        const ratings = await getUserRatings(user.id);
        const ratingsMap: Record<number, number> = {};
        (ratings as any[]).forEach(rating => {
          ratingsMap[rating.food_id] = rating.rating;
        });
        setUserRatings(ratingsMap);
      } catch (error) {
        console.error('Kullanıcı derecelendirmeleri yüklenirken hata oluştu:', error);
      }
    }
  };

  const handleRating = async (rating: number) => {
    if (!user) {
      Alert.alert('Hata', 'Lütfen önce giriş yapın.');
      return;
    }

    try {
      await rateFood(user.id, foods[currentFoodIndex].id, rating);
      setUserRating(rating);
      
      // Kullanıcı derecelendirmelerini güncelle
      const newRatings = { ...userRatings };
      newRatings[foods[currentFoodIndex].id] = rating;
      setUserRatings(newRatings);
      
      // Son yemeği derecelendirdiyse tamamlandı mesajı göster
      if (currentFoodIndex === foods.length - 1) {
        Alert.alert(
          'Tamamlandı!',
          'Tüm yemekleri derecelendirdiniz. Menü oluşturmak için menü sekmesine geçebilirsiniz.',
          [
            { text: 'Tamam', onPress: () => onRatingComplete() }
          ]
        );
      } else {
        // Sonraki yemeğe geç
        setTimeout(() => {
          setCurrentFoodIndex(prev => prev + 1);
          setUserRating(null);
        }, 500);
      }
    } catch (error) {
      console.error('Yemek derecelendirme sırasında hata oluştu:', error);
      Alert.alert('Hata', 'Yemek derecelendirme sırasında bir hata oluştu.');
    }
  };

  if (foods.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  if (currentFoodIndex >= foods.length) {
    return (
      <View style={styles.container}>
        <Text>Tüm yemekleri derecelendirdiniz!</Text>
        <TouchableOpacity style={styles.button} onPress={() => setCurrentFoodIndex(0)}>
          <Text style={styles.buttonText}>Baştan Başla</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentFood = foods[currentFoodIndex];
  const currentRating = userRatings[currentFood.id] || null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{currentFood.name}</Text>
      
      {currentFood.image_url ? (
        <Image source={{ uri: currentFood.image_url }} style={styles.image} />
      ) : (
        <View style={styles.placeholderImage}>
          <Text>Resim Yok</Text>
        </View>
      )}
      
      <Text style={styles.category}>{currentFood.category}</Text>
      
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Bu yemeği ne kadar seviyorsunuz?</Text>
        
        <View style={styles.emojiContainer}>
          {[
            { emoji: '😠', label: 'Hiç sevmiyorum', value: 1 },
            { emoji: '😟', label: 'Sevmiyorum', value: 2 },
            { emoji: '😐', label: 'Orta', value: 3 },
            { emoji: '😊', label: 'Seviyorum', value: 4 },
            { emoji: '😍', label: 'Çok seviyorum', value: 5 }
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.emojiButton,
                currentRating === item.value && styles.selectedEmoji
              ]}
              onPress={() => handleRating(item.value)}
            >
              <Text style={styles.emoji}>{item.emoji}</Text>
              <Text style={styles.emojiLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <Text style={styles.progressText}>
        {currentFoodIndex + 1} / {foods.length}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholderImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  category: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6c757d',
    marginBottom: 20,
  },
  ratingContainer: {
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  emojiButton: {
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  selectedEmoji: {
    backgroundColor: '#e7f5ff',
    borderColor: '#339af0',
  },
  emoji: {
    fontSize: 30,
    marginBottom: 5,
  },
  emojiLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  progressText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#6c757d',
  },
  button: {
    backgroundColor: '#0d6efd',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FoodRatingComponent;