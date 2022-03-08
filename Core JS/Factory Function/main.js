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

function createRobot(name) {
    return {
        name: name,
        talk: function () {
            console.log('My name is ' 
            + name + ', the robot.');
        }
    };
}

createRobot('FADY')
