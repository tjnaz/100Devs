//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function CreateStreetFighter(name, age, fightingStyle, catchPhrase) {
    this.name = name
    this.age = age
    this.fightingStyle = fightingStyle
    this.catchPhrase = catchPhrase
}

let streetFighter1 = new CreateStreetFighter('blah', 20, 'monkey kungfu', `you can't handle the truth`)

console.table(streetFighter1)