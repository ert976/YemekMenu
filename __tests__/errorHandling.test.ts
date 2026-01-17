import { getAllFoods } from "../database";
import { generateBalancedMenu } from "../mealPlanner";
import { AppError, ErrorCode, InsufficientDataError } from "../utils/errors";

// Mock the database functions
jest.mock("../database");

describe("Error Handling Verification", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("mealPlanner Error Handling", () => {
    it("should throw InsufficientDataError when no foods are available in database", async () => {
      (getAllFoods as jest.Mock).mockResolvedValue([]);

      await expect(generateBalancedMenu(7)).rejects.toMatchObject({
        code: ErrorCode.VALIDATION_ERROR,
        message: "Veritabanında hiç yemek bulunamadı.",
      });
    });

    it("should throw InsufficientDataError when no foods match the diet filter", async () => {
      const mockFoods = [
        {
          id: 1,
          name: "Etli Yemek",
          category: "Et Yemekleri",
          is_vegetarian: 0,
          is_vegan: 0,
          is_halal: 1,
        },
      ];
      (getAllFoods as jest.Mock).mockResolvedValue(mockFoods);

      await expect(generateBalancedMenu(7, "vegetarian")).rejects.toMatchObject(
        {
          code: ErrorCode.VALIDATION_ERROR,
          message: expect.stringMatching(/için uygun yemek bulunamadı/),
        },
      );
    });

    it("should wrap unknown errors in AppError", async () => {
      (getAllFoods as jest.Mock).mockRejectedValue(
        new Error("Database explosion"),
      );

      await expect(generateBalancedMenu(7)).rejects.toMatchObject({
        code: ErrorCode.UNKNOWN_ERROR,
        message: "Menü oluşturulurken bir hata oluştu",
      });
    });
  });

  describe("Custom Error Classes", () => {
    it("AppError should correctly capture code and message", () => {
      const error = new AppError(ErrorCode.AUTH_ERROR, "Invalid credentials");
      expect(error.code).toBe(ErrorCode.AUTH_ERROR);
      expect(error.message).toBe("Invalid credentials");
    });

    it("InsufficientDataError should have correct code", () => {
      const error = new InsufficientDataError("Not enough food");
      expect(error.code).toBe(ErrorCode.VALIDATION_ERROR);
      expect(error.message).toBe("Not enough food");
    });
  });
});
