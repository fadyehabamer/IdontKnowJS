let my_arr = ['fady' , undefined , 'amer']
let removedFalsyValues = my_arr.filter((item)=>{return !(!item)})
let removedFalsyValues_2 = my_arr.filter((item)=>{return Boolean(item)})


console.log(Boolean('fady'));
// undefined == false
// console.log(!undefined);   //true
// console.log(!'fady')      // false
// console.log(my_arr);
console.log(removedFalsyValues_2);