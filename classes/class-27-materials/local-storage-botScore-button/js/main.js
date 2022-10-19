//Create a button that adds 1 to a botScore stored in localStorage
//Example fetch using pokemonapi.co
console.log(localStorage.getItem("botScore"));
if (!localStorage.getItem("botScore")) {
  localStorage.setItem("botScore", 0);
}
document.querySelector("button").addEventListener("click", addAnotherOne);

function addAnotherOne() {
  //
  // const userInput = document.querySelector("input").value;

  let botScoreVal = Number(localStorage.getItem("botScore"));
  botScoreVal += 1;
  localStorage.setItem("botScore", botScoreVal);

  document.querySelector("h3").innerText = botScoreVal;
  // const url = "";
  /*
//GET https://pokeapi.co/api/v2/pokemon/pikachu/
GET https://api.nasa.gov/planetary/apod?api_key=ynPctnivjhWbvcENN5d4rTMQkg7KwBw70rbnqRLs
  */
  /* fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    }); */
}
document.querySelector("h3").innerText = localStorage.getItem("botScore");

/*
// GET https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
GET https://deckofcardsapi.com/api/deck/wv63iqkzrrsa/draw/?count=2
*/
