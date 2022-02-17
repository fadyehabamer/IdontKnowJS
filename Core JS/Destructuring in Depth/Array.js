// * Destructuring Array
const fruits = ['Apple' , 'Mango' , 'Banana' , 'Kiwi']

const apple = fruits[0] 
// console.log(apple); //* apple

const [fruit0 , fruit1 ,, ...rest] = fruits
console.log(fruit0); //* apple
console.log(fruit1); //* Mango
// * banana is discarded as not mentioned in destructruing array
console.log(rest) //* [Kiwi] and the rest of array if found (rest operator) 