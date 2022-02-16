//  * Local Scope  
// * Let and Const have same behaviour

// * Global scope is available for all
// * Block Scope  is Private

let x = 20
console.log(x); // * 20

{
    let x = 30;
    console.log(x); // * 30
}

(function logX() {
    let x = 40;
    console.log(x); // * 40
}())
// * IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined