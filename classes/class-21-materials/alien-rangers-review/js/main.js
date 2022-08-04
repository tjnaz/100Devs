// *Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['black book', 'house', 'black adder']

tvShows.forEach(item => console.log(item))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let wholeNumbers = [5, 1, 8, 77, 91, 16, 51, 33]
let evenNumbers = []

// for (item of wholeNumbers) {
//     if (item % 2 === 0) {
//         evenNumbers.push(item)
//     }
// }

// TODO DO THIS AGAIN AND AGAIN
let filterEvenNumbers = arr => arr.filter(item => item % 2 === 0)

console.log(filterEvenNumbers(wholeNumbers))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumOfSecondLowestAndHighest(arr) {
    let sortedArray = arr.sort((a, b) => a - b)
    console.log(sortedArray)
    return sortedArray[1] + sortedArray[sortedArray.length - 2]
}
console.log(sumOfSecondLowestAndHighest(wholeNumbers))