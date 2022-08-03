// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = 'Pancake'
// alert(favoriteFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let stringVar = 'This is a string'
// alert(stringVar[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideNum(n1, n2, n3) {
    return (n1 / n2) * n3
}

console.log(divideNum(6, 3, 5))


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n1) {
    return Math.cbrt(n1)
}

console.log(cubeRoot(27).toFixed(4))


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function isSummer(month) {
    let lowerCaseMonth = month.toLowerCase()
    if (lowerCaseMonth === 'july' || lowerCaseMonth === 'august' || lowerCaseMonth === 'september') {
        return 'yay'
    } else {
        return 'boo'
    }
}

console.log(isSummer('August'))


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipFive(n1) {
    for (let i = 1; i <= n1; i++) {
        if (i === 5) {
            console.log()
        } else {
            console.log(i)
        }
    }
}

skipFive(11)