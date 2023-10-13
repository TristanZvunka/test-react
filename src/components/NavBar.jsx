import { useState } from "react";

function Buttons({ pokemonIndex, setPokemonIndex }) {
  function Go() {
    setPokemonIndex(pokemonIndex + 1);
  }

  function Back() {
    setPokemonIndex(pokemonIndex - 1);
  }

  return (
    <div>
      {pokemonIndex > 0 ? <button onClick={Back}> Précédent </button> : ""}
      {pokemonIndex < 5 - 1 ? <button onClick={Go}> Suivant </button> : ""}
    </div>
  );
}

export default Buttons;
