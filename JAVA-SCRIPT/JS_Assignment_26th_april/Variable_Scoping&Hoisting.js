//original code

console.log(mysteryVariable);
mysteryVariable = 10;
console.log(mysteryVariable);

function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable);
  var mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable);
}

revealMystery();
console.log("After revealMystery:", mysteryVariable);

//Modified Code Using let:

console.log(mysteryVariable);
mysteryVariable = 10;
console.log(mysteryVariable);

function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable);
  let mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable);
}

revealMystery();
console.log("After revealMystery:", mysteryVariable);

/**
 🧠 Explanation: Why let Throws an Error
let is hoisted, but unlike var, it does not initialize to undefined. It remains in a "temporal dead zone" (TDZ) from the start of the block until the declaration line.

Therefore, the first access of mysteryVariable (before the assignment) throws a ReferenceError.

This behavior helps prevent bugs caused by accessing variables before they are properly initialized.


 */


/**
 📚 Short Paragraph: Understanding Hoisting
In JavaScript, hoisting is a mechanism where variable and function declarations are moved to the top of their containing scope during compilation. Variables declared with var are hoisted and initialized to undefined, which allows them to be accessed before their declaration—though this can cause confusing bugs. On the other hand, variables declared with let and const are also hoisted but are not initialized. They remain in a Temporal Dead Zone (TDZ) until their declaration is encountered, meaning any attempt to access them beforehand will throw a ReferenceError. This makes let and const safer and more predictable for block-scoped code.
 */