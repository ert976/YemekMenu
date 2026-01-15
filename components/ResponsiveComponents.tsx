import React from 'react';
import { Text, TextStyle, View, ViewStyle, useWindowDimensions } from 'react-native';

// Breakpoint constants
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1440,
};

// Hook for responsive utilities
export const useResponsive = () => {
  const { width, height } = useWindowDimensions();
  
  return {
    width,
    height,
    isMobile: width < BREAKPOINTS.TABLET,
    isTablet: width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.DESKTOP,
    isDesktop: width >= BREAKPOINTS.DESKTOP,
    isLargeDesktop: width >= BREAKPOINTS.LARGE_DESKTOP,
    orientation: width > height ? 'landscape' : 'portrait',
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

// Responsive container component
interface ResponsiveContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  maxWidth?: number;
  padding?: number;
  backgroundColor?: string;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  style,
  maxWidth = 1200,
  padding = 16,
  backgroundColor,
}) => {
  const { width } = useWindowDimensions();
  
  // Responsive padding based on screen size
  const getResponsivePadding = () => {
    if (width < BREAKPOINTS.MOBILE) return padding * 0.75;
    if (width < BREAKPOINTS.TABLET) return padding;
    if (width < BREAKPOINTS.DESKTOP) return padding * 1.25;
    return padding * 1.5;
  };

  // Responsive max width based on screen size
  const getResponsiveMaxWidth = () => {
    if (width < BREAKPOINTS.MOBILE) return '100%';
    if (width < BREAKPOINTS.TABLET) return Math.min(maxWidth * 0.9, width);
    if (width < BREAKPOINTS.DESKTOP) return Math.min(maxWidth * 0.8, width);
    return Math.min(maxWidth, width);
  };

  const containerStyle: ViewStyle = {
    maxWidth: getResponsiveMaxWidth(),
    width: width < BREAKPOINTS.MOBILE ? '100%' : 'auto',
    alignSelf: 'center',
    paddingHorizontal: getResponsivePadding(),
    backgroundColor,
    ...style,
  };

  return <View style={containerStyle}>{children}</View>;
};

// Responsive grid component
interface ResponsiveGridProps {
  children: React.ReactNode;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    largeDesktop?: number;
  };
  gap?: number;
  style?: ViewStyle;
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3, largeDesktop: 4 },
  gap = 16,
  style,
}) => {
  const { width } = useWindowDimensions();
  
  const getColumns = () => {
    if (width < BREAKPOINTS.TABLET) return columns.mobile || 1;
    if (width < BREAKPOINTS.DESKTOP) return columns.tablet || 2;
    if (width < BREAKPOINTS.LARGE_DESKTOP) return columns.desktop || 3;
    return columns.largeDesktop || 4;
  };

  const gridStyle: ViewStyle = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -gap / 2,
    ...style,
  };

  const childStyle: ViewStyle = {
    width: `${100 / getColumns()}%`,
    paddingHorizontal: gap / 2,
    marginBottom: gap,
  };

  return (
    <View style={gridStyle}>
      {React.Children.map(children, (child) => (
        <View style={childStyle}>{child}</View>
      ))}
    </View>
  );
};

// Responsive text component
interface ResponsiveTextProps {
  children: React.ReactNode;
  style?: TextStyle;
  sizes?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  style,
  sizes = { mobile: 14, tablet: 16, desktop: 18 },
  weight = 'normal',
}) => {
  const { width } = useWindowDimensions();
  
  const getFontSize = () => {
    if (width < BREAKPOINTS.TABLET) return sizes.mobile || 14;
    if (width < BREAKPOINTS.DESKTOP) return sizes.tablet || 16;
    return sizes.desktop || 18;
  };

  const textStyle: TextStyle = {
    fontSize: getFontSize(),
    fontWeight: weight,
    ...style,
  };

  return <Text style={textStyle}>{children}</Text>;
};

// Responsive card component
interface ResponsiveCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  elevation?: number;
  shadowColor?: string;
}

export const ResponsiveCard: React.FC<ResponsiveCardProps> = ({
  children,
  style,
  elevation = 3,
  shadowColor = '#000',
}) => {
  const { width } = useWindowDimensions();
  
  const cardStyle: ViewStyle = {
    borderRadius: width < BREAKPOINTS.TABLET ? 8 : 12,
    padding: width < BREAKPOINTS.TABLET ? 16 : 24,
    marginVertical: width < BREAKPOINTS.TABLET ? 8 : 12,
    backgroundColor: '#ffffff',
    shadowColor,
    shadowOffset: {
      width: 0,
      height: width < BREAKPOINTS.TABLET ? 2 : 4,
    },
    shadowOpacity: width < BREAKPOINTS.TABLET ? 0.1 : 0.15,
    shadowRadius: width < BREAKPOINTS.TABLET ? 3.84 : 6,
    elevation,
    ...style,
  };

  return <View style={cardStyle}>{children}</View>;
};

// Adaptive spacing component
interface AdaptiveSpacingProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  vertical?: boolean;
}

export const AdaptiveSpacing: React.FC<AdaptiveSpacingProps> = ({
  size = 'md',
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
    [vertical ? 'height' : 'width']: getSpacing(),
  };

  return <View style={style} />;
};

// Adaptive text component with variants
interface AdaptiveTextProps {
  children: React.ReactNode;
  variant?: 'heading1' | 'heading2' | 'heading3' | 'body' | 'caption';
  weight?: 'light' | 'normal' | 'medium' | 'bold';
  color?: string;
  style?: TextStyle;
}

export const AdaptiveText: React.FC<AdaptiveTextProps> = ({
  children,
  variant = 'body',
  weight = 'normal',
  color = '#333',
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
      light: '300' as const,
      normal: '400' as const,
      medium: '500' as const,
      bold: '700' as const,
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

// Hook for responsive breakpoints
export const useResponsiveBreakpoints = () => {
  const { width } = useWindowDimensions();
  
  return {
    isMobile: width < BREAKPOINTS.TABLET,
    isTablet: width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.DESKTOP,
    isDesktop: width >= BREAKPOINTS.DESKTOP,
    width,
    height: useWindowDimensions().height,
  };
};
