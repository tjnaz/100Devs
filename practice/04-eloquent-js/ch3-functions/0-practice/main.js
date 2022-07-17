// * ARROW FUNCTIONS => * //
// * Optional Parameters * //

// const power = (base, exponent = 2) => {
//     let result = 1
//     for (count = 0; count < exponent; count++) {
//         result *= base
//     }
//     return result
// }

// console.log(power(4))

// * CLOSURE * //
// function multiplier(factor) {
//     return number => number * factor
// }

// let twice = multiplier(2)
// let thrice = multiplier(3)
// console.log(twice(5))
// console.log(thrice(5))

// * RECURSION * //

// const countDown = (num) => {
//     // if (num === 0) return
//     console.log(`first ${num}`)
//     num === 1 ? 1 : countDown(num - 1)
//     // console.log(`second ${num}`)
// }

// countDown(10)

// * GROWING FUNCTIONS * //

// TODO: Need to improve this in a way that it reduces the

function zeroPad(number, width) {
    let string = String(number)
    while (string.length < width) {
        string = "0" + string
    }
    return string
}

function printFarmInventory(goats, cows, camels) {
    console.log(`${zeroPad(goats, 3)} Goats`)
    console.log(`${zeroPad(cows, 3)} Cows`)
    console.log(`${zeroPad(camels, 3)} Camels`)
}

printFarmInventory(5, 3, 4)