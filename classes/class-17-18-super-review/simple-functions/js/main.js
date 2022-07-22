//---Easy
//create a function that subtracts two numbers and alerts the difference
const subtractTwoNumbers = (num1, num2) => alert(num1 - num2)

//create a function that divides three numbers and console logs the quotient
const divideThreeNumbers = (num1, num2, num3) => console.log((num1 / num2) % num3)

//create a function that multiplys three numbers and returns the product
const multiplysThreeNumbers = (num1, num2, num3) => num1 * num2 * num3

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

// * DOABLE
const addTwoNumRetunRemaind = (n1, n2, n3) => (n1 + n2) % n3

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
// * DOABLE
const multiplyTwoNumAndConditional = (n1, n2, n3, n4) => {
    (n1 * n2) > 100 ? console.log(`${n1} * ${n2} is more than 100, so ${n3} + ${n4} =  ${n3 + n4}`) :
        (n1 * n2) < 100 ? console.log(n3 - n4) :
            alert((n1 * n2 * n3) % n4)
}

multiplyTwoNumAndConditional(10, 11, 12, 13)