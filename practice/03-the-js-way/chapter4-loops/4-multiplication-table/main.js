let userInput = Number(prompt("Enter a number between 2-9, to see it's multiplication table:"))

if(userInput>=2 && userInput <= 9) {
    document.querySelector('#heading').innerText += ` ${userInput}`

    for (let i = 1; i <= 12; i++) {
        document.querySelector('body').innerHTML += (`<p>${userInput}*${i}: ${userInput * i}</p>`)
    }
} else {
    alert(`Number outside the accepted range`)
}

