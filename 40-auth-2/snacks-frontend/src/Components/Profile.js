import React, { Component } from 'react';

class Profile extends Component {
  state={
    user_snacks: []
  }

  componentDidMount() {
    let token = localStorage.token
    fetch(`http://localhost:3000/users/${this.props.id}`, {
      headers: {
        "Authorization": token
      }
    })
    .then(res => res.json())
    .then(userData => {
      this.setState({
        user_snacks: userData.snacks
      })
    })
  }

  render() {
    return (
      <div>
        Welcome {this.props.username}!
        <ul>
          {this.state.user_snacks.map(snack => <li key={snack.id}>{snack.name}</li>)}
        </ul>
      </div>
    );
  }

}

export default Profile;
