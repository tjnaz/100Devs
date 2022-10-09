//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(
      ".photos"
    ).innerHTML = `<img src='${data.message}' />`;
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
