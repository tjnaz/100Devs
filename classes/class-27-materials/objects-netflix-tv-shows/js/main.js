//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class CreateNetflixTVShow {
  constructor(name, numberOfSeasons, genre, isAgeRestricted) {
    this.name = name;
    this.numberOfSeasons = numberOfSeasons;
    this.isAgeRestricted = isAgeRestricted;
  }
  play() {
    console.log("Playing...");
  }
  stop() {
    console.log("Stopping...");
  }
  addToFavorites() {
    console.log("Adding to the favorite list....");
  }
}

let firefly = new CreateNetflixTVShow(
  "Firefly",
  "Space Cowboys",
  "100%",
  false
);

console.log(firefly);
