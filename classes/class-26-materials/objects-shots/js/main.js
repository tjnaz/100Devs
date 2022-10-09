//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.drinks);
    document.querySelector("h3").innerHTML = data.drinks[0].strDrink;
    document.querySelector("img").src = `${data.drinks[0].strDrinkThumb}`;
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
