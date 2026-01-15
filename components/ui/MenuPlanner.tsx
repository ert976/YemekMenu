import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BorderRadius, Colors, Spacing, Typography } from '../../constants/theme';
import { useMealPlanner } from '../../mealPlanner';
import { DailyMeal, DietType } from '../../types';
import { handleApiError, withErrorHandling } from '../../utils/errorHandler';

interface MenuPlannerProps {
  onMenuCreated?: (menuId: number) => void;
}

export const MenuPlanner: React.FC<MenuPlannerProps> = ({
  onMenuCreated
}) => {
  const [dietPreference, setDietPreference] = useState<DietType>('normal');
  const [showHalalOnly, setShowHalalOnly] = useState(false);
  const [days, setDays] = useState(7);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMenu, setGeneratedMenu] = useState<DailyMeal[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const { createMealPlan, getSuggestions } = useMealPlanner();

  const dietOptions: { value: DietType; label: string; description: string; icon: string }[] = [
    { value: 'normal', label: 'Normal', description: 'Tüm yemekler', icon: '🍽️' },
    { value: 'vegetarian', label: 'Vejetaryen', description: 'Et içermeyen', icon: '🥗' },
    { value: 'vegan', label: 'Vegan', description: 'Hayvansal ürün içermeyen', icon: '🌱' },
    { value: 'lowcarb', label: 'Düşük Karbonhidrat', description: 'Az karbonhidrat', icon: '🥩' },
    { value: 'glutenfree', label: 'Glütensiz', description: 'Glüten içermeyen', icon: '🌾' }
  ];

  const handleGenerateMenu = async () => {
    setIsGenerating(true);
    
    try {
      await withErrorHandling(
        async () => {
          const menuPlan = await createMealPlan(dietPreference, days, showHalalOnly);
          const meals = JSON.parse(menuPlan.plan_data || '[]');
          setGeneratedMenu(meals);
          
          if (onMenuCreated) {
            onMenuCreated(menuPlan.id);
          }
        },
        'MenuPlanner.handleGenerateMenu'
      );
    } catch (error) {
      const appError = handleApiError(error);
      Alert.alert('Menü Oluşturma Hatası', appError.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGetSuggestions = async () => {
    setRefreshing(true);
    
    try {
      await withErrorHandling(
        async () => {
          const suggestions = await getSuggestions(dietPreference, showHalalOnly);
          // İlk öneriyi kullan
          if (suggestions.length > 0) {
            setGeneratedMenu(suggestions[0].meals);
          }
        },
        'MenuPlanner.handleGetSuggestions'
      );
    } catch (error) {
      const appError = handleApiError(error);
      Alert.alert('Öneri Alma Hatası', appError.message);
    } finally {
      setRefreshing(false);
    }
  };

  const renderMealCard = (meal: DailyMeal, day: number) => {
    const mealTypes = [
      { key: 'breakfast', label: 'Kahvaltı', icon: '🍳' },
      { key: 'lunch', label: 'Öğle Yemeği', icon: '🥗' },
      { key: 'dinner', label: 'Akşam Yemeği', icon: '🍽️' },
      { key: 'snack', label: 'Ara Öğün', icon: '🍎' }
    ];

    return (
      <View key={day} style={styles.dayContainer}>
        <View style={styles.dayHeader}>
          <Text style={styles.dayTitle}>Gün {day}</Text>
          <Text style={styles.dayDate}>
            {new Date(Date.now() + (day - 1) * 24 * 60 * 60 * 1000).toLocaleDateString('tr-TR', {
              weekday: 'long',
              day: 'numeric',
              month: 'short'
            })}
          </Text>
        </View>

        <View style={styles.mealsContainer}>
          {mealTypes.map((mealType) => {
            const mealItem = meal[mealType.key as keyof DailyMeal];
            
            return (
              <View key={mealType.key} style={styles.mealItem}>
                <View style={styles.mealHeader}>
                  <Text style={styles.mealIcon}>{mealType.icon}</Text>
                  <Text style={styles.mealLabel}>{mealType.label}</Text>
                </View>
                
                {mealItem ? (
                  <View style={styles.mealContent}>
                    <Text style={styles.mealName}>{mealItem.name}</Text>
                    <Text style={styles.mealCategory}>{mealItem.category}</Text>
                  </View>
                ) : (
                  <View style={styles.emptyMeal}>
                    <Text style={styles.emptyMealText}>Seçilmedi</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Menü Planlayıcı</Text>
        <Text style={styles.subtitle}>Kişisel menünüzü oluşturun</Text>
      </View>

      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleGetSuggestions} />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* Settings Section */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Ayarlar</Text>
          
          {/* Diet Preference */}
          <View style={styles.settingGroup}>
            <Text style={styles.settingLabel}>Diyet Tercihi</Text>
            <View style={styles.dietGrid}>
              {dietOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.dietCard,
                    dietPreference === option.value && styles.dietCardSelected
                  ]}
                  onPress={() => setDietPreference(option.value)}
                >
                  <Text style={styles.dietIcon}>{option.icon}</Text>
                  <Text style={[
                    styles.dietOptionText,
                    dietPreference === option.value && styles.dietOptionTextSelected
                  ]}>
                    {option.label}
                  </Text>
                  <Text style={styles.dietOptionDescription}>
                    {option.description}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Halal Only */}
          <View style={styles.settingGroup}>
            <View style={styles.switchContainer}>
              <Text style={styles.settingLabel}>Sadece Helal Yemekler</Text>
              <Switch
                value={showHalalOnly}
                onValueChange={setShowHalalOnly}
                trackColor={{ false: Colors.light.border, true: Colors.light.primary }}
                thumbColor={Colors.light.surface}
              />
            </View>
          </View>

          {/* Days */}
          <View style={styles.settingGroup}>
            <Text style={styles.settingLabel}>Menü Süresi: {days} gün</Text>
            <View style={styles.daysSelector}>
              {[3, 5, 7, 14, 30].map((dayCount) => (
                <TouchableOpacity
                  key={dayCount}
                  style={[
                    styles.dayButton,
                    days === dayCount && styles.dayButtonSelected
                  ]}
                  onPress={() => setDays(dayCount)}
                >
                  <Text style={[
                    styles.dayButtonText,
                    days === dayCount && styles.dayButtonTextSelected
                  ]}>
                    {dayCount}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Generate Button */}
        <TouchableOpacity
          style={[styles.generateButton, isGenerating && styles.generateButtonDisabled]}
          onPress={handleGenerateMenu}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <ActivityIndicator color={Colors.light.surface} size="small" />
          ) : (
            <Text style={styles.generateButtonText}>Menü Oluştur</Text>
          )}
        </TouchableOpacity>

        {/* Generated Menu */}
        {generatedMenu.length > 0 && (
          <View style={styles.menuSection}>
            <Text style={styles.sectionTitle}>Oluşturulan Menü</Text>
            {generatedMenu.map((day, index) => renderMealCard(day, index + 1))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    padding: Spacing.lg,
    backgroundColor: Colors.light.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  title: {
    ...Typography.display.medium,
    color: Colors.light.textMain,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    ...Typography.body.medium,
    color: Colors.light.textSecondary,
  },
  content: {
    flex: 1,
    padding: Spacing.lg,
  },
  settingsSection: {
    backgroundColor: Colors.light.surface,
    borderRadius: BorderRadius.large,
    padding: Spacing.lg,
    marginBottom: Spacing.lg,
    shadowColor: Colors.light.textMain,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    ...Typography.heading.large,
    color: Colors.light.textMain,
    marginBottom: Spacing.md,
  },
  settingGroup: {
    marginBottom: Spacing.lg,
  },
  settingLabel: {
    ...Typography.heading.medium,
    color: Colors.light.textMain,
    marginBottom: Spacing.sm,
  },
  dietGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  dietCard: {
    width: '48%',
    backgroundColor: Colors.light.background,
    borderRadius: BorderRadius.default,
    padding: Spacing.sm,
    borderWidth: 1,
    borderColor: Colors.light.border,
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  dietCardSelected: {
    borderColor: Colors.light.primary,
    backgroundColor: Colors.light.surface,
  },
  dietIcon: {
    fontSize: 24,
    marginBottom: Spacing.xs,
  },
  dietOptionText: {
    ...Typography.heading.small,
    color: Colors.light.textMain,
    textAlign: 'center',
  },
  dietOptionTextSelected: {
    color: Colors.light.primary,
  },
  dietOptionDescription: {
    ...Typography.body.small,
    color: Colors.light.textSecondary,
    textAlign: 'center',
    marginTop: Spacing.xs,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  daysSelector: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  dayButton: {
    flex: 1,
    padding: Spacing.sm,
    borderRadius: BorderRadius.default,
    borderWidth: 1,
    borderColor: Colors.light.border,
    backgroundColor: Colors.light.surface,
    alignItems: 'center',
  },
  dayButtonSelected: {
    borderColor: Colors.light.primary,
    backgroundColor: Colors.light.surface,
  },
  dayButtonText: {
    ...Typography.body.medium,
    color: Colors.light.textMain,
  },
  dayButtonTextSelected: {
    color: Colors.light.primary,
  },
  generateButton: {
    backgroundColor: Colors.light.primary,
    borderRadius: BorderRadius.large,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    marginBottom: Spacing.lg,
    shadowColor: Colors.light.textMain,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  generateButtonDisabled: {
    backgroundColor: Colors.light.textSecondary,
  },
  generateButtonText: {
    color: Colors.light.surface,
    ...Typography.heading.medium,
  },
  menuSection: {
    marginBottom: Spacing.lg,
  },
  dayContainer: {
    backgroundColor: Colors.light.surface,
    borderRadius: BorderRadius.large,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    shadowColor: Colors.light.textMain,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    paddingBottom: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.background,
  },
  dayTitle: {
    ...Typography.heading.medium,
    color: Colors.light.textMain,
  },
  dayDate: {
    ...Typography.body.small,
    color: Colors.light.textSecondary,
  },
  mealsContainer: {
    gap: Spacing.sm,
  },
  mealItem: {
    backgroundColor: Colors.light.background,
    borderRadius: BorderRadius.default,
    padding: Spacing.sm,
  },
  mealHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  mealIcon: {
    fontSize: 16,
    marginRight: Spacing.sm,
  },
  mealLabel: {
    ...Typography.body.small,
    color: Colors.light.textMain,
  },
  mealContent: {
    paddingLeft: Spacing.lg,
  },
  mealName: {
    ...Typography.body.medium,
    color: Colors.light.textMain,
    marginBottom: Spacing.xs,
  },
  mealCategory: {
    ...Typography.body.small,
    color: Colors.light.textSecondary,
  },
  emptyMeal: {
    paddingLeft: Spacing.lg,
    paddingVertical: Spacing.xs,
  },
  emptyMealText: {
    ...Typography.body.small,
    color: Colors.light.textSecondary,
    fontStyle: 'italic',
  },
});
