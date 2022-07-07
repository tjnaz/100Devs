//Write your pseduo code first!
const tempInCelsius = prompt("Enter the celsius value:")
const tempInFahrehneit = (tempInCelsius * 9/5) + 32

document.querySelector('#celsius').innerText = tempInCelsius
document.querySelector('#result').innerText = tempInFahrehneit