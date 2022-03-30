let my_arr = ['fady', undefined, 'amer']

function removeFalsey(arr) {
  // newly created array
  let newArr = [];

  // Iterate the array using the forEach loop
  arr.forEach((k) => {
    // check for the truthy value
    if (k) {
      newArr.push(k);
    }
  });
  // return the new array
  return newArr;
}

console.log(removeFalsey(my_arr));


let removedFalsyValues = my_arr.filter((item) => { return !(!item) })
let removedFalsyValues_2 = my_arr.filter((item) => { return Boolean(item) })


console.log(Boolean('fady'));
undefined == false
console.log(!undefined);   //true
console.log(!'fady')      // false
console.log(my_arr);
console.log(removedFalsyValues);
console.log(removedFalsyValues_2);
