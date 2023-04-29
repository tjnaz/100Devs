document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document
    .querySelector("input")
    .value.replaceAll(" ", "-")
    .replaceAll(".", "");
  const url = `https://pokeapi.co/api/v2/pokemon/${choice.toLowerCase()}`;

  fetch(url)
    .then((res) => res.json()) // parse response as J Shaun
    .then((data) => {
      const potentialPet = new Poke(
        data.name,
        data.height,
        data.weight,
        data.types,
        data.sprites.other["official-artwork"].front_default
      );

      potentialPet.getTypes();
      potentialPet.isItAHousePet();

      let decision = "";
      if (!potentialPet.isHousePet) {
        decision = `${choice} would probably not be a good pet because ${potentialPet.reason.join(
          " and "
        )}`;
      } else {
        decision = `${choice} is small enough, light enough and safe enough to be a good house pet!!`;
      }
      document.querySelector("h2").innerText = decision;
      document.querySelector("img").src = potentialPet.image;
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
    this.isHousePet = true;
    this.reason = [];
    this.typeList = [];
  }

  getTypes() {
    for (const prop of this.types) {
      this.typeList.push(prop.type.name);
    }
  }

  convertToKG(weight) {
    return weight / 10;
  }

  convertToM(height) {
    return height / 10;
  }

  isItAHousePet() {
    // check height, weight, and types
    let badTypes = [
      "fire",
      "electric",
      "fighting",
      "poison",
      "ghost",
      "psychic",
    ];

    if (this.convertToKG(this.weight) > 150) {
      this.isHousePet = false;
      this.reason.push(`it's too heavy at ${this.convertToKG(this.weight)}KGs`);
    }

    if (this.convertToM(this.height) > 2) {
      this.isHousePet = false;
      this.reason.push(`it's too tall at ${this.convertToM(this.height)}M`);
    }

    for (const prop of this.typeList) {
      if (badTypes.includes(prop)) {
        this.isHousePet = false;
        this.reason.push(`it is a ${prop} type`);
      }
    }
  }
}

/*
GET https://pokeapi.co/api/v2/pokemon/pikachu
*/
/*
GET https://pokeapi.co/api/v2/pokemon/25/encounters
*/

class PokeInfo extends Poke {
  constructor(name, height, weight, types, image, location) {
    super(name, height, weight, types, image);
    this.locationURL = locations;
    this.locationList = [];
    this.locationString = "";
  }

  encounterInfo() {
    fetch(this.locationURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  }
}
