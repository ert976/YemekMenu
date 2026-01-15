import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, FlatList } from 'react-native';
import { generateBalancedMenu, DietType, generateMenuSuggestions } from '@/mealPlanner';
import { useAuth } from '@/auth';
import { getMealPlans } from '@/database';

interface MealPlan {
  id: number;
  userId: number;
  meals: any[];
  dietPreference: DietType;
  createdAt: string;
}

export default function MenuScreen() {
  const { user } = useAuth();
  const [selectedDiet, setSelectedDiet] = useState<DietType>('normal');
  const [showHalalOnly, setShowHalalOnly] = useState(false);
  const [generatedMenu, setGeneratedMenu] = useState<any>(null);
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);
  const [suggestedFoods, setSuggestedFoods] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const dietOptions: { value: DietType; label: string }[] = [
    { value: 'normal', label: 'Normal' },
    { value: 'vegetarian', label: 'Vejetaryen' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'lowcarb', label: 'Düşük Karbonhidrat' },
    { value: 'glutenfree', label: 'Glutensiz' },
  ];

  useEffect(() => {
    if (user) {
      loadMealPlans();
      loadSuggestions();
    }
  }, [user]);

  const loadMealPlans = async () => {
    try {
      const plans: any = await getMealPlans(user?.id || 0);
      setMealPlans(plans);
    } catch (error) {
      console.error('Menü planları yüklenirken hata:', error);
    }
  };

  const loadSuggestions = async () => {
    if (user) {
      try {
        const suggestions = await generateMenuSuggestions(user.id, selectedDiet, showHalalOnly);
        setSuggestedFoods(suggestions);
      } catch (error) {
        console.error('Menü önerileri yüklenirken hata:', error);
      }
    }
  };

  const generateMenu = async () => {
    if (!user) {
      Alert.alert('Hata', 'Lütfen önce giriş yapın.');
      return;
    }

    setLoading(true);
    try {
      const menu = await generateBalancedMenu(user.id, selectedDiet, 7, showHalalOnly);
      setGeneratedMenu(menu);
      loadMealPlans(); // Yeni menüyü listelemek için planları yeniden yükle
      Alert.alert('Başarılı', 'Menü başarıyla oluşturuldu!');
    } catch (error) {
      console.error('Menü oluşturma hatası:', error);
      Alert.alert('Hata', 'Menü oluşturulurken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  const renderDietOption = ({ item }: { item: { value: DietType; label: string } }) => (
    <TouchableOpacity
      style={[
        styles.dietOption,
        selectedDiet === item.value && styles.selectedDietOption
      ]}
      onPress={() => setSelectedDiet(item.value)}
    >
      <Text
        style={[
          styles.dietOptionText,
          selectedDiet === item.value && styles.selectedDietOptionText
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Lütfen önce giriş yapın.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Menü Oluştur</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Diyet Seçeneği</Text>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setShowHalalOnly(!showHalalOnly)}
          >
            <Text style={[styles.checkboxText, showHalalOnly && styles.checkboxTextChecked]}>
              {showHalalOnly ? '☑' : '☐'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Sadece Helal Yemekler</Text>
        </View>
        <FlatList
          horizontal
          data={dietOptions}
          renderItem={renderDietOption}
          keyExtractor={item => item.value}
          showsHorizontalScrollIndicator={false}
          style={styles.dietOptionsList}
        />
      </View>
      
      <TouchableOpacity 
        style={styles.generateButton} 
        onPress={generateMenu}
        disabled={loading}
      >
        <Text style={styles.generateButtonText}>
          {loading ? 'Oluşturuluyor...' : 'Dengeli Menü Oluştur'}
        </Text>
      </TouchableOpacity>
      
      {generatedMenu && (
        <View style={styles.menuPreview}>
          <Text style={styles.sectionTitle}>Oluşturulan Menü</Text>
          {generatedMenu.meals.map((day: any, index: number) => (
            <View key={index} style={styles.dayContainer}>
              <Text style={styles.dayTitle}>Gün {day.day}</Text>
              <View style={styles.mealContainer}>
                <Text style={styles.mealTitle}>Kahvaltı: {day.breakfast ? day.breakfast.name : 'Veri Yok'}</Text>
                <Text style={styles.mealTitle}>Öğle: {day.lunch ? day.lunch.name : 'Veri Yok'}</Text>
                <Text style={styles.mealTitle}>Akşam: {day.dinner ? day.dinner.name : 'Veri Yok'}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Önerilen Yemekler</Text>
        <View style={styles.suggestedFoodsContainer}>
          {suggestedFoods.slice(0, 5).map((food, index) => (
            <View key={index} style={styles.foodSuggestion}>
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.foodRating}>Puan: {food.userRating}/5</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Geçmiş Menüler</Text>
        {mealPlans.length > 0 ? (
          mealPlans.map((plan, index) => (
            <View key={plan.id} style={styles.planItem}>
              <Text>Diyet: {plan.dietPreference}</Text>
              <Text>Tarih: {new Date(plan.createdAt).toLocaleDateString('tr-TR')}</Text>
            </View>
          ))
        ) : (
          <Text>Henüz menü oluşturulmamış.</Text>
        )}
      </View>
    </ScrollView>
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
  section: {
    padding: 15,
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  dietOptionsList: {
    marginBottom: 10,
  },
  dietOption: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#e9ecef',
  },
  selectedDietOption: {
    backgroundColor: '#0d6efd',
  },
  dietOptionText: {
    color: '#495057',
  },
  selectedDietOptionText: {
    color: 'white',
  },
  generateButton: {
    backgroundColor: '#20c997',
    padding: 15,
    margin: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  generateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  menuPreview: {
    backgroundColor: '#ffffff',
    margin: 10,
    borderRadius: 8,
    padding: 15,
  },
  dayContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    paddingBottom: 10,
  },
  dayTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  mealContainer: {
    marginLeft: 10,
  },
  mealTitle: {
    fontSize: 14,
    marginBottom: 3,
    color: '#6c757d',
  },
  suggestedFoodsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  foodSuggestion: {
    backgroundColor: '#e7f5ff',
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  foodName: {
    fontWeight: '600',
  },
  foodRating: {
    fontSize: 12,
    color: '#6c757d',
  },
  planItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
  },
  checkbox: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#dee2e6',
    backgroundColor: '#f8f9fa',
  },
  checkboxText: {
    fontSize: 18,
  },
  checkboxTextChecked: {
    color: '#20c997',
  },
  checkboxLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#495057',
  },
});