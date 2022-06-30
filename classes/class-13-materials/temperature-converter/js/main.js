//Write your pseduo code first! 
document.querySelector('#convert').onclick = convert

function convert() {
    let celsius = document.querySelector('#celsius').value
    let fahrenheit = (celsius * 9 / 5) + 32
    return document.querySelector('#result').innerHTML = fahrenheit
}