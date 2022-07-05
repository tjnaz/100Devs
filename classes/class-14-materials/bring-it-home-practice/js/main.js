// *Variables*
// Create a variable and console log the value
let num1 = 1234
console.log(num1)

// Create a variable, add 10 to it, and alert the value
let num2 = 100
alert(num2 + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(num, num1, num2, num3, num4) {
    let sum = num - (num1 + num2 + num3 + num4)
    alert(sum)
}

sub4(100, 10, 15, 20, 25)


// Create a function that divides one number by another and returns the remainder
function divideNum(num1, num2) {
    return num1 / num2
}

console.log(divideNum(10, 5))


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function alertJumanji(num1, num2) {
    let sum = num1 + num2

    if (sum > 50) {
        alert('Jumanji')
    }
}

alertJumanji(40, 40)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyByThree(num1, num2, num3) {
    let sum = num1 * num2 * num3

    if (sum % 3 === 0) {
        alert('ZEBRA!!!')
    }
}

multiplyByThree(1, 1, 6)