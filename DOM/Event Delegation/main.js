const my_ul = document.getElementById("mylist");



// my_ul.addEventListener("click",function(e){
//     console.log(e.target)
//     e.target.style.backgroundColor="red"
//     e.target.style.color="white"
// })
// * problems for upper code:
// * if we click on the UL itself or even LI Style will change

// * solution
my_ul.addEventListener("click", function (e) {
    if (e.target.matches("li")) {
        e.target.style.backgroundColor = "red"
        e.target.style.color = "white"
    }
})

const custom_Li = document.createElement("li")
custom_Li.textContent = "Custom Item 5"
my_ul.appendChild(custom_Li)

// * Tip ==> 
// * you can replace [ e.target.matches("Your Element") ]  with .on() method in jquery 👍 