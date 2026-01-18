import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// Must be exported or Fast Refresh won't update the context
export default function App() {
  const ctx = require.context('./app', true, /\.(js|jsx|ts|tsx)$/);
  return ExpoRoot.useExpoRoot(ctx);
}

registerRootComponent(App);
