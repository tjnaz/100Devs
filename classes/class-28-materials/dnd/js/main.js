//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  document.getElementById("ul").innerHTML = "";
  const choice = document.querySelector("input").value.toLowerCase();
  let urlFriendly = choice.split(" ").join("-");
  const url = `https://www.dnd5eapi.co/api/spells/${urlFriendly}`;
  console.log(url);
  /*
GET https://www.dnd5eapi.co/api/spells/beacon-of-hope
  */
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      data.subclasses.forEach((obj) => {
        console.log(obj.name);
        // create an li
        const li = document.createElement("li");
        // add text to li
        li.textContent = obj.name;
        // append the li to the ul
        document.querySelector("ul").appendChild(li);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
