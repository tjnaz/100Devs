document.querySelector('#books').onclick = selectBook
document.querySelector('#pets').onclick = selectPet
document.querySelector('#gadgets').onclick = selectGadget
document.querySelector('#misc').onclick = selectBonus
document.querySelector('.book1').onclick = bookOne
document.querySelector('.book2').onclick = bookTwo
document.querySelector('.book3').onclick = bookThree
document.querySelector('.book4').onclick = bookFour
document.querySelector('.pet1').onclick = petOne
document.querySelector('.pet2').onclick = petTwo
document.querySelector('.pet3').onclick = petThree
document.querySelector('.pet4').onclick = petFour
document.querySelector('.gadget1').onclick = gadgetOne
document.querySelector('.gadget2').onclick = gadgetTwo
document.querySelector('.gadget3').onclick = gadgetThree
document.querySelector('.gadget4').onclick = gadgetFour
document.querySelector('.bonus1').onclick = bonusOne
document.querySelector('.bonus2').onclick = bonusTwo
document.querySelector('.bonus3').onclick = bonusThree
document.querySelector('.bonus4').onclick = bonusFour

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

function bookOne() {
    for(let i=1; i<=4; i++) {
        if(document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/book1.jpg">`
            break
        }
    }
}
function bookTwo() {
    for(let i=1; i<=4; i++) {
        if(document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/book2.jpg">`
            break
        }
    }
}
function bookThree() {
    for(let i=1; i<=4; i++) {
        if(document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/book3.jpg">`
            break
        }
    }
}
function bookFour() {
    for(let i=1; i<=4; i++) {
        if(document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/book4.jpg">`
            break
        }
    }
}

function petOne() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/pet1.jpg">`
            break
        }
    }
}
function petTwo() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/pet2.jpg">`
            break
        }
    }
}
function petThree() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/pet3.jpg">`
            break
        }
    }
}
function petFour() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/pet4.jpg">`
            break
        }
    }
}

function gadgetOne() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/gadget1.jpg">`
            break
        }
    }
}
function gadgetTwo() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/gadget2.jpg">`
            break
        }
    }
}
function gadgetThree() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/gadget3.jpg">`
            break
        }
    }
}
function gadgetFour() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/gadget4.jpg">`
            break
        }
    }
}

function bonusOne() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/bonus1.png">`
            break
        }
    }
}
function bonusTwo() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/bonus2.jpg">`
            break
        }
    }
}
function bonusThree() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/bonus3.png">`
            break
        }
    }
}
function bonusFour() {
    for (let i = 1; i <= 4; i++) {
        if (document.querySelector(`.item${i}`).innerHTML === "") {
            document.querySelector(`.item${i}`).innerHTML = `<img src="images/bonus4.png">`
            break
        }
    }
}