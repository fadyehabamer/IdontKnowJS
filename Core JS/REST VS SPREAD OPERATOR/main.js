// * spread vs rest operator

// * 1-spread operator is used to expand an array and objects
let arr = [1, 2, 3]
let arr1 = [...arr, 4, 5, 6] //* this will expand arr in arr1
console.log(arr1);

let obj = {
    name: "fady",
    age: 21
}

let obj1 = {
    ...obj,
    color: "blue"
}
console.log(obj1);

// * if ... used with arrays and objects this will called spread operator
// * because you will expand this array or object


// *==============================================================================================

// * REST OPERATOR
// * if you have a function and you don't know how many params that the user will pass
// * function that take (any number of parameters)

// * REST PARAMS IN ES6 === arguments in ES5

function sum(...args) {
    // console.log(args) // * -> array of the REST of parameters [1,2,3] 
    let total = 0
    for (let element of args) total += element;
    return (total);
}
console.log(sum(1, 2, 3))
