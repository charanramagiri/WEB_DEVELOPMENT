/**

Coding Question 1: The Encapsulated Counter Factory
Write a function called createUniqueCounter that, when invoked, returns a new counter
object. Each counter object should have two methods:
● increment(): Increments an internal counter variable (initially 0) and returns the
new value.
● getValue(): Returns the current value of the internal counter variable without
modifying it.
Ensure that the internal counter variable is not directly accessible or modifiable from outside
the counter object. Demonstrate the creation and usage of two independent counter objects
created by createUniqueCounter.

**/
function createUniqueCounter() {
    let count = 0; // private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
}

// Demonstration:

const counter1 = createUniqueCounter();
console.log(counter1.getValue());   // Output: 0
console.log(counter1.increment());  // Output: 1
console.log(counter1.increment());  // Output: 2
console.log(counter1.getValue());   // Output: 2

const counter2 = createUniqueCounter();
console.log(counter2.getValue());   // Output: 0 (independent counter)
console.log(counter2.increment());  // Output: 1
console.log(counter1.getValue());   // Output: 2 (counter1 is still at 2, unaffected)
