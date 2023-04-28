document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as J Shaun

    .then((data) => {
      console.log(data);
      const potentialPet = new Poke();
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}

class Poke {
  constructor(name, height, weight, types, image) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.types = types;
    this.image = image;
  }
}

/*
GET https://pokeapi.co/api/v2/pokemon/pikachu
*/
