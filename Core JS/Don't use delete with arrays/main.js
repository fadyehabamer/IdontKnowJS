// export {};  
// * to remove some unknown TypeScript Errors
// * Ignore it if you dont have type script
// *==========================================================================


// * DONT USE DELETE OPERATOR WITH JS ARRAYS

let names = ["fady" , "ehab" , "amer"]
console.log(names.length) // * 3
delete (names[0])
console.log(names)   //* [empty , "ehab" , "amer"]
console.log(names.length)  //* remains 3 !!

// * delete operator -> really deletes elements but .. reserve deleted element space in memory


// * alternative way to delete an item from array
// * splice

let numbers = [1,2,3,4,5]
console.log(number.length);  // * 5

// * remove "1" from array
numbers.splice(0,1)
console.log(numbers); 
console.log(numbers.length); // * 4 
