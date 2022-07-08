// *Variables*
// Create a variable and console log the value
let var1 = 50
console.log(var1)

// Create a variable, add 10 to it, and alert the value
let var2
// alert(var2 = 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(num1, num2, num3, num4) {
    // alert(num1 - num2 - num3 - num4)
}

subtractFourNumbers(10, 1, 2, 3)

// Create a function that divides one number by another and returns the remainder
function divideTwoNumbers(num1, num2) {
    return num1 - num2
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function alertJumanji(num1, num2) {
    let sum = num1 + num2

    if (sum > 50) {
        alert('Jumanji')
    }
}

// alertJumanji(50, 2)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multipysThreeNumbers(n1, n2, n3) {
    let sum = n1 * n2 * n3

    if (sum % 3 === 0) {
        alert('ZEBRA!!')
    }
}

// multipysThreeNumbers(3, 6, 9)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordTimesNumber(word,num) {
    for(let i=1; i<= num; i++) {
        console.log(word)
    }
}

wordTimesNumber(" Hello", 3)