// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let myFavHoliday = 'Eid'
console.log(myFavHoliday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'hello, my friend'
console.log(str.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subFromHundred(n1, n2, n3, n4, n5) {
    console.log(100 - (n1 + n2 + n3 + n4 + n5))
}

subFromHundred(10, 20, 30, 5, 15)


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function minAndMax(n1, n2, n3) {
    console.log(`Lowest Num: ${Math.min(n1, n2, n3)}. Highest Num: ${Math.max(n1, n2, n3)}`)
}

minAndMax(10, 45, 33)


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function flipCoin() {
//     let coinFlip = Math.floor(Math.random() * 2)
//     if (coinFlip === 0) {
//         console.log('tails')
//     } else {
//         console.log(coinFlip)
//         console.log('heads')
//     }
// }

const flipCoin = _ => Math.random() < .5 ? 'tails' : 'heads'

console.log(flipCoin())


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipCoinMultipleTimes(n1) {
    // let coinFlip
    if (n1 > 0) {
        for (i = 1; i <= n1; i++) {
            let coinFlip = Math.floor(Math.random() * 2)
            if (coinFlip === 0) {
                console.log(coinFlip)
                console.log('tails')
            } else {
                console.log(coinFlip)
                console.log('heads')
            }
        }
    } else {
        console.log('Enter only positive integers')
    }
}

// flipCoinMultipleTimes(5)