//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const arr = [1, 2, 3, 4, 5, 6, 7]

// ^My solution
// let sum = 0
// arr.forEach(item => sum += item)
// alert(sum)

// ^Leon's
// console.log(arr.reduce((sum, nums) => sum+nums, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
// ^My solution
// function squareArr(array) {
//     return array.map(item => item * item)
// }
// console.log(squareArr(arr))

// ^Leon's solution
let squareArr = nums => nums.map(num => num * num)
console.log(squareArr(arr))

//Create a function that takes string
//Print the reverse of that string to the console
const str = 'barnaby'

function reverseString(string) {
    return string.split('').reverse().join('')
}

// console.log(reverseString(str))
//Create a function that takes in a string
//Alert if the string is a palindrome or not

function isPalindrome(string) {
    const reversedString = string.split('').reverse().join('')

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== reversedString[i]) {
            return false
        }
    }
    return true
}

// console.log(isPalindrome(str))