import React, { Component } from 'react';

class Profile extends Component {

  render() {
    return (
      <div>
        Welcome {this.props.username}!
      </div>
    );
  }

}

export default Profile;
