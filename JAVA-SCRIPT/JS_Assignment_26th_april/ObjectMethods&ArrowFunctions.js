// const user = {
//     name: "Alice",
//     greetDelayed: function() {
//       setTimeout(function() {
//         console.log(`Hello, ${this.name}!`);
//       }, 1000);
//     }
//   };
  
//   user.greetDelayed(); // Expected: Hello, Alice! | Actual: Hello, undefined!
  
/**
Why this Doesn’t Work as Expected

In the original version, the setTimeout callback is a regular function, and in JavaScript:
Regular functions have their own this context.
Inside setTimeout, the callback is invoked by the timer, not the object, so this refers to the global object (window in browsers) or undefined in strict mode.
Therefore, this.name inside the callback does not refer to user.name, and the result is "Hello, undefined!".
 */

//✅ Fix 1: Using self = this to Capture the Object

// const userCorrectedTraditional = {
//     name: "Alice",
//     greetDelayed: function() {
//       const self = this; // Save reference to the object
//       setTimeout(function() {
//         console.log(`Hello, ${self.name}!`);
//       }, 1000);
//     }
//   };
  
//   userCorrectedTraditional.greetDelayed(); // Output after 1 second: Hello, Alice!

/**
 Why This Works
We assign this (which refers to userCorrectedTraditional) to a new variable self.
The inner function doesn’t lose the original object reference, because it uses self.name instead of this.name.
 */

//Fix 2: Using an Arrow Function (Lexical this)

// const userCorrectedArrow = {
//     name: "Bob",
//     greetDelayed: function() {
//       setTimeout(() => {
//         console.log(`Hello, ${this.name}!`);
//       }, 1000);
//     }
//   };
  
//   userCorrectedArrow.greetDelayed(); // Output after 1 second: Hello, Bob!

/**
What is Lexical this?
Arrow functions do not have their own this. They capture this from the surrounding scope where they are defined.
Here, this inside the arrow function refers to the userCorrectedArrow object because it inherits from the method's context.
 */


//Here’s an object that fails and is then fixed:

// const car = {
//     brand: "Tesla",
//     beep: function() {
//       setTimeout(function() {
//         console.log(`Beep from ${this.brand}`);
//       }, 1000);
//     }
//   };
  
//   car.beep(); // Beep from undefined


// Fixed Example Using Arrow Function:
  const carFixed = {
    brand: "Tesla",
    beep: function() {
      setTimeout(() => {
        console.log(`Beep from ${this.brand}`);
      }, 1000);
    }
  };
  
  carFixed.beep(); // Beep from Tesla

/**
The original code fails because regular functions have their own this and lose the object context.
Using a saved variable like self = this preserves object reference in callbacks.
Arrow functions lexically bind this, so they naturally refer to the surrounding object context.
Always be cautious with this in asynchronous code!
 */