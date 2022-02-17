let person={
    name : "fady",
    PLanguages : ['JS' , 'Python' , 'C#' , 'Java']
}

// console.log(person.PLanguages[0]) // * JS

const {PLanguages : [firstPL,,...rest]} = person
console.log(firstPL); // * JS
// * Python is discarded
console.log(rest); // * C# , Java
