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

// let itemInput = document.querySelector('#item')
// const itemInput = document.querySelector('#filter')

// itemInput.addEventListener('keyup', showInput)

// *Focus & Blur
// itemInput.addEventListener('focus', showInput)
// itemInput.addEventListener('blur', showInput)

// *Copy, cut, & paste
// itemInput.addEventListener('copy', showInput)

// *Change event
// let select = document.querySelector('select')
// select.addEventListener('change', showInput)
// select.addEventListener('input', showInput)

// *Submit event
// let form = document.querySelector('form')
// form.addEventListener('submit', showInput)

// function showInput(e) {
//     e.preventDefault()
// console.log(`Type: ${e.type}`)
// console.log(`Type: ${e.target.value}`)
// document.querySelector('#output').innerText = `${e.target.value}`
// }

// ^ CLASS 04 ^ //

let itemList = document.querySelector('#items');
let form = document.querySelector('#addForm');
form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem)

function addItem(e) {
    e.preventDefault();

    // Capture the input
    if(!document.querySelector('#item').value) return;
    let newItem = document.createTextNode(document.querySelector('#item').value);
    // console.log(document.querySelector('#item').value)

    // Adding the input as a list
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(newItem);

    // Add the delete button to the newly added list item
    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'))
    li.appendChild(deleteButton);

    itemList.appendChild(li);
    document.querySelector('#item').value = ''
}

function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}