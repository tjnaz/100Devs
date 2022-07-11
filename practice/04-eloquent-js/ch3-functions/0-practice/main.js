// * ARROW FUNCTIONS => * //
// * Optional Parameters * //

const power = (base, exponent = 2) => {
    let result = 1
    for (count = 0; count < exponent; count++) {
        result *= base
    }
    return result
}

console.log(power(4))

// * CLOSURE * //
function multiplier(factor) {
    return number => number * factor
}

let twice = multiplier(2)
let thrice = multiplier(3)
console.log(twice(5))
console.log(thrice(5))