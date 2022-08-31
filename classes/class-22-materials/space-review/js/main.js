//*Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const num = [1, 2, 3, 4, 5, 6, 7]
let sum = num.reduce((total, item) => (total + item), 0)

// console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareNum(arr) {
    return arr.map((item) => item ** 2)

}

// console.log(squareNum(num))

//Create a function that takes string
//Print the reverse of that string to the console
function reverseArray(arr) {
    return arr.reverse()
}


// console.log(reverseArray(squareNum(num)))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function formatStr(str) {
    return str.split(' ').join('').toLowerCase()
}

function reverseStr(str) {
    return str.split(' ').join('').split('').reverse().join('').toLowerCase()
}
// console.log(formatStr('HeLlo'))

function isPalindrome(str) {
    str = formatStr(str)
    let reversedStr = reverseStr(str)
    for (let i = 0; i <= str.length; i++) {
        if (str[i] !== reversedStr[i]) {
            return console.log(`No`)
        }
    }
    console.log(`Yes`)
}

isPalindrome('Rats live on no evil star')