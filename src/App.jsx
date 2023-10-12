import PokemonCard from "./components/PokemonCard.jsx"
import { useState } from "react";






function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

function Go(){
  setPokemonIndex(pokemonIndex + 1 )
}

function Back(){
  setPokemonIndex(pokemonIndex - 1)
}

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];


  return (
    <div>
      <PokemonCard name={pokemonList[pokemonIndex].name} img={pokemonList[pokemonIndex].imgSrc}/>
      <div className="container">
      { pokemonIndex > 0 ? <button onClick={Back}> Précédent </button> : "" }
      { pokemonIndex < pokemonList.length - 1 ? <button onClick={Go}> Suivant </button> : "" }
      </div>
    </div>
  );

}

export default App;