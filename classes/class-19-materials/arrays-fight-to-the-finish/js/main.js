//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['pulp fiction', 'up', 'fight club']
// movies.forEach((x, i) => document.querySelector('h2').innerText += ` Movie: ${i + 1} ${x}`)


//Create an array of numbers. Loop through the array add three to each number and replace the old number.
let numbers = [1, 2, 3, 4, 5]
numbers.forEach((x, i) => numbers[i] = x += 3)
// console.log(numbers)

//Find the average of all the numbers from question two
let sum = 0
numbers.forEach((x) => sum += x)

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }

console.log(sum / (numbers.length))



// console.log(numbers)
// let numbers2 = numbers
// numbers2.forEach((x, i) => numbers[((numbers.length - 1) - i)] = x)

// // for (i = 0; i < numbers.length; i++) {

// // }

// console.log(numbers)