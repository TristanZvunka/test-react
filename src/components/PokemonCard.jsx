import PropTypes from "prop-types"

function PokemonCard(pokemon){
const {name, img}= pokemon;
      return <figure>
        { img != undefined ? <img src={img}/> : <p> ??? </p> }
        <figcaption> {name} </figcaption>
    </figure>};
    
    PokemonCard.propTypes= {
      pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isOptional,

      })

    }
   
  export default PokemonCard;