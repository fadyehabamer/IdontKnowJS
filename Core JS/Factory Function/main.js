// * Factory Function
/*
The Factory Function is similar to constructor functions/class functions,
but instead of using new to create an object,
factory functions simply creates an object and returns it.
*/

/*
but they do not require the use of the ‘this‘ keyword
for inner values or the use of the ‘new‘ keyword
when instantiating new objects
*/

// * Factory Function --> Function
function createRobot(name) {
    return {
        name: name,
        talk: function () {
            console.log('My name is '
                + name + ', the robot.');
        }
    };
}

const R1 = createRobot('FADY')
R1.talk()
console.log(typeof R1); // * object
// *===========================================================================

// * Factory Function --> Object,Class
var Person = function (name, age) {

    // creating person object
    var person = {};

    // parameters as keys to this object  
    person.name = name;
    person.age = age;

    // function to greet
    person.greeting = function () {
        return (
            'Hello I am ' + person.name
            + '. I am ' + person.age
            + ' years old. '
        );
    };
    return person;
};

var person1 = Person('FADY', 22);
console.log(person1.greeting());

var person2 = Person('MOHAMED', 25);
console.log(person2.greeting());
