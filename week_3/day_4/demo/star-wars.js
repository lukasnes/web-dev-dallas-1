import axios from "axios";

const episodeNum = Math.floor(Math.random() * 6)

console.log(episodeNum)

axios.get('https://swapi.dev/api/films/')
    .then(res => {
    let movieTitle = res.data.results[episodeNum].title
    document.querySelector('#star-wars-movie').innerText = movieTitle
})