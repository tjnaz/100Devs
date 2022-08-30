// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
// ^My Answer
let str = `hi how are you? I'm looking for a jr. dev job.`;
// let arr = str.split('');
// if (arr[arr.length - 1] === '?') alert(str);
console.log(str.replaceAll(`jr. dev`, `Senior Developer`))

// TODO Leon's solution
// alert(str.endsWith('?'))


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multiWords = `hi, I'm a jr. dev. And I am looking for a job`;
let multiWordsArray = multiWords.toLowerCase().split('');


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const choices = ['rock', 'paper', 'scissors'];

function botChoice(optionsArray) {
    return optionsArray[Math.floor(Math.random() * optionsArray.length)]
}


// playRockPaperScissor()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
// let userChoice = 'scissors'

function playGame(user, bot) {
    if (user === 'rock' && bot === 'scissors' || user === 'paper' && bot === 'rock' || user === 'scissors' && bot === 'paper') {
        return `User wins`
    } else {
        return `Bot wins`
    }
}



// console.log(playGame(userChoice, playRockPaperScissor()))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playMultiGame(numberOfGames) {
    for (let i = 1; i <= numberOfGames; i++) {
        console.log(`Game: #${i}; ${playGame(userChoice[i], botChoice(choices))}`);
    }
}

const userChoice = ['rock', 'paper', 'scissors', 'scissors', 'rock'];

// playMultiGame(userChoice.length)
