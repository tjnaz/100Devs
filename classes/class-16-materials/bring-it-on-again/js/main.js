// *Variables*
// Declare a variable, assign it a value, and alert the value
let var1 = 100
// alert(var1)

// Create a variable, divide it by 10, and console log the value
let var2 = 120
// console.log(var2 / 10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplysThreeNumbers(n1, n2, n3) {
    alert(n1 * n2 * n3)
}

// multiplysThreeNumbers(2, 3, 4)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function multiplysFourNumbers(n1, n2, n3, n4) {
    console.log((n1 + n2) - n3 - n4)
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function addSubtractDivide(n1, n2, n3) {
    let firstNumber = 100

    if ((firstNumber + n1 - n2) / n3 > 25) {
        console.log("We have a winna!")
    }
}

// addSubtractDivide(50, 10, 2)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfTheWeek(day) {
    let lowerCaseDay = day.toLowerCase()

    if (lowerCaseDay === "monday" || lowerCaseDay === "tuesday" || lowerCaseDay === "wednesday" || lowerCaseDay === "thursday" || lowerCaseDay === "friday") {
        alert("Weekday")
    } else if (lowerCaseDay === "saturday" || lowerCaseDay === "sunday") {
        alert("Weekend")
    } else {
        alert("Try again")
    }
}

// dayOfTheWeek(prompt("Enter a day of the week:"))

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(num){
    for(let i = 1; i<= num; i+=3) {
        console.log(i)
    }
}

countByThree(prompt("Enter a number:"))