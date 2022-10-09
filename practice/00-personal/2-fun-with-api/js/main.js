//Example fetch using pokemonapi.co
//document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = "https://pokeapi.co/api/v2/pokemon/" + choice;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

let chapter = 2;
let ayahN = 255;
let apiURL = "http://api.alquran.cloud/v1/surah";

fetch(`${apiURL}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data.length);
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
