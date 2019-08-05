import React from 'react';

class ChannelList extends React.Component {
  render() {

    const channelLis = this.props.channels.map(channel => {
    	return <li>{channel}</li>
    })

    return (
      <ul>
      {channelLis}
      </ul>
    )
  }
}

export default ChannelList;
