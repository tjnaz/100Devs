//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    brand: 'Casio',
    model: 'G-Shock',
    shape: 'Round',
    display: 'Plastic',
    isWaterProof: false,
    giveDescription: function () {
        return console.log(`This is a ${this.brand} brand ${this.brand} model stopwatch. It is ${this.shape} shape, with a ${this.display} display.`)
    }
}

stopwatch.giveDescription()