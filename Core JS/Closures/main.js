// * Closure
/* A closure is the combination of a function bundled together 
with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope 
from an inner function. 
In JavaScript,
closures are created every time a function is created, at function creation time
*/

var name = 'fady'

function logName() {
    console.log(name);
}
logName()
