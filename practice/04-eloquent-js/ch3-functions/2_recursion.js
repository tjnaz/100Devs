// TODO I want to find out how to display the original number along with whether it's odd or even
// let originalNum = 0
function isEven(num) {
    if (num === 0) {
        return true
        // return console.log(`${originalNum} is even`)
    } else if (num === 1) {
        return false
        // return console.log(`${originalNum} is odd`)
    } else if (num < 0) {
        return `Only whole numbers are acceptable`
        // return console.log(`${originalNum} is not a whole number`)
    }
    return isEven(num - 2)
    // originalNum = num + 2
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))