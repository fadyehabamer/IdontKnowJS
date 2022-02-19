//  * passing by value  (primitive data types)
// * The primitives are numbers, booleans, strings, symbols, and special values null and undefined.


let x = 10
let y = x
console.log(x===y) // * true  (same value)

console.log("passing by value ", "x = ", x, " y = ", y)
x = 100
console.log(x===y) // * false  (not the same value)
console.log("passing by value after re assign x ", "x = ", x, "y = ", y)
// * Y will not be affected if x value change or not
// * that is because x , y have diffrent memory locations
// * Passing by value explained !


// * ==========================================================================

// * passing by refrence (objects)
// *objects are Particularly the plain object, arrays, functions.  

let arr1 = [1, 2, 3]
let arr2 = arr1;

arr1.push(5, 6)
console.log("Passing by refrences");
console.log(`arr1 = ${arr1}   arr2 = ${arr2}`);
console.log(arr1 === arr2) //* true //* same refrence even value changed

// * Illustration

/*
var         value
=================
x             10
y             10
arr1          x0x1 [memory location]
arr2          x0x1  

*/