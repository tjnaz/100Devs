//--- Easy
//* create a variable and assign it a number
let var1 = 1000

//* minus 10 from that number
var1 -= 10

//* print that number to the console
console.log(var1)

//--- Medium
//* create a variable that holds a value from the input
let inputValue = document.querySelector('#danceDanceRevolution').value

//* add 25 to that number
inputValue += 25

//* alert that number
console.log(inputValue)

//--- Hard
//* create a variable that holds the h1
let valueOfH1 = document.querySelector('h1')

//* add an event listener to that element that console logs the sum of the two previous variables
valueOfH1.addEventListener('click', sum)

function sum() {
    return console.log(var1 + Number(inputValue))
}