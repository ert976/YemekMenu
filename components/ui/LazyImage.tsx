import { Image as ExpoImage } from "expo-image";
import React, { useState, useMemo } from "react";
import { ImageStyle, StyleProp, View } from "react-native";
import { Colors } from "../../constants/theme";
import { SkeletonLoader } from "./SkeletonLoader";

interface LazyImageProps {
  source: { uri: string };
  style?: StyleProp<ImageStyle>;
  placeholder?: React.ReactNode;
  fallback?: React.ReactNode;
  foodId?: number;
  foodName?: string;
  foodCategory?: string;
}

// Generate Picsum URL from food name - CORS-friendly, always works
const getPicsumUrl = (foodName: string | undefined): string => {
  if (!foodName) {
    return "https://picsum.photos/seed/default/400/300";
  }
  
  // Create seed from food name (lowercase, Turkish chars to ASCII, spaces to underscore)
  const seed = foodName
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/İ/g, 'I')
    .replace(/Ğ/g, 'G')
    .replace(/Ü/g, 'U')
    .replace(/Ş/g, 'S')
    .replace(/Ö/g, 'O')
    .replace(/Ç/g, 'C')
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
  
  return `https://picsum.photos/seed/${seed}/400/300`;
};

// Log missing image to JSON file
const logMissingImage = async (id: number | undefined, name: string | undefined, imageUrl: string) => {
  if (!id || !name) return;
  
  try {
    const response = await fetch('/report-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        name,
        imageUrl,
        issue: 'missing',
        timestamp: new Date().toISOString(),
      }),
    });
    
    if (response.ok) {
      console.log(`[LazyImage] 📝 Logged missing image: ${name} (ID: ${id})`);
    }
  } catch (error) {
    // Silently fail - don't break the UI if logging fails
    console.log(`[LazyImage] ⚠️ Could not log issue: ${name}`);
  }
};

export const LazyImage: React.FC<LazyImageProps> = ({
  source,
  style,
  placeholder,
  fallback,
  foodId,
  foodName,
  foodCategory,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Always use Picsum URL - CORS-free and reliable
  const imageUri = useMemo(() => {
    // Debug logging
    console.log(`[LazyImage] 🍽️ Food: ${foodName}, ID: ${foodId}, Source: ${source.uri?.substring(0, 50)}...`);
    
    // If it's already a data URI (base64), use it directly
    if (source.uri?.startsWith("data:")) {
      console.log(`[LazyImage] 📦 Using base64 image`);
      return source.uri;
    }
    
    // If it's already Picsum, use it directly
    if (source.uri?.includes("picsum.photos")) {
      console.log(`[LazyImage] 🖼️ Using existing Picsum URL`);
      return source.uri;
    }
    
    // Otherwise generate Picsum URL from food name
    const picsumUrl = getPicsumUrl(foodName);
    console.log(`[LazyImage] 🔄 Generated Picsum URL: ${picsumUrl}`);
    return picsumUrl;
  }, [source.uri, foodName, foodId]);

  const handleLoad = () => {
    console.log(`[LazyImage] ✅ LOADED: ${foodName || "Unknown"}`);
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    console.log(`[LazyImage] ⚠️ Using fallback for: ${foodName || "Unknown"}`);
    
    // Log the missing image
    if (foodId && foodName && source.uri) {
      logMissingImage(foodId, foodName, source.uri);
    }
    
    setLoading(false);
    setError(true);
  };

  return (
    <View style={style}>
      {(loading || error) && (
        <View style={[style, styles.placeholder]}>
          {placeholder || (
            <SkeletonLoader width="100%" height="100%" borderRadius={0} />
          )}
        </View>
      )}
      <ExpoImage
        source={{ uri: imageUri }}
        style={[style, loading ? { opacity: 0 } : { opacity: 1 }]}
        onLoad={handleLoad}
        onError={handleError}
        transition={300}
        recyclingKey={imageUri}
        cachePolicy="memory-disk"
        contentFit="cover"
      />
    </View>
  );
};

const styles = {
  placeholder: {
    backgroundColor: Colors.light.background,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
};
