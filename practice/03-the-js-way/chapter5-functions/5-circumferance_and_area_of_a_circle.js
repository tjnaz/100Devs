// const areaOfACircle = radius => Math.floor(Math.PI * (radius * radius))
// const circumferanceOfACircle = radius => Math.floor(2 * Math.PI * radius)

// console.log('Area of a Circle with the radius of 7')
// console.log(areaOfACircle(7))
// console.log('Circumferance of a Circle with the radius of 7')
// console.log(circumferanceOfACircle(7))

// -- ************ --- //
// --- [2023-04-24] --- //
// --- ************ --- //

// Circumference and area of a circle
// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// Here are some tips for solving this exercise:

//     Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
//     The value of number π (Pi) is obtained with Math.PI in JavaScript.
//     You might want to use the exponentiation operator ** to perform computations.
// console.log(2 ** 3); // 8: 2 * 2 * 2
// console.log(3 ** 2); // 9: 3 * 3

const areaOfACircle = (r) => Math.floor(Math.PI * r ** 2);
const circumferanceOfACircle = (r) => Math.floor(2 * Math.PI * r);

console.log(areaOfACircle(7));
console.log(circumferanceOfACircle(7));
