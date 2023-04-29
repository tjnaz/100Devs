document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;
  // const img = `.official-artwork.front_default`;

  fetch(url)
    .then((res) => res.json()) // parse response as J Shaun

    .then((data) => {
      // console.log(data.name);
      // console.log(data.height);
      // console.log(data.weight);
      // // console.log(data.types[0].type.name);
      // console.log(data.sprites.other["official-artwork"].front_default);
      // console.log(data.sprites.other.dream_world.front_default);

      const potentialPet = new Poke(
        data.name,
        data.height,
        data.weight,
        data.types,
        // data.types[0].type.name,
        data.sprites.other["official-artwork"].front_default
      );

      potentialPet.getTypes();
      potentialPet.isItAHousePet();

      if (!potentialPet.isHousePet) {
        console.log("can't be a pet cuz:");
        for (const prop of potentialPet.reason) {
          console.log(prop);
        }
      }
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
    let badTypes = ["fire", "electric", "fighting", "poison", "ghost"];

    if (this.convertToKG(this.weight) > 150) {
      this.isHousePet = false;
      this.reason.push(`it's too heavy at ${this.convertToKG(this.weight)}KGs`);
    }

    if (this.convertToM(this.height) > 150) {
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
