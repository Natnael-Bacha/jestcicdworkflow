const calculator = require("./calculator");

describe("Calculator Function Test Suite", () => {
  // ADDITION TESTS
  describe("Addition Function", () => {
    describe("Adding positive numbers", () => {
      test("should return correct sum of two numbers", () => {
        // Arrange
        const firstNumber = 1;
        const secondNumber = 2;

        // Act
        const result = calculator.add(firstNumber, secondNumber);

        // Assert
        expect(result).toBe(3);
      });

      test("should add larger positive values correctly", () => {
        expect(calculator.add(10, 20)).toBe(30);
        expect(calculator.add(100, 50)).toBe(150);
      });
    });

    describe("Adding negative numbers", () => {
      test("should add two negative numbers", () => {
        expect(calculator.add(-5, -3)).toBe(-8);
      });

      test("should handle mixed positive and negative numbers", () => {
        expect(calculator.add(-10, 5)).toBe(-5);
        expect(calculator.add(10, -5)).toBe(5);
      });
    });

    describe("Adding zero values", () => {
      test("should return the other number when adding zero", () => {
        expect(calculator.add(0, 5)).toBe(5);
        expect(calculator.add(5, 0)).toBe(5);
      });

      test("should return zero when adding two zeros", () => {
        expect(calculator.add(0, 0)).toBe(0);
      });
    });

    describe("Adding decimal numbers", () => {
      test("should handle floating point precision", () => {
        expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3, 5);
      });

      test("should add decimal values correctly", () => {
        expect(calculator.add(2.5, 3.5)).toBe(6);
      });
    });
  });

  // SUBTRACTION TESTS
  describe("Subtraction Function", () => {
    describe("Subtracting positive numbers", () => {
      test("should subtract two numbers correctly", () => {
        // Arrange
        const firstNumber = 5;
        const secondNumber = 2;

        // Act
        const result = calculator.subtract(firstNumber, secondNumber);

        // Assert
        expect(result).toBe(3);
      });

      test("should subtract larger values correctly", () => {
        expect(calculator.subtract(20, 10)).toBe(10);
        expect(calculator.subtract(100, 50)).toBe(50);
      });
    });

    describe("Subtracting negative numbers", () => {
      test("should handle negative subtraction", () => {
        expect(calculator.subtract(-5, -3)).toBe(-2);
        expect(calculator.subtract(-10, 5)).toBe(-15);
        expect(calculator.subtract(10, -5)).toBe(15);
      });
    });

    describe("Subtracting zero values", () => {
      test("should keep original value when subtracting zero", () => {
        expect(calculator.subtract(5, 0)).toBe(5);
      });

      test("should return negative value when subtracting from zero", () => {
        expect(calculator.subtract(0, 5)).toBe(-5);
      });

      test("should return zero when subtracting zeros", () => {
        expect(calculator.subtract(0, 0)).toBe(0);
      });
    });

    describe("Subtracting decimals", () => {
      test("should subtract decimal values correctly", () => {
        expect(calculator.subtract(5.5, 2.5)).toBe(3);
      });

      test("should handle decimal precision issues", () => {
        expect(calculator.subtract(10.3, 0.3)).toBeCloseTo(10, 5);
      });
    });
  });

  //  MULTIPLICATION TESTS
  describe("Multiplication Function", () => {
    test("should multiply two numbers", () => {
      const result = calculator.multiply(3, 4);

      expect(result).toBe(12);
    });

    test("should multiply positive values", () => {
      expect(calculator.multiply(5, 6)).toBe(30);
      expect(calculator.multiply(10, 10)).toBe(100);
    });

    test("should handle negative multiplication", () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
      expect(calculator.multiply(-5, 6)).toBe(-30);
      expect(calculator.multiply(5, -6)).toBe(-30);
    });

    test("should return zero when multiplying by zero", () => {
      expect(calculator.multiply(5, 0)).toBe(0);
      expect(calculator.multiply(0, 10)).toBe(0);
      expect(calculator.multiply(0, 0)).toBe(0);
    });

    test("should multiply decimal numbers", () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
      expect(calculator.multiply(0.5, 0.5)).toBe(0.25);
    });
  });

  //  DIVISION TESTS
  describe("Division Function", () => {
    test("should divide numbers correctly", () => {
      const dividend = 10;
      const divisor = 2;

      const result = calculator.divide(dividend, divisor);

      expect(result).toBe(5);
    });

    test("should divide positive numbers", () => {
      expect(calculator.divide(20, 4)).toBe(5);
      expect(calculator.divide(100, 10)).toBe(10);
    });

    test("should return positive result for negative division", () => {
      expect(calculator.divide(-10, 2)).toBe(5);

      expect(calculator.divide(10, -2)).toBe(5);

      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test("should return zero when dividing zero", () => {
      expect(calculator.divide(0, 5)).toBe(0);
      expect(calculator.divide(0, -5)).toBe(0);
    });

    test("should throw error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");

      expect(() => calculator.divide(0, 0)).toThrow("Cannot divide by zero");

      expect(() => calculator.divide(-10, 0)).toThrow("Cannot divide by zero");
    });

    test("should handle decimal division", () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.33, 2);

      expect(calculator.divide(7.5, 2.5)).toBe(3);
    });
  });
});
