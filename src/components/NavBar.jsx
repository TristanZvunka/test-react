import { useState } from "react";


function Buttons({pokemonList, pokemonIndex, setPokemonIndex, name}) {
  return (
    <div>
    { pokemonList.map((pokemon, index) => (
      ( <button key={index} onClick={() => setPokemonIndex(index)} onChange={name == "pikachu" ? alert("pika, pikachu !"): ""}> {pokemon.name}</button>)
    
  
  ))}
</div>
  )
}

export default Buttons;
