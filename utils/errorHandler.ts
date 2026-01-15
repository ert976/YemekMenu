import { Alert } from 'react-native';
import { AppError } from '../types';

// Error handling utility functions
export const handleApiError = (error: any): AppError => {
  // Network error'ları
  if (error.code === 'NETWORK_ERROR' || error.message?.includes('network')) {
    return {
      code: 'NETWORK_ERROR',
      message: 'İnternet bağlantısı yok. Lütfen bağlantınızı kontrol edin.',
      details: error
    };
  }

  // Authentication error'ları
  if (error.code === 'AUTH_ERROR' || error.message?.includes('auth')) {
    return {
      code: 'AUTH_ERROR',
      message: 'Giriş yapılamadı. Lütfen kullanıcı adınızı ve şifrenizi kontrol edin.',
      details: error
    };
  }

  // Validation error'ları
  if (error.code === 'VALIDATION_ERROR' || error.message?.includes('validation')) {
    return {
      code: 'VALIDATION_ERROR',
      message: 'Girdiğiniz bilgiler geçersiz. Lütfen tüm alanları doğru doldurun.',
      details: error
    };
  }

  // Database error'ları
  if (error.code === 'DATABASE_ERROR' || error.message?.includes('database')) {
    return {
      code: 'DATABASE_ERROR',
      message: 'Veritabanı hatası oluştu. Lütfen daha sonra tekrar deneyin.',
      details: error
    };
  }

  // Not found error'ları
  if (error.code === 'NOT_FOUND' || error.message?.includes('not found')) {
    return {
      code: 'NOT_FOUND',
      message: 'Aradığınız bulunamadı.',
      details: error
    };
  }

  // Permission error'ları
  if (error.code === 'PERMISSION_DENIED' || error.message?.includes('permission')) {
    return {
      code: 'PERMISSION_DENIED',
      message: 'Bu işlem için yetkiniz bulunmuyor.',
      details: error
    };
  }

  // Genel error handling
  return {
    code: 'UNKNOWN_ERROR',
    message: 'Beklenmedik bir hata oluştu. Lütfen tekrar deneyin.',
    details: error
  };
};

// User-friendly error message gösterimi
export const showUserFriendlyError = (error: AppError) => {
  console.error('App Error:', error);
  
  // React Native Alert kullanarak kullanıcıya göster
  if (typeof Alert !== 'undefined') {
    Alert.alert(
      'Hata',
      error.message,
      [
        {
          text: 'Tamam',
          onPress: () => console.log('Error acknowledged by user')
        }
      ]
    );
  }
};

// Error logging fonksiyonu
export const logError = (context: string, error: any, additionalInfo?: any) => {
  const timestamp = new Date().toISOString();
  const errorLog = {
    timestamp,
    context,
    message: error.message || 'Unknown error',
    code: error.code || 'UNKNOWN_ERROR',
    additionalInfo
  };
  
  console.error('Error Log:', JSON.stringify(errorLog, null, 2));
  
  // Gerçek uygulamada analytics servisine gönderilebilir
  // Örnek: analytics.track('error', errorLog);
};

// Async error wrapper
export const withErrorHandling = async <T>(
  promise: Promise<T>,
  context: string,
  additionalInfo?: any
): Promise<T> => {
  try {
    return await promise;
  } catch (error) {
    const appError = handleApiError(error);
    logError(context, error, additionalInfo);
    showUserFriendlyError(appError);
    throw appError;
  }
};

// Error boundary için yardımcı fonksiyon
export const getErrorDisplayInfo = (error: AppError) => {
  return {
    title: 'Hata Oluştu',
    message: error.message,
    canRetry: !['NETWORK_ERROR', 'DATABASE_ERROR'].includes(error.code),
    retryText: error.code === 'NETWORK_ERROR' ? 'Bağlantıyı kontrol et' : 'Tekrar dene'
  };
};
