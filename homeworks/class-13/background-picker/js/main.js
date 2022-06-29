document.querySelector('#purple').onclick = partyPurple
document.querySelector('#green').onclick = partyGreen
document.querySelector('#blue').onclick = partyBlue
document.querySelector('#coral').onclick = partyCoral

function partyPurple() {
    document.querySelector('body').style.background = `rgba(241,63,247,1)`
    document.querySelector('body').style.color = `rgba(255,255,255)`
}
function partyGreen() {
    document.querySelector('body').style.background = `rgba(0,253,81,1)`
    document.querySelector('body').style.color = `rgba(255,255,255)`
}
function partyBlue() {
    document.querySelector('body').style.background = `rgba(0,254,255)`
    document.querySelector('body').style.color = `rgba(255,255,255)`
}
function partyCoral() {
    document.querySelector('body').style.background = `rgba(255,170,80)`
    document.querySelector('body').style.color = `rgba(255,255,255)`
}