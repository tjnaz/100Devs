// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//     const fName = document.querySelector('#firstName').value
//     const fMidName = document.querySelector('#firstMiddle').value
//     const lMidName = document.querySelector('#lastMiddle').value
//     const lName = document.querySelector('#lastName').value

//     document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//     //   Add what you should be doing - conditionals go here

//     document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//     const fName = document.querySelector('#firstName').value
//     const fMidName = document.querySelector('#firstMiddle').value
//     const lMidName = document.querySelector('#lastMiddle').value
//     const lName = document.querySelector('#lastName').value

//     const yellText = `${fName} ${fMidName} ${lMidName} ${lName}`

//     document.querySelector('#placeToYell').innerText = yellText

//     // Speech synthesis
//     let yellThis = new SpeechSynthesisUtterance(yellText);

//     synth.speak(yellThis);
// }

document.querySelector('#yell').addEventListener('click', run)
// document.querySelector('#shout').onclick = run

function run() {
    const fName = document.querySelector('#firstName').value
    const fmName = document.querySelector('#firstMiddle').value
    const lmName = document.querySelector('#lastMiddle').value
    const lName = document.querySelector('#lastName').value

    // const message = document.querySelector('.message').id
    // console.log(message)

    let shout = `${fName} ${fmName} ${lmName} ${lName}!!!`
    // console.log(shout)
    let yell = shout.toUpperCase()
    // console.log(yell)


    // if (message === 'shout') {
    //     return document.querySelector('#placeToYell').innerText = shout
    // }

    return document.querySelector('#placeToYell').innerText = yell
}