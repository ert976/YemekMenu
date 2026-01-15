import React, { useState } from 'react';
import {
    ActivityIndicator,
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { BorderRadius, Colors, Spacing, Typography } from '../../constants/theme';
import { Food, UserRating } from '../../types';
import { LazyImage } from './LazyImage';

interface FoodCardProps {
  food: Food;
  userRating?: UserRating;
  onRatingChange?: (foodId: number, rating: number) => void;
  onPress?: (food: Food) => void;
  showRating?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const { width: screenWidth } = Dimensions.get('window');

export const FoodCard: React.FC<FoodCardProps> = ({
  food,
  userRating,
  onRatingChange,
  onPress,
  showRating = true,
  size = 'medium'
}) => {
  const [rating, setRating] = useState(userRating?.rating || 0);
  const [scaleAnim] = useState(new Animated.Value(1));
  const [ratingAnim] = useState(new Animated.Value(0));

  const cardSizes = {
    small: { width: 140, height: 180, imageHeight: 80 },
    medium: { width: 200, height: 250, imageHeight: 120 },
    large: { width: screenWidth - Spacing.lg * 2, height: 320, imageHeight: 180 }
  };

  const cardSize = cardSizes[size];

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleCardPress = () => {
    if (onPress) {
      onPress(food);
    }
  };

  const handleRatingPress = (newRating: number) => {
    setRating(newRating);
    
    // Rating animasyonu
    Animated.sequence([
      Animated.timing(ratingAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(ratingAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();

    if (onRatingChange) {
      onRatingChange(food.id, newRating);
    }
  };

  const renderStars = () => {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
      const starScale = ratingAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, i <= rating ? 1.2 : 1],
      });

      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleRatingPress(i)}
          style={styles.starButton}
          activeOpacity={0.7}
        >
          <Animated.View style={{ transform: [{ scale: starScale }] }}>
            <Text style={[
              styles.star,
              i <= rating ? styles.starFilled : styles.starEmpty
            ]}>
              {i <= rating ? '★' : '☆'}
            </Text>
          </Animated.View>
        </TouchableOpacity>
      );
    }

    return <View style={styles.ratingContainer}>{stars}</View>;
  };

  const renderDietaryInfo = () => {
    const badges = [];
    
    if (food.is_vegetarian === 1) {
      badges.push(
        <View key="vegetarian" style={[styles.badge, styles.vegetarianBadge]}>
          <Text style={styles.badgeText}>V</Text>
        </View>
      );
    }
    
    if (food.is_vegan === 1) {
      badges.push(
        <View key="vegan" style={[styles.badge, styles.veganBadge]}>
          <Text style={styles.badgeText}>VG</Text>
        </View>
      );
    }
    
    if (food.is_halal === 1) {
      badges.push(
        <View key="halal" style={[styles.badge, styles.halalBadge]}>
          <Text style={styles.badgeText}>H</Text>
        </View>
      );
    }

    return badges.length > 0 ? (
      <View style={styles.dietaryBadges}>{badges}</View>
    ) : null;
  };

  return (
    <Animated.View style={[
      styles.card,
      {
        width: cardSize.width,
        height: cardSize.height,
        transform: [{ scale: scaleAnim }]
      }
    ]}>
      <TouchableOpacity
        style={styles.cardContent}
        onPress={handleCardPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.8}
      >
        {/* Image */}
        <View style={[styles.imageContainer, { height: cardSize.imageHeight }]}>
          <LazyImage
            source={{ uri: food.image_url }}
            style={styles.image}
            placeholder={<ActivityIndicator color={Colors.light.primary} />}
          />
          {renderDietaryInfo()}
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.foodName} numberOfLines={2}>
            {food.name}
          </Text>
          
          <Text style={styles.category} numberOfLines={1}>
            {food.category}
          </Text>

          {showRating && (
            <View style={styles.ratingSection}>
              {renderStars()}
              {rating > 0 && (
                <Text style={styles.ratingText}>
                  {rating.toFixed(1)}/5
                </Text>
              )}
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.surface,
    borderRadius: BorderRadius.large,
    shadowColor: Colors.light.textMain,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 6,
    marginHorizontal: Spacing.sm,
    marginVertical: Spacing.sm,
  },
  cardContent: {
    flex: 1,
    borderRadius: BorderRadius.large,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    backgroundColor: Colors.light.background,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dietaryBadges: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    flexDirection: 'row',
    gap: Spacing.xs,
  },
  badge: {
    width: 24,
    height: 24,
    borderRadius: BorderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.surface,
    shadowColor: Colors.light.textMain,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  vegetarianBadge: {
    backgroundColor: Colors.light.success,
  },
  veganBadge: {
    backgroundColor: '#2ecc71',
  },
  halalBadge: {
    backgroundColor: Colors.light.primary,
  },
  badgeText: {
    ...Typography.body.small,
    fontWeight: 'bold' as const,
    color: Colors.light.surface,
  },
  content: {
    flex: 1,
    padding: Spacing.sm,
    justifyContent: 'space-between',
  },
  foodName: {
    ...Typography.heading.small,
    color: Colors.light.textMain,
    marginBottom: Spacing.xs,
    lineHeight: 20,
  },
  category: {
    ...Typography.body.small,
    color: Colors.light.textSecondary,
    marginBottom: Spacing.sm,
    textTransform: 'capitalize',
  },
  ratingSection: {
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  starButton: {
    padding: Spacing.xs,
  },
  star: {
    fontSize: 20,
    marginHorizontal: 1,
  },
  starFilled: {
    color: Colors.light.warning,
  },
  starEmpty: {
    color: Colors.light.textSecondary,
  },
  ratingText: {
    ...Typography.body.small,
    color: Colors.light.textSecondary,
    fontWeight: '500' as const,
  },
});
