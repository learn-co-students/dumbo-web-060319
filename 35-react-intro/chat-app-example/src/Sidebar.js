import React from 'react';
import Profile from './Profile'
import ChannelList from './ChannelList'

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        Hello from the sidebar!!!
        <Profile user={this.props.user}/>
        <ChannelList channels={this.props.channels}/>
      </div>
    )
  }
}

export default Sidebar;
