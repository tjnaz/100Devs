// *Variables*
// Declare a variable, assign it a boolean, and alert the value
//! let randomVariable = true
// alert(randomVariable)

// Declare a variable, reassign it to your favorite color, and console log the value
//! let favoriteColor
// favoriteColor = "black"


// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
//! const addFourNumRetSum = (n1, n2, n3, n4) => (n1 + n2 + n3) / n4
// console.log(addFourNumRetSum(25, 20, 15, 10))


// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
//! function power(n1, n2) {
//     let sum = 1
//     for (i = 1; i <= n2; i++) {
//         sum *= n1
//     }
//     return sum
// }

// console.log(power(2, 4))


// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
//! function boolAndString(bool, string) {
//     if (bool) {
//         alert(string)
//     } else {
//         console.log(string)
//     }
// }

const boolAndString = (b, str) => b ? alert(str) : console.log(str)

// boolAndString(true, "hakuna matata")


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(Number(prompt("Enter a number")))