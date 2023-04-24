// // ** Creating an Object ** //
// const pen = {
//     type: 'ballpoint',
//     color: 'blue',
//     brand: 'Bic'
// }

// // ** Accessing ** //
// console.log(pen.color)
// console.log(`I used to write with a ${pen.color} ${pen.brand} ${pen.type} pen.`)

// // ** Modifying ** //
// pen.color = 'black'
// pen.type = 'fountain'
// pen.brand = ' Parker'

// pen.price = '$30000'

// console.log(`But now, I write with a ${pen.color} ${pen.brand} ${pen.type} pen, which is ${pen.price}`)


// ** RPG Game ** //
// const aurora = {
//     name: 'Aurora',
//     health: 150,
//     strength: 25,
// }

// console.log("WELCOME TO RPG GALORE!!!")

// console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

// // Aurora is harmed by an arrow
// aurora.health -= 20;

// // Aurora equips a strength necklace
// aurora.strength += 10;

// console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);


const aurora = {
    name: 'Aurora',
    health: 150,
    strength: 25,
    describe() {
        return `${this.name} has ${this.health} health and ${this.strength} strength points.`
    }
}

const boris = {
    name: 'Boris',
    health: 52,
    strength: 20,
    // describe() {
    //     return `${this.name} has ${this.health} health and ${this.strength} strength points.`
    // }
}

boris.strength += 25

// ^I tried creating a separate function for describing a character, instead of repeating the same object "method".
const describe = (object) => `${object.name} has ${object.health} health and ${object.strength} strength points.`

// console.log(aurora.describe())
console.log(describe(boris))
console.log(describe(aurora))