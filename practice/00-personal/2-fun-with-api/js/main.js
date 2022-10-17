//Example fetch using pokemonapi.co
//document.querySelector("button").addEventListener("click", getFetch);
//function _getFetch() {
//  const choice = document.querySelector("input").value;
//  const url = "https://pokeapi.co/api/v2/pokemon/" + choice;
//
//  fetch(url)
//    .then((res) => res.json()) // parse response as JSON
//    .then((data) => {
//      console.log(data);
//    })
//    .catch((err) => {
//      console.log(`error ${err}`);
//    });
//}

const apiURL = "http://api.alquran.cloud/v1/surah";

fetch(`${apiURL}`)
  .then((res) => res.json())
  .then((data) => {
    const surahs = data.data;
    surahs.forEach((item) => {
      document.querySelector(
        "select"
      ).innerHTML += `<option value="${item.number}">${item.number} - ${item.englishName}</option>`;
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`);
    console.log("yeah?");
    console.log("hello?");
  });

document
  .querySelector("select[name='chapter']")
  .addEventListener("change", getAyah);
document
  .querySelector("select[name='verse']")
  .addEventListener("change", showAyah);

function getAyah(chapter) {
  chapter = document.querySelector("select[name='chapter']").value;
  document.querySelector("select[name='verse']").innerHTML =
    '<option value=default">Select an Ayah</option>';
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      const numberOfAyahs = data.data[chapter - 1].numberOfAyahs;
      for (let i = 1; i <= numberOfAyahs; i++) {
        document.querySelector(
          "select[name='verse']"
        ).innerHTML += `<option value=${i}>${i}</option>`;
      }
    });
}

function showAyah(chapter) {
  chapter = document.querySelector("select[name='chapter']").value;
  verse = document.querySelector("select[name='verse']").value;
  console.log(`${chapter} | ${verse}`);
  const fetchAPI = `http://api.alquran.cloud/v1/ayah/${chapter}:${verse}/editions/quran-simple,en.sahih`;
  fetch(fetchAPI)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data[0].text);
      const arabicText = data.data[0].text;
      const englishText = data.data[1].text;
      document.querySelector(".arabic").innerHTML = `<p>${arabicText}</p>`;
      document.querySelector(".english").innerHTML = `<p>${englishText}</p>`;
    });
}
