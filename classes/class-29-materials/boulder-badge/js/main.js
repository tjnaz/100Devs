// variables
//you are getting ready to face brock for the boulder badge. you want three pokemon on your team that each have evolved at least once. you have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). finally, create a fourth variable named totalcandies that sums all the rare candies you would need.

let bulbasaur = 9;
let caterpie = 6;
let weedle = 6;

let totalcandies = bulbasaur + caterpie + weedle;

console.log(totalcandies);

//conditionals and functions
//you have a charmander in your party. charmander can only battle if the temperature is above 0 degrees celcius. create one function that converts a fahrenheit value to celcius and another fuction that tells you wheither or not charmander can battle

function fahrenheittocelcius(temperature) {
  let convertedtocel = ((temperature - 32) * 5) / 9;
  return convertedtocel;
}

function canCharmanderbattle(currenttemp) {
  let converted = fahrenheittocelcius(currenttemp);

  if (converted > 0) {
    console.log("charmander can battle!");
  } else {
    console.log("charmander can not battle :(");
  }
}

canCharmanderbattle(-30);

//loops
//you have joined an undeground pokemon leauge. in this league, trainers can use any number of pokemon. print to the console "pikachu i choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function undegroundPokemonLeague(partySize) {
  for (let i = 1; i <= partySize; i++) {
    console.log("Pikachu I choose you!");
  }
}

undegroundPokemonLeague(6);
