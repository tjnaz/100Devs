//Example fetch using pokemonapi.co
//document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = "https://pokeapi.co/api/v2/pokemon/" + choice;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

let apiURL = "http://api.alquran.cloud/v1/surah";

document
  .querySelector("select[name='verse']")
  .addEventListener("change", showAyah);

document
  .querySelector("select[name='chapter']")
  .addEventListener("change", getAyah);

function getAyah(chapter) {
  chapter = document.querySelector("select[name='chapter']").value;
  document.querySelector("select[name='verse']").innerHTML =
    '<option value=default">Select an Ayah</option>';
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      let numberOfAyahs = data.data[chapter - 1].numberOfAyahs;
      for (let i = 1; i <= numberOfAyahs; i++) {
        document.querySelector(
          "select[name='verse']"
        ).innerHTML += `<option value=${i}>${i}</option>`;
      }
    });
}

function showAyah(chapter, ayah) {
  chapter = document.querySelector("select[name='chapter']").value;
  ayah = document.querySelector("select[name='verse']").value;
  console.log(`${chapter} | ${ayah}`);
}

fetch(`${apiURL}`)
  .then((res) => res.json())
  .then((data) => {
    let surahs = data.data;
    surahs.forEach((item) => {
      //console.log(item.number);
      document.querySelector(
        "select"
      ).innerHTML += `<option value="${item.number}">${item.number} - ${item.englishName}</option>`;
    });
    //console.log(data.data[0]);
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
