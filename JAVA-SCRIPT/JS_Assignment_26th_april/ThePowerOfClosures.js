// function setupCounter(initialValue) {
//     let count = initialValue;
  
//     function increment() {
//       count++;
//       return count;
//     }
  
//     function decrement() {
//       count--;
//       return count;
//     }
  
//     return {
//       increment: increment,
//       decrement: decrement
//     };
//   }
  
//   const counterOne = setupCounter(5);
//   console.log(counterOne.increment());
//   console.log(counterOne.increment());
//   const counterTwo = setupCounter(10);
//   console.log(counterTwo.decrement());
//   console.log(counterOne.decrement());

/**
 Explanation
Each call to setupCounter creates a new count variable in its own scope.
The returned increment and decrement functions close over this count, meaning they retain access to it.
counterOne and counterTwo maintain independent states, as they were created by separate function calls with different initialValues.
 */

/**
✅ What is a Closure?
A closure in JavaScript is formed when an inner function "remembers" the variables from its outer (enclosing) function even after the outer function has finished executing.

In other words:
Functions in JavaScript can access variables defined outside of them.
When you return a function from another function, the returned function keeps a reference to the variables of the outer function — this is a closure.
 */

// function createGreeting(greeting) {
//     return function(name) {
//       return `${greeting}, ${name}!`;
//     };
//   }
  
//   // Usage:
//   const sayHello = createGreeting("Hello");
//   console.log(sayHello("World")); // Hello, World!
//   console.log(sayHello("Alice")); // Hello, Alice!
  
//   const sayHi = createGreeting("Hi");
//   console.log(sayHi("Bob")); // Hi, Bob!
/**
Explanation
The returned function remembers the greeting variable from the outer scope using a closure.
This allows it to combine the greeting with any name provided. 
*/  

function createSecretHolder(secret) {
    let privateSecret = secret;
  
    return {
      getSecret: function() {
        return privateSecret;
      },
      setSecret: function(newSecret) {
        privateSecret = newSecret;
      }
    };
  }
  
  // Usage:
  const secretObj = createSecretHolder("top-secret");
  
  console.log(secretObj.getSecret()); // top-secret
  secretObj.setSecret("new-secret");
  console.log(secretObj.getSecret()); // new-secret
  
  // You can't access privateSecret directly
  console.log(secretObj.privateSecret); // undefined
  
/**
 Explanation
privateSecret is scoped to the createSecretHolder function.
It is not attached to the returned object, so it remains inaccessible from outside — only getSecret and setSecret have access via closure.
 */

/**
Summary
Closures allow functions to "remember" and access variables from their defining scope even after that scope has exited.
This enables data encapsulation, persistent state, and modularity.
Both createGreeting and createSecretHolder showcase the power of closures to build flexible, secure, and stateful logic.
 */
