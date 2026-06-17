// Add two numbers
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

// Subtract
function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

// Multiplies two numbers together
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

// Divides two numbers while handling special cases
function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new Error("Cannot divide by zero");
  }

  if (dividend < 0 || divisor < 0) {
    return Math.abs(dividend / divisor);
  }

  return dividend / divisor;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
