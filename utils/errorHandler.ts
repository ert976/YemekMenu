import { Alert } from "react-native";

export enum ErrorType {
  NETWORK = "NETWORK",
  VALIDATION = "VALIDATION",
  DATABASE = "DATABASE",
  AUTH = "AUTH",
  INSUFFICIENT_DATA = "INSUFFICIENT_DATA",
  UNKNOWN = "UNKNOWN",
}

export class AppError extends Error {
  public type: ErrorType;
  public userMessage: string;
  public code?: string; // Legacy support for tests

  constructor(
    message: string,
    type: ErrorType = ErrorType.UNKNOWN,
    userMessage?: string,
  ) {
    super(message);
    this.name = "AppError";
    this.type = type;
    this.code = type; // Map type to code for legacy support
    this.userMessage = userMessage || "Bir hata oluştu. Lütfen tekrar deneyin.";
  }
}

export class InsufficientDataError extends AppError {
  constructor(message: string) {
    super(message, ErrorType.INSUFFICIENT_DATA, message);
    this.name = "InsufficientDataError";
  }
}

interface ErrorHandlerOptions {
  showToast?: boolean;
  log?: boolean;
  toastFn?: (msg: string) => void;
}

export const handleError = (
  error: unknown,
  options: ErrorHandlerOptions = { showToast: true, log: true },
) => {
  let appError: AppError;

  if (error instanceof AppError) {
    appError = error;
  } else if (error instanceof Error) {
    appError = new AppError(error.message, ErrorType.UNKNOWN);
  } else {
    appError = new AppError(
      "Bilinmeyen bir hata oluştu",
      ErrorType.UNKNOWN,
      "Beklenmedik bir sorun oluştu.",
    );
  }

  if (options.log) {
    console.error(`[${appError.type}] ${appError.message}`, error);
  }

  if (options.showToast && options.toastFn) {
    options.toastFn(appError.userMessage);
  } else if (options.showToast) {
    // Fallback if no toast function provided (e.g. legacy Alert)
    Alert.alert("Hata", appError.userMessage);
  }

  return appError;
};

/**
 * Async işlemleri hata yönetimi ile sarmalar
 */
export async function withErrorHandling<T>(
  promise: Promise<T>,
  context?: string
): Promise<T> {
  try {
    return await promise;
  } catch (err) {
    const errorWithContext = err instanceof Error ? err : new Error(String(err));
    if (context) {
      errorWithContext.message = `[${context}] ${errorWithContext.message}`;
    }
    handleError(errorWithContext);
    throw errorWithContext;
  }
}

// Yardımcı Hata Oluşturucular
export const createNetworkError = (msg: string) =>
  new AppError(
    msg,
    ErrorType.NETWORK,
    "Bağlantı sorunu. İnternetini kontrol et.",
  );

export const createValidationError = (msg: string) =>
  new AppError(msg, ErrorType.VALIDATION, msg);

export const createAuthError = (msg: string) =>
  new AppError(msg, ErrorType.AUTH, "Oturum hatası. Lütfen tekrar giriş yap.");
