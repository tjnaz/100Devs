const inputItem = document.querySelector("#item");
const submitItem = document.querySelector("#addForm");
const items = document.querySelector("#items");
const searchItem = document.querySelector("#filter");
//
submitItem.addEventListener("submit", addItem);
items.addEventListener("click", deleteItem);
searchItem.addEventListener("keyup", filterItem);
//
function addItem(e) {
    e.preventDefault();
    if (inputItem.value === "") return;
    //
    const li = document.createElement("li");
    const newItem = document.createTextNode(inputItem.value);
    const deleteButton = document.createElement("button");
    //
    li.className = "list-group-item";
    li.appendChild(newItem);
    //
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    li.appendChild(deleteButton);
    items.appendChild(li);
    inputItem.value = "";
}

function deleteItem(e) {
    if (e.target.classList.contains("delete")) {
        let li = e.target.parentElement;
        items.removeChild(li);
    }
}

function filterItem(e) {
    let listItems = document.querySelectorAll("li");
    let searchText = e.target.value.toLowerCase();
    listItems.forEach((item) => {
        let itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(searchText) === -1) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    });
}
