const imgRandom = document.getElementById("imgRandom");
const imgDog = document.getElementById("imgDog");
const divJoke = document.getElementById("divJoke");

const form = document.getElementById("genderForm");
const list = document.getElementById("genderData");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.input.value;
  loadGender(name);

  event.target.input.value = "";
});

async function loadGender(name) {
  try {
    const res = await fetch(`https://api.genderizeio/?name=${name}`);
    if (!res.ok){
        throw new Error ("Что-то сломалось")
    }
    const resObj = await res.json();
    const liGender = document.createElement("li");
    liGender.innerText = `Gender of ${resObj.name} is ${resObj.gender}`;
    list.append(liGender);
  } catch (error) {
    console.error(error.message);
    const el = document.createElement("h1")
    el.innerText = error.message;
    document.body.append(error.message);
  }
}

fetch("https://picsum.photos/200/200").then(
  (image) => (imgRandom.src = image.url)
);

async function dogPhoto() {
  const dogLink = await fetch("https://dog.ceo/api/breeds/image/random");
  const dogObj = await dogLink.json();
  imgDog.src = dogObj.message;
}

dogPhoto();

async function getJoke() {
  const jokeLink = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const jokeObj = await jokeLink.json();

  let joke = document.createElement("p");
  joke.innerText = jokeObj.setup;
  divJoke.appendChild(joke);

  // console.log(jokeObj);
}

getJoke();
