// Mock for react-native to allow importing project files in Node.js
export const Platform = {
  OS: 'ios',
  select: (objs: any) => objs.ios || objs.default,
};

export const StyleSheet = {
  create: (styles: any) => styles,
};

export const Dimensions = {
  get: () => ({ width: 375, height: 812 }),
};

export default {
  Platform,
  StyleSheet,
  Dimensions,
};
