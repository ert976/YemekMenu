import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    useWindowDimensions
} from "react-native";
import {
    BorderRadius,
    Colors,
    Spacing,
    Typography,
} from "../../constants/theme";
import { getAllFoods } from "../../database/index";
import { Food } from "../../types";

export default function AdminGalleryScreen() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState<"all" | "missing" | "reported">(
    "all",
  );
  const { width } = useWindowDimensions();
  const router = useRouter();

  // Grid Layout logic
  const numColumns = width > 1000 ? 6 : width > 768 ? 4 : 2;
  const itemWidth = (width - (numColumns + 1) * Spacing.md) / numColumns;

  useEffect(() => {
    loadFoods();
  }, []);

  useEffect(() => {
    filterFoods();
  }, [searchText, filterType, foods]);

  const loadFoods = async () => {
    setLoading(true);
    try {
      const all = await getAllFoods();
      setFoods(all);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const filterFoods = () => {
    let result = foods;

    if (searchText) {
      result = result.filter((f) =>
        f.name.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    if (filterType === "missing") {
      result = result.filter(
        (f) => !f.image_url || f.image_url.includes("placeholder"),
      );
    }

    setFilteredFoods(result);
  };

  const reportIssue = async (food: Food, issue: "missing" | "wrong") => {
    try {
      await fetch("/report-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: food.id, name: food.name, issue }),
      });
      alert(`Reported ${food.name}: ${issue}`);
    } catch (e) {
      alert("Failed to report");
    }
  };

  const renderItem = ({ item }: { item: Food }) => (
    <View style={[styles.card, { width: itemWidth }]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image_url }}
          style={styles.image}
          contentFit="cover"
          transition={200}
        />
        <View style={styles.overlay}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "rgba(255,0,0,0.8)" }]}
            onPress={() => reportIssue(item, "missing")}
          >
            <Text style={styles.btnText}>📷 Yok</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "rgba(255,165,0,0.8)" }]}
            onPress={() => reportIssue(item, "wrong")}
          >
            <Text style={styles.btnText}>⚠️ Yanlış</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.category} numberOfLines={1}>
          {item.category}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#333" />
          <Text>Geri</Text>
        </TouchableOpacity>
        <Text style={styles.title}>
          Görsel Doğrulama ({filteredFoods.length}/{foods.length})
        </Text>
        <View style={{ flex: 1 }} />
      </View>

      <View style={styles.controls}>
        <TextInput
          style={styles.search}
          placeholder="Yemek ara..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <View style={styles.filters}>
          <TouchableOpacity
            onPress={() => setFilterType("all")}
            style={[
              styles.filterBtn,
              filterType === "all" && styles.activeFilter,
            ]}
          >
            <Text>Tümü</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilterType("missing")}
            style={[
              styles.filterBtn,
              filterType === "missing" && styles.activeFilter,
            ]}
          >
            <Text>Eksik Olanlar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={filteredFoods}
          key={`grid-${numColumns}`}
          numColumns={numColumns}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={{ gap: Spacing.md }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: Spacing.md,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    ...Typography.heading.small,
    marginLeft: Spacing.md,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  controls: {
    padding: Spacing.md,
    flexDirection: "row",
    gap: Spacing.md,
    flexWrap: "wrap",
  },
  search: {
    flex: 1,
    minWidth: 200,
    backgroundColor: "white",
    padding: Spacing.sm,
    borderRadius: BorderRadius.default,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  filters: {
    flexDirection: "row",
    gap: Spacing.sm,
  },
  filterBtn: {
    padding: Spacing.sm,
    backgroundColor: "#e0e0e0",
    borderRadius: BorderRadius.default,
  },
  activeFilter: {
    backgroundColor: Colors.light.primary,
  },
  listContent: {
    padding: Spacing.md,
    gap: Spacing.md,
  },
  card: {
    backgroundColor: "white",
    borderRadius: BorderRadius.medium,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    height: 150,
    width: "100%",
    backgroundColor: "#eee",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    padding: 4,
    gap: 4,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  btn: {
    flex: 1,
    padding: 4,
    borderRadius: 4,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  info: {
    padding: Spacing.sm,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  category: {
    fontSize: 12,
    color: "#666",
  },
});
