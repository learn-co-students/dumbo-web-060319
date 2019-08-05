import React from "react";
import Profile from "./Profile";
import Channels from "./Channels";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <h3>Hi, I'm the Sidebar Component!</h3>
        <Profile user={this.props.user} />
        <Channels channels={this.props.channels} />
      </div>
    );
  }
}

export default Sidebar;
