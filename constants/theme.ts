/**
 * Stitch Design System - YemekMenu App Theme
 * Colors, fonts, and design tokens based on Stitch design system
 */

import { Platform } from 'react-native';

// Stitch Design System Colors
export const Colors = {
  light: {
    primary: '#f48c25',
    background: '#f8f7f5',
    surface: '#ffffff',
    textMain: '#181411',
    textSecondary: '#8a7560',
    border: '#e6e0db',
    error: '#e74c3c',
    success: '#27ae60',
    warning: '#f39c12',
    info: '#3498db',
    icon: '#8a7560',
    tabIconDefault: '#8a7560',
    tabIconSelected: '#f48c25',
  },
  dark: {
    primary: '#f48c25',
    background: '#221910',
    surface: '#2f241a',
    textMain: '#f5f0eb',
    textSecondary: '#b09e8c',
    border: '#4a3b2f',
    error: '#e74c3c',
    success: '#27ae60',
    warning: '#f39c12',
    info: '#3498db',
    icon: '#b09e8c',
    tabIconDefault: '#b09e8c',
    tabIconSelected: '#f48c25',
  },
};

// Stitch Design System Fonts
export const Fonts = Platform.select({
  ios: {
    display: 'Plus Jakarta Sans',
    body: 'Noto Sans',
    sans: 'Plus Jakarta Sans',
    serif: 'Noto Sans',
    rounded: 'Plus Jakarta Sans',
    mono: 'SF Mono',
  },
  default: {
    display: 'Plus Jakarta Sans',
    body: 'Noto Sans',
    sans: 'Plus Jakarta Sans',
    serif: 'Noto Sans',
    rounded: 'Plus Jakarta Sans',
    mono: 'monospace',
  },
  web: {
    display: "'Plus Jakarta Sans', sans-serif",
    body: "'Noto Sans', sans-serif",
    sans: "'Plus Jakarta Sans', sans-serif",
    serif: "'Noto Sans', serif",
    rounded: "'Plus Jakarta Sans', sans-serif",
    mono: "'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

// Stitch Design System Border Radius
export const BorderRadius = {
  default: 8,
  large: 16,
  extraLarge: 24,
  full: 9999,
};

// Stitch Design System Spacing
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Stitch Design System Typography
export const Typography = {
  display: {
    large: {
      fontSize: 32,
      fontWeight: '800' as const,
      fontFamily: Fonts.display,
    },
    medium: {
      fontSize: 24,
      fontWeight: '700' as const,
      fontFamily: Fonts.display,
    },
    small: {
      fontSize: 20,
      fontWeight: '600' as const,
      fontFamily: Fonts.display,
    },
  },
  heading: {
    large: {
      fontSize: 18,
      fontWeight: '600' as const,
      fontFamily: Fonts.display,
    },
    medium: {
      fontSize: 16,
      fontWeight: '600' as const,
      fontFamily: Fonts.display,
    },
    small: {
      fontSize: 14,
      fontWeight: '500' as const,
      fontFamily: Fonts.display,
    },
  },
  body: {
    large: {
      fontSize: 16,
      fontWeight: '400' as const,
      fontFamily: Fonts.body,
    },
    medium: {
      fontSize: 14,
      fontWeight: '400' as const,
      fontFamily: Fonts.body,
    },
    small: {
      fontSize: 12,
      fontWeight: '400' as const,
      fontFamily: Fonts.body,
    },
  },
};
