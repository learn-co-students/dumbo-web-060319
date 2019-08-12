import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
    // this.setState((prevState) => {
    //  return {clicked: !prevState.clicked}
    // }, () => {
    // console.log(this.state.clicked);
    // })
  }

  whichURLtoRender = () => {
    if (this.state.clicked) {
      return this.props.pokemon.sprites.back
    } else {
      return this.props.pokemon.sprites.front
    }
  }

  render() {
    let {name, height, sprites, stats} = this.props.pokemon
    let hpObject = stats.find(statObject => statObject.name === "hp")
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src={
              this.state.clicked
                ?
              this.props.pokemon.sprites.back
                :
              this.props.pokemon.sprites.front
              }/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpObject.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
