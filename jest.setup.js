// Mock React Native internals FIRST (before any other imports)

jest.mock("react-native", () => {
  return {
    Platform: {
      OS: "web",
      select: (obj) => obj.web || obj.default,
    },
    NativeModules: {
      SettingsManager: {
        settings: {
          AppleLocale: "en_US",
          AppleLanguages: ["en"],
        },
      },
      ImageLoader: {
        getSize: jest.fn((url, success) =>
          process.nextTick(() => success(320, 240)),
        ),
        prefetchImage: jest.fn(),
      },
      PlatformConstants: {
        forceTouchAvailable: false,
      },
    },
    StyleSheet: {
      create: (obj) => obj,
      flatten: (obj) => (Array.isArray(obj) ? Object.assign({}, ...obj) : obj),
      hairlineWidth: 1,
      absoluteFill: {},
    },
    Dimensions: {
      get: jest.fn(() => ({ width: 375, height: 812, scale: 2, fontScale: 1 })),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    },
    Animated: {
      View: "Animated.View",
      Text: "Animated.Text",
      Image: "Animated.Image",
      createAnimatedComponent: (c) => c,
      timing: () => ({ start: jest.fn() }),
      spring: () => ({ start: jest.fn() }),
      Value: jest.fn(() => ({ interpolate: jest.fn() })),
    },
    View: "View",
    Text: "Text",
    Image: "Image",
    TouchableOpacity: "TouchableOpacity",
    ScrollView: "ScrollView",
    TextInput: "TextInput",
    Alert: { alert: jest.fn() },
    InteractionManager: { runAfterInteractions: jest.fn((cb) => cb()) },
    I18nManager: { isRTL: false },
    Easing: { inOut: jest.fn(), ease: jest.fn() },
  };
});

jest.mock(
  "@react-native/js-polyfills/error-guard",
  () => ({
    ErrorUtils: {
      setGlobalHandler: jest.fn(),
    },
  }),
  { virtual: true },
);

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper", () => ({}), {
  virtual: true,
});

// Mock React Native internals
jest.mock(
  "react-native/Libraries/ReactPrivate/ReactNativePrivateInterface",
  () => ({
    ReactNativePrivateInterface: {
      initialize: jest.fn(),
    },
  }),
);

// Mock Expo modules
jest.mock("expo-crypto", () => {
  const mockCrypto = require("crypto");
  return {
    CryptoDigestAlgorithm: {
      SHA256: "SHA256",
      SHA512: "SHA512",
    },
    getRandomBytesAsync: jest.fn((length) =>
      Promise.resolve(
        Buffer.from(
          Array.from({ length }, (_, i) => Math.floor(Math.random() * 256)),
        ),
      ),
    ),
    digestStringAsync: jest.fn((algorithm, data) =>
      Promise.resolve(
        mockCrypto.createHash("sha256").update(data).digest("hex"),
      ),
    ),
  };
});

jest.mock("expo-constants", () => ({
  default: {},
}));

jest.mock("expo-font", () => ({
  loadAsync: jest.fn(),
}));

jest.mock("expo-splash-screen", () => ({
  hideAsync: jest.fn(),
}));

jest.mock("expo-sqlite", () => ({
  openDatabase: jest.fn(() => ({
    transaction: jest.fn(),
    executeSql: jest.fn(),
  })),
}));

// Mock React Navigation
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
  useRoute: () => ({
    params: {},
  }),
}));

// Mock global localStorage for web platform tests
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Mock timers
jest.useFakeTimers();
