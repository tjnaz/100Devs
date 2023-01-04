// variables
//you are getting ready to face brock for the boulder badge. you want three pokemon on your team that each have evolved at least once. you have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). finally, create a fourth variable named totalcandies that sums all the rare candies you would need.
let bulbasaurCandiesToEvolve = 16 - 5;
let caterpieCandiesToEvolve = 7 - 1;
let weedleCandiesToEvolve = 7 - 1;

let totalCandies = bulbasaurCandiesToEvolve + caterpieCandiesToEvolve +
  weedleCandiesToEvolve;

console.log(`Total Candies: ${totalCandies}`);

//conditionals and functions
//you have a charmander in your party. charmander can only battle if the temperature is above 0 degrees celcius. create one function that converts a fahrenheit value to celcius and another fuction that tells you wheither or not charmander can battle
function convertFahrenheitToCelcius(fahrenheit) {
  let celcius = Math.floor((fahrenheit - 32) * (5 / 9), 2);

  return celcius;
}

let fahrenheit = 103;

console.log(
  `Fahrenheit: ${fahrenheit} -> Celcius: ${
    convertFahrenheitToCelcius(
      fahrenheit,
    )
  }`,
);

//loops
//you have joined an undeground pokemon leauge. in this league, trainers can use any number of pokemon. print to the console "pikachu i choose you" x times where x is the number of pokemon the trainer you are battling has in their party
