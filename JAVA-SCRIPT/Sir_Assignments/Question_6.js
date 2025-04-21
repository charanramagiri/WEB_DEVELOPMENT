function createCalculator() {
    return {
      add: function(a, b) {
        return a + b;
      },
      subtract: function(a, b) {
        return a - b;
      },
      multiply: function(a, b) {
        return a * b;
      },
      divide: function(a, b) {
        if (b === 0) {
          return "Error: Division by zero";
        }
        return a / b;
      }
    };
  }
  const calculator = createCalculator();

  console.log(calculator.add(5, 3));       // Output: 8
  console.log(calculator.subtract(10, 4)); // Output: 6
  console.log(calculator.multiply(2, 6));  // Output: 12
  console.log(calculator.divide(8, 2));    // Output: 4
  console.log(calculator.divide(8, 0));    // Output: Error: Division by zero