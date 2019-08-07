import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Ott Chat</h1>
        <img src={this.props.user.profile_picture} alt="otter profile pic" />
        <h4>{this.props.user.username}</h4>
      </div>
    )
  }
}

export default Profile;
