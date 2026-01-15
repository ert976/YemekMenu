// Responsive breakpoints and utilities
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1440,
} as const;

// Responsive spacing scale
export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 48,
} as const;

// Typography scale
export const TYPOGRAPHY = {
  HEADING_1: { fontSize: 32, lineHeight: 40, fontWeight: '700' as const },
  HEADING_2: { fontSize: 24, lineHeight: 32, fontWeight: '600' as const },
  HEADING_3: { fontSize: 20, lineHeight: 28, fontWeight: '600' as const },
  BODY: { fontSize: 16, lineHeight: 24, fontWeight: '400' as const },
  CAPTION: { fontSize: 12, lineHeight: 16, fontWeight: '400' as const },
} as const;

// Color palette
export const COLORS = {
  PRIMARY: '#f48c25',
  BACKGROUND_LIGHT: '#f8f7f5',
  BACKGROUND_DARK: '#221910',
  SURFACE_LIGHT: '#ffffff',
  SURFACE_DARK: '#2f241a',
  TEXT_MAIN_LIGHT: '#181411',
  TEXT_MAIN_DARK: '#f5f0eb',
  TEXT_SECONDARY_LIGHT: '#8a7560',
  TEXT_SECONDARY_DARK: '#b09e8c',
  BORDER_LIGHT: '#e6e0db',
  BORDER_DARK: '#4a3b2f',
} as const;

// Grid system
export const GRID = {
  COLUMNS: {
    MOBILE: 1,
    TABLET: 2,
    DESKTOP: 3,
    LARGE_DESKTOP: 4,
  },
  GAP: 16,
  CONTAINER_MAX_WIDTH: 1200,
  CONTAINER_PADDING: 16,
} as const;

// Animation durations
export const ANIMATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Elevation levels
export const ELEVATION = {
  NONE: 0,
  SMALL: 2,
  MEDIUM: 4,
  LARGE: 8,
  XLARGE: 16,
} as const;

// Border radius scale
export const BORDER_RADIUS = {
  NONE: 0,
  SMALL: 4,
  MEDIUM: 8,
  LARGE: 12,
  XLARGE: 16,
  FULL: 9999,
} as const;
