import PokemonCard from "./components/PokemonCard.jsx"

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ]

  return (
    <div>
      <PokemonCard pokemon={pokemonList[0].name} img={pokemonList[0].imgSrc}/>
    </div>
  );

}

export default App;