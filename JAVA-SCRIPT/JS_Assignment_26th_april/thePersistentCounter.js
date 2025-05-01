function createCounter() {
    let count = 0;
    function incrementCounter() {
        count++;
        return count;
    }
    return incrementCounter;
}

const counterA = createCounter();
console.log(counterA()); // Expected: 1, Actual: ?
console.log(counterA()); // Expected: 2, Actual: ?

const counterB = createCounter();
console.log(counterB()); // Expected: 1 (independent counter), Actual: ?



/* A closure is a feature in JavaScript where:
 An inner function has access to variables from its outer (enclosing) function’s scope even after the outer function has finished executing.
 */

 /* because of closure the inner function remember the value of the outer function*/