import { useState } from "react";


function Buttons({pokemonList, pokemonIndex, setPokemonIndex}) {
  return (
    <div>
    { pokemonList.map((pokemon, index) => (
      ( <button key={index} onClick={() => setPokemonIndex(index)}> {pokemon.name}</button>)
    
  
  ))}
</div>
  )
}

export default Buttons;
