const listItems = document.querySelector("#items");
const item = document.querySelector("#item");
const submitBtn = document.querySelector("#addForm");
let filter = document.querySelector("#filter");
// --------- //
submitBtn.addEventListener("submit", addItem);
listItems.addEventListener("click", deleteItem);
filter.addEventListener("keyup", filterItem);

function addItem(e) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const newItem = document.createTextNode(item.value);
    // --------- //
    e.preventDefault();
    if (!item.value) return;
    // --------- //
    li.className = "list-group-item";
    li.appendChild(newItem);
    // --------- //
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    deleteButton.appendChild(document.createTextNode("X"));
    li.appendChild(deleteButton);
    // --------- //
    listItems.appendChild(li);
    // --------- //
    // --------- //
    item.value = "";
}

function deleteItem(e) {
    if (e.target.classList.contains("delete")) {
        const li = e.target.parentElement;
        listItems.removeChild(li);
    }
}

function filterItem(e) {
    let items = document.querySelectorAll("li");
    let searchText = e.target.value.toLowerCase();

    items.forEach((item) => {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(searchText) === -1) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    });
}
