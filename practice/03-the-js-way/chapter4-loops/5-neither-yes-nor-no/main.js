let userInput = prompt('Enter text:')

while (userInput !== 'yes' && userInput !== 'no') {
    userInput = prompt('Wrong! Enter Text AGAIN!!!')
}

document.querySelector('body').innerHTML += `<h1>Successfully TERMINATED!!! YOU'RE FREE!!!</h1>`