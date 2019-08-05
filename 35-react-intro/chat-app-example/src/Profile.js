import React from 'react';

class Profile extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Pega</h1>
        <img src={this.props.user.profile_picture} />
        <h4>{this.props.user.username}</h4>
      </div>
    )
  }
}

export default Profile;
