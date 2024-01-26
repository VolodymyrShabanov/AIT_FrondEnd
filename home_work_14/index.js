const poster = document.getElementById("poster");

async function getAnime(){
    const anime = await fetch("https://volodymyrshabanov.github.io/Front_end_HW_14/anime.json");
    const animeObj = await anime.json();

    poster.src = animeObj.poster;

}

getAnime();