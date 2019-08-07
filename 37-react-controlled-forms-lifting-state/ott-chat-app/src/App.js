import React from 'react';
import Sidebar from './Sidebar'
import Chat from './Chat'
import './App.css'
import initialAppData from "./data";

class App extends React.Component {

  state = {
    channels: initialAppData.channels,
    currentChannel: initialAppData.channels[3]
  }

  handleMessage = (newMessage) => {
    const newMessageObj = {
      user: initialAppData.current_user,
      content: {
        id: null,
        sent: "some-date",
        text: newMessage
      }
    }
    const updatedChannel = {...this.state.currentChannel}
    updatedChannel.messages.push(newMessageObj)

    this.setState({ currentChannel: updatedChannel })

  }

  handleChangeChannel = (channelName) => {
    const newChannel = this.state.channels.find(channel => channel.name === channelName)
    this.setState({ currentChannel: newChannel })
  }

  handleNewChannel = (newChannelName) => {

    const newChannel = {
      name: `#${newChannelName}`,
      messages: []
    }

    this.setState({ channels: [...this.state.channels, newChannel]})
  }

  render() {
    const channelNames = this.state.channels.map(channel => {
      return channel.name
    })

    return (
      <div className="grid-container">
        <Sidebar
            onNewChannel={this.handleNewChannel}
            onChangeChannel={this.handleChangeChannel}
            user={initialAppData.current_user}
            channels={channelNames} />
        <Chat
          onNewMessage={this.handleMessage}
          channel={this.state.currentChannel} />
      </div>
    );
  }
}

export default App;
