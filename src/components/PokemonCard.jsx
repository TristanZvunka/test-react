function PokemonCard(props){
  const {pokemon, img} = props;

    return <figure>
        { img != undefined ? <img src={img}/> : <p> ??? </p> }
        <figcaption> {pokemon} </figcaption>
    </figure>};
 
export default PokemonCard;