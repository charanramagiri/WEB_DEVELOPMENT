// function flexibleFunction(a, b, ...rest) {
//     console.log("a:", a);
//     console.log("b:", b);
//     console.log("rest:", rest);
//   }
  
//   flexibleFunction(1);
//   flexibleFunction(1, 2);
//   flexibleFunction(1, 2, 3, 4, 5);

/**
In JavaScript:
If fewer arguments are passed than defined parameters, the missing ones become undefined.
If more arguments are passed, the extra arguments are ignored unless the function uses the rest parameter.

 Rest Parameter (...rest)
✅ Purpose
Collects all remaining arguments into an array.
Enables functions to be flexible and accept any number of arguments.

Syntax
function example(a, b, ...rest) {
  // rest is an array of remaining arguments
}
⚠️ The rest parameter must be last in the parameter list.

sumAll – Sum Any Number of Arguments
✅ Implementation
 */

// function sumAll(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
//   }
  
//   // Usage
//   console.log(sumAll(1, 2, 3));       // 6
//   console.log(sumAll(10));           // 10
//   console.log(sumAll());             // 0
//   console.log(sumAll(5, 10, 15, 20)); // 50

/*
  Explanation
...numbers captures all arguments in an array.
reduce() sums them up.
*/

/*
processArguments
✅ Requirement
First argument = a function (primary function).
Rest of arguments = passed into the primary function.
*/

function processArguments(primaryFn, ...args) {
    return primaryFn(...args);
  }
  
  // Example primary function
  function multiply(x, y) {
    return x * y;
  }
  
  // Usage
  console.log(processArguments(multiply, 5, 3)); // 15
  
  // More examples
  function greet(greeting, name) {
    return `${greeting}, ${name}!`;
  }
  
  console.log(processArguments(greet, "Hello", "Alice")); // Hello, Alice!
  

