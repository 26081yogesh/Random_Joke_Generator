// HTML Components
const jokePara = document.querySelector("#joke");
const btn = document.querySelector(".btn");

// URL
const URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

btn.addEventListener("click", () => {
  fetch(URL)
    .then((respones) => {
      return respones.json();
    })
    .then((data) => {
      jokePara.innerHTML = data.joke;
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });
});
