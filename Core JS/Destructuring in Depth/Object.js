const person = {
    name: "fady",
    age: 21,
    address: {
        country: "EGY",
        city: "Damietta"
    },
    FavPlayer: "MoSalah"
}

const P_name = person.name
const P_age = person.age
const P_address_city = person.address.city
// console.log(P_name); // * fady
// console.log(P_age); // * 21
// console.log(P_address_city); // * Damietta


// * Object Destructuring 
// * instead of using obj.blabla 

const { name, age, FavPlayer: bestPlayerEver, catName = "Metwally" , address:{city}} = person

// * FavPlayer property will be bestPlayerEver
// * catName is a property that has a default param which is not in person object
// * to access nested object property you can Destructure one more level as in address property
console.log(name, age, bestPlayerEver, catName , city) 


// * Destructuring Function
// * You can use any order in params
function displayPersonInfo ({address:{city},name , age}){
    console.log(`This person lives in ${city} and his name is ${name} and his age is ${age} `)
}
displayPersonInfo(person)