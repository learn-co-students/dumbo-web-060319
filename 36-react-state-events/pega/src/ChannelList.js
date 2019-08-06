import React from 'react';

// <ChannelList channels={['#fish', '#food']} />
// new ChannelList({channels: ['#fish', '#food']})

class ChannelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: props.channels
    }
  }

  // state = {
  //   channels: []
  // }

  handleClick = () => {
    // this.state.channels.push('#cats-only')
    console.log(this)
    const updatedChannels = [...this.state.channels, '#cats-only']
    this.setState({channels: updatedChannels})
  }


  render() {
    console.log('im the ChannelList and this is my current State: ', this.state)
    const channels = this.state.channels.map(channel => {
    	return <li key={channel}>{channel}</li>
    })

    return (
      <div>
        <p>Channels</p>
        <button onClick={this.handleClick}>+</button>
        <ul>
        {channels}
        </ul>
      </div>
    )
  }
}

export default ChannelList;
