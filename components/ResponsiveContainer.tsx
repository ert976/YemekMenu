import React from 'react';
import { Text, TextStyle, View, ViewStyle, useWindowDimensions } from 'react-native';


// Responsive text component

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
    if (width < 480) return padding * 0.75; // Mobile
    if (width < 768) return padding; // Tablet
    if (width < 1024) return padding * 1.25; // Small desktop
    return padding * 1.5; // Large desktop
  };

  // Responsive max width based on screen size
  const getResponsiveMaxWidth = () => {
    if (width < 480) return '100%'; // Mobile - full width
    if (width < 768) return Math.min(maxWidth * 0.9, width); // Tablet
    if (width < 1024) return Math.min(maxWidth * 0.8, width); // Small desktop
    return Math.min(maxWidth, width); // Large desktop
  };

  const containerStyle: ViewStyle = {
    maxWidth: getResponsiveMaxWidth(),
    width: width < 480 ? '100%' : 'auto',
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
  };
  gap?: number;
  style?: ViewStyle;
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 16,
  style,
}) => {
  const { width } = useWindowDimensions();
  
  const getColumns = () => {
    if (width < 768) return columns.mobile || 1;
    if (width < 1024) return columns.tablet || 2;
    return columns.desktop || 3;
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
    if (width < 768) return sizes.mobile || 14;
    if (width < 1024) return sizes.tablet || 16;
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
    borderRadius: width < 768 ? 8 : 12,
    padding: width < 768 ? 16 : 24,
    marginVertical: width < 768 ? 8 : 12,
    backgroundColor: '#ffffff',
    shadowColor,
    shadowOffset: {
      width: 0,
      height: width < 768 ? 2 : 4,
    },
    shadowOpacity: width < 768 ? 0.1 : 0.15,
    shadowRadius: width < 768 ? 3.84 : 6,
    elevation,
    ...style,
  };

  return <View style={cardStyle}>{children}</View>;
};

// Hook for responsive breakpoints
export const useResponsiveBreakpoints = () => {
  const { width } = useWindowDimensions();
  
  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    width,
    height: useWindowDimensions().height,
  };
};

// Responsive styles utility
export const createResponsiveStyles = <T extends Record<string, ViewStyle | TextStyle>>(
  baseStyles: T,
  responsiveStyles?: {
    mobile?: Partial<T>;
    tablet?: Partial<T>;
    desktop?: Partial<T>;
  }
) => {
  const { width } = useWindowDimensions();
  
  const getStyles = (): T => {
    let styles = { ...baseStyles };
    
    if (width < 768 && responsiveStyles?.mobile) {
      styles = { ...styles, ...responsiveStyles.mobile };
    } else if (width < 1024 && responsiveStyles?.tablet) {
      styles = { ...styles, ...responsiveStyles.tablet };
    } else if (width >= 1024 && responsiveStyles?.desktop) {
      styles = { ...styles, ...responsiveStyles.desktop };
    }
    
    return styles;
  };
  
  return getStyles();
};
