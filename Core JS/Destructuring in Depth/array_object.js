// * array of object destructuring
let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    }
]

// console.log(cars[0].type) // * minivan

const [minivan]=cars
console.log(minivan) //* first object

const [{type:firstItem}]=cars  //* type property of first Object
console.log(firstItem);
