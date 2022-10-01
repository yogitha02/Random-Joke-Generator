const jokeEl = document.getElementById("joke"); // div id = joke
const get_joke = document.getElementById("get_joke"); // button id = get_joke
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
get_joke.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke() {
  // async makes a function return a Promise
  // call the icanhaz API
  var loading = document.getElementById("loading");
  loading.style.visibility = "visible";
  const jokeRes = await fetch("https://icanhazdadjoke.com/", {
    // await makes a function wait for a Promise
    headers: {
      Accept: "application/json",
    },
  });

  const joke = await jokeRes.json(); // save
  loading.style.visibility = "hidden";

  jokeEl.innerHTML = joke.joke;
}
toggle.addEventListener("click", () => {
  body.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "far fa-moon")
    : (toggle.firstElementChild.className = "far fa-sun");
});
