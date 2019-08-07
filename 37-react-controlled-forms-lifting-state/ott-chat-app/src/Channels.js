import React from "react";

class Channels extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newChannel: ''
    }
  }

  handleClick = () => {
    this.props.onNewChannel(this.state.newChannel)
  }

  handleChange = (e) => {
    this.setState({newChannel: e.target.value})
  }

  handleChannelButtonClick = (e) => {
    this.props.onChangeChannel(e.target.id)
  }

  render() {
    const channelLis = this.props.channels.map((channelName, index) => {
      return (
        <li key={index}>
          <button id={channelName} onClick={this.handleChannelButtonClick}>{channelName}</button>
        </li>
      );
    });


    return (
      <div className="navigation_channels_list">
        <h2>Channels</h2>
        <input
          value={this.state.newChannel}
          onChange={this.handleChange}
          type="text"
          placeholder="New channel name" />
        <button onClick={this.handleClick}>+</button>
        <ul>
          {channelLis}
        </ul>
      </div>
    );
  }
}

export default Channels;
