// Original Code (Incorrect)

// function delayedGreeter(names) {
//     for (var i = 0; i < names.length; i++) {
//       setTimeout(function () {
//         console.log(`Hello, ${names[i]}!`);
//       }, i * 1000);
//     }
//   }
//   delayedGreeter(['Alice', 'Bob', 'Charlie']);


    /*Issue: All outputs show undefined or last name because var is function-scoped.
    Hello, undefined!
    Hello, undefined!
    Hello, undefined!
    Or in some cases:

    Hello, Charlie!
    Hello, Charlie!
    Hello, Charlie!

    The variable i is declared with var, which has function scope.
    By the time setTimeout runs, the loop has already finished, and i == 3.
    So, names[i] becomes names[3], which is undefined.
    */

//   Corrected with IIFE

// function delayedGreeter(names) {
//     for (var i = 0; i < names.length; i++) {
//       (function (index) {
//         setTimeout(function () {
//           console.log(`Hello, ${names[index]}!`);
//         }, index * 1000);
//       })(i);
//     }
//   }
//   delayedGreeter(['Alice', 'Bob', 'Charlie']);

  /**
Explanation of the Correction:
IIFE Creates New Scope: The (function(index) { ... })(i) creates a new function scope for each iteration of the for loop.
index Parameter: The current value of i is passed as an argument to the IIFE, and it becomes the index parameter within that IIFE's scope.
Closure over index: The anonymous function inside setTimeout now closes over the index variable of the IIFE's scope, which holds the specific value of i from that particular iteration.
Alternatively (and more modernly), you can use let instead of var:
   */

// Corrected with let

function delayedGreeter(names) {
    for (let i = 0; i < names.length; i++) {
      setTimeout(function () {
        console.log(`Hello, ${names[i]}!`);
      }, i * 1000);
    }
  }
  delayedGreeter(['Alice', 'Bob', 'Charlie']);
  /*
    Each closure now "remembers" the correct value of i for that iteration.
    IIFE creates a new function scope.
    let creates a new block scope for each loop iteration
  */

    /*
    Explanation (Why the Fix Works):
    IIFE Version:
    The IIFE ((function(index) { ... })(i)) creates a new function scope for each iteration.
    The variable index holds the correct value of i at that point.
    The closure formed inside setTimeout refers to index, not the outer i.
    
    let Version:
    let is block-scoped, meaning each iteration of the loop has its own separate i.
    The closure from setTimeout refers to the correct i for that specific loop cycle.
    */