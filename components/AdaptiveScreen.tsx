import React from "react";
import {
    StyleProp,
    StyleSheet,
    View,
    ViewStyle,
    useWindowDimensions,
} from "react-native";

// Responsive text component
import { Text, TextStyle } from "react-native";

// Breakpoint constants
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1440,
};

// Screen size detection hook
export const useScreenSize = () => {
  const { width, height } = useWindowDimensions();

  return {
    width,
    height,
    isMobile: width < BREAKPOINTS.TABLET,
    isTablet: width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.DESKTOP,
    isDesktop: width >= BREAKPOINTS.DESKTOP,
    isLargeDesktop: width >= BREAKPOINTS.LARGE_DESKTOP,
    orientation: width > height ? "landscape" : "portrait",
  };
};

// Adaptive layout wrapper
interface AdaptiveScreenProps {
  children: React.ReactNode;
  className?: string;
}

export const AdaptiveScreen: React.FC<AdaptiveScreenProps> = ({ children }) => {
  const { width } = useWindowDimensions();

  const getContainerStyle = () => {
    if (width < BREAKPOINTS.TABLET) {
      return styles.mobileContainer;
    } else if (width < BREAKPOINTS.DESKTOP) {
      return styles.tabletContainer;
    } else {
      return styles.desktopContainer;
    }
  };

  return <View style={getContainerStyle()}>{children}</View>;
};

// Responsive grid system
interface ResponsiveGridProps {
  children: React.ReactNode;
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    largeDesktop?: number;
  };
  gap?: number;
  padding?: number;
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  cols = { mobile: 1, tablet: 2, desktop: 3, largeDesktop: 4 },
  gap = 16,
  padding = 16,
}) => {
  const { width } = useWindowDimensions();

  const getColumns = () => {
    if (width < BREAKPOINTS.TABLET) return cols.mobile || 1;
    if (width < BREAKPOINTS.DESKTOP) return cols.tablet || 2;
    if (width < BREAKPOINTS.LARGE_DESKTOP) return cols.desktop || 3;
    return cols.largeDesktop || 4;
  };

  const getPadding = () => {
    if (width < BREAKPOINTS.TABLET) return padding * 0.75;
    if (width < BREAKPOINTS.DESKTOP) return padding;
    return padding * 1.25;
  };

  const gridStyle = {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    paddingHorizontal: getPadding(),
    marginHorizontal: -gap / 2,
  };

  const itemStyle = {
    width: `${100 / getColumns()}%`,
    paddingHorizontal: gap / 2,
    marginBottom: gap,
  };

  return (
    <View style={gridStyle as any}>
      {React.Children.map(children, (child, index) => (
        <View key={`grid-item-${index}`} style={itemStyle as any}>
          {child}
        </View>
      ))}
    </View>
  );
};

// Adaptive spacing component
interface AdaptiveSpacingProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  vertical?: boolean;
}

export const AdaptiveSpacing: React.FC<AdaptiveSpacingProps> = ({
  size = "md",
  vertical = true,
}) => {
  const { width } = useWindowDimensions();

  const getSpacing = () => {
    const baseSpacing = {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    };

    let spacing = baseSpacing[size];

    // Scale spacing for larger screens
    if (width >= BREAKPOINTS.DESKTOP) {
      spacing *= 1.5;
    } else if (width >= BREAKPOINTS.TABLET) {
      spacing *= 1.25;
    }

    return spacing;
  };

  const style = {
    [vertical ? "height" : "width"]: getSpacing(),
  };

  return <View style={style} />;
};

interface AdaptiveTextProps {
  children: React.ReactNode;
  variant?: "heading1" | "heading2" | "heading3" | "body" | "caption";
  weight?: "light" | "normal" | "medium" | "bold";
  color?: string;
  style?: TextStyle;
}

