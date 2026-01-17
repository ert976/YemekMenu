import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Food } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Dimensions,
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Animated, {
    SlideInRight,
    SlideOutLeft
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

interface PreferenceFlowProps {
  visible: boolean;
  foods: Food[];
  onComplete: (likedIds: number[], dislikedIds: number[]) => void;
  onClose: () => void;
}

export const PreferenceFlow: React.FC<PreferenceFlowProps> = ({
  visible,
  foods,
  onComplete,
  onClose,
}) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [dislikedIds, setDislikedIds] = useState<number[]>([]);

  const emojis = [
    { label: "🤢", value: 1, color: "#FF4D4D" }, // Sevmiyor
    { label: "😕", value: 2, color: "#FFA64D" }, // Az seviyor
    { label: "😐", value: 3, color: "#FFD966" }, // Nötr
    { label: "😋", value: 4, color: "#A2C4C9" }, // Seviyor
    { label: "😍", value: 5, color: "#6AA84F" }, // Çok seviyor
  ];

  const handleRate = (value: number) => {
    const currentFood = foods[currentIndex];

    if (value >= 4) {
      setLikedIds([...likedIds, currentFood.id]);
    } else if (value <= 2) {
      setDislikedIds([...dislikedIds, currentFood.id]);
    }

    if (currentIndex < foods.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete([...likedIds], [...dislikedIds]);
    }
  };

  if (!visible || !foods.length) return null;

  const currentFood = foods[currentIndex];

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={28} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.progressText, { color: theme.text }]}>
            {currentIndex + 1} / {foods.length}
          </Text>
        </View>

        {/* Card Area */}
        <Animated.View
          key={currentFood.id}
          entering={SlideInRight}
          exiting={SlideOutLeft}
          style={styles.cardContainer}
        >
          <View
            style={[
              styles.card,
              { backgroundColor: theme.card, shadowColor: theme.text },
            ]}
          >
            <Image
              source={{ uri: currentFood.image_url }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.infoArea}>
              <Text style={[styles.foodName, { color: theme.text }]}>
                {currentFood.name}
              </Text>
              <Text style={styles.categoryName}>{currentFood.category}</Text>
            </View>
          </View>
        </Animated.View>

        {/* Control Area */}
        <View style={styles.controlArea}>
          <Text style={[styles.instruction, { color: theme.text }]}>
            Bu yemeği ne kadar seviyorsun?
          </Text>
          <View style={styles.emojiRow}>
            {emojis.map((emoji) => (
              <TouchableOpacity
                key={emoji.value}
                onPress={() => handleRate(emoji.value)}
                style={styles.emojiButton}
              >
                <Text style={styles.emojiLabel}>{emoji.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  closeButton: {
    padding: 5,
  },
  progressText: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Outfit-Bold",
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    height: "100%",
    maxHeight: 450,
    borderRadius: 30,
    overflow: "hidden",
    elevation: 8,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  infoArea: {
    padding: 20,
    alignItems: "center",
  },
  foodName: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Outfit-Bold",
    textAlign: "center",
  },
  categoryName: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
    fontFamily: "Outfit-Regular",
  },
  controlArea: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  instruction: {
    fontSize: 18,
    marginBottom: 25,
    fontFamily: "Outfit-SemiBold",
  },
  emojiRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  emojiButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  emojiLabel: {
    fontSize: 32,
  },
});
