/* 
Var
- Redeclare (Yes)
- Access Before Declare (Undefined)
- Variable Scope Drama [Added To Window] ()
- Block Or Scope Function

Let
- Redeclare (No => Error)
- Access Before Declare (Error)
- Variable Scope Drama ()
- Block Or Scope Function

Const
- Redeclare (No => Error)
- Access Before Declare (Error)
- Variable Scope Drama ()
- Block Or Scope Function
*/

// * =========================================================================

// * Redeclare 
var a = 20
var a = 30
// console.log(a); // * a = 30 

let b = 10
// let b = 20 
// console.log(b);  // * error : b is already declared 


const c = 10
// const c = 20
// console.log(c); // * error : c is already declared


// * =======================================================================

// * access before Declare 

// console.log(x) // * undefined
var x = 10  

// console.log(y) //* can not access y before initialization
let y = 20

// console.log(z) //* can not access z before initialization
const z = 20

// * =======================================================================

// * Variable Scope

var abc = 1234 // * will be accessable through window object 
// console.log(window.abc); // 1234  --> use in HTML File

let efg = 1234 // * will be accessable through Global scope
console.log(efg);