//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function CreateStreetFighter(name, age, fightingStyle) {
    this.name = name
    this.age = age
    this.fightingStyle = fightingStyle
}

let streetFighter1 = new CreateStreetFighter('blah', 20, 'monkey kungfu')

console.table(streetFighter1)