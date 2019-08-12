import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  returnAnArrayOfComponents = () => {
    return this.props.pokemonList.map(pokemon => (<PokemonCard />))
  }

  render() {
    return(
      <Card.Group itemsPerRow={6}>
        {
          this.props.pokemonList.map(pokemon => (<PokemonCard pokemon={pokemon} key={pokemon.id}/>))
        }
      </Card.Group>
    )
  }
}

export default PokemonCollection
