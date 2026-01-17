// Jest polyfills for React Native 0.81.5 (Node Environment)

// TextEncoder/TextDecoder polyfills
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Window object for React Native compatibility
global.window = {
  requestAnimationFrame: jest.fn((cb) => setTimeout(cb, 0)),
  cancelAnimationFrame: jest.fn((id) => clearTimeout(id)),
  scrollTo: jest.fn(),
  getComputedStyle: jest.fn(() => ({
    getPropertyValue: jest.fn(() => ''),
  })),
  document: {
    createElement: jest.fn(() => ({
      style: {},
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })),
  },
  navigator: {
    userAgent: 'jest',
  },
  localStorage: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
  sessionStorage: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
};

// Console override (optional, keeps original)
global.console = {
  ...console,
};

// Performance API
global.performance = {
  now: jest.fn(() => Date.now()),
  mark: jest.fn(),
  measure: jest.fn(),
  getEntriesByName: jest.fn(() => []),
  getEntriesByType: jest.fn(() => []),
  clearMarks: jest.fn(),
  clearMeasures: jest.fn(),
};

// RequestAnimationFrame / CancelAnimationFrame
global.requestAnimationFrame = jest.fn((cb) => setTimeout(cb, 0));
global.cancelAnimationFrame = jest.fn((id) => clearTimeout(id));

// WebSocket
global.WebSocket = jest.fn(() => ({
  close: jest.fn(),
  send: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

// Fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({}),
    text: () => Promise.resolve(''),
  })
);