export const AdaptiveText: React.FC<AdaptiveTextProps> = ({
  children,
  variant = "body",
  weight = "normal",
  color = "#333",
  style,
}) => {
  const { width } = useWindowDimensions();

  const getTypography = () => {
    const baseTypography = {
      heading1: { fontSize: 32, lineHeight: 40 },
      heading2: { fontSize: 24, lineHeight: 32 },
      heading3: { fontSize: 20, lineHeight: 28 },
      body: { fontSize: 16, lineHeight: 24 },
      caption: { fontSize: 12, lineHeight: 16 },
    };

    let typography = baseTypography[variant];

    // Scale font sizes for different screen sizes
    if (width < BREAKPOINTS.TABLET) {
      typography = {
        ...typography,
        fontSize: typography.fontSize * 0.875,
        lineHeight: typography.lineHeight * 0.875,
      };
    } else if (width >= BREAKPOINTS.DESKTOP) {
      typography = {
        ...typography,
        fontSize: typography.fontSize * 1.125,
        lineHeight: typography.lineHeight * 1.125,
      };
    }

    return typography;
  };

  const getFontWeight = () => {
    const weights = {
      light: "300" as const,
      normal: "400" as const,
      medium: "500" as const,
      bold: "700" as const,
    };

    return weights[weight];
  };

  const textStyle: TextStyle = {
    ...getTypography(),
    fontWeight: getFontWeight(),
    color,
    ...style,
  };

  return <Text style={textStyle}>{children}</Text>;
};

// Responsive card component
interface AdaptiveCardProps {
  children: React.ReactNode;
  elevation?: number;
  padding?: number;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
}

export const AdaptiveCard: React.FC<AdaptiveCardProps> = ({
  children,
  elevation = 2,
  padding = 16,
  borderRadius = 8,
  style,
}) => {
  const { width } = useWindowDimensions();

  const getCardStyle = () => {
    const baseStyle = {
      backgroundColor: "#fff",
      borderRadius,
      padding,
      marginVertical: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation,
    };

    // Adjust for different screen sizes
    if (width < BREAKPOINTS.TABLET) {
      return {
        ...baseStyle,
        padding: padding * 0.75,
        borderRadius: borderRadius * 0.75,
        marginVertical: 6,
      };
    } else if (width >= BREAKPOINTS.DESKTOP) {
      return {
        ...baseStyle,
        padding: padding * 1.25,
        borderRadius: borderRadius * 1.25,
        marginVertical: 12,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      };
    }

    return baseStyle;
  };

  return <View style={[getCardStyle(), style]}>{children}</View>;
};

// Hook for responsive utilities
export const useResponsive = () => {
  const { width, height } = useWindowDimensions();
  const screenSize = useScreenSize();

  return {
    ...screenSize,
    // Spacing utilities
    spacing: (value: number) => {
      if (width < BREAKPOINTS.TABLET) return value * 0.75;
      if (width >= BREAKPOINTS.DESKTOP) return value * 1.25;
      return value;
    },
    // Font size utilities
    fontSize: (baseSize: number) => {
      if (width < BREAKPOINTS.TABLET) return baseSize * 0.875;
      if (width >= BREAKPOINTS.DESKTOP) return baseSize * 1.125;
      return baseSize;
    },
    // Grid columns
    gridCols: (maxCols: number) => {
      if (width < BREAKPOINTS.TABLET) return Math.min(maxCols, 1);
      if (width < BREAKPOINTS.DESKTOP) return Math.min(maxCols, 2);
      if (width < BREAKPOINTS.LARGE_DESKTOP) return Math.min(maxCols, 3);
      return Math.min(maxCols, 4);
    },
  };
};

const styles = StyleSheet.create({
  mobileContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  tabletContainer: {
    flex: 1,
    paddingHorizontal: 24,
    maxWidth: 768,
    alignSelf: "center",
    width: "100%",
  },
  desktopContainer: {
    flex: 1,
    paddingHorizontal: 32,
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
});
