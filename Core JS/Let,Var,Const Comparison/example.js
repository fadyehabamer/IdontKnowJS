var x = 10
let y = 20
const z = 30

console.log(`global : ${x}`);
console.log(`global : ${y}`);
console.log(`global : ${z}`);
//  10 20 30 
//  make sense


(function myfunc() {
    console.log(`function : ${x}`);
    console.log(`function : ${y}`);
    console.log(`function : ${z}`);
    // * 10 20 30 
    // * make sense

    {
        console.log(`scope : ${x}`);
        console.log(`scope : ${y}`);
        console.log(`scope : ${z}`);
        // * 10 20 30
        // * why ?
        /*
            in block scope : x,y,z not found .. 
            so it goes outer the scope to function scope then also not found 
            .. so it goes outer to find them in global scope and return their values 
            this happens because block scope has no declerations for x,y,z
        */
    }
}())