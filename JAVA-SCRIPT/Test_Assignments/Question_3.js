/*
Coding Question 3: The Property Filtering Loop
Write a function called filterObjectProperties that takes an object and a minimum
length as arguments. This function should iterate through the properties of the input object. If
a property's value is a string and its length is greater than or equal to the provided minimum
length, create a new object containing only those properties (with the same keys). Return
this new object.
Example usage:
JavaScript
const data = { a: "short", b: "longer string", c: 123, d: "very long string indeed" };
const filtered = filterObjectProperties(data, 6);
console.log(filtered); // Expected output: { b: 'longer string', d: 'very long string indeed' }
*/

function filterObjectProperties(obj, minLength) {
    let result = {}
    for(let key in obj){
        let value = obj[key];
        if(typeof value === 'string' && value.length>=minLength){
            result[key]=value;
        }
    }
    return result;
}
const data = { a: "short", b: "longer string", c: 123, d: "very long string indeed" };
const filtered = filterObjectProperties(data, 6);
console.log(filtered);