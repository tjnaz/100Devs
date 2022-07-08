let userInput = Number(prompt("Enter a number to find whether it will be divisible:"))
let totalNumbers = userInput + 10

// for (let i = userInput; i < totalNumbers; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }
let i = userInput
while (i < totalNumbers) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
    i++
}