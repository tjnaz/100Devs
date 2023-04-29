document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;
  // const img = `.official-artwork.front_default`;

  fetch(url)
    .then((res) => res.json()) // parse response as J Shaun

    .then((data) => {
      console.log(data.sprites.other["official-artwork"].front_default);
      console.log(data.sprites.other.dream_world.front_default);
      const potentialPet = new Poke(
        data.name,
        data.height,
        data.weight,
        data.types,
        data.sprites
      );
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
