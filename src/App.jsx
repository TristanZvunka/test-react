import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar.jsx";
import { useState } from "react";

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

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        img={pokemonList[pokemonIndex].imgSrc}
      />
      <NavBar 
      pokemonList={pokemonList} 
      pokemonIndex={pokemonIndex}
      setPokemonIndex={setPokemonIndex}/>
    </div>
  );
}

export default App;
