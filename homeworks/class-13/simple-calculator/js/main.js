let total = 0;

document.querySelector("#zero").onclick = makeZero;
document.querySelector("#plusThree").onclick = addThree;
document.querySelector("#plusNine").onclick = addNine;
document.querySelector("#minusTwo").onclick = subTwo;
document.querySelector("#minusFive").onclick = subFive;

function makeZero() {
    total = 0;
    document.querySelector('#total').innerHTML = total
}
function addThree() {
    total += 3;
    document.querySelector('#total').innerHTML = total
}
function addNine() {
    total += 9;
    document.querySelector('#total').innerHTML = total
}
function subTwo() {
    total -= 2;
    document.querySelector('#total').innerHTML = total
}
function subFive() {
    total -= 5;
    document.querySelector('#total').innerHTML = total
}