//---Easy
//* create a function that subtracts two numbers and alerts the difference
function subtractNumber(num1, num2) {
    alert(num1 - num2)
}

// subtractNumber(10, 5)

//* create a function that divides three numbers and console logs the quotient
function divideThreeNumbers(num1, num2, num3) {
    console.log(num1 / num2 / num3)
}

divideThreeNumbers(100, 8, 10)

//* create a function that multiplys three numbers and returns the product
function multiplyNumbers(num1, num2, num3) {
    return num1 * num2 * num3
}

multiplyNumbers(10, 20, 30)

//---Medium
//* create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function calculation(num1, num2, num3) {
    return (num1 + num2) % num3
}

console.log(calculation(3, 3, 2))

//---Hard
//* create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
