const imgRandom = document.getElementById("imgRandom");
const imgDog = document.getElementById("imgDog");
const divJoke = document.getElementById("divJoke");


fetch("https://picsum.photos/200/200")
    .then(image => imgRandom.src = image.url);

async function dogPhoto() {
    const dogLink = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogObj = await dogLink.json();
    imgDog.src = dogObj.message;
}

dogPhoto();

async function getJoke(){
    const jokeLink = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jokeObj = await jokeLink.json();
    
    let joke = document.createElement("p")
    joke.innerText = jokeObj.setup;
    divJoke.appendChild(joke);
    
    console.log(jokeObj);
}

getJoke();