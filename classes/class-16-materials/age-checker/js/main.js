//* Create a conditonal that checks their age
// const age = document.querySelector('#danceDanceRevolution').value

//* If under 16, tell them they can not drive
//* If under 18, tell them they can't hate from outside the club, because they can't even get in
//* If under 21, tell them they can not drink
//* If under 25, tell them they can not rent cars affordably
//* If under 30, tell them they can not rent fancy cars affordably
//* If under over 30, tell them there is nothing left to look forward too
// if (age < 16) {
//     let result = console.log("You can't drive")
// } else if (age < 18) {
//     let result = console.log("You can't hate from outside the club")
// } else if (age < 21) {
//     let result = console.log("You can't drink")
// } else if (age < 25) {
//     let result = console.log("You can not rent cars affordably")
// } else if (age < 30) {
//     let result = console.log("You can't rent fancy cars")
// } else {
//     let result = console.log("There's nothing left to look forward to")
// }



//--- Harder
//On click of the h1
const check = document.querySelector('h1').addEventListener('click', checkInput)

function checkInput() {
    const age = document.querySelector('#danceDanceRevolution').value
    let result

    if (age < 16) {
        result = "You can't drive"
    } else if (age < 18) {
        result = "You can't hate from outside the club"
    } else if (age < 21) {
        result = "You can't drink"
    } else if (age < 25) {
        result = "You can not rent cars affordably"
    } else if (age < 30) {
        result = "You can't rent fancy cars"
    } else {
        result = "There's nothing left to look forward to"
    }
    console.log(result)

    return document.querySelector('p').innerText = result
}
//Take the value from the input
//Place the result of the conditional in the paragraph
