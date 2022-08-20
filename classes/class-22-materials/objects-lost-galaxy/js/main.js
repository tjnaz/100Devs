//Create a mouse object that has four properties and three methods
let mouse = {
}

mouse.gender = 'female'
mouse.color = 'white'
mouse.name = 'alex'
mouse.brand = 'dominos'

mouse.canItJump = function () {
    this.gender === 'male' ? console.log(`yes`) : console.log(`no`)
}
mouse.bark = function () {
    console.log('me me')
}
mouse.meow = function () {
    console.log('meow meow')
}


mouse.canItJump()
mouse.bark()
mouse.meow()

console.log(mouse.gender)
console.log(mouse.color)