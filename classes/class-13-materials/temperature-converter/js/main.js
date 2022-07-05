//Write your pseduo code first! 

// *Capture the click
document.querySelector('#convert').onclick = convert

// *We take in the celsius value then apply the calculation, which is, (celsius * 9 / 5) + 32 equals 1 fahrenheit
// *We take that value and displays it on the page
function convert() {
    let celsius = document.querySelector('#celsius').value
    let fahrenheit = (celsius * 9 / 5) + 32
    return document.querySelector('#result').innerHTML = fahrenheit
}