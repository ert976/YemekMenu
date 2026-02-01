import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
  Pressable,
  Platform,
} from "react-native";
import {
  BorderRadius,
  Colors,
  Spacing,
  Typography,
} from "../../constants/theme";
import { Food } from "../../types";
import { useColorScheme } from "../../hooks/use-color-scheme";

interface NutritionalInfoModalProps {
  visible: boolean;
  onClose: () => void;
  food: Food;
}

const { height: screenHeight } = Dimensions.get("window");

const DAILY_VALUES = {
  calories: 2000,
  protein: 50,
  carbs: 300,
  fat: 70,
};

export const NutritionalInfoModal: React.FC<NutritionalInfoModalProps> = ({
  visible,
  onClose,
  food,
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const [slideAnim] = React.useState(new Animated.Value(screenHeight));

  React.useEffect(() => {
    if (visible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 65,
        friction: 11,
      }).start();
    } else {
      Animated.spring(slideAnim, {
        toValue: screenHeight,
        useNativeDriver: true,
        tension: 65,
        friction: 11,
      }).start();
    }
  }, [visible, slideAnim]);

  const renderProgressBar = (
    label: string,
    value: number,
    unit: string,
    dailyValue: number,
    color: string,
  ) => {
    const percentage = Math.min((value / dailyValue) * 100, 100);

    return (
      <View style={styles.nutrientRow}>
        <View style={styles.nutrientHeader}>
          <Text style={[styles.nutrientLabel, { color: theme.textMain }]}>
            {label}
          </Text>
          <Text style={[styles.nutrientValue, { color: theme.textMain }]}>
            {value} {unit}
          </Text>
        </View>
        <View style={[styles.progressBarBackground, { backgroundColor: theme.border }]}>
          <Animated.View
            style={[
              styles.progressBarFill,
              {
                backgroundColor: color,
                width: `${percentage}%`,
              },
            ]}
          />
        </View>
        <Text style={[styles.dailyValueText, { color: theme.textSecondary }]}>
          {percentage.toFixed(0)}% günlük değer
        </Text>
      </View>
    );
  };

  if (!food.nutritionalInfo) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Animated.View
          style={[
            styles.modalContainer,
            {
              backgroundColor: theme.surface + "F0",
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.modalHeader}>
            <View style={styles.dragHandle} />
            <Text style={[styles.modalTitle, { color: theme.textMain }]}>
              Besin Değerleri
            </Text>
            <Text style={[styles.foodName, { color: theme.textSecondary }]}>
              {food.name}
            </Text>
          </View>

          <View style={styles.content}>
            {renderProgressBar(
              "Kalori",
              food.nutritionalInfo.calories,
              "kcal",
              DAILY_VALUES.calories,
              theme.primary,
            )}
            {renderProgressBar(
              "Protein",
              food.nutritionalInfo.protein,
              "g",
              DAILY_VALUES.protein,
              theme.success,
            )}
            {renderProgressBar(
              "Karbonhidrat",
              food.nutritionalInfo.carbs,
              "g",
              DAILY_VALUES.carbs,
              theme.warning,
            )}
            {renderProgressBar(
              "Yağ",
              food.nutritionalInfo.fat,
              "g",
              DAILY_VALUES.fat,
              theme.error,
            )}
          </View>

          <TouchableOpacity
            style={[styles.closeButton, { backgroundColor: theme.primary }]}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>Kapat</Text>
          </TouchableOpacity>
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "100%",
    maxHeight: screenHeight * 0.75,
    borderTopLeftRadius: BorderRadius.extraLarge,
    borderTopRightRadius: BorderRadius.extraLarge,
    paddingBottom: Platform.OS === "ios" ? 34 : Spacing.md,
  },
  modalHeader: {
    alignItems: "center",
    paddingVertical: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.05)",
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: BorderRadius.full,
    marginBottom: Spacing.md,
  },
  modalTitle: {
    ...Typography.heading.medium,
    marginBottom: Spacing.xs,
  },
  foodName: {
    ...Typography.body.medium,
    textAlign: "center",
  },
  content: {
    padding: Spacing.lg,
    gap: Spacing.lg,
  },
  nutrientRow: {
    gap: Spacing.xs,
  },
  nutrientHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nutrientLabel: {
    ...Typography.body.medium,
    fontWeight: "500",
  },
  nutrientValue: {
    ...Typography.body.medium,
    fontWeight: "600",
  },
  progressBarBackground: {
    height: 8,
    borderRadius: BorderRadius.full,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: BorderRadius.full,
  },
  dailyValueText: {
    ...Typography.body.small,
    textAlign: "right",
  },
  closeButton: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.large,
    alignItems: "center",
  },
  closeButtonText: {
    ...Typography.heading.medium,
    color: "#fff",
    fontWeight: "600",
  },
});
