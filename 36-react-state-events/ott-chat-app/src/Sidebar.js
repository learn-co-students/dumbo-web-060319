import React from "react";
import Profile from "./Profile";
import Channels from "./Channels";

class Sidebar extends React.Component {
  render() {
    const channelNames = this.props.channels.map(channel => channel.name)
    return (
      <div>
        <Profile user={this.props.user} />
        <Channels channelNames={channelNames} />
      </div>
    );
  }
}

export default Sidebar;
