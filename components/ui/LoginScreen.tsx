import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../auth';
import { BorderRadius, Colors, Spacing, Typography } from '../../constants/theme';
import { handleApiError, withErrorHandling } from '../../utils/errorHandler';

interface LoginScreenProps {
  onLoginSuccess?: () => void;
  onRegisterPress?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onLoginSuccess,
  onRegisterPress
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const { login } = useAuth();

  const validateForm = (): boolean => {
    const newErrors: { username?: string; password?: string } = {};

    if (!username.trim()) {
      newErrors.username = 'Kullanıcı adı gereklidir';
    } else if (username.length < 3) {
      newErrors.username = 'Kullanıcı adı en az 3 karakter olmalıdır';
    }

    if (!password.trim()) {
      newErrors.password = 'Şifre gereklidir';
    } else if (password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalıdır';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      await withErrorHandling(
        login(username, password),
        'LoginScreen.handleLogin'
      );

      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (error) {
      const appError = handleApiError(error);
      Alert.alert('Giriş Hatası', appError.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setIsLoading(true);
    setUsername('demokullanici');
    setPassword('demoparola');

    try {
      await withErrorHandling(
        login('demokullanici', 'demoparola'),
        'LoginScreen.handleDemoLogin'
      );

      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (error) {
      const appError = handleApiError(error);
      Alert.alert('Demo Giriş Hatası', appError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>YemekMenu</Text>
            <Text style={styles.subtitle}>Kişisel Menü Planlama Uygulamanız</Text>
          </View>

          {/* Login Form */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Kullanıcı Adı</Text>
              <TextInput
                style={[
                  styles.input,
                  errors.username ? styles.inputError : null
                ]}
                placeholder="Kullanıcı adınızı girin"
                placeholderTextColor={Colors.light.textSecondary}
                value={username}
                onChangeText={(text) => {
                  setUsername(text);
                  if (errors.username) {
                    setErrors(prev => ({ ...prev, username: undefined }));
                  }
                }}
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLoading}
              />
              {errors.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Şifre</Text>
              <TextInput
                style={[
                  styles.input,
                  errors.password ? styles.inputError : null
                ]}
                placeholder="Şifrenizi girin"
                placeholderTextColor={Colors.light.textSecondary}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (errors.password) {
                    setErrors(prev => ({ ...prev, password: undefined }));
                  }
                }}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLoading}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <TouchableOpacity
              style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#ffffff" size="small" />
              ) : (
                <Text style={styles.loginButtonText}>Giriş Yap</Text>
              )}
            </TouchableOpacity>

            {/* Demo Login Button */}
            <TouchableOpacity
              style={styles.demoButton}
              onPress={handleDemoLogin}
              disabled={isLoading}
            >
              <Text style={styles.demoButtonText}>Demo Giriş</Text>
            </TouchableOpacity>

            {/* Register Link */}
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Hesabınız yok mu? </Text>
              <TouchableOpacity onPress={onRegisterPress} disabled={isLoading}>
                <Text style={styles.registerLink}>Kayıt Ol</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Lezzetli ve dengeli beslenme için yanınızdayız 🍳
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  title: {
    ...Typography.display.large,
    color: Colors.light.textMain,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    ...Typography.body.medium,
    color: Colors.light.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  form: {
    backgroundColor: Colors.light.surface,
    borderRadius: BorderRadius.extraLarge,
    padding: Spacing.lg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: Spacing.lg,
  },
  inputGroup: {
    marginBottom: Spacing.lg,
  },
  label: {
    ...Typography.heading.small,
    color: Colors.light.textMain,
    marginBottom: Spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: BorderRadius.default,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    fontSize: Typography.body.medium.fontSize,
    color: Colors.light.textMain,
    backgroundColor: Colors.light.surface,
    fontFamily: Typography.body.medium.fontFamily,
  },
  inputError: {
    borderColor: Colors.light.error,
    borderWidth: 2,
  },
  errorText: {
    ...Typography.body.small,
    color: Colors.light.error,
    marginTop: Spacing.xs,
  },
  loginButton: {
    backgroundColor: Colors.light.primary,
    borderRadius: BorderRadius.default,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  loginButtonDisabled: {
    backgroundColor: Colors.light.textSecondary,
  },
  loginButtonText: {
    color: Colors.light.surface,
    ...Typography.heading.medium,
  },
  demoButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.light.primary,
    borderRadius: BorderRadius.default,
    paddingVertical: Spacing.sm,
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  demoButtonText: {
    color: Colors.light.primary,
    ...Typography.heading.medium,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  registerText: {
    ...Typography.body.medium,
    color: Colors.light.textSecondary,
  },
  registerLink: {
    ...Typography.body.medium,
    color: Colors.light.primary,
    fontFamily: Typography.body.medium.fontFamily,
  },
  footer: {
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  footerText: {
    ...Typography.body.small,
    color: Colors.light.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
