let dog = {
    name: 'Steinbeck',
    species: 'American Pitbull',
    size: '132 cm',
    bark() {
        return `woof! woof? meh...`
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}.`)
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`)