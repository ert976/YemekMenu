import React, { useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { Colors } from "../../constants/theme";

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
          {placeholder || <ActivityIndicator color={Colors.light.primary} />}
        </View>
      )}
      <Image
        source={source}
        style={[style, loading ? { opacity: 0 } : { opacity: 1 }]}
        onLoad={handleLoad}
        onError={handleError}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = {
  placeholder: {
    backgroundColor: Colors.light.background,
    justifyContent: "center",
    alignItems: "center",
  },
};
