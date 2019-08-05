import React from "react";

class Channels extends React.Component {
  render() {
    const channelLis = this.props.channels.map(channel => {
      return <li>{channel.name}</li>;
    });

    return (
      <div>
        <ul>{channelLis}</ul>
      </div>
    );
  }
}

export default Channels;
