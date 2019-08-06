import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.user.profile_picture} />
        <h3>{this.props.user.username}</h3>
      </div>
    );
  }
}

export default Profile;
