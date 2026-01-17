export enum ErrorCode {
  NETWORK_ERROR = "NETWORK_ERROR",
  AUTH_ERROR = "AUTH_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  DATABASE_ERROR = "DATABASE_ERROR",
  NOT_FOUND = "NOT_FOUND",
  PERMISSION_DENIED = "PERMISSION_DENIED",
  INSUFFICIENT_DATA = "INSUFFICIENT_DATA",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export class AppError extends Error {
  constructor(
    public code: ErrorCode,
    public message: string,
    public details?: any,
  ) {
    super(message);
    this.name = "AppError";
  }

  static fromError(
    error: any,
    defaultCode: ErrorCode = ErrorCode.UNKNOWN_ERROR,
  ): AppError {
    if (error instanceof AppError) {
      return error;
    }
    return new AppError(
      defaultCode,
      error.message || "Bilinmeyen bir hata oluştu",
      error,
    );
  }
}

export class AuthError extends AppError {
  constructor(message: string, details?: any) {
    super(ErrorCode.AUTH_ERROR, message, details);
    this.name = "AuthError";
  }
}

export class DatabaseError extends AppError {
  constructor(message: string, details?: any) {
    super(ErrorCode.DATABASE_ERROR, message, details);
    this.name = "DatabaseError";
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details?: any) {
    super(ErrorCode.VALIDATION_ERROR, message, details);
    this.name = "ValidationError";
  }
}

export class InsufficientDataError extends AppError {
  constructor(message: string, details?: any) {
    super(ErrorCode.INSUFFICIENT_DATA, message, details);
    this.name = "InsufficientDataError";
  }
}
