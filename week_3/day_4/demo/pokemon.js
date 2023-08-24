import axios from 'axios'

let getPokemon = () => {
    const numPokemon = document.querySelector('#num-pokemon').value
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=' + numPokemon

    axios.get(url)
        .then(res => {
            let pokemonList = ""
            console.log(res.data.results)
            for (const pokemon of res.data.results){
                pokemonList += `<li>${pokemon.name}</li>`
            }
            console.log(pokemonList)
            document.querySelector('#pokemon-list').innerHTML = pokemonList
        })
        .catch(err => console.log(err))

    console.log(url)
}

const button = document.querySelector('#get-pokemon')
button.addEventListener('click', getPokemon)