//  * add event listener to both parent -> p , child -> strong

let parentElement = document.querySelector(".parent"),
    childElement = document.querySelector(".child");

// parentElement.addEventListener("click",()=>{
//     console.log("I AM THE PARENT");
// })

childElement.addEventListener("click",()=>{
    console.log("I AM THE CHILD");
})


// * if child element is clicked .. it will log (I AM THE PARENT ) and (I AM THE CHILD)
// * which is called bubbling --> inner most child element then work with parent element
// * this is problem....

// * solution
// * add 3rd argument to parent element which is capturing 
// * its default is False which means use bubbling
// * if true this will mean --> make parent function (outer) then child function (inner)

parentElement.addEventListener("click",()=>{
    console.log("I AM THE PARENT");
},true)



