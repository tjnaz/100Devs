// Kelvin temp
let kelvin = 293
// Celsius temp
let celsius = kelvin - 273
// Fahrenheit temp calculated from Celsius and rounded
let fahrenheit = Math.floor(celsius * (9 / 5) + 32)
// Newton temp
let newton = Math.floor(celsius * (33 / 100))
console.log(`The temperature is ${kelvin} Kelvin`)
console.log(`The temperature is ${celsius} degrees Celsius`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
console.log(`The temperature is ${newton} degrees Newton`)