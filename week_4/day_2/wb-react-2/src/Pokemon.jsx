import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [numPokemon, setNumPokemon] = useState(props.num)

  // console.log(props)

  // useEffect(() => {
  //     axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${props.num}`)
  //     .then((res) => {
  //       // console.log(res.data)
  //       setPokemon(res.data.results)
  //     })
  // }, [])

  useEffect(() => {
    const getPokemon = async () => {
      let arrayOfPokemon = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`
      );

      setPokemon(arrayOfPokemon.data.results);
    };

    getPokemon();
  }, [numPokemon]);

  const pokemonList = pokemon.map((poke) => (
    <li key={poke.name}>{poke.name}</li>
  ));

  return (

    <>
    <input type="number" onChange={(e)=>{
      setNumPokemon(e.target.value)}
      } />

    <ul>
      {pokemonList}
    </ul>
    </>
  );
};

export default Pokemon;
