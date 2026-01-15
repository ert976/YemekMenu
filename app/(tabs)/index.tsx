import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FoodRatingComponent from '@/components/FoodRatingComponent';
import { useAuth } from '@/auth';

export default function RateFoodScreen() {
  const { user } = useAuth();

  const handleRatingComplete = () => {
    // Derecelendirme tamamlandığında yapılacak işlemler
    console.log('Derecelendirme tamamlandı');
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Lütfen önce giriş yapın.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Yemek Derecelendirme</Text>
      <Text style={styles.subHeader}>Yemekleri beğeninize göre derecelendirin</Text>
      <FoodRatingComponent onRatingComplete={handleRatingComplete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#e9ecef',
    color: '#6c757d',
  },
});