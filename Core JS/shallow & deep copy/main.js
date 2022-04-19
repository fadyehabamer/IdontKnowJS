// * deep copy
// * all values are copied and disconnected from original variable

// * Shallow copy
// * all values are copied and still connected from original variable

// * =====================================================

// * Shallow Copy
const a = {id : 1 ,name:'fady'}
const b = a

b.id=2

console.log(a)
console.log(b)

// * =====================================================

// * Deep Copy
// var x = 10 
// var y = x
// y= 100

// console.log(x)
// console.log(y)

// * ==================================================

// * Deep Copy (spread operator) 

// const a = {id : 1 ,name:'fady'}
// const b = {...a}

// b.id=2

// console.log(a)
// console.log(b)

// * ==================================================

// * Deep Copy (Object.assign() operator) 

// const a = {id : 1 ,name:'fady'}
// const b = Object.assign({},a)

// b.id=2

// console.log(a)
// console.log(b)

// * ==================================================

// * Deep Copy (JSON.parse JSON.stringify)
// * to solve nested levels 

// const a = {id : 1 ,name:'fady', address : { country:'egypt' }}

// const b = JSON.parse(JSON.stringify(a))

// b.id=2
// b.address.country='usa'

// console.log(a)
// console.log(b)