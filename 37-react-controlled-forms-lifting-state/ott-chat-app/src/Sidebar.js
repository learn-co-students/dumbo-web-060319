import React from 'react';
import Profile from './Profile'
import Channels from './Channels'

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <Profile user={this.props.user}/>
        <Channels
            onNewChannel={this.props.onNewChannel}
            onChangeChannel={this.props.onChangeChannel}
            channels={this.props.channels}/>
      </div>
    )
  }
}

export default Sidebar;
