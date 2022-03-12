// old method (oop)
class Person {
    constructor(name) {
        this.name = name;
        this.sayHi = function () {
            console.log(`Hi I Am ${this.name}`);
        }
    }
}
let p1 = new Person('Fady')
p1.sayHi();
console.log(typeof p1)

console.log('=============================')

function FF_person(name) {
    return {
        name: name,
        sayHi: function () {
            console.log(`Hi I Am ${name}`);
        }
    }
}
let p2 = FF_person('Fady')
p2.sayHi()
console.log(typeof p2)
console.log('=============================')

let Person3 = function (name) {
    var Boy = {}
    Boy.name = name
    Boy.sayHi = function () {
        return (
            console.log(`Hi I Am ${name}`)
        )
    }
    return Boy
}

let p3 = Person3('Fady')
p3.sayHi();
console.log(typeof p3)

