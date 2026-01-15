import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import 'react-native-reanimated';

import { AuthProvider } from '@/auth';
import { ResponsiveContainer } from '@/components/ResponsiveComponents';
import { BREAKPOINTS } from '@/constants/responsive';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

// Responsive layout wrapper
const ResponsiveLayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { width } = Dimensions.get('window');
  
  // Apply responsive styles based on screen size
  const getLayoutStyle = () => {
    if (width < BREAKPOINTS.TABLET) {
      return {
        flex: 1,
        backgroundColor: '#f8f7f5', // Light background for mobile
      };
    } else if (width < BREAKPOINTS.DESKTOP) {
      return {
        flex: 1,
        backgroundColor: '#ffffff', // White background for tablet
        maxWidth: BREAKPOINTS.TABLET,
        alignSelf: 'center' as const,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
      };
    } else {
      return {
        flex: 1,
        backgroundColor: '#ffffff', // White background for desktop
        maxWidth: BREAKPOINTS.DESKTOP,
        alignSelf: 'center' as const,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 5,
      };
    }
  };

  return (
    <ResponsiveContainer style={getLayoutStyle()}>
      {children}
    </ResponsiveContainer>
  );
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { width } = Dimensions.get('window');

  // Responsive header configuration
  const getHeaderOptions = () => {
    if (width < BREAKPOINTS.TABLET) {
      return {
        headerShown: false,
        presentation: 'modal' as const,
      };
    } else {
      return {
        headerShown: true,
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#221910' : '#f8f7f5',
          elevation: 2,
          shadowOpacity: 0.1,
        },
        headerTintColor: colorScheme === 'dark' ? '#f5f0eb' : '#181411',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: width < BREAKPOINTS.DESKTOP ? 18 : 20,
        },
      };
    }
  };

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ResponsiveLayoutWrapper>
          <Stack>
            <Stack.Screen 
              name="(tabs)" 
              options={{ 
                headerShown: width >= BREAKPOINTS.TABLET,
                headerStyle: {
                  backgroundColor: colorScheme === 'dark' ? '#221910' : '#f8f7f5',
                },
                headerTintColor: colorScheme === 'dark' ? '#f5f0eb' : '#181411',
              }} 
            />
            <Stack.Screen 
              name="modal" 
              options={{
                presentation: width < BREAKPOINTS.TABLET ? 'modal' : 'formSheet',
                ...getHeaderOptions(),
              }} 
            />
          </Stack>
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        </ResponsiveLayoutWrapper>
      </ThemeProvider>
    </AuthProvider>
  );
}
