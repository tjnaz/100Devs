// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
// let favoriteDrink = " Aloe Vera "
// console.log(favoriteDrink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
// let randomStr = "there are multiple words"
// console.log(randomStr.includes('apple'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
let choices = ['rock', 'paper', 'scissors']
function botPlay() {
    let botChoice = Math.floor(Math.random() * choices.length)
    return choices[botChoice]
}

// console.log(botPlay())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playUserVsBot(userInput) {
    let botChoice = botPlay()

    if(userInput === 'rock' && botChoice === 'scissors' || userInput === 'paper' && botChoice === 'rock' || userInput === 'scissors' && botChoice === 'paper') {
        console.log('You win!')
    } else if (userInput === botChoice) {
        console.log(`It's a draw`)
    } else {
        console.log(`You lose!`)
    }
}

// playUserVsBot('rock')


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

let playMultipleGames = choices.forEach(choice => playUserVsBot(choice))