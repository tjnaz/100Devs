//Create a dog object that has four properties and three methods

const dog = {
    color: 'blue',
    name: 'ruby',
    tail: true,
    legs: 4,
    bark() {
        console.log(`woof woof`)
    },
    jump() {
        console.log(`jump jump`)
    },
    fetch() {
        console.log(`zoom!!`)
    }
}

function Dog(color, name, tail, legs) {
    this.color = color
    this.name = name
    this.tail = tail
    this.legs = legs
    this.bark = function bark() {
        console.log(`woof woof`)
    }
    this.jump = function jump() {
        console.log(`pretty high!!`)
    }
    this.fetch = function jump() {
        console.log(`zooommm!!!`)
    }
}

const dog1 = new Dog('green', 'charlie', false, 8)

console.table(dog1)
console.table(dog)