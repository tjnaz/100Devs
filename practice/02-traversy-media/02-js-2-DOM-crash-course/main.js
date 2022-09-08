// * textContent vs innerText

const items = document.getElementsByClassName("list-group-item")

console.log(items[0])

items[1].style.backgroundColor = '#f4f4f4'

console.log(items[3].textContent)

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4'
}