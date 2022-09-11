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

const button = document.getElementById('button').addEventListener('click', buttonClick)

function buttonClick(e) {
    document.getElementById('header-title').textContent = 'Changed!'
    document.querySelector('#main').style.backgroundColor = '#f4f4f4'
    // console.log(e.target)
}