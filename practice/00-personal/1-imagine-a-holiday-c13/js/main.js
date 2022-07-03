document.querySelector('#books').onclick = selectBook
document.querySelector('#pets').onclick = selectPet
document.querySelector('#gadgets').onclick = selectGadget
document.querySelector('#misc').onclick = selectBonus

function selectBook() {
    document.querySelector('#box3').classList.remove('hide')
    document.querySelector('#box4').classList.add('hide')
    document.querySelector('#box5').classList.add('hide')
    document.querySelector('#box6').classList.add('hide')
}

function selectPet() {
    document.querySelector('#box3').classList.add('hide')
    document.querySelector('#box4').classList.remove('hide')
    document.querySelector('#box5').classList.add('hide')
    document.querySelector('#box6').classList.add('hide')
}

function selectGadget() {
    document.querySelector('#box3').classList.add('hide')
    document.querySelector('#box4').classList.add('hide')
    document.querySelector('#box5').classList.remove('hide')
    document.querySelector('#box6').classList.add('hide')
}

function selectBonus() {
    document.querySelector('#box3').classList.add('hide')
    document.querySelector('#box4').classList.add('hide')
    document.querySelector('#box5').classList.add('hide')
    document.querySelector('#box6').classList.remove('hide')
}