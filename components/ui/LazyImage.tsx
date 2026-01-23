import React, { useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { Image as ExpoImage } from "expo-image";
import { Colors } from "../../constants/theme";
import { SkeletonLoader } from "./SkeletonLoader";

import { ImageStyle, StyleProp } from "react-native";

interface LazyImageProps {
  source: { uri: string };
  style?: StyleProp<ImageStyle>;
  placeholder?: React.ReactNode;
  fallback?: React.ReactNode;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  source,
  style,
  placeholder,
  fallback,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  if (error && fallback) {
    return <View style={style}>{fallback}</View>;
  }

  return (
    <View style={style}>
      {loading && (
        <View style={[style, styles.placeholder]}>
          {placeholder || <SkeletonLoader width="100%" height="100%" borderRadius={0} />}
        </View>
      )}
      <ExpoImage
        source={source}
        style={[style, loading ? { opacity: 0 } : { opacity: 1 }]}
        onLoad={handleLoad}
        onError={handleError}
        transition={300}
        placeholder="blur"
        recyclingKey={source.uri}
        cachePolicy="memory-disk"
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
