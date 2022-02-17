/*
forEach is functional array method .. 
It means to perform SIDE EFFECT , which mean that it DOESNOT return anything 
but allow to consume the elements of array
*/


let arr = [1, 2, 3, 4, 5, 6]

arr.forEach((currentElement, elementIndex, arr) => {
    console.log(`Element Index is ${elementIndex}  , contains ${currentElement}
                from array ${arr}`)
})

// * ============================================================================


const obj = {
    name: 'FADY AMER',
    rank: 'NINJA'
};

Object.entries(obj).forEach(([key, value], index) => {
    console.log(`${index + 1}: ${key} = ${value}`);
});