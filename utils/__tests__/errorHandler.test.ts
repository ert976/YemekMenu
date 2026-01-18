import {
    AppError,
    ErrorType,
    createNetworkError,
    handleError,
} from "../errorHandler";

// Mock Alert
jest.mock("react-native", () => ({
  Alert: { alert: jest.fn() },
}));

describe("errorHandler", () => {
  it("should return existing AppError as is", () => {
    const originalError = new AppError("Test error", ErrorType.VALIDATION);
    const result = handleError(originalError, { log: false });
    expect(result).toBe(originalError);
    expect(result.type).toBe(ErrorType.VALIDATION);
  });

  it("should convert standard Error to AppError", () => {
    const stdError = new Error("Standard error");
    const result = handleError(stdError, { log: false });
    expect(result).toBeInstanceOf(AppError);
    expect(result.message).toBe("Standard error");
    expect(result.type).toBe(ErrorType.UNKNOWN);
  });

  it("should handle unknown objects gracefully", () => {
    const result = handleError("Unknown string error", { log: false });
    expect(result.message).toBe("Bilinmeyen bir hata oluştu");
    expect(result.userMessage).toBe("Beklenmedik bir sorun oluştu.");
  });

  it("should execute toast callback if provided", () => {
    const toastFn = jest.fn();
    handleError(new Error("Toast test"), {
      showToast: true,
      toastFn,
      log: false,
    });
    expect(toastFn).toHaveBeenCalledWith(
      "Bir hata oluştu. Lütfen tekrar deneyin.",
    );
  });

  it("should create network error correctly", () => {
    const err = createNetworkError("No connection");
    expect(err.type).toBe(ErrorType.NETWORK);
    expect(err.userMessage).toContain("Bağlantı sorunu");
  });
});
