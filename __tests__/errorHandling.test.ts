import { getAllFoods, getUserPreferences } from "../database/index";
import { generateBalancedMenu } from "../mealPlanner";
import {
  AppError,
  ErrorType,
  InsufficientDataError,
} from "../utils/errorHandler";

const ErrorCode = {
  INSUFFICIENT_DATA: ErrorType.INSUFFICIENT_DATA,
  AUTH_ERROR: ErrorType.AUTH,
};

// Mock the database functions
jest.mock("../database/index");


describe("Error Handling Verification", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Default mock for getUserPreferences
    (getUserPreferences as jest.Mock).mockResolvedValue({
      likedIds: [],
      dislikedIds: [],
    });
  });

  describe("mealPlanner Error Handling", () => {
    it("should throw InsufficientDataError when fewer than 5 foods are available", async () => {
      // Mevcut implementasyon: filteredFoods.length < 5 ise hata fırlatır
      (getAllFoods as jest.Mock).mockResolvedValue([
        { id: 1, name: "Yemek 1", category: "Test" },
        { id: 2, name: "Yemek 2", category: "Test" },
      ]);

      await expect(generateBalancedMenu(7)).rejects.toBeInstanceOf(
        InsufficientDataError,
      );
      await expect(generateBalancedMenu(7)).rejects.toMatchObject({
        code: ErrorCode.INSUFFICIENT_DATA,
        message: "Diyetiniz için yeterli çeşitlilikte yemek bulunamadı.",
      });
    });

    it("should throw InsufficientDataError when no foods match the diet filter", async () => {
      // Sadece et yemekleri var, vegetarian filtresi uygulandığında boş kalır
      const mockFoods = [
        {
          id: 1,
          name: "Etli Yemek 1",
          category: "Et Yemekleri",
          is_vegetarian: 0,
        },
        {
          id: 2,
          name: "Etli Yemek 2",
          category: "Et Yemekleri",
          is_vegetarian: 0,
        },
        {
          id: 3,
          name: "Etli Yemek 3",
          category: "Et Yemekleri",
          is_vegetarian: 0,
        },
        {
          id: 4,
          name: "Etli Yemek 4",
          category: "Et Yemekleri",
          is_vegetarian: 0,
        },
        {
          id: 5,
          name: "Etli Yemek 5",
          category: "Et Yemekleri",
          is_vegetarian: 0,
        },
      ];
      (getAllFoods as jest.Mock).mockResolvedValue(mockFoods);

      await expect(
        generateBalancedMenu(7, "vegetarian"),
      ).rejects.toBeInstanceOf(InsufficientDataError);
    });

    it("should propagate database errors", async () => {
      (getAllFoods as jest.Mock).mockRejectedValue(
        new Error("Database connection failed"),
      );

      await expect(generateBalancedMenu(7)).rejects.toThrow(
        "Database connection failed",
      );
    });
  });

  describe("Custom Error Classes", () => {
    it("AppError should correctly capture code and message", () => {
      const error = new AppError("Invalid credentials", ErrorType.AUTH);
      expect(error.type).toBe(ErrorType.AUTH);
      expect(error.message).toBe("Invalid credentials");
    });


    it("InsufficientDataError should have INSUFFICIENT_DATA code", () => {
      const error = new InsufficientDataError("Not enough food");
      expect(error.code).toBe(ErrorCode.INSUFFICIENT_DATA);
      expect(error.message).toBe("Not enough food");
    });
  });
});
