import { BREAKPOINTS, GRID, SPACING, TYPOGRAPHY } from '@/constants/responsive';
import { useWindowDimensions } from 'react-native';

/**
 * Hook for responsive design utilities
 * Provides screen size detection and responsive calculations
 */
export const useResponsive = () => {
  const { width, height } = useWindowDimensions();
  
  // Screen size detection
  const isMobile = width < BREAKPOINTS.TABLET;
  const isTablet = width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.DESKTOP;
  const isDesktop = width >= BREAKPOINTS.DESKTOP;
  const isLargeDesktop = width >= BREAKPOINTS.LARGE_DESKTOP;
  const orientation = width > height ? 'landscape' : 'portrait';
  
  // Responsive spacing
  const spacing = (value: number) => {
    if (width < BREAKPOINTS.TABLET) return value * 0.75;
    if (width >= BREAKPOINTS.DESKTOP) return value * 1.25;
    return value;
  };
  
  // Responsive font size
  const fontSize = (baseSize: number) => {
    if (width < BREAKPOINTS.TABLET) return baseSize * 0.875;
    if (width >= BREAKPOINTS.DESKTOP) return baseSize * 1.125;
    return baseSize;
  };
  
  // Responsive grid columns
  const gridCols = (maxCols: number) => {
    if (width < BREAKPOINTS.TABLET) return Math.min(maxCols, GRID.COLUMNS.MOBILE);
    if (width < BREAKPOINTS.DESKTOP) return Math.min(maxCols, GRID.COLUMNS.TABLET);
    if (width < BREAKPOINTS.LARGE_DESKTOP) return Math.min(maxCols, GRID.COLUMNS.DESKTOP);
    return Math.min(maxCols, GRID.COLUMNS.LARGE_DESKTOP);
  };
  
  // Responsive container width
  const containerWidth = () => {
    if (width < BREAKPOINTS.TABLET) return '100%';
    if (width < BREAKPOINTS.DESKTOP) return Math.min(GRID.CONTAINER_MAX_WIDTH * 0.9, width);
    if (width < BREAKPOINTS.LARGE_DESKTOP) return Math.min(GRID.CONTAINER_MAX_WIDTH * 0.8, width);
    return Math.min(GRID.CONTAINER_MAX_WIDTH, width);
  };
  
  // Responsive padding
  const containerPadding = () => {
    if (width < BREAKPOINTS.TABLET) return GRID.CONTAINER_PADDING * 0.75;
    if (width >= BREAKPOINTS.DESKTOP) return GRID.CONTAINER_PADDING * 1.25;
    return GRID.CONTAINER_PADDING;
  };
  
  // Responsive typography
  const typography = (variant: keyof typeof TYPOGRAPHY) => {
    const base = TYPOGRAPHY[variant];
    return {
      ...base,
      fontSize: fontSize(base.fontSize),
      lineHeight: fontSize(base.lineHeight),
    };
  };
  
  // Responsive breakpoints object
  const breakpoints = {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    orientation,
    width,
    height,
  };
  
  return {
    ...breakpoints,
    spacing,
    fontSize,
    gridCols,
    containerWidth,
    containerPadding,
    typography,
  };
};

/**
 * Hook for responsive media queries
 * Returns boolean values for different screen sizes
 */
export const useMediaQuery = () => {
  const { width } = useWindowDimensions();
  
  return {
    isMobile: width < BREAKPOINTS.TABLET,
    isTablet: width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.DESKTOP,
    isDesktop: width >= BREAKPOINTS.DESKTOP,
    isLargeDesktop: width >= BREAKPOINTS.LARGE_DESKTOP,
    isSmallMobile: width < BREAKPOINTS.MOBILE,
    isPortrait: width < useWindowDimensions().height,
    isLandscape: width >= useWindowDimensions().height,
  };
};

/**
 * Hook for responsive layout calculations
 * Provides layout-specific responsive values
 */
export const useResponsiveLayout = () => {
  const responsive = useResponsive();
  
  return {
    // Card layouts
    cardColumns: responsive.gridCols(3),
    cardSpacing: responsive.spacing(GRID.GAP),
    cardPadding: responsive.spacing(SPACING.MD),
    
    // List layouts
    listItemHeight: responsive.isMobile ? 80 : 100,
    listItemPadding: responsive.spacing(SPACING.SM),
    
    // Navigation layouts
    navHeight: responsive.isMobile ? 60 : 80,
    navPadding: responsive.spacing(SPACING.SM),
    
    // Button layouts
    buttonHeight: responsive.isMobile ? 44 : 48,
    buttonPadding: responsive.spacing(SPACING.SM),
    
    // Form layouts
    inputHeight: responsive.isMobile ? 44 : 48,
    inputPadding: responsive.spacing(SPACING.SM),
    formSpacing: responsive.spacing(SPACING.MD),
    
    // Modal layouts
    modalWidth: responsive.isMobile ? '90%' : responsive.isTablet ? '80%' : '60%',
    modalMaxWidth: responsive.isDesktop ? 600 : '100%',
    modalPadding: responsive.spacing(SPACING.LG),
  };
};
