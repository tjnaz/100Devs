// ^ CLASS 01 ^ //
// * textContent vs innerText

// * getElementsByClassName
// const items = document.getElementsByClassName("list-group-item")

// console.log(items[0])

// items[1].style.backgroundColor = '#f4f4f4'

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// *getElementsByTagName

// const li = document.getElementsByTagName('li')

// console.log(li)
// li[0].style.backgroundColor = '#f5f5f5'


// *querySelector & querySelectorAll

// const firstLi = document.querySelector('.list-group-item:nth-child(1)')
// firstLi.style.backgroundColor = 'blue'
// const secondLi = document.querySelector('.list-group-item:nth-child(2)')
// secondLi.style.backgroundColor = 'coral'

// const items = document.querySelectorAll(".list-group-item")

// items.forEach(item => item.style.backgroundColor = '#f4f4f4')


// ^ CLASS 02 ^ //

// *Traversing DOM - parentNode / parentElement

// *Create a div

// const newDiv = document.createElement('div')
// newDiv.className = 'testClass'
// newDiv.id = 'testId'

// *Set attribute
// newDiv.setAttribute('title', 'Test Title attribute')

// *Create text node
// const newDivText = document.createTextNode('Hello, world!')

// *Add text to the div
// newDiv.appendChild(newDivText)
// console.log(newDiv.textContent)



// ^ CLASS 03 ^ //

// *Events

// const button = document.querySelector('#button')
// button.addEventListener('click', buttonClick)
// function buttonClick(e) {
// document.getElementById('header-title').textContent = 'Changed!'
// document.querySelector('#main').style.backgroundColor = '#f4f4f4'
// console.log(e.target)

// console.log(e.clientX)
// console.log(e.clientY)

// console.log(e.offsetX)
// console.log(e.offsetY)

// console.log(e.altKey)
// console.log(e.ctrlKey)
// console.log(e.shiftKey)   
// }

// const box = document.querySelector('#box')

// box.addEventListener('mousedown', mouseEnter)
// box.addEventListener('mouseup', mouseLeave)
// box.addEventListener('mouseenter', mouseEnter)
// box.addEventListener('mouseleave', mouseLeave)
// box.addEventListener('mouseover', mouseEnter)
// box.addEventListener('mouseout', mouseLeave)

// function mouseEnter(e) {
// console.log(`Event Type: ${e.type}`)
// document.querySelector('body').style.background = '#000'
// }

// function mouseLeave(e) {
//     document.querySelector('body').style.background = '#fff'
// }

// *Mouse Move

// box.addEventListener('mousemove', mouseMove)

// function mouseMove(e) {
//     let red = e.offsetX
//     let blue = e.offsetY
//     let green = (red + blue) / 2

//     document.querySelector('#output').innerText = `Red: ${red}, Blue: ${blue}, Green: ${green}`
//     box.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
//     document.body.style.backgroundColor = `rgb(${blue}, ${red}, ${green})`
// }

// *Input

let itemInput = document.querySelector('#item')
// const itemInput = document.querySelector('#filter')
let form = document.querySelector('form')

// itemInput.addEventListener('keyup', showInput)

// *Focus & Blur
// itemInput.addEventListener('focus', showInput)
// itemInput.addEventListener('blur', showInput)

// *Copy, cut, & paste
// itemInput.addEventListener('copy', showInput)


function showInput(e) {
    console.log(`Type: ${e.type}`)
    // document.querySelector('#output').innerText = `${e.target.value}`
}