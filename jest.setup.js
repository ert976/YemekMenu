// Mock React Native internals FIRST (before any other imports)

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    ...RN,
    Platform: {
      OS: 'web',
      select: jest.fn(obj => obj.web),
    },
    NativeModules: {
      ...RN.NativeModules,
      SettingsManager: {
        settings: {
          AppleLocale: 'en_US',
          AppleLanguages: ['en'],
        },
      },
    },
  };
});

jest.mock('@react-native/js-polyfills/error-guard', () => ({
  ErrorUtils: {
    setGlobalHandler: jest.fn(),
  },
}), { virtual: true });

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock React Native internals
jest.mock('react-native/Libraries/ReactPrivate/ReactNativePrivateInterface', () => ({
  ReactNativePrivateInterface: {
    initialize: jest.fn(),
  },
}));

// Mock Expo modules
jest.mock('expo-crypto', () => {
  const mockCrypto = require('crypto');
  return {
    CryptoDigestAlgorithm: {
      SHA256: 'SHA256',
      SHA512: 'SHA512',
    },
    getRandomBytesAsync: jest.fn((length) =>
      Promise.resolve(
        Buffer.from(
          Array.from({ length }, (_, i) => Math.floor(Math.random() * 256))
        )
      )
    ),
    digestStringAsync: jest.fn((algorithm, data) =>
      Promise.resolve(mockCrypto.createHash('sha256').update(data).digest('hex'))
    ),
  };
});

jest.mock('expo-constants', () => ({
  default: {},
}));

jest.mock('expo-font', () => ({
  loadAsync: jest.fn(),
}));

jest.mock('expo-splash-screen', () => ({
  hideAsync: jest.fn(),
}));

jest.mock('expo-sqlite', () => ({
  openDatabase: jest.fn(() => ({
    transaction: jest.fn(),
    executeSql: jest.fn(),
  })),
}));

// Mock React Navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
  useRoute: () => ({
    params: {},
  }),
}));

// Mock timers
jest.useFakeTimers();
