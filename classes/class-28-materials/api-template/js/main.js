document.querySelector("button").addEventListener("click", getFetch);
const ul = document.querySelector(".details");

if (!localStorage.getItem("books")) {
  let warn = document.createElement("h2");
  warn.innerText = "No books in the bucket :(";
  document.querySelector("body").appendChild(warn);
} else {
  let currentBooks = localStorage.getItem("books").split(";");
  currentBooks.forEach((book) => {
    const li = document.createElement("li");
    li.innerText = book;
    ul.appendChild(li);
  });
}
function getFetch() {
  document.querySelector("ul").innerHTML = "";
  const choice = document.querySelector("input").value;
  console.log(choice);

  if (choice == "") {
    alert("You must enter a valid ISBN to get a book you goofus!");
  } else {
    const url = `https://openlibrary.org/isbn/${choice}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.title);

        if (!localStorage.getItem("books")) {
          localStorage.setItem("books", data.title);
          let currentBooks = localStorage.getItem("books").split(";");
          currentBooks.forEach((book) => {
            const li = document.createElement("li");
            li.innerText = book;
            ul.appendChild(li);
          });
        } else {
          let books = localStorage.getItem("books") + "; " + data.title;
          localStorage.setItem("books", books);
          let currentBooks = localStorage.getItem("books").split(";");
          currentBooks.forEach((book) => {
            const li = document.createElement("li");
            li.innerText = book;
            ul.appendChild(li);
          });
        }
      });
  }
}
