//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const date = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=PnDnUxGaWcqdrmJ9yCYGUenOUxYnDbVeOGTMwx5y&date=${date}`;
  console.log(url);
  /*
//GET https://pokeapi.co/api/v2/pokemon/pikachu/
GET https://api.nasa.gov/planetary/apod?api_key=ynPctnivjhWbvcENN5d4rTMQkg7KwBw70rbnqRLs
  */
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector(".image").src = data.url;
      document.querySelector(
        ".explanation"
      ).innerHTML += `<h2>DESCRIPTION</h2>`;
      document.querySelector(
        ".explanation"
      ).innerHTML += `<p>${data.explanation}</p>`;
      console.log(data.explanation);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
