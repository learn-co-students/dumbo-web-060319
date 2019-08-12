import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  //ADDED
  // The purpose of this function is to control our form with our state
  // evt.target.name is the name of our input fields and they match the keys in our state.
  handleChange = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }

  //ADDED
  // The purpose of this function is to post the information in our form (according to how the database is structured)
  // And with the response, invoke the props function of `addPokemon`, that will alter our state, which will change our DOM
  handleSubmit = (evt) => {
    evt.preventDefault()
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        stats: [{value: this.state.hp, name: "hp"}],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(newPokemon => {
      this.props.addPokemon(newPokemon)
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
